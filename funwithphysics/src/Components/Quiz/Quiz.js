import React, { useState } from "react";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      questionText: "The alpha radiation is not used in radiotherapy because:",
      answerOptions: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
        { answerText: "It is toxic to human tissues", isCorrect: false },
        { answerText: "It is not cost effectiven", isCorrect: false },
      ],
    },
    {
      questionText:
        "You are sitting inside an open vehicle moving with uniform speed. When you throw a stone vertically upwards, the stone will fall__:",
      answerOptions: [
        { answerText: "Ahead of you", isCorrect: false },
        { answerText: "Behind you", isCorrect: false },
        { answerText: "Over you", isCorrect: true },
        { answerText: "Either ahead or behind of you", isCorrect: false },
      ],
    },
    {
      questionText:
        "On heating a pure silicon circular disc with a circular hole at the centre, the diameter of the hole: ",
      answerOptions: [
        { answerText: "will expand", isCorrect: false },
        { answerText: "will contract", isCorrect: true },
        { answerText: "will remain constant", isCorrect: false },
        { answerText: "may expand or contract", isCorrect: false },
      ],
    },
    {
      questionText: "Who gave the Theory of Relativity? ",
      answerOptions: [
        { answerText: "Isaac Newton", isCorrect: false },
        { answerText: "Archimedes", isCorrect: false },
        { answerText: "Albert Einstein", isCorrect: true },
        { answerText: "Galileo Galilei", isCorrect: false },
      ],
    },
  ];  

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
