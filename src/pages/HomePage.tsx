import React from 'react';
import { ArrowRight, Star, Users, Award, TreePine, Camera, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const features = [
    {
      icon: TreePine,
      title: "Eco-Tourism",
      description: "Sustainable travel experiences in pristine forests and tribal villages"
    },
    {
      icon: Users,
      title: "SafarBuddy Guides",
      description: "Verified local guides with authentic knowledge and cultural insights"
    },
    {
      icon: Award,
      title: "AI Trip Planner",
      description: "Personalized itineraries based on your preferences and interests"
    },
    {
      icon: Camera,
      title: "Cultural Experiences",
      description: "Immerse yourself in vibrant tribal traditions and festivals"
    }
  ];

  const destinations = [
    {
      name: "Netarhat",
      description: "Queen of Chotanagpur",
      image: "/netarhat.jpeg",
      rating: 4.8
    },
    {
      name: "Hundru Falls",
      description: "Majestic waterfall",
      image: "/hundru.webp",
      rating: 4.6
    },
    {
      name: "Betla National Park",
      description: "Wildlife paradise",
      image: "/betla.webp",
      rating: 4.7
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Jharkhand
            <span className="block text-yellow-400">Beyond Horizon</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover the untouched beauty of pristine forests, cascading waterfalls, 
            and vibrant tribal culture in India's hidden gem 🌿
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/itinerary"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/30"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Jharkhand Tourism?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience sustainable tourism with authentic local culture and pristine natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Explore the most breathtaking locations in Jharkhand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <button className="text-green-600 hover:text-green-700 font-semibold flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
            >
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Jharkhand?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of travelers who have discovered the magic of Jharkhand's 
            natural beauty and cultural richness
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/safarbuddy"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
            >
              Find a SafarBuddy Guide
            </Link>
            <Link
              to="/events"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/30 flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}