import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'EN', name: 'English', nativeName: 'English' },
  { code: 'ES', name: 'Spanish', nativeName: 'Español' },
  { code: 'ZH', name: 'Mandarin Chinese', nativeName: '中文' },
  { code: 'HI', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'AR', name: 'Arabic', nativeName: 'العربية' },
  { code: 'PT', name: 'Portuguese', nativeName: 'Português' },
  { code: 'FR', name: 'French', nativeName: 'Français' },
  { code: 'DE', name: 'German', nativeName: 'Deutsch' },
  { code: 'JA', name: 'Japanese', nativeName: '日本語' },
  { code: 'RU', name: 'Russian', nativeName: 'Русский' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAboutDropdownOpen(false);
        setLanguageDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
    console.log('Language selected:', language);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    setLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
    setAboutDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setAboutDropdownOpen(false);
    setLanguageDropdownOpen(false);
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xl font-bold text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg px-2 py-1"
                aria-label="AI Enthusiasts home"
              >
                AI Enthusiasts
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {/* About Dropdown */}
              <div ref={aboutDropdownRef} className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleAboutDropdown();
                    }
                  }}
                  aria-expanded={aboutDropdownOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-white hover:text-accent font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg px-3 py-2"
                >
                  About
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {aboutDropdownOpen && (
                  <div
                    className="absolute top-full mt-2 right-0 w-48 bg-card-dark rounded-lg shadow-cyan-glow border border-accent/20 py-2 animate-dropdown"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <a
                      href="#services"
                      onClick={closeDropdowns}
                      className="block px-4 py-2 text-text-light hover:bg-card-darker hover:text-accent transition-colors focus:outline-none focus:bg-card-darker"
                      role="menuitem"
                    >
                      Services
                    </a>
                    <a
                      href="#terms"
                      onClick={closeDropdowns}
                      className="block px-4 py-2 text-text-light hover:bg-card-darker hover:text-accent transition-colors focus:outline-none focus:bg-card-darker"
                      role="menuitem"
                    >
                      Legal Terms
                    </a>
                    <button
                      onClick={scrollToContact}
                      className="block w-full text-left px-4 py-2 text-text-light hover:bg-card-darker hover:text-accent transition-colors focus:outline-none focus:bg-card-darker"
                      role="menuitem"
                    >
                      Contact Us
                    </button>
                  </div>
                )}
              </div>

              {/* Languages Dropdown */}
              <div ref={languageDropdownRef} className="relative">
                <button
                  onClick={toggleLanguageDropdown}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleLanguageDropdown();
                    }
                  }}
                  aria-expanded={languageDropdownOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-2 text-white hover:text-accent font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 rounded-lg px-3 py-2"
                >
                  <Globe className="w-5 h-5" />
                  Languages
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {languageDropdownOpen && (
                  <div
                    className="absolute top-full mt-2 right-0 w-56 bg-card-dark rounded-lg shadow-cyan-glow border border-accent/20 py-2 max-h-96 overflow-y-auto animate-dropdown"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageSelect(language)}
                        className={`block w-full text-left px-4 py-2 transition-colors focus:outline-none ${
                          selectedLanguage.code === language.code
                            ? 'bg-accent/20 text-accent font-semibold'
                            : 'text-text-light hover:bg-card-darker hover:text-accent'
                        }`}
                        role="menuitem"
                      >
                        <span className="flex items-center justify-between">
                          <span>{language.nativeName}</span>
                          <span className="text-sm text-text-light/60">({language.code})</span>
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Join Now Button */}
              <button
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent/30 shadow-cyan-glow"
              >
                Join Now
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
              {/* About Section */}
              <div className="py-2">
                <h3 className="text-sm font-semibold text-accent uppercase mb-2">About</h3>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-text-light hover:bg-card-darker hover:text-accent rounded-lg transition-colors"
                >
                  Services
                </a>
                <a
                  href="#terms"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-text-light hover:bg-card-darker hover:text-accent rounded-lg transition-colors"
                >
                  Legal Terms
                </a>
                <button
                  onClick={scrollToContact}
                  className="block w-full text-left px-4 py-3 text-text-light hover:bg-card-darker hover:text-accent rounded-lg transition-colors"
                >
                  Contact Us
                </button>
              </div>

              {/* Languages Section */}
              <div className="py-2 border-t border-accent/20">
                <h3 className="text-sm font-semibold text-accent uppercase mb-2">Languages</h3>
                <div className="space-y-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        handleLanguageSelect(language);
                        setMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedLanguage.code === language.code
                          ? 'bg-accent/20 text-accent font-semibold'
                          : 'text-text-light hover:bg-card-darker hover:text-accent'
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span>{language.nativeName}</span>
                        <span className="text-sm text-text-light/60">({language.code})</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-accent/20">
            <button
              onClick={scrollToContact}
              className="w-full bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-cyan-glow"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 md:h-18" />
    </>
  );
}
