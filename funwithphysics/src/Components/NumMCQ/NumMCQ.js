import React from "react";
import "./NumMCQ.css";
import Singlecard from "./Card";
import { useState } from "react";

const NumMCQ = () => {
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

  const [searchTerm, setsearchTerm] = useState("");

  function handleClick(e) {
    setsearchTerm(e.target.value);
  }
  const type1 = document.getElementById("type1");
  const type2 = document.getElementById("type2");

  return (
    <div className="questions">
      <h1>Questions</h1>
      <div className="main-div">
        <div className="card-container">
          {data
            .filter((value) => {
              if (searchTerm === "" || (type1.checked === true && type2.checked === true)) {
                return value;
              } else if (
                value.type.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              } else if (
                value.topic.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
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
        </div>
        <div className="filter-box">
          <span>Apply filter :</span>
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
          <label class="container">
            Thermodynamics
            <input type="hidden" name="Thermodynamics" value="false" />
            <input
              type="checkbox"
              value="Thermodynamics"
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
            Electromagnetism
            <input
              type="checkbox"
              value="Electromagnetism"
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
