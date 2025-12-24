
import React, { useState, useMemo } from 'react';
import { SLIDER_CONFIG, LOAN_PERIOD_OPTIONS } from '../constants';
import { formatCurrency, convertToTomanText } from '../utils';
import { CalculationResult } from '../types';

const Calculator: React.FC = () => {
  const [requestedAmount, setRequestedAmount] = useState(SLIDER_CONFIG.defaultValue);
  const [months, setMonths] = useState(LOAN_PERIOD_OPTIONS[0].value);

  const MULTIPLIERS: Record<number, number> = {
    12: 1.129,
    18: 1.19,
    24: 1.257
  };

  const results: CalculationResult = useMemo(() => {
    const multiplier = MULTIPLIERS[months] || 1.129;
    const totalRepayment = Math.floor(requestedAmount * multiplier);
    const installment = Math.ceil(totalRepayment / months);

    return {
      walletCredit: requestedAmount,
      installment: installment,
      principal: totalRepayment
    };
  }, [requestedAmount, months]);

  return (
    <section id="loan-calculator-section" className="relative z-30 -mt-16 lg:-mt-28 px-4 lg:px-6 mb-20 lg:mb-32 reveal">
      <div className="max-w-[1156px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] lg:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500 hover:border-[#ea4037]/20">
        <div className="flex flex-col lg:flex-row">
          
          <div className="flex-1 p-6 lg:p-20 border-b lg:border-b-0 lg:border-l border-slate-100">
            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2 lg:mb-3">محاسبه اقساط سفر</h3>
            <p className="text-slate-400 text-xs lg:text-sm mb-10 lg:mb-14 font-medium italic">سفر خود را با اقساط منعطف و هوشمند مدیریت کنید.</p>

            <div className="space-y-12 lg:space-y-16">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <label className="text-slate-800 font-black text-base lg:text-lg">مبلغ اعتبار سفر</label>
                  <div className="bg-red-50 text-[#ea4037] px-5 lg:px-7 py-2.5 lg:py-3 rounded-xl lg:rounded-2xl font-black text-2xl lg:text-3xl shadow-sm border border-red-100 inline-flex items-center justify-center">
                    <span key={requestedAmount} className="animate-value-update">
                      {formatCurrency(requestedAmount)}
                    </span> 
                    <span className="text-[10px] lg:text-xs font-bold mr-1 text-red-300">تومان</span>
                  </div>
                </div>
                <div className="relative pt-4 lg:pt-6 pb-2">
                  <input
                    type="range"
                    min={SLIDER_CONFIG.min}
                    max={SLIDER_CONFIG.max}
                    step={SLIDER_CONFIG.step}
                    value={requestedAmount}
                    onChange={(e) => setRequestedAmount(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-4 lg:mt-6 text-[9px] lg:text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    <span>{convertToTomanText(SLIDER_CONFIG.min)}</span>
                    <span>{convertToTomanText(SLIDER_CONFIG.max)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <label className="text-slate-800 font-black text-base lg:text-lg">مدت زمان بازپرداخت</label>
                <div className="flex flex-wrap gap-2 lg:gap-4">
                  {LOAN_PERIOD_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setMonths(option.value)}
                      className={`flex-1 min-w-[80px] py-3 lg:py-5 px-4 lg:px-10 rounded-xl lg:rounded-[1.75rem] text-sm lg:text-base font-black transition-all border-2 ${
                        months === option.value
                          ? "bg-[#ea4037] text-white border-[#ea4037] shadow-xl shadow-red-200 scale-[1.02] lg:scale-[1.05]"
                          : "bg-white text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[420px] xl:w-[480px] p-6 lg:p-20 bg-slate-50/50 flex flex-col justify-center">
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-1 lg:space-y-2">
                <div className="text-slate-400 text-[9px] lg:text-[10px] font-black uppercase tracking-widest">مبلغ تسهیلات</div>
                <div className="text-3xl lg:text-5xl font-black text-slate-900 flex items-baseline gap-2">
                  <span key={results.walletCredit} className="animate-value-update">
                    {formatCurrency(results.walletCredit)}
                  </span>
                  <span className="text-xs lg:text-sm font-bold text-[#ea4037]">تومان</span>
                </div>
              </div>

              <div className="h-px bg-slate-200 w-full"></div>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center justify-between p-5 lg:p-7 bg-white rounded-2xl lg:rounded-[2.25rem] border border-slate-100 shadow-sm">
                  <span className="text-slate-500 text-xs lg:text-sm font-bold">قسط ماهانه</span>
                  <span className="font-black text-xl lg:text-2xl text-[#ea4037]">
                    <span key={results.installment} className="animate-value-update">
                      {formatCurrency(results.installment)}
                    </span> 
                    <span className="text-[10px] lg:text-xs mr-1">تومان</span>
                  </span>
                </div>
                <div className="flex items-center justify-between p-5 lg:p-7 bg-white rounded-2xl lg:rounded-[2.25rem] border border-slate-100 shadow-sm">
                  <span className="text-slate-500 text-xs lg:text-sm font-bold">کل بازپرداخت</span>
                  <span className="font-black text-lg lg:text-xl text-slate-800">
                    <span key={results.principal} className="animate-value-update">
                      {formatCurrency(results.principal)}
                    </span> 
                    <span className="text-[10px] lg:text-xs mr-1">تومان</span>
                  </span>
                </div>
              </div>

              <button className="w-full bg-slate-900 text-white py-4 lg:py-6 rounded-2xl lg:rounded-[2.5rem] font-black text-lg lg:text-xl shadow-xl hover:bg-black transition-all transform hover:-translate-y-1 shine-soft">
                تکمیل درخواست در پنل
              </button>

              <div className="flex gap-3 lg:gap-4 p-4 lg:p-6 bg-amber-50 rounded-2xl lg:rounded-3xl border border-amber-100 shadow-inner">
                <div className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 text-amber-500 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                </div>
                <p className="text-[10px] lg:text-[11px] text-amber-900 font-bold leading-relaxed">
                نکته: ارقام نمایش داده شده بر اساس ضرایب مصوب طرح توران محاسبه شده است. مابه تفاوت نقدی و قسطی از اعتبار کیف پول کسر می‌گردد.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
