import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { PricingCard } from '@/components/pricing-card';
import Image from 'next/image';

export default function Membership() {
  const plans = [
    {
      name: 'Starter',
      price: 49,
      description: 'Perfect for new entrepreneurs',
      features: [
        'Access to member directory',
        'Monthly virtual meetups',
        'Basic opportunity listings',
        'Email support',
        'Member badge',
      ],
      cta: { label: 'Start Free Trial', href: '/signup?plan=starter' },
    },
    {
      name: 'Professional',
      price: 149,
      description: 'For active business professionals',
      features: [
        'Everything in Starter',
        'Priority opportunity access',
        'Exclusive events',
        'Business profile showcase',
        'Advanced networking tools',
        'Priority email & chat support',
        'Lead generation tools',
      ],
      cta: { label: 'Get Started', href: '/signup?plan=professional' },
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 499,
      description: 'For established companies',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom partnership deals',
        'White-label options',
        'Team member accounts (up to 10)',
        'Advanced analytics & reporting',
        'Priority feature requests',
        '24/7 phone support',
      ],
      cta: { label: 'Contact Sales', href: '/contact?type=enterprise' },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Membership Plans"
          title="Choose Your Path to Success"
          description="Select the membership tier that best fits your business needs and start unlocking exclusive benefits today."
          backgroundGradient={true}
        />

        {/* Banner Image */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/membership-banner.jpg"
                alt="Premium membership tiers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  {...plan}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'Can I change my membership tier?',
                  answer: 'Yes, you can upgrade or downgrade your membership at any time. Changes take effect at the next billing cycle.',
                },
                {
                  question: 'Is there a contract or long-term commitment?',
                  answer: 'No, all memberships are on a month-to-month basis with no long-term contracts. Cancel anytime.',
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, bank transfers, and digital payment methods for your convenience.',
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'If you&apos;re not satisfied, we offer a 30-day money-back guarantee on your first month.',
                },
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
