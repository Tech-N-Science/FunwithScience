import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router";
import "./Calculator.css";

function Calculator() {
  let { topic } = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Continuity",
      details: [`A function f(x) is said to be continuous at a point x = a, in its domain if the following three conditions are satisfied:`
      ,
      <br />
      ,"1. f(a) exists (i.e. the value of f(a) is finite)"
      ,<br />,"2. Limx→a f(x) exists (i.e. the right-hand limit = left-hand limit, and both are finite)"
      ,<br />,"3. Limx→a f(x) = f(a)"],
      formula: "Prove LHS = RHS",
      process: [
        "The function f(x) is said to be continuous in the interval I = [x1,x2] if the three conditions mentioned above are satisfied for every point in the interval I.",
        <br />,
      ],
      example: [
        " Let a function be defined as f(x) =",<br />
        ,
        "5 – 2x for x < 1",<br />
        ,
        "3 for x = 1",<br />
        ,
        "x + 2 for x > 1",<br />
        ,        
        "Is this function continuous for all x?",<br />
        ,        
        <b>E.g. </b>,
        "Since for x < 1 and x > 1, the function f(x) is defined by straight lines (that can be drawn continuously on a graph), the function will be continuous for all x ≠ 1. Now for x = 1, let us check all the three conditions:",<br />
        ,
        "–> f(1) = 3 (given)",<br />
        ,        
        "–> Left-Hand Limit:",<br />
        ,
        "=Lim",
        <sub>x→1<sup>−</sup></sub>,
        " f(x)",<br />
        ,
        "=Lim",
        <sub>x→1<sup>−</sup></sub>,
        " (5–2x)",<br />
        ,
        "=5–2×1",<br />
        ,
        "=3",<br />
        ,
        "–> Right-Hand Limit:",<br />
        ,
        "=Lim",
        <sub>x→1<sup>+</sup></sub>,
        " f(x)",<br />
        ,
        "=Lim",
        <sub>x→1<sup>+</sup></sub>,
        " (x+2)",<br />
        ,
        "=1+2",<br />
        ,
        "=3",<br />
        ,
        "–> Lim",
        <sub>x→1<sup>-</sup></sub>,
        " f(x)=Lim",
        <sub>x→1<sup>+</sup></sub>,
        " f(x)=3=f(1)",<br />
        ,
        "Thus all the three conditions are satisfied and the function f(x) is found out to be continuous at x = 1. Therefore, f(x) is continuous for all x.",<br />
        ,
      ],
    },
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];

  //Continuity calculator
  const Continuity = () => {

    return (
      <>
      <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Algebra of Continuous Functions </h3>
                </tr>
              </section>   

              <tr>
                <th className="row-1 row-ID  "> Property Name</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Addition Rules</td>
                <td>
                  <b>f(x) + g(x) is continuous at x = a</b>
                </td>
              </tr>

              <tr>
                <td>Subtraction Rules</td>
                <td>
                  <b>f(x) – g(x) is continuous at x = a</b>
                </td>
              </tr>              
                
              <tr>
                <td>Multiplication Rules</td>
                <td>
                  <b>f(x)*g(x) is continuous at x = a</b>
                </td>
              </tr>

              <tr>
                <td>Division</td>
                <td>
                  <b>f(x)/g(x) is continuous at x = a; provided g(a) ≠0</b>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </>
    );
  };

  //adding the calculators together
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Continuity":
        currentCall = Continuity();
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
            content="Integration, calculator, Integration calculator, physics, Tech n science, technscience, tech and science"
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
          <p>{details.example}</p>
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
