import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">Vuno AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              Fresh farm products delivered to your doorstep with AI-powered nutrition planning. 
              Supporting healthy living in Nairobi and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <svg className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.24a2.7 2.7 0 01-2.7 2.7 2.7 2.7 0 01-2.7-2.7V2H6.26v5.24a4.83 4.83 0 01-3.77 4.25v1.96a4.83 4.83 0 013.77 4.25V22h2.08v-5.24a2.7 2.7 0 012.7-2.7 2.7 2.7 0 012.7 2.7V22h2.08v-5.24a4.83 4.83 0 013.77-4.25z" />
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link to="/nutrition" className="text-gray-300 hover:text-white">Nutrition Plans</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Nairobi, Kenya</li>
              <li>📞 +254 714276075  </li>
              <li>✉️ info@vunoai.co.ke</li>
              <li>🕒 Mon-Sat: 6AM-8PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Vuno AI. All rights reserved. | Delivering fresh, healthy living across Nairobi.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;