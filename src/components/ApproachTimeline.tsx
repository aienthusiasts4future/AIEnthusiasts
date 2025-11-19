import { useState } from 'react';
import { Compass, CheckCircle, Rocket, TrendingUp, ChevronDown } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

const phases: Phase[] = [
  {
    id: 1,
    title: 'Discover',
    duration: '1-2 weeks',
    icon: Compass,
    details: [
      'Define KPIs and success criteria',
      'Establish measurement baselines',
      'Identify "never events" (risk guardrails)',
    ],
  },
  {
    id: 2,
    title: 'Validate',
    duration: '2-4 weeks',
    icon: CheckCircle,
    details: [
      'Build proof-of-value with real data',
      'Test against baseline metrics',
      'Secure stakeholder buy-in',
    ],
  },
  {
    id: 3,
    title: 'Deploy',
    duration: '4-8 weeks',
    icon: Rocket,
    details: [
      'Production implementation',
      'Security and compliance checks',
      'Train internal champions',
    ],
  },
  {
    id: 4,
    title: 'Scale',
    duration: '8-24 weeks',
    icon: TrendingUp,
    details: [
      'Monitor performance against KPIs',
      'Optimize based on usage patterns',
      'Expand to adjacent use cases',
    ],
  },
];

export function ApproachTimeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Discovery to Production in 8-12 Weeks
          </h2>
          <p className="text-lg sm:text-xl text-text-light max-w-2xl mx-auto">
            A proven framework that delivers measurable results at every stage
          </p>
        </div>

        {/* Timeline - Desktop Horizontal Layout */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-[72px] left-0 right-0 h-1 bg-card-dark z-0">
              <div
                className="h-full bg-gradient-to-r from-accent to-success timeline-progress"
                style={{ width: '100%' }}
              />
            </div>

            {/* Phases */}
            <div className="relative z-10 grid grid-cols-4 gap-4">
              {phases.map((phase, index) => (
                <div key={phase.id} className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <button
                    onClick={() => togglePhase(phase.id)}
                    className="group relative mb-6 focus:outline-none"
                  >
                    <div className={`w-36 h-36 rounded-full flex items-center justify-center transition-all duration-300 ${
                      expandedPhase === phase.id
                        ? 'bg-gradient-to-br from-accent to-accent-secondary shadow-cyan-glow-xl scale-110'
                        : 'bg-card-dark border-4 border-accent hover:scale-105 shadow-cyan-glow'
                    }`}>
                      <phase.icon className={`w-16 h-16 transition-colors ${
                        expandedPhase === phase.id ? 'text-white' : 'text-accent'
                      }`} />
                    </div>

                    {/* Phase Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-lg">
                      {phase.id}
                    </div>
                  </button>

                  {/* Phase Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-text-light font-semibold">{phase.duration}</p>
                  </div>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedPhase === phase.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="bg-card-dark rounded-xl p-6 shadow-cyan-glow-lg border-2 border-accent">
                      <ul className="space-y-3">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-white">
                            <span className="text-accent mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <button
                    onClick={() => togglePhase(phase.id)}
                    className="mt-4 text-accent hover:text-accent-hover transition-colors"
                  >
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${
                      expandedPhase === phase.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile Vertical Layout */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[67px] top-0 bottom-0 w-1 bg-card-dark">
              <div className="w-full h-full bg-gradient-to-b from-accent to-success timeline-progress" />
            </div>

            {/* Phases */}
            <div className="relative z-10 space-y-8">
              {phases.map((phase) => (
                <div key={phase.id} className="flex gap-6">
                  {/* Icon Circle */}
                  <button
                    onClick={() => togglePhase(phase.id)}
                    className="relative flex-shrink-0 focus:outline-none"
                  >
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                      expandedPhase === phase.id
                        ? 'bg-gradient-to-br from-accent to-accent-secondary shadow-cyan-glow-xl scale-110'
                        : 'bg-card-dark border-4 border-accent shadow-cyan-glow'
                    }`}>
                      <phase.icon className={`w-12 h-12 transition-colors ${
                        expandedPhase === phase.id ? 'text-white' : 'text-accent'
                      }`} />
                    </div>

                    {/* Phase Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-lg">
                      {phase.id}
                    </div>
                  </button>

                  {/* Phase Content */}
                  <div className="flex-1 pt-2">
                    <button
                      onClick={() => togglePhase(phase.id)}
                      className="text-left w-full focus:outline-none mb-4"
                    >
                      <h3 className="text-2xl font-bold text-white mb-1">{phase.title}</h3>
                      <p className="text-sm text-text-light font-semibold mb-2">{phase.duration}</p>
                      <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${
                        expandedPhase === phase.id ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedPhase === phase.id ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-card-dark rounded-xl p-5 shadow-cyan-glow-lg border-2 border-accent">
                        <ul className="space-y-3">
                          {phase.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-white">
                              <span className="text-accent mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
