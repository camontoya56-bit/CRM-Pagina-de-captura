
/**
 * Serverless function for Node.js (Vercel/Netlify compatible)
 * Note: In a real environment, this file should be in the /api directory.
 */

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, whatsapp } = req.body;
  const SYSTEME_API_KEY = process.env.SYSTEME_API_KEY;
  const TAG_ID = process.env.SYSTEME_TAG_ID;

  if (!SYSTEME_API_KEY || !TAG_ID) {
    console.error('Missing environment variables');
    return res.status(500).json({ message: 'Configuración del servidor incompleta.' });
  }

  const BASE_URL = 'https://api.systeme.io/api/v1';
  const headers = {
    'x-api-key': SYSTEME_API_KEY,
    'Content-Type': 'application/json',
  };

  try {
    // 1. SEARCH: Check if contact exists
    const searchRes = await fetch(`${BASE_URL}/contacts?email=${encodeURIComponent(email)}`, { headers });
    const searchData = await searchRes.json();
    
    let contactId: number | string | null = null;
    const existingContact = searchData.items && searchData.items.length > 0 ? searchData.items[0] : null;

    if (existingContact) {
      // CASE B: Update existing contact
      contactId = existingContact.id;
      await fetch(`${BASE_URL}/contacts/${contactId}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
          email,
          first_name: name,
          fields: [
            { slug: 'phone_number', value: whatsapp }
          ]
        }),
      });
    } else {
      // CASE A: Create new contact
      const createRes = await fetch(`${BASE_URL}/contacts`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email,
          first_name: name,
          fields: [
            { slug: 'phone_number', value: whatsapp }
          ]
        }),
      });
      const newData = await createRes.json();
      if (!createRes.ok) throw new Error(newData.message || 'Error creating contact');
      contactId = newData.id;
    }

    // 2. TAGGING: Assign the configured tag
    if (contactId) {
      const tagRes = await fetch(`${BASE_URL}/contacts/${contactId}/tags`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ tagId: parseInt(TAG_ID) }),
      });
      
      if (!tagRes.ok) {
        const tagError = await tagRes.json();
        console.warn('Failed to apply tag:', tagError);
        // We continue anyway since the lead was created
      }
    }

    return res.status(200).json({ success: true, message: 'Lead procesado correctamente.' });

  } catch (error: any) {
    console.error('Systeme.io Integration Error:', error);
    return res.status(500).json({ 
      message: 'Hubo un problema al conectar con el servicio de correo.',
      error: error.message 
    });
  }
}
