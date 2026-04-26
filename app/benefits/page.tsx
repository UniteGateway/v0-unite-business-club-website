import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeatureCard } from '@/components/feature-card';
import Image from 'next/image';
import {
  Users,
  Briefcase,
  TrendingUp,
  Award,
  FileText,
  Shield,
  Zap,
  Globe,
} from 'lucide-react';

export default function Benefits() {
  const benefitCategories = [
    {
      title: 'Networking & Connections',
      icon: Users,
      benefits: [
        'Access to 50,000+ business professionals',
        'Exclusive networking events monthly',
        'Direct messaging with members',
        'Industry-specific groups and forums',
      ],
    },
    {
      title: 'Business Opportunities',
      icon: Briefcase,
      benefits: [
        '10,000+ active investment opportunities',
        'Partnership matching service',
        'Deal and offer access',
        'Joint venture proposals',
      ],
    },
    {
      title: 'Growth & Development',
      icon: TrendingUp,
      benefits: [
        'Business masterclasses',
        'Expert mentorship programs',
        'Industry reports and insights',
        'Strategic planning tools',
      ],
    },
    {
      title: 'Premium Services',
      icon: Award,
      benefits: [
        'Up to 30% off exclusive offers',
        'Legal consultation discounts',
        'Marketing services credits',
        'HR and recruitment assistance',
      ],
    },
    {
      title: 'Business Tools',
      icon: FileText,
      benefits: [
        'Business intelligence reports',
        'Market analysis tools',
        'Document templates',
        'Proposal software',
      ],
    },
    {
      title: 'Security & Protection',
      icon: Shield,
      benefits: [
        'Verified member profiles',
        'Secure transaction platform',
        'Dispute resolution service',
        'Member verification badges',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Member Benefits"
          title="Unlock Unlimited Advantages"
          description="Access a comprehensive suite of tools, services, and opportunities designed to help your business thrive in our global community."
          backgroundGradient={true}
        />

        {/* Banner Image */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/benefits-banner.jpg"
                alt="Exclusive member benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {benefitCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                    <div className="flex gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-fit">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.benefits.map((benefit, i) => (
                        <li key={i} className="flex gap-3 items-start text-gray-600">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Exclusive Perks */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Exclusive Member Perks</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: '💎',
                  title: 'VIP Events',
                  description: 'Invitation to exclusive galas, summits, and networking dinners',
                },
                {
                  icon: '🎓',
                  title: 'Master Classes',
                  description: 'Learn from industry leaders and business experts',
                },
                {
                  icon: '📊',
                  title: 'Market Reports',
                  description: 'Access premium market analysis and business intelligence',
                },
                {
                  icon: '🌍',
                  title: 'Global Reach',
                  description: 'Connect with professionals in 150+ countries',
                },
              ].map((perk, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                  <div className="text-4xl mb-4">{perk.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{perk.title}</h3>
                  <p className="text-sm text-gray-600">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What Members Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: 'UBC helped me connect with my biggest client. The networking opportunities are invaluable.',
                  author: 'Rajesh Kumar',
                  role: 'CEO, Tech Solutions',
                },
                {
                  quote: 'The business insights and market reports alone justify the membership cost.',
                  author: 'Priya Singh',
                  role: 'Founder, Digital Agency',
                },
                {
                  quote: 'The community is incredibly supportive. I&apos;ve grown my network exponentially.',
                  author: 'Amit Patel',
                  role: 'Business Consultant',
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                  <p className="text-gray-600 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
