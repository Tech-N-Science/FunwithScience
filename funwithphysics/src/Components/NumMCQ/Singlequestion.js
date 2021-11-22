import React from "react";
import "./Singlequestion.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useLocation } from "react-router";

const Singlequestion = () => {
  const location = useLocation();
  const { type, question, answer } = location.state;
  const [result, setResult] = useState("");
  const [background, setBackground] = useState("");

  if (type === "Multiple Correct") {
    const handleSubmit = () => {};

    const handleNext = () => {};

    function handleClick(e) {
      setResult(e.target.value);
      console.log(e.target.value);
      setBackground("green");
    }

    return (
      <>
      <span style={{ display: "flex", fontSize:"2em", justifyContent : "center", paddingTop:"2rem", paddingLeft:"2rem", paddingRight:"2rem"}}>{type} Question</span>
      <div className="singlequestion">
        <div className="maincontent">
          <h4>{question}</h4>
          <span style={{ color: "red" }}>*Select all that are correct</span>
          <div className="answer-box">
            {answer.map((ansOptions, index) => {
              return (
                <button
                  style={{ backgroundColor: background }}
                  key={index}
                  className="answerOption"
                  onClick={(e) => handleClick(e)}
                >
                  {ansOptions.answerText}
                </button>
              );
            })}
          </div>
          <div className="btns-box">
            <Button
              className="submit-btn"
              variant="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button className="next-btn" variant="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
        &emsp;&emsp;
        <div className="editorial_discussionforum">
          Editorial and Discussion forum
        </div>
      </div>
      </>
    );
  } else if (type === "Numerical") {
    const handleSubmit = () => {
      // eslint-disable-next-line
      if (result == answer) {
        alert("Correct Answer");
      } else {
        alert("Wrong Answer, Please try again !!");
      }
      console.log(answer);
      console.log(result);
    };

    const handleNext = () => {};

    return (
      <>
      <span style={{ display: "flex", fontSize:"2em", justifyContent : "center", paddingTop:"2rem", paddingLeft:"2rem", paddingRight:"2rem"}}>{type} Question</span>
      <div className="singlequestion">
        <div className="maincontent">
          <h4>{question}</h4>
          <div className="answer-box">
            <input
              type="number"
              placeholder="Please enter answer here.."
              onChange={(e) => setResult(e.target.value)}
            />
          </div>
          <div className="btns-box">
            <Button
              className="submit-btn"
              variant="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button className="next-btn" variant="primary" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
        &emsp;&emsp;
        <div className="editorial_discussionforum">
          Editorial and Discussion forum
        </div>
      </div>
      </>
    );
  }
};

export default Singlequestion;
