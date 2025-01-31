import React from "react";
import { Trophy, Clock, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";


export const QuizSummary = ({ summary, onRestart }) => {
  
  const isHighScore = summary.accuracy > 75; // Show celebration if score is high

  return (
    <div className="relative">
      {isHighScore && (
        <>
          {/* Confetti Effect - Positioned near the left 🎉 */}
          <Confetti
            width={400} // Covers a wider area
            height={700} // Increases vertical reach
            numberOfPieces={50} // More confetti
            recycle={true} // One-time burst
            gravity={0.05} // Moves upward
            initialVelocityX={3} // Pushes toward the right
            initialVelocityY={-8} // Moves upward faster
            wind={0} // Helps push rightward
            className="absolute top-10 left-4"
          />

          

          {/* Firecracker Animation - Left Side */}
          <motion.div
            initial={{ x: "100%", y: "100%", opacity: 0, scale: 0.5 }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1.2, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-[-30%] left-[-10%] text-4xl"
          >
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="absolute w-[30vw] top-[50px]   bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg text-xl font-bold"
          >
            🎉 Congratulations! Amazing Score! 🎉
          </motion.div>
          </motion.div>


          
        </>
      )}

      {/* Quiz Summary Card */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: [-100, 110, -15, 10, 0], opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto  bg-purple-300 rounded-xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Quiz Complete! 🎉</h2>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-6 h-6 text-blue-900" />
              <h3 className="font-semibold text-gray-800">Score</h3>
            </div>
            <p className="text-2xl font-bold text-blue-600">{summary.totalScore} points</p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-green-800" />
              <h3 className="font-semibold text-gray-800">Accuracy</h3>
            </div>
            <p className="text-2xl font-bold text-green-400">{summary.accuracy.toFixed(1)}%</p>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-purple-500" />
              <h3 className="font-semibold text-gray-800">Avg. Time</h3>
            </div>
            <p className="text-2xl font-bold text-purple-600">{summary.averageTime.toFixed(1)}s</p>
          </div>

          <div className="bg-orange-100 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-orange-500" />
              <h3 className="font-semibold text-gray-800">Best Streak</h3>
            </div>
            <p className="text-2xl font-bold text-orange-600">{summary.longestStreak}</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            You got <span className="font-bold text-green-600">{summary.correctAnswers}</span> out of{" "}
            <span className="font-bold text-blue-600">{summary.totalQuestions}</span> questions correct!
          </p>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold
                   hover:bg-purple-700 transition-colors duration-200"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
};
