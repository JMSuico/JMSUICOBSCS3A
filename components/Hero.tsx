
import React, { useState } from 'react';
import { ArrowDown, Sparkles, Loader2, Github, Linkedin, Mail } from 'lucide-react';
import { enhanceBio } from '../services/geminiService';

export const Hero: React.FC = () => {
  const [bio, setBio] = useState("Welcome to the official BSCS 3-A Portfolio Hub. Discover a curated collection of digital innovators, software engineers, and creative thinkers shaping the future of technology.");
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleEnhance = async () => {
    setIsEnhancing(true);
    const newBio = await enhanceBio(bio);
    setBio(newBio);
    setIsEnhancing(false);
  };

  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 -left-12 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 via-amber-500 to-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-emerald-500 to-amber-500 shadow-2xl transition-transform hover:scale-105 duration-500">
            <img
              src="JMSUICO.jpg" 
              alt="Jhon Mark A. Suico"
              className="w-44 h-44 rounded-full border-4 border-slate-50 dark:border-slate-900 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=JMS";
              }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-2.5 rounded-2xl shadow-xl border-4 border-slate-50 dark:border-slate-900">
            <Sparkles size={20} />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-emerald-600 dark:text-emerald-400 font-extrabold text-lg uppercase tracking-[0.2em] mb-4">BSCS 3-A</h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            Portfolio <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-amber-600 to-emerald-700">Hub</span>
          </h1>
          
          <div className="max-w-3xl mx-auto relative group mb-8">
            <div className="absolute -inset-2 bg-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium transition-all duration-300">
              {bio}
            </p>
            <button
              onClick={handleEnhance}
              disabled={isEnhancing}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm active:scale-95 disabled:opacity-50"
            >
              {isEnhancing ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
              {isEnhancing ? "Refining Hub Intro..." : "Polish Hub Intro with AI"}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black transition-all shadow-xl shadow-emerald-500/25 active:scale-95 text-lg"
            >
              Explore the Directory
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-[10px] uppercase font-black tracking-widest opacity-50">Scroll to meet the class</span>
        <div className="animate-bounce">
          <ArrowDown size={20} className="text-emerald-500" />
        </div>
      </div>
    </div>
  );
};
