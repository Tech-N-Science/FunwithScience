import React, { useState } from "react";
import "./Quiz.css";
import questions from "./Questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showAns, setshowAns] = useState(false);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(-1);
  const handleQuestion = () => {
    setshowAns(false);
    setIndex(-1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleAnswerOptionClick = (isCorrect, index) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIndex(index);
    }
    setshowAns(true);
    setTimeout(handleQuestion, 1000);
  };
  return (
    <div className="quiz">
      <h1>Quiz</h1>
      <div className="quiz-section">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, ind) => (
                  <button
                    className={
                      showAns
                        ? answerOption.isCorrect
                          ? "correct"
                          : ind === index
                          ? "incorrect"
                          : null
                        : null
                    }
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect, ind)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
