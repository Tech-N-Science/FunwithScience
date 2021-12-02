import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import { Helmet } from "react-helmet";

function Magneticfield_calculator({ match }) {
  //magneticfield_data
  const magneticfield_data = [
    {
      topic: "Infinite Sheet",
      details:
        "Consider an infinite vertical sheet carrying current out of the page. The sheet has a uniform current per unit length J₀. The magnetic field (B) produced due to current sheet due to a charge density(J₀) can be calculated using Ampere's Law. So the magnetic field produced is μ₀J₀/2.",
      formula: "B= μ₀*J₀/2",
      siunit: "Tesla",
      dimension: "MT⁻²I⁻¹ ",
      process:
        "To find the magnetic field(B) for a infinite sheet  we need to know the current density (J₀) and then applying Ampere's Law we can determine the magnetic field. ",
    },
  ];

  const page = magneticfield_data.filter(
    (data) => data.topic === match.params.topic
  );
  const details = page[0];

  //magnetic field for infinite sheet
  const Infinite_sheet = () => {
    const [currentdensity, setCurrentDensity] = useState(null);
    const [result, setResult] = useState(null);
    const μ = 4 * 3.14 * Math.pow(10, -7);
    const reset = () => {
      setResult(null);
      setCurrentDensity(null);
    };
    const calcResult = () => {
      let res;
      res = (μ * currentdensity) / 2;
      setResult(res);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label> Current Density (J₀)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setCurrentDensity(e.target.value);
              }}
              placeholder="Enter the current density "
              value={currentdensity === null ? "" : currentdensity}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (μ₀)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"4π*10⁻⁷ Henry/m"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} T`}
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

  const calC = (key) => {
    let currentCall;
    switch (key) {
      case "Infinite Sheet":
        currentCall = Infinite_sheet();
        break;
      default:
        break;
    }
    return currentCall;
  };
  return (
    <>
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta
            name="description"
            content={details.details}
            data-react-helmet="true"
          />
          <meta
            name="keywords"
            content="Electromagnetism, calculator, physics, Tech n science, technscience, tech and science"
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
        <div className="Calculator__calc">
          <h3>{details.topic} Calculator</h3>
          <hr />
          {calC(details.topic)}
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
      </div>
    </>
  );
}

export default Magneticfield_calculator;
