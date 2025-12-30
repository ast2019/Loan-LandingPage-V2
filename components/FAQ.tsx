
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      q: "آیا پول نقد به حساب واریز می‌شود؟",
      a: "خیر؛ اعتبار در کیف پول گردشگری شارژ می‌شود و فقط برای خرید خدمات سفر قابل استفاده است."
    },
    {
      q: "سقف اعتبار چقدر است؟",
      a: "تا سقف ۲۰۰ میلیون تومان (مقدار نهایی پس از اعتبارسنجی مشخص می‌شود)."
    },
    {
      q: "نرخ سود و تعداد اقساط چقدر است؟",
      a: "جزئیات اقساط، کارمزد و مدارک مورد نیاز در مراحل بعدی فرآیند و طبق شرایط بانک شهر اعلام می‌شود."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">سوالات متداول</h2>
          <p className="text-slate-500 italic">پاسخ به برخی دغدغه‌های رایج کاربران درباره طرح توران.</p>
        </div>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-[2rem] bg-white transition-all overflow-hidden ${openIndex === index ? 'ring-2 ring-red-100 shadow-xl' : 'border-slate-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-right"
              >
                <span className={`text-lg font-black transition-colors ${openIndex === index ? 'text-[#ea4037]' : 'text-slate-800'}`}>
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-red-50 text-[#ea4037] rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                   <ChevronDownIcon className="w-5 h-5" />
                </div>
              </button>
              
              <div className={`transition-all duration-300 ${openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 text-slate-500 leading-relaxed text-sm">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
