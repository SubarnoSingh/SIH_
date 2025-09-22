import React, { useState } from 'react';
import { 
  TrendingUp, Users, DollarSign, MapPin, Star, Calendar, 
  Activity, BarChart3, PieChart 
} from 'lucide-react';

const AnalyticsDashboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('year');

  const timeRanges = [
    { id: 'week', label: 'Last 7 Days' },
    { id: 'month', label: 'Last Month' },
    { id: 'quarter', label: 'Last Quarter' },
    { id: 'year', label: 'Last Year' }
  ];

  const kpiCards = [
    {
      title: 'Total Visitors',
      value: '425,600',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Tourism Revenue',
      value: '₹128.5 Cr',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Avg. Satisfaction',
      value: '4.4/5',
      change: '+0.3',
      trend: 'up',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Active Attractions',
      value: '156',
      change: '+8',
      trend: 'up',
      icon: MapPin,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const popularAttractions = [
    { name: 'Betla National Park', visitors: '125K', rating: 4.5 },
    { name: 'Hundru Falls', visitors: '98K', rating: 4.3 },
    { name: 'Ranchi Hill', visitors: '87K', rating: 4.1 },
    { name: 'Tagore Hill', visitors: '75K', rating: 4.0 },
    { name: 'Dassam Falls', visitors: '92K', rating: 4.4 }
  ];

  const spendingCategories = [
    { name: 'Accommodation', percentage: 35, color: 'bg-green-500' },
    { name: 'Food & Dining', percentage: 25, color: 'bg-blue-500' },
    { name: 'Transportation', percentage: 20, color: 'bg-purple-500' },
    { name: 'Activities', percentage: 12, color: 'bg-yellow-500' },
    { name: 'Shopping', percentage: 8, color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Activity className="mr-3 text-green-600" size={32} />
                Tourism Analytics Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                Real-time insights into Jharkhand's tourism performance
              </p>
            </div>
            
            <div className="flex space-x-2">
              {timeRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedTimeRange(range.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedTimeRange === range.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 border border-gray-300 hover:border-green-400 hover:text-green-600'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                    <IconComponent className={kpi.color} size={24} />
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    kpi.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">{kpi.value}</h3>
                  <p className="text-gray-600 text-sm mt-1">{kpi.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Popular Attractions */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <MapPin className="mr-2 text-green-600" size={24} />
            Top Attractions
          </h2>
          <div className="space-y-4">
            {popularAttractions.map((attraction, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">{attraction.name}</h3>
                  <p className="text-sm text-gray-600">{attraction.visitors} visitors</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                  <span className="font-medium">{attraction.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Spending Patterns */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <PieChart className="mr-2 text-blue-600" size={24} />
              Spending Patterns
            </h2>
            <div className="space-y-4">
              {spendingCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${category.color} mr-3`}></div>
                    <span className="text-gray-700">{category.name}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className={`h-2 rounded-full ${category.color}`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <span className="font-medium text-gray-900">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="mr-2 text-purple-600" size={24} />
              Quick Insights
            </h2>
            <div className="space-y-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600">Peak Season</h3>
                <p className="text-gray-600">October - March</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600">Avg Stay</h3>
                <p className="text-gray-600">3.2 days</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-600">Top Source</h3>
                <p className="text-gray-600">West Bengal (28%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;