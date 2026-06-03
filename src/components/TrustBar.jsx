import { ShieldCheck, Award, Clock, BadgeDollarSign, Star } from 'lucide-react';

const icons = {
  ShieldCheck,
  Award,
  Clock,
  BadgeDollarSign,
  Star,
};

export default function TrustBar() {
  const signals = [
    { label: 'Licensed & Insured', icon: 'ShieldCheck' },
    { label: '20+ Years Experience', icon: 'Award' },
    { label: 'Same-Day Service', icon: 'Clock' },
    { label: 'Upfront Pricing', icon: 'BadgeDollarSign' },
    { label: '5-Star Rated', icon: 'Star' },
  ];

  return (
    <section className="relative z-20 -mt-8 px-6">
      <div className="max-w-5xl mx-auto bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {signals.map((signal, index) => {
            const Icon = icons[signal.icon];
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/30 border border-cyan-500/10 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-950/50 transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-slate-300 text-sm font-semibold leading-tight">
                  {signal.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
