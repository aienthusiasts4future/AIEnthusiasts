import { Search, Beaker, Rocket, Network, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'AI Readiness Sprint',
    tagline: 'Find your quick wins',
    description: 'We audit your processes, score AI opportunities, and deliver a ranked roadmap with projected ROI.',
    timeline: '1-2 weeks',
    deliverable: 'Opportunity scorecard with 5 prioritized use cases',
  },
  {
    icon: Beaker,
    title: 'Proof-of-Value Build',
    tagline: 'See it work with your data',
    description: 'We build a working prototype of your top opportunity using real company data. No risk, measurable results.',
    timeline: '2-4 weeks',
    deliverable: 'Functioning prototype + metrics dashboard',
  },
  {
    icon: Rocket,
    title: 'Production Pilot',
    tagline: 'Deploy and enable your team',
    description: 'Full deployment with training for 2-3 internal champions. You own the solution, we provide 90-day support.',
    timeline: '4-8 weeks',
    deliverable: 'Production system + runbooks + trained team',
  },
  {
    icon: Network,
    title: 'Process Mining & Discovery',
    tagline: 'Uncover hidden opportunities',
    description: 'Use process mining to visualize workflows and identify automation bottlenecks you didn\'t know existed.',
    timeline: '1-2 weeks',
    deliverable: 'Visual process maps + opportunity matrix',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How We Deliver Measurable Results
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card-dark rounded-2xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:-translate-y-2 fade-in-card card-shine glow-intense"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-cyan-glow">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent group-hover:animate-pulse" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-accent font-semibold mb-3 text-sm sm:text-base">
                {service.tagline}
              </p>
              <p className="text-text-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6 pb-6 border-b border-accent/20">
                <div className="flex items-start gap-2">
                  <span className="text-text-light/60 font-medium min-w-[90px] text-sm">Timeline:</span>
                  <span className="text-accent font-semibold text-sm">{service.timeline}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-text-light/60 font-medium min-w-[90px] text-sm">Deliverable:</span>
                  <span className="text-white text-sm">{service.deliverable}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="group/btn flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
