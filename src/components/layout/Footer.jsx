import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-100 pt-16 pb-8 text-gray-300 font-body">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col ml-1 leading-tight">
                <span className="font-heading font-bold text-xl text-white tracking-tight">Meridian</span>
                <span className="text-xs font-medium text-blue-400 tracking-wider uppercase">Homestay</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium, comfortable, and affordable PG accommodation in Newtown, Kolkata. Fully furnished rooms with excellent food and modern facilities for boys, girls, professionals, and families.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Rooms & Pricing', path: '/rooms' },
                { label: 'Facilities', path: '/facilities' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-transform text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1 text-gray-400">
                  <a href="tel:+916290381799" className="hover:text-white transition-colors">+91 6290381799 (WhatsApp)</a>
                  <a href="tel:+918282895500" className="hover:text-white transition-colors">+91 8282895500</a>
                  <a href="tel:+919051741292" className="hover:text-white transition-colors">+91 9051741292</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="mailto:swapnakuley462@gmail.com" className="text-gray-400 hover:text-white transition-colors">swapnakuley462@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Location Details */}
          <div>
            <h3 className="font-heading text-white font-semibold text-lg mb-6">Location</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  Dharmatala Panchuria,<br />
                  Newtown, Kolkata,<br />
                  West Bengal
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                Open 24/7
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Meridian Homestay. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
