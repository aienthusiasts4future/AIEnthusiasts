import { Link } from 'react-router-dom';
import { Shield, Lock, CheckCircle, ChevronRight } from 'lucide-react';

export function LegalCompliancePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-text-light hover:text-accent transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-text-light" />
            <span className="text-white font-medium">Trust & Compliance</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trust & Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-accent font-semibold mb-6">
              Your Data Security is Our Top Priority
            </p>
            <p className="text-lg text-text-light leading-relaxed mb-12 max-w-3xl mx-auto">
              We understand that AI projects involve sensitive business data. Our consulting practice
              is built on a foundation of security-first architecture, industry-standard compliance,
              and ethical AI principles. Here's how we protect your business.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 backdrop-blur-sm">
                <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-white font-semibold text-base">
                  100% On-Premise Options Available
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 backdrop-blur-sm">
                <Lock className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-white font-semibold text-base">
                  Zero Data Sharing Guarantee
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 backdrop-blur-sm">
                <CheckCircle className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-white font-semibold text-base">
                  Vendor-Agnostic Approach
                </p>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => scrollToSection('data-security')}
                className="px-5 py-2.5 border-2 border-accent text-white rounded-full font-medium transition-all duration-300 hover:bg-accent hover:scale-105"
              >
                Data Security
              </button>
              <button
                onClick={() => scrollToSection('compliance-frameworks')}
                className="px-5 py-2.5 border-2 border-accent text-white rounded-full font-medium transition-all duration-300 hover:bg-accent hover:scale-105"
              >
                Compliance Frameworks
              </button>
              <button
                onClick={() => scrollToSection('ethical-ai')}
                className="px-5 py-2.5 border-2 border-accent text-white rounded-full font-medium transition-all duration-300 hover:bg-accent hover:scale-105"
              >
                Ethical AI
              </button>
              <button
                onClick={() => scrollToSection('privacy-policy')}
                className="px-5 py-2.5 border-2 border-accent text-white rounded-full font-medium transition-all duration-300 hover:bg-accent hover:scale-105"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className="px-5 py-2.5 border-2 border-accent text-white rounded-full font-medium transition-all duration-300 hover:bg-accent hover:scale-105"
              >
                FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections for navigation targets */}
      <section id="data-security" className="py-20 bg-card-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
          <p className="text-text-light">Content coming soon...</p>
        </div>
      </section>

      <section id="compliance-frameworks" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Compliance Frameworks</h2>
          <p className="text-text-light">Content coming soon...</p>
        </div>
      </section>

      <section id="ethical-ai" className="py-20 bg-card-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Ethical AI</h2>
          <p className="text-text-light">Content coming soon...</p>
        </div>
      </section>

      <section id="privacy-policy" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy</h2>
          <p className="text-text-light">Content coming soon...</p>
        </div>
      </section>

      <section id="faqs" className="py-20 bg-card-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-text-light">Content coming soon...</p>
        </div>
      </section>
    </div>
  );
}
