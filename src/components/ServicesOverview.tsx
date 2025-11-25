import { Zap, Activity, Rocket, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Intelligent Automation',
    tagline: 'Automate repetitive work, free your team',
    description: 'Build intelligent systems that handle routine tasks like document processing, customer inquiries, scheduling, and workflows.',
    capabilities: [
      'Workflow automation',
      'AI chatbots (support, internal, sales)',
      'Voice agents (inbound, outbound)',
      'System integrations',
    ],
  },
  {
    icon: Activity,
    title: 'Operational Intelligence',
    tagline: 'Uncover bottlenecks, optimize operations',
    description: 'Visualize how work actually flows. Identify delays, measure performance, and build real-time monitoring systems that keep your operations running smoothly.',
    capabilities: [
      'Process mining and visibility',
      'Custom dashboards and portals',
      'Real-time monitoring systems',
      'Performance analytics',
    ],
  },
  {
    icon: Rocket,
    title: 'Growth & Revenue Intelligence',
    tagline: 'Connect marketing to revenue, scale intelligently',
    description: 'Understand what drives growth. Build attribution systems, automate lead qualification, and create intelligent customer experiences that convert.',
    capabilities: [
      'Marketing attribution and analytics',
      'Lead qualification automation',
      'Customer journey analytics',
      'Sales-focused websites and portals',
    ],
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
          <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto">
            Three strategic services that transform how you work, optimize operations, and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card-dark rounded-2xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:-translate-y-2 fade-in-card card-shine glow-intense focus-within:border-accent focus-within:shadow-cyan-glow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
              tabIndex={0}
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

              {/* Capabilities */}
              <div className="space-y-2 mb-6 pb-6 border-b border-accent/20">
                {service.capabilities.map((capability, capIndex) => (
                  <div key={capIndex} className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span className="text-text-light/90 text-sm">{capability}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="group/btn flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-card-dark rounded px-2 py-1 -mx-2"
                aria-label={`Learn more about ${service.title}`}
              >
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
