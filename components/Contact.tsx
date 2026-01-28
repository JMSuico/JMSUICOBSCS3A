
import React, { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Transmitting...');
    setTimeout(() => {
      setIsSuccess(true);
      setStatus('Message Delivered!');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setIsSuccess(false);
        setStatus('');
      }, 4000);
    }, 1500);
  };

  const socialLinks = [
    { Icon: Github, name: 'Github', href: 'https://github.com', brandColor: 'hover:bg-[#181717]' },
    { Icon: Linkedin, name: 'LinkedIn', href: 'https://linkedin.com', brandColor: 'hover:bg-[#0077B5]' },
    { Icon: Twitter, name: 'Twitter', href: 'https://twitter.com', brandColor: 'hover:bg-[#1DA1F2]' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Hub Inquiries</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full mb-6"></div>
        <p className="max-w-xl mx-auto text-slate-500 dark:text-slate-400">For recruiters looking for talent or students wanting to join the hub, please reach out below.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h3 className="text-2xl font-black mb-6 tracking-tight">Direct Channels</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-emerald-500/10 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Hub Admin Email</p>
                  <p className="text-lg font-bold">suicojm99@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-emerald-500/10 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
                  <p className="text-lg font-bold">Zamboanga Del Norte, PH</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Connect Digitally</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-3 glass rounded-2xl hover:text-white transition-all group active:scale-95 border border-white/5 ${item.brandColor}`}
                  aria-label={`Connect on ${item.name}`}
                >
                  <item.Icon size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-bold text-sm">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium"
                  placeholder="Visitor Name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Message</label>
              <textarea
                required
                rows={5}
                className="w-full bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium resize-none"
                placeholder="How can we help you connect with our talent?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={!!status}
              className={`w-full py-5 rounded-2xl text-white font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95 disabled:opacity-70 ${
                isSuccess ? 'bg-green-600 shadow-green-500/20' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20 group'
              }`}
            >
              {isSuccess ? <CheckCircle2 size={24} /> : null}
              {status || "Send Message"}
              {!status && !isSuccess && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
