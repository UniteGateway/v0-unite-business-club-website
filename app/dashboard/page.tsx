'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  TrendingUp,
  Calendar,
  Wallet,
  QrCode,
  Bell,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Scale,
  Building2,
  Megaphone,
} from 'lucide-react';

export default function Dashboard() {
  const opportunityData = [
    {
      id: 1,
      title: 'Invest in Tech Startup',
      category: 'Investment',
      description: 'High growth potential',
      location: 'Bengaluru, India',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      investors: 24,
      roi: '28%',
      badge: 'Investment',
    },
    {
      id: 2,
      title: 'Business Partnership',
      category: 'Partnership',
      description: 'Expand your business',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      investors: 18,
      status: 'New',
      badge: 'Partnership',
    },
    {
      id: 3,
      title: 'Office Furniture Set',
      category: 'Buy & Sell',
      description: 'Premium quality',
      location: 'Delhi, India',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      investors: 12,
      price: '₹45,000',
      badge: 'Buy & Sell',
    },
  ];

  const eventsData = [
    {
      id: 1,
      date: '15',
      month: 'JUN',
      year: '2025',
      title: 'Global Business Summit 2025',
      time: '10:00 AM - 5:00 PM',
      location: 'The Leela Palace, New Delhi',
    },
  ];

  const offersData = [
    {
      icon: Scale,
      discount: 'Up to 25% Off',
      service: 'on Legal Services',
    },
    {
      icon: Building2,
      discount: 'Up to 20% Off',
      service: 'on Co-working Spaces',
    },
    {
      icon: Megaphone,
      discount: 'Up to 30% Off',
      service: 'on Marketing Services',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Welcome Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Good Morning 👋</p>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Rahul Sharma</h1>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        👑 SILVER MEMBER
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">Welcome back to your business community.</p>
              </div>

              {/* World Map */}
              <div className="relative h-48 rounded-lg overflow-hidden shadow">
                <Image
                  src="/images/world-map.jpg"
                  alt="Global network"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-white py-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { icon: Users, label: 'My Network', href: '/network' },
                  { icon: Briefcase, label: 'Opportunities', href: '/opportunities' },
                  { icon: TrendingUp, label: 'Deals & Offers', href: '/deals' },
                  { icon: Calendar, label: 'Events', href: '/events' },
                  { icon: Wallet, label: 'My Card', href: '/subscriptions' },
                  { icon: QrCode, label: 'Scan & Verify', href: '/verify' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-all group"
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
                      <span className="text-white text-xs md:text-sm font-medium text-center">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Grow Your Business - Carousel */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Business</h2>
                  <p className="text-white/90 text-lg mb-8">
                    Access exclusive opportunities, trusted connections and amazing benefits.
                  </p>
                  <div>
                    <Link href="/opportunities">
                      <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
                        Explore Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/globe-network.jpg"
                    alt="Global opportunities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 pb-8">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Opportunities */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Opportunities</h2>
              <Link href="/opportunities" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunityData.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={opp.image}
                      alt={opp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {opp.badge}
                      </span>
                    </div>
                    <button className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full transition">
                      <TrendingUp className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{opp.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{opp.description}</p>

                    <div className="flex items-center gap-1 text-gray-600 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {opp.location}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold border border-white"
                            >
                              {String.fromCharCode(64 + i)}
                            </div>
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm font-medium">
                          +{opp.investors}
                        </span>
                      </div>
                      {opp.roi && (
                        <span className="text-green-600 font-semibold text-sm">ROI {opp.roi}</span>
                      )}
                      {opp.status && (
                        <span className="text-primary font-semibold text-sm">{opp.status}</span>
                      )}
                      {opp.price && (
                        <span className="text-primary font-semibold text-sm">{opp.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <Link href="/events" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-gray-200 hover:border-primary transition"
                >
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">{event.date}</div>
                      <div className="text-sm font-semibold text-gray-600">{event.month}</div>
                      <div className="text-xs text-gray-500">{event.year}</div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/events">
                    <Button className="bg-primary hover:bg-secondary text-white font-semibold whitespace-nowrap">
                      Register Now
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Offers */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Exclusive Offers for You</h2>
              <Link href="/deals" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offersData.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 flex items-center gap-4 shadow hover:shadow-lg transition-shadow border border-gray-200 group cursor-pointer"
                  >
                    <div className="bg-primary rounded-lg p-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primary">{offer.discount}</p>
                      <p className="text-gray-600 text-sm">{offer.service}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-lg cursor-pointer transition-all hover:scale-110">
          <TrendingUp className="w-6 h-6" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
