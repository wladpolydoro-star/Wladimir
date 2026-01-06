
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative hero-gradient pt-20 pb-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-semibold tracking-wide uppercase">
          Estratégia Baseada em Neurociência
        </div>
        
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
          Pare de Começar e Recomeçar: <br />
          <span className="gradient-text">O Segredo Científico</span> para Tornar a Academia um Hábito em 66 Dias
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium">
          A Ciência Comprova: Você Não Precisa de Motivação, <span className="text-white">Você Precisa de um Método.</span>
        </p>

        <a 
          href="#offer" 
          className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-green-600 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:bg-green-500 hover:scale-105 transition-all duration-300 group"
        >
          QUERO MINHA CONSISTÊNCIA INQUEBRÁVEL
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm">Método Comprovado</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Acesso Vitalício</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.946-2.567 9.29-6.433 11.771a1.002 1.002 0 01-1.134 0C6.567 16.29 4 11.946 4 7c0-.68.056-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">7 Dias de Garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
