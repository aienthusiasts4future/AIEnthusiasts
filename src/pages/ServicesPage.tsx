import { Zap, Activity, TrendingUp, ChevronRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const services = [
  {
    id: 'intelligent-automation',
    icon: Zap,
    title: 'Intelligent Automation',
    tagline: 'Automate repetitive work, free your team',
    description: 'Build intelligent systems that handle routine tasks—document processing, customer inquiries, scheduling, and workflows. Using chatbots, voice agents, or automation tools—whatever fits your needs.',
    capabilities: [
      'Workflow automation',
      'AI chatbots (support, internal, sales)',
      'Voice agents (inbound, outbound)',
      'System integrations & dashboards',
    ],
  },
  {
    id: 'operational-intelligence',
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
    id: 'growth-revenue-intelligence',
    icon: TrendingUp,
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

export function ServicesPage() {
  useEffect(() => {
    document.title = 'AI Consulting Services | Automation, Analytics & Intelligence | AI Enthusiasts';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Three proven AI services for SMBs: Intelligent Automation, Operational Intelligence, and Growth & Revenue Intelligence. ROI-guaranteed implementations.'
      );
    }

    window.scrollTo(0, 0);

    return () => {
      document.title = 'AI Consulting for SMBs | Guaranteed ROI in 90 Days | AI Enthusiasts';
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Private, secure AI solutions for businesses with 50-500 employees. Proof-of-value in weeks, production-ready in months. No vendor lock-in. Book a free discovery call.'
        );
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden animated-gradient pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 border-2 border-white rotate-45"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 border-2 border-white"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm mb-8 fade-in" aria-label="Breadcrumb">
              <Link
                to="/"
                className="text-text-light hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded px-2 py-1"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-text-light/50" />
              <span className="text-white font-medium">Services</span>
            </nav>

            {/* Hero Content */}
            <div className="text-center fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Our AI <span className="text-accent">Consulting Services</span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl text-accent mb-6 sm:mb-8 font-semibold">
                Three strategic services that transform how you work, optimize operations, and drive growth
              </p>

              <p className="text-base sm:text-lg md:text-xl text-text-light mb-10 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                We help SMBs implement AI solutions that deliver measurable ROI within 90 days. From workflow automation to growth analytics, we build intelligent systems that solve real business problems.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0a1f1f"/>
          </svg>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              What We Offer
            </h2>
            <p className="text-lg sm:text-xl text-text-light leading-relaxed">
              Choose the service that matches your business challenge. Not sure where to start? Book a discovery call and we'll help you identify the best opportunity.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card-dark rounded-2xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:-translate-y-2 fade-in-card card-shine cursor-pointer focus-within:border-accent focus-within:shadow-cyan-glow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
                tabIndex={0}
                onClick={() => scrollToSection(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToSection(service.id);
                  }
                }}
                role="button"
                aria-label={`View details for ${service.title}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-cyan-glow">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-accent font-semibold mb-4 text-sm sm:text-base">
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
                  aria-label={`View details for ${service.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(service.id);
                  }}
                >
                  View Details
                  <ArrowDown className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Solutions by Industry
            </h2>
            <p className="text-lg sm:text-xl text-text-light leading-relaxed">
              See how our services solve real problems in your industry
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Healthcare */}
            <button
              className="group bg-card-dark rounded-xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:scale-105 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                Healthcare
              </h3>
              <p className="text-text-light leading-relaxed">
                AI solutions for patient care and hospital operations
              </p>
            </button>

            {/* Legal */}
            <button
              className="group bg-card-dark rounded-xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:scale-105 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                Legal
              </h3>
              <p className="text-text-light leading-relaxed">
                Transform legal operations with intelligent automation
              </p>
            </button>

            {/* IT & SaaS */}
            <button
              className="group bg-card-dark rounded-xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:scale-105 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                IT & SaaS
              </h3>
              <p className="text-text-light leading-relaxed">
                Optimize development, support, and customer success
              </p>
            </button>

            {/* Real Estate & Property Management */}
            <button
              className="group bg-card-dark rounded-xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:scale-105 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                Real Estate & Property Management
              </h3>
              <p className="text-text-light leading-relaxed">
                Automate property operations and tenant management
              </p>
            </button>

            {/* Retail */}
            <button
              className="group bg-card-dark rounded-xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:scale-105 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                Retail
              </h3>
              <p className="text-text-light leading-relaxed">
                Drive sales with inventory, pricing, and personalization
              </p>
            </button>

            {/* Finance & Insurance */}
            <button
              className="group bg-card-dark rounded-xl p-6 sm:p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-xl hover:scale-105 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                Finance & Insurance
              </h3>
              <p className="text-text-light leading-relaxed">
                Accelerate claims, detect fraud, assess risk
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-accent/10 to-accent/5 border-y-2 border-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-text-light mb-8 max-w-2xl mx-auto">
            Book a discovery call and let's identify the best AI opportunity for your business.
          </p>
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-cyan-glow-xl hover:shadow-cyan-glow-intense glow-intense"
          >
            Book a Discovery Call
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
