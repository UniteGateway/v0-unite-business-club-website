import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export default function Events() {
  const events = [
    {
      date: '15 JUN 2025',
      time: '10:00 AM - 5:00 PM',
      title: 'Global Business Summit 2025',
      location: 'The Leela Palace, New Delhi',
      attendees: '500+',
      description: 'Join business leaders from 150+ countries for networking and insights',
      image: '🏢',
    },
    {
      date: '22 JUN 2025',
      time: '2:00 PM - 4:00 PM',
      title: 'Virtual Networking Event',
      location: 'Online',
      attendees: '200+',
      description: 'Connect with professionals across industries in a casual setting',
      image: '💼',
    },
    {
      date: '28 JUN 2025',
      time: '3:00 PM - 5:00 PM',
      title: 'Digital Transformation Workshop',
      location: 'Mumbai Convention Center',
      attendees: '150+',
      description: 'Learn the latest trends in digital business transformation',
      image: '🚀',
    },
    {
      date: '5 JUL 2025',
      time: '6:00 PM - 8:00 PM',
      title: 'Women in Business Forum',
      location: 'Singapore Downtown',
      attendees: '300+',
      description: 'Celebrating and empowering women entrepreneurs and leaders',
      image: '👩‍💼',
    },
    {
      date: '12 JUL 2025',
      time: '1:00 PM - 3:00 PM',
      title: 'Startup Pitch Event',
      location: 'Bangalore Tech Park',
      attendees: '250+',
      description: 'Watch innovative startups pitch to investors and partners',
      image: '💡',
    },
    {
      date: '19 JUL 2025',
      time: '9:00 AM - 12:00 PM',
      title: 'Leadership Masterclass',
      location: 'Hong Kong Office',
      attendees: '100+',
      description: 'Exclusive training from renowned business leaders',
      image: '🎓',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Events & Conferences"
          title="Connect at Exclusive Events"
          description="Attend world-class conferences, workshops, and networking events designed to boost your business growth and build meaningful relationships."
          backgroundGradient={true}
        />

        {/* Banner Image */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/events-banner.jpg"
                alt="Business events and conferences"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                  <div className="grid md:grid-cols-[200px_1fr_auto] gap-6 p-6">
                    <div className="flex flex-col justify-center">
                      <div className="text-2xl mb-2">{event.image}</div>
                      <div className="text-sm font-bold text-primary">{event.date}</div>
                      <div className="text-xs text-gray-600">{event.time}</div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <div className="flex gap-2 items-center">
                          <MapPin size={16} />
                          {event.location}
                        </div>
                        <div className="flex gap-2 items-center">
                          <Users size={16} />
                          {event.attendees} attending
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center">
                      <Button asChild>
                        <Link href={`/events/${index}`}>Register Now</Link>
                      </Button>
                      <Button variant="outline">Save Event</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar View CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Save Your Spot</h2>
            <p className="text-lg text-gray-600 mb-8">
              Events fill up quickly. Add them to your calendar to ensure you don&apos;t miss out on valuable networking opportunities.
            </p>
            <Button size="lg">Subscribe to Event Updates</Button>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Past Events Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Asia Summit 2024', attendees: '800+', image: '🌏' },
                { title: 'Innovation Challenge', attendees: '400+', image: '🏆' },
                { title: 'Regional Meetup', attendees: '250+', image: '🤝' },
              ].map((event, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-all">
                  <div className="text-5xl mb-4">{event.image}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.attendees} members participated</p>
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
