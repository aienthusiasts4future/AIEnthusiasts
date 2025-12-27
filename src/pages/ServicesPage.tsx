import { Zap, Activity, TrendingUp, ChevronRight, ArrowDown, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DetailedUseCaseCard } from '../components/DetailedUseCaseCard';
import { BackToTop } from '../components/BackToTop';

/**
 * ServicesPage Component
 *
 * Main services page showcasing three core AI consulting services:
 * 1. Intelligent Automation - Automate repetitive work
 * 2. Operational Intelligence - Uncover bottlenecks and optimize operations
 * 3. Growth & Revenue Intelligence - Drive growth with predictive analytics
 *
 * Features:
 * - Industry-specific solutions (Healthcare, Professional Services, Manufacturing)
 * - Expandable service categories with detailed use cases
 * - Before/After comparisons for each use case
 * - Real-world metrics and ROI data
 * - Mobile-optimized with responsive design
 * - Loading states for smooth industry transitions
 * - Breadcrumb navigation for context
 * - Back-to-top button for easy navigation
 * - WCAG AA compliant contrast ratios
 */

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
      { name: 'Contract Review & Analysis', icon: '⚖️' },
      { name: 'Legal Research Automation', icon: '📚' },
      { name: 'Document Drafting', icon: '📝' },
      { name: 'Predictive Case Analytics', icon: '🎯' },
      { name: 'Compliance Monitoring', icon: '📋' },
      { name: 'Legal Writing Assistance', icon: '🤝' },
    ],
  },
  it: {
    id: 'it',
    name: 'IT & SaaS',
    icon: '💻',
    description: 'Optimize development, support, and customer success',
    useCases: [
      { name: 'Code Review Automation', icon: '💻' },
      { name: 'QA & Testing Automation', icon: '🧪' },
      { name: 'Customer Success Intelligence', icon: '📊' },
      { name: 'Bug Detection & Resolution', icon: '🔍' },
      { name: 'Usage Analytics', icon: '📈' },
      { name: 'Development Acceleration', icon: '🚀' },
    ],
  },
  realestate: {
    id: 'realestate',
    name: 'Real Estate & Property Management',
    icon: '🏢',
    description: 'Automate property operations and tenant management',
    useCases: [
      { name: 'Document Processing', icon: '📄' },
      { name: 'Predictive Maintenance', icon: '🔧' },
      { name: 'Tenant Screening', icon: '👥' },
      { name: 'Lease Management', icon: '📋' },
      { name: 'Rent Optimization', icon: '💰' },
      { name: 'Tenant Communication', icon: '📞' },
    ],
  },
  retail: {
    id: 'retail',
    name: 'Retail',
    icon: '🛒',
    description: 'Drive sales with inventory, pricing, and personalization',
    useCases: [
      { name: 'Inventory Management', icon: '📦' },
      { name: 'Dynamic Pricing', icon: '💰' },
      { name: 'Personalized Marketing', icon: '📧' },
      { name: 'Supply Chain Optimization', icon: '🚚' },
      { name: 'Customer Analytics', icon: '🛍️' },
      { name: 'Demand Forecasting', icon: '🎯' },
    ],
  },
  finance: {
    id: 'finance',
    name: 'Finance & Insurance',
    icon: '💰',
    description: 'Accelerate claims, detect fraud, assess risk',
    useCases: [
      { name: 'Claims Processing', icon: '💳' },
      { name: 'Fraud Detection', icon: '🔍' },
      { name: 'Risk Assessment', icon: '📊' },
      { name: 'Compliance Automation', icon: '📋' },
      { name: 'Underwriting Intelligence', icon: '🎯' },
      { name: 'Revenue Optimization', icon: '💰' },
    ],
  },
};

export function ServicesPage() {
  // State management
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>('healthcare');
  const [expandedDetailCards, setExpandedDetailCards] = useState<Set<number>>(new Set());
  const [isLoadingIndustry, setIsLoadingIndustry] = useState(false);
  const [expandedUseCaseTitle, setExpandedUseCaseTitle] = useState<string | null>(null);

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

  /**
   * Toggle detail card expansion and update breadcrumb
   */
  const toggleDetailCard = (index: number, title?: string) => {
    setExpandedDetailCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
        // If closing the last expanded card, clear the breadcrumb
        if (newSet.size === 0) {
          setExpandedUseCaseTitle(null);
        }
      } else {
        newSet.add(index);
        // Update breadcrumb with use case title
        if (title) {
          setExpandedUseCaseTitle(title);
        }
      }
      return newSet;
    });
  };

  /**
   * Handle industry selection with loading state
   * Respects prefers-reduced-motion for accessibility
   */
  const handleIndustryClick = (key: string) => {
    setIsLoadingIndustry(true);
    setSelectedIndustry(key);
    setExpandedDetailCards(new Set());
    setExpandedUseCaseTitle(null);

    // Simulate brief loading for smooth transition
    setTimeout(() => {
      setIsLoadingIndustry(false);

      const element = document.getElementById('industry-details');
      if (element) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      }
    }, 300);
  };

  /**
   * Scroll to a specific section with smooth behavior
   * Respects prefers-reduced-motion for accessibility
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <>
      {/* Hero Section - Consistent padding: 80px desktop, 40px mobile */}
      <section className="relative overflow-hidden animated-gradient pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-20">
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

      {/* Services Overview Section - Consistent padding: 80px desktop, 40px mobile */}
      <section className="py-10 sm:py-16 lg:py-20 bg-primary-light">
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

          {/* Services Grid - Card gaps: 24px */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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

      {/* Solutions by Industry Section - Consistent padding: 80px desktop, 40px mobile */}
      <section id="solutions-by-industry" className="py-10 sm:py-16 lg:py-20 bg-primary">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => handleIndustryClick(key)}
                className={`group bg-card-dark rounded-xl p-5 sm:p-6 border-2 transition-all duration-500 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary ${
                  selectedIndustry === key
                    ? 'border-accent shadow-cyan-glow-xl scale-105 selected'
                    : 'border-accent/20 hover:border-accent hover:shadow-cyan-glow-xl hover:scale-105'
                }`}
                style={{
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <div className="text-3xl sm:text-4xl mb-3">{industry.icon}</div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 ${
                  selectedIndustry === key ? 'text-accent' : 'text-white group-hover:text-accent'
                }`}>
                  {industry.name}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-3">
                  {industry.description}
                </p>

                {/* Common Use Cases */}
                <div className="mt-3 pt-3 border-t border-accent/20">
                  <p className="text-xs font-semibold text-accent mb-2">Common Use Cases:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.useCases.slice(0, 6).map((useCase, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 text-xs bg-accent/10 border border-accent/30 rounded-md px-2 py-1"
                      >
                        <span>{useCase.icon}</span>
                        <span className="text-text-light/90">{useCase.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Industry Details Section - Background pattern for visual distinction */}
        {selectedIndustry && industries[selectedIndustry as keyof typeof industries] && (
          <div
            id="industry-details"
            className="mt-16 animate-fadeIn scroll-mt-20 relative"
            style={{
              animation: 'fadeIn 0.5s ease-in-out',
              background: 'linear-gradient(135deg, rgba(8, 16, 17, 0.95) 0%, rgba(16, 33, 35, 0.95) 100%)',
              backgroundImage: `
                linear-gradient(135deg, rgba(8, 16, 17, 0.95) 0%, rgba(16, 33, 35, 0.95) 100%),
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(37, 227, 244, 0.03) 35px, rgba(37, 227, 244, 0.03) 70px)
              `,
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
              {/* Breadcrumb Navigation - Shows current context */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                  <li>
                    <Link to="/services" className="text-accent hover:text-accent-hover transition-colors">
                      Services
                    </Link>
                  </li>
                  <ChevronRight className="w-4 h-4 text-text-light/50" />
                  <li className="text-white font-medium">
                    {industries[selectedIndustry as keyof typeof industries].name}
                  </li>
                  {expandedUseCaseTitle && (
                    <>
                      <ChevronRight className="w-4 h-4 text-text-light/50" />
                      <li className="text-text-light truncate max-w-[200px] sm:max-w-none">
                        {expandedUseCaseTitle}
                      </li>
                    </>
                  )}
                </ol>
              </nav>

              {/* Loading Indicator */}
              {isLoadingIndustry && (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 text-accent animate-spin" />
                  <span className="ml-3 text-accent font-medium">Loading solutions...</span>
                </div>
              )}

              {/* Industry Header Bar */}
              {!isLoadingIndustry && (
                <div className="bg-card-dark border-l-4 border-accent rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 sticky top-16 sm:top-20 z-10 shadow-lg">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-3xl sm:text-4xl">{industries[selectedIndustry as keyof typeof industries].icon}</span>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                      {industries[selectedIndustry as keyof typeof industries].name} Solutions
                    </h3>
                  </div>
                </div>
              )}

              {/* Detailed Solutions by Service Category */}
              {!isLoadingIndustry && (
              <div className="mb-8 sm:mb-12">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Detailed Solutions by Service Category
                </h4>
                <div className="space-y-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      className="bg-card-dark border-2 border-accent/20 rounded-lg p-6"
                    >
                      {/* Service Header */}
                      <div className="flex items-center gap-4 mb-6">
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

                      {/* Before/After Content */}
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
                  ))}
                </div>
              </div>
              )}

              {/* Detailed Use Case Examples - Healthcare */}
              {!isLoadingIndustry && selectedIndustry === 'healthcare' && (
                <div className="mb-12 space-y-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Real-World Implementation Examples
                  </h4>

                  {/* Use Case 1: Intelligent Automation */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(0)}
                    onToggle={() => toggleDetailCard(0)}
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
                    isExpanded={expandedDetailCards.has(1)}
                    onToggle={() => toggleDetailCard(1)}
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
                    isExpanded={expandedDetailCards.has(2)}
                    onToggle={() => toggleDetailCard(2)}
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

              {/* Detailed Use Case Examples - Legal */}
              {!isLoadingIndustry && selectedIndustry === 'legal' && (
                <div className="mb-12 space-y-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Real-World Implementation Examples
                  </h4>

                  {/* Use Case 1: Intelligent Automation */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(3)}
                    onToggle={() => toggleDetailCard(3)}
                    industryTag="Legal"
                    serviceTag="Intelligent Automation"
                    title="Contract Review & Approval Automation"
                    problemStatement="Associates spent 6-8 hours/week reviewing contracts. Legal review took 3-5 days. 31% required multiple revision rounds. Manual review cost $2,400-$10,000 per contract with 10-15% error rate."
                    beforeIcon="📄"
                    beforeTitle="Before: Manual Review"
                    beforeItems={[
                      '3-5 days per contract review',
                      '$2,400-$10,000 per contract cost',
                      '10-15% error rate',
                      'Multiple revision rounds (31% of contracts)',
                    ]}
                    beforeTimeMetric="⏱️ 3-5 days per contract"
                    afterIcon="🤖"
                    afterTitle="After: AI Automation"
                    afterSuccessMessage="✓ Contract analysis complete: 92% of issues caught automatically. Ready for review in 2-4 hours."
                    afterAlerts={[
                      'Flag: 90% time reduction achieved',
                      'Alert: 95%+ first-pass approval rate',
                    ]}
                    afterItems={[
                      '2-4 hours per contract (90% reduction)',
                      '$100-300 per contract cost',
                      '<1% error rate',
                      '95%+ first-pass approval',
                    ]}
                    afterTimeMetric="⏱️ 2-4 hours per contract"
                    performanceBadge="→ 90% time reduction"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Review Time',
                        value: '2-4 hrs',
                        comparison: 'vs 3-5 days',
                      },
                      {
                        icon: '💰',
                        label: 'Cost per Contract',
                        value: '$100-300',
                        comparison: 'vs $2.4K-$10K',
                      },
                      {
                        icon: '🎯',
                        label: 'Error Rate',
                        value: '<1%',
                        comparison: 'vs 10-15%',
                      },
                      {
                        icon: '💵',
                        label: 'Annual Savings',
                        value: '$115K-$495K',
                        comparison: '50 contracts/year',
                      },
                    ]}
                    technology="NLP + Contract analysis AI + Clause extraction + Risk scoring + Legal knowledge base"
                  />

                  {/* Use Case 2: Operational Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(4)}
                    onToggle={() => toggleDetailCard(4)}
                    industryTag="Legal"
                    serviceTag="Operational Intelligence"
                    title="Legal Research Automation"
                    problemStatement="Attorneys spent 8-12 hours per week on legal research. Manual case law review cost $300-500/hour. 40% of research was redundant. Limited access to comprehensive precedent analysis."
                    beforeIcon="📚"
                    beforeTitle="Before: Manual Research"
                    beforeItems={[
                      '8-12 hours per week per attorney',
                      '$300-500/hour research cost',
                      '40% redundant research',
                      'Limited precedent analysis',
                    ]}
                    beforeTimeMetric="⏱️ 8-12 hours weekly"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Research complete: 500+ relevant cases analyzed. Key precedents identified in 1-2 hours."
                    afterAlerts={[
                      'Flag: 85% research time saved',
                      'Alert: Comprehensive precedent mapping enabled',
                    ]}
                    afterItems={[
                      '1-2 hours per research task',
                      'Automated case law analysis',
                      'Zero redundant research',
                      'Real-time precedent updates',
                    ]}
                    afterTimeMetric="⏱️ 1-2 hours per task"
                    performanceBadge="→ 85% time reduction"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Research Time',
                        value: '1-2 hrs',
                        comparison: 'vs 8-12 hrs',
                      },
                      {
                        icon: '💰',
                        label: 'Annual Savings',
                        value: '$125K-$250K',
                        comparison: 'Per attorney',
                      },
                      {
                        icon: '📊',
                        label: 'Research Quality',
                        value: '500+ cases',
                        comparison: 'vs 20-50 manual',
                      },
                      {
                        icon: '🎯',
                        label: 'Relevance Score',
                        value: '95%+',
                        comparison: 'High precision',
                      },
                    ]}
                    technology="Legal AI + Case law database + Citation analysis + Precedent mapping + Natural language search"
                  />

                  {/* Use Case 3: Growth & Revenue Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(5)}
                    onToggle={() => toggleDetailCard(5)}
                    industryTag="Legal"
                    serviceTag="Growth & Revenue Intelligence"
                    title="Predictive Case Analytics"
                    problemStatement="Case outcome prediction was based on intuition. No data-driven settlement recommendations. 65% of cases went to trial unnecessarily. Settlement timing was suboptimal, costing clients $50K-$200K per case."
                    beforeIcon="⚖️"
                    beforeTitle="Before: Intuition-Based"
                    beforeItems={[
                      '65% unnecessary trials',
                      'No predictive analytics',
                      '$50K-$200K excess costs per case',
                      'Suboptimal settlement timing',
                    ]}
                    beforeTimeMetric="⏱️ Manual case assessment"
                    afterIcon="🤖"
                    afterTitle="After: AI Analytics"
                    afterSuccessMessage="✓ Case analysis complete: 82% win probability. Optimal settlement window: 45-60 days. Recommended strategy provided."
                    afterAlerts={[
                      'Flag: 78% settlement accuracy',
                      'Alert: $75K-$150K average savings per case',
                    ]}
                    afterItems={[
                      '35% reduction in unnecessary trials',
                      '78% accurate outcome prediction',
                      'Data-driven settlement timing',
                      'Real-time case value assessment',
                    ]}
                    afterTimeMetric="⏱️ Instant analytics"
                    performanceBadge="→ $75K-$150K saved per case"
                    metrics={[
                      {
                        icon: '🎯',
                        label: 'Prediction Accuracy',
                        value: '78%',
                        comparison: 'Case outcomes',
                      },
                      {
                        icon: '💰',
                        label: 'Savings per Case',
                        value: '$75K-$150K',
                        comparison: 'Client benefit',
                      },
                      {
                        icon: '📉',
                        label: 'Trial Reduction',
                        value: '35%',
                        comparison: 'Fewer trials',
                      },
                      {
                        icon: '⚡',
                        label: 'Settlement Rate',
                        value: '+45%',
                        comparison: 'Better outcomes',
                      },
                    ]}
                    technology="Predictive analytics + Case law analysis + Settlement modeling + Judge/venue analysis + Historical data mining"
                  />
                </div>
              )}

              {/* Detailed Use Case Examples - IT & SaaS */}
              {!isLoadingIndustry && selectedIndustry === 'it' && (
                <div className="mb-12 space-y-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Real-World Implementation Examples
                  </h4>

                  {/* Use Case 1: Intelligent Automation */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(6)}
                    onToggle={() => toggleDetailCard(6)}
                    industryTag="IT & SaaS"
                    serviceTag="Intelligent Automation"
                    title="Automated Code Review & Security Scanning"
                    problemStatement="15+ PRs waiting for review. Senior devs spent 10 hours/week reviewing. Security vulnerabilities caught in production. 8 hours wait + 45 min manual review per PR. Inconsistent code quality standards."
                    beforeIcon="👨‍💻"
                    beforeTitle="Before: Manual Review"
                    beforeItems={[
                      '8 hours wait + 45 min manual review',
                      '15+ PRs waiting for review',
                      'Inconsistent code quality',
                      'Security vulnerabilities in production',
                    ]}
                    beforeTimeMetric="⏱️ 8 hours wait + 45 min review"
                    afterIcon="🤖"
                    afterTitle="After: AI Automation"
                    afterSuccessMessage="✓ Code scan complete: 0 security issues. 3 code quality improvements suggested. Ready for focused senior review."
                    afterAlerts={[
                      'Flag: 90% faster initial review',
                      'Alert: Security issues caught instantly',
                    ]}
                    afterItems={[
                      '5-minute AI scan + focused human review',
                      'Security issues caught instantly',
                      'Suggested fixes provided',
                      'Critical logic gets senior review with AI pre-analysis',
                    ]}
                    afterTimeMetric="⏱️ 5-minute AI scan"
                    performanceBadge="→ 90% faster initial review"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Review Time',
                        value: '5 min',
                        comparison: 'vs 8+ hrs',
                      },
                      {
                        icon: '🔒',
                        label: 'Security',
                        value: 'Instant catch',
                        comparison: 'Before production',
                      },
                      {
                        icon: '📈',
                        label: 'PR Queue',
                        value: '0 backlog',
                        comparison: 'vs 15+ waiting',
                      },
                      {
                        icon: '🎯',
                        label: 'Quality',
                        value: 'Consistent',
                        comparison: 'Standards enforced',
                      },
                    ]}
                    technology="Static analysis + Security scanning + Pattern detection + Code quality rules + AI-powered suggestions"
                  />

                  {/* Use Case 2: Operational Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(7)}
                    onToggle={() => toggleDetailCard(7)}
                    industryTag="IT & SaaS"
                    serviceTag="Operational Intelligence"
                    title="Intelligent QA & Testing Automation"
                    problemStatement="QA team spent 20 hours/sprint on regression testing. 30% of bugs found in production. Test coverage at 45%. Manual testing delayed releases by 3-5 days per sprint."
                    beforeIcon="🐛"
                    beforeTitle="Before: Manual Testing"
                    beforeItems={[
                      '20 hours/sprint on regression testing',
                      '30% of bugs found in production',
                      '45% test coverage',
                      '3-5 days release delay per sprint',
                    ]}
                    beforeTimeMetric="⏱️ 20 hours per sprint"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Test suite complete: 85% coverage achieved. 127 tests passed. 0 critical issues detected. Ready for deployment."
                    afterAlerts={[
                      'Flag: 85% reduction in testing time',
                      'Alert: 90% fewer production bugs',
                    ]}
                    afterItems={[
                      '3 hours/sprint automated testing',
                      '10% bugs found in production (90% reduction)',
                      '85% test coverage',
                      'Same-day deployment readiness',
                    ]}
                    afterTimeMetric="⏱️ 3 hours per sprint"
                    performanceBadge="→ 85% time reduction"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Testing Time',
                        value: '3 hrs',
                        comparison: 'vs 20 hrs',
                      },
                      {
                        icon: '🐛',
                        label: 'Production Bugs',
                        value: '10%',
                        comparison: 'vs 30%',
                      },
                      {
                        icon: '📊',
                        label: 'Test Coverage',
                        value: '85%',
                        comparison: 'vs 45%',
                      },
                      {
                        icon: '🚀',
                        label: 'Release Speed',
                        value: 'Same day',
                        comparison: 'vs 3-5 days',
                      },
                    ]}
                    technology="Automated testing + AI test generation + Visual regression + Performance monitoring + Intelligent test prioritization"
                  />

                  {/* Use Case 3: Growth & Revenue Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(8)}
                    onToggle={() => toggleDetailCard(8)}
                    industryTag="IT & SaaS"
                    serviceTag="Growth & Revenue Intelligence"
                    title="Customer Success Intelligence & Churn Prevention"
                    problemStatement="22% annual churn rate. Churn detected only 2 weeks before cancellation. No visibility into usage patterns. Customer success team reactive rather than proactive. $450K annual revenue lost to preventable churn."
                    beforeIcon="📉"
                    beforeTitle="Before: Reactive Approach"
                    beforeItems={[
                      '22% annual churn rate',
                      'Churn detected 2 weeks before',
                      'No usage pattern visibility',
                      '$450K annual revenue lost',
                    ]}
                    beforeTimeMetric="⏱️ Reactive after cancellation notice"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Alert: High churn risk detected. Usage dropped 40% in 30 days. Recommended: Immediate outreach + feature adoption campaign."
                    afterAlerts={[
                      'Flag: 8 weeks earlier detection',
                      'Alert: 82% prediction accuracy',
                    ]}
                    afterItems={[
                      '13% annual churn rate (41% reduction)',
                      'At-risk accounts flagged 8 weeks early',
                      'Real-time usage analytics',
                      'Proactive intervention playbooks',
                    ]}
                    afterTimeMetric="⏱️ Real-time monitoring"
                    performanceBadge="→ 41% churn reduction"
                    metrics={[
                      {
                        icon: '📉',
                        label: 'Churn Rate',
                        value: '13%',
                        comparison: 'vs 22%',
                      },
                      {
                        icon: '💰',
                        label: 'Revenue Saved',
                        value: '$185K',
                        comparison: 'Annual retention',
                      },
                      {
                        icon: '🎯',
                        label: 'Prediction',
                        value: '82%',
                        comparison: 'Accuracy rate',
                      },
                      {
                        icon: '⚡',
                        label: 'Detection',
                        value: '8 weeks earlier',
                        comparison: 'vs 2 weeks',
                      },
                    ]}
                    technology="Usage analytics + Behavioral scoring + Churn prediction ML + Customer health monitoring + Automated alerts"
                  />
                </div>
              )}

              {/* Detailed Use Case Examples - Real Estate */}
              {!isLoadingIndustry && selectedIndustry === 'realestate' && (
                <div className="mb-12 space-y-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Real-World Implementation Examples
                  </h4>

                  {/* Use Case 1: Intelligent Automation */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(9)}
                    onToggle={() => toggleDetailCard(9)}
                    industryTag="Real Estate"
                    serviceTag="Intelligent Automation"
                    title="Lease & Contract Document Processing"
                    problemStatement="500+ documents/month. 15 hours/week manual review. 12% compliance errors. Contract renewal deadlines missed. Manual extraction of key dates from leases, addendums, and amendments."
                    beforeIcon="📄"
                    beforeTitle="Before: Manual Processing"
                    beforeItems={[
                      '15 hours/week processing time',
                      '12% compliance errors',
                      'Contract renewal deadlines missed',
                      'Manual extraction of key dates',
                    ]}
                    beforeTimeMetric="⏱️ 15 hours/week processing"
                    afterIcon="🤖"
                    afterTitle="After: AI Automation"
                    afterSuccessMessage="✓ Document analysis complete: All key dates extracted. 89% auto-flagged for approval. Critical legal issues flagged for attorney review."
                    afterAlerts={[
                      'Flag: 95% faster processing',
                      'Alert: Zero missed deadlines',
                    ]}
                    afterItems={[
                      'Instant extraction (95% faster)',
                      'Critical dates flagged automatically (89%)',
                      'Zero missed deadlines',
                      'Complex legal issues → attorney review (11%)',
                    ]}
                    afterTimeMetric="⏱️ Instant extraction"
                    performanceBadge="→ 95% faster processing"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Processing Time',
                        value: 'Instant',
                        comparison: 'vs 15 hrs/week',
                      },
                      {
                        icon: '🎯',
                        label: 'Accuracy',
                        value: '89% auto-flagged',
                        comparison: 'High precision',
                      },
                      {
                        icon: '✅',
                        label: 'Compliance',
                        value: '0 missed deadlines',
                        comparison: 'vs frequent misses',
                      },
                      {
                        icon: '💰',
                        label: 'Time Saved',
                        value: '15 hrs/week',
                        comparison: 'Labor reduction',
                      },
                    ]}
                    technology="OCR + NLP + Document classification + Key date extraction + Compliance checking"
                  />

                  {/* Use Case 2: Operational Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(10)}
                    onToggle={() => toggleDetailCard(10)}
                    industryTag="Real Estate"
                    serviceTag="Operational Intelligence"
                    title="Predictive Maintenance for Properties"
                    problemStatement="Reactive maintenance cost 35% more than preventive. 48-hour average response time. 250+ maintenance requests/month. No visibility into equipment health. Tenant satisfaction at 68%."
                    beforeIcon="🔧"
                    beforeTitle="Before: Reactive Maintenance"
                    beforeItems={[
                      '35% higher reactive maintenance costs',
                      '48-hour average response time',
                      '250+ monthly maintenance requests',
                      '68% tenant satisfaction',
                    ]}
                    beforeTimeMetric="⏱️ 48-hour response time"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Alert: HVAC system in Unit 204 showing early failure signs. Schedule maintenance within 7 days to prevent emergency repair."
                    afterAlerts={[
                      'Flag: 40% reduction in emergency repairs',
                      'Alert: 85% tenant satisfaction achieved',
                    ]}
                    afterItems={[
                      '40% reduction in emergency repairs',
                      '12-hour average response time (75% faster)',
                      'Proactive maintenance scheduling',
                      '85% tenant satisfaction',
                    ]}
                    afterTimeMetric="⏱️ 12-hour response time"
                    performanceBadge="→ 40% cost reduction"
                    metrics={[
                      {
                        icon: '💰',
                        label: 'Maintenance Costs',
                        value: '40% lower',
                        comparison: 'Annual savings',
                      },
                      {
                        icon: '⏱️',
                        label: 'Response Time',
                        value: '12 hrs',
                        comparison: 'vs 48 hrs',
                      },
                      {
                        icon: '🔧',
                        label: 'Emergency Repairs',
                        value: '40% reduction',
                        comparison: 'Fewer emergencies',
                      },
                      {
                        icon: '😊',
                        label: 'Tenant Satisfaction',
                        value: '85%',
                        comparison: 'vs 68%',
                      },
                    ]}
                    technology="IoT sensors + Predictive analytics + Maintenance scheduling + Equipment monitoring + Work order automation"
                  />

                  {/* Use Case 3: Growth & Revenue Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(11)}
                    onToggle={() => toggleDetailCard(11)}
                    industryTag="Real Estate"
                    serviceTag="Growth & Revenue Intelligence"
                    title="Dynamic Rent Optimization & Vacancy Management"
                    problemStatement="Average vacancy: 45 days. 8% vacancy rate. Rent pricing based on annual market surveys. Lost revenue: $280K annually. No competitive intelligence. Average time-to-lease: 6 weeks."
                    beforeIcon="📉"
                    beforeTitle="Before: Static Pricing"
                    beforeItems={[
                      '45-day average vacancy',
                      '8% vacancy rate',
                      '$280K annual lost revenue',
                      '6-week average time-to-lease',
                    ]}
                    beforeTimeMetric="⏱️ 45-day vacancy period"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Market analysis complete: Recommended rent for Unit 305: $2,850 (3% increase). Optimal listing time: Now. Expected lease date: 18 days."
                    afterAlerts={[
                      'Flag: 60% vacancy reduction',
                      'Alert: $168K additional annual revenue',
                    ]}
                    afterItems={[
                      '18-day average vacancy (60% reduction)',
                      '3.2% vacancy rate (60% improvement)',
                      '$168K additional annual revenue',
                      'Real-time competitive pricing',
                    ]}
                    afterTimeMetric="⏱️ 18-day vacancy period"
                    performanceBadge="→ $168K additional revenue"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Vacancy Period',
                        value: '18 days',
                        comparison: 'vs 45 days',
                      },
                      {
                        icon: '📉',
                        label: 'Vacancy Rate',
                        value: '3.2%',
                        comparison: 'vs 8%',
                      },
                      {
                        icon: '💰',
                        label: 'Additional Revenue',
                        value: '$168K',
                        comparison: 'Annual increase',
                      },
                      {
                        icon: '📈',
                        label: 'Pricing Accuracy',
                        value: '95%',
                        comparison: 'Market-optimized',
                      },
                    ]}
                    technology="Market analysis + Competitor pricing + Demand forecasting + Dynamic pricing algorithms + Listing optimization"
                  />
                </div>
              )}

              {/* Detailed Use Case Examples - Retail */}
              {!isLoadingIndustry && selectedIndustry === 'retail' && (
                <div className="mb-12 space-y-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Real-World Implementation Examples
                  </h4>

                  {/* Use Case 1: Intelligent Automation */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(12)}
                    onToggle={() => toggleDetailCard(12)}
                    industryTag="Retail"
                    serviceTag="Intelligent Automation"
                    title="AI-Powered Inventory Management"
                    problemStatement="Manual inventory tracking across 15 locations. 15% stockout rate. 25% overstock waste. $500K annual lost sales. 40 hours/week manual counts. No real-time visibility."
                    beforeIcon="📦"
                    beforeTitle="Before: Manual Tracking"
                    beforeItems={[
                      '15% stockout rate costing $500K/year',
                      '25% overstock waste',
                      '40 hours/week manual inventory counts',
                      'No real-time visibility across locations',
                    ]}
                    beforeTimeMetric="⏱️ 40 hours/week counting"
                    afterIcon="🤖"
                    afterTitle="After: AI Automation"
                    afterSuccessMessage="✓ Inventory analysis complete: Product #4829 will stock out in 3 days. Auto-reorder placed. 15 slow-moving items identified for promotion."
                    afterAlerts={[
                      'Flag: 80% reduction in stockouts',
                      'Alert: 68% reduction in overstock',
                    ]}
                    afterItems={[
                      '3% stockout rate (80% reduction)',
                      '8% overstock (68% reduction)',
                      'Real-time tracking across all locations',
                      'Automated reordering and alerts',
                    ]}
                    afterTimeMetric="⏱️ Real-time automated tracking"
                    performanceBadge="→ $400K recovered revenue"
                    metrics={[
                      {
                        icon: '📉',
                        label: 'Stockouts',
                        value: '3%',
                        comparison: 'vs 15%',
                      },
                      {
                        icon: '📦',
                        label: 'Overstock',
                        value: '8%',
                        comparison: 'vs 25%',
                      },
                      {
                        icon: '💰',
                        label: 'Revenue Recovery',
                        value: '$400K',
                        comparison: 'Annual increase',
                      },
                      {
                        icon: '⏱️',
                        label: 'Time Saved',
                        value: '40 hrs/week',
                        comparison: 'Labor reduction',
                      },
                    ]}
                    technology="Real-time tracking + ML demand forecasting + Automated reordering + Multi-location sync + Low-stock alerts"
                  />

                  {/* Use Case 2: Operational Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(13)}
                    onToggle={() => toggleDetailCard(13)}
                    industryTag="Retail"
                    serviceTag="Operational Intelligence"
                    title="Supply Chain Optimization"
                    problemStatement="21-day average lead time. 30% late deliveries. $800K annual carrying costs. Limited supplier visibility. Reactive problem solving. Manual route planning."
                    beforeIcon="🚚"
                    beforeTitle="Before: Reactive Logistics"
                    beforeItems={[
                      '21-day average lead time',
                      '30% late delivery rate',
                      '$800K annual carrying costs',
                      'Limited visibility into supply chain',
                    ]}
                    beforeTimeMetric="⏱️ 21-day lead time"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Supply chain optimized: Shipment #3049 rerouted to avoid delay. Alternative supplier activated for Item #892. Expected delivery: 2 days early."
                    afterAlerts={[
                      'Flag: 43% faster delivery',
                      'Alert: $320K annual cost savings',
                    ]}
                    afterItems={[
                      '12-day average lead time (43% faster)',
                      '5% late delivery rate (83% improvement)',
                      '$480K carrying costs (40% reduction)',
                      'Predictive routing and supplier selection',
                    ]}
                    afterTimeMetric="⏱️ 12-day lead time"
                    performanceBadge="→ $320K annual savings"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Lead Time',
                        value: '12 days',
                        comparison: 'vs 21 days',
                      },
                      {
                        icon: '🚚',
                        label: 'On-Time Delivery',
                        value: '95%',
                        comparison: 'vs 70%',
                      },
                      {
                        icon: '💰',
                        label: 'Cost Savings',
                        value: '$320K',
                        comparison: 'Annual reduction',
                      },
                      {
                        icon: '📊',
                        label: 'Efficiency Gain',
                        value: '43%',
                        comparison: 'Overall improvement',
                      },
                    ]}
                    technology="Route optimization + Supplier analytics + Demand forecasting + Real-time tracking + Predictive delays"
                  />

                  {/* Use Case 3: Growth & Revenue Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(14)}
                    onToggle={() => toggleDetailCard(14)}
                    industryTag="Retail"
                    serviceTag="Growth & Revenue Intelligence"
                    title="Personalized Marketing Campaigns"
                    problemStatement="Generic email blasts. 2% email open rate. 0.5% conversion rate. $200K wasted ad spend annually. 85% cart abandonment. No customer segmentation."
                    beforeIcon="📧"
                    beforeTitle="Before: Generic Campaigns"
                    beforeItems={[
                      '2% email open rate',
                      '0.5% conversion rate',
                      '$200K wasted ad spend',
                      '85% cart abandonment rate',
                    ]}
                    beforeTimeMetric="⏱️ Weekly generic blasts"
                    afterIcon="🤖"
                    afterTitle="After: AI Personalization"
                    afterSuccessMessage="✓ Campaign optimized: Customer segment #5 (high-value browsers) identified. Personalized offer sent. Predicted conversion: 3.5x baseline."
                    afterAlerts={[
                      'Flag: 4x increase in open rates',
                      'Alert: 6.4x increase in conversions',
                    ]}
                    afterItems={[
                      '8% email open rate (4x increase)',
                      '3.2% conversion rate (6.4x increase)',
                      '$80K wasted spend (60% reduction)',
                      '62% cart abandonment (27% improvement)',
                    ]}
                    afterTimeMetric="⏱️ Real-time personalized triggers"
                    performanceBadge="→ $450K additional revenue"
                    metrics={[
                      {
                        icon: '📧',
                        label: 'Open Rate',
                        value: '8%',
                        comparison: 'vs 2%',
                      },
                      {
                        icon: '🎯',
                        label: 'Conversion Rate',
                        value: '3.2%',
                        comparison: 'vs 0.5%',
                      },
                      {
                        icon: '💰',
                        label: 'Additional Revenue',
                        value: '$450K',
                        comparison: 'Annual increase',
                      },
                      {
                        icon: '📈',
                        label: 'ROI',
                        value: '5.6x',
                        comparison: 'vs 1.2x',
                      },
                    ]}
                    technology="Customer segmentation + Behavioral analysis + Predictive recommendations + A/B testing + Dynamic content"
                  />
                </div>
              )}

              {/* Detailed Use Case Examples - Finance & Insurance */}
              {!isLoadingIndustry && selectedIndustry === 'finance' && (
                <div className="mb-12 space-y-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Real-World Implementation Examples
                  </h4>

                  {/* Use Case 1: Intelligent Automation */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(15)}
                    onToggle={() => toggleDetailCard(15)}
                    industryTag="Finance & Insurance"
                    serviceTag="Intelligent Automation"
                    title="Automated Claims Processing"
                    problemStatement="Manual claims review. 14-day average processing time. 35% error rate. $1.2M annual processing costs. 60% customer complaints. Paper-based documentation."
                    beforeIcon="💳"
                    beforeTitle="Before: Manual Processing"
                    beforeItems={[
                      '14-day average processing time',
                      '35% error rate requiring rework',
                      '$1.2M annual processing costs',
                      '60% customer complaints about delays',
                    ]}
                    beforeTimeMetric="⏱️ 14 days average"
                    afterIcon="🤖"
                    afterTitle="After: AI Automation"
                    afterSuccessMessage="✓ Claim #8294 processed: Documents verified. Policy coverage confirmed. Damage assessment complete. Payment approved: $4,850. Customer notified."
                    afterAlerts={[
                      'Flag: 86% faster processing',
                      'Alert: $840K annual savings',
                    ]}
                    afterItems={[
                      '2-day average processing time (86% faster)',
                      '5% error rate (86% reduction)',
                      '$360K annual costs (70% reduction)',
                      '90% customer satisfaction (50% improvement)',
                    ]}
                    afterTimeMetric="⏱️ 2 days average"
                    performanceBadge="→ $840K annual savings"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Processing Time',
                        value: '2 days',
                        comparison: 'vs 14 days',
                      },
                      {
                        icon: '✓',
                        label: 'Accuracy Rate',
                        value: '95%',
                        comparison: 'vs 65%',
                      },
                      {
                        icon: '💰',
                        label: 'Cost Savings',
                        value: '$840K',
                        comparison: 'Annual reduction',
                      },
                      {
                        icon: '😊',
                        label: 'Customer Satisfaction',
                        value: '90%',
                        comparison: 'vs 40%',
                      },
                    ]}
                    technology="Document OCR + Policy verification + Damage assessment AI + Automated approval workflows + Real-time notifications"
                  />

                  {/* Use Case 2: Operational Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(16)}
                    onToggle={() => toggleDetailCard(16)}
                    industryTag="Finance & Insurance"
                    serviceTag="Operational Intelligence"
                    title="Real-Time Fraud Detection"
                    problemStatement="$3.5M annual fraud losses. 45-day detection lag. 8% false positive rate. Manual investigation of all flags. Limited pattern recognition. Reactive fraud prevention."
                    beforeIcon="🔍"
                    beforeTitle="Before: Manual Detection"
                    beforeItems={[
                      '$3.5M annual fraud losses',
                      '45-day average detection time',
                      '8% false positive rate',
                      'Manual investigation of all alerts',
                    ]}
                    beforeTimeMetric="⏱️ 45-day detection lag"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Fraud detected: Transaction #7203 flagged. Pattern matches known fraud network. Account frozen. 3 related accounts identified. Estimated loss prevented: $127K."
                    afterAlerts={[
                      'Flag: 94% faster detection',
                      'Alert: $2.8M losses prevented',
                    ]}
                    afterItems={[
                      '$700K annual fraud losses (80% reduction)',
                      'Real-time detection (94% faster)',
                      '1% false positive rate (88% reduction)',
                      'Automated pattern recognition and alerts',
                    ]}
                    afterTimeMetric="⏱️ Real-time detection"
                    performanceBadge="→ $2.8M losses prevented"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Detection Speed',
                        value: 'Real-time',
                        comparison: 'vs 45 days',
                      },
                      {
                        icon: '🛡️',
                        label: 'Fraud Prevented',
                        value: '80%',
                        comparison: 'Loss reduction',
                      },
                      {
                        icon: '💰',
                        label: 'Savings',
                        value: '$2.8M',
                        comparison: 'Annual prevention',
                      },
                      {
                        icon: '🎯',
                        label: 'Accuracy',
                        value: '99%',
                        comparison: 'vs 92%',
                      },
                    ]}
                    technology="Behavioral analytics + Pattern recognition + Real-time monitoring + Network analysis + Automated case creation"
                  />

                  {/* Use Case 3: Growth & Revenue Intelligence */}
                  <DetailedUseCaseCard
                    isExpanded={expandedDetailCards.has(17)}
                    onToggle={() => toggleDetailCard(17)}
                    industryTag="Finance & Insurance"
                    serviceTag="Growth & Revenue Intelligence"
                    title="AI-Powered Risk Assessment & Underwriting"
                    problemStatement="10-day underwriting process. 22% policy decline rate. $600K annual underwriting costs. Limited risk data sources. Manual risk scoring. 40% pricing inaccuracy."
                    beforeIcon="📊"
                    beforeTitle="Before: Manual Underwriting"
                    beforeItems={[
                      '10-day underwriting process',
                      '22% policy decline rate',
                      '$600K annual underwriting costs',
                      '40% pricing inaccuracy leading to losses',
                    ]}
                    beforeTimeMetric="⏱️ 10 days average"
                    afterIcon="🤖"
                    afterTitle="After: AI Intelligence"
                    afterSuccessMessage="✓ Risk assessment complete: Applicant #9402 analyzed. 47 data sources integrated. Risk score: 7.2/10. Premium calculated: $1,840/year. Policy approved."
                    afterAlerts={[
                      'Flag: 85% faster underwriting',
                      'Alert: 32% more policies approved',
                    ]}
                    afterItems={[
                      '1.5-day underwriting process (85% faster)',
                      '15% decline rate (32% improvement)',
                      '$240K costs (60% reduction)',
                      '12% pricing accuracy (28% improvement)',
                    ]}
                    afterTimeMetric="⏱️ 1.5 days average"
                    performanceBadge="→ $950K additional revenue"
                    metrics={[
                      {
                        icon: '⏱️',
                        label: 'Processing Time',
                        value: '1.5 days',
                        comparison: 'vs 10 days',
                      },
                      {
                        icon: '✅',
                        label: 'Approval Rate',
                        value: '85%',
                        comparison: 'vs 78%',
                      },
                      {
                        icon: '💰',
                        label: 'Additional Revenue',
                        value: '$950K',
                        comparison: 'Annual increase',
                      },
                      {
                        icon: '🎯',
                        label: 'Pricing Accuracy',
                        value: '88%',
                        comparison: 'vs 60%',
                      },
                    ]}
                    technology="Multi-source data integration + ML risk modeling + Automated scoring + Dynamic pricing + Predictive analytics"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* CTA Section - Consistent padding: 80px desktop, 40px mobile */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-accent/10 to-accent/5 border-y-2 border-accent/20">
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

      {/* Back to Top Button - Appears after scrolling */}
      <BackToTop />
    </>
  );
}
