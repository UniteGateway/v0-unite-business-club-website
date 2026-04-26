import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { FeatureCard } from '@/components/feature-card';
import { Users, Target, Lightbulb, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="About United Business Club"
          title="Building Global Business Communities"
          description="Since our founding, we've been connecting business leaders, entrepreneurs, and innovators to create meaningful relationships and unlock unlimited opportunities for growth."
          backgroundGradient={true}
        />

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To create a thriving global community where business professionals can connect, collaborate, and grow together through trusted relationships and exclusive opportunities.
                </p>
                <ul className="space-y-3">
                  {['Build authentic connections', 'Enable business growth', 'Foster collaboration', 'Create opportunities'].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To become the world&apos;s most trusted and valuable business community, where every member can achieve extraordinary success through powerful partnerships and collaborative innovation.
                </p>
                <ul className="space-y-3">
                  {['Global reach', 'Diverse community', 'Shared success', 'Continuous innovation'].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <FeatureCard
                icon={Target}
                title="Excellence"
                description="We pursue excellence in everything we do, setting high standards for our community and services."
              />
              <FeatureCard
                icon={Users}
                title="Community"
                description="We believe in the power of collaboration and building strong, authentic relationships."
              />
              <FeatureCard
                icon={Lightbulb}
                title="Innovation"
                description="We embrace new ideas and continuously evolve to meet the changing needs of our members."
              />
              <FeatureCard
                icon={Globe}
                title="Integrity"
                description="We operate with transparency, honesty, and ethical principles in all our interactions."
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50K+', label: 'Active Members' },
                { number: '150+', label: 'Countries' },
                { number: '10K+', label: 'Opportunities' },
                { number: '$2B+', label: 'Business Facilitated' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'John Smith', role: 'Founder & CEO', image: '👨‍💼' },
                { name: 'Sarah Johnson', role: 'COO', image: '👩‍💼' },
                { name: 'Michael Chen', role: 'Chief Strategy Officer', image: '👨‍💼' },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
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
