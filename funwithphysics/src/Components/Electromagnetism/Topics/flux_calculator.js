import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import { Helmet } from "react-helmet";

const flux_calculator = ({ match }) => {
  const flux_data = [
    {
      topic: "Electric Flux",
      formula: "ΦE=E.S.cosθ",
      siunit: "volt metres (V m)",
      dimension: "[L³ M T⁻³ I⁻¹]",
      process:
        "To find the electric flux, we need to know the electric field (E), area of the surface (S) and angle (θ) between the electric field lines and the normal to S.",
      details: `Electric Flux is given by the equation "ΦE=E.S.cosθ", where ΦE is the electric flux, E is the electric field, S is the area of the surface & θ is the angle between the electric field lines and the normal (perpendicular) to S. `,
    },
    {
      topic: "Magnetic Flux",
      formula: "ΦB=B.A.cosθ",
      siunit: "volt–seconds",
      dimension: "[M L² T⁻² I⁻¹]",
      process:
        "To find the magnetic flux we need to know the magnetic field (B), area (A)and the angle (θ).",
      details: `Magnetic Flux is given by the equation "ΦB=B.A.cosθ", where ΦB is the magnetic flux, B is the magnetic field, A is area and θ is the angle between the perpendicular vector to the area and magnetic field.`,
    },
  ];
  const page = flux_data.filter((data) => data.topic === match.params.topic);
  const details = page[0];
  //Magnetic Flux Calculator
  const MagneticFluxCalculator = () => {
    const [magneticfield, setMagneticfield] = useState(null);
    const [angle, setAngle] = useState(null);
    const [area, setArea] = useState(null);
    const [result, setResult] = useState(null);

    const reset=()=>{
      setMagneticfield(null)
      setAngle(null)
      setArea(null)
      setResult(null)
    }
    const calcResult=()=>{
      let res;
      res=magneticfield*area*Math.cos((angle*Math.PI)/180)
      setResult(res);
    }
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Electric Field(E)</Form.Label>
            <Form.Control
              onChange={(e) => setMagneticfield(e.target.value)}
              type="number"
              placeholder={"Enter in Tesla"}
              value={magneticfield === null ? "" : magneticfield}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Area of surface(S)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder={"Enter in (m2)"}
              value={area === null ? "" : area}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Angle (θ)</Form.Label>
            <Form.Control
              onChange={(e) => setAngle(e.target.value)}
              type="number"
              placeholder={"Enter in degree"}
              value={angle === null ? "" : angle}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " volt–seconds"}
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

  //electric Flux Calculator
  const ElectricFluxCalculator = () => {
    const [electricfield, setElectricfield] = useState(null);
    const [angle, setAngle] = useState(null);
    const [area, setArea] = useState(null);
    const [result, setResult] = useState(null);

    const reset = () => {
      setElectricfield(null);
      setAngle(null);
      setArea(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      res = electricfield * area * Math.cos((angle * Math.PI) / 180);
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Electric Field(E)</Form.Label>
            <Form.Control
              onChange={(e) => setElectricfield(e.target.value)}
              type="number"
              placeholder={"Enter in (V/m)"}
              value={electricfield === null ? "" : electricfield}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Area of surface(S)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder={"Enter in (m2)"}
              value={area === null ? "" : area}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Angle (θ)</Form.Label>
            <Form.Control
              onChange={(e) => setAngle(e.target.value)}
              type="number"
              placeholder={"Enter in degree"}
              value={angle === null ? "" : angle}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + "(V m)"}
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
      case "Electric Flux":
        currentCall = ElectricFluxCalculator();
        break;
      case "Magnetic Flux":
        currentCall = MagneticFluxCalculator();
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
};

export default flux_calculator;
