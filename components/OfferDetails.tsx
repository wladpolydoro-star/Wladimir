
import React from 'react';

export const OfferDetails: React.FC = () => {
  const items = [
    {
      title: "Guia Completo 'Método 66 Dias'",
      desc: "Seu passo a passo detalhado com estratégias psicológicas para cada fase."
    },
    {
      title: "Checklist de Consistência Diária",
      desc: "Ative o sistema de recompensa do seu cérebro celebrando cada pequeno avanço."
    },
    {
      title: "O 'Plano B' Anti-Desculpa",
      desc: "Como lidar com falta de tempo ou desânimo sem quebrar a corrente."
    },
    {
      title: "Fórmula da 'Identidade Fitness'",
      desc: "Deixe de ser quem 'tenta ir' para ser quem 'vai à academia'."
    }
  ];

  return (
    <section id="offer" className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 text-white">
              O Que Você Recebe <span className="text-green-500">Agora:</span>
            </h2>
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full" />
            <div className="relative glass p-10 rounded-[40px] border-2 border-green-500/30 text-center shadow-2xl">
              <div className="mb-6">
                <span className="text-gray-400 line-through text-xl">De R$ 69,90</span>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-gray-400 text-2xl font-bold">Por apenas</span>
                  <span className="text-5xl md:text-6xl font-black text-white">R$ 9,90</span>
                </div>
              </div>

              <p className="text-gray-400 mb-8 max-w-xs mx-auto text-sm">
                Aproveite o preço promocional de lançamento. Menos do que um cafezinho por uma vida inteira de saúde e consistência.
              </p>

              <button className="w-full py-6 bg-green-600 hover:bg-green-500 text-white font-black text-xl rounded-2xl shadow-[0_10px_30px_rgba(22,163,74,0.4)] transition-all duration-300 transform hover:-translate-y-1 mb-6 uppercase tracking-wider">
                Quero Minha Consistência Agora
              </button>

              <div className="flex flex-col items-center gap-4 text-xs text-gray-500 font-medium">
                <div className="flex gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 opacity-50 grayscale" alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 opacity-50 grayscale" alt="Mastercard" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 opacity-50 grayscale" alt="Paypal" />
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.946-2.567 9.29-6.433 11.771a1.002 1.002 0 01-1.134 0C6.567 16.29 4 11.946 4 7c0-.68.056-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ambiente Seguro e Criptografado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
