
import React from 'react';

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full p-4 md:p-6 z-[100] bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <a 
          href="#offer" 
          className="flex items-center justify-between gap-4 w-full bg-green-600 hover:bg-green-500 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold uppercase opacity-80 leading-none mb-1">Oferta Exclusiva</span>
            <span className="text-lg md:text-xl font-black leading-none">QUERO MEU HÁBITO INQUEBRÁVEL</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black hidden sm:inline">R$ 9,90</span>
            <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white/30 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
