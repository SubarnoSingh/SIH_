import React, { useState } from 'react';
import { Navigation, MapPin, Clock, Route, Car, Bus, Train, Plane } from 'lucide-react';

const TransportInfo: React.FC = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [selectedMode, setSelectedMode] = useState('car');

  const transportModes = [
    { id: 'car', label: 'Car', icon: Car, color: 'bg-blue-500' },
    { id: 'bus', label: 'Bus', icon: Bus, color: 'bg-green-500' },
    { id: 'train', label: 'Train', icon: Train, color: 'bg-purple-500' },
    { id: 'plane', label: 'Flight', icon: Plane, color: 'bg-red-500' },
  ];

  const popularRoutes = [
    {
      from: 'Ranchi',
      to: 'Betla National Park',
      distance: '165 km',
      duration: '3h 30m',
      mode: 'car',
      cost: '₹2,500'
    },
    {
      from: 'Ranchi',
      to: 'Hundru Falls',
      distance: '45 km',
      duration: '1h 15m',
      mode: 'car',
      cost: '₹800'
    },
    {
      from: 'Jamshedpur',
      to: 'Ranchi',
      distance: '130 km',
      duration: '2h 45m',
      mode: 'car',
      cost: '₹2,000'
    },
    {
      from: 'Delhi',
      to: 'Ranchi',
      distance: '1,360 km',
      duration: '2h 15m',
      mode: 'plane',
      cost: '₹8,500'
    }
  ];

  const nearbyTransportHubs = [
    {
      name: 'Birsa Munda Airport',
      type: 'Airport',
      distance: '7 km from Ranchi',
      services: 'Domestic flights to major cities',
      icon: Plane
    },
    {
      name: 'Ranchi Junction',
      type: 'Railway Station',
      distance: 'City Center',
      services: 'Connects to Delhi, Kolkata, Mumbai',
      icon: Train
    },
    {
      name: 'Central Bus Terminal',
      type: 'Bus Station',
      distance: '3 km from city center',
      services: 'State & interstate bus services',
      icon: Bus
    }
  ];

  const handleRouteSearch = () => {
    console.log(`Searching route from ${fromLocation} to ${toLocation} via ${selectedMode}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <Navigation className="mr-3 text-blue-600" size={40} />
            Transport Info 🚗
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan your journey with comprehensive transport and route information
          </p>
        </div>

        {/* Route Planner */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 mb-8 border border-blue-200 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Route className="mr-2 text-blue-600" size={24} />
            Plan Your Journey
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="text"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="Enter starting location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="text"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="Enter destination"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Transport Mode Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Travel Mode</label>
            <div className="flex flex-wrap gap-2">
              {transportModes.map((mode) => {
                const IconComponent = mode.icon;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedMode === mode.id
                        ? `${mode.color} text-white shadow-lg transform scale-105`
                        : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-600'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{mode.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleRouteSearch}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Get Directions & Route Info
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Popular Routes */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Route className="mr-2 text-green-600" size={24} />
              Popular Routes
            </h2>
            
            <div className="space-y-4">
              {popularRoutes.map((route, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {route.from} → {route.to}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {route.distance}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {route.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-green-600">{route.cost}</span>
                      <div className="flex items-center mt-1">
                        {route.mode === 'car' && <Car size={16} className="text-blue-500" />}
                        {route.mode === 'bus' && <Bus size={16} className="text-green-500" />}
                        {route.mode === 'train' && <Train size={16} className="text-purple-500" />}
                        {route.mode === 'plane' && <Plane size={16} className="text-red-500" />}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-3 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium">
                    View Detailed Route
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Transport Hubs */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Major Transport Hubs
            </h2>
            
            <div className="space-y-4">
              {nearbyTransportHubs.map((hub, index) => {
                const IconComponent = hub.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <IconComponent size={24} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{hub.name}</h4>
                        <p className="text-sm text-blue-600 mb-2">{hub.type}</p>
                        <p className="text-sm text-gray-600 mb-1">{hub.distance}</p>
                        <p className="text-sm text-gray-700">{hub.services}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Real-time Updates */}
            <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
              <h4 className="font-semibold text-gray-900 mb-2">🚦 Real-time Updates</h4>
              <div className="space-y-2 text-sm">
                <p className="text-green-700">✅ NH-33 (Ranchi-Jamshedpur): Clear traffic</p>
                <p className="text-yellow-700">⚠️ NH-23 (Ranchi-Gumla): Moderate traffic near Sisai</p>
                <p className="text-red-700">🔴 Local roads to Hundru Falls: Heavy traffic due to weekend rush</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportInfo;