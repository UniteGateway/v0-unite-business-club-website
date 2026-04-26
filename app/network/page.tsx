import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Search, Filter, MessageSquare, UserPlus } from 'lucide-react';

export default function Network() {
  const members = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Solutions',
      location: 'Bangalore, India',
      connections: '245',
      image: '👨‍💼',
      verified: true,
    },
    {
      name: 'Priya Singh',
      role: 'Founder, Digital Agency',
      location: 'Mumbai, India',
      connections: '398',
      image: '👩‍💼',
      verified: true,
    },
    {
      name: 'Amit Patel',
      role: 'Business Consultant',
      location: 'Delhi, India',
      connections: '156',
      image: '👨‍💼',
      verified: false,
    },
    {
      name: 'Sarah Johnson',
      role: 'Investment Manager',
      location: 'New York, USA',
      connections: '512',
      image: '👩‍💼',
      verified: true,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      location: 'Singapore',
      connections: '287',
      image: '👨‍💼',
      verified: true,
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Director',
      location: 'London, UK',
      connections: '324',
      image: '👩‍💼',
      verified: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="My Network"
          title="Connect with Business Professionals"
          description="Browse and connect with thousands of business leaders, entrepreneurs, and professionals in your industry."
          backgroundGradient={true}
        />

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search members..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={18} />
                <span>Filters</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-gray-600">Showing <span className="font-semibold">6 of 50,000+</span> members</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className="text-center py-6 bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="text-5xl mb-3">{member.image}</div>
                    {member.verified && (
                      <div className="inline-block px-2 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        ✓ Verified
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                    <p className="text-xs text-gray-500 mb-4">{member.location}</p>
                    <p className="text-sm text-gray-600 mb-6">
                      <span className="font-semibold text-primary">{member.connections}</span> connections
                    </p>

                    <div className="flex gap-2">
                      <Button size="sm" asChild className="flex-1">
                        <Link href={`/profile/${index}`}>View Profile</Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <UserPlus size={16} />
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <MessageSquare size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Load More Members
              </Button>
            </div>
          </div>
        </section>

        {/* Suggested Connections */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Suggested for You</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Tech Industry Leaders', count: '1,240 members' },
                { title: 'Startup Founders', count: '856 members' },
                { title: 'Marketing Professionals', count: '2,340 members' },
                { title: 'Finance Experts', count: '1,567 members' },
              ].map((group, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="font-bold text-gray-900 mb-2">{group.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{group.count}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Explore
                  </Button>
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
