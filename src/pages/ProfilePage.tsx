import React, { useState } from 'react';
import { User, MapPin, Heart, Calendar, Star, Settings, Edit, Camera } from 'lucide-react';

interface ProfilePageProps {
  user: any;
}

export default function ProfilePage({ user }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to view your profile</h2>
          <p className="text-gray-600">You need to be signed in to access this page.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'trips', name: 'My Trips', icon: MapPin },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'bookings', name: 'Bookings', icon: Calendar },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const mockTrips = [
    {
      id: 1,
      destination: "Netarhat Hill Station",
      date: "March 15-17, 2024",
      status: "Completed",
      rating: 5,
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
    },
    {
      id: 2,
      destination: "Betla National Park",
      date: "April 5-7, 2024",
      status: "Upcoming",
      guide: "Santosh Oraon",
      image: "https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg"
    }
  ];

  const mockWishlist = [
    {
      id: 1,
      name: "Hundru Falls",
      type: "Destination",
      image: "https://images.pexels.com/photos/552616/pexels-photo-552616.jpeg"
    },
    {
      id: 2,
      name: "Tribal Village Experience",
      type: "Experience",
      image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-gray-600">Trips Completed</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-gray-600">Places Visited</div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-yellow-600">4.8</div>
                <div className="text-gray-600">Avg. Rating</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Rated Netarhat Hill Station - 5 stars</span>
                  <span className="text-gray-400">2 days ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Added Hundru Falls to wishlist</span>
                  <span className="text-gray-400">1 week ago</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span>Booked Betla National Park tour</span>
                  <span className="text-gray-400">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'trips':
        return (
          <div className="space-y-6">
            {mockTrips.map(trip => (
              <div key={trip.id} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex gap-4">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{trip.destination}</h3>
                    <p className="text-gray-600">{trip.date}</p>
                    {trip.guide && (
                      <p className="text-sm text-gray-500">Guide: {trip.guide}</p>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        trip.status === 'Completed' 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {trip.status}
                      </span>
                      {trip.rating && (
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < trip.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'wishlist':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockWishlist.map(item => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.type}</p>
                  <button className="mt-2 text-sm text-green-600 hover:text-green-700">
                    Plan Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'bookings':
        return (
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Bookings</h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">Betla National Park Safari</h4>
                    <p className="text-sm text-gray-600">April 5-7, 2024</p>
                    <p className="text-sm text-gray-600">Guide: Santosh Oraon</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    Confirmed
                  </span>
                </div>
                <div className="mt-3 text-lg font-semibold text-green-600">₹5,400</div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={user.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <button className="absolute bottom-0 right-0 bg-white border-2 border-gray-300 rounded-full p-1 hover:bg-gray-50">
                <Camera className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <div className="mt-2">
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  user.type === 'guide' 
                    ? 'bg-blue-100 text-blue-700' 
                    : user.type === 'admin'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {user.type === 'guide' ? 'SafarBuddy Guide' : 
                   user.type === 'admin' ? 'Tourism Official' : 'Traveler'}
                </span>
                {user.isVerified && (
                  <span className="ml-2 text-green-600">✓ Verified</span>
                )}
              </div>
            </div>

            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-4">
              <nav className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-green-50 text-green-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-3" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}