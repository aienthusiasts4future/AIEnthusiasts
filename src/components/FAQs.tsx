import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, ChevronRight, Briefcase, Scale, Shield, DollarSign } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: typeof Briefcase;
  count: number;
  faqs: FAQ[];
}

const categories: FAQCategory[] = [
  {
    id: 'service-delivery',
    title: 'Service Delivery',
    icon: Briefcase,
    count: 8,
    faqs: [
      {
        id: 'sd-1',
        question: 'How long does a typical engagement take?',
        answer: `It depends on the service and scope:

• AI Readiness Sprint: 1-2 weeks
• Proof-of-Value Build: 2-4 weeks
• Production Pilot: 4-8 weeks
• Full cycle (Discovery → Production): 8-12 weeks

We provide weekly progress updates and can adjust timelines based on your needs. Our four-phase approach allows you to pause after any phase if priorities change.`,
      },
      {
        id: 'sd-2',
        question: 'Do we need to have AI expertise on our team?',
        answer: `No. That's why we're here. Our engagements include:

• Knowledge transfer and training
• Documentation in plain English (not technical jargon)
• Training for 2-3 internal 'champions' who can maintain the system
• 90-day post-launch support

You'll own and understand the AI systems we build. We teach, not create dependency.`,
      },
      {
        id: 'sd-3',
        question: "What if the AI solution doesn't deliver the projected ROI?",
        answer: `We guarantee results. If projected ROI isn't achieved within 90 days:

• We optimize the system for free until targets are met
• We provide additional training if adoption is the issue
• We document lessons learned transparently

Our success is tied to your success. We only recommend projects we're confident will deliver value.`,
      },
      {
        id: 'sd-4',
        question: 'Can you work with our existing tools and systems?',
        answer: `Yes. We're vendor-agnostic and integration-focused:

• We connect with your ERP, CRM, helpdesk, or custom systems
• We use APIs, webhooks, or scheduled data syncs
• We don't require you to change existing workflows unnecessarily
• We document all integrations for your IT team

If integration isn't feasible, we'll explain why honestly and suggest alternatives.`,
      },
      {
        id: 'sd-5',
        question: 'What happens after the 90-day support period?',
        answer: `You have options:

• Self-maintain: Your trained team manages the system (most common)
• Retainer support: Monthly fee for ongoing optimization and troubleshooting
• Project-based: Engage us for specific enhancements or expansions
• Annual check-in: Periodic reviews to ensure system still meets needs

We design systems to be maintainable by your team, not dependent on us.`,
      },
      {
        id: 'sd-6',
        question: 'How do you handle project changes or scope creep?',
        answer: `Transparently and fairly:

• We define scope clearly in Phase 1 (Discover)
• We identify 'nice-to-haves' vs. 'must-haves' upfront
• If you request changes, we estimate time/cost impact before proceeding
• We use change request process (documented and agreed upon)
• We never surprise you with unexpected bills

Minor adjustments are normal and included. Major scope changes are discussed and approved.`,
      },
      {
        id: 'sd-7',
        question: 'Can we start with a small pilot before committing to a large project?',
        answer: `Absolutely. That's our recommended approach:

• Start with AI Readiness Sprint ($8K-$12K) - low commitment
• Proceed to Proof-of-Value for one use case ($15K-$25K)
• Scale to Production Pilot only if PoV succeeds

You control the decision at each phase. Many clients start with one use case, prove value, then expand.`,
      },
      {
        id: 'sd-8',
        question: "What if we're not sure which service we need?",
        answer: `Book a free 30-minute discovery call:

• We ask about your pain points and goals
• We recommend the best starting point (often Readiness Sprint or Process Mining)
• We provide honest assessment - if AI isn't the right solution, we'll tell you
• No sales pressure, just expert guidance

Our goal is to find the right fit, not sell you something you don't need.`,
      },
    ],
  },
  {
    id: 'legal-compliance',
    title: 'Legal & Compliance',
    icon: Scale,
    count: 7,
    faqs: [
      {
        id: 'lc-1',
        question: 'What legal agreements do you sign before starting work?',
        answer: `Standard agreements for all engagements:

• Master Services Agreement (MSA) - defines terms, liability, IP ownership
• Statement of Work (SOW) - specific to each project, defines scope and deliverables
• Non-Disclosure Agreement (NDA) - protects your confidential information
• Data Processing Agreement (DPA) - for any personal data handling (GDPR compliance)

We can work with your legal templates or provide ours. We're flexible.`,
      },
      {
        id: 'lc-2',
        question: 'Who owns the IP (intellectual property) for AI systems you build?',
        answer: `You do. Our default terms:

• You own all custom code, models, and documentation we create for you
• You own all data and insights generated
• We retain ownership of our pre-existing tools and frameworks
• We can't reuse your data or specific solutions for other clients without permission

This is negotiable if you want different terms. Ownership is clearly documented in the MSA.`,
      },
      {
        id: 'lc-3',
        question: "What's your liability if something goes wrong?",
        answer: `We carry professional liability insurance and our contracts include:

• Liability cap (typically limited to fees paid for that project)
• Indemnification for our negligence or breach
• No liability for decisions made based on AI recommendations (you retain final decision authority)
• Force majeure clauses for uncontrollable events

We also maintain errors & omissions insurance. Specific limits are in the contract and negotiable for larger engagements.`,
      },
      {
        id: 'lc-4',
        question: 'Are you GDPR/HIPAA/SOC 2 certified?',
        answer: `Current status:

• GDPR: Compliant (we follow all GDPR requirements for EU data)
• HIPAA: Available (we sign BAAs and follow HIPAA technical safeguards)
• SOC 2 Type II: In progress (expected Q3 2025)
• ISO 27001: Aligned (practices follow ISO 27001, formal certification planned)

We can provide detailed documentation of our compliance practices under NDA.`,
      },
      {
        id: 'lc-5',
        question: 'Can you guarantee compliance with our industry regulations?',
        answer: `We can implement technical controls, but:

• We're not lawyers - you should have legal counsel review for full compliance
• We implement security best practices and documented controls
• We can align our solutions with regulatory requirements you specify
• We recommend you conduct independent compliance audits
• We provide documentation to support your compliance efforts

Think of us as implementing the technical foundation; your legal team ensures full regulatory compliance.`,
      },
      {
        id: 'lc-6',
        question: "What happens if there's a data breach?",
        answer: `Our incident response process:

• Immediate containment and investigation (within 1 hour of detection)
• Notification to affected clients within 72 hours (GDPR requirement)
• Root cause analysis and remediation plan
• Transparent communication throughout
• Post-mortem report and preventive measures

We maintain cyber liability insurance and follow industry-standard incident response protocols.`,
      },
      {
        id: 'lc-7',
        question: 'Can we audit your security practices?',
        answer: `Yes. We welcome audits:

• You can audit our code, architecture, and security controls
• We provide documentation of our security practices
• We can arrange meetings with our technical team
• We participate in third-party security assessments
• We're transparent about our security posture

Audits should be reasonable in scope and scheduled in advance.`,
      },
    ],
  },
  {
    id: 'data-security',
    title: 'Data & Security',
    icon: Shield,
    count: 8,
    faqs: [
      {
        id: 'ds-1',
        question: 'Where is our data stored?',
        answer: `You choose:

• On-premise: Data stays on your infrastructure (we provide the AI, you host it)
• Private cloud: Your dedicated cloud instance (AWS, Azure, GCP - your choice)
• Our infrastructure: Secure cloud hosting with encryption (if you prefer)

For sensitive data, we recommend on-premise. We support all deployment models.`,
      },
      {
        id: 'ds-2',
        question: 'Do you use our data to train your AI models?',
        answer: `Never for public models. Specifics:

• We don't use your data to train models that serve other clients
• We don't use your data to improve public AI services (ChatGPT, etc.)
• We only use your data to train models specifically for you
• If we want to use anonymized insights for research, we ask permission first
• You can request deletion of all data at any time

This is in our contracts and we take it seriously.`,
      },
      {
        id: 'ds-3',
        question: 'Can we use on-premise AI to avoid cloud risks?',
        answer: `Absolutely. We specialize in this:

• Local LLMs (Ollama, Llama, Mistral - running on your servers)
• On-premise RAG systems (your documents never leave your network)
• Air-gapped deployments (no internet connection required)
• Full data sovereignty (everything stays in your data center)

Many of our clients choose this for sensitive industries (healthcare, finance, legal).`,
      },
      {
        id: 'ds-4',
        question: 'How do you prevent AI from leaking sensitive information?',
        answer: `Multiple safeguards:

• Input filtering: Remove PII before AI processing when possible
• Output filtering: Scan AI responses for accidental sensitive data disclosure
• Access controls: Only authorized users see sensitive outputs
• Audit logging: Track all queries and responses for review
• Fine-tuning: Train models to refuse sensitive data requests

For high-risk scenarios, we add human review before sensitive outputs are released.`,
      },
      {
        id: 'ds-5',
        question: 'What if we want to delete all our data?',
        answer: `We make it easy:

• Email us with a deletion request
• We confirm your identity and authorization
• We delete all data within 30 days (some backups may take longer)
• We provide written confirmation of deletion
• We delete from all systems, backups, and vendor systems

Exceptions: We may retain anonymized analytics or legal records as required by law.`,
      },
      {
        id: 'ds-6',
        question: 'Do you use third-party AI services (OpenAI, Anthropic, etc.)?',
        answer: `Only with your explicit approval:

• We ask permission before using any external AI APIs
• We explain what data will be sent and how it's used
• We use enterprise plans with privacy guarantees when available
• We offer on-premise alternatives for sensitive data
• We document all third-party services in your architecture diagram

For most clients handling sensitive data, we use local/private AI models instead.`,
      },
      {
        id: 'ds-7',
        question: 'How do you secure AI models from adversarial attacks?',
        answer: `We implement AI security best practices:

• Input validation: Prevent prompt injection and jailbreak attempts
• Rate limiting: Prevent abuse and reconnaissance
• Monitoring: Detect unusual query patterns that indicate attacks
• Adversarial testing: We test models with attack scenarios
• Regular updates: Patch vulnerabilities as they're discovered

AI security is evolving. We stay current with the latest threats and defenses.`,
      },
      {
        id: 'ds-8',
        question: 'Can we review the AI training data?',
        answer: `Yes, for custom models:

• We document all data sources used for training
• You can audit training datasets for bias or quality issues
• We provide data lineage (where data came from)
• You can request removal of specific data from training sets
• We explain data preprocessing and augmentation steps

For pre-trained models (e.g., GPT-4), we can't control the original training data, but we can explain what we know about it.`,
      },
    ],
  },
  {
    id: 'pricing-engagement',
    title: 'Pricing & Engagement',
    icon: DollarSign,
    count: 10,
    faqs: [
      {
        id: 'pe-1',
        question: "What's your pricing model?",
        answer: `Transparent, project-based pricing:

• AI Readiness Sprint: $8K-$12K (fixed price)
• Proof-of-Value Build: $15K-$25K (fixed price)
• Production Pilot: $30K-$50K (fixed price)
• Full cycle engagements: $53K-$87K (depending on complexity)

We also offer retainer options for ongoing support. Prices are tailored to scope, not hourly rates.`,
      },
      {
        id: 'pe-2',
        question: 'Why is AI consulting expensive?',
        answer: `Fair question. You're paying for:

• Expert knowledge (AI, ML, data science, domain expertise)
• Risk reduction (we've made the mistakes so you don't have to)
• Time savings (we move faster than building in-house)
• Results guarantee (we don't get paid unless you get value)
• Knowledge transfer (we train your team, not create dependency)

Compare the cost to hiring full-time AI talent ($150K-$300K/year per person) or failed DIY projects.`,
      },
      {
        id: 'pe-3',
        question: 'Do you offer payment plans?',
        answer: `Yes, for larger engagements:

• Milestone-based payments (e.g., 30% upfront, 30% at Phase 2, 40% at completion)
• Monthly retainers for ongoing work
• Success-based pricing (partial payment upfront, remainder tied to ROI - negotiable)

We're flexible. Our goal is to make valuable projects affordable.`,
      },
      {
        id: 'pe-4',
        question: "What's included in your pricing?",
        answer: `Everything you need:

• All consulting and development work
• Software licenses for tools we provide (no hidden fees)
• Training for your team
• Documentation and runbooks
• 90-day post-launch support
• Project management and communication

Not included: Your infrastructure costs (cloud hosting, etc.) and third-party API fees (e.g., if you use GPT-4).`,
      },
      {
        id: 'pe-5',
        question: 'Can we get a fixed-price quote?',
        answer: `After Phase 1 (Discovery), yes:

• Discovery phase helps us understand exact requirements
• We provide detailed fixed-price quote for Phase 2-4
• Quote includes scope, deliverables, timeline, and price
• You approve before we proceed

For simple, well-defined projects (e.g., 'build a FAQ chatbot'), we can quote upfront.`,
      },
      {
        id: 'pe-6',
        question: 'What if we need to pause or cancel a project?',
        answer: `Life happens. Our policy:

• You can pause after any phase with 2 weeks' notice
• You pay only for work completed
• You keep all deliverables and documentation created up to that point
• You can resume later (subject to our availability)
• Cancellation fees apply only if we've started work you haven't paid for

We prefer flexibility over rigid contracts.`,
      },
      {
        id: 'pe-7',
        question: 'Do you offer discounts?',
        answer: `Occasionally:

• Founding clients: 40-50% off first engagement (for testimonial and case study)
• Non-profit organizations: 20% discount (on case-by-case basis)
• Multi-engagement commitments: Volume pricing for 3+ projects
• Referral bonuses: $2K credit for referring a client who signs

We don't compete on price. We compete on results. But we're reasonable.`,
      },
      {
        id: 'pe-8',
        question: 'What if we have a limited budget?',
        answer: `Let's talk. Options:

• Start smaller: Begin with Readiness Sprint to identify the highest-ROI opportunity
• Phased approach: Implement one use case, use savings to fund the next
• Pilot program: Proof-of-Value at reduced rate in exchange for case study
• DIY support: We advise, you implement (lower cost, slower results)
• Grants/financing: We can help identify AI adoption grants or financing options

We'd rather find a way to work together than lose a good client to budget constraints.`,
      },
      {
        id: 'pe-9',
        question: 'How do we pay you?',
        answer: `Simple options:

• Wire transfer or ACH (preferred for US clients)
• Check (for US clients)
• International wire (for global clients)
• Credit card (for smaller engagements, 3% processing fee applies)

We issue invoices via email. Payment terms are typically Net 30.`,
      },
      {
        id: 'pe-10',
        question: 'Do you require a retainer?',
        answer: `For new clients, yes:

• 30-50% upfront to start discovery phase
• Remaining balance at milestones or project completion
• Retainer protects both parties and ensures commitment

For established clients or retainer arrangements, we're more flexible.`,
      },
    ],
  },
];

