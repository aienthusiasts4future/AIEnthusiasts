import { Clock, ChevronDown } from 'lucide-react';

interface Metric {
  icon: string;
  label: string;
  value: string;
  comparison: string;
}

interface DetailedUseCaseCardProps {
  industryTag: string;
  serviceTag: string;
  title: string;
  problemStatement: string;
  beforeIcon: string;
  beforeTitle: string;
  beforeItems: string[];
  beforeTimeMetric: string;
  afterIcon: string;
  afterTitle: string;
  afterSuccessMessage: string;
  afterAlerts: string[];
  afterItems: string[];
  afterTimeMetric: string;
  performanceBadge: string;
  metrics: Metric[];
  technology: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function DetailedUseCaseCard({
  industryTag,
  serviceTag,
  title,
  problemStatement,
  beforeIcon,
  beforeTitle,
  beforeItems,
  beforeTimeMetric,
  afterIcon,
  afterTitle,
  afterSuccessMessage,
  afterAlerts,
  afterItems,
  afterTimeMetric,
  performanceBadge,
  metrics,
  technology,
  isExpanded = false,
  onToggle,
}: DetailedUseCaseCardProps) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
      style={{
        background: '#1a2332',
        border: '1px solid rgba(37, 227, 244, 0.2)',
      }}
    >
      {/* Header - Always Visible */}
      <div className="p-5 sm:p-6 md:p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          <span
            className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white"
            style={{ background: 'rgba(0, 217, 255, 0.2)', border: '1px solid rgba(0, 217, 255, 0.4)' }}
          >
            {serviceTag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
          {title}
        </h3>

        {/* One-line Description */}
        <p className="text-text-light text-sm leading-relaxed mb-3 sm:mb-4">
          {problemStatement.split('.')[0]}.
        </p>

        {/* View Details Button */}
        {onToggle && (
          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-all duration-300 group"
          >
            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div
          className="animate-fadeIn"
          style={{
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          {/* Full Problem Statement */}
          <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 border-b border-white/10">
            <p className="text-text-light text-sm sm:text-base leading-relaxed">
              <span className="font-semibold text-white">Problem:</span> {problemStatement}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-0">
        {/* LEFT - Before */}
        <div
          className="p-5 sm:p-6 md:p-8 md:border-r border-white/10"
          style={{ background: 'rgba(220, 38, 38, 0.05)' }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-3xl sm:text-4xl">{beforeIcon}</span>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">{beforeTitle}</h4>
              <span className="text-xs sm:text-sm" style={{ color: '#ef4444' }}>Manual Process</span>
            </div>
          </div>

          {/* Items */}
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {beforeItems.map((item, index) => (
              <li key={index} className="flex gap-2 text-text-light text-xs sm:text-sm">
                <span className="mt-1" style={{ color: '#ef4444' }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Time Metric */}
          <div
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg"
            style={{ background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.3)' }}
          >
            <Clock className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: '#ef4444' }} />
            <span className="text-xs sm:text-sm font-medium" style={{ color: '#ef4444' }}>
              {beforeTimeMetric}
            </span>
          </div>
        </div>

        {/* RIGHT - After */}
        <div
          className="p-5 sm:p-6 md:p-8 border-t md:border-t-0 border-white/10"
          style={{ background: 'rgba(0, 217, 255, 0.05)' }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-3xl sm:text-4xl">{afterIcon}</span>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">{afterTitle}</h4>
              <span className="text-xs sm:text-sm text-accent">AI-Powered</span>
            </div>
          </div>

          {/* Success Message */}
          <div
            className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-3 sm:mb-4"
            style={{ background: 'rgba(0, 217, 255, 0.1)', border: '1px solid rgba(0, 217, 255, 0.3)' }}
          >
            <p className="text-xs sm:text-sm text-white font-medium">
              {afterSuccessMessage}
            </p>
          </div>

          {/* Alert Boxes */}
          <div className="space-y-2 mb-3 sm:mb-4">
            {afterAlerts.map((alert, index) => (
              <div
                key={index}
                className="px-3 sm:px-4 py-2 rounded-lg"
                style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)' }}
              >
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#eab308' }}>
                  {alert}
                </p>
              </div>
            ))}
          </div>

          {/* Items */}
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {afterItems.map((item, index) => (
              <li key={index} className="flex gap-2 text-text-light text-xs sm:text-sm">
                <span className="mt-1 text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Time Metric */}
          <div
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-3 sm:mb-4"
            style={{ background: 'rgba(0, 217, 255, 0.1)', border: '1px solid rgba(0, 217, 255, 0.3)' }}
          >
            <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-accent">
              {afterTimeMetric}
            </span>
          </div>

          {/* Performance Badge */}
          <div className="flex justify-center">
            <div
              className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #25E3F4 0%, #20C0CF 100%)' }}
            >
              {performanceBadge}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Results Section */}
      <div
        className="p-5 sm:p-6 md:p-8 border-t"
        style={{ background: '#0f1621', borderColor: 'rgba(37, 227, 244, 0.2)' }}
      >
        <h5 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 text-center">
          Results After 90 Days
        </h5>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 rounded-lg text-center"
              style={{ background: 'rgba(0, 217, 255, 0.05)', border: '1px solid rgba(0, 217, 255, 0.2)' }}
            >
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{metric.icon}</div>
              <div className="text-[10px] sm:text-xs text-text-light mb-1">{metric.label}</div>
              <div className="text-base sm:text-lg font-bold text-white mb-0.5 sm:mb-1">{metric.value}</div>
              <div className="text-[10px] sm:text-xs text-text-light/70">{metric.comparison}</div>
            </div>
          ))}
        </div>

        {/* Technology Note */}
        <div
          className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg"
          style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <p className="text-xs sm:text-sm text-text-light">
            <span className="font-semibold text-white">Technology:</span> {technology}
          </p>
        </div>
          </div>
        </div>
      )}
    </div>
  );
}
