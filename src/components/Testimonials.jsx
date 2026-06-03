import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Seattle
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real reviews from real Seattle homeowners who dealt with real plumbing nightmares—until we showed up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group relative bg-slate-900/40 border border-slate-800 hover:border-cyan-500/20 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-cyan-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 leading-relaxed mb-6 flex-grow text-[15px]">
                "{t.text}"
              </p>

              {/* Meta */}
              <div className="pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.location}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-500/70 bg-cyan-950/20 px-2 py-1 rounded border border-cyan-500/10">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