export function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQId, setOpenFAQId] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getFilteredCategories = () => {
    if (!searchQuery) return categories;

    const query = searchQuery.toLowerCase();
    return categories
      .map((category) => ({
        ...category,
        faqs: category.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query) ||
            category.title.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.faqs.length > 0);
  };

  const filteredCategories = getFilteredCategories();

  const toggleFAQ = (id: string) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Common questions about our services, security, and business practices
            </p>
          </div>

          {/* Search Box */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-text-light" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..."
                aria-label="Search frequently asked questions"
                className="w-full pl-12 pr-4 py-4 bg-card-dark border border-accent/20 rounded-lg text-white placeholder-text-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-text-light">
                Found {filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0)} results
              </p>
            )}
          </div>

          {/* Categories */}
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {filteredCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="border-t-2 border-accent pt-8">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <IconComponent className="w-10 h-10 text-accent flex-shrink-0" />
                      <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                        {category.title}
                      </h3>
                      <span className="text-sm text-text-light bg-accent/10 px-3 py-1 rounded-full">
                        {category.faqs.length} {category.faqs.length === 1 ? 'question' : 'questions'}
                      </span>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-3">
                      {category.faqs.map((faq) => (
                        <div
                          key={faq.id}
                          className={`bg-card-dark border border-accent/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/40 ${
                            openFAQId === faq.id ? 'border-accent/40' : ''
                          }`}
                        >
                          <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg hover:bg-accent/5 transition-colors"
                            aria-expanded={openFAQId === faq.id}
                            aria-controls={`answer-${faq.id}`}
                            id={`question-${faq.id}`}
                          >
                            <h4 className="text-base md:text-lg font-semibold text-white pr-4 flex-1">
                              {faq.question}
                            </h4>
                            <ChevronRight
                              className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                                openFAQId === faq.id ? 'rotate-90' : ''
                              }`}
                            />
                          </button>
                          <div
                            id={`answer-${faq.id}`}
                            role="region"
                            aria-labelledby={`question-${faq.id}`}
                            className={`overflow-hidden transition-all duration-300 ${
                              openFAQId === faq.id ? 'max-h-[1000px] pb-5 px-5 md:pb-6 md:px-6' : 'max-h-0'
                            }`}
                          >
                            <div className="text-text-light leading-relaxed text-sm md:text-base whitespace-pre-line">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-light text-lg">
                No FAQs found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-accent hover:text-accent-hover font-medium transition-colors"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-text-light mb-4 text-lg">
              Still have questions?
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-cyan-glow-lg hover:shadow-cyan-glow-xl"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
