import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Subscriptions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          subtitle="My Subscription"
          title="Manage Your Membership"
          description="View and manage your current subscription, billing information, and membership benefits."
          backgroundGradient={true}
        />

        {/* Subscription Status */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Subscription</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-gray-600 mb-2">Plan Type</p>
                  <p className="text-2xl font-bold text-primary">Professional</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Monthly Cost</p>
                  <p className="text-2xl font-bold text-primary">$149</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Renewal Date</p>
                  <p className="text-2xl font-bold text-primary">May 15, 2025</p>
                </div>
              </div>
            </div>

            {/* Subscription Actions */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Button asChild className="w-full">
                <Link href="/membership">Upgrade Plan</Link>
              </Button>
              <Button variant="outline" className="w-full">
                Pause Subscription
              </Button>
              <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive/10">
                Cancel Subscription
              </Button>
            </div>

            {/* Billing History */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Billing History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-4 font-semibold text-gray-900">Date</th>
                      <th className="pb-4 font-semibold text-gray-900">Description</th>
                      <th className="pb-4 font-semibold text-gray-900">Amount</th>
                      <th className="pb-4 font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: 'April 15, 2025', desc: 'Professional Plan', amount: '$149.00', status: 'Paid' },
                      { date: 'March 15, 2025', desc: 'Professional Plan', amount: '$149.00', status: 'Paid' },
                      { date: 'February 15, 2025', desc: 'Professional Plan', amount: '$149.00', status: 'Paid' },
                    ].map((invoice, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4">{invoice.date}</td>
                        <td className="py-4">{invoice.desc}</td>
                        <td className="py-4 font-semibold">{invoice.amount}</td>
                        <td className="py-4">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                            {invoice.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Billing Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Billing Information</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Payment Method</h4>
                    <p className="text-gray-600">Visa ending in 4242</p>
                    <Button variant="outline" className="mt-4" size="sm">
                      Update Payment Method
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Billing Address</h4>
                    <p className="text-gray-600">123 Business Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                    <Button variant="outline" className="mt-4" size="sm">
                      Edit Address
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Contact Support</h3>
                <p className="text-gray-600 mb-4">Our support team is here to help with any questions about your subscription.</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact">Get Support</Link>
                </Button>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">View FAQs</h3>
                <p className="text-gray-600 mb-4">Find answers to common questions about billing and subscriptions.</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/membership">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
