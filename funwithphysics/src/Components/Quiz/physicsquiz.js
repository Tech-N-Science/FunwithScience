import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";


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
  var [selected,setSelected]=useState(false);
  const [timeOut, setTimeOut] = useState(false);

  console.log(timeOut); //Added only for removing the warning this can be removed later when this variable is geeting used somewhere


  const handleQuestion = () => {
    setshowAns(false);
    setSelected(false);
    setIndex(-1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length ) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); 
    }
  };

  const handleAnswerOptionClick = (isCorrect, index) => {
   
    setSelected(true);
    if(selected)
    setScore(score);
    else if (isCorrect && !selected) {
      setScore(score + 1);
    }
    else 
    setIndex(index);
    
    setshowAns(true);

    setTimeout(handleQuestion,1500);
  };

 function Timer({ setTimeOut, questionNumber }) {

   const [timer, setTimer]= useState(10);

   useEffect(() => {
     
     if (timer === 0) 
    { handleQuestion();
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
 let navigate = useNavigate();



  return (
    <div className="quiz">
      <h1>Quiz</h1>
        {showScore ? (
          
          <div className="quiz-section">
          <div className="score-section">
            <p>You scored {score} out of {questions.length}</p>
            <button onClick={()=>{navigate("/physicsquiz")}} className="score-to-home">Play Again</button>
            
          </div>
          
          </div>
          
        ) : (
          <div className="cardWithTimer">
            <div className="timerFrame">
             <div className="timer">
              <Timer setTimeOut={setTimeOut} questionNumber={currentQuestion} />
             </div>
            </div>
      <div className="quiz-section">
          <div className="responsive">
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span><span id = "total">/{questions.length}</span>
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
  );
};

export default PhysicsQuiz;
