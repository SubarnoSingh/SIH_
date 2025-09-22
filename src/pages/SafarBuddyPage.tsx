import React, { useState } from 'react';
import { Search, Star, MapPin, Languages, Shield, Calendar, Phone, MessageCircle } from 'lucide-react';

export default function SafarBuddyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'ranchi', name: 'Ranchi' },
    { id: 'jamshedpur', name: 'Jamshedpur' },
    { id: 'dhanbad', name: 'Dhanbad' },
    { id: 'netarhat', name: 'Netarhat' },
    { id: 'betla', name: 'Betla' }
  ];

  const guides = [
    {
      id: 1,
      name: "Ravi Kumar Munda",
      location: "Ranchi",
      languages: ["Hindi", "English", "Santhali"],
      rating: 4.9,
      reviews: 127,
      experience: "8 years",
      specialties: ["Cultural Tours", "Tribal Villages", "Adventure"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      isVerified: true,
      pricePerDay: 1500,
      availability: "Available",
      description: "Expert in tribal culture and traditional crafts. Speaks fluent Santhali and has deep knowledge of local customs."
    },
    {
      id: 2,
      name: "Priya Singh",
      location: "Netarhat",
      languages: ["Hindi", "English", "Nagpuri"],
      rating: 4.8,
      reviews: 89,
      experience: "6 years",
      specialties: ["Nature Photography", "Wildlife", "Trekking"],
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      isVerified: true,
      pricePerDay: 1200,
      availability: "Available",
      description: "Nature enthusiast and certified wildlife guide. Specializes in bird watching and photography tours."
    },
    {
      id: 3,
      name: "Santosh Oraon",
      location: "Betla",
      languages: ["Hindi", "English", "Kurukh"],
      rating: 4.7,
      reviews: 156,
      experience: "10 years",
      specialties: ["Wildlife Safari", "Jungle Tracking", "Bird Watching"],
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      isVerified: true,
      pricePerDay: 1800,
      availability: "Booked till March 15",
      description: "Senior wildlife guide with extensive knowledge of Betla National Park. Expert tracker and naturalist."
    },
    {
      id: 4,
      name: "Anjali Devi",
      location: "Jamshedpur",
      languages: ["Hindi", "English", "Bengali"],
      rating: 4.6,
      reviews: 73,
      experience: "4 years",
      specialties: ["Heritage Tours", "Local Cuisine", "Handicrafts"],
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      isVerified: true,
      pricePerDay: 1000,
      availability: "Available",
      description: "Local culture expert specializing in traditional handicrafts and authentic Jharkhandi cuisine experiences."
    },
    {
      id: 5,
      name: "Manoj Tirkey",
      location: "Dhanbad",
      languages: ["Hindi", "English", "Santhali"],
      rating: 4.8,
      reviews: 94,
      experience: "7 years",
      specialties: ["Adventure Sports", "Rock Climbing", "Caving"],
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      isVerified: true,
      pricePerDay: 1600,
      availability: "Available",
      description: "Adventure sports instructor and certified rock climbing guide. Leads exciting outdoor expeditions."
    },
    {
      id: 6,
      name: "Sunita Kumari",
      location: "Ranchi",
      languages: ["Hindi", "English", "Nagpuri"],
      rating: 4.9,
      reviews: 112,
      experience: "5 years",
      specialties: ["Eco-Tourism", "Meditation Retreats", "Yoga"],
      image: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
      isVerified: true,
      pricePerDay: 1300,
      availability: "Available",
      description: "Certified yoga instructor and eco-tourism advocate. Offers holistic wellness experiences in nature."
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLocation = selectedLocation === 'all' || guide.location.toLowerCase() === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const handleHireGuide = (guide: any) => {
    // This would typically open a booking modal or redirect to booking page
    alert(`Booking request sent to ${guide.name}! They will contact you soon.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            SafarBuddy Guides 🎯
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with verified local guides who know Jharkhand's hidden gems and cultural secrets
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Verified Guides', value: '150+', icon: Shield },
            { label: 'Happy Tourists', value: '5,000+', icon: Star },
            { label: 'Languages Supported', value: '8+', icon: Languages },
            { label: 'Avg. Rating', value: '4.8', icon: Star }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
              <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredGuides.map(guide => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    {guide.isVerified && (
                      <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1">
                        <Shield className="h-3 w-3" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{guide.name}</h3>
                      <div className="flex items-center bg-green-50 px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm font-medium">{guide.rating}</span>
                        <span className="ml-1 text-xs text-gray-500">({guide.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{guide.location}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{guide.experience} experience</span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <Languages className="h-4 w-4 mr-1" />
                      <span className="text-sm">{guide.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{guide.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-lg font-bold text-green-600">₹{guide.pricePerDay}/day</div>
                    <div className={`text-sm ${guide.availability === 'Available' ? 'text-green-600' : 'text-orange-600'}`}>
                      <Calendar className="h-3 w-3 inline mr-1" />
                      {guide.availability}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <MessageCircle className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleHireGuide(guide)}
                      disabled={guide.availability !== 'Available'}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        guide.availability === 'Available'
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {guide.availability === 'Available' ? 'Hire Guide' : 'Not Available'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No guides found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}