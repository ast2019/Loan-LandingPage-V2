
import React from 'react';

const Footer: React.FC = () => {
  // Using remote URL for the main logo (matching Header) and placeholders for trust logos
  // to avoid build/runtime errors with local asset imports in this environment.
  const LogoImage = "/logo_tt.svg";
  
  // You should replace these with actual CDN URLs or valid local paths served by your public folder
  const BankShahrLogo = "/BankShahr.svg";
  const EnamadLogo = "/Enamad.svg";
  const SamandehiLogo = "/Samandehi.svg";
  const MosaferLogo = "/mosafer1.svg";
  const CaoLogo = "/al.svg";

  return (
    <footer className="relative bg-[#0b1120] text-white pt-24 pb-8 overflow-hidden">
      {/* Visual Enhancements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ea4037] to-transparent"></div>
      
      <div className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] bg-[#ea4037]/10 rounded-full blur-[120px]"></div>

      <div className="max-w-[1156px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-10">
            <div className="inline-block bg-white/5 p-4 rounded-3xl border border-white/10">
              <img 
                src={LogoImage}
                alt="تی تی شهر" 
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/220x80/ea4037/white?text=TTShahr';
                }}
              />
            </div>
            <p className="text-slate-400 text-base leading-relaxed font-medium">
              تی تی شهر، پیشرو در ارائه راهکارهای نوین گردشگری دیجیتال. با ارائه طرح تسهیلاتی توران، دریچه‌ای جدید به سوی سفرهای اقساطی برای شما می‌گشاییم.
            </p>
            <div className="flex gap-4">
              {['instagram', 'telegram', 'whatsapp'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ea4037] hover:border-[#ea4037] transition-all group"
                >
                  <div 
                    className="w-5 h-5 bg-slate-400 group-hover:bg-white mask-icon" 
                    style={{ 
                      maskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social}.svg)`, 
                      WebkitMaskImage: `url(https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social}.svg)`, 
                      maskRepeat: 'no-repeat', 
                      WebkitMaskRepeat: 'no-repeat', 
                      maskSize: 'contain', 
                      WebkitMaskSize: 'contain' 
                    }} 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-lg font-black text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#ea4037] rounded-full"></span>
                خدمات
              </h4>
              <ul className="space-y-5">
                {[
                  { label: "تورهای داخلی", href: "https://ttshahr.com/tour/" },
                  { label: "تورهای خارجی", href: "https://ttshahr.com/tour/" },
                  { label: "خدمات CIP", href: "https://ttshahr.com/ceremonies-cip/" },
                  { label: "خدمات ویزا", href: "https:/ttshahr.com/visa-2/" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2">
                      <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-lg font-black text-white flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#ea4037] rounded-full"></span>
                لینک‌ها
              </h4>
              <ul className="space-y-5">
                {[
                  { label: "کارت تخفیف", href: "https://ttshahr.com/ceremonies-cip/" },
                  { label: "پشتیبانی", href: "https://help.raychat.io/fcb7fd33-97ac-4e8a-a42a-458f9b7412fc" },
                  { label: "سوالات متداول", href: "#faq" },
                  { label: "تماس با ما", href: "https://ttshahr.com/contact-us/" }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2">
                      <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-8 hover:bg-white/[0.08] transition-colors group">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-[#ea4037]/20 rounded-2xl flex items-center justify-center text-[#ea4037] shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">تلفن پشتیبانی</div>
                  <a href="tel:09120912408" className="text-xl font-black dir-ltr hover:text-[#ea4037] transition-all">۰۹۱۲۰۹۱۲۴۰۸</a>
                </div>
              </div>
              <div className="flex gap-5 border-t border-white/5 pt-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">دفتر مرکزی</div>
                  <div className="text-[12px] font-bold text-slate-300 leading-relaxed">تهران، خیابان استاد نجات الهی جنوبی، خیابان صارمی، پلاک ۴۶</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Updated Trust Logos Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-12">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-4xl">
             {/* Logo 1: Bank Shahr */}
             <div className="bg-white rounded-3xl flex flex-col items-center justify-center p-4 shadow-xl hover:-translate-y-2 transition-all">
                <img src={BankShahrLogo} alt="Bank Shahr" className="h-16 w-auto object-contain mb-2" />
                <span className="text-[10px] font-bold text-slate-400">بانک شهر</span>
             </div>
             {/* Logo 2: eNamad */}
             <div className="bg-white rounded-3xl flex flex-col items-center justify-center p-4 shadow-xl hover:-translate-y-2 transition-all">
                <img src={EnamadLogo} alt="Enamad" className="h-16 w-auto object-contain mb-2" />
                <span className="text-[10px] font-bold text-slate-400">نماد اعتماد</span>
             </div>
             {/* Logo 3: Samandehi */}
             <div className="bg-white rounded-3xl flex flex-col items-center justify-center p-4 shadow-xl hover:-translate-y-2 transition-all">
                <img src={SamandehiLogo} alt="Samandehi" className="h-16 w-auto object-contain mb-2" />
                <span className="text-[10px] font-bold text-slate-400">ساماندهی</span>
             </div>
             {/* Logo 4: Pax Rights */}
             <div className="bg-white rounded-3xl flex flex-col items-center justify-center p-4 shadow-xl hover:-translate-y-2 transition-all">
                <img src={MosaferLogo} alt="حقوق مسافر" className="h-16 w-auto object-contain mb-2" />
                <span className="text-[10px] font-bold text-slate-400">حقوق مسافر</span>
             </div>
             {/* Logo 5: CAO */}
             <div className="bg-white rounded-3xl flex flex-col items-center justify-center p-4 shadow-xl hover:-translate-y-2 transition-all">
                <img src={CaoLogo} alt="سازمان هواپیمایی کشوری" className="h-16 w-auto object-contain mb-2" />
                <span className="text-[10px] font-bold text-slate-400">سازمان هواپیمایی کشوری</span>
             </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg font-black text-slate-100">
              تمامی حقوق مادی و معنوی این طرح متعلق به توسعه گردشگری شهرآیین می باشد.
            </p>
            <div className="flex items-center justify-center gap-3 text-[10px] text-slate-600 font-black uppercase tracking-widest">
              <span>© {new Date().getFullYear()} TTShahr Platform</span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
