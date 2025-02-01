import { useState, useEffect } from 'react';


const mockQuizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    points: 10
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    points: 10
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    points: 10
  }
];

export const useQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: null,
    score: 0,
    answers: [],
    isComplete: false,
    streak: 0,
    timePerQuestion: [],
  });
  const [startTime, setStartTime] = useState(0);
  const apiKey="PHSNcWXtDcQhCOx5bgm6wbPtMA6nAkMEE33RRfym"
  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10`);
      if (!response.ok) throw new Error("Failed to fetch quiz data");
      const data = await response.json();
      const formattedQuestions = data.map((q) => {
        const options = Object.entries(q.answers)
          .filter(([key, value]) => value !== null)
          .map(([key, value]) => value);

        const correctAnswerIndex = Object.entries(q.correct_answers)
          .filter(([key, value]) => value === "true")
          .map(([key, value]) => key.replace("_correct", ""))
          .map((key) => Object.keys(q.answers).indexOf(key))[0];

        return {
          id: q.id,
          question: q.question,
          options,
          correctAnswer: correctAnswerIndex,
          points: 10,
        };
      });
      setQuestions(formattedQuestions);
    } catch (err) {
      console.log("Error fetching quiz data:", err);
    } finally {
      setLoading(false);
    }
  };

  const startQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isComplete: false,
      streak: 0,
      timePerQuestion: [],
    });
    setSelectedAnswer(null);
    setStartTime(Date.now());
  };

  const submitAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    const currentQuestion = questions[quizState.currentQuestionIndex ?? 0];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const timeSpent = (Date.now() - startTime) / 1000;

    // Add a delay to show the answer feedback
    setTimeout(() => {
      setQuizState((prev) => ({
        ...prev,
        score: isCorrect ? prev.score + currentQuestion.points : prev.score,
        streak: isCorrect ? prev.streak + 1 : 0,
        answers: [...prev.answers, answerIndex],
        timePerQuestion: [...prev.timePerQuestion, timeSpent],
        currentQuestionIndex: (prev.currentQuestionIndex ?? 0) + 1,
        isComplete: (prev.currentQuestionIndex ?? 0) === questions.length - 1,
      }));
      setSelectedAnswer(null);
      setStartTime(Date.now());
    }, 1000); // Show feedback for 1 second
  };

  const calculateSummary = () => {
    const correctAnswers = quizState.answers.reduce(
      (count, answer, index) => (answer === questions[index].correctAnswer ? count + 1 : count),
      0
    );

    return {
      totalScore: quizState.score,
      correctAnswers,
      totalQuestions: questions.length,
      averageTime: quizState.timePerQuestion.reduce((a, b) => a + b, 0) / questions.length,
      longestStreak: quizState.streak,
      accuracy: (correctAnswers / questions.length) * 100,
    };
  };

  return {
    questions,
    loading,
    error,
    quizState,
    selectedAnswer,
    startQuiz,
    submitAnswer,
    calculateSummary,
  };
};