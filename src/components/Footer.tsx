import React from 'react';
import { Trees, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Trees className="h-8 w-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Jharkhand: Beyond Horizon</h3>
                <p className="text-green-300 text-sm">Discover the unexplored beauty 🌿</p>
              </div>
            </div>
            <p className="text-green-200 mb-4 max-w-md">
              Experience the pristine forests, vibrant tribal culture, and breathtaking waterfalls of Jharkhand. 
              Your gateway to sustainable eco-tourism and authentic cultural experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-green-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Explore</h4>
            <ul className="space-y-2">
              <li><a href="/destinations" className="text-green-200 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="/safarbuddy" className="text-green-200 hover:text-white transition-colors">SafarBuddy Guides</a></li>
              <li><a href="/itinerary" className="text-green-200 hover:text-white transition-colors">AI Trip Planner</a></li>
              <li><a href="/marketplace" className="text-green-200 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="/events" className="text-green-200 hover:text-white transition-colors">Festivals & Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-green-200">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Ranchi, Jharkhand, India</span>
              </div>
              <div className="flex items-center space-x-2 text-green-200">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9832467109</span>
              </div>
              <div className="flex items-center space-x-2 text-green-200">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@jharkhandtourism.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-green-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-sm">
            © 2025 Jharkhand: Beyond Horizon. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-green-300 hover:text-white text-sm transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}