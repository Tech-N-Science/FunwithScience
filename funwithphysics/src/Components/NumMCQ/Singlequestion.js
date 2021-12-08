import React from "react";
import "./Singlequestion.css";
import { useState } from "react";
import { useLocation } from "react-router";
import Navbar from "./../Navbar/Navbar";
import { Helmet } from "react-helmet";

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
      <React.Fragment>
        <Navbar />
        <span
          style={{
            display: "flex",
            fontSize: "2em",
            justifyContent: "center",
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          {type} Question
        </span>
        <br />
        <br />
        <span className="editorial-btn"> Question</span>
        <span className="editorial-btn"> Editorial</span>
        <span className="editorial-btn"> Discussion Forum</span>
        <div className="singlequestion">
          <div className="maincontent">
            <h4>{question}</h4>
            <Helmet>
              <title>{question}</title>
              <meta name="description" content="{question}" />
              <meta
                name="keywords"
                content="questions, Physics Questions, calculator, physics, Tech n science, technscience, tech and science"
              />
            </Helmet>
            <span style={{ color: "red" }}>*Select all that are correct</span>
            <div className="answer-box">
              {answer.map((ansOptions, index) => {
                return (
                  <div className="container">
                    <button
                      key={index}
                      className="answerOption"
                      onClick={(e) => handleClick(e)}
                    >
                      {ansOptions.answerText}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="btns-box">
              <button className="submit-btn" onClick={handleSubmit}>
                <span> Submit</span>
              </button>
              <button className="next-btn" onClick={handleNext}>
                <span> Next</span>
              </button>
            </div>
          </div>
          &emsp;&emsp;
          <div className="editorial_discussionforum">
            Editorial and Discussion forum
          </div>
        </div>
      </React.Fragment>
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
      <React.Fragment>
        <Navbar />
        <Helmet>
          <title>{question}</title>
          <meta name="description" content="{question}" />
          <meta
            name="keywords"
            content="questions, Physics Questions, calculator, physics, Tech n science, technscience, tech and science"
          />
        </Helmet>
        <span
          style={{
            display: "flex",
            fontSize: "2em",
            justifyContent: "center",
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          {type} Question
        </span>
        <br />
        <br />
        <span className="editorial-btn"> Question</span>
        <span className="editorial-btn"> Editorial</span>
        <span className="editorial-btn"> Discussion Forum</span>
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
              <button className="submit-btn" onClick={handleSubmit}>
                <span> Submit</span>
              </button>
              <button className="next-btn" onClick={handleNext}>
                <span> Next</span>
              </button>
            </div>
          </div>
          &emsp;&emsp;
          <div className="editorial_discussionforum">
            Editorial and Discussion forum
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Singlequestion;
