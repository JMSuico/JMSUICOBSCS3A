
import React, { useState, useMemo } from 'react';
import { STUDENTS } from '../constants';
import { ExternalLink, Users, Filter, Check, Layers, UserCircle } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = useMemo(() => {
    const tags = STUDENTS.flatMap((student) => student.tags);
    const uniqueTags = Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b));
    return ['All', ...uniqueTags];
  }, []);

  const filteredStudents = useMemo(() => {
    if (activeFilter === 'All') return STUDENTS;
    return STUDENTS.filter((student) => student.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-4 border border-emerald-500/20">
            <Users size={14} /> The Class of 3-A
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Talent Directory</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Discover the individual portfolios of our top-tier Computer Science students, each specializing in diverse tech stacks.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-12 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
          <Filter size={16} className="text-emerald-500" />
          <span className="text-xs font-black uppercase tracking-widest">Filter by Specialization</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isAll = category === 'All';
            const isActive = activeFilter === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 border shadow-sm ${
                  isActive
                    ? isAll 
                      ? 'bg-amber-500 text-white border-amber-500 shadow-amber-500/20 scale-105' 
                      : 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-500/20 scale-105'
                    : isAll
                      ? 'bg-amber-500/5 dark:bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white hover:border-amber-500'
                      : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-emerald-500/50 hover:text-emerald-600'
                }`}
              >
                {isAll ? <Layers size={14} /> : (isActive && <Check size={14} className="animate-in zoom-in duration-300" />)}
                {isAll ? 'View All Students' : category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className="group relative animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative glass rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col shadow-lg p-1">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl m-2">
                <img
                  src={student.imageUrl}
                  alt={student.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-slate-100 dark:bg-slate-800"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {student.role}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-black mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tight">{student.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow italic">
                  "{student.bio}"
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {student.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={student.portfolioUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-xl active:scale-95 group/btn"
                >
                  <UserCircle size={18} /> Visit Portfolio <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-20 animate-in fade-in duration-700">
          <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
            <Filter size={40} className="text-slate-400" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium">No students specialize in "{activeFilter}"</p>
          <button 
            onClick={() => setActiveFilter('All')}
            className="mt-6 px-8 py-3 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            Reset Directory
          </button>
        </div>
      )}
    </div>
  );
};
