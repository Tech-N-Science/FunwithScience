import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../classicalMechanics.css";
import MOI_list from "../moi_data";

function MOICalculator({ match }) {
  const page = MOI_list.filter((data) => data.topic === match.params.topic);
  const details = page[0];
  console.log(page);
  console.log(details.formula);

  // Ring / Hollow Cylinder / Disc / solid cylinder / solid sphere / Rod Calculator
  function CalculatorMOI() {
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [radius, setRadius] = useState(null);

    const handleClick = () => {
      console.log(details.topic);
      if (
        details.topic === "Disc" ||
        details.topic === "Solid Cylinder"
      ) {
        let res = 0.5 * mass * Math.pow(radius, 2);
        setResult(res);
      } else if (details.topic === "Solid Sphere") {
        let res = 0.4 * mass * Math.pow(radius, 2);
        setResult(res);
      } else if (details.topic === "Spherical Shell") {
        let res = (2 / 3) * mass * Math.pow(radius, 2);
        setResult(res);
      }
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Mass (in Kilogram)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter mass of the object in kilogram"
            />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Radius (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setRadius(e.target.value)}
              type="number"
              placeholder="Enter radius of the object in meter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Moment of Inertia(I)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Kg m² "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => setResult(null)} type="reset">
            Reset
          </Button>
        </Form>
      </React.Fragment>
    );
  }

  // Rod
  function CalculateRod(){
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [length, setLength] = useState(null);

    const handleClick = () => {
      let res = (1/12) * mass * Math.pow(length, 2);
      setResult(res);
    };
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Mass (in Kilogram)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter mass of the object in kilogram"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Length (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              type="number"
              placeholder="Enter length of the object in meter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Moment of Inertia(I)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Kg m² "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => setResult(null)} type="reset">
            Reset
          </Button>
        </Form>
      </React.Fragment>
    );
  }


  // Hollow Cylinder
  function CalculateHollow(){
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [inradius, setLength] = useState(null);
    const [exradius, setWidth] = useState(null);

    const handleClick = () => {
      let res = (mass * (Math.pow(inradius, 2) + Math.pow(exradius, 2))) / 2;
      setResult(res);
    };
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Mass (in Kilogram)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter mass of the object in kilogram"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> External radius (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              type="number"
              placeholder="Enter length of the object in meter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Internal Radius (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setWidth(e.target.value)}
              type="number"
              placeholder="Enter width of the object in meter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Moment of Inertia(I)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Kg m² "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => setResult(null)} type="reset">
            Reset
          </Button>
        </Form>
      </React.Fragment>
    );
  }

  // Rectangular plate calculator
  function CalculatorMOIofRectPlate() {
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [length, setLength] = useState(null);
    const [width, setWidth] = useState(null);

    const handleClick = () => {
      let res = (mass * (Math.pow(length, 2) + Math.pow(width, 2))) / 12;
      setResult(res);
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Mass (in Kilogram)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter mass of the object in kilogram"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Length (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              type="number"
              placeholder="Enter length of the object in meter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Width (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setWidth(e.target.value)}
              type="number"
              placeholder="Enter width of the object in meter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Moment of Inertia(I)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Kg m² "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => setResult(null)} type="reset">
            Reset
          </Button>
        </Form>
      </React.Fragment>
    );
  }

  // Adding Calculators together

  function calC(key) {
    let currentCall;
    switch (key) {
      case "Disc":
        currentCall = CalculatorMOI();
        break;
      case "Ring":
        currentCall = CalculatorMOI();
        break;
      case "Hollow Cylinder":
        currentCall = CalculateHollow();
        break;
      case "Solid Cylinder":
        currentCall = CalculatorMOI();
        break;
      case "Rectangular Plate":
        currentCall = CalculatorMOIofRectPlate();
        break;
      case "Solid Sphere":
        currentCall = CalculatorMOI();
        break;
      case "Rod":
        currentCall = CalculateRod();
        break;
      case "Spherical Shell":
        currentCall = CalculatorMOI();
        break;
      default:
        break;
    }
    return currentCall;
  }

  return (
    <div className="Calculator__main">
      <div className="Calculator__header">
        <h1>{details.topic}:</h1>
      </div>
      
      <div className="Calculator__details">
        <p>{details.details}</p>
      </div>
      <div className="Calculator__formula-text">
        <h3>Working Formula:</h3>
      </div>
      <div className="Calculator__formula">
        <h3>{details.formula}</h3>
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
      <div className="Calculator__siunit">
        <h3> S.I. Unit : {details.siunit}</h3>
        <p></p>
      </div>
      <div className="Calculator__dimension">
        <h3> Dimension : {details.dimension}</h3>
        <p></p>
      </div>
    </div>
  );
}

export default MOICalculator;
