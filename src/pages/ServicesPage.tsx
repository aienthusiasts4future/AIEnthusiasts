import { Zap, Activity, TrendingUp, ChevronRight, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DetailedUseCaseCard } from '../components/DetailedUseCaseCard';

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

const industries = {
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'AI solutions for patient care and hospital operations',
    useCases: [
      { name: 'Medical Diagnosis Support', icon: '📋' },
      { name: 'Patient Readmission Prevention', icon: '🏥' },
      { name: 'Medical Imaging Analysis', icon: '📊' },
      { name: 'Drug Discovery Acceleration', icon: '💊' },
      { name: 'Wearable Health Monitoring', icon: '⌚' },
      { name: 'Virtual Health Assistants', icon: '🤖' },
    ],
  },
  legal: {
    id: 'legal',
    name: 'Legal',
    icon: '⚖️',
    description: 'Transform legal operations with intelligent automation',
    useCases: [
      { name: 'Document Review', icon: '📄' },
      { name: 'Contract Analysis', icon: '📑' },
      { name: 'Case Management', icon: '💼' },
      { name: 'Client Intake', icon: '👥' },
      { name: 'Legal Research', icon: '🔍' },
      { name: 'Billing & Time Tracking', icon: '⏱️' },
    ],
  },
  it: {
    id: 'it',
    name: 'IT & SaaS',
    icon: '💻',
    description: 'Optimize development, support, and customer success',
    useCases: [
      { name: 'Ticket Routing', icon: '🎫' },
      { name: 'Code Documentation', icon: '📚' },
      { name: 'Customer Onboarding', icon: '🚀' },
      { name: 'Usage Analytics', icon: '📊' },
      { name: 'Support Chatbots', icon: '🤖' },
      { name: 'Incident Response', icon: '🚨' },
    ],
  },
  realestate: {
    id: 'realestate',
    name: 'Real Estate & Property Management',
    icon: '🏢',
    description: 'Automate property operations and tenant management',
    useCases: [
      { name: 'Tenant Screening', icon: '🔍' },
      { name: 'Lease Management', icon: '📄' },
      { name: 'Maintenance Requests', icon: '🔧' },
      { name: 'Rent Collection', icon: '💰' },
      { name: 'Property Tours', icon: '🏠' },
      { name: 'Vacancy Management', icon: '📋' },
    ],
  },
  retail: {
    id: 'retail',
    name: 'Retail',
    icon: '🛒',
    description: 'Drive sales with inventory, pricing, and personalization',
    useCases: [
      { name: 'Inventory Tracking', icon: '📦' },
      { name: 'Dynamic Pricing', icon: '💵' },
      { name: 'Customer Support', icon: '💬' },
      { name: 'Order Management', icon: '📋' },
      { name: 'Product Recommendations', icon: '🎯' },
      { name: 'Sales Analytics', icon: '📈' },
    ],
  },
  finance: {
    id: 'finance',
    name: 'Finance & Insurance',
    icon: '💰',
    description: 'Accelerate claims, detect fraud, assess risk',
    useCases: [
      { name: 'Claims Processing', icon: '📋' },
      { name: 'Fraud Detection', icon: '🔒' },
      { name: 'Risk Assessment', icon: '⚠️' },
      { name: 'Customer Verification', icon: '✓' },
      { name: 'Policy Management', icon: '📄' },
      { name: 'Compliance Monitoring', icon: '📊' },
    ],
  },
};

