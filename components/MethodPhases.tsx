
import React from 'react';

export const MethodPhases: React.FC = () => {
  const phases = [
    {
      range: "Dias 1 ao 22",
      title: "Fase de Iniciação",
      description: "Aprender a superar a inércia inicial com 'micro-hábitos' que tornam a ida à academia irresistível.",
      details: ["Vencendo a resistência cerebral", "Técnica dos 5 minutos", "Configuração de gatilhos ambientais"],
      color: "bg-blue-500"
    },
    {
      range: "Dias 23 ao 44",
      title: "Fase de Integração",
      description: "Descobrir como blindar sua rotina contra imprevistos, viagens e dias de preguiça, mantendo o ritmo.",
      details: ["O Plano B Anti-Desculpa", "Neuro-hacking da dopamina", "Proteção contra o 'efeito danese'"],
      color: "bg-purple-500"
    },
    {
      range: "Dias 45 ao 66",
      title: "Fase de Automação",
      description: "Sentir a mágica acontecer: a academia se torna sua 'zona de conforto' e faltar passa a ser difícil.",
      details: ["Identidade de Atleta", "Manutenção Subconsciente", "Transição para o Longo Prazo"],
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-[#0d0d0d] px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
            O Método 66 Dias de Consistência
          </h2>
          <p className="text-xl text-gray-400">
            Um mapa mental desenhado para reprogramar seu cérebro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <div key={i} className="glass p-8 rounded-3xl flex flex-col hover:border-white/20 transition-all group">
              <div className={`w-fit px-4 py-1 rounded-full ${phase.color} text-white text-xs font-bold uppercase mb-6`}>
                {phase.range}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{phase.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {phase.description}
              </p>
              <ul className="space-y-3">
                {phase.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
