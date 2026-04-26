import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeatureCard } from '@/components/feature-card';
import { OpportunityCard } from '@/components/opportunity-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  TrendingUp,
  Calendar,
  Wallet,
  QrCode,
  Zap,
  Globe,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Welcome to Unite Business Club"
          title="Connect. Collaborate. Grow."
          description="Join a premier global business community where entrepreneurs, professionals, and innovators come together to build meaningful connections and unlock exclusive opportunities."
          cta={{ label: 'Join Now', href: '/signup' }}
          secondaryCta={{ label: 'Explore Opportunities', href: '/opportunities' }}
        />

        {/* Quick Navigation Features */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Users, label: 'My Network', href: '/network' },
                { icon: Briefcase, label: 'Opportunities', href: '/opportunities' },
                { icon: TrendingUp, label: 'Deals & Offers', href: '/deals' },
                { icon: Calendar, label: 'Events', href: '/events' },
                { icon: Wallet, label: 'Subscription', href: '/subscriptions' },
                { icon: QrCode, label: 'Verify', href: '/verify' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-center text-gray-700 group-hover:text-primary">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Growth Section with Gradient */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow Your Business</h2>
                <p className="text-lg text-blue-100 mb-8">
                  Access exclusive opportunities, trusted connections, and amazing benefits designed to accelerate your business growth and success.
                </p>
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-primary">
                  <Link href="/opportunities">Explore Now →</Link>
                </Button>
              </div>
              <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-600/20 flex items-center justify-center">
                  <Globe size={160} className="text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Opportunities */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Opportunities</h2>
                <p className="text-gray-600">Curated deals and partnerships from our community</p>
              </div>
              <Link
                href="/opportunities"
                className="text-primary hover:text-secondary font-semibold text-sm transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <OpportunityCard
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
                tag="Investment"
                title="Invest in Tech Startup"
                description="High growth potential venture"
                location="Bangalore, India"
                participants={24}
                price="ROI 28%"
              />
              <OpportunityCard
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
                tag="Partnership"
                title="Business Partnership"
                description="Expand your business network"
                location="Mumbai, India"
                participants={18}
                savings="New"
              />
              <OpportunityCard
                image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=300&fit=crop"
                tag="Buy & Sell"
                title="Office Furniture Set"
                description="Premium quality furniture"
                location="Delhi, India"
                participants={12}
                price="₹45,000"
              />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Join UBC?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Users}
                title="Global Network"
                description="Connect with thousands of business professionals and entrepreneurs worldwide"
              />
              <FeatureCard
                icon={Zap}
                title="Exclusive Deals"
                description="Access premium opportunities and special offers available only to members"
              />
              <FeatureCard
                icon={TrendingUp}
                title="Business Growth"
                description="Scale your business with trusted partnerships and collaborative opportunities"
              />
            </div>
          </div>
        </section>

        {/* Upcoming Events Preview */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
              <Link
                href="/events"
                className="text-primary hover:text-secondary font-semibold text-sm transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl font-bold text-primary mb-2">15</div>
                  <p className="text-sm text-gray-600 mb-4">JUN 2025</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Business Summit 2025</h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-600 flex items-center gap-2">
                      <Calendar size={18} />
                      10:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Users size={18} />
                      The Leela Palace, New Delhi
                    </p>
                  </div>
                  <Button size="lg" asChild>
                    <Link href="/events/summit-2025">Register Now</Link>
                  </Button>
                </div>
                <div className="hidden md:block h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar size={120} className="text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Offers */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Exclusive Offers for You</h2>
              <Link
                href="/offers"
                className="text-primary hover:text-secondary font-semibold text-sm transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '⚖️', title: 'Up to 25% Off', subtitle: 'on Legal Services' },
                { icon: '🏢', title: 'Up to 20% Off', subtitle: 'on Co-working Spaces' },
                { icon: '📣', title: 'Up to 30% Off', subtitle: 'on Marketing Services' },
              ].map((offer, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{offer.icon}</div>
                  <p className="text-lg font-bold mb-1">{offer.title}</p>
                  <p className="text-sm text-blue-100">{offer.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Become part of a thriving community of business leaders and unlock unlimited potential for growth and success.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-primary">
              <Link href="/signup">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
