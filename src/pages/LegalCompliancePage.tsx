import { Link } from 'react-router-dom';
import { Shield, Lock, CheckCircle, ChevronRight, Server, Boxes, Key, Search, Code, Info, Check } from 'lucide-react';

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

      {/* Data Security Section */}
      <section id="data-security" className="py-20 bg-card-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Shield className="w-16 h-16 text-accent" />
                <Lock className="w-8 h-8 text-accent absolute -bottom-1 -right-1" />
                <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Data Security & Protection
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Security isn't an afterthought. It's built into every engagement. We offer multiple
              deployment models and follow industry best practices to ensure your data remains
              protected at all times.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Security Principles */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Security Approach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow">
                  <Server className="w-8 h-8 text-accent mb-3" />
                  <h4 className="text-white font-semibold mb-2">Private & Local AI Options</h4>
                  <p className="text-text-light text-sm leading-relaxed">
                    Deploy AI models on your infrastructure. Your data never leaves your firewall.
                    We support Ollama, local LLMs, and on-premise RAG systems.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow">
                  <Boxes className="w-8 h-8 text-accent mb-3" />
                  <h4 className="text-white font-semibold mb-2">Vendor-Agnostic Architecture</h4>
                  <p className="text-text-light text-sm leading-relaxed">
                    No lock-in to specific vendors. We integrate with your existing tools and can
                    deploy on any infrastructure (AWS, Azure, GCP, or on-premise).
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow">
                  <Lock className="w-8 h-8 text-accent mb-3" />
                  <h4 className="text-white font-semibold mb-2">End-to-End Encryption</h4>
                  <p className="text-text-light text-sm leading-relaxed">
                    All data in transit encrypted using TLS 1.3+. Data at rest encrypted using
                    AES-256. Key management follows NIST guidelines.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow">
                  <Key className="w-8 h-8 text-accent mb-3" />
                  <h4 className="text-white font-semibold mb-2">Access Control & Authentication</h4>
                  <p className="text-text-light text-sm leading-relaxed">
                    Role-based access control (RBAC) for all systems. Multi-factor authentication
                    (MFA) required. Principle of least privilege enforced.
                  </p>
                </div>

                {/* Card 5 */}
                <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow">
                  <Search className="w-8 h-8 text-accent mb-3" />
                  <h4 className="text-white font-semibold mb-2">Regular Security Audits</h4>
                  <p className="text-text-light text-sm leading-relaxed">
                    Third-party penetration testing annually. Vulnerability scanning on all
                    deployments. Incident response plan documented and tested.
                  </p>
                </div>

                {/* Card 6 */}
                <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow">
                  <Code className="w-8 h-8 text-accent mb-3" />
                  <h4 className="text-white font-semibold mb-2">Secure Development Practices</h4>
                  <p className="text-text-light text-sm leading-relaxed">
                    Code reviews for all implementations. Dependency scanning for vulnerabilities.
                    Secrets management using industry-standard vaults.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Data Handling Commitments */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Data Handling Commitments</h3>
              <div className="bg-card-dark border border-accent/20 rounded-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-text-light leading-relaxed">
                      We never use your data to train public AI models
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-text-light leading-relaxed">
                      We never share your data with third parties without explicit consent
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-text-light leading-relaxed">
                      We never retain your data after engagement ends (unless contractually agreed
                      for support)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-text-light leading-relaxed">
                      We provide data deletion guarantees upon request
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-text-light leading-relaxed">
                      We maintain separate environments for each client (no shared tenancy unless
                      approved)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-text-light leading-relaxed">
                      We sign NDAs and Data Processing Agreements (DPA) before any data access
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-text-light leading-relaxed">
                      We conduct background checks on all team members with data access
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-text-light leading-relaxed">
                      We maintain professional liability insurance covering data breaches
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout Box */}
          <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Info className="w-8 h-8 text-accent flex-shrink-0" />
              <div className="flex-1">
                <p className="text-white leading-relaxed mb-4">
                  Question about our security practices? We're happy to provide detailed
                  architecture diagrams, SOC 2 Type II reports (when available), and penetration
                  test summaries under NDA. Contact us for specifics.
                </p>
                <button className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-cyan-glow-lg hover:shadow-cyan-glow-xl">
                  Request Security Documentation
                </button>
              </div>
            </div>
          </div>
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
