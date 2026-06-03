import { Phone, Mail, MapPin, Droplets } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
                <Droplets className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Puget Seattle</h3>
                <p className="text-slate-500 text-xs tracking-widest uppercase font-semibold">Plumbers & Drain Cleaning Co.</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Seattle's trusted drain, sewer, and emergency plumbing specialists. 
              From century-old craftsmans to modern condos—we solve the problems generic plumbers can't.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-slate-400 text-sm font-medium">5.0 Rating — 500+ Reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Drain Cleaning</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Sewer Repair & Camera</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">General Plumbing</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">24/7 Emergency Service</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Leak Detection</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:2063600078" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group">
                  <Phone className="w-4 h-4 text-cyan-500/70" />
                  <span className="group-hover:text-cyan-400">(206) 360-0078</span>
                </a>
              </li>
              <li>
                <a href="mailto:Contact@pugetseattleplumbers.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group break-all">
                  <Mail className="w-4 h-4 text-cyan-500/70 flex-shrink-0" />
                  <span className="group-hover:text-cyan-400">Contact@pugetseattleplumbers.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-500/70 mt-0.5 flex-shrink-0" />
                <span>Greater Seattle, WA<br/><span className="text-slate-500">All Seattle neighborhoods</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-600 text-sm">
              © 2025 Puget Seattle Plumbers and Drain Cleaning Co. Licensed, Bonded & Insured. All rights reserved.
            </p>
            <p className="text-slate-700 text-xs mt-1">
              Designed by{' '}
              <a 
                href="https://www.rightframework.tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-500 transition-colors"
              >
                Right framework Digital Inc.
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
