import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Clock, Camera, TreePine, Mountain, Waves } from 'lucide-react';

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Destinations', icon: MapPin },
    { id: 'nature', name: 'Nature & Wildlife', icon: TreePine },
    { id: 'adventure', name: 'Adventure', icon: Mountain },
    { id: 'waterfalls', name: 'Waterfalls', icon: Waves },
    { id: 'cultural', name: 'Cultural Sites', icon: Camera }
  ];

  const destinations = [
    {
      id: 1,
      name: "Netarhat",
      category: "nature",
      description: "Known as the 'Queen of Chotanagpur', famous for its sunrise and sunset views",
      image: "/netarhat.jpeg",
      rating: 4.8,
      duration: "2-3 days",
      highlights: ["Magnolia Point", "Sunrise Point", "Koel View Point"],
      distance: "156 km from Ranchi",
      bestTime: "October to March"
    },
    {
      id: 2,
      name: "Hundru Falls",
      category: "waterfalls",
      description: "A spectacular 98-meter waterfall on the Subarnarekha River",
      image: "/hundru.webp",
      rating: 4.6,
      duration: "Half day",
      highlights: ["Main Falls", "Rock Formations", "Swimming Pools"],
      distance: "45 km from Ranchi",
      bestTime: "July to February"
    },
    {
      id: 3,
      name: "Betla National Park",
      category: "nature",
      description: "Home to tigers, elephants, and diverse wildlife in Palamau district",
      image: "/betla.webp",
      rating: 4.7,
      duration: "2-3 days",
      highlights: ["Tiger Safari", "Elephant Rides", "Kechki Temple"],
      distance: "170 km from Ranchi",
      bestTime: "November to April"
    },
    {
      id: 4,
      name: "Parasnath Hill",
      category: "cultural",
      description: "Sacred Jain pilgrimage site and highest peak in Jharkhand",
      image: "parasnath.jpg",
      rating: 4.5,
      duration: "1-2 days",
      highlights: ["Jain Temples", "Trekking Trails", "Panoramic Views"],
      distance: "165 km from Ranchi",
      bestTime: "October to March"
    },
    {
      id: 5,
      name: "Dassam Falls",
      category: "waterfalls",
      description: "Beautiful cascade falling from a height of 144 feet",
      image: "/dassam.jpeg",
      duration: "Half day",
      highlights: ["Multi-tier Falls", "Natural Pools", "Photography"],
      distance: "40 km from Ranchi",
      bestTime: "July to February"
    },
    {
      id: 6,
      name: "Hazaribagh Wildlife Sanctuary",
      category: "nature",
      description: "Rich biodiversity with spotted deer, wild boar, and bird species",
      image: "/Hazaribagh.jpg",
      rating: 4.3,
      duration: "1-2 days",
      highlights: ["Wildlife Safari", "Bird Watching", "Nature Walks"],
      distance: "90 km from Ranchi",
      bestTime: "November to April"
    }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Jharkhand 🌿
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover pristine forests, majestic waterfalls, and rich cultural heritage across the state
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(destination => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {categories.find(c => c.id === destination.category)?.name}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {destination.distance}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {destination.duration} • Best: {destination.bestTime}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors font-medium">
                    Plan Visit
                  </button>
                  <button className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}