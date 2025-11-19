import { useState, FormEvent, ChangeEvent } from 'react';
import { Check, Loader2, Send } from 'lucide-react';

interface FormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  goals: string;
  hearAbout: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  companyName?: string;
  consent?: string;
}

interface FieldValidation {
  fullName: boolean;
  workEmail: boolean;
  companyName: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    goals: '',
    hearAbout: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldValidation, setFieldValidation] = useState<FieldValidation>({
    fullName: false,
    workEmail: false,
    companyName: false,
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string | boolean): string | undefined => {
    switch (name) {
      case 'fullName':
        if (typeof value === 'string' && value.trim().length < 2) {
          return 'Name must be at least 2 characters';
        }
        break;
      case 'workEmail':
        if (typeof value === 'string') {
          if (!value.trim()) {
            return 'Email is required';
          }
          if (!validateEmail(value)) {
            return 'Please enter a valid email address';
          }
        }
        break;
      case 'companyName':
        if (typeof value === 'string' && value.trim().length < 2) {
          return 'Company name must be at least 2 characters';
        }
        break;
      case 'consent':
        if (typeof value === 'boolean' && !value) {
          return 'You must agree to the privacy policy';
        }
        break;
    }
    return undefined;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({ ...prev, [name]: fieldValue }));

    if (touched.has(name)) {
      const error = validateField(name, fieldValue);
      setErrors(prev => ({ ...prev, [name]: error }));

      if (name === 'fullName' || name === 'workEmail' || name === 'companyName') {
        setFieldValidation(prev => ({
          ...prev,
          [name]: !error && (typeof fieldValue === 'string' ? fieldValue.trim().length > 0 : false),
        }));
      }
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === 'checkbox' ? checked : value;

    setTouched(prev => new Set(prev).add(name));
    const error = validateField(name, fieldValue);
    setErrors(prev => ({ ...prev, [name]: error }));

    if (name === 'fullName' || name === 'workEmail' || name === 'companyName') {
      setFieldValidation(prev => ({
        ...prev,
        [name]: !error && (typeof fieldValue === 'string' ? fieldValue.trim().length > 0 : false),
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allFields = Object.keys(formData);
    const newTouched = new Set(allFields);
    setTouched(newTouched);

    const newErrors: FormErrors = {};
    allFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      setIsSubmitting(false);
      setIsSuccess(true);

      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        goals: '',
        hearAbout: '',
        consent: false,
      });
      setTouched(new Set());
      setFieldValidation({
        fullName: false,
        workEmail: false,
        companyName: false,
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-20 lg:py-24 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-text-light">
              Fill out the form below and we'll get back to you within 1 business day
            </p>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="mb-8 p-6 bg-gradient-to-br from-success/10 to-success/5 border-2 border-success rounded-xl">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Success!</h3>
                  <p className="text-white">
                    Thanks! We'll reply within 1 business day to schedule your discovery call.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card-dark rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border-2 border-accent/20">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
                  Full Name <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName && touched.has('fullName')
                        ? 'border-error focus:border-error focus:ring-error/20'
                        : fieldValidation.fullName
                        ? 'border-success focus:border-success focus:ring-success/20'
                        : 'border-gray-300 focus:border-accent focus:ring-accent/20'
                    }`}
                    placeholder="John Smith"
                  />
                  {fieldValidation.fullName && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
                  )}
                </div>
                {errors.fullName && touched.has('fullName') && (
                  <p id="fullName-error" className="mt-2 text-sm text-error" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="workEmail" className="block text-sm font-semibold text-white mb-2">
                  Work Email <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-invalid={errors.workEmail ? 'true' : 'false'}
                    aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.workEmail && touched.has('workEmail')
                        ? 'border-error focus:border-error focus:ring-error/20'
                        : fieldValidation.workEmail
                        ? 'border-success focus:border-success focus:ring-success/20'
                        : 'border-gray-300 focus:border-accent focus:ring-accent/20'
                    }`}
                    placeholder="john@company.com"
                  />
                  {fieldValidation.workEmail && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
                  )}
                </div>
                {errors.workEmail && touched.has('workEmail') && (
                  <p id="workEmail-error" className="mt-2 text-sm text-error" role="alert">
                    {errors.workEmail}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-white mb-2">
                  Company Name <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-invalid={errors.companyName ? 'true' : 'false'}
                    aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.companyName && touched.has('companyName')
                        ? 'border-error focus:border-error focus:ring-error/20'
                        : fieldValidation.companyName
                        ? 'border-success focus:border-success focus:ring-success/20'
                        : 'border-gray-300 focus:border-accent focus:ring-accent/20'
                    }`}
                    placeholder="Acme Corporation"
                  />
                  {fieldValidation.companyName && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
                  )}
                </div>
                {errors.companyName && touched.has('companyName') && (
                  <p id="companyName-error" className="mt-2 text-sm text-error" role="alert">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Goals */}
              <div>
                <label htmlFor="goals" className="block text-sm font-semibold text-white mb-2">
                  What are you hoping to achieve with AI? <span className="text-text-light/60 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Tell us about your goals and challenges..."
                />
              </div>

              {/* Hear About Us */}
              <div>
                <label htmlFor="hearAbout" className="block text-sm font-semibold text-white mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-card-dark"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Consent Checkbox */}
              <div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-required="true"
                    aria-invalid={errors.consent ? 'true' : 'false'}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    className="mt-1 w-5 h-5 text-accent border-2 border-gray-300 rounded focus:ring-2 focus:ring-accent/20 transition-all cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-sm text-white cursor-pointer">
                    I agree to the Privacy Policy and understand my data will be used only for initial consultation. <span className="text-error">*</span>
                  </label>
                </div>
                {errors.consent && touched.has('consent') && (
                  <p id="consent-error" className="mt-2 text-sm text-error" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover disabled:bg-card-darker text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
