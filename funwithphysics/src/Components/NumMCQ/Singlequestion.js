import React from "react";
import Radium, { StyleRoot } from 'radium';
import "./Singlequestion.css";
import { useState } from "react";
import { useLocation } from "react-router";
import Navbar from "./../Navbar/Navbar";
import { Helmet } from "react-helmet";
import { data } from "./data";
const Singlequestion = () => {
  const location = useLocation();
  var { type, ques, ans } = location.state;
  const [question, setquestion] = useState(ques);
  const [answer, setanswer] = useState(ans);
  const [result, setResult] = useState([]);
  const [multinext, setmultinext] = useState(1);
  const [numericalnext, setnumericalnext] = useState(1);
  const multicorrect = data.filter(
    (value) => value.type === "Multiple Correct"
  );
  const numerical = data.filter((value) => value.type === "Numerical");
  if (type === "Multiple Correct") {
    const handleNext = () => {
      setResult([]);
      document.querySelectorAll(".answerOption").forEach((e) => {
        console.log(e);
        e.style.backgroundColor = "white";
        e.style.color = "black";
      });
      console.log(".....", result);
      console.log(multinext);
      console.log(multicorrect[multinext]);
      setquestion(multicorrect[multinext].question);
      setanswer(multicorrect[multinext].answer);
      // console.log(result);
      if (multinext === multicorrect.length - 1) {
        setmultinext(0);
      } else {
        setmultinext(multinext + 1);
      }
    };
    const handleSubmit = () => {
      if (result.length === 0) {
        alert("Please select the options");
      } else {
        for (let e of result) {
          for (let i of answer) {
            if (i.answerText === e) {
              if (i.isCorrect === false) {
                alert("Wrong Answer");
                return;
              } else {
                break;
              }
            }
          }
        }
        alert("Correct Answer");
        handleNext();
      }
    };
     const style = {
      display: "flex",
      fontSize: "2rem",
      fontWeight:"470",
      justifyContent: "center",
      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      // Adding media querry..
      '@media (max-width: 350px)': {
        fontSize : "20px",
        paddingTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
    };
    function handleClick(e) {
      if (result.includes(e.target.value)) {
        const i = result.indexOf(e.target.value);
        result.splice(i, 1);
        // const r=result.filter((value)=> value !== e.target.value)
        setResult(result);
        e.target.style.backgroundColor = "white";
        console.log(result);
      } else {
        result.push(e.target.value);
        setResult(result);
        console.log(result);
        e.target.style.backgroundColor = "#5bc0de";
      }
    }

    return (
      <StyleRoot>
      <React.Fragment>
        <Navbar />
        <span style={style} >
          {type} Question
        </span>
        <br />
        <br />
        <button className="editorial-btn">Questions</button>
        <button className="editorial-btn"> Editorial</button>
        <button className="editorial-btn"> Discussion Forum</button>
        <div className="singlequestion">
          <div className="maincontent">
            <h4 className="question">{question}</h4>
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
                      value={ansOptions.answerText}
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
      </StyleRoot>
    );
  } else if (type === "Numerical") {
    const handleSubmit = () => {
      // eslint-disable-next-line
      if (
        result === answer ||
        result === answer + 0.2 ||
        result === answer - 0.2
      ) {
        alert("Correct Answer");
        handleNext();
      } else {
        alert("Wrong Answer, Please try again !!");
      }
      console.log(answer);
      console.log(typeof answer);
      console.log(typeof result);
      console.log(result);
    };

    const handleNext = () => {
      console.log(numericalnext);
      console.log(numerical[numericalnext]);
      setquestion(numerical[numericalnext].question);
      setanswer(numerical[numericalnext].answer);
      if (numericalnext === numerical.length - 1) {
        setnumericalnext(0);
      } else {
        setnumericalnext(numericalnext + 1);
      }
    };
      const style = {
      display: "flex",
      fontSize: "2rem",
      fontWeight:"470",
      justifyContent: "center",
      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      // Adding media querry..
      '@media (max-width: 350px)': {
        fontSize : "20px",
        paddingTop: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
    };
    return (
      <StyleRoot>
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
          style={style}>
          {type} Question
        </span>
        <br />
        <br />
        <span className="editorial-btn"> Question</span>
        <span className="editorial-btn"> Editorial</span>
        <span className="editorial-btn"> Discussion Forum</span>
        <div className="singlequestion">
          <div className="maincontent">
            <h4 className="question">{question}</h4>
            <div className="answer-box">
              <input
                type="number"
                placeholder="Please enter answer here.."
                onChange={(e) => setResult(Number(e.target.value))}
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
      </StyleRoot>
    );
  }
};

export default Radium(Singlequestion);
