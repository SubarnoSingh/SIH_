import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Ticket, Heart } from 'lucide-react';

export default function EventsPage() {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const months = [
    { id: 'all', name: 'All Events' },
    { id: 'jan', name: 'January' },
    { id: 'feb', name: 'February' },
    { id: 'mar', name: 'March' },
    { id: 'apr', name: 'April' },
    { id: 'may', name: 'May' },
    { id: 'jun', name: 'June' }
  ];

  const events = [
    {
      id: 1,
      name: "Sarhul Festival",
      month: "mar",
      date: "March 15-17, 2024",
      location: "Ranchi & tribal villages",
      description: "Spring festival celebrating the flowering of Sal trees, marking the Santal New Year",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
      category: "Cultural Festival",
      duration: "3 days",
      highlights: ["Traditional dance", "Tribal music", "Sacred grove rituals", "Local cuisine"],
      ticketPrice: 500,
      popularity: "high"
    },
    {
      id: 2,
      name: "Karma Festival",
      month: "apr",
      date: "April 8-10, 2024",
      location: "Tribal areas across Jharkhand",
      description: "Harvest festival dedicated to Karam tree, featuring folk songs and community bonding",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      category: "Harvest Festival",
      duration: "3 days",
      highlights: ["Karam tree worship", "Folk performances", "Community feast", "Traditional games"],
      ticketPrice: 400,
      popularity: "medium"
    },
    {
      id: 3,
      name: "Tusu Parab",
      month: "jan",
      date: "January 14-15, 2024",
      location: "Jamshedpur & surrounding areas",
      description: "Winter harvest festival celebrating prosperity and togetherness",
      image: "https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg",
      category: "Harvest Festival",
      duration: "2 days",
      highlights: ["Tusu dolls", "Folk songs", "Bonfire ceremonies", "Cultural performances"],
      ticketPrice: 300,
      popularity: "medium"
    },
    {
      id: 4,
      name: "Jharkhand Tribal Art Exhibition",
      month: "feb",
      date: "February 20-28, 2024",
      location: "Ranchi Art Gallery",
      description: "Showcase of traditional tribal art forms including Sohrai, Kohbar, and Dokra",
      image: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg",
      category: "Art & Culture",
      duration: "9 days",
      highlights: ["Art exhibitions", "Live demonstrations", "Artist interactions", "Art workshops"],
      ticketPrice: 200,
      popularity: "high"
    },
    {
      id: 5,
      name: "Netarhat Nature Festival",
      month: "may",
      date: "May 5-7, 2024",
      location: "Netarhat Hill Station",
      description: "Eco-tourism festival celebrating the natural beauty and biodiversity of Netarhat",
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
      category: "Nature & Adventure",
      duration: "3 days",
      highlights: ["Nature walks", "Photography workshops", "Sunrise viewing", "Local cuisine"],
      ticketPrice: 800,
      popularity: "high"
    },
    {
      id: 6,
      name: "Handicraft Fair",
      month: "jun",
      date: "June 12-18, 2024",
      location: "HEC Ranchi",
      description: "Annual fair showcasing traditional Jharkhand handicrafts and tribal products",
      image: "https://images.pexels.com/photos/1319855/pexels-photo-1319855.jpeg",
      category: "Shopping & Culture",
      duration: "7 days",
      highlights: ["Handicraft stalls", "Live craft demos", "Cultural programs", "Food court"],
      ticketPrice: 100,
      popularity: "medium"
    }
  ];

  const filteredEvents = events.filter(event => 
    selectedMonth === 'all' || event.month === selectedMonth
  );

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      default: return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Festivals & Events 🎭
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the vibrant culture and traditions of Jharkhand through authentic festivals and celebrations
          </p>
        </div>

        {/* Month Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {months.map(month => (
              <button
                key={month.id}
                onClick={() => setSelectedMonth(month.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedMonth === month.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {month.name}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-800">{event.category}</span>
                </div>
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${getPopularityColor(event.popularity)}`}>
                  {event.popularity === 'high' ? '🔥 Hot' : event.popularity === 'medium' ? '📈 Popular' : '✨ New'}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {event.name}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    {event.duration}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Event Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {event.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-200">
                  <div className="text-lg font-bold text-green-600">
                    ₹{event.ticketPrice}
                    <span className="text-sm text-gray-500 font-normal">/person</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {Math.floor(Math.random() * 200 + 50)} attending
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <Ticket className="h-4 w-4 mr-2" />
                    Book Tickets
                  </button>
                  <button className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors hover:text-red-600">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No events */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try selecting a different month</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Add Your Event?</h2>
          <p className="text-lg mb-6 text-green-100">
            Share your cultural events and festivals with travelers from around the world
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-colors">
            Submit Event
          </button>
        </div>
      </div>
    </div>
  );
}