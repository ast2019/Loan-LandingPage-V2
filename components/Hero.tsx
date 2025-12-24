
import React from 'react';
import { ShieldCheckIcon, CalendarIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-10 lg:pt-20 pb-32 lg:pb-44 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-red-50 rounded-full blur-[80px] lg:blur-[120px] opacity-60 animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-slate-100 rounded-full blur-[70px] lg:blur-[100px] opacity-40"></div>
      
      <div className="max-w-[1156px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-right reveal active">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 rounded-full text-[#ea4037] text-[10px] lg:text-xs font-black mb-6 lg:mb-8 border border-red-100 shadow-sm">
              <span className="w-2 h-2 bg-[#ea4037] rounded-full animate-ping"></span>
              تسهیلات توران: اعتبار سفر تا ۲۰۰ میلیون تومان
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.2] lg:leading-[1.15] mb-6 lg:mb-8">
              سفر امروز، <br />
              <span className="text-[#ea4037]">پرداخت</span> هوشمندانه فردا
            </h1>
            <p className="text-base lg:text-xl text-slate-500 leading-relaxed lg:leading-loose mb-8 lg:mb-12 max-w-xl mx-auto lg:mx-0 font-medium">
              با همکاری بانک شهر و شرکت توسعه گردشگری شهرآیین، رویای سفر را با طرح توران به واقعیت تبدیل کنید.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-5 justify-center lg:justify-start">
              <button href="https://loan.ttshahr.com" className="w-full sm:w-auto px-10 lg:px-12 py-4 lg:py-5 bg-[#ea4037] text-white rounded-[1.5rem] lg:rounded-[2rem] font-black text-lg lg:text-xl shadow-2xl shadow-red-200 hover:bg-[#d1352d] transition-all transform hover:scale-[1.03] shine-soft">
                شروع درخواست
              </button>
              <a href="#plan-overview" className="w-full sm:w-auto px-10 lg:px-12 py-4 lg:py-5 bg-white border-2 border-slate-100 text-slate-800 rounded-[1.5rem] lg:rounded-[2rem] font-bold text-lg lg:text-xl hover:bg-slate-50 transition-all text-center">
                جزئیات طرح
              </a>
            </div>
            
            <div className="mt-12 lg:mt-20 flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-50 rounded-xl lg:rounded-2xl flex items-center justify-center text-[#ea4037] shadow-sm">
                  <ShieldCheckIcon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest">تخصیص آنی اعتبار</div>
                  <div className="text-sm lg:text-base font-black text-slate-900">پس از اعطای وام از بانک</div>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-50 rounded-xl lg:rounded-2xl flex items-center justify-center text-[#ea4037] shadow-sm">
                  <CalendarIcon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest">مدت بازپرداخت</div>
                  <div className="text-sm lg:text-base font-black text-slate-900">اقساط بانکی</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative w-full lg:w-auto reveal active" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-4 lg:-inset-6 bg-gradient-to-br from-[#ea4037]/20 to-transparent rounded-[3rem] lg:rounded-[4rem] blur-2xl lg:blur-3xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop" 
                alt="Travel Destination" 
                className="relative w-full h-[400px] lg:h-[600px] object-cover rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl border-4 lg:border-8 border-white hover:scale-[1.01] transition-transform duration-700"
              />
              
              {/* بَدج اول: اعتبار کیف پول */}
              <div className="absolute -top-6 right-2 lg:-top-10 lg:-right-10 bg-white/95 backdrop-blur-xl p-4 lg:p-7 rounded-[1.5rem] lg:rounded-[2.5rem] shadow-xl lg:shadow-2xl border border-white animate-float z-20">
                 <div className="text-[8px] lg:text-[10px] text-slate-400 font-black mb-1 uppercase tracking-tighter">سقف اعتبار طرح توران</div>
                 <div className="text-xl lg:text-3xl font-black text-slate-900">۲۰۰,۰۰۰,۰۰۰ <span className="text-[10px] lg:text-xs text-[#ea4037] mr-1">تومان</span></div>
                 <div className="mt-1 lg:mt-2 flex items-center gap-1.5 lg:gap-2">
                    <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-[8px] lg:text-[9px] font-bold text-green-600">آماده تخصیص</span>
                 </div>
              </div>
              
              {/* بَدج دوم: خدمات ویژه */}
              <div className="absolute -bottom-6 left-2 lg:-bottom-8 lg:-left-10 bg-slate-900/95 backdrop-blur-xl p-4 lg:p-7 rounded-[1.5rem] lg:rounded-[2.5rem] shadow-xl lg:shadow-2xl border border-white/10 animate-float-delayed z-20">
                <div className="flex items-center gap-3 lg:gap-5">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-[#ea4037] to-[#ff6b63] rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <svg width="20" height="20" className="lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                  </div>
                  <div>
                    <div className="text-[8px] lg:text-[10px] text-white/40 font-black uppercase tracking-widest mb-0.5 lg:mb-1">خدمات مسافرتی</div>
                    <div className="text-xs lg:text-base font-black text-white leading-tight">رزرو تور <span className="text-[#ea4037]">&</span> CIP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
