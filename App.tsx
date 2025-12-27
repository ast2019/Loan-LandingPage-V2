
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Features from './components/Features';
import Steps from './components/Steps';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const PlanOverview: React.FC = () => (
  <section id="plan-overview" className="py-16 lg:py-32 px-6 bg-white overflow-hidden reveal">
    <div className="max-w-[1156px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-6 lg:space-y-10">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-[#ea4037] rounded-lg text-[10px] lg:text-xs font-black uppercase tracking-widest border border-red-100 shadow-sm">طرح توران</div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.3] lg:leading-[1.2]">پاسخی شایسته به نیاز <br /><span className="text-[#ea4037]">گردشگری</span> شما</h2>
          <p className="text-base lg:text-lg text-slate-500 leading-relaxed lg:leading-loose font-medium">
            طرح توران با هدف تسهیل دسترسی به خدمات گردشگری تراز اول طراحی شده است. تمرکز ما بر این است که اعتبار تخصیص‌یافته دقیقاً در مسیر ارتقای کیفیت سفر شما (تور، اقامت، CIP و حمل‌ونقل) هزینه شود و دغدغه‌های مالی شما را برطرف سازد.
          </p>
          <div className="p-6 lg:p-10 bg-slate-50 rounded-[2rem] lg:rounded-[3rem] border border-slate-100 relative group transition-all hover:border-[#ea4037]/20 shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ea4037]/5 rounded-full blur-3xl -mr-8 -mt-8 opacity-50"></div>
            <h4 className="font-black text-xl lg:text-2xl text-slate-900 mb-4 lg:mb-5 flex items-center gap-3">
              <span className="w-1.5 h-6 lg:w-2 lg:h-8 bg-[#ea4037] rounded-full"></span>
              مکانیزم طرح
            </h4>
            <p className="text-xs lg:text-sm text-slate-500 leading-relaxed lg:leading-loose italic font-medium">
              این طرح حاصل همکاری راهبردی بانک شهر، شرکت توسعه گردشگری شهرآیین و تی تی شهر است. فرآیند کاملاً آنلاین بوده و متقاضیان می‌توانند در کمترین زمان ممکن، اعتبار سفر خود را در بستری هوشمند دریافت و مدیریت کنند.
            </p>
          </div>
        </div>
        <div className="relative reveal mt-8 lg:mt-0" style={{ transitionDelay: '0.3s' }}>
          <div className="absolute -inset-10 bg-red-50 rounded-full blur-[80px] lg:blur-[100px] opacity-60"></div>
          <img 
            src="https://demo.ttshahr.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-27-at-11.57.14.jpeg" 
            alt="Premium Travel" 
            className="relative w-full h-[350px] lg:h-[600px] object-cover rounded-[2.5rem] lg:rounded-[4.5rem] shadow-2xl border-4 border-white transform hover:rotate-1 transition-all duration-1000"
          />
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#ea4037] selection:text-white bg-[#f5f5f5]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Calculator />
        <PlanOverview />
        <div className="reveal">
          <Features />
        </div>
        <div className="reveal">
          <Steps />
        </div>
        <div className="reveal">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
