import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Star, Camera, Info, AlertCircle } from 'lucide-react';

const attractions = [
  {
    id: 1,
    name: 'Betla National Park',
    type: 'Wildlife',
    rating: 4.5,
    image: '/pics/betla.webp?auto=compress&cs=tinysrgb&w=400',
    description: 'Famous for its tigers, elephants, and rich biodiversity'
  },
  {
    id: 2,
    name: 'Hundru Falls',
    type: 'Waterfall',
    rating: 4.3,
    image: '/pics/hundru.webp?auto=compress&cs=tinysrgb&w=400',
    description: 'Spectacular 320-foot waterfall on the Subarnarekha River'
  },
  {
    id: 3,
    name: 'Ranchi Hill',
    type: 'Hill Station',
    rating: 4.1,
    image: '/pics/ranchi.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Scenic hill station with panoramic city views'
  },
  {
    id: 4,
    name: 'Tagore Hill',
    type: 'Historical',
    rating: 4.0,
    image: '/pics/tagore.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'Historical site where Rabindranath Tagore used to meditate'
  },
  {
    id: 5,
    name: 'Dassam Falls',
    type: 'Waterfall',
    rating: 4.4,
    image: '/pics/dassam.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Beautiful cascade falling from 144 feet height'
  }
];

const InteractiveMap: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<typeof attractions[0] | null>(null);
  const [filter, setFilter] = useState('all');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const filteredAttractions = filter === 'all' 
    ? attractions 
    : attractions.filter(attraction => attraction.type.toLowerCase() === filter);

  useEffect(() => {
    if (!apiKey || apiKey === 'your_google_maps_api_key_here') {
      setMapError('Google Maps API key not configured');
      return;
    }

    const loadGoogleMaps = () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Remove existing script if any
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        console.error('Failed to load Google Maps script');
        setMapError('Failed to load Google Maps. Please check your API key.');
      };
      
      // Set up global callback
      (window as any).initMap = initializeMap;
      
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current) {
        console.error('Map container not found');
        return;
      }

      try {
        console.log('Initializing Google Map...');
        
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 23.6102, lng: 85.2799 }, // Ranchi coordinates
          zoom: 8,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          styles: [
            {
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

        googleMapRef.current = map;
        console.log('Map initialized successfully');

        // Add markers for attractions with real coordinates
        const attractionCoords = [
          { lat: 23.8772, lng: 84.1894 }, // Betla National Park
          { lat: 23.4239, lng: 85.5906 }, // Hundru Falls
          { lat: 23.3441, lng: 85.3096 }, // Ranchi Hill
          { lat: 23.3598, lng: 85.3173 }, // Tagore Hill
          { lat: 23.4847, lng: 85.4328 }  // Dassam Falls
        ];

        filteredAttractions.forEach((attraction, index) => {
          const position = attractionCoords[index] || {
            lat: 23.6102 + (index * 0.1) - 0.2,
            lng: 85.2799 + (index * 0.15) - 0.3
          };

          const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: attraction.name,
            animation: google.maps.Animation.DROP
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 5px 0; color: #1f2937;">${attraction.name}</h3>
                <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px;">${attraction.type}</p>
                <p style="margin: 0; color: #374151; font-size: 13px;">${attraction.description}</p>
                <div style="margin-top: 8px; display: flex; align-items: center;">
                  <span style="color: #fbbf24;">★</span>
                  <span style="margin-left: 4px; font-size: 12px;">${attraction.rating}</span>
                </div>
              </div>
            `
          });

          marker.addListener('click', () => {
            // Close all other info windows
            if ((window as any).currentInfoWindow) {
              (window as any).currentInfoWindow.close();
            }
            
            infoWindow.open(map, marker);
            (window as any).currentInfoWindow = infoWindow;
            setSelectedAttraction(attraction);
          });
        });

        setMapLoaded(true);
        setMapError('');
        
      } catch (error) {
        console.error('Map initialization error:', error);
        setMapError('Failed to initialize map: ' + (error as Error).message);
      }
    };

    loadGoogleMaps();
    
    // Cleanup function
    return () => {
      if ((window as any).initMap) {
        delete (window as any).initMap;
      }
    };
  }, [apiKey]);

  // Separate effect for updating markers when filter changes
  useEffect(() => {
    if (googleMapRef.current && mapLoaded) {
      // Clear existing markers would go here if we stored them
      // For now, we'll reinitialize when filter changes
    }
  }, [filteredAttractions, mapLoaded]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center">
            <MapPin className="mr-3 text-green-600" size={40} />
            Interactive Map 🗺️
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore Jharkhand's attractions with our interactive map interface
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['all', 'wildlife', 'waterfall', 'hill station', 'historical'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === filterType
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green-100 hover:text-green-600 shadow-md'
              }`}
            >
              {filterType === 'all' ? 'All Attractions' : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="rounded-xl h-96 lg:h-[500px] relative overflow-hidden shadow-lg border border-green-200">
              {mapError ? (
                <div className="bg-gradient-to-br from-red-100 to-orange-100 h-full flex items-center justify-center">
                  <div className="text-center">
                    <AlertCircle size={64} className="mx-auto mb-4 text-red-600 opacity-60" />
                    <p className="text-lg font-semibold text-red-700 mb-2">Map Unavailable</p>
                    <p className="text-red-600 text-sm mb-4">{mapError}</p>
                    <p className="text-gray-600 text-xs">Please configure VITE_GOOGLE_MAPS_API_KEY in your .env file</p>
                  </div>
                </div>
              ) : !mapLoaded ? (
                <div className="bg-gradient-to-br from-green-100 to-blue-100 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-lg font-semibold text-gray-700 mb-2">Loading Interactive Map</p>
                    <p className="text-gray-500">Connecting to Google Maps...</p>
                  </div>
                </div>
              ) : (
                <div ref={mapRef} className="w-full h-full" />
              )}
            </div>
          </div>

          {/* Attractions List */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 sticky top-0 bg-green-50 py-2 rounded-lg px-3">
              Attractions ({filteredAttractions.length})
            </h3>
            {filteredAttractions.map((attraction) => (
              <div
                key={attraction.id}
                onClick={() => setSelectedAttraction(attraction)}
                className={`bg-white border rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedAttraction?.id === attraction.id
                    ? 'border-green-500 shadow-lg ring-2 ring-green-200'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{attraction.name}</h4>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {attraction.type}
                      </span>
                      <div className="flex items-center">
                        <Star size={12} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{attraction.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Attraction Details */}
        {selectedAttraction && (
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
            <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={selectedAttraction.image}
                alt={selectedAttraction.name}
                className="w-full md:w-48 h-48 rounded-xl object-cover shadow-lg"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedAttraction.name}
                </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                    {selectedAttraction.type}
                  </span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-gray-700 ml-1 font-medium">{selectedAttraction.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{selectedAttraction.description}</p>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                    <Camera size={16} />
                    <span>View Gallery</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    <Info size={16} />
                    <span>More Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;