import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import SafarBuddyPage from './pages/SafarBuddyPage';
import ItineraryPage from './pages/ItineraryPage';
import MarketplacePage from './pages/MarketplacePage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import InteractiveMap from './pages/InteractiveMap';
import TransportInfo from './pages/TransportInfo';
import VRExperience from './pages/VRExperience';
import ChatBot from './components/ChatBot';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Header 
          user={user} 
          onLogin={() => setIsAuthModalOpen(true)} 
          onLogout={handleLogout}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/safarbuddy" element={<SafarBuddyPage />} />
            <Route path="/itinerary" element={<ItineraryPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/transport" element={<TransportInfo />} />
            <Route path="/vr" element={<VRExperience />} />
          </Routes>
        </main>

        <Footer />
        <ChatBot />
        
        {isAuthModalOpen && (
          <AuthModal 
            onClose={() => setIsAuthModalOpen(false)}
            onLogin={handleLogin}
          />
        )}
      </div>
    </Router>
  );
}

export default App;