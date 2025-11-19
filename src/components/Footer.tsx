import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Check, Loader2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Newsletter signup:', email);

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  Approach
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-white transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:email@aienthusiasts.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                  aria-label="Email us at email@aienthusiasts.com"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all group-hover:after:w-full">
                    email@aienthusiasts.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/aienthusiasts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                  aria-label="Visit our LinkedIn page"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all group-hover:after:w-full">
                    LinkedIn
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Get insights on AI adoption and implementation.</p>

            {isSuccess ? (
              <div className="flex items-center gap-2 text-success">
                <Check className="w-5 h-5" />
                <span className="text-sm font-medium">Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  aria-label="Email address for newsletter"
                  className="w-full px-4 py-2 rounded-lg bg-slate-700 border-2 border-slate-600 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-cyan-600 disabled:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; 2025 AI Enthusiasts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
