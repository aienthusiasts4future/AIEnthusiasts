import { Shield, Unlock, Users, ArrowRight, Calculator } from 'lucide-react';
import { Header } from './components/Header';
import { ROICalculator } from './components/ROICalculator';
import { ServicesOverview } from './components/ServicesOverview';
import { ApproachTimeline } from './components/ApproachTimeline';
import { WhyUs } from './components/WhyUs';
import { CTABand } from './components/CTABand';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden animated-gradient min-h-screen flex items-center">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 border-2 border-white rotate-45"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 border-2 border-white"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-accent/50 shadow-cyan-glow glow-intense">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-white text-xs sm:text-sm font-medium">Security-First</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-accent/50 shadow-cyan-glow glow-intense">
                <Unlock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-white text-xs sm:text-sm font-medium">Vendor-Agnostic</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-accent/50 shadow-cyan-glow glow-intense">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-white text-xs sm:text-sm font-medium">Full Enablement</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Guaranteed ROI in <span className="text-accent">90 Days</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-text-light mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Private, secure AI solutions built for Small and Medium Businesses.
              No vendor lock-in. No data sharing. Just measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button
                onClick={scrollToForm}
                className="group w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-cyan-glow-xl hover:shadow-cyan-glow-intense flex items-center justify-center gap-2 glow-intense"
              >
                Book a Free Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToForm}
                className="group w-full sm:w-auto bg-transparent border-2 border-accent text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-accent/20 hover:shadow-cyan-glow-lg flex items-center justify-center gap-2 glow-intense"
              >
                <Calculator className="w-5 h-5" />
                Calculate Your ROI
              </button>
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

      {/* ROI Calculator Section */}
      <ROICalculator />

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Approach Timeline Section */}
      <ApproachTimeline />

      {/* Why Us Section */}
      <WhyUs />

      {/* CTA Band */}
      <CTABand onCTAClick={scrollToForm} />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
