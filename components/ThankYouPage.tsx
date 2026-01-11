
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1a0b2e] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-[#1a0b2e] mb-4">¡Registro Exitoso!</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Gracias por confiar en nosotros. El audio <span className="text-[#7b2cbf] font-bold">"Tu vida en una canción"</span> ha sido enviado a tu correo electrónico.
        </p>
        <div className="space-y-4">
          <p className="text-gray-500">Revisa tu bandeja de entrada (y la carpeta de spam por si acaso).</p>
          <button
            onClick={() => navigate('/')}
            className="inline-block border-2 border-[#7b2cbf] text-[#7b2cbf] hover:bg-[#7b2cbf] hover:text-white font-bold py-3 px-8 rounded-full transition-all"
          >
            VOLVER AL INICIO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
