import React, { useState } from 'react';
import { X, RotateCcw, Maximize2, Play, Pause, Volume2 } from 'lucide-react';

interface VRExperienceProps {
  isOpen?: boolean;
  onClose?: () => void;
  attraction?: {
    name: string;
    image: string;
    description: string;
  } | null;
}

const VRExperience: React.FC<VRExperienceProps> = ({ 
  isOpen = false, 
  onClose = () => {}, 
  attraction = null 
}) => {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const vrExperiences = [
    {
      id: 1,
      name: 'Betla National Park Safari',
      type: 'Wildlife',
      duration: '8 minutes',
      image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg',
      description: 'Experience a virtual safari through Betla National Park and encounter tigers, elephants, and diverse wildlife.',
      features: ['360° Wildlife Views', 'Tiger Tracking', 'Elephant Encounters', 'Bird Watching']
    },
    {
      id: 2,
      name: 'Hundru Falls Adventure',
      type: 'Waterfall',
      duration: '6 minutes',
      image: 'https://images.pexels.com/photos/552616/pexels-photo-552616.jpeg',
      description: 'Feel the mist and hear the roar of the magnificent Hundru Falls in this immersive VR experience.',
      features: ['Waterfall Sounds', 'Mist Effects', 'Rock Climbing View', 'Rainbow Moments']
    },
    {
      id: 3,
      name: 'Netarhat Sunrise',
      type: 'Hill Station',
      duration: '10 minutes',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      description: 'Watch the breathtaking sunrise from the Queen of Chotanagpur in this peaceful VR journey.',
      features: ['Time-lapse Sunrise', 'Panoramic Views', 'Morning Sounds', 'Cloud Formations']
    },
    {
      id: 4,
      name: 'Tribal Village Life',
      type: 'Cultural',
      duration: '12 minutes',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
      description: 'Immerse yourself in authentic tribal culture, traditions, and daily life of Jharkhand communities.',
      features: ['Traditional Dance', 'Handicraft Making', 'Village Sounds', 'Cultural Stories']
    },
    {
      id: 5,
      name: 'Parasnath Hill Trek',
      type: 'Adventure',
      duration: '15 minutes',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
      description: 'Trek to the highest peak of Jharkhand and experience the spiritual journey to Parasnath Hill.',
      features: ['Mountain Views', 'Trekking Path', 'Temple Visits', 'Meditation Spots']
    }
  ];

  const handlePlayExperience = (experience: any) => {
    setSelectedExperience(experience);
    setIsPlaying(true);
  };

  const handleCloseExperience = () => {
    setSelectedExperience(null);
    setIsPlaying(false);
  };

  // If used as modal
  if (isOpen && attraction) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
        <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-black rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
            <div className="flex justify-between items-center text-white">
              <div>
                <h2 className="text-xl font-bold">{attraction.name}</h2>
                <p className="text-sm opacity-80">360° Virtual Experience</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-red-500/80 rounded-lg hover:bg-red-500 transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-900 to-blue-900">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-lg font-semibold">Loading VR Experience...</p>
              <p className="text-sm opacity-80">Preparing 360° view of {attraction.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main VR Experience page
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            VR Experiences 🥽
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in Jharkhand's beauty through cutting-edge virtual reality experiences
          </p>
        </div>

        {/* VR Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vrExperiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handlePlayExperience(experience)}
                    className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Play size={24} />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  {experience.type}
                </div>
                <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                  {experience.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{experience.name}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {experience.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handlePlayExperience(experience)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <Play size={16} className="mr-2" />
                  Start VR Experience
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VR Player Modal */}
        {selectedExperience && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-black rounded-lg overflow-hidden">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
                <div className="flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-xl font-bold">{selectedExperience.name}</h2>
                    <p className="text-sm opacity-80">VR Experience • {selectedExperience.duration}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      <RotateCcw size={20} />
                    </button>
                    <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      <Maximize2 size={20} />
                    </button>
                    <button
                      onClick={handleCloseExperience}
                      className="p-2 bg-red-500/80 rounded-lg hover:bg-red-500 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* VR Content Area */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 relative">
                <img
                  src={selectedExperience.image}
                  alt={selectedExperience.name}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="animate-pulse mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                      </div>
                    </div>
                    <p className="text-lg font-semibold mb-2">VR Experience Active</p>
                    <p className="text-sm opacity-80">Put on your VR headset for full immersion</p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-center space-x-4 text-white">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Volume2 size={20} />
                  </button>
                  <div className="flex-1 max-w-md">
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Jharkhand Like Never Before</h2>
          <p className="text-lg mb-6 text-purple-100">
            Our VR experiences use cutting-edge technology to transport you to the most beautiful locations in Jharkhand
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">360°</div>
              <div className="text-purple-200">Immersive Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4K</div>
              <div className="text-purple-200">Ultra HD Quality</div>
            </div>
            <div>
              <div className="text-2xl font-bold">5+</div>
              <div className="text-purple-200">Unique Experiences</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRExperience;