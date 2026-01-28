
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Jhon Mark A. Suico. Built with React & Gemini.
        </div>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
