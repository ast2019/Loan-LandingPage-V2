
import React from 'react';
import { CreditCardIcon, CalendarRangeIcon, ShoppingBagIcon } from './Icons';

const Features: React.FC = () => {
  const items = [
    {
      icon: <CreditCardIcon className="w-8 h-8" />,
      title: "امکان سفر اقساطی",
      description: "بدون نیاز به پرداخت یکجای هزینه‌های گزاف سفر، همین امروز راهی شوید.",
      color: "bg-red-50 text-[#ea4037]"
    },
    {
      icon: <ShoppingBagIcon className="w-8 h-8" />,
      title: "مصرف هدفمند اعتبار",
      description: "اعتبار دریافتی به صورت تضمین شده فقط در مسیر خرید خدمات سفر استفاده می‌شود.",
      color: "bg-slate-900 text-white"
    },
    {
      icon: <CalendarRangeIcon className="w-8 h-8" />,
      title: "شفافیت در هزینه‌کرد",
      description: "مدیریت کامل هزینه‌های سفر شامل اقامت، بلیط و تور در پنل یکپارچه تی تی شهر.",
      color: "bg-red-100 text-[#ea4037]"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-[1156px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">مزایای طرح توران</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">چرا مسافران هوشمند تی تی شهر را برای سفرهای اقساطی خود انتخاب می‌کنند؟</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
