import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { NEIGHBORHOOD_ESTIMATES } from '../constants/data';

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">
              Local Knowledge
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              We Know{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Seattle's Pipes
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              From the clay tile sewers of Ballard to the cast-iron drains of Capitol Hill, 
              every neighborhood has its own plumbing personality. We bring the right tools 
              and the right expertise for your area's specific challenges.
            </p>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Navigation className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white font-semibold">Why location matters</h4>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">01.</span>
                  <span>Older neighborhoods often have galvanized or cast-iron lines prone to corrosion.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">02.</span>
                  <span>Mature tree canopies in Green Lake and Wallingford mean aggressive root intrusion.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">03.</span>
                  <span>Hillside grading in Queen Anne and West Seattle creates unique lateral pressure.</span>
                </li>
              </ul>
            </div>

            <a
              href="tel:2063600078"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group"
            >
              Need help in your neighborhood? Call us now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {NEIGHBORHOOD_ESTIMATES.map((hood) => (
              <div
                key={hood.name}
                className="group bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900/60"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <h4 className="text-white font-semibold text-sm">{hood.name}</h4>
                  </div>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded-md border border-cyan-500/10">
                    {hood.time} min
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {hood.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
