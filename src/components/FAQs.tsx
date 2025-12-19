import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What types of AI solutions do you offer?',
    answer: 'We specialize in custom AI solutions tailored to your business needs, including process automation, predictive analytics, natural language processing, computer vision, and intelligent chatbots. Each solution is designed to integrate seamlessly with your existing systems and deliver measurable ROI.',
    category: 'Services',
  },
  {
    id: 2,
    question: 'How long does it take to implement an AI solution?',
    answer: 'Most of our AI implementations are designed to deliver value within 90 days. The timeline depends on the complexity of your requirements, but we follow a rapid deployment methodology that prioritizes quick wins and iterative improvements.',
    category: 'Services',
  },
  {
    id: 3,
    question: 'Do I need technical expertise to use your AI solutions?',
    answer: 'No technical expertise required. We design our solutions with user-friendly interfaces and provide comprehensive training for your team. Our goal is to make AI accessible and easy to use for everyone in your organization.',
    category: 'Services',
  },
  {
    id: 4,
    question: 'How do you ensure data privacy and security?',
    answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure data storage, and strict access controls. Your data stays on your infrastructure or in your chosen cloud environment. We never share or use your data for training models, and we comply with GDPR, CCPA, and other relevant data protection regulations.',
    category: 'Security',
  },
  {
    id: 5,
    question: 'Where is my data stored?',
    answer: 'Your data remains under your control at all times. We can deploy solutions on your existing infrastructure, in your preferred cloud provider (AWS, Azure, Google Cloud), or in a hybrid environment. You choose where your data lives, and we ensure it stays secure.',
    category: 'Security',
  },
  {
    id: 6,
    question: 'Are your AI models trained on my data?',
    answer: 'We only use your data to train models specifically for your use case, and only with your explicit permission. Your data is never shared with other clients or used to train general-purpose models. Each client gets a private, isolated AI solution.',
    category: 'Security',
  },
  {
    id: 7,
    question: 'What are your pricing models?',
    answer: 'We offer flexible pricing based on your needs: project-based pricing for one-time implementations, monthly retainers for ongoing support and optimization, and outcome-based pricing tied to measurable business results. Contact us for a custom quote tailored to your requirements.',
    category: 'Business',
  },
  {
    id: 8,
    question: 'What kind of ROI can I expect?',
    answer: 'ROI varies by use case, but our clients typically see 3-10x return on investment within the first year. Common benefits include reduced operational costs (20-50%), increased productivity (30-60%), improved accuracy (40-90%), and faster decision-making. We help you define clear success metrics before starting any project.',
    category: 'Business',
  },
  {
    id: 9,
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and dedicated support channels. We also provide training for your team and documentation to ensure long-term success.',
    category: 'Business',
  },
  {
    id: 10,
    question: 'Can your solutions integrate with our existing systems?',
    answer: 'Absolutely. We specialize in seamless integration with existing business systems including CRMs, ERPs, databases, and custom applications. We work with your IT team to ensure smooth integration without disrupting your operations.',
    category: 'Services',
  },
  {
    id: 11,
    question: 'What industries do you serve?',
    answer: 'We work with small and medium businesses across various industries including healthcare, finance, retail, manufacturing, professional services, and technology. Our solutions are customized to meet industry-specific requirements and compliance standards.',
    category: 'Business',
  },
  {
    id: 12,
    question: 'How do you handle compliance and regulations?',
    answer: 'We stay current with all relevant regulations including GDPR, CCPA, HIPAA, SOC 2, and industry-specific compliance requirements. Our solutions are built with compliance in mind, and we provide documentation and audit trails to support your compliance efforts.',
    category: 'Security',
  },
  {
    id: 13,
    question: 'What happens if the AI makes a mistake?',
    answer: 'We build safeguards and human-in-the-loop processes to catch and correct errors. All critical decisions include review mechanisms, and we continuously monitor model performance to identify and address issues quickly. We also maintain detailed logs for auditing and troubleshooting.',
    category: 'Services',
  },
  {
    id: 14,
    question: 'Can I cancel or modify my project?',
    answer: 'Yes, we offer flexible engagement terms. Projects are broken into phases with clear milestones, allowing you to adjust scope or pause work as needed. We believe in building long-term partnerships based on mutual value and trust.',
    category: 'Business',
  },
  {
    id: 15,
    question: 'How do you measure success?',
    answer: 'We define clear, measurable KPIs at the start of every project. These typically include metrics like cost savings, time saved, error reduction, revenue increase, or customer satisfaction improvements. We provide regular reports and dashboards to track progress against these goals.',
    category: 'Business',
  },
];

export function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQId, setOpenFAQId] = useState<number | null>(null);

  const filteredFAQs = faqs.filter((faq) => {
    const query = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.category.toLowerCase().includes(query)
    );
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQId(openFAQId === id ? null : id);
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
          <div className="mb-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-text-light" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-card-dark border-2 border-accent/20 rounded-lg text-white placeholder-text-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-text-light">
                Found {filteredFAQs.length} {filteredFAQs.length === 1 ? 'result' : 'results'}
              </p>
            )}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card-dark rounded-lg border-2 border-accent/20 overflow-hidden transition-all duration-300 hover:border-accent/40"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg"
                    aria-expanded={openFAQId === faq.id}
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                        openFAQId === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQId === faq.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-text-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))
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
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-text-light mb-4">
              Still have questions?
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-cyan-glow-lg hover:shadow-cyan-glow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
