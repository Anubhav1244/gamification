import React from 'react';
import {useQuiz} from './hooks/useQuiz';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizCard } from './components/QuizCard';
import { QuizSummary } from './components/QuizSummary';

function App() {
  const { 
    questions, 
    loading, 
    error, 
    quizState, 
    selectedAnswer,
    startQuiz, 
    submitAnswer, 
    calculateSummary 
  } = useQuiz();
  console.log("QUESTONS",questions);
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (quizState.currentQuestionIndex === null && !quizState.isComplete) {
    return (
      <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
        <WelcomeScreen onStart={startQuiz} />
      </div>
    );
  }

  if (quizState.isComplete) {
    return (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-pink-300 via-purple-400  min-h-screen p-4 flex items-center justify-center">
        <QuizSummary summary={calculateSummary()} onRestart={startQuiz} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-pink-500 via-purple-700  opacity-50 min-h-screen p-4 flex items-center justify-center">
      <QuizCard
        question={questions[quizState.currentQuestionIndex ?? 0]}
        onAnswer={submitAnswer}
        questionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={questions.length}
        streak={quizState.streak}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}

export default App;