
import React from 'react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana Siqueira",
      role: "Advogada, 34 anos",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      text: "Eu era a rainha das matrículas canceladas. Pagava o plano anual e ia 2 semanas. Com o Método 66, entendi que o erro não era minha preguiça, mas tentar ser 'fitness' da noite pro dia. O Checklist de Consistência mudou meu jogo. Já estou no dia 112 e nunca mais parei.",
      result: "Consistente há 4 meses"
    },
    {
      name: "Ricardo Mendes",
      role: "Empresário e Pai",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      text: "Minha rotina é caótica e o 'Plano B Anti-Desculpa' foi o que me salvou. Antes, se eu tinha uma reunião que passava do horário, eu já desistia do treino da semana toda. Agora, eu sei exatamente como manter a corrente ligada mesmo em dias difíceis. Melhor investimento que já fiz.",
      result: "-12kg em 3 meses"
    },
    {
      name: "Juliana Costa",
      role: "Estudante de Medicina",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      text: "A fase de Automação (após o dia 45) é real! Parece mágica, mas é pura ciência. Chegou um ponto que meu corpo pedia pelo treino. A sensação de não ter que 'lutar' contra mim mesma para ir à academia é libertadora. O custo-benefício desse guia é surreal.",
      result: "Hábito Automático"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
            Quem Aplicou a Ciência, <br />
            <span className="text-green-500">Colheu os Resultados</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mais de 1.200 alunos já quebraram o ciclo de começar e parar usando o Método 66 Dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-[32px] border border-white/5 hover:border-green-500/30 transition-all duration-500 flex flex-col relative group">
              <div className="absolute -top-4 -right-4 bg-green-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-green-500/20">
                {t.result}
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-green-500/20 object-cover" />
                <div>
                  <h4 className="text-white font-bold leading-none mb-1">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 italic leading-relaxed text-sm flex-grow">
                "{t.text}"
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Verificado</span>
                <svg className="w-5 h-5 text-green-500/50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.25.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
