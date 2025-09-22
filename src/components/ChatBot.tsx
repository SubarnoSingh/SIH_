import React, { useState } from "react";
import { MessageCircle, X, Send, Globe } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("english");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Namaste! I'm your Jharkhand tourism assistant. How can I help you explore our beautiful state?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");

  const languages = [
    { code: "english", name: "English", native: "English" },
    { code: "hindi", name: "Hindi", native: "हिंदी" },
    { code: "santhali", name: "Santhali", native: "ᱥᱟᱱᱛᱟᱲᱤ" },
    { code: "nagpuri", name: "Nagpuri", native: "नागपुरी" }
  ];

  const quickQuestions = [
    "Best places to visit in Jharkhand",
    "Local festivals and events",
    "Tribal handicrafts shopping",
    "Adventure activities",
    "Wildlife sanctuaries"
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const currentInput = inputText;
    setInputText("");

    const userMessage = {
      id: Date.now(),
      text: currentInput,
      isBot: false,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);

    const loadingMessage = {
      id: Date.now() + 1,
      text: "Thinking...",
      isBot: true,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const response = await getBotResponse(currentInput);
      const botResponse = {
        id: Date.now() + 2,
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages((prev) => prev.slice(0, -1).concat(botResponse));
    } catch (error) {
      const errorResponse = {
        id: Date.now() + 3,
        text: "Sorry, I'm having trouble responding right now. Please try again later.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages((prev) => prev.slice(0, -1).concat(errorResponse));
    }
  };

  const getBotResponse = async (input: string) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      console.warn("Gemini API key is missing in .env");
      return getFallbackResponse(input);
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful Jharkhand tourism assistant. Answer this question about Jharkhand tourism: ${input}`
            }]
          }]
        })
      });

      const data = await response.json();
      
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error("Invalid Gemini response format");
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      return getFallbackResponse(input);
    }
  };

  const getFallbackResponse = (input: string) => {
    const responses: { [key: string]: string } = {
      "best places": "Jharkhand offers stunning destinations like Netarhat, Betla National Park, Hundru Falls, and Parasnath Hill.",
      "festivals": "Experience tribal festivals like Sarhul, Karma, and Tusu Parab, with music, dance, and local cuisine.",
      "handicrafts": "Explore authentic Dokra metal craft, Sohrai paintings, bamboo products, and traditional jewelry.",
      "adventure": "Jharkhand is perfect for trekking, rock climbing, river rafting, wildlife safaris, and cave exploration.",
      "wildlife": "Visit Betla National Park, Hazaribagh Wildlife Sanctuary, and Palamau Tiger Reserve. Best time: Oct-Mar.",
      "food": "Try Litti Chokha, Dhuska, Rugra (mushroom curry), Bamboo shoot curry, and local sweets like Tilkut.",
      "culture": "Jharkhand is rich in tribal culture: Santhal, Munda, Oraon. Experience traditional dance and crafts."
    };

    for (const [key, response] of Object.entries(responses)) {
      if (input.toLowerCase().includes(key)) return response;
    }

    return "I'd be happy to help you explore Jharkhand! Ask me about destinations, festivals, culture, adventure activities, wildlife, food, or local experiences.";
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-105 z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-40">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div>
            <h3 className="font-semibold">Tourism Assistant</h3>
            <p className="text-xs opacity-90">Multilingual Support</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-xs bg-white/20 rounded px-2 py-1 text-white"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code} className="text-gray-800">
                {lang.native}
              </option>
            ))}
          </select>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                message.isBot
                  ? "bg-gray-100 text-gray-800 rounded-bl-sm"
                  : "bg-green-600 text-white rounded-br-sm"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-xs text-gray-500 text-center">Quick questions:</p>
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="w-full text-left p-2 text-xs bg-gray-50 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors border border-gray-200"
              >
                {question}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask about destinations, culture, events..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 flex items-center justify-center">
          <Globe className="h-3 w-3 mr-1" />
          Powered by AI • Supports 4 languages
        </p>
      </div>
    </div>
  );
}
