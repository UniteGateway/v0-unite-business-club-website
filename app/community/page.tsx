import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeatureCard } from '@/components/feature-card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Users, BookOpen, Lightbulb, MessageCircle } from 'lucide-react';

export default function Community() {
  const circles = [
    {
      name: 'Tech Innovators',
      members: '2,340',
      description: 'For entrepreneurs and leaders in technology',
      icon: '💻',
    },
    {
      name: 'Finance & Investment',
      members: '1,856',
      description: 'Investment professionals and financial experts',
      icon: '💰',
    },
    {
      name: 'Marketing & Growth',
      members: '3,124',
      description: 'Marketing leaders and growth strategists',
      icon: '📈',
    },
    {
      name: 'Manufacturing & Trade',
      members: '1,425',
      description: 'B2B manufacturers and exporters',
      icon: '🏭',
    },
    {
      name: 'Retail & E-commerce',
      members: '2,678',
      description: 'Retail and e-commerce business owners',
      icon: '🛍️',
    },
    {
      name: 'Service & Consulting',
      members: '1,934',
      description: 'Service providers and consultants',
      icon: '🎯',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Community & Circles"
          title="Join Industry-Specific Communities"
          description="Connect with like-minded professionals, share insights, and collaborate with members in your industry through our specialized circles."
          backgroundGradient={true}
        />

        {/* Banner Image */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/community-banner.jpg"
                alt="Community and business circles"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Circles Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {circles.map((circle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary/50 transition-all"
                >
                  <div className="text-4xl mb-4">{circle.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{circle.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{circle.description}</p>
                  <p className="text-sm font-semibold text-primary mb-4">{circle.members} members</p>
                  <Button size="sm" asChild className="w-full">
                    <Link href={`/community/${circle.name}`}>Join Circle</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Join a Circle?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <FeatureCard
                icon={Users}
                title="Targeted Networking"
                description="Connect with professionals who share your industry focus and business challenges"
              />
              <FeatureCard
                icon={BookOpen}
                title="Knowledge Sharing"
                description="Learn best practices and industry insights from experienced peers"
              />
              <FeatureCard
                icon={Lightbulb}
                title="Collaboration"
                description="Find partners for joint ventures and strategic business collaborations"
              />
              <FeatureCard
                icon={MessageCircle}
                title="Active Discussions"
                description="Participate in moderated discussions on industry-relevant topics"
              />
            </div>
          </div>
        </section>

        {/* Discussion Board */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Discussions</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'What are the latest trends in digital transformation?',
                  circle: 'Tech Innovators',
                  replies: 42,
                  views: 1230,
                },
                {
                  title: 'Best practices for raising Series A funding',
                  circle: 'Finance & Investment',
                  replies: 38,
                  views: 1050,
                },
                {
                  title: 'How to optimize supply chain costs?',
                  circle: 'Manufacturing & Trade',
                  replies: 25,
                  views: 856,
                },
              ].map((discussion, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-primary/50 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary">{discussion.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">in {discussion.circle}</p>
                      <div className="flex gap-6 text-sm text-gray-600">
                        <span>{discussion.replies} replies</span>
                        <span>{discussion.views} views</span>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-2xl font-bold text-primary">{discussion.replies}</div>
                      <div className="text-xs text-gray-600">responses</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Create Circle CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Can&apos;t Find Your Industry?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Propose a new circle and invite other professionals in your field to join.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-primary">
              <Link href="/contact?type=circle">Create a New Circle</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
