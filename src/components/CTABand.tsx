import { ArrowRight } from 'lucide-react';

interface CTABandProps {
  onCTAClick?: () => void;
}

export function CTABand({ onCTAClick }: CTABandProps) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary via-blue-700 to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 border-2 border-white rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to See Measurable Results?
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
            Book a 30-minute discovery call. No sales pitch—just honest assessment of whether AI fits your needs.
          </p>

          {/* CTA Button */}
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg mb-6"
          >
            Schedule Your Discovery Call
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Reassurance Text */}
          <p className="text-blue-100 text-sm sm:text-base">
            We reply within 1 business day. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
