'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionCard from '@/components/QuestionCard';


export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    // Fetch quiz questions from Open Trivia Database API
    axios
      .get('https://opentdb.com/api.php?amount=5&type=multiple')
      .then((response) => setQuestions(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen"
   
    >
      {!isQuizFinished ? (
        questions.length > 0 ? (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        ) : (
          <p>Loading questions...</p>
        )
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold">Quiz Finished!</h2>
          <p className="text-xl">Your Score: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
}
