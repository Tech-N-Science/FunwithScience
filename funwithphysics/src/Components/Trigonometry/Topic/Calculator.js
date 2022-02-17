import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router";
import "./Calculator.css";

function Calculator() {
  let { topic } = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Trigonometric Functions",
      details: [        
        "Trigonometric functions is used to find the value of unknown angle or side of a right angle triangle.",
        <br />,
        "There are three basic trigonometric functions such as Sine, Cosine and Tangent.",
      ],
      formula: [
        "sin θ = Perpendicular / Hypotenuse",
        <br />,
        "cos θ = Base / Hypotenuse",
        <br />,
        "tan θ = Perpendicular / Base",
        <br />,
        "cot θ = Base / Perpendicular OR 1 / tan θ",
        <br />,
        "sec θ = Hypotenuse / Base OR 1 / cos θ",
        <br />,
        "cosec θ = Hypotenuse / Perpendicular OR 1 / sin θ",
        <br />,
    ],
      process: [
        "Using the formulas we can find values of trigonometric functions ",
        <br />,
      ],
      example1: [
        " Find the value of  sin 105° degrees.",
        <br />,
        <b>Answer</b>,
        <br />,
        "sin 105° can be written as sin (60° + 45°) which is similar to sin (A + B)",
        <br />,
        "We know that, the formula for sin (A + B) = sin A × cos B + cos A × sin B",
        <br />, 
      ],
      example2: [
        "Therefore, sin 105° = sin (60° + 45°) = sin 60° × cos 45° + cos 60° × sin 45°",
        <br />,
        "= √3/2 × 1/√2 + 1/2 × 1/√2",
        <br />,
        "= √3/2√2 + 1/2√2",
        <br />,
        "= (√3+1)/2√2",
        <br />,
      ],
    },
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];

  //TrigonometricFunctions calculator
  const TrigonometricFunctions = () => {
    return (
      <>
      <h1>Trigonometric Function</h1>
      </>
    );
  };

  //adding the calculators together
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Trigonometric Functions":
        currentCall = TrigonometricFunctions();
        break;
      default:
        break;
    }
    return currentCall;
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta name="description" content="{details.details}" />
          <meta
            name="keywords"
            content="Trigonometry, calculator, Trigonometry calculator, physics, Tech n science, technscience, tech and science"
          />
        </Helmet>

        <div className="Calculator__header">
          <h1>{details.topic}</h1>
        </div>
        <div className="Calculator__details">
          <p>{details.details}</p>
        </div>
        <div className="Calculator__formula">
          <h3>Working Formula:</h3>
          <h3>{details.formula}</h3>
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>

        <div className="Calculator__example">
          <h3>Example</h3>
          <div className="row">
            <div className="col-sm-6 col-lg-6 ">
              <p>{details.example1}</p>
            </div>

            <div className="col-sm-6 col-lg-6 ">
              <p>{details.example2}</p>
            </div>
          </div>
        </div>

        <div className="Calculator__calc">
          <h3>{details.topic} Calculator</h3>
          <hr />
          {calC(details.topic)}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Calculator;
