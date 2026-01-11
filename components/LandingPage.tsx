
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
            Hay momentos que no se olvidan. Algunos merecen una melodía eterna.
          </p>
          <a href="#form" className="mt-10 inline-block bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl">
            SABER MÁS
          </a>
        </div>
      </section>

      {/* SECTION 2: Emotional Connection (Light) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a0b2e] mb-8 text-center">La magia de lo simbólico</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Si valoras lo que perdura, sabes lo difícil que es capturar la esencia de una historia en un simple objeto.</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#7b2cbf]">
                <li>Homenajes a una vida (30–65 años)</li>
                <li>Legados familiares inquebrantables</li>
                <li>Historias de amor que merecen ser cantadas</li>
                <li>Empresas con alma y propósito</li>
              </ul>
              <p className="font-semibold italic">Has buscado el regalo perfecto, ese que hable por ti cuando las palabras no alcanzan.</p>
              <p className="text-lg text-[#1a0b2e] font-bold">¿Y si el mejor regalo no fuera algo que se guarda, sino algo que se siente?</p>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-inner relative group">
               <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600" alt="Música y emociones" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Problem (Lila Soft) - IMPROVED */}
      <section className="bg-[#f5f0ff] py-24 px-6 border-y border-purple-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-50"></div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#7b2cbf] mb-8 tracking-tight">EL PROBLEMA DEL SILENCIO</h2>
          <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
            <p className="italic">El tiempo es implacable con los recuerdos.</p>
            <p>La mayoría de los homenajes hoy son genéricos: un objeto de lujo que se desgasta, una cena que se olvida a la mañana siguiente o, peor aún, fotos que quedan sepultadas en la nube de un teléfono.</p>
            
            <div className="relative p-10 bg-white rounded-3xl shadow-[0_15px_40px_rgba(123,44,191,0.08)] border border-purple-100 mt-10">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#7b2cbf] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">El Resultado Real</span>
              <p className="text-[#1a0b2e] font-semibold text-xl md:text-2xl leading-snug">
                Momentos extraordinarios que se desvanecen en la rutina, legados que pierden su voz y la frustración de sentir que <span className="text-[#7b2cbf]">"lo más importante"</span> nunca llegó a decirse con la fuerza que merecía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The Solution (White) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a0b2e] mb-10">LA SOLUCIÓN: UNA OBRA ETERNA</h2>
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-xl text-gray-700 leading-relaxed">
              He creado <span className="text-[#7b2cbf] font-bold">"Tu vida en una canción"</span> para detener el tiempo.
            </p>
            <p className="mt-6 text-gray-600">
              A través de este proceso, transformamos tus hitos, valores y sentimientos en una composición profesional que será el hilo conductor de tu historia por generaciones.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {['Memorias', 'Emoción', 'Legado', 'Arte'].map(tag => (
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
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1514525253361-bee8a197c0c1?auto=format&fit=crop&q=80&w=400" alt="Carlos Alberto" className="rounded-2xl w-full h-80 object-cover border-2 border-pink-400/30 shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-pink-500 p-4 rounded-xl shadow-lg hidden md:block">
              <p className="text-xs font-bold uppercase tracking-tighter">Compositor & Mentor</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Hola, soy Carlos Alberto.</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Mi misión es que ninguna historia valiosa se pierda en el silencio. Ayudo a familias y líderes a encapsular sus momentos más sagrados en música con alma.
            </p>
            <p className="text-pink-400 font-medium italic">
              "La música llega donde las palabras se detienen. Permíteme ayudarte a cantar tu historia."
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="form" className="bg-white py-24 px-6 relative">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_rgba(123,44,191,0.12)] border border-gray-100 p-10 md:p-14">
          <div className="text-center mb-10">
            <span className="text-5xl mb-4 block">🎵</span>
            <h3 className="text-2xl font-bold text-[#1a0b2e]">Empieza tu historia aquí</h3>
            <p className="text-gray-500 mt-2">Recibe un ejemplo de cómo suena una vida transformada en canción.</p>
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
              {isLoading ? 'Cargando...' : 'QUIERO SABER MÁS'}
            </button>

            <p className="text-center text-xs text-gray-400 mt-6 px-4">
              Privacidad garantizada. Solo recibirás contenido de alto valor emocional.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 py-10 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Carlos Alberto. Tu legado merece una melodía.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
