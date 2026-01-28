
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    // Intersection Observer for Active Section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -70% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    // Scroll Progress Handler
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className="fixed top-0 w-full z-50 glass border-b border-white/10 transition-all duration-300"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-150 ease-out z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-amber-600 tracking-tighter cursor-default">
            JM<span className="text-slate-400">_</span>SUICO
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  className={`text-sm font-bold transition-all hover:text-emerald-600 relative py-2 ${
                    activeSection === link.id ? 'text-emerald-600' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full transition-all duration-300 transform origin-left ${
                      activeSection === link.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`} 
                  />
                </a>
              ))}
              <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2" aria-hidden="true"></div>
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 hover:bg-emerald-600 hover:text-white transition-all duration-300 group"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={20} className="group-hover:rotate-45 transition-transform" /> : <Moon size={20} className="group-hover:-rotate-12 transition-transform" />}
              </button>
            </div>
          </div>

          {/* Mobile Toggle Icons */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 hover:bg-emerald-600 hover:text-white transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${
          isOpen ? 'max-h-80 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-8 space-y-2 glass border-b border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center px-4 py-4 rounded-2xl text-base font-black transition-all ${
                activeSection === link.id 
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-emerald-600/10 hover:text-emerald-600'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
