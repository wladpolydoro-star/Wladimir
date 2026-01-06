
import React from 'react';

export const PainSection: React.FC = () => {
  const pains = [
    {
      title: "O Ciclo das Segundas-Feiras",
      description: "Você promete que 'agora vai', mas na quarta a motivação já evaporou e você se sente culpado."
    },
    {
      title: "Mensalidade Desperdiçada",
      description: "Pagar a academia e ir apenas nas primeiras semanas é um prejuízo que dói no bolso e no ego."
    },
    {
      title: "O Mito do Talento",
      description: "Você acha que é preguiçoso ou falta força de vontade, mas a verdade é que você só não tem o método certo."
    }
  ];

  return (
    <section className="py-24 bg-[#0d0d0d] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              A Dor que Você Conhece Bem
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Se você já tentou de tudo — alarmes, parceiros de treino, listas de tarefas — e ainda assim a consistência é sua maior inimiga, saiba que o problema não está em você. <span className="text-green-500 font-semibold">Está no método.</span>
            </p>
            <div className="space-y-6">
              {pains.map((pain, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{pain.title}</h3>
                    <p className="text-sm text-gray-400">{pain.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800" 
              alt="Frustrated person" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl max-w-xs shadow-xl border-l-4 border-l-red-500">
              <p className="italic text-gray-300">
                "Eu fui enganado pelo mito de que 21 dias eram suficientes. Desistia sempre no dia 25 sem saber que estava quase lá."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