export function ServicesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
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
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedIndustry(key);
                  setExpandedService(null);
                  setTimeout(() => {
                    document.getElementById('industry-details')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }, 100);
                }}
                className={`group bg-card-dark rounded-xl p-6 sm:p-8 border-2 transition-all duration-300 hover:shadow-cyan-glow-xl hover:scale-105 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary ${
                  selectedIndustry === key
                    ? 'border-accent shadow-cyan-glow-xl'
                    : 'border-accent/20 hover:border-accent'
                }`}
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {industry.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Industry Details Section */}
        {selectedIndustry && industries[selectedIndustry as keyof typeof industries] && (
          <div
            id="industry-details"
            className="mt-16 animate-fadeIn scroll-mt-20"
            style={{
              animation: 'fadeIn 0.5s ease-in-out',
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {/* Industry Header Bar */}
              <div className="bg-card-dark border-l-4 border-accent rounded-lg p-6 mb-8 sticky top-20 z-10 shadow-lg">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{industries[selectedIndustry as keyof typeof industries].icon}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {industries[selectedIndustry as keyof typeof industries].name} Solutions
                  </h3>
                </div>
              </div>

              {/* Common Use Cases */}
              <div className="mb-12">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Common Use Cases
                </h4>
                <div className="flex flex-wrap gap-3">
                  {industries[selectedIndustry as keyof typeof industries].useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center transition-all duration-300"
                      style={{
                        gap: '8px',
                        background: 'rgba(0, 217, 255, 0.1)',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 217, 255, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 217, 255, 0.1)';
                      }}
                    >
                      <span className="text-xl">{useCase.icon}</span>
                      <span className="text-white font-medium">{useCase.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Solutions by Service Category */}
              <div className="mb-12">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Detailed Solutions by Service Category
                </h4>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-card-dark border-2 border-accent/20 rounded-lg overflow-hidden"
                    >
                      {/* Service Header - Always Visible */}
                      <button
                        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                        className="w-full flex items-center justify-between p-6 hover:bg-accent/5 transition-colors text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h5 className="text-lg sm:text-xl font-bold text-white">
                              {service.title}
                            </h5>
                            <p className="text-sm text-accent">{service.tagline}</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {expandedService === service.id ? (
                            <ChevronUp className="w-6 h-6 text-accent" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-accent" />
                          )}
                        </div>
                      </button>

                      {/* Expanded Content */}
                      {expandedService === service.id && (
                        <div className="px-6 pb-6 border-t border-accent/20 pt-6 animate-fadeIn">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Before */}
                            <div className="bg-primary-light rounded-lg p-5">
                              <h6 className="text-sm font-bold text-accent mb-3 flex items-center gap-2">
                                <span className="text-lg">❌</span> Before
                              </h6>
                              <ul className="space-y-2 text-text-light text-sm">
                                <li className="flex gap-2">
                                  <span>•</span>
                                  <span>Manual, time-consuming processes</span>
                                </li>
                                <li className="flex gap-2">
                                  <span>•</span>
                                  <span>High error rates and inconsistency</span>
                                </li>
                                <li className="flex gap-2">
                                  <span>•</span>
                                  <span>Limited visibility into operations</span>
                                </li>
                                <li className="flex gap-2">
                                  <span>•</span>
                                  <span>Reactive rather than proactive</span>
                                </li>
                              </ul>
                            </div>

                            {/* After */}
                            <div className="bg-primary-light rounded-lg p-5">
                              <h6 className="text-sm font-bold text-accent mb-3 flex items-center gap-2">
                                <span className="text-lg">✅</span> After
                              </h6>
                              <ul className="space-y-2 text-text-light text-sm">
                                <li className="flex gap-2">
                                  <span>•</span>
                                  <span>Automated workflows save hours daily</span>
                                </li>
                                <li className="flex gap-2">
                                  <span>•</span>
                                  <span>Consistent, accurate results</span>
                                </li>
                                <li className="flex gap-2">
                                  <span>•</span>
                                  <span>Real-time insights and monitoring</span>
                                </li>
                                <li className="flex gap-2">
                                  <span>•</span>
                                  <span>Proactive problem detection</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Use Case Examples - Healthcare Only */}
              {selectedIndustry === 'healthcare' && (
                <div className="mb-12 space-y-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Real-World Implementation Examples
                  </h4>

                  {/* Use Case 1: Intelligent Automation */}
                  <DetailedUseCaseCard
                    industryTag="Healthcare"
                    serviceTag="Intelligent Automation"
                    title="Medical Diagnosis & Treatment Planning"
                    problemStatement="Clinicians spent 30-60 minutes per complex diagnosis with limited access to comparative cases. Diagnostic accuracy ranged from 78-92%, contributing to 10% of preventable patient deaths. Limited time for pattern recognition across thousands of similar cases."
                    beforeIcon="📄"
                    beforeTitle="Before: Manual Entry"
                    beforeItems={[
                      '78-92% diagnostic accuracy',
                      '30-60 minutes per complex diagnosis',
                      '10% of deaths from diagnostic errors',
                      'Limited comparison to similar cases',
                    ]}
                    beforeTimeMetric="⏱️ 30-60 minutes per diagnosis"
                    afterIcon="🤖"
                    afterTitle="After: AI Automation"
                    afterSuccessMessage="⚠️ Analysis complete: 92-98% diagnostic accuracy achieved"
                    afterAlerts={[
                      'Flag: 30% reduction in diagnostic errors',
                      'Alert: 2-5 minutes analysis time',
                    ]}
                    afterItems={[
                      '92% of issues caught automatically',
                      'Pattern matching across thousands of cases',
                      'Real-time clinical decision support',
                    ]}
                    afterTimeMetric="⏱️ 2-5 minutes analysis time"
                    performanceBadge="→ 90% time reduction"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Analysis Time',
                        value: '2-5 min',
                        comparison: 'vs 30-60 min',
                      },
                      {
                        icon: '📋',
                        label: 'Accuracy',
                        value: '92-98%',
                        comparison: 'vs 78-92%',
                      },
                      {
                        icon: '🔄',
                        label: 'Error Reduction',
                        value: '30%',
                        comparison: 'Fewer errors',
                      },
                      {
                        icon: '🎯',
                        label: 'Patient Safety',
                        value: 'Enhanced',
                        comparison: 'Better outcomes',
                      },
                    ]}
                    technology="Deep learning + Medical knowledge base + Pattern recognition + Clinical guidelines"
                  />

                  {/* Use Case 2: Operational Intelligence */}
                  <DetailedUseCaseCard
                    industryTag="Healthcare"
                    serviceTag="Operational Intelligence"
                    title="Predictive Analytics for Hospital Readmissions"
                    problemStatement="20-25% readmission rate. 50-70% preventable. Manual tracking. $2.5M-$8.75M annual waste for 2,000-bed hospital."
                    beforeIcon="📊"
                    beforeTitle="Before: Reactive Approach"
                    beforeItems={[
                      '20-25% hospital readmission rate',
                      '50-70% preventable readmissions',
                      '$2.5M-$8.75M annual waste',
                      'Churn identified 2 weeks before',
                    ]}
                    beforeTimeMetric="⏱️ Reactive care after readmission"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Alert: High-risk patient identified. 82% readmission probability. Recommendation: Immediate intervention."
                    afterAlerts={[
                      'Flag: 6 weeks earlier detection',
                      'Alert: 80-90% prediction accuracy',
                    ]}
                    afterItems={[
                      'At-risk accounts flagged proactively',
                      '15-18% readmission rate achieved',
                      'Proactive intervention for high-risk patients',
                    ]}
                    afterTimeMetric="⏱️ Real-time health monitoring"
                    performanceBadge="→ 25% readmission reduction"
                    metrics={[
                      {
                        icon: '📉',
                        label: 'Readmission Rate',
                        value: '15-18%',
                        comparison: 'vs 20-25%',
                      },
                      {
                        icon: '💰',
                        label: 'Annual Savings',
                        value: '$1.5M-$4.6M',
                        comparison: 'Cost reduction',
                      },
                      {
                        icon: '🎯',
                        label: 'Prediction Accuracy',
                        value: '80-90%',
                        comparison: 'High accuracy',
                      },
                      {
                        icon: '⚡',
                        label: 'Detection Speed',
                        value: '6 weeks earlier',
                        comparison: 'vs 2 weeks',
                      },
                    ]}
                    technology="Predictive analytics + Patient monitoring + Risk scoring + Intervention protocols"
                  />

                  {/* Use Case 3: Growth & Revenue Intelligence */}
                  <DetailedUseCaseCard
                    industryTag="Healthcare"
                    serviceTag="Growth & Revenue Intelligence"
                    title="Virtual Health Assistants & Patient Engagement"
                    problemStatement="20-30% appointment no-shows. 50-60% medication non-adherence. 800 inquiries/day. Manual responses took 3.5 hours. After-hours queries unanswered."
                    beforeIcon="💬"
                    beforeTitle="Before: Manual Support"
                    beforeItems={[
                      '20-30% appointment no-show rate',
                      '50-60% medication non-adherence',
                      'Limited after-hours support',
                      '3.5 hours average response time',
                    ]}
                    beforeTimeMetric="⏱️ 3.5 hours average response"
                    afterIcon="🤖"
                    afterTitle="After: AI Engagement"
                    afterSuccessMessage="✓ Appointment scheduled! Medication reminder set. Patient question resolved instantly."
                    afterAlerts={[
                      'Flag: 40% call deflection achieved',
                      'Alert: 24/7 availability enabled',
                    ]}
                    afterItems={[
                      'Questions resolved instantly (81% of inquiries)',
                      '10-15% no-show rate (50% reduction)',
                      '30-40% adherence improvement',
                    ]}
                    afterTimeMetric="⏱️ Instant 24/7 response"
                    performanceBadge="→ 92% faster response time"
                    metrics={[
                      {
                        icon: '📅',
                        label: 'No-Show Rate',
                        value: '10-15%',
                        comparison: 'vs 20-30%',
                      },
                      {
                        icon: '💊',
                        label: 'Adherence',
                        value: '30-40% improvement',
                        comparison: 'Better compliance',
                      },
                      {
                        icon: '⚡',
                        label: 'Response Time',
                        value: 'Instant',
                        comparison: 'vs 3.5 hrs',
                      },
                      {
                        icon: '💰',
                        label: 'Annual Benefit',
                        value: '$1.1M-$4.6M',
                        comparison: 'Value created',
                      },
                    ]}
                    technology="NLP chatbot + Scheduling automation + Reminder system + Patient portal integration"
                  />
                </div>
              )}
            </div>
          </div>
        )}
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
