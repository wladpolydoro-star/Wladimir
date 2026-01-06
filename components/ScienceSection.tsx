
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { day: 0, auto: 0 },
  { day: 10, auto: 15 },
  { day: 21, auto: 30 }, // Myth point
  { day: 40, auto: 60 },
  { day: 66, auto: 95 }, // Goal point
  { day: 80, auto: 98 },
];

export const ScienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-white">
            O Mito dos 21 Dias e a Verdade Científica
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A ciência real da <span className="text-white underline decoration-green-500">University College London</span> revelou o que ninguém te contou.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Curva de Automaticidade (Lally et al.)
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#666" label={{ value: 'Dias', position: 'insideBottom', offset: -5 }} />
                  <YAxis stroke="#666" label={{ value: 'Hábito %', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#fff' }}
                    itemStyle={{ color: '#4ade80' }}
                  />
                  <Area type="monotone" dataKey="auto" stroke="#4ade80" strokeWidth={3} fillOpacity={1} fill="url(#colorAuto)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 flex justify-between text-xs text-gray-500 uppercase font-bold tracking-widest">
              <span>Início</span>
              <span className="text-red-500">Onde a maioria desiste (Dia 21)</span>
              <span className="text-green-500">Hábito Consolidado (Dia 66)</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-4xl font-black text-green-500 mb-2">66 DIAS</div>
              <p className="text-gray-300 leading-relaxed">
                Em média, são necessários <strong>66 dias</strong> para que um novo comportamento se torne automático. Se você desiste no 25º dia, você está a apenas 41 dias de distância da liberdade.
              </p>
            </div>
            
            <p className="text-lg text-gray-400">
              Isso significa que, ao completar os 66 dias, você não precisará mais de força de vontade. <span className="text-white font-bold">Ir à academia será tão natural quanto escovar os dentes.</span>
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass text-center">
                <div className="text-2xl font-bold text-white mb-1">21 dias</div>
                <div className="text-xs text-red-500 font-bold uppercase">Mito Antigo</div>
              </div>
              <div className="p-4 rounded-xl glass border-green-500/50 text-center">
                <div className="text-2xl font-bold text-green-500 mb-1">66 dias</div>
                <div className="text-xs text-green-500 font-bold uppercase">Ciência Real</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
