import React, { useRef } from "react";
import "./NumMCQ.css";
import Singlecard from "./Card";
import { useState } from "react";

const NumMCQ = () => {
  const cardref=useRef()
  const filterref=useRef()
  // questions_data
  const data = [
    {
      id: 1,
      type: "Multiple Correct",
      question: "ABCD",
      topic: "",
      answer: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
      ],
    },
    {
      id: 2,
      type: "Multiple Correct",
      question: "EFCD",
      topic: "",
      answer: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
      ],
    },
    {
      id: 3,
      type: "Multiple Correct",
      question: "ABCD",
      topic: "",
      answer: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
      ],
    },
    {
      id: 4,
      type: "Multiple Correct",
      question: "ABCD",
      topic: "",
      answer: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
      ],
    },
    {
      id: 5,
      type: "Numerical",
      question:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      topic: "",
      answer: 5,
    },
    {
      id: 6,
      type: "Numerical",
      question: "ABCD",
      topic: "",
      answer: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
      ],
    },
    {
      id: 7,
      type: "Numerical",
      question: "ABCD",
      topic: "",
      answer: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
      ],
    },
    {
      id: 8,
      type: "Numerical",
      question: "ABCD",
      topic: "",
      answer: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
      ],
    },
    {
      id: 9,
      type: "Numerical",
      question: "ABCD",
      topic: "",
      answer: [
        { answerText: "It is an ionizing radiation", isCorrect: false },
        { answerText: "It is unable to penetrate human skin", isCorrect: true },
      ],
    },
  ];
  const [searchTerm, setsearchTerm] = useState([]);

  function handleClick(e) {
    if(e.target.checked === true)
    { if(!searchTerm.includes(e.target.value.toLowerCase()))
      setsearchTerm([...searchTerm,e.target.value.toLowerCase()]);
    }
    else{
      setsearchTerm(searchTerm.filter(value => value !== e.target.value.toLowerCase()));
      // setsearchTerm(searchTerm.filter((value)=>value !== e.target.value))
    }
  }
  function handlefilterclk(e)
  {
    e.target.style.display="none";
    cardref.current.style.display="none"
    filterref.current.style.display="block"
  }
  console.log(searchTerm);
  return (
    <div className="questions">
      <h1>Questions</h1>
      <div className="main-div">
        <div className="card-container" ref={cardref}>
          {data
            .filter((value) => {
              if (searchTerm.length === 0) {
                return value;
              } 
              else if (searchTerm.includes(value.type.toLowerCase())){
                return value;
              } else if (searchTerm.includes(value.topic.toLowerCase())){
                return value;
              }
              return false;
            })
            .map((card) => {
              return (
                <div className="single-card">
                  <Singlecard
                    type={card.type}
                    question={card.question}
                    topic={card.topic}
                    answer={card.answer}
                    key={card.id}
                    id={card.id}
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              );
            })}
            <button className="filter-btn" onClick={(e)=>handlefilterclk(e)}><i class="fas fa-filter"></i></button>
        </div>
        <div className="filter-box" ref={filterref}>
          <div>
          <span>Apply filter :</span>
          <span className="cancel"><i class="fas fa-times"></i></span>
          </div>
          <h5 className="heading">Type</h5>
          <label class="container">
            Numerical
            <input type="hidden" name="Numerical" value="false" />
            <input id="type1"
              type="checkbox"
              value="Numerical"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Multiple Correct
            <input type="hidden" name="Multiple Correct" value="false" />
            <input id="type2"
              type="checkbox"
              value="Multiple Correct"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <h5 className="heading">Difficulty</h5>
          <label class="container">
            Easy
            <input type="hidden" name="Easy" value="false" />
            <input
              type="checkbox"
              value="Easy"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Medium
            <input type="hidden" name="Medium" value="false" />
            <input
              type="checkbox"
              value="Medium"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Hard
            <input type="hidden" name="Hard" value="false" />
            <input
              type="checkbox"
              value="Hard"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <h5 className="heading">Topic</h5>
          <label class="container">
            Thermo-dynamics
            <input type="hidden" name="Thermodynamics" value="false" />
            <input
              type="checkbox"
              value="Thermo-dynamics"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Classical Mechanics
            <input type="hidden" name="Classical Mechanics" value="false" />
            <input
              type="checkbox"
              value="Classical Mechanics"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Relativity
            <input
              type="checkbox"
              value="Relativity"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Electro-magnetism
            <input
              type="checkbox"
              value="Electro-magnetism"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Atomic Physics
            <input
              type="checkbox"
              value="Atomic Physics"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Nuclear Physics
            <input
              type="checkbox"
              value="Nuclear Physics"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Photonics
            <input
              type="checkbox"
              value="Photonics"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Statistical Mechanics
            <input
              type="checkbox"
              value="Statistical Mechanics"
              onClick={(e) => handleClick(e)}
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NumMCQ;
