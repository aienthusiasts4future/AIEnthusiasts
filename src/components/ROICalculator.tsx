import { useState } from 'react';
import { TrendingUp, DollarSign, Calendar, Percent } from 'lucide-react';

export function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(50);
  const [automationPercent, setAutomationPercent] = useState(50);

  // Calculations
  const weeklySavings = (hoursPerWeek * hourlyCost * automationPercent) / 100;
  const annualValue = weeklySavings * 52;

  // Assume implementation cost of $15,000 for payback calculation
  const implementationCost = 15000;
  const paybackMonths = Math.ceil(implementationCost / (weeklySavings * 4.33));

  // 3-year ROI: ((3-year savings - implementation cost) / implementation cost) * 100
  const threeYearSavings = annualValue * 3;
  const threeYearROI = ((threeYearSavings - implementationCost) / implementationCost) * 100;

  const getROIColor = (roi: number) => {
    if (roi > 300) return 'text-success';
    if (roi > 100) return 'text-amber-500';
    return 'text-gray-600';
  };

  const getProgressBarColor = (roi: number) => {
    if (roi > 300) return 'bg-success';
    if (roi > 100) return 'bg-amber-500';
    return 'bg-gray-400';
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              See What AI Can Save Your Business
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Adjust the sliders to estimate your potential savings
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
            {/* Input Controls */}
            <div className="space-y-8 mb-12">
              {/* Hours Per Week Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-700 font-semibold">
                    Hours spent on repetitive tasks per week
                  </label>
                  <span className="text-2xl font-bold text-primary">{hoursPerWeek}h</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{ minHeight: '44px' }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Hourly Cost Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-700 font-semibold">
                    Average hourly cost
                  </label>
                  <span className="text-2xl font-bold text-primary">${hourlyCost}</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{ minHeight: '44px' }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$15</span>
                  <span>$150</span>
                </div>
              </div>

              {/* Automation Percentage Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-gray-700 font-semibold">
                    Estimated automation percentage
                  </label>
                  <span className="text-2xl font-bold text-primary">{automationPercent}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={automationPercent}
                  onChange={(e) => setAutomationPercent(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{ minHeight: '44px' }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>20%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Weekly Savings */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-accent" />
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Weekly Savings
                  </h3>
                </div>
                <p className="text-4xl font-bold text-primary">
                  ${weeklySavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </p>
              </div>

              {/* Annual Value */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Annual Value
                  </h3>
                </div>
                <p className="text-4xl font-bold text-primary">
                  ${annualValue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </p>
              </div>

              {/* Payback Period */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    Payback Period
                  </h3>
                </div>
                <p className="text-4xl font-bold text-primary">
                  {paybackMonths} {paybackMonths === 1 ? 'month' : 'months'}
                </p>
              </div>

              {/* 3-Year ROI */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <Percent className="w-6 h-6 text-accent" />
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    3-Year ROI
                  </h3>
                </div>
                <p className={`text-4xl font-bold ${getROIColor(threeYearROI)}`}>
                  {threeYearROI.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}%
                </p>
                {/* Progress Bar */}
                <div className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${getProgressBarColor(threeYearROI)} transition-all duration-700 ease-out`}
                    style={{ width: `${Math.min((threeYearROI / 500) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="group bg-accent hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2">
                Validate These Numbers With Us
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Based on typical implementation cost of ${implementationCost.toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
