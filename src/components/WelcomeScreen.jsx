import React from 'react';
import { Brain, Trophy, Timer, Zap } from 'lucide-react';

export const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 animate-pulse"></div>
      <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center border border-white/20 relative z-10">
        <div className="mb-8">
          <Brain className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to the Quiz Challenge!</h1>
          <p className="text-gray-500">Test your knowledge and earn points while having fun!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Trophy className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Earn Points</h3>
            <p className="text-sm text-gray-500">Score points for each correct answer</p>
          </div>

          <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Timer className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Beat the Clock</h3>
            <p className="text-sm text-gray-500">Track your speed and improve</p>
          </div>

          <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Build Streaks</h3>
            <p className="text-sm text-gray-500">Keep the momentum going</p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};
