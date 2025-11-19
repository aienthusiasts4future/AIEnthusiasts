import { ShieldCheck, Settings, GraduationCap } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Security-First Architecture',
    description: 'Private/local AI options. Your data never leaves your firewall. Vendor-agnostic approach means no lock-in.',
    badge: '100% of our implementations offer on-premise deployment options',
  },
  {
    icon: Settings,
    title: 'Implementation-First, Not Reports',
    description: 'We build working solutions, not PowerPoint decks. Every engagement delivers functional code and trained users.',
    badge: 'Average time to first working solution: 14 days',
  },
  {
    icon: GraduationCap,
    title: 'Enablement as Standard',
    description: 'Your team owns what we build. We train champions, document everything, and ensure knowledge transfer.',
    badge: '90-day post-launch support included in every pilot',
  },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary-light relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Makes Us Different
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-card-dark rounded-2xl p-8 border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-cyan-glow-lg hover:-translate-y-1 fade-in-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-cyan-glow">
                  <pillar.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-text-light mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Proof Point Badge */}
              <div className="pt-6 border-t border-accent/20">
                <div className="inline-flex items-start gap-2 bg-gradient-to-br from-success/10 to-success/5 border-2 border-success/20 rounded-lg px-4 py-3 group-hover:border-success/40 transition-colors duration-300">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-success mt-1.5"></div>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {pillar.badge}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
