import React, { useState } from "react";
import '../../PysicsStyles/physicscalculator.css'
import { Form, Button,Modal } from "react-bootstrap";

import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
import {SI} from '../../Solution/allSIUnits'
import { useParams } from "react-router-dom";

function MOICalculator() {
  let {topic} = useParams();
  // MOI_list
  const MOI_list = [
    {
      topic: "Disc",
      details: `The moment of inertia of a disc is calculated about an axis which is perpendicular to it and through its center. We assume that the disc is planar.`,
      formula: "M.O.I = 1/2 × Mass × Radius² = 1/2 × M × R²",
      process:
        "Here the moment of inertia of a solid disc is given by the formula 1/2MR². Here 'M' denotes the mass of disc and 'R' is the radius of disc or the distance from center to circumference.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Ring",
      details: `The moment of inertia of a circular ring is calculated about an axis perpendicular to its plane passing through its centre.`,
      formula: "M.O.I = Mass × Radius² =  M × R²",
      process:
        "Here the moment of inertia of a ring is given by the formula MR². Here 'M' denotes the mass of disc and 'R' is the radius of disc or the distance from center to circumference.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Hollow Cylinder",
      details: `Moment of inertia of a hollow cylinder is calculated using the axis passing through the centre of the cylinder with an internal radius r1 and external radius r2 and mass M. If the hollow cylinder has a thin wall then the formula will be same as that of a ring.`,
      formula: [
        "I = 1/2 x Mass ×(External Radius² + Internal radius²)",
        <br />,
        " = 1/2 x M × (r2² + r1²)",
      ],
      process:
        "Here the moment of inertia of a hollow cylinder is given by the formula 1/2M(r2² + r1²). Here 'M' denotes the mass of disc and 'r1' and 'r2' are  internal and external radius respectively. If the hollow cylinder has a thin wall then the formula will be same as that of a ring i.e, MR² because the axis goes through the centre of the cylinder",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Solid Cylinder",
      details: `Moment of Inertia of a solid cylinder is calculated about its center with mass 'M' and Radius 'R'.`,
      formula: "M.O.I = 1/2 × Mass × Radius² = 1/2 × M × R²",
      process:
        "Here the moment of inertia of solid cylinder is given by the formula 1/2MR². Here 'M' is the mass of the solid cylinder and 'R' is radius of cylinder.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Rectangular Plate",
      details: `Moment of inertia of a rectangular plate is calculated using the axis which passes through its length(x-axis) and another axis which passes through its breadth(y-axis).`,
      formula: "I=1/12×Mass×(Length²+Width²)=1/12 × m × (a²+b²)",
      process:
        "Here the moment of inertia of rectangular plate is given by the formula 1/12m(a²+b²). Where 'm' is the mass of plate, 'a' is the length and 'b' is breadth of the plate. ",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Solid Sphere",
      details: `The moment of inertia of a solid sphere is calculated about its central axis. The moment of inertia can also be calculated about its axis on the surface whose formula is (7/5)MR². `,
      formula: "M.O.I = 2/5 × Mass × Radius² = 2/5 × M × R²",
      process:
        "Here the moment of inertia of solid sphere is given by the formula 2/5MR². Where 'M' is the mass of plateand 'R' is the radius of solid sphere.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Rod",
      details: `The moment of inertia of the rod can be calculated about the axis passing through its center. Moment of inertia can aslo be calculated about the axis passing through its end whose formula is (1/3)ML². `,
      formula: "M.O.I = 1/12 × Mass × Length² = 1/12 × M × L²",
      process:
        "Here the moment of inertia of rod is given by the formula 1/12ML². Where 'M' is the mass of plate and 'L' is length of the rod.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Spherical Shell",
      details: `The moment of inertia of the Spherical Shell can be calculated about the axis passing through its center.`,
      formula: "M.O.I = 2/3 × Mass × Radius² = 2/3 × M × R²",
      process:
        "Here the moment of inertia of spherical shell is given by the formula 2/3MR². Where 'M' is the mass of shell and 'R' is radius of the shell.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
  ];

  const page = MOI_list.filter((data) => data.topic === topic);
  const details = page[0];
  console.log(page);
  console.log(details.formula);

  // Ring / Hollow Cylinder / Disc / solid cylinder / solid sphere / Rod Calculator
  function CalculatorMOI() {
    const [result, setResult] = useState("");
    const [mass, setMass] = useState("");
    const [radius, setRadius] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

  const givenValues = {
    mass: mass,
    R: radius,
  };
  const insertValuesDisc=`0.5 x ${mass}${SI["mass"]} x (${radius}${SI["R"]})²`
  const insertValuesRing=`${mass}${SI["mass"]} x (${radius}${SI["R"]})²`
  const insertValuesSolidSphere=`0.4 x${mass}${SI["mass"]} x (${radius}${SI["R"]})²`
  const insertValuesSphericalShell=`(2/3) x ${mass}${SI["mass"]} x (${radius}${SI["R"]})²`

  const resetForm=()=>{
    setMass("");
    setRadius("");
    setShowSolution(false);
    setResult("");
  }

    const handleClick = () => {
      console.log(details.topic);
     if(mass!=="" && radius!==""){
      if (details.topic === "Disc" || details.topic === "Solid Cylinder") {
        let res = 0.5 * mass * Math.pow(radius, 2);
        setResult(res);
      } else if (details.topic === "Ring") {
        let res = mass * Math.pow(radius, 2);
        setResult(res);
      } else if (details.topic === "Solid Sphere") {
        let res = 0.4 * mass * Math.pow(radius, 2);
        setResult(res);
      } else if (details.topic === "Spherical Shell") {
        let res = (2 / 3) * mass * Math.pow(radius, 2);
        setResult(res);
      }
      setShowSolution(true)
    }
    else{
      setShowModal(true);
    }
    };

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        {/* <Navbar/> */}
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Mass (in Kilogram)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              value={mass}
              placeholder="Enter mass of the object in kilogram"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Radius (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setRadius(e.target.value)}
              value={radius}
              type="number"
              placeholder="Enter radius of the object in meter"
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula={details.topic === "Disc" || details.topic === "Solid Cylinder"?"1/2 × Mass × Radius² = 1/2 × M × R²" :details.topic === "Ring"? "Mass × Radius² =  M × R²":details.topic === "Solid Sphere"? "2/5 × Mass × Radius² = 2/5 × M × R²":" 2/3 × Mass × Radius² = 2/3 × M × R²"  }
                toFind="M.O.I"
                insertValues={details.topic === "Disc" || details.topic === "Solid Cylinder"? insertValuesDisc:details.topic === "Ring"? insertValuesRing:details.topic === "Solid Sphere"? insertValuesSolidSphere:  insertValuesSphericalShell}
                result={result}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Moment of Inertia(I)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " Kg m² "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  // Rod
  function CalculateRod() {
    const [result, setResult] = useState("");
    const [mass, setMass] = useState("");
    const [length, setLength] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      mass: mass,
      length: length,
    };

    const insertValues = `(1 / 12) * ${mass}${SI["mass"]} * (${length}${SI["length"]})²`;

    const handleClick = () => {
      if(mass!=="" && length!=="")
      {
        let res = (1 / 12) * mass * Math.pow(length, 2);
      setShowSolution(true)
      setResult(res);}
      else{
        setShowModal(true);
      }
    };

    const resetForm=()=>{
      setMass("");
      setLength("");
      setShowSolution(false);
      setResult("");
    }
    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Mass (in Kilogram)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              value={mass}
              type="number"
              placeholder="Enter mass of the object in kilogram"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Length (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              value={length}
              type="number"
              placeholder="Enter length of the object in meter"
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="1/12 × Mass × Length² = 1/12 × M × L²"
                toFind="M.O.I"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Moment of Inertia(I)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " Kg m² "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  // Hollow Cylinder
  function CalculateHollow() {
    const [result, setResult] = useState("");
    const [mass, setMass] = useState("");
    const [inradius, setLength] = useState("");
    const [exradius, setWidth] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const givenValues = {
      mass: mass,
      "r2": inradius,
      "r1": exradius,

    };

    const insertValues = `(1 / 2) * ${mass}${SI["mass"]} * ((${exradius}${SI["r2"]})² + (${inradius}${SI["r2"]})² )`;

    const handleClick = () => {
      if(mass!=="" && inradius!=="" && exradius!=="" )
      {
        let res = (mass * (Math.pow(inradius, 2) + Math.pow(exradius, 2))) / 2;

      setShowSolution(true)
      setResult(res);}
      else{
        setShowModal(true);
      }
    };

    const resetForm=()=>{
      setMass("");
      setLength("");
      setWidth("")
      setShowSolution(false);
      setResult("");
    }
  
    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Mass (in Kilogram)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              value={mass}
              type="number"
              placeholder="Enter mass of the object in kilogram"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> External radius (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              type="number"
              value={inradius}

              placeholder="Enter length of the object in meter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Internal Radius (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setWidth(e.target.value)}
              type="number"
              value={exradius}
              placeholder="Enter width of the object in meter"
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="1/2 x Mass ×(External Radius² + Internal radius²)"
                toFind="M.O.I"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Moment of Inertia(I)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " Kg m² "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  // Rectangular plate calculator
  function CalculatorMOIofRectPlate() {
    const [result, setResult] = useState("");
    const [mass, setMass] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const givenValues = {
      mass: mass,
      length: length,
      width: width,

    };

    const insertValues = `(1 / 12) * ${mass}${SI["mass"]} * ((${length}${SI["r2"]})² + (${width}${SI["r2"]})² )`;

    const handleClick = () => {
      if(mass!=="" && length!=="" && width!=="")
      {
        let res = (mass * (Math.pow(length, 2) + Math.pow(width, 2))) / 12;
      setShowSolution(true)
      setResult(res);}
      else{
        setShowModal(true);
      }
    };

    const resetForm=()=>{
      setMass("");
      setWidth("");
      setLength("");
      setShowSolution(false);
      setResult("");
    }
  

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Mass (in Kilogram)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              value={mass}
              placeholder="Enter mass of the object in kilogram"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Length (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              type="number"
              value={length}
              placeholder="Enter length of the object in meter"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Width (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setWidth(e.target.value)}
              type="number"
              value={width}
              placeholder="Enter width of the object in meter"
            />
          </Form.Group> 
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="1/12×Mass×(Length²+Width²)=1/12 × m × (a²+b²)"
                toFind="M.O.I"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Moment of Inertia(I)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " Kg m² "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
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
            content="Classical Mechanics, calculator, physics, Tech n science, technscience, tech and science"
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

export default MOICalculator;
