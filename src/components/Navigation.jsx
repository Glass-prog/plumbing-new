import { useState, useEffect } from 'react';
import { Menu, X, Phone, Droplets } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-900/30 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
              <Droplets className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-cyan-300 transition-colors">
                Puget Seattle
              </span>
              <span className="text-slate-500 text-[10px] tracking-widest uppercase font-semibold leading-none">
                Plumbers & Drain
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'services', label: 'Services' },
              { id: 'neighborhoods', label: 'Areas' },
              { id: 'testimonials', label: 'Reviews' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:2063600078"
              className="group flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              <Phone className="w-4 h-4" />
              <span>(206) 360-0078</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-cyan-900/20">
          <div className="px-6 py-6 space-y-1">
            {[
              { id: 'services', label: 'Services' },
              { id: 'neighborhoods', label: 'Service Areas' },
              { id: 'testimonials', label: 'Reviews' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/20 py-3 px-4 text-base font-medium rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:2063600078"
              className="flex items-center justify-center gap-2 bg-cyan-600 text-white px-5 py-4 rounded-xl text-base font-semibold mt-4 hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/20"
            >
              <Phone className="w-5 h-5" />
              <span>(206) 360-0078</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
