import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../AtomicPhysics.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: "Bohr's model",
      formula: "1/λ=R[(1/nf²)-(1/ni²)]",
      siunit: "Wavelength: m",
      details:
        "The Rydberg formula describes the various transition energies that occur between energy levels. A photon is released when an electron goes from a higher to a lower energy level. Depending on the beginning and ultimate energy levels of the transition, the hydrogen atom can produce different wavelengths of light. It emits a photon with an energy equal to the square of the energy levels of the final (nf) and initial (ni).",
      process:
        "To find the (λ) wavelength of the emitted EM radiation we need to know the value of initial state (ni) and the final excitation state (nf) where R is the Rydberg constant, and it's value is determined by an experiment 1.097 × 10^7 / m (or m⁻¹)",
      dimension: "[L]",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Mass Energy Relation calculator
  const BohrModel = () => {
    const [initial, setInitial] = useState(null);
    const [final, setFinal] = useState(null);
    const [result, setResult] = useState(null);
    const R = 1.097 * Math.pow(10, 7);
    const reset = () => {
      setInitial(null);
      setFinal(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      let r1 = 1 / (initial * initial);
      let r2 = 1 / (final * final);
      let r3 = R * (r2 - r1);
      res = 1 / r3;

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Initial State (ni)</Form.Label>
            <Form.Control
              onChange={(e) => setInitial(e.target.value)}
              type="number"
              placeholder="Enter the initial state (ni)"
              value={initial === null ? "" : initial}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Final Excitation State (nf)</Form.Label>
            <Form.Control
              onChange={(e) => setFinal(e.target.value)}
              type="number" 
              placeholder="Enter the Final state (nf)"
              value={final === null ? "" : final}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Rydberg constant(R)</Form.Label>
            <Form.Control readOnly placeholder="1.097 × 10^7 / m (or m⁻¹)" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " m"}
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
      case "Bohr's model":
        currentCall = BohrModel();
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
