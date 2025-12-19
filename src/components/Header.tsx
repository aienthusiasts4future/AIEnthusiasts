import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToContact = () => {
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
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-cyan-glow' : 'bg-primary'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={handleLogoClick}
                className="text-xl font-bold text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg px-2 py-1"
                aria-label="AI Enthusiasts home"
              >
                AI Enthusiasts
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#services"
                className="text-white hover:text-accent font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg px-3 py-2"
              >
                Services
              </a>
              <Link
                to="/legal-compliance"
                className="text-white hover:text-accent font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg px-3 py-2"
              >
                Trust & Compliance
              </Link>
              <Link
                to="/FAQs"
                className="text-white hover:text-accent font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg px-3 py-2"
              >
                FAQs
              </Link>
              <button
                onClick={scrollToContact}
                className="text-white hover:text-accent font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg px-3 py-2"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-card-dark z-50 md:hidden transform transition-transform duration-300 shadow-cyan-glow-xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-accent/20">
            <span className="text-lg font-bold text-white">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-light hover:bg-card-darker hover:text-accent rounded-lg transition-colors"
              >
                Services
              </a>
              <Link
                to="/legal-compliance"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-light hover:bg-card-darker hover:text-accent rounded-lg transition-colors"
              >
                Trust & Compliance
              </Link>
              <Link
                to="/FAQs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-text-light hover:bg-card-darker hover:text-accent rounded-lg transition-colors"
              >
                FAQs
              </Link>
              <button
                onClick={scrollToContact}
                className="block w-full text-left px-4 py-3 text-text-light hover:bg-card-darker hover:text-accent rounded-lg transition-colors"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-accent/20">
            <button
              onClick={scrollToContact}
              className="w-full bg-accent hover:bg-accent-hover text-primary-light font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-cyan-glow-lg hover:shadow-cyan-glow-xl glow-intense"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 md:h-18" />
    </>
  );
}
