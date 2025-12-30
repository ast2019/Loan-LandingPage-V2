
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: "صفحه اصلی", href: "https://ttshahr.com/" },
    { label: "رزرو تور", href: "https://ttshahr.com/tour/" },
    { label: "سفر کارت", href: "https://kish.ttshahr.com/" },
    { label: "سوالات متداول", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-[1156px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center group">
            <img 
              src="/logo_tt.svg" 
              alt="تی تی شهر" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/180x60/ea4037/white?text=TTShahr+Logo';
              }}
            />
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-slate-600 hover:text-[#ea4037] text-sm font-bold transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://loan.ttshahr.com" 
            className="hidden sm:flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-black transition-all shadow-xl shadow-slate-200"
          >
              ورود به سامانه وام
          </a>
          
          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="bg-[#ea4037] text-white p-3 rounded-2xl lg:hidden focus:outline-none hover:bg-[#d1352d] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-100 shadow-2xl transition-all duration-300 origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-800 hover:text-[#ea4037] text-lg font-black py-2 border-b border-slate-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://loan.ttshahr.com" 
            className="bg-slate-900 text-white w-full py-4 rounded-2xl text-center font-bold shadow-lg shadow-slate-200 mt-4"
          >
            پنل اعتبار سنجی وام
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
