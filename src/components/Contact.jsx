import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Fix It Right?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Call now for emergencies, or fill out the form and we'll respond within 15 minutes during business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <CheckCircle className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-slate-400">Our dispatch team will contact you within 15 minutes to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                        placeholder="(206) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="drain">Drain Cleaning</option>
                      <option value="sewer">Sewer Repair / Camera</option>
                      <option value="emergency">Emergency Plumbing</option>
                      <option value="leak">Leak Detection</option>
                      <option value="general">General Plumbing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-1 -mt-0.5" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="Describe your issue (optional)..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(8,145,178,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Request Appointment
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              <ul className="space-y-5">
                <li>
                  <a href="tel:2063600078" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/40 transition-colors">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">24/7 Emergency</p>
                      <p className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">(206) 360-0078</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:Contact@pugetseattleplumbers.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/40 transition-colors">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Email Us</p>
                      <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors break-all">Contact@pugetseattleplumbers.com</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Service Area</p>
                    <p className="text-white font-semibold">Greater Seattle, WA</p>
                    <p className="text-slate-500 text-sm mt-0.5">All neighborhoods within Seattle city limits</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Hours</p>
                    <p className="text-white font-semibold">Open 24 Hours / 7 Days</p>
                    <p className="text-slate-500 text-sm mt-0.5">Emergency response never sleeps</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-950/20 border border-cyan-500/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white font-bold">Same-Day Booking</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Most non-emergency appointments can be scheduled same-day. Submit the form and we'll confirm within 15 minutes.
              </p>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Average confirmation: 15 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
