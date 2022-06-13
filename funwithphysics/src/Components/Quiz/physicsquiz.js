import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { Helmet } from "react-helmet";

const PhysicsQuiz = () => {
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
      questionText: "dimension of plank's constant h is",
      answerOptions: [
        { answerText: "[ML^2T^-1]", isCorrect: false },
        { answerText: "[ML^3T^-1]", isCorrect: false },
        { answerText: "[ML^2T^-1]", isCorrect: true },
        { answerText: "[M^0L^2T^-1]", isCorrect: false },
      ],
    },
    {
      questionText:
        "The internal energy of an ideal gas decreases by the same amount as the work done by the system. ",
      answerOptions: [
        { answerText: "The process must be adiabatic", isCorrect: true },
        { answerText: "The process must be isobaric", isCorrect: false },
        { answerText: "The temperature must increase", isCorrect: false },
        { answerText: "The process must be isothermal", isCorrect: false },
      ],
    },
    {
      questionText: "If a body is charged by rubbing it, its weight ",
      answerOptions: [
        { answerText: "Remains precisely constant", isCorrect: false },
        { answerText: "Increase slightly", isCorrect: false },
        { answerText: "Decrease slightly", isCorrect: false },
        {
          answerText: "May increase slightly or decrease slightly",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "A hot liquid is kept in a big room. The logarithm of the numerical value of the temperature difference between the liquid and the room is plotted against time. The plot will be very nearly ",
      answerOptions: [
        { answerText: "A straight line", isCorrect: true },
        { answerText: "A circular arc", isCorrect: false },
        { answerText: "A parabola", isCorrect: false },
        { answerText: "An ellipse", isCorrect: false },
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
      questionText:
        "A capacitor of capacitance C is charged to a potential difference V. The flux of the electric field through a closed surface enclosing the capacitor is ",
      answerOptions: [
        { answerText: "CV/ ε0", isCorrect: false },
        { answerText: "2CV/ ε0", isCorrect: false },
        { answerText: "0", isCorrect: true },
        { answerText: "CV/ 2ε0", isCorrect: false },
      ],
    },
    {
      questionText: "A moving charge produces ",
      answerOptions: [
        { answerText: "Only electric field", isCorrect: false },
        { answerText: "Only magnetic field", isCorrect: false },
        { answerText: "Both electric and magnetic field", isCorrect: true },
        { answerText: "Neither electric and magnetic field", isCorrect: false },
      ],
    },
    {
      questionText: "X-rays in 1895 was discovered by ",
      answerOptions: [
        { answerText: "Einstein", isCorrect: false },
        { answerText: "Röntgen", isCorrect: true },
        { answerText: "Faraday", isCorrect: false },
        { answerText: "Archimedes", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is a pentavalent impuity added while forming an extrinsic semiconductor ? ",
      answerOptions: [
        { answerText: "Boron", isCorrect: false },
        { answerText: "Arsenic", isCorrect: true },
        { answerText: "Indium", isCorrect: false },
        { answerText: "Gallium", isCorrect: false },
      ],
    },
    {
      questionText:
        "In a radioactive decay neither the atomic number nor the mass number changes. Which of the following particles is emitted in the decay? ",
      answerOptions: [
        { answerText: "Photon", isCorrect: true },
        { answerText: "Electron", isCorrect: false },
        { answerText: "Proton", isCorrect: false },
        { answerText: "Neutron", isCorrect: false },
      ],
    },
    {
      questionText: "The optical phenomena, twinkling of stars, is due to ",
      answerOptions: [
        { answerText: "Atmospheric reflection", isCorrect: false },
        { answerText: "Total reflection", isCorrect: false },
        { answerText: "Atmospheric refraction", isCorrect: true },
        { answerText: "Total refraction", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following quantities is zero on an average for the molecules of an ideal gas in equilibrium? ",
      answerOptions: [
        { answerText: "Kinetic Energy", isCorrect: false },
        { answerText: "Momentum", isCorrect: true },
        { answerText: "Density", isCorrect: false },
        { answerText: "Speed", isCorrect: false },
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
  var [selected, setSelected] = useState(false);
  const [timeOut, setTimeOut] = useState(false);

  console.log(timeOut); //Added only for removing the warning this can be removed later when this variable is geeting used somewhere

  const handleQuestion = () => {
    setshowAns(false);
    setSelected(false);
    setIndex(-1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelected(true);
    if (selected) setScore(score);
    else if (isCorrect && !selected) {
      setScore(score + 1);
    } else setIndex(index);

    setshowAns(true);

    setTimeout(handleQuestion, 1500);
  };

  function Timer({ setTimeOut, questionNumber }) {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
      if (timer === 0) {
        handleQuestion();
        return setTimeout(true);
      }
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [timer, setTimeOut]);

    useEffect(() => {
      setTimer(10);
    }, [questionNumber]);
    return timer;
  }

  return (
    <>
      <Helmet>
        <title>PhysicsQuiz</title>
        <meta name="description" content="Physics Quiz" />
        <meta
          name="keywords"
          content="Algebra, calculator, Algebra calculator, physics, Tech n science, technscience, tech and science,quiz,physicsquiz, physics quiz"
        />
      </Helmet>
      <div className="quiz">
        <h1>Quiz</h1>
        {showScore ? (
          <div className="quiz-section">
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          </div>
        ) : (
          <div className="cardWithTimer">
            <div className="timerFrame">
              <div className="timer">
                <Timer
                  setTimeOut={setTimeOut}
                  questionNumber={currentQuestion}
                />
              </div>
            </div>
            <div className="quiz-section">
              <div className="responsive">
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>
                    <span id="total">/{questions.length}</span>
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
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PhysicsQuiz;
