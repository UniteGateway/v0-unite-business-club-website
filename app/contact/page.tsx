'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message. We&apos;ll get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="Contact Us"
          title="Get in Touch"
          description="Have questions? We&apos;d love to hear from you. Reach out to our team and we&apos;ll respond as soon as possible."
          backgroundGradient={true}
        />

        {/* Banner Image */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/contact-banner.jpg"
                alt="Get in touch with us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="opportunity">Post Opportunity</option>
                      <option value="partnership">Partnership Proposal</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-fit">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <a href="mailto:support@ubc.com" className="text-primary hover:text-secondary transition">
                        support@ubc.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-fit">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                      <a href="tel:+1234567890" className="text-primary hover:text-secondary transition">
                        +1 (234) 567-890
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-fit">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        123 Business Avenue
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                      <li>Saturday: 10:00 AM - 4:00 PM EST</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How quickly will I hear back from the support team?',
                  a: 'We aim to respond to all inquiries within 24 business hours. For urgent matters, call our phone line during office hours.',
                },
                {
                  q: 'Can I schedule a meeting with your team?',
                  a: 'Yes! Please mention your preferred time in your message or call us directly to schedule a meeting.',
                },
                {
                  q: 'Do you have local office locations?',
                  a: 'We have offices in multiple countries. Contact us to find the nearest location to you.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
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
