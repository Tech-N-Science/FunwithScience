import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button, Col, Row,Modal } from "react-bootstrap";
import "../classicalMechanics.css";
import { Helmet } from "react-helmet";
import Solution from "../../Solution/Solution";
import { SI } from "../../Solution/allSIUnits";
import Navbar from "../../Navbar/Navbar";

function WPECalculator({ match }) {
  // WPE_list
  const WPE_list = [
    {
      topic: "Work",
      details: `Work is said to be done when a body or object moves with the application of external force. We can define work as an activity involving a movement and force in the direction of the force. For example, a force of 20 newtons (N) pushing an object 3 meters in the same direction of the force will do 60 joules (J) of work.`,
      formula: "Work = Force x Displacement = F x d",
      process:
        "When we kick a football, we are exerting an external force called F and due to this force (kick), the ball moves to a certain distance. This disposition of ball from position A to B is known as displacement (d). This work is said to be done and can be calculated as W = F × d ",
      siunit: "Joule",
      dimension: "ML²/T²",
    },
    {
      topic: "Power",
      details: `Power is a physical concept that has several different meanings, depending on the context and the information that is available. We can define power as the rate of doing work. It is the amount of energy consumed per unit time.`,
      formula: "P = W/t",
      process:
        "As discussed power is the rate of doing work. Therefore, it can be calculated by dividing work done by time. ",
      siunit: "watt",
      dimension: "M L² T⁻³",
    },
    {
      topic: "Energy",
      details: [
        `In simple words, Energy is known as the capacity of doing work, it could exist in various forms, like heat energy, kinetic energy, thermal energy, electrical energy, gravitational energy, electromagnetic energy etc.`,
        <br />,
        "All these forms of Energy, are categories as Kinetic energy and Potential Energy.",
      ],
      formula: [
        "K.E = 1/2 x m x v²",
        <span>&nbsp;&nbsp;</span>,
        "P.E = m x g x h",
      ],
      process: [
        "To summerize in a single line,",
        <br />,
        <b>Energy = Power x Time</b>,
        <br />,
        "here, K.E is kinetic energy, P.E is potential energy, 'm' is mass, 'v' is velocity and 'h' is height",
      ],
      siunit: "joule",
      dimension: "M L² T⁻²",
    },
  ];

  const page = WPE_list.filter((data) => data.topic === match.params.topic);
  const details = page[0];
  console.log(page);
  console.log(details.formula);

  // Work Calculator
  function CalculatorWork() {
    const [result, setResult] = useState("");
    const [force, setForce] = useState("");
    const [displacement, setDisp] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      force: force,
      displacement: displacement,
    };

    const insertValues = `${force}${SI["force"]} * ${displacement}${SI["displacement"]}`;

    const handleClick = () => {
      if (force !== "" && displacement !== "") {
        let res = force * displacement;
        setResult(res);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
    };

    const resetForm = () => {
      setForce("");
      setDisp("");
      setShowSolution(false);
      setResult("");
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
            <Form.Label> Force (in Newtons)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              value={force}
              type="number"
              placeholder="Enter Force applied to an object in newtons"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="displacement">
            <Form.Label> Displacement (in m)</Form.Label>
            <Form.Control
              onChange={(e) => setDisp(e.target.value)}
              type="number"
              value={displacement}
              placeholder="Enter displacement in metre"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="force*displacement"
                toFind="work"
                insertValues={insertValues}
                result={result}
                // constants={constants}
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
    const [workdone, setworkdone] = useState("");
    const [time, settime] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      work: workdone,
      time: time,
    };

    const insertValues = `${workdone} ${SI["work"]} / ${time} ${SI["time"]}`;

    const handleClick = () => {
      if (workdone !== "" && time !== "") {
        let res = workdone / time;
        setResult(res);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
    };

    const resetForm = () => {
      setworkdone("");
      settime("");
      setShowSolution(false);
      setResult("");
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
            <Form.Label> Work Done (in Joules)</Form.Label>
            <Form.Control
              onChange={(e) => setworkdone(e.target.value)}
              type="number"
              value={workdone}
              placeholder="Enter work done in joules"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="time">
            <Form.Label> Time Taken (in sec)</Form.Label>
            <Form.Control
              onChange={(e) => settime(e.target.value)}
              value={time}
              type="number"
              placeholder="Enter time taken in seconds"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="work Done / time"
                toFind="power"
                insertValues={insertValues}
                result={result}
                // constants={constants}
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
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>

          <Button variant="dark" onClick={resetForm} type="reset">
            Reset
          </Button>
        </div>
      </React.Fragment>
    );
  }

  //Energy Calculator
  function CalculatorEnergy() {
    const [kinetic, setKinetic] = useState("");
    const [potential, setPotential] = useState("");
    const [massKE, setMassKE] = useState("");
    const [massPE, setMassPE] = useState("");
    const [vel, setVel] = useState("");
    const [height, setHeight] = useState("");
    const [g, setG] = useState(9.8);
    const [showModal, setShowModal] = useState(false);
    const [showSolutionPE, setShowSolutionPE] = useState(false);
    const [showSolutionKE, setShowSolutionKE] = useState(false);

    const givenValuesKE = {
      mass: massKE,
      velocity: vel,
    };
    const insertValuesKE = `1/2 x ${massKE}${SI["mass"]} x (${vel}${SI["velocity"]})²`;
    const givenValuesPE = {
      mass: massPE,
      height: height,
    };
    const insertValuesPE = `${massPE}${SI["mass"]} x ${g}${SI["g"]}x ${height}${SI["height"]}`;

    function handleSubmit() {
      if (massPE !== "" && height !== "") {
        if (g === "") setG(9.8);
        let pe = massPE * g * height;
        setPotential(pe);
        setShowSolutionPE(true);
      } // Calculating Potential Energy
      if (massKE !== "" && vel !== "") {
        let ke = massKE * Math.pow(vel, 2) * 0.5;
        setKinetic(ke);
        setShowSolutionKE(true);
      } // Calculating Kinetic Energy}
    }
    function handleReset() {
      setKinetic("");
      setPotential("");
      setMassKE("");
      setMassPE("");
      setVel("");
      setShowSolutionKE(false);
      setShowSolutionPE(false);
      setHeight("");
      setG(9.8);
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
        <Form className="energy-form">
          {/* Title */}
          <Row>
            <Col>
              <center>
                <h4>Kinetic Energy</h4>
              </center>
            </Col>
            <Col>
              <center>
                <h4>Potential Energy</h4>
              </center>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="massKE">
                <Form.Label>Mass(m)</Form.Label>
                <Form.Control
                  className="customInp"
                  id="customInp"
                  onChange={(e) => setMassKE(e.target.value)}
                  type="number"
                  value={massKE}
                  placeholder="Enter the mass"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="massPE">
                <Form.Label>Mass(m)</Form.Label>
                <Form.Control
                  className="customInp"
                  id="customInp"
                  onChange={(e) => setMassPE(e.target.value)}
                  value={massPE}
                  type="number"
                  placeholder="Enter the mass"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="velocity">
                <Form.Label>Velocity(v)</Form.Label>
                <Form.Control
                  className="customInp"
                  id="customInp"
                  onChange={(e) => setVel(e.target.value)}
                  value={vel}
                  type="number"
                  placeholder="Enter the velocity"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="height">
                <Form.Label>Height(h)</Form.Label>
                <Form.Control
                  className="customInp"
                  id="customInp"
                  onChange={(e) => setHeight(e.target.value)}
                  value={height}
                  type="number"
                  placeholder="Enter the height"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Form.Group controlId="g">
                <Form.Label>Gravitational Acceleration(g)</Form.Label>
                <Form.Control
                  className="customInp"
                  id="customInp"
                  onChange={(e) => setG(e.target.value)}
                  value={g}
                  type="number"
                  placeholder={g === 9.8 ? "9.8 m/s^2" : " "}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
             {showSolutionKE ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValuesKE}
                formula="1/2 x m x v^2"
                toFind="kinetic Energy"
                insertValues={insertValuesKE}
                result={kinetic}
                // constants={constants}
              />
            </Form.Group>
          ) : null}
            </Col>
            <Col>
             {showSolutionPE ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValuesPE}
                formula="mgh"
                toFind="potential Energy"
                insertValues={insertValuesPE}
                result={potential}
                // constants={constants}
              />
            </Form.Group>
          ) : null}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="kinetic">
                <Form.Label>Kinetic Energy(KE)</Form.Label>
                <Form.Control
                  className="customInp"
                  id="customInp"
                  readOnly
                  onChange={(e) => setKinetic(e.target.value)}
                  type="number"
                  placeholder={kinetic === "" ? " " : `${kinetic} Joule`}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="potential">
                <Form.Label>Potential Energy(PE)</Form.Label>
                <Form.Control
                  className="customInp"
                  id="customInp"
                  readOnly
                  onChange={(e) => setPotential(e.target.value)}
                  type="number"
                  placeholder={potential === "" ? " " :  `${potential} Joule`}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="button-custom-grp">
            <Button variant="primary" onClick={handleSubmit}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={handleReset} type="reset">
              Reset
            </Button>
          </Row>
        </Form>
      </React.Fragment>
    );
  }

  // Adding Calculators together

  function calC(key) {
    let currentCall;
    switch (key) {
      case "Work":
        currentCall = CalculatorWork();
        break;
      case "Power":
        currentCall = CalculatorPower();
        break;
      case "Energy":
        currentCall = CalculatorEnergy();
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

export default WPECalculator;
