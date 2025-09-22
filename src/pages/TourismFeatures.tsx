import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Calendar, Camera, Route, Clock } from 'lucide-react';
import InteractiveMap from './InteractiveMap';
import TransportInfo from './TransportInfo';
import EventsCalendar from './EventsCalendar';
import VRExperience from './VRExperience';

const TourismFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [vrExperience, setVrExperience] = useState<{
    isOpen: boolean;
    attraction: any;
  }>({ isOpen: false, attraction: null });

  const tabs = [
    { id: 'map', label: 'Interactive Maps', icon: MapPin },
    { id: 'transport', label: 'Transport Info', icon: Navigation },
    { id: 'events', label: 'Events & Festivals', icon: Calendar },
  ];

  const launchVRExperience = () => {
    // Sample VR experience with a featured attraction
    const featuredAttraction = {
      name: 'Jharkhand Virtual Tour',
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Experience the natural beauty of Jharkhand through immersive 360° virtual reality',
      vrImage: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1200'
    };
    setVrExperience({ isOpen: true, attraction: featuredAttraction });
  };

  const closeVRExperience = () => {
    setVrExperience({ isOpen: false, attraction: null });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🌿 Explore Jharkhand
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover hidden gems, plan your journey, and immerse yourself in the rich cultural heritage of Jharkhand
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center space-x-1 bg-white rounded-xl shadow-lg p-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <IconComponent size={20} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {activeTab === 'map' && <InteractiveMap />}
          {activeTab === 'transport' && <TransportInfo />}
          {activeTab === 'events' && <EventsCalendar />}
        </div>
      </div>

      {/* AR/VR Preview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="text-center">
            <Camera size={48} className="mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">360° Virtual Previews</h2>
            <p className="text-xl mb-6 opacity-90">
              Experience Jharkhand's attractions through immersive virtual reality previews
            </p>
            <button 
              onClick={launchVRExperience}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105">
              Launch VR Experience
            </button>
          </div>
        </div>
      </div>

      {/* VR Experience Modal */}
      <VRExperience
        isOpen={vrExperience.isOpen}
        onClose={closeVRExperience}
        attraction={vrExperience.attraction}
      />
    </div>
  );
};

export default TourismFeatures;