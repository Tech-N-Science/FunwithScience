import React from "react";
import "./Singlequestion.css";
import { useState, useEffect } from "react";
import Navbar from "./../Navbar/Navbar";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { data } from "./data";

const Singlequestion = () => {
  var { id, type } = useParams();
  id = parseInt(id);
  console.log(id);

  const [mcqAll, setMcqAll] = useState(data.filter((val) => val.type === type));
  console.log(mcqAll);

  // var type = match.params.type;

  const quest = mcqAll[id].question;
  const answ = mcqAll[id].answer;
  const [question, setquestion] = useState(quest);
  const [answer, setanswer] = useState(answ);

  console.log(question);
  const [imag, setimag] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    setquestion(mcqAll[id].question);
    setanswer(mcqAll[id].answer);
    setimag(mcqAll[id].image);
  });

  useEffect(() => {
    setResult([]);
  }, []);

  if (type === "mcq") {
    const handleOptions = () => {
      setResult([]);
      document.querySelectorAll(".answerOption").forEach((e) => {
        e.style.backgroundColor = "white";
        e.style.color = "black";
        console.log(e);
      });
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
        handleOptions();
      }
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
      <React.Fragment>
        <Navbar />
        <span
          className="question-type"
          style={{
            display: "flex",
            fontSize: "2em",
            justifyContent: "center",
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          Multiple Correct Question
        </span>
        <br />
        <br />
        <span className="editorial-btn"> Question</span>
        <span className="editorial-btn"> Editorial</span>
        <span className="editorial-btn"> Discussion Forum</span>
        <div className="singlequestion">
          <div className="maincontent">
            <h4 className="question">Q. {question}</h4>
            {imag && <img src={imag} alt="" className="quesimg" />}
            <br />
            <br />
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
                  <div className="container" key={index}>
                    <button
                      key={index}
                      className="answerOption"
                      onClick={(e) => handleClick(e)}
                      value={ansOptions.answerText}
                    >
                      <span className="numbering">
                        {ansOptions.answerText.slice(0, 1)}
                      </span>
                      {ansOptions.answerText.slice(2)}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="btns-box">
              <button className="prev-btn" onClick={handleOptions}>
                <Link
                  to={`/questions/mcq/${
                    id - 1 >= 0 ? id - 1 : mcqAll.length - 1
                  }`}
                >
                  {" "}
                  Previous
                </Link>
              </button>
              <button className="submit-btn" onClick={handleSubmit}>
                <span> Submit</span>
              </button>
              <button className="next-btn" onClick={handleOptions}>
                <Link
                  to={`/questions/mcq/${id + 1 < mcqAll.length ? id + 1 : 0}`}
                >
                  {" "}
                  Next
                </Link>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (type === "Numerical") {
    const handleSubmit = () => {
      // eslint-disable-next-line
      if (answer - 0.2 < result && result <= answer + 0.2) {
        alert("Correct Answer");
        handleOptions();
      } else {
        alert("Wrong Answer, Please try again !!");
      }
    };

    const handleOptions = () => {
      setResult([]);
    };

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
          className="question-type"
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
            <h4 className="question">Q. {question}</h4>
            {imag && <img src={imag} alt="" className="quesimg" />}
            <div className="answer-box numerical">
              <input
                type="number"
                placeholder="Please enter answer here.."
                value={result}
                onChange={(e) => setResult(Number(e.target.value))}
              />
            </div>
            <div className="btns-box">
              <button className="prev-btn" onClick={handleOptions}>
                <Link
                  to={`/questions/Numerical/${
                    id - 1 >= 0 ? id - 1 : mcqAll.length - 1
                  }`}
                >
                  Previous
                </Link>
              </button>
              <button className="submit-btn" onClick={handleSubmit}>
                <span> Submit</span>
              </button>
              <button className="next-btn" onClick={handleOptions}>
                <Link
                  to={`/questions/Numerical/${
                    id + 1 < mcqAll.length ? id + 1 : 0
                  }`}
                >
                  Next
                </Link>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Singlequestion;
