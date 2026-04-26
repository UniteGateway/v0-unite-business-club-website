import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { OpportunityCard } from '@/components/opportunity-card';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Opportunities() {
  const opportunities = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop',
      tag: 'Investment',
      title: 'Invest in Tech Startup',
      description: 'High growth potential venture',
      location: 'Bangalore, India',
      participants: 24,
      price: 'ROI 28%',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tag: 'Partnership',
      title: 'Business Partnership',
      description: 'Expand your business network',
      location: 'Mumbai, India',
      participants: 18,
      savings: 'New',
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=300&fit=crop',
      tag: 'Buy & Sell',
      title: 'Office Furniture Set',
      description: 'Premium quality furniture',
      location: 'Delhi, India',
      participants: 12,
      price: '₹45,000',
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tag: 'Service',
      title: 'Digital Marketing Solutions',
      description: 'Full-service agency partnership',
      location: 'Singapore',
      participants: 8,
      savings: 'Up to 40% Off',
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d0acda9?w=500&h=300&fit=crop',
      tag: 'Collaboration',
      title: 'Co-working Space Membership',
      description: 'Premium workspace access',
      location: 'Hong Kong',
      participants: 15,
      price: '$299/mo',
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tag: 'Export',
      title: 'Export Opportunities',
      description: 'International trade connections',
      location: 'Dubai, UAE',
      participants: 22,
      savings: 'New',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Business Opportunities"
          title="Discover Your Next Growth Avenue"
          description="Browse thousands of investment opportunities, partnerships, and business deals curated exclusively for our members."
          backgroundGradient={true}
        />

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={18} />
                <span>Filters</span>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['All', 'Investment', 'Partnership', 'Buy & Sell', 'Service'].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-gray-600">Showing <span className="font-semibold">6 of 1,247</span> opportunities</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {opportunities.map((opp, index) => (
                <OpportunityCard key={index} {...opp} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Load More Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have an Opportunity to Share?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Reach out to thousands of business professionals in our network
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-primary">
              <a href="/contact?type=opportunity">Post Your Opportunity</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
