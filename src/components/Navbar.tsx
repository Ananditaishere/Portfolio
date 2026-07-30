import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Experience' },
    { id: 'certs', label: 'Certs' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'profiles', label: 'Profiles' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section intersection detection
      const sections = ['hero', ...navLinks.map((l) => l.id)];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050508]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="font-mono text-xl font-bold text-white tracking-wider flex items-center gap-1 group"
        >
          <span className="text-purple-400 group-hover:text-cyan-400 transition-colors">
            &#123;
          </span>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AC
          </span>
          <span className="text-purple-400 group-hover:text-cyan-400 transition-colors">
            &#125;
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-purple-600/80 to-cyan-600/80 shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onDownloadResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105"
          >
            <Download className="w-3.5 h-3.5 text-purple-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all hover:scale-105"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onDownloadResume}
            className="p-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300"
            title="Download Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a14]/95 border-b border-white/10 px-6 py-6 backdrop-blur-2xl flex flex-col gap-3 mt-3 animate-slide-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-left py-2.5 px-4 text-sm font-medium rounded-lg transition-all ${
                activeSection === link.id
                  ? 'text-white bg-purple-600/30 border border-purple-500/40 font-semibold'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadResume();
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl border border-purple-500/40 bg-purple-500/10 text-purple-200"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
