<<<<<<< HEAD
# SIH_
=======
# Jharkhand Tourism Platform

A comprehensive tourism platform for Jharkhand featuring interactive maps, AI-powered chatbot, and immersive experiences.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add your API keys:

```env
# Google Maps API Key for Interactive Map
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Gemini API Key for AI ChatBot  
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Getting API Keys

#### Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Maps JavaScript API
4. Create credentials (API Key)
5. Restrict the key to your domain for security

#### Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env` file

### 4. Run the Application
```bash
npm run dev
```

## Features

- **Interactive Map**: Real Google Maps integration with attraction markers
- **AI ChatBot**: Powered by Google Gemini for intelligent tourism assistance
- **VR Experiences**: Virtual reality tours of attractions
- **Analytics Dashboard**: Tourism insights and statistics
- **Transport Info**: Route planning and transportation details
- **SafarBuddy**: Local guide connections
- **Marketplace**: Local products and experiences

## API Integration Status

- ✅ **ChatBot**: Integrated with Gemini API (fallback to mock responses if API unavailable)
- ✅ **Interactive Map**: Integrated with Google Maps API (fallback to placeholder if API unavailable)
- 🔄 **Other Features**: Using mock data (ready for API integration)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps JavaScript API key | Yes (for map functionality) |
| `VITE_GEMINI_API_KEY` | Google Gemini API key | Yes (for AI chatbot) |

## Notes

- The application will work without API keys but with limited functionality
- Map will show placeholder when Google Maps API key is missing
- ChatBot will use fallback responses when Gemini API key is missing
- All API keys should be prefixed with `VITE_` for Vite to expose them to the client
>>>>>>> a21d20c (bkhjbsdjvcbsdv)
