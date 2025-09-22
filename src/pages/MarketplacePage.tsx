import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Shield, Truck } from 'lucide-react';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'handicrafts', name: 'Handicrafts' },
    { id: 'homestays', name: 'Eco-Homestays' },
    { id: 'experiences', name: 'Cultural Experiences' },
    { id: 'food', name: 'Local Food' }
  ];

  const products = [
    {
      id: 1,
      name: "Dokra Metal Horse",
      category: "handicrafts",
      price: 1899,
      originalPrice: 2499,
      rating: 4.8,
      reviews: 47,
      image: "https://images.pexels.com/photos/1319855/pexels-photo-1319855.jpeg",
      seller: "Tribal Craft Co-op",
      isAuthentic: true,
      description: "Handcrafted bronze horse using traditional Dokra technique by tribal artisans"
    },
    {
      id: 2,
      name: "Forest Eco-Homestay, Netarhat",
      category: "homestays",
      price: 2500,
      originalPrice: 3200,
      rating: 4.9,
      reviews: 89,
      image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      seller: "Green Valley Homestays",
      isAuthentic: true,
      description: "Sustainable accommodation in the heart of Netarhat's forest with organic meals",
      perNight: true
    },
    {
      id: 3,
      name: "Santhali Traditional Painting Workshop",
      category: "experiences",
      price: 899,
      originalPrice: 1200,
      rating: 4.7,
      reviews: 23,
      image: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg",
      seller: "Cultural Heritage Tours",
      isAuthentic: true,
      description: "Learn traditional Sohrai and Kohbar art from master artists"
    },
    {
      id: 4,
      name: "Bamboo Handicraft Set",
      category: "handicrafts",
      price: 699,
      originalPrice: 899,
      rating: 4.6,
      reviews: 34,
      image: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg",
      seller: "Bamboo Craft Guild",
      isAuthentic: true,
      description: "Eco-friendly bamboo products including baskets, lamps, and home decor"
    },
    {
      id: 5,
      name: "Tribal Village Overnight Experience",
      category: "experiences",
      price: 3999,
      originalPrice: 4999,
      rating: 4.9,
      reviews: 67,
      image: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg",
      seller: "Authentic Village Tours",
      isAuthentic: true,
      description: "Immersive overnight stay with tribal families, traditional food, and cultural programs"
    },
    {
      id: 6,
      name: "Litti Chokha Cooking Kit",
      category: "food",
      price: 449,
      originalPrice: 599,
      rating: 4.5,
      reviews: 156,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
      seller: "Jharkhand Foods",
      isAuthentic: true,
      description: "Complete kit to make authentic Litti Chokha at home with recipe guide"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Local Marketplace 🛍️
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover authentic handicrafts, eco-homestays, and cultural experiences from local artisans
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-4 flex items-center space-x-3 shadow-md">
            <Shield className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-gray-800">Authentic Products</h3>
              <p className="text-sm text-gray-600">Blockchain verified handicrafts</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-3 shadow-md">
            <Truck className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="font-semibold text-gray-800">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders above ₹999</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-3 shadow-md">
            <Star className="h-8 w-8 text-yellow-600" />
            <div>
              <h3 className="font-semibold text-gray-800">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">Direct from artisans</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.isAuthentic && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="ml-1 text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {categories.find(c => c.id === product.category)?.name}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-500">by {product.seller}</div>
                  <div className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-green-600">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {product.perNight && (
                      <span className="text-sm text-gray-500">/night</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <div className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors font-medium flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.category === 'homestays' ? 'Book Now' : 
                     product.category === 'experiences' ? 'Book Experience' : 'Add to Cart'}
                  </button>
                  <button className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}