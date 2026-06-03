import { Phone, Calendar, Shield, Clock, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Animated ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-950/30 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-cyan-400 text-sm font-medium tracking-wide">
            24/7 Emergency Service Available Now
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Seattle's{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">
            Drain & Sewer
          </span>
          <br className="hidden md:block" /> Experts
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Specialized in Seattle's older infrastructure, root intrusion, and winterization. 
          From Capitol Hill craftsmans to Ballard bungalows—we clear drains, repair sewers, 
          and protect pipes the right way.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="tel:2063600078"
            className="group flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            <span>(206) 360-0078</span>
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <Calendar className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
            <span>Book Online</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Avg. Response 25 Min</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>500+ 5-Star Reviews</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
