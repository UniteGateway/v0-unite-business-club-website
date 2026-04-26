import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function Verify() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Member Verification"
          title="Build Trust with Verified Status"
          description="Get verified to unlock additional features, increase credibility, and stand out in the community."
          backgroundGradient={true}
        />

        {/* Verification Status */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary rounded-lg p-8 mb-8">
              <div className="flex gap-4">
                <CheckCircle className="text-primary flex-shrink-0" size={32} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Verified ✓</h2>
                  <p className="text-gray-600">Your profile has been verified. You&apos;re now a trusted member of the community.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: '✓',
                  title: 'Identity Verified',
                  description: 'Government ID confirmed',
                  date: 'Verified on April 15, 2025',
                },
                {
                  icon: '✓',
                  title: 'Business Verified',
                  description: 'Business registration confirmed',
                  date: 'Verified on April 16, 2025',
                },
                {
                  icon: '⏳',
                  title: 'Payment Verified',
                  description: 'Payment method validated',
                  date: 'Pending verification',
                },
              ].map((status, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-3">{status.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{status.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{status.description}</p>
                  <p className="text-xs text-gray-500">{status.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Verification */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Verification Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🏆',
                  title: 'Higher Trust Score',
                  description: 'Verified members receive a trust badge on their profile',
                },
                {
                  icon: '📈',
                  title: 'Better Visibility',
                  description: 'Appear higher in searches and networking results',
                },
                {
                  icon: '💼',
                  title: 'Access Exclusive Deals',
                  description: 'Unlock premium opportunities and special offers',
                },
                {
                  icon: '🤝',
                  title: 'Priority Networking',
                  description: 'Connect with verified members only',
                },
                {
                  icon: '📊',
                  title: 'Enhanced Analytics',
                  description: 'Get detailed profile engagement reports',
                },
                {
                  icon: '🔒',
                  title: 'Secure Transactions',
                  description: 'Protected business dealings and contracts',
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-all">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Verification Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Submit Documents',
                  description: 'Upload your government ID and business registration documents',
                  time: '5 minutes',
                },
                {
                  step: 2,
                  title: 'Automated Review',
                  description: 'Our system verifies your documents using advanced technology',
                  time: '15-30 minutes',
                },
                {
                  step: 3,
                  title: 'Manual Review',
                  description: 'Our team performs a final verification check',
                  time: '1-2 hours',
                },
                {
                  step: 4,
                  title: 'Approval',
                  description: 'Get your verification badge and unlock all benefits',
                  time: 'Instant',
                },
              ].map((process, index) => (
                <div key={index} className="flex gap-6 pb-6 border-b border-gray-200 last:border-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                      {process.step}
                    </div>
                    {index < 3 && <div className="w-1 h-12 bg-primary/30" />}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-bold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600 mb-2">{process.description}</p>
                    <div className="flex gap-2 items-center text-sm text-gray-500">
                      <Clock size={16} />
                      <span>{process.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Verified?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Complete your verification today and unlock all the benefits of being a trusted member.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-primary">
              <Link href="/account/verify">Start Verification</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
