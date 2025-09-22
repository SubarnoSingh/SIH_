import React, { useState } from 'react';
import { Wand2, MapPin, Clock, Users, DollarSign, Calendar, Download, Share } from 'lucide-react';

export default function ItineraryPage() {
  const [formData, setFormData] = useState({
    destination: '',
    duration: '3',
    budget: 'medium',
    interests: [],
    travelWith: 'family',
    accommodation: 'hotel'
  });

  const [generatedItinerary, setGeneratedItinerary] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const interests = [
    'Nature & Wildlife', 'Adventure Sports', 'Cultural Sites', 'Photography',
    'Tribal Culture', 'Waterfalls', 'Trekking', 'Local Cuisine', 'Handicrafts', 'Meditation'
  ];

  const sampleItinerary = {
    title: "3-Day Cultural & Nature Experience in Jharkhand",
    totalCost: "₹12,000 - ₹18,000",
    bestTime: "October to March",
    days: [
      {
        day: 1,
        title: "Arrival in Ranchi - Cultural Exploration",
        activities: [
          {
            time: "09:00 AM",
            activity: "Arrival at Ranchi Airport",
            location: "Ranchi",
            duration: "30 mins"
          },
          {
            time: "10:30 AM",
            activity: "Visit Tribal Research Institute Museum",
            location: "Ranchi",
            duration: "2 hours",
            cost: "₹50"
          },
          {
            time: "01:00 PM",
            activity: "Lunch at local restaurant (Litti Chokha)",
            location: "Main Road, Ranchi",
            duration: "1 hour",
            cost: "₹300"
          },
          {
            time: "03:00 PM",
            activity: "Shopping for Dokra handicrafts",
            location: "Upper Bazar",
            duration: "2 hours",
            cost: "₹1,000"
          },
          {
            time: "06:00 PM",
            activity: "Sunset at Ranchi Lake",
            location: "Ranchi Lake",
            duration: "1 hour",
            cost: "Free"
          }
        ]
      },
      {
        day: 2,
        title: "Netarhat - Queen of Chotanagpur",
        activities: [
          {
            time: "06:00 AM",
            activity: "Drive to Netarhat",
            location: "Netarhat",
            duration: "4 hours",
            cost: "₹2,000"
          },
          {
            time: "11:00 AM",
            activity: "Magnolia Point Sunrise View",
            location: "Netarhat",
            duration: "1 hour",
            cost: "Free"
          },
          {
            time: "01:00 PM",
            activity: "Lunch at Forest Rest House",
            location: "Netarhat",
            duration: "1 hour",
            cost: "₹400"
          },
          {
            time: "03:00 PM",
            activity: "Nature photography at Koel View Point",
            location: "Netarhat",
            duration: "2 hours",
            cost: "Free"
          },
          {
            time: "06:00 PM",
            activity: "Sunset Point viewing",
            location: "Netarhat",
            duration: "1 hour",
            cost: "Free"
          }
        ]
      },
      {
        day: 3,
        title: "Hundru Falls & Departure",
        activities: [
          {
            time: "08:00 AM",
            activity: "Drive to Hundru Falls",
            location: "Hundru",
            duration: "2 hours",
            cost: "₹1,500"
          },
          {
            time: "11:00 AM",
            activity: "Explore Hundru Waterfall",
            location: "Hundru Falls",
            duration: "3 hours",
            cost: "₹30"
          },
          {
            time: "02:00 PM",
            activity: "Picnic lunch near waterfall",
            location: "Hundru Falls",
            duration: "1 hour",
            cost: "₹500"
          },
          {
            time: "04:00 PM",
            activity: "Return to Ranchi Airport",
            location: "Ranchi",
            duration: "2 hours",
            cost: "₹1,200"
          }
        ]
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'interests') {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          interests: [...prev.interests, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const generateItinerary = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setGeneratedItinerary(sampleItinerary);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AI Trip Planner ✨
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let our AI create a personalized itinerary based on your preferences and interests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Planning Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Wand2 className="h-6 w-6 text-purple-600 mr-2" />
              Plan Your Journey
            </h2>

            <div className="space-y-6">
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Destination
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select destination</option>
                  <option value="ranchi">Ranchi & Surroundings</option>
                  <option value="netarhat">Netarhat Region</option>
                  <option value="betla">Betla National Park</option>
                  <option value="jamshedpur">Jamshedpur Region</option>
                  <option value="dhanbad">Dhanbad & Coal Mines</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trip Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="5">5 Days</option>
                  <option value="7">1 Week</option>
                  <option value="14">2 Weeks</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range (per person)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'low', label: 'Budget', range: '₹5K-10K' },
                    { id: 'medium', label: 'Comfort', range: '₹10K-20K' },
                    { id: 'high', label: 'Luxury', range: '₹20K+' }
                  ].map(budget => (
                    <label
                      key={budget.id}
                      className={`flex flex-col items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.budget === budget.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={budget.id}
                        checked={formData.budget === budget.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <DollarSign className="h-5 w-5 mb-1" />
                      <span className="text-sm font-medium">{budget.label}</span>
                      <span className="text-xs text-gray-500">{budget.range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Interests (select multiple)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map(interest => (
                    <label
                      key={interest}
                      className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleInputChange}
                        className="text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Travel With */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Traveling With
                </label>
                <select
                  name="travelWith"
                  value={formData.travelWith}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="solo">Solo</option>
                  <option value="couple">Couple</option>
                  <option value="family">Family</option>
                  <option value="friends">Friends</option>
                </select>
              </div>

              <button
                onClick={generateItinerary}
                disabled={isGenerating || !formData.destination}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating Your Perfect Trip...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5 mr-2" />
                    Generate AI Itinerary
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Generated Itinerary */}
          <div className="space-y-6">
            {isGenerating && (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Creating Your Itinerary</h3>
                <p className="text-gray-600">Our AI is crafting the perfect trip based on your preferences...</p>
              </div>
            )}

            {generatedItinerary && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{generatedItinerary.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {generatedItinerary.totalCost}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Best: {generatedItinerary.bestTime}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {generatedItinerary.days.map(day => (
                    <div key={day.day} className="mb-8 last:mb-0">
                      <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 font-bold">
                          {day.day}
                        </div>
                        {day.title}
                      </h4>

                      <div className="space-y-3 ml-11">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-green-600 font-medium min-w-[80px]">
                              {activity.time}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-800">{activity.activity}</h5>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                <span className="flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {activity.location}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {activity.duration}
                                </span>
                                {activity.cost && (
                                  <span className="flex items-center">
                                    <DollarSign className="h-3 w-3 mr-1" />
                                    {activity.cost}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center">
                      <Share className="h-4 w-4 mr-2" />
                      Share Itinerary
                    </button>
                  </div>
                </div>
              </div>
            )}

            {!generatedItinerary && !isGenerating && (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Wand2 className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Plan?</h3>
                <p className="text-gray-600">Fill out the form to generate your personalized Jharkhand itinerary</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}