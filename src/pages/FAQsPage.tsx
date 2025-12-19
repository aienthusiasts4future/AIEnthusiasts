import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { FAQs } from '../components/FAQs';

export function FAQsPage() {
  return (
    <div className="min-h-screen bg-primary">
      <section className="relative pt-32 pb-20 overflow-hidden">
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
            <span className="text-white font-medium">FAQs</span>
          </nav>
        </div>
      </section>

      <FAQs />
    </div>
  );
}
