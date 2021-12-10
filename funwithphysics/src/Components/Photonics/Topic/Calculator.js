import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Photonics.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: "Brewster's Angle",
      formula: "θ = tan⁻¹(n₂/n₁)",
      siunit: "degree",
      process: `"θ = tan⁻¹(n₂/n₁)" This equation is known as Brewster's law, where 'θ' is a brewster's angle, 'n₁' is the refractive index of the first media through which light propagates (the "incidental medium"), and 'n₂' is the index of the other medium, and we can simply get the angle by plugging these numbers into the equation.`,
      details: `The reflected light will be linearly polarised if light strikes an interface at a 90ᴼ angle between the reflected and refracted rays. The polarisation direction (the direction in which the electric field vectors point) is parallel to the interface plane.

               The Brewster angle, θ., is a unique incidence angle that results in a 90ᴼ angle between the reflected and refracted rays. A quick calculation reveals that tan(θ) = n₂/n₁.`,
      dimension: "M⁰ L⁰ T⁰ ",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //adding Brewster's Angle calcular
  const BrewsterAngle = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
    };
    const calcResult = () => {
      let res;
      let r1 = n2 / n1;
      let r2 = Math.atan(r1);
      res = (r2 * 180) / Math.PI;
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>refractive index of the initial medium (n₁)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of n1"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>the index of the other medium (n₂)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of n2"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " degree"}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={calcResult}>
          Calculate
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="dark" onClick={() => reset()} type="reset">
          Reset
        </Button>
      </>
    );
  };

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Brewster's Angle":
        currentCall = BrewsterAngle();
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
            content="Atomic, Physics, calculator, Atomic physics calculator, Tech n science, technscience, tech and science"
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
          <h3>S.I. Unit : {details.siunit}</h3>
          <h3>Dimension : {details.dimension}</h3>
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
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
