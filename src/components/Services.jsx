import { Droplets, ArrowDownToLine, Wrench, AlertTriangle, Check } from 'lucide-react';

const iconMap = {
  Droplets,
  ArrowDownToLine,
  Wrench,
  AlertTriangle,
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Drain Cleaning',
      description: 'Hydro-jetting and mechanical snaking to obliterate grease, hair, soap buildup, and tree roots. We clear what others can\'t.',
      icon: 'Droplets',
      features: ['Hydro-jetting up to 4000 PSI', 'Video inspection included', 'Grease & root removal'],
      price: 'Starting at $149',
      image: 'https://i.postimg.cc/wB1JS6SM/service-drain.jpg',
    },
    {
      id: 2,
      title: 'Sewer Services',
      description: 'Trenchless sewer repair, camera diagnostics, and full line replacement. We locate breaks without destroying your yard.',
      icon: 'ArrowDownToLine',
      features: ['Trenchless pipe bursting', 'Sewer camera inspection', 'Spot repair & replacement'],
      price: 'Inspection $199',
      image: 'https://i.postimg.cc/9fsT26hh/service-sewer.jpg',
    },
    {
      id: 3,
      title: 'General Plumbing',
      description: 'Leak detection, pipe repair, fixture installation, repiping, and pressure regulation. Full-service for Seattle\'s aging homes.',
      icon: 'Wrench',
      features: ['Electronic leak detection', 'Fixture installation', 'Repiping & repairs'],
      price: 'Service Call $89',
      image: 'https://i.postimg.cc/yND9wVwW/service-plumbing.jpg',
    },
    {
      id: 4,
      title: '24/7 Emergency',
      description: 'Burst pipes, sewage backups, and flooding don\'t wait. Our trucks are stocked and ready to roll across Seattle day or night.',
      icon: 'AlertTriangle',
      features: ['Average response 25 min', 'Fully stocked trucks', 'No overtime charges'],
      price: 'Call Anytime',
      image: 'https://i.postimg.cc/CKRDWFW1/service-emergency.jpg',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for Seattle's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Unique Plumbing
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Seattle's older homes, mature trees, and wet winters create plumbing challenges 
            that generic fixes can't solve. We specialize in the problems this city throws at you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]"
              >
                {/* Image Header */}
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} service`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/10" />
                  
                  {/* Price badge */}
                  <span className="absolute top-4 right-4 inline-block bg-slate-950/60 backdrop-blur-md text-cyan-400 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700/50">
                    {service.price}
                  </span>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-cyan-950/80 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <div className="w-5 h-5 rounded-full bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-cyan-400" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
