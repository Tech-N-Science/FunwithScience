import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
import {constant} from '../../Solution/allConstants';
import {SI} from '../../Solution/allSIUnits';
import Modal from "react-bootstrap/Modal";

function electricfield_calculator({ match }) {
  //electricfield_data
  const electricfield_data = [
    {
      topic: "Point Charge",
      details:
        "The electric field (E) produced at a point(P) due to a point charge(Q) held at a distance (r) from the point(P) is kQ/r².",
      formula: "E=kQ/r²",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      process:
        "To find the electric field for a point due to a point charge we need to know the charge of magnitude (Q), distance (r) between the point and point charge. ",
    },
    {
      topic: "Line Charge",
      formula: "E=kq/x*√(x²+a²)",
      siunit: "newtons per coulomb (N/C)",
      details:
        "Electric field produced (E) by a line charge (q) of finite length at a distance (x) from the center is given by the equation E=kq/x*√(x²+a²) [where (a) is half length of line charge]",
      dimension: "[M L I⁻¹ T⁻³]",
      process:
        "To find the electric field (E) by a line charge of finite length we need to know the charge (q), distance(x) and the half length (a).",
    },
    {
      topic: "Sphere",
      formula: "E=kqr/R³",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³]",
      details: [
        "There are three condition for Sphere:",
        <br />,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
        <br />,
        "2) If r = R, in in this case electric field produced is given by E = kq/R²",
        <br />,
        "3) If r < R, in in this case electric field produced is kqr/R³",
        <br />,

        "where 'r' is the distance between the center of sphere and the point at which electric field is produced and 'R' is the radius of sphere. ",
      ],
      process:
        "To find the Electric field (E) for the sphere, we need to know the charge (q) by the sphere, radius (R) of the sphere and the distance (r) where as k is the constant",
    },
    {
      topic: "Ring",
      formula: "E=kQx/(x²+R²)⁽³/²⁾",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³]",
      details:
        "The electric field produced at a point P due to a ring charge is E=kQx/(x²+R²)⁽³/²⁾, Where Q=total charge, R is the Radius of the ring, x is the distance from the center of the ring and P where as k is constant. In case total charge is not known then Q=2πλR (where λ is charge density and R is radius of ring).",
      process:
        "By putting the value of radius (R), charge (Q) and the distance (x), we can easily find the electric fied produced by the charged ring.",
    },
    {
      topic: "Disc",
      formula: "E=σ/2ε₀[1-x/√(x²+R²)]",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      details: `Electric field produced by the charged disc at a point P is given by the equation "E=σ/2ε₀[1-x²/√(x²+R²)]" where σ is surface charge density, x is distance, R is the radius where as ε₀ is constant and it's value is 8.854187817 × 10⁻¹² C²/N. m² `,
      process:
        "To find the electric field for the disc we need to know the Radius (R) of the disc, and the distance (x) and the surface charge density(σ), where as the (ε₀) is constant and its value is 8.854187817 × 10⁻¹² C²/N. m² ",
    },
    {
      topic: "Shell",
      details: [
        "There are three condition for Shell:",
        <br />,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
        <br />,
        "2) If r = R, in this case electric field produced given by the formula E = kq/R²",
        <br />,
        "3) If r < R, in this case electric field produced is zero",
        <br />,

        "where 'r' is the distance between the center of shell and the point at which electric field is produced and 'R' is the radius of shell. ",
      ],
      formula: "E=kQ/r²",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      process:
        "To find the electric field produced by a spherical shell we need to know the charge of magnitude (Q), distance (r) away from the spherical shell and by putting these values in formula we can easily find the electric field.",
    },
  ];

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
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const e = 8.854187817 * Math.pow(10, -12);
    const reset = () => {
      setDistance(null);
      setRadius(null);
      setResult(null);
      setDensity(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(distance!==null && density!==null && radius!==null){
      let res;
      let con = density / (2 * e);
      let back =
        1 - distance / Math.sqrt(distance * distance + radius * radius);
      res = con * back;
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Distance:distance,
      Surface_charge_density:density,
      Radius:radius,
    }

    const insertValues = `${density}${SI["Surface_charge_density"]} / [2 * ${constant["Epsilon"]} * ((1 - ${distance}${SI["Distance"]}) / √(${distance}${SI["Distance"]})² + (${radius}${SI["Radius"]})²)]`;
    const constants = ["Epsilon"];


    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        {/* <Navbar/> */}
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
            <Form.Label>Surface charge density (σ)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => {
                setDensity(e.target.value);
              }}
              placeholder="Enter the surface charge density in (Cm⁻²)"
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
              placeholder={"8.854 * 10⁻¹² C²/N. m²"}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="σ/2ε₀[1-x/√(x²+R²)]"
              toFind="Electric Field by charged Disc"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Electric field for the charged ring
  const Ring = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [radius, setRadius] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const k = 8.99 * Math.pow(10, 9);
    const reset = () => {
      setCharge(null);
      setDistance(null);
      setRadius(null);
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(distance!==null && charge!==null && radius!==null){
      let res;
      let num = k * charge * distance;
      let den = Math.pow(distance * distance + radius * radius, 3 / 2);
      res = num / den;
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Distance:distance,
      Charge:charge,
      Radius:radius,
    }

    const insertValues = `(${constant["coulomb_constant"]} * ${charge}${SI["Charge"]} * ${distance}${SI["Distance"]})  / ((${distance}${SI["Distance"]})² + (${radius}${SI["Radius"]})²)³∕²]`;
    const constants = ["coulomb_constant"];

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
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
              placeholder={"8.99 * 10⁹ N m²/C²"}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="kQx/(x²+R²)⁽³/²⁾"
              toFind="Electric Field by charged Ring"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Electric field for Spherical shell
  const SphericalShell = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const k = 8.99 * Math.pow(10, 9);
    const reset = () => {
      setCharge(null);
      setDistance(null);
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(distance!==null && charge!==null){
      let res;
      res = (k * charge) / (distance * distance);
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Distance:distance,
      Charge:charge,
    }

    const insertValues = `(${constant["coulomb_constant"]} * ${charge}${SI["Charge"]}) / (${distance}${SI["Distance"]})²`;
    const constants = ["coulomb_constant"];


    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
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
              placeholder={"8.99 * 10⁹ N m²/C²"}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="kQ/r²"
              toFind="Electric Field by charged Shell"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Electric field for a sphere
  const Sphere = () => {
    const [charge, setCharge] = useState(null);
    const [radius, setRadius] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const k = 8.99 * Math.pow(10, 9);

    const reset = () => {
      setRadius(null);
      setCharge(null);
      setDistance(null);
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(distance!==null && charge!==null && radius!==null){
      let res;
      res = (k * charge * distance) / (radius * radius * radius);
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Distance:distance,
      Charge:charge,
      Radius:radius,
    }

    const insertValues = `(${constant["coulomb_constant"]} * ${charge}${SI["Charge"]}) * ${distance}${SI["Distance"]}) / (${radius}${SI["Radius"]})³`;
    const constants = ["coulomb_constant"];

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
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
              placeholder={"8.99 * 10⁹ N m²/C²"}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="kqr/R³"
              toFind="Electric Field by charged Sphere"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Electric field for Line charge for a finite length
  const LineCharge = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [halfLength, setHalfLength] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const k = 8.99 * Math.pow(10, 9);
    const reset = () => {
      setCharge(null);
      setDistance(null);
      setHalfLength(null);
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(distance!==null && charge!==null && halfLength!==null){
      let res;
      res =
        (k * charge) /
        (distance * Math.sqrt(distance * distance + halfLength * halfLength));
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Distance:distance,
      Charge:charge,
      Half_Length:halfLength,
    }

    const insertValues = `(${constant["coulomb_constant"]} * ${charge}${SI["Charge"]}) / (${distance}${SI["Distance"]} * √((${distance}${SI["Distance"]})² + (${halfLength}${SI["Half_Length"]})²)`;
    const constants = ["coulomb_constant"];

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
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
              placeholder={"8.99 * 10⁹ N m²/C²"}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="kq/x*√(x²+a²)"
              toFind="Electric field by line charge of finite length"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Electric field for point Charge
  const PointCharge = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const k = 8.99 * Math.pow(10, 9);
    const reset = () => {
      setCharge(null);
      setDistance(null);
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(distance!==null && charge!==null){
      let res;
      res = (k * charge) / (distance * distance);
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const insertValues = `(${constant["coulomb_constant"]} * ${charge}${SI["Charge"]}) / (${distance}${SI["Distance"]})²`;
    const constants = ["coulomb_constant"];

    const givenValues = {
      Distance:distance,
      Charge:charge,
    }

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
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
              placeholder={"8.99 * 10⁹ N m²/C²"}
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="kQ/r²"
              toFind="Electric Field by point charge"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : `${result} N/C`}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
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
    <React.Fragment>
      <Navbar />
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
    </React.Fragment>
  );
}

export default electricfield_calculator;
