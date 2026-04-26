import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-3">Unite Business Club</h3>
            <p className="text-sm text-blue-100 mb-4">Connect. Collaborate. Grow.</p>
            <p className="text-xs text-blue-200">Building a global community of business leaders and entrepreneurs.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/membership" className="text-blue-100 hover:text-white transition">Membership</Link>
              </li>
              <li>
                <Link href="/opportunities" className="text-blue-100 hover:text-white transition">Opportunities</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/benefits" className="text-blue-100 hover:text-white transition">Benefits</Link>
              </li>
              <li>
                <Link href="/events" className="text-blue-100 hover:text-white transition">Events</Link>
              </li>
              <li>
                <Link href="/community" className="text-blue-100 hover:text-white transition">Community</Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ubc.com" className="text-blue-100 hover:text-white transition">info@ubc.com</a>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="text-blue-100 hover:text-white transition">+1 (234) 567-890</a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Global Offices</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
            <p>&copy; 2024 Unite Business Club. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
