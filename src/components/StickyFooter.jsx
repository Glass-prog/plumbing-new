import { Phone, Calendar, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyFooter() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px), hide near bottom
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight > docHeight - 200;
      
      setVisible(scrollY > 600 && !nearBottom);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col">
            <span className="text-white font-bold text-sm">Need a Plumber Now?</span>
            <span className="text-slate-400 text-xs">24/7 emergency service across Seattle</span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-1 sm:flex-none justify-end">
          <a
            href="tel:2063600078"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(8,145,178,0.3)] flex-1 sm:flex-none justify-center"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">(206) 360-0078</span>
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-cyan-500/30 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 flex-1 sm:flex-none justify-center"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Book Online</span>
            <span className="sm:hidden">Book</span>
          </button>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="hidden sm:flex w-8 h-8 items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
