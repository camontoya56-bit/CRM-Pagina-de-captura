
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/gracias');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al procesar el registro.');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: Above the Fold (Dark) */}
      <section className="bg-[#1a0b2e] text-white py-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <span className="text-pink-400 font-semibold tracking-widest uppercase text-sm mb-4 block">
            Acompañamos tus mejores recuerdos
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Tu vida en una canción
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto">
            Descubre cómo hay momentos que no se olvidan. Algunos merecen una canción.
          </p>
          <a href="#form" className="mt-10 inline-block bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl">
            SABER MÁS
          </a>
        </div>
      </section>

      {/* SECTION 2: Emotional Connection (Light) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a0b2e] mb-8 text-center">Conexión Emocional</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Si eres de las personas que valoran lo simbólico, seguramente sabes lo frustrante que es que haya momentos que no se olvidan, pero que el tiempo parece diluir.</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#7b2cbf]">
                <li>Adultos 30–65 años</li>
                <li>Familias unidas</li>
                <li>Parejas celebrando amor</li>
                <li>Empresas que honran su legado</li>
              </ul>
              <p className="font-semibold italic">Has probado diferentes métodos, has invertido tiempo y energía, pero los resultados no llegan como esperabas.</p>
              <p className="text-lg text-[#1a0b2e] font-bold">¿Y si te dijera que existe una forma más inteligente de hacerlo?</p>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
               <img src="https://picsum.photos/seed/music/600/400" alt="Emoción" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Problem (Lila Soft) */}
      <section className="bg-[#f5f0ff] py-20 px-6 border-y border-purple-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#7b2cbf] mb-6">EL PROBLEMA</h2>
          <div className="space-y-6 text-gray-800 text-lg">
            <p>El verdadero problema no eres tú.</p>
            <p>El problema es que la mayoría de las personas están usando estrategias obsoletas que ya no funcionan en el mercado actual.</p>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <p className="text-[#1a0b2e] font-semibold">Resultado: tiempo perdido, frustración constante y la sensación de estar siempre un paso atrás de la competencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The Solution (White) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a0b2e] mb-10">LA SOLUCIÓN: TU LEAD MAGNET</h2>
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-xl text-gray-700 leading-relaxed">
              Por eso he creado <span className="text-[#7b2cbf] font-bold">"Tu vida en una canción"</span>.
            </p>
            <p className="mt-6 text-gray-600">
              Los archivos de descarga te mostrarán exactamente cómo honrar esos momentos que no se olvidan usando estrategias probadas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {['Adultos', 'Familias', 'Parejas', 'Empresas'].map(tag => (
                <span key={tag} className="bg-white px-4 py-2 rounded-full border border-purple-200 text-purple-700 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: About the Creator */}
      <section className="bg-[#1a0b2e] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/carlos/400/400" alt="Carlos Alberto" className="rounded-full w-64 h-64 mx-auto border-4 border-pink-400 object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Hola, soy Carlos Alberto.</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              He ayudado a cientos de personas a lograr resultados extraordinarios, honrando lo simbólico y celebrando la vida.
            </p>
            <p className="text-pink-400 font-medium italic">
              Este es el resultado de años de experiencia y pruebas reales con clientes que han transformado completamente sus resultados.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="form" className="bg-white py-24 px-6 relative">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(123,44,191,0.1)] border border-gray-100 p-10 md:p-14">
          <div className="text-center mb-10">
            <span className="text-4xl mb-4 block">🎁</span>
            <h3 className="text-2xl font-bold text-[#1a0b2e]">Descarga GRATIS tu audio ahora</h3>
            <p className="text-gray-500 mt-2">Completa tus datos para recibirlo al instante.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
              <input
                type="text"
                required
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#7b2cbf] focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                placeholder="Ej. Juan Pérez"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
              <input
                type="email"
                required
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#7b2cbf] focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">No de WhatsApp</label>
              <input
                type="tel"
                required
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#7b2cbf] focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                placeholder="+54 9 11 1234 5678"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-5 rounded-xl text-white font-extrabold text-lg transition-all transform active:scale-95 shadow-lg ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7b2cbf] hover:bg-[#6a23a7] hover:shadow-purple-200'
              }`}
            >
              {isLoading ? 'Cargando...' : 'DESCARGAR AHORA'}
            </button>

            <p className="text-center text-xs text-gray-400 mt-6">
              Es 100% GRATIS y lo recibirás al instante en tu correo.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 py-10 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Carlos Alberto. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
