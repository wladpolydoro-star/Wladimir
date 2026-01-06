
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-heading text-4xl font-black text-white mb-6 uppercase tracking-tight">
            Chega de Recomeçar.
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            A consistência não é um dom. É uma habilidade que se aprende. 
            Não perca mais um dia esperando a motivação. Comece o método que funciona.
          </p>
          <a href="#offer" className="inline-block text-green-500 hover:text-green-400 font-bold transition-colors">
            Voltar para a oferta de lançamento ↑
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="text-sm text-gray-500">
            © 2024 Método 66 Dias. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-xs text-gray-500 font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
        
        <div className="mt-10 text-[10px] text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
          AVISO LEGAL: Os resultados podem variar de pessoa para pessoa. Este produto não substitui o aconselhamento médico profissional. Sempre consulte seu médico antes de iniciar qualquer programa de exercícios.
        </div>
      </div>
    </footer>
  );
};
