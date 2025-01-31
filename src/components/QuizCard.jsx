import React from 'react';
import { Timer, CheckCircle2, XCircle } from 'lucide-react';

export const QuizCard = ({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
  streak,
  selectedAnswer,
}) => {
  if (!question) {
    return (
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 mx-auto border border-white/20">
        <div className="text-center">
          <p className="text-gray-300">Loading question...</p>
        </div>
      </div>
    );
  }

  const getOptionClassName = (index) => {
    const baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex justify-between items-center bg-white/10 backdrop-blur-md border-white/20";
    
    if (selectedAnswer === null) {
      return `${baseClasses} hover:border-blue-500 hover:bg-blue-500/10`;
    }

    if (index === question.correctAnswer) {
      return `${baseClasses} border-green-500 bg-green-500/10 text-green-400`;
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return `${baseClasses} border-red-500 bg-red-500/10 text-red-400`;
    }

    return `${baseClasses} opacity-50`;
  };

  return (
    <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 mx-auto border border-white/20 relative">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm font-medium text-gray-900">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="flex items-center gap-2">
          <Timer className="w-5 h-5 text-blue-800" />
          <div className="flex items-center gap-1 bg-orange-500/10 px-3 py-1 rounded-full">
            <span className="text-orange-400 font-semibold">Streak: {streak}</span>
            {streak > 0 && <span className="text-orange-700">🔥</span>}
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-white mb-6">{question.question}</h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selectedAnswer === null && onAnswer(index)}
            disabled={selectedAnswer !== null}
            className={getOptionClassName(index)}
          >
            <span>{option}</span>
            {selectedAnswer !== null && (
              <span className="opacity-100">
                {index === question.correctAnswer ? (
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-700" />
                )}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 text-sm text-white flex justify-between items-center">
        <span>Points: {question.points}</span>
        <span>Select your answer carefully!</span>
      </div>
    </div>
  );
};
