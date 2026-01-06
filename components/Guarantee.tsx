
import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d0d0d] px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1000/1000958.png" 
            alt="7 Days Guarantee" 
            className="w-24 h-24 mx-auto invert opacity-80"
          />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
          Sua Decisão Sem Riscos
        </h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          Eu confio tanto na ciência por trás deste método que vou assumir todo o risco. 
          Se em <span className="text-white font-bold">7 dias</span> você aplicar as estratégias iniciais e não sentir que está no caminho certo, eu devolvo 100% do seu dinheiro. <span className="text-green-500 font-bold italic">Sem perguntas.</span>
        </p>
        <div className="p-8 glass rounded-2xl border-l-4 border-l-green-500 text-left inline-block">
          <p className="text-sm text-gray-300 italic">
            "Este método me deu o que nenhum personal trainer conseguiu: a consistência psicológica. Hoje não penso mais se vou treinar, eu apenas vou. Mudou meu corpo e minha cabeça." — Carlos R., Aluno do Método.
          </p>
        </div>
      </div>
    </section>
  );
};
