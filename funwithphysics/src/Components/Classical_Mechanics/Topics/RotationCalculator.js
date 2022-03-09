import React, { useState } from "react";
import '../../PysicsStyles/physicscalculator.css'
import { Form, Button, Modal } from "react-bootstrap";

import Solution from "../../Solution/Solution";
import { Helmet } from "react-helmet";
import { SI } from "../../Solution/allSIUnits";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";

function RotationCalculator() {
  let { topic } = useParams();
  // rotation_list
  const rotation_list = [
    {
      topic: "Torque",
      details: `Torque is necessary in rotational motion to create an object's angular acceleration. The amount of torque necessary to cause an angular acceleration is determined by the distribution of the object's mass. The distribution is described by the moment of inertia. It may be calculated by integrating the masses of all elements of the object and their distances from the centre of rotation, but the moments of inertia for typical forms can also be obtained.`,
      formula: "τ=Iα",
      process:
        "The torque on a given axis is the product of the moment of inertia and the angular acceleration. The units are Newton-meters (N∙m). Here 'τ' denotes torque, 'I' denotes moment of inertia and 'α' denotes angular acceleration.",
      siunit: " Newton-Meter",
      dimension: "ML²/T²",
    },
    {
      topic: "Work",
      details: `The total work done on a rigid body is the sum of the torques integrated over the angle of rotation (angular displacement). 
            dW = ( ∑ᵢτᵢ ) dθ`,
      formula: "W = τ x θ",
      process:
        "The rotational work done on a rigid body is dot product of torque and angle of rotation. Here 'W' denotes rotational work done by rigid body, 'τ' represents the torque and  'θ' represents angle of rotation(angular dispalcement).",
      siunit: "joule",
      dimension: "M L²/T²",
    },
    {
      topic: "Power",
      details: `The torque multiplied by the angular velocity is the power given to a system revolving about a fixed axis. 
            As we know Power is work done upon time, so angular work done τθ is derivated with respect to time.`,
      formula: "P = τ x ω",
      process:
        "The rotational power is dot product of torque and angular velocity. Here 'P' denotes rotational power of rigid body, 'τ' represents the torque and  'ω' represents angular velocity.",
      siunit: "watt",
      dimension: "M L² T⁻³",
    },
    {
      topic: "Kinetic Energy",
      details: [
        `Things that roll without sliding have some translational kinetic energy and the rest rotational kinetic energy. The ratio is determined by the rolling object's moment of inertia.`,
        <br />,
      ],
      formula: ["K.E. = 0.5 x I x ω²"],
      process: [
        "The Kinetic energy of a rolling body is defined as 1/2Iω²",
        "where I is the moment of inertia around the axis of rotation and ω is the angular velocity",
        <br />,
        "The kinetic energy of a rigid body rotating around a fixed axis is calculated by adding the kinetic energy of each particle in the rigid body.",
      ],
      siunit: "joule",
      dimension: "M L² T⁻²",
    },
  ];

  const page = rotation_list.filter((data) => data.topic === topic);
  const details = page[0];

  function Calculator_torque() {
    const [result, setResult] = useState("");
    const [inertia, setForce] = useState("");
    const [acceleration, setDisp] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      α: acceleration,
      I: inertia,
    };

    const insertValues = `${inertia}${SI["I"]} * ${acceleration}${SI["acceleration"]}`;

    const resetForm = () => {
      setForce("");
      setDisp("");
      setShowSolution(false);
      setResult("");
    };

    const handleClick = () => {
      if (inertia !== "" && acceleration !== "") {
        let res = inertia * acceleration;
        setResult(res);
        setShowSolution(true);
      } else {
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
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Inertia (in kg m²)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              type="number"
              placeholder="Enter Moment Of Inertia of the object"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Angular acceleration (in m/s²)</Form.Label>
            <Form.Control
              onChange={(e) => setDisp(e.target.value)}
              type="number"
              placeholder="Enter Angular Acceleration possessed by the object"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="Iα"
                toFind="τ"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Torque (τ)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " joules "}
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

  //work
  function CalculatorWork() {
    const [result, setResult] = useState("");
    const [torque, setForce] = useState("");
    const [angle, setDisp] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      τ: torque,
      angle: angle,
    };

    const insertValues = `${torque}${SI["τ"]} * ${angle}${SI["angle"]}`;

    const resetForm = () => {
      setForce("");
      setDisp("");
      setShowSolution(false);
      setResult("");
    };

    const handleClick = () => {
      if (torque !== "" && angle !== "") {
        let res = torque * angle;
        setResult(res);
        setShowSolution(true);
      } else {
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
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Torque (in Newton-metre)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              type="number"
              placeholder="Enter torque generated due to applied force"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Angular Displacement (in degrees)</Form.Label>
            <Form.Control
              onChange={(e) => setDisp(e.target.value)}
              type="number"
              placeholder="Enter angular displacement about axis of rotation"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="τ x θ"
                toFind="W"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Work Done (W)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " Joules "}
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

  // Power Calculator
  function CalculatorPower() {
    const [result, setResult] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [workdone, setworkdone] = useState("");
    const [time, settime] = useState("");

    const givenValues = {
      τ: workdone,
      ω: time,
    };

    const insertValues = `${workdone}${SI["τ"]} * ${time}${SI["ω"]}`;

    const resetForm = () => {
      setworkdone("");
      settime("");
      setShowSolution(false);
      setResult("");
    };
    const handleClick = () => {
      if (workdone !== "" && time !== "") {
        let res = workdone * time;
        setResult(res);
        setShowSolution(true);
      } else {
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
        <Form>
          <Form.Group className="mb-3" controlId="workdone">
            <Form.Label>Torque (in Newton-metre)</Form.Label>
            <Form.Control
              onChange={(e) => setworkdone(e.target.value)}
              type="number"
              placeholder="Enter work done in joules"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="time">
            <Form.Label> Angular velocity</Form.Label>
            <Form.Control
              onChange={(e) => settime(e.target.value)}
              type="number"
              placeholder="Enter time taken in seconds"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="τ x ω"
                toFind="P"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="power">
            <Form.Label>Power (P)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " W "}
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

  // kinetic energy Calculator
  function CalculatorKinetic() {
    const [result, setResult] = useState("");
    const [moinertia, setworkdone] = useState("");
    const [anvelocity, settime] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      I: moinertia,
      ω: anvelocity,
    };

    const insertValues = `0.5 x ${moinertia}${SI["I"]} * (${anvelocity}${SI["ω"]})²`;

    const resetForm = () => {
      setworkdone("");
      settime("");
      setShowSolution(false);
      setResult("");
    };

    const handleClick = () => {
      if (moinertia !== "" && anvelocity !== "") {
        let res = 0.5 * moinertia * Math.pow(anvelocity, 2);
        setResult(res);
        setShowSolution(true);
      } else {
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
        <Form>
          <Form.Group className="mb-3" controlId="workdone">
            <Form.Label>Moment of inertia (in kgm²)</Form.Label>
            <Form.Control
              onChange={(e) => setworkdone(e.target.value)}
              type="number"
              placeholder="Enter work done in joules"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="time">
            <Form.Label> Angular velocity</Form.Label>
            <Form.Control
              onChange={(e) => settime(e.target.value)}
              type="number"
              placeholder="Enter time taken in seconds"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="0.5 x I x ω²"
                toFind="K.E."
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="power">
            <Form.Label>Kinetic Energy (KE)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " W "}
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

  function calC(key) {
    let currentCall;
    switch (key) {
      case "Work":
        currentCall = CalculatorWork();
        break;
      case "Power":
        currentCall = CalculatorPower();
        break;
      case "Kinetic Energy":
        currentCall = CalculatorKinetic();
        break;
      case "Torque":
        currentCall = Calculator_torque();
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

export default RotationCalculator;
