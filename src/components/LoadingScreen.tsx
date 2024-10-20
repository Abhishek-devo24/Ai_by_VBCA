import React from 'react';
import { Code } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center text-white">
      <Code size={64} className="mb-4 animate-pulse" />
      <h1 className="text-4xl font-bold mb-2">Venue_Coding_Club Chatbot</h1>
      <p className="text-xl">Loading...</p>
    </div>
  );
};

export default LoadingScreen;