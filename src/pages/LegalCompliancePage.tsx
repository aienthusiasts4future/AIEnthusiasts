import { Link } from 'react-router-dom';
import { Shield, Lock, CheckCircle, ChevronRight, Server, Boxes, Key, Search, Code, Info, Check, CheckSquare, Globe, Heart, Award, Scale, Building, ChevronDown, Users, Eye, ShieldCheck, UserCheck, Clipboard } from 'lucide-react';
import { useState } from 'react';

export function LegalCompliancePage() {
  const [isTradeoffsExpanded, setIsTradeoffsExpanded] = useState(false);
  const [expandedPrivacyItems, setExpandedPrivacyItems] = useState<number[]>([]);

  const togglePrivacyItem = (index: number) => {
    setExpandedPrivacyItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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

      {/* Compliance Frameworks Section */}
      <section id="compliance-frameworks" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <CheckSquare className="w-16 h-16 text-accent" />
                <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Compliance & Industry Standards
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              We design AI solutions with compliance built-in. Depending on your industry and requirements,
              we can ensure adherence to relevant regulatory frameworks.
            </p>
          </div>

          {/* Compliance Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* CARD 1: GDPR */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                  Compliant
                </span>
              </div>
              <Globe className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                GDPR (General Data Protection Regulation)
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                For clients with EU data subjects or operations, we implement GDPR-compliant AI systems including:
              </p>
              <ul className="text-text-light text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Right to explanation for AI decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Data minimization and purpose limitation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Consent management and withdrawal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Data portability and deletion (right to be forgotten)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Privacy by design and by default</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Data Protection Impact Assessments (DPIA) for high-risk AI</span>
                </li>
              </ul>
            </div>

            {/* CARD 2: HIPAA */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30">
                  Available
                </span>
              </div>
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                HIPAA (Health Insurance Portability and Accountability Act)
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                For healthcare clients, we can implement HIPAA-compliant AI solutions:
              </p>
              <ul className="text-text-light text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Business Associate Agreements (BAA) signed before data access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>PHI encryption at rest and in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Audit logging of all PHI access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>On-premise or HIPAA-certified cloud deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>De-identification and anonymization options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Minimum necessary access controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Regular risk assessments</span>
                </li>
              </ul>
            </div>

            {/* CARD 3: SOC 2 Type II */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/30">
                  In Progress
                </span>
              </div>
              <Award className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                SOC 2 Type II
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                We are working toward SOC 2 Type II certification covering:
              </p>
              <ul className="text-text-light text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Security:</strong> Protection against unauthorized access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Availability:</strong> System uptime and disaster recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Confidentiality:</strong> Protection of confidential information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Processing Integrity:</strong> Complete, valid, accurate processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Privacy:</strong> Personal information handling per privacy notice</span>
                </li>
              </ul>
              <p className="text-accent text-sm font-semibold mt-4">
                Expected completion: Q3 2025
              </p>
            </div>

            {/* CARD 4: ISO 27001 */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full border border-accent/30">
                  Aligned
                </span>
              </div>
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                ISO 27001 (Information Security Management)
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                Our information security practices align with ISO 27001 standards:
              </p>
              <ul className="text-text-light text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Risk assessment and treatment methodology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Asset management and classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Access control policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Cryptography controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Security incident management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Business continuity planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Supplier security management</span>
                </li>
              </ul>
            </div>

            {/* CARD 5: CCPA */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                  Compliant
                </span>
              </div>
              <Scale className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                CCPA (California Consumer Privacy Act)
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                For clients serving California residents, we support CCPA requirements:
              </p>
              <ul className="text-text-light text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Consumer rights to know what data is collected</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Right to deletion of personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Right to opt-out of data selling (we never sell data)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Non-discrimination for exercising privacy rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Clear privacy notices and disclosures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Data inventory and mapping</span>
                </li>
              </ul>
            </div>

            {/* CARD 6: Industry-Specific */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-cyan-glow relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs font-semibold rounded-full border border-gray-500/30">
                  Custom
                </span>
              </div>
              <Building className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Industry-Specific Regulations
              </h3>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                We adapt to your industry's specific requirements:
              </p>
              <ul className="text-text-light text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Financial Services:</strong> SOX, PCI DSS, GLBA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Manufacturing:</strong> ITAR, EAR (export control)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Government:</strong> FedRAMP, FISMA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Education:</strong> FERPA, COPPA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Retail:</strong> PCI DSS, state privacy laws</span>
                </li>
              </ul>
              <p className="text-text-light text-sm mt-4">
                Consultation available for sector-specific compliance.
              </p>
            </div>
          </div>

          {/* Expandable Section */}
          <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
            <button
              onClick={() => setIsTradeoffsExpanded(!isTradeoffsExpanded)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
            >
              <h3 className="text-xl font-bold text-white">Understanding Compliance Trade-offs</h3>
              <ChevronDown
                className={`w-6 h-6 text-accent transition-transform duration-300 ${
                  isTradeoffsExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isTradeoffsExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 space-y-4 text-text-light leading-relaxed">
                <p>
                  Compliance often requires balancing innovation with regulation. Some AI techniques
                  (like certain deep learning approaches) may be challenging to explain under "right to
                  explanation" requirements. We help you navigate these trade-offs:
                </p>

                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Interpretable AI:</strong> We prioritize models that
                      can explain their decisions when required by regulation
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Documentation:</strong> We maintain detailed documentation
                      of data processing, model training, and decision logic
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Human-in-the-loop:</strong> We design systems with human
                      review stages for high-stakes decisions
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Regular audits:</strong> We build in audit trails and
                      logging for compliance verification
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <div>
                      <strong className="text-white">Continuous monitoring:</strong> We track model performance
                      and drift to ensure ongoing compliance
                    </div>
                  </li>
                </ul>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
                  <p className="text-yellow-200 text-sm">
                    <strong>Note:</strong> We are not lawyers. We implement technical controls to support
                    compliance, but you should consult with legal counsel to ensure full regulatory adherence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical AI Section */}
      <section id="ethical-ai" className="py-20 bg-card-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Scale className="w-16 h-16 text-accent" />
                <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ethical AI Practices
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              AI is powerful, but it must be used responsibly. We follow ethical guidelines to ensure
              our AI solutions are fair, transparent, and beneficial.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* PRINCIPLE 1: Fairness & Non-Discrimination */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-cyan-glow">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-12 h-12 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">
                  Fairness & Non-Discrimination
                </h3>
              </div>
              <p className="text-text-light leading-relaxed mb-4">
                We actively work to prevent bias and discrimination in AI systems:
              </p>
              <ul className="text-text-light space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Bias Assessment:</strong> We audit training data and model outputs for demographic biases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Fairness Metrics:</strong> We measure disparate impact across protected groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Diverse Data:</strong> We ensure training data represents diverse populations when applicable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Regular Testing:</strong> We test deployed models for fairness drift over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Human Review:</strong> High-stakes decisions include human oversight</span>
                </li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-accent rounded p-4">
                <p className="text-text-light text-sm italic">
                  <strong className="text-white">Example:</strong> For hiring automation, we test that the AI doesn't systematically disadvantage candidates based on gender, race, age, or other protected characteristics.
                </p>
              </div>
            </div>

            {/* PRINCIPLE 2: Transparency & Explainability */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-cyan-glow">
              <div className="flex items-start gap-4 mb-4">
                <Eye className="w-12 h-12 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">
                  Transparency & Explainability
                </h3>
              </div>
              <p className="text-text-light leading-relaxed mb-4">
                We believe clients should understand how AI makes decisions:
              </p>
              <ul className="text-text-light space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Model Documentation:</strong> We document all AI models, their purpose, and limitations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Decision Explanations:</strong> We provide explanations for AI recommendations when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Confidence Scores:</strong> We show AI confidence levels so users know when to be cautious</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">No Black Boxes:</strong> We avoid unexplainable models for high-stakes decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Client Education:</strong> We train your team to understand and question AI outputs</span>
                </li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-accent rounded p-4">
                <p className="text-text-light text-sm italic">
                  <strong className="text-white">Example:</strong> For loan approval AI, we can explain which factors (credit score, income, debt ratio) most influenced the decision.
                </p>
              </div>
            </div>

            {/* PRINCIPLE 3: Privacy & Data Minimization */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-cyan-glow">
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck className="w-12 h-12 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">
                  Privacy & Data Minimization
                </h3>
              </div>
              <p className="text-text-light leading-relaxed mb-4">
                We collect only what's necessary and protect it rigorously:
              </p>
              <ul className="text-text-light space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Minimal Data Collection:</strong> We use only the data required for the specific AI task</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Anonymization:</strong> We anonymize data whenever possible without degrading performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Retention Limits:</strong> We delete data when no longer needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Purpose Limitation:</strong> We don't repurpose data beyond the original consent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">User Control:</strong> We build in mechanisms for users to control their data</span>
                </li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-accent rounded p-4">
                <p className="text-text-light text-sm italic">
                  <strong className="text-white">Example:</strong> For customer support chatbots, we don't store conversation histories unless necessary for improvement, and we offer users the option to delete their chat logs.
                </p>
              </div>
            </div>

            {/* PRINCIPLE 4: Safety & Reliability */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-cyan-glow">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-12 h-12 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">
                  Safety & Reliability
                </h3>
              </div>
              <p className="text-text-light leading-relaxed mb-4">
                We build AI systems that fail safely and perform reliably:
              </p>
              <ul className="text-text-light space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Robust Testing:</strong> We test AI systems extensively before production deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Error Handling:</strong> We design graceful failure modes (human escalation when AI is uncertain)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Monitoring:</strong> We continuously monitor AI performance and accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Rollback Plans:</strong> We maintain previous versions and can quickly revert if needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Incident Response:</strong> We have documented procedures for handling AI failures</span>
                </li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-accent rounded p-4">
                <p className="text-text-light text-sm italic">
                  <strong className="text-white">Example:</strong> For medical AI assistants, if the system detects ambiguous symptoms, it escalates to a human clinician rather than making a potentially incorrect recommendation.
                </p>
              </div>
            </div>

            {/* PRINCIPLE 5: Human Agency & Oversight */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-cyan-glow">
              <div className="flex items-start gap-4 mb-4">
                <UserCheck className="w-12 h-12 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">
                  Human Agency & Oversight
                </h3>
              </div>
              <p className="text-text-light leading-relaxed mb-4">
                AI should augment humans, not replace judgment:
              </p>
              <ul className="text-text-light space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Human-in-the-Loop:</strong> Critical decisions always involve human review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Override Mechanisms:</strong> Users can override AI recommendations when appropriate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Opt-Out Options:</strong> We provide ways to request human handling instead of AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Skill Preservation:</strong> We design AI to enhance human expertise, not deskill workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Meaningful Control:</strong> Humans maintain meaningful control over AI systems</span>
                </li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-accent rounded p-4">
                <p className="text-text-light text-sm italic">
                  <strong className="text-white">Example:</strong> For document review AI, lawyers make final approval decisions—AI flags potential issues but humans have the final say.
                </p>
              </div>
            </div>

            {/* PRINCIPLE 6: Accountability & Governance */}
            <div className="bg-card-dark border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-cyan-glow">
              <div className="flex items-start gap-4 mb-4">
                <Clipboard className="w-12 h-12 text-accent flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">
                  Accountability & Governance
                </h3>
              </div>
              <p className="text-text-light leading-relaxed mb-4">
                We take responsibility for the AI systems we build:
              </p>
              <ul className="text-text-light space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Clear Ownership:</strong> We document who is responsible for AI system behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Audit Trails:</strong> We maintain logs of AI decisions for review and accountability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Feedback Loops:</strong> We build in mechanisms for users to report problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Regular Reviews:</strong> We conduct periodic ethics reviews of deployed AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Stakeholder Input:</strong> We involve diverse stakeholders in AI design decisions</span>
                </li>
              </ul>
              <div className="bg-accent/10 border-l-4 border-accent rounded p-4">
                <p className="text-text-light text-sm italic">
                  <strong className="text-white">Example:</strong> For automated hiring systems, we maintain records of all AI screening decisions, allow candidates to appeal, and regularly audit for adverse impact.
                </p>
              </div>
            </div>
          </div>

          {/* Commitment Callout Box */}
          <div className="bg-card-dark border-l-4 border-accent rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Commitment to Responsible AI
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              We refuse to build AI systems for:
            </p>
            <ul className="text-text-light space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Surveillance or mass monitoring without consent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Deceptive or manipulative purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Autonomous weapons or harm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Discrimination or bias amplification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Privacy violation or unauthorized data collection</span>
              </li>
            </ul>
            <p className="text-accent leading-relaxed">
              If we identify ethical concerns during a project, we will raise them with you immediately
              and work together to find appropriate solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Privacy Policy Summary
            </h2>
            <p className="text-sm text-text-light mb-6">
              Last Updated: January 2025 | Full policy available at /privacy
            </p>
            <p className="text-lg text-text-light max-w-4xl">
              Here's a plain-English summary of how we handle your information. For legal details, see our full Privacy Policy.
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4 mb-12">
            {/* ITEM 1: What Information We Collect */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(1)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">1. What Information We Collect</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(1) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(1) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-4 text-text-light leading-relaxed">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Website Visitors:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Analytics data (pages visited, time on site, device type) - via privacy-friendly analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Form submissions (name, email, company, message) - only when you contact us</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Cookies for essential functionality only (no tracking cookies)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Consulting Clients:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Business contact information (name, email, phone, company)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Project-specific data you share for AI implementations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Usage data from deployed AI systems (for monitoring and improvement)</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    We never collect sensitive personal data unless absolutely necessary for your specific AI project (e.g., building a healthcare AI requires sample medical data).
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 2: How We Use Your Information */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(2)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">2. How We Use Your Information</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(2) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(2) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-4 text-text-light leading-relaxed">
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>To respond to inquiries and provide consulting services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>To deliver and improve AI solutions you've contracted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>To send project updates and relevant service information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>To analyze website performance (aggregate, anonymous data only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>To comply with legal obligations</span>
                    </li>
                  </ul>
                  <div>
                    <h4 className="text-white font-semibold mb-2">We do not:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Sell your information to third parties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Use your data to train public AI models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Share client data between different clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>Send unsolicited marketing emails</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 3: How We Protect Your Information */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(3)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">3. How We Protect Your Information</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(3) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(3) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-4 text-text-light leading-relaxed">
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Encryption in transit (TLS 1.3) and at rest (AES-256)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Access controls and authentication (MFA for team members)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Regular security audits and penetration testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Secure development practices and code reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Employee training on data protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Incident response procedures</span>
                    </li>
                  </ul>
                  <p className="bg-accent/10 border-l-4 border-accent rounded p-4">
                    In the event of a data breach affecting your information, we will notify you within 72 hours per GDPR requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 4: Your Data Rights */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(4)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">4. Your Data Rights</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(4) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(4) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-4 text-text-light leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Access:</strong> Request a copy of data we hold about you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Correction:</strong> Request correction of inaccurate data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Portability:</strong> Receive your data in a machine-readable format</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Objection:</strong> Object to certain types of processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Restriction:</strong> Request limitation of how we use your data</span>
                    </li>
                  </ul>
                  <p className="text-accent">
                    To exercise these rights, email privacy@[yourdomain].com. We respond within 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 5: Data Retention */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(5)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">5. Data Retention</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(5) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(5) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-4 text-text-light leading-relaxed">
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Website inquiries:</strong> Retained for 2 years, then deleted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Client project data:</strong> Retained for duration of engagement + 90 days (for support), then deleted unless otherwise agreed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Legal/accounting records:</strong> Retained for 7 years per legal requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Anonymous analytics:</strong> Retained indefinitely (no personal data)</span>
                    </li>
                  </ul>
                  <p className="text-accent">
                    You can request early deletion at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 6: Third-Party Services */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(6)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">6. Third-Party Services</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(6) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(6) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-4 text-text-light leading-relaxed">
                  <p>We use minimal third-party services:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Website hosting:</strong> [Your hosting provider] - SOC 2 certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Email:</strong> [Your email provider] - GDPR compliant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Analytics:</strong> Self-hosted or privacy-friendly alternative (no Google Analytics)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-white">Payment processing:</strong> [If applicable] - PCI DSS compliant</span>
                    </li>
                  </ul>
                  <p>
                    We vet all third parties for security and privacy practices. We sign Data Processing Agreements (DPAs) with all vendors handling personal data.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 7: International Data Transfers */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(7)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">7. International Data Transfers</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(7) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(7) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-4 text-text-light leading-relaxed">
                  <p>Our team is based in [Your location]. If you're outside this jurisdiction:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>We use Standard Contractual Clauses (SCCs) for international transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>We offer on-premise deployment to keep data in your country</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>We comply with cross-border data transfer regulations (GDPR Article 46)</span>
                    </li>
                  </ul>
                  <p className="text-accent">
                    For EU clients, we can process data entirely within the EU upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 8: Children's Privacy */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(8)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">8. Children's Privacy</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(8) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(8) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-text-light leading-relaxed">
                  <p>
                    Our services are designed for businesses, not children. We do not knowingly collect information from anyone under 18. If we discover we've collected such data, we delete it immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* ITEM 9: Changes to This Policy */}
            <div className="bg-card-dark border border-accent/20 rounded-lg overflow-hidden">
              <button
                onClick={() => togglePrivacyItem(9)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white text-left">9. Changes to This Policy</h3>
                <ChevronDown
                  className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedPrivacyItems.includes(9) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedPrivacyItems.includes(9) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-text-light leading-relaxed">
                  <p>
                    We update this policy occasionally to reflect new practices or legal requirements. Material changes will be announced on our website and via email to active clients. Continued use of our services after changes constitutes acceptance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment Callout Box */}
          <div className="bg-card-dark border-l-4 border-accent rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Commitment to Responsible AI
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              We refuse to build AI systems for:
            </p>
            <ul className="text-text-light space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Surveillance or mass monitoring without consent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Deceptive or manipulative purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Autonomous weapons or harm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Discrimination or bias amplification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✗</span>
                <span>Privacy violation or unauthorized data collection</span>
              </li>
            </ul>
            <p className="text-accent leading-relaxed">
              If we identify ethical concerns during a project, we will raise them with you immediately
              and work together to find appropriate solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
