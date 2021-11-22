import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import electricfield_data from "../electricfield_data";
import { Helmet } from "react-helmet";

function electricfield_calculator({ match }) {
  const page = electricfield_data.filter(
    (data) => data.topic === match.params.topic
  );
  const details = page[0];

  //Electric field for the charged disc
  const Disc = () => {
    const [distance, setDistance] = useState(null);
    const [density, setDensity] = useState(null);
    const [radius, setRadius] = useState(null);
    const [result, setResult] = useState(null);
    const e = 8.854187817 * Math.pow(10, -12);
    const reset =()=>{
      setDistance(null)
      setRadius(null)
      setResult(null)
      setDensity(null)
    }
    const calcResult=()=>{
      let res;
      let con=density/(2*e);
      let back= 1-(distance/Math.sqrt(distance*distance+radius*radius))
      res=con*back;
      setResult(res);
    }

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Distance (x)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setDistance(e.target.value);
              }}
              placeholder="Enter the distance in (m)"
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Surface density (σ)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setDensity(e.target.value);
              }}
              placeholder="Enter the surface density in (m)"
              value={density === null ? "" : density}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Radius (R)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setRadius(e.target.value);
              }}
              placeholder="Enter the radius in (m)"
              value={radius === null ? "" : radius}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (ε₀)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              value={e + " C²/N. m²"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
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

  //Electric field for the charged ring
  const Ring = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [radius, setRadius] = useState(null);
    const [result, setResult] = useState(null);
    const k = 8.99 * Math.pow(10, 9);
    const reset = () => {
      setCharge(null);
      setDistance(null);
      setRadius(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      let num = k * charge * distance;
      let den = Math.pow(distance * distance + radius * radius, 3 / 2);
      res = num / den;
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Charge (Q)</Form.Label>
            <Form.Control
              onChange={(e) => {
                setCharge(e.target.value);
              }}
              type="number"
              value={charge === null ? "" : charge}
              placeholder="Enter the charge density in (C)"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>distance (x)</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDistance(e.target.value);
              }}
              type="number"
              value={distance === null ? "" : distance}
              placeholder="Enter the distance from the center of the ring along x axis in (m)"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Radius (R)</Form.Label>
            <Form.Control
              onChange={(e) => {
                setRadius(e.target.value);
              }}
              type="number"
              value={radius === null ? "" : radius}
              placeholder="Enter the Radius of the ring in (m)"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (k)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              value={k + " N m²/C²"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
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

  //Electric field for Spherical shell
  const SphericalShell = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);

    const k = 8.99 * Math.pow(10, 9);
    const reset = () => {
      setCharge(null);
      setDistance(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      res = (k * charge) / (distance * distance);
      setResult(res);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Enter the Charge (q)</Form.Label>
            <Form.Control
              onChange={(e) => {
                setCharge(e.target.value);
              }}
              type="number"
              placeholder={"Enter the charge in (C)"}
              value={charge === null ? "" : charge}
              // value={choice_data().getters[0] === null ? '' : choice_data().getters[0]}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDistance(e.target.value);
              }}
              type="number"
              placeholder={"Enter the distance in (m)"}
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (k)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"Enter in the charge"}
              value={k + " N m²/C²"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
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

  //Electric field for a sphere
  const Sphere = () => {
    const [charge, setCharge] = useState(null);
    const [radius, setRadius] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);
    const k = 8.99 * Math.pow(10, 9);

    const reset = () => {
      setRadius(null);
      setCharge(null);
      setDistance(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      res = (k * charge * distance) / (radius * radius * radius);
      setResult(res);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Charge (q)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setCharge(e.target.value);
              }}
              placeholder="Enter the charge in (C)"
              value={charge === null ? "" : charge}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setDistance(e.target.value);
              }}
              placeholder="Enter the distance in (m)"
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Radius of the sphere</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setRadius(e.target.value);
              }}
              placeholder="Enter the Radius(m)"
              value={radius === null ? "" : radius}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (k)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              value={k + " N m²/C²"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
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

  //Electric field for Line charge for a finite length
  const LineCharge = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [halfLength, setHalfLength] = useState(null);
    const [result, setResult] = useState(null);

    const k = 8.99 * Math.pow(10, 9);
    const reset = () => {
      setCharge(null);
      setDistance(null);
      setHalfLength(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      res =
        (k * charge) /
        (distance * Math.sqrt(distance * distance + halfLength * halfLength));
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Charge (q)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setCharge(e.target.value);
              }}
              placeholder="Enter the charge in (C)"
              value={charge === null ? "" : charge}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Distance (x)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setDistance(e.target.value);
              }}
              placeholder="Enter the distance in (m)"
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Half length (a)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setHalfLength(e.target.value);
              }}
              placeholder="Enter the half length (m)"
              value={halfLength === null ? "" : halfLength}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (k)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"Enter in the charge"}
              value={k + " N m²/C²"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
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

  //Electric field for point Charge
  const PointCharge = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);

    const k = 8.99 * Math.pow(10, 9);
    const reset = () => {
      setCharge(null);
      setDistance(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      res = (k * charge) / (distance * distance);
      setResult(res);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Enter the Charge (Q)</Form.Label>
            <Form.Control
              onChange={(e) => {
                setCharge(e.target.value);
              }}
              type="number"
              placeholder={"Enter the charge in (C)"}
              value={charge === null ? "" : charge}
              // value={choice_data().getters[0] === null ? '' : choice_data().getters[0]}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => {
                setDistance(e.target.value);
              }}
              type="number"
              placeholder={"Enter the distance in (m)"}
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Constant (k)</Form.Label>
            <Form.Control
              readOnly
              // type="number"
              placeholder={"Enter in the charge"}
              value={k + " N m²/C²"}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
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
      case "Point Charge":
        currentCall = PointCharge();
        break;
      case "Line Charge":
        currentCall = LineCharge();
        break;
      case "Sphere":
        currentCall = Sphere();
        break;
      case "Shell":
        currentCall = SphericalShell();
        break;
      case "Ring":
        currentCall = Ring();
        break;
      case "Disc":
        currentCall = Disc();
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

export default electricfield_calculator;
