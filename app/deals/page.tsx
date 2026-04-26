import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TrendingUp, Tag, Clock } from 'lucide-react';

export default function Deals() {
  const deals = [
    {
      title: 'Up to 25% Off on Legal Services',
      icon: '⚖️',
      discount: '25%',
      description: 'Exclusive partnership with top legal firms',
      validUntil: '30 June 2025',
      members: '1,234',
    },
    {
      title: 'Up to 20% Off on Co-working Spaces',
      icon: '🏢',
      discount: '20%',
      description: 'Premium workspace at member rates',
      validUntil: '31 July 2025',
      members: '856',
    },
    {
      title: 'Up to 30% Off on Marketing Services',
      icon: '📣',
      discount: '30%',
      description: 'Digital marketing and branding solutions',
      validUntil: '15 August 2025',
      members: '2,145',
    },
    {
      title: 'Business Insurance Special',
      icon: '🛡️',
      discount: '35%',
      description: 'Comprehensive business coverage',
      validUntil: '30 June 2025',
      members: '645',
    },
    {
      title: 'Software Licensing Discounts',
      icon: '💻',
      discount: '40%',
      description: 'Enterprise software at special rates',
      validUntil: '31 August 2025',
      members: '1,890',
    },
    {
      title: 'Accounting & Bookkeeping Services',
      icon: '📊',
      discount: '25%',
      description: 'Professional financial management',
      validUntil: '30 July 2025',
      members: '732',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Exclusive Deals & Offers"
          title="Save More, Grow Faster"
          description="Access exclusive discounts and special offers from trusted partners available only to UBC members."
          backgroundGradient={true}
        />

        {/* Deals Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {deals.map((deal, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 text-center">
                    <div className="text-5xl mb-3">{deal.icon}</div>
                    <div className="text-4xl font-bold text-accent mb-2">{deal.discount}</div>
                    <div className="text-sm text-gray-600">off</div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{deal.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{deal.description}</p>

                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex gap-2 items-center text-gray-600">
                        <Clock size={16} />
                        <span>Valid until {deal.validUntil}</span>
                      </div>
                      <div className="flex gap-2 items-center text-gray-600">
                        <TrendingUp size={16} />
                        <span>{deal.members} members used</span>
                      </div>
                    </div>

                    <Button size="sm" asChild className="w-full">
                      <Link href={`/deals/${index}`}>Claim Deal</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Claim Deals</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '1', title: 'Browse Deals', description: 'Explore exclusive offers' },
                { number: '2', title: 'Click Claim', description: 'Click the claim button' },
                { number: '3', title: 'Get Code', description: 'Receive promo code' },
                { number: '4', title: 'Enjoy Savings', description: 'Get your discount' },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Partner Network</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {['LegalTech Pro', 'CloudSpace', 'Digital Boost', 'SecureShield'].map((partner, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-bold text-gray-900">{partner}</h3>
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
