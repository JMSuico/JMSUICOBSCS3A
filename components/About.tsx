
import React from 'react';
import { MILESTONES, SKILLS, PERSONAL_PROJECTS } from '../constants';
import { Award, BookOpen, Terminal, Sparkle, Github, ExternalLink, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-block p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 mb-4">
          <Award size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">The Developer Journey</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full mb-6"></div>
        <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">Blending academic excellence with practical engineering to build meaningful digital experiences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        {/* Academic & Bio */}
        <div className="lg:col-span-5">
          <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
            <BookOpen className="text-emerald-600" /> Milestones
          </h3>

          <div className="space-y-0 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="relative pl-10 pb-12 last:pb-0 group">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-emerald-600 group-hover:bg-emerald-600 transition-colors duration-300 z-10"></div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-black text-emerald-600 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-md">{m.year}</span>
                  <h4 className="font-black text-lg group-hover:text-emerald-600 transition-colors tracking-tight">{m.title}</h4>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-md">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="lg:col-span-7">
          <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
            <Terminal className="text-emerald-600" /> Technical Arsenal
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {categories.map(cat => (
              <div key={cat} className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2">
                  <Sparkle size={12} className="text-emerald-500" /> {cat}
                </h4>
                <div className="space-y-5">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <div key={skill.name} className="group relative">
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                        <div className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl border border-white/10 whitespace-nowrap">
                          Mastery: {skill.level}%
                        </div>
                        <div className="w-2 h-2 bg-slate-900 rotate-45 mx-auto -mt-1 border-r border-b border-white/10"></div>
                      </div>

                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold tracking-tight group-hover:text-emerald-600 transition-colors">{skill.name}</span>
                        <span className="text-[10px] font-black text-emerald-600/60 uppercase">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden p-0.5">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full transition-all duration-[2000ms] ease-out group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Projects Sub-section */}
      <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
          <Code2 className="text-emerald-600" /> Featured Personal Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PERSONAL_PROJECTS.map((project, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col shadow-sm">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                <Terminal size={24} />
              </div>
              <h4 className="text-xl font-black mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">{project.name}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] font-black uppercase tracking-widest bg-slate-100 dark:bg-white/5 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-600 hover:underline"
                >
                  <Github size={16} /> Repository
                </a>
                <a href="#" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
