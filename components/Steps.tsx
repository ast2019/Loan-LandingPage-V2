
import React from 'react';

const Steps: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: "شروع درخواست",
      description: "کلیک روی دکمه شروع و ورود به مرحله احراز هویت."
    },
    {
      step: 2,
      title: "مطالعه شرایط طرح",
      description: "بررسی کلی ویژگی‌های توران در همین صفحه."
    },
    {
      step: 3,
      title: "تکمیل اطلاعات",
      description: "وارد کردن اطلاعات شخصی و بارگذاری مدارک لازم."
    },
    {
      step: 4,
      title: "صدور معرفی نامه",
      description: "دریافت معرفی‌نامه هوشمند جهت ارائه به سیستم بانکی."
    },
    {
      step: 5,
      title: "اعتبارسنجی بانکی",
      description: "بررسی سوابق مالی و تایید توسط بانک شهر."
    },
    {
      step: 6,
      title: "شارژ اعتبار و سفر",
      description: "دریافت اعتبار در کیف پول و رزرو خدمات سفر."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1156px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-6">فرآیند دریافت تسهیلات</h2>
          <p className="text-slate-500 text-lg">در ۶ گام ساده، اعتبار سفر خود را دریافت کنید.</p>
        </div>
        
        <div className="relative">
          {/* Progress Line - Set to 0% as no steps are active by default now */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-slate-100 -translate-y-1/2 rounded-full overflow-hidden">
             <div className="w-0 h-full bg-[#ea4037] transition-all duration-1000"></div>
          </div>
          
          <div className="grid lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
            {steps.map((item) => {
              // All steps are inactive by default as requested
              const isActive = false;
              
              return (
                <div key={item.step} className="flex flex-col items-center text-center group cursor-default">
                  <div className={`w-16 h-16 bg-white border-[6px] rounded-full flex items-center justify-center text-2xl font-black transition-all duration-300 shadow-xl mb-6 
                    ${isActive 
                      ? "border-[#ea4037]/10 text-[#ea4037] bg-white ring-4 ring-red-50" 
                      : "border-slate-50 text-slate-300 group-hover:border-[#ea4037]/30 group-hover:text-[#ea4037] group-hover:-translate-y-1"
                    }`}>
                    {item.step}
                  </div>
                  <h3 className={`text-base font-black mb-3 whitespace-nowrap transition-colors ${isActive ? "text-slate-900" : "text-slate-400 group-hover:text-slate-800"}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed px-2 lg:px-4">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
