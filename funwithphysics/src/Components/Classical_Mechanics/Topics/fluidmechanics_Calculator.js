import React, { useState } from "react";

import "../../PysicsStyles/physicscalculator.css";
import { Form, Button } from "react-bootstrap";

import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
import { SI } from "../../Solution/allSIUnits";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";

function FluidCalculator() {
  let { topic } = useParams();
  //fluid_list
  const fluid_list = [
    {
      topic: "Density",
      details: `Density is the measurement of how tightly a material is packed together. A fluid's mass density, often known as density, is defined as the ratio of a fluid's mass to its volume.
                     A fluid's density is defined as its mass per unit volume.`,
      formula: "ρ = m/V",
      process:
        "In general, liquids are less dense than solids and gases are less dense than liquids. This is due to the fact that solids have densely packed particles, liquids are materials where particles can slide around one another, and gases have particles that are free to move all over the place. Density is denoted by symbol ρ (rho) and the unit of mass density is (kg/m3).",
      siunit: "kg m⁻³",
      dimension: "M L⁻³",
    },
    {
      topic: "Pressure",
      details: `The amount of force delivered at right angles to an object's surface per unit area is known as pressure. For example, A knife distributes the force over its entire cutting edge. Sharper the edge, higher the pressure, and consequently the cutting with a sharp knife is easy. In a blunt knife, the force is distributed over its blunt surface with a larger surface area. Therefore, we need to put more force in order to cut.`,
      formula: "P = F/A",
      process: "Here Pressure(P) is calculated by the Force(F) upon Area(A).",
      siunit: "pascal",
      dimension: "M L⁻¹ T⁻²",
    },
    {
      topic: "Volume flow rate",
      details: `Volume flow rate is the quantity of fluid flowing in the specified time.Accurate flow rate measurement using an appropriate flowmeter is paramount to ensuring fluid control industrial processes run smoothly, safely and cost-effectively.`,
      formula: "Q = AV",
      process:
        "Here Volume flow rate(Q) is calculated by entering the values of Area(A) and Velocity(V).",
      siunit: "m³/s",
      dimension: "L³ T⁻¹",
    },
    {
      topic: "Continuity equation",
      details: `According to the equation, the volume of liquid flowing into a pipe in a particular interval of time must equal the volume of liquid flowing out of the same pipe in the same amount of time.`,
      formula: "A1 * V1 = A2 * V2",
      process:
        "Here 'A1' and 'V1' are the Area and Velocity of one side of the pipe respectively through which the liquid enters whereas 'A2' and 'V2' are the Area and Velocity of other side of the pipe respectively through which the liquid flows out.",
      siunit: "Arae: m², Velocity: m/s",
      dimension: "Area: L², Velocity: LT⁻¹",
    },
    {
      topic: "Viscosity",
      details: `The majority of fluids aren't perfect and have varying degrees of resistance to motion. This resistance to fluid motion is akin to the friction that occurs when a solid moves across a surface. This is referred to as viscosity.
            When there is relative motion between liquid layers, this force exists.`,
      formula: "μ = Fy/Au",
      process:
        "When we take a drop of water and honey on a slanting plane, the water reaches down the plane first than honey because of it low viscosity.Here 'μ' represents viscosity, 'F/A' is the pressure and 'u/y' is rate of deformation.",
      siunit: "pascal-second",
      dimension: "M L⁻¹ T⁻¹",
    },
    {
      topic: "Poiseuille's law",
      details: `Poiseuille's law states that the flow of liquid depends on the following variables such as the length of the tube(L), radius (r), pressure gradient (∆P) and the viscosity of the fluid (μ) in accordance with their relationship.`,
      formula: "Δp = 8μLQ/πR⁴",
      process:
        "While examining the blood flow through arteries, it is found that high viscosity of blood makes it almost incompressible. It also has application in blood pressure measurement instruments. Here 'Δp' represents difference in pressure, 'μ' represents viscosity,'L' is length of pipe, 'Q' is volumetric flow rate and 'R' is the radius of pipe.",
      siunit: "Pressure: pascal,  Volumetric flow rate: m³/s",
      dimension: "Pressure: ML⁻¹T⁻²,  Volumetric flow rate: L³T⁻¹",
    },
    {
      topic: "Bernoulli's equation",
      details: `According to Bernoulli's equation, the total mechanical energy of the moving fluid remains constant, which comprises the energy associated with fluid pressure, the gravitational potential energy of elevation, and the kinetic energy of fluid motion.`,
      formula: "P₁ + 1/2ρV₁² + ρgh₁ = P₂ + 1/2ρV₂² + ρgh₂",
      process:
        "It is applied to various measuring devices such as Venturi meter, Nozzle meter, Orifice meter, Pitot tube,etc. Here 'P₁', 'V₁' and 'h₁' are the pressure, velocity and height of one opening of the tube and 'P₂', 'V₂' and 'h₂' are the pressure, velocity and height of other opening of the tube and 'ρ' is density of fluid.",
      siunit: "Pressure: pascal, Velocity: m/s, height: m, density: kg m⁻³",
      dimension: "Pressure: ML⁻¹T⁻²,  Velocity: LT⁻¹, Height: L, density: ML⁻³",
    },
  ];

  const page = fluid_list.filter((data) => data.topic === topic);
  const details = page[0];

  // Density Calculator
  function CalculatorDensity() {
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [vol, setVol] = useState(null);

    const handleClick = () => {
      let res = mass / vol;
      setResult(res);
    };

    const handleReset = () => {
      setResult(null);
      setMass(null);
      setVol(null);
    };

    return (
      <React.Fragment>
        {/* <Navbar/> */}
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass (in kgs)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter mass of the object"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="volume">
            <Form.Label> Volume (in m³)</Form.Label>
            <Form.Control
              onChange={(e) => setVol(e.target.value)}
              type="number"
              placeholder="Enter volume of the object"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="density">
            <Form.Label>Density</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " kg m⁻³ "}
            />
            <Form.Text className="text-muted">
              Enter the above values to calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={handleReset} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  // Pressure Calculator
  function CalculatorPressure() {
    const [result, setResult] = useState(null);
    const [force, setForce] = useState(null);
    const [area, setArea] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      let res = force / area;
      setResult(res);
      if (force !== null && area !== null) {
        let res = force / area;
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Force: force,
      Area: area,
    };

    const resetForm = () => {
      setForce(null);
      setArea(null);
      setShowSolution(false);
      setResult("");
    };

    const insertValues = ` ${force}${SI["Force"]} / ${area}${SI["Area"]}`;

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
            <Form.Label> Force (in newtons)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              type="number"
              placeholder="Enter the force applied on the object"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="area">
            <Form.Label> Area (in m²)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder="Enter area of the object"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="force / area"
                toFind="Pressure"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="pressure">
            <Form.Label>Pressure</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " pascal "}
            />
            <Form.Text className="text-muted">
              Enter the above values to calculate.
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

  // Volume flow rate calculator
  function CalculatorVolumeflowrate() {
    const [result, setResult] = useState("");
    const [area, setArea] = useState("");
    const [velocity, setVelocity] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      Area: area,
      Velocity: velocity,
    };

    const insertValues = `${area}${SI["Area"]} * ${velocity}${SI["Velocity"]}`;

    const handleClick = () => {
      if (area !== "" && velocity !== "") {
        let res = area * velocity;
        setShowSolution(true);
        setResult(res);
      } else {
        setShowSolution(false);
        setShowModal(true);
      }
    };

    const resetForm = () => {
      setArea("");
      setVelocity("");
      setShowSolution(false);
      setResult("");
    };

    // const handleReset = () => {
    //   setResult(null);
    //   setArea(null);
    //   setVelocity(null);
    // };

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
          <Form.Group className="mb-3" controlId="area">
            <Form.Label> Area (in m²)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder="Enter the cross-sectional area of object"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="velocity">
            <Form.Label> Velocity (in m/s)</Form.Label>
            <Form.Control
              onChange={(e) => setVelocity(e.target.value)}
              type="number"
              placeholder="Enter the velocity of fluid at a point"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="Area * Velocity"
                toFind="Volume Flow Rate"
                insertValues={insertValues}
                result={result}
                // constants={constants}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="VolumeFlowRate">
            <Form.Label>Volume flow rate</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " m³/s "}
            />
            <Form.Text className="text-muted">
              Enter the above values to calculate.
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

  // Continuity Equation calculator
  function CalculatorContinuityequation() {
    const [result, setResult] = useState(null);
    const [area1, setArea1] = useState(null);
    const [area2, setArea2] = useState(null);
    const [velocity1, setVelocity1] = useState(null);
    const [velocity2, setVelocity2] = useState(null);
    const [choice, setChoice] = useState("area");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleChange(e) {
      setChoice(e.target.value);
      choiceData();
      reset();
    }

    const calcResult = () => {
      let res;
      if (
        choice === "area" &&
        area1 !== null &&
        velocity1 !== null &&
        velocity2 !== null
      ) {
        res = (area1 * velocity1) / velocity2;
        setResult(res);
        setShowSolution(true);
      } else if (
        choice === "velocity" &&
        velocity1 !== null &&
        area1 !== null &&
        area2 !== null
      ) {
        res = (area1 * velocity1) / area2;
        setResult(res);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
    };

    const givenValues1 = {
      Area1: area1,
      Velocity1: velocity1,
      Velocity2: velocity2,
    };

    const givenValues2 = {
      Area1: area1,
      Area2: area2,
      Velocity1: velocity1,
    };

    const insertValues1 = ` (${area1}${SI["Area1"]} * ${velocity1}${SI["Velocity1"]}) / ${velocity2}${SI["Velocity2"]}`;

    const insertValues2 = ` (${area1}${SI["Area1"]} * ${velocity1}${SI["Velocity1"]}) / ${area2}${SI["Area2"]}`;

    function reset() {
      setShowModal(false);
      setShowSolution(false);
      setResult(null);
      setArea1(null);
      setArea2(null);
      setVelocity1(null);
      setVelocity2(null);
    }

    const choiceData = () => {
      if (choice === "area")
        return {
          name: "Area",
          mainunit: "m²",
          quantities: ["Area 1", "Velocity 1", "Velocity 2"],
          subunits: ["m²", "m/s", "m/s"],
          setters: [setArea1, setVelocity1, setVelocity2],
          getters: [area1, velocity1, velocity2],
        };
      else if (choice === "velocity")
        return {
          name: "Velocity",
          mainunit: "m/s",
          quantities: ["Area 1", "Velocity 1", "Area 2"],
          subunits: ["m²", "m/s", "m²"],
          setters: [setArea1, setVelocity1, setArea2],
          getters: [area1, velocity1, area2],
        };
    };

    return (
      <>
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
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="area">Area</option>
              <option value="velocity">Velocity</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[1]}
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[2](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[2]}
              value={
                choiceData().getters[2] === null ? "" : choiceData().getters[2]
              }
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={choice === "area" ? givenValues1 : givenValues2}
                formula={
                  choice === "area"
                    ? "(Area1*Velocity1)/Velocity2"
                    : "(Area1*Velocity1)/Area2"
                }
                toFind={choice === "area" ? "Area2" : "Velocity2"}
                insertValues={choice === "area" ? insertValues1 : insertValues2}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
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
  }

  // Viscosity calculator
  function CalculatorViscosity() {
    const [result, setResult] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [force, setForce] = useState("");
    const [area, setArea] = useState("");
    const [rateofdeformation, setRateofdeformation] = useState("");

    const handleClick = () => {
      if (force !== "" && area !== "" && rateofdeformation !== "") {
        let res = force / (area * rateofdeformation);
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Force: force,
      Area: area,
      Rateofdeformation: rateofdeformation,
    };

    const resetForm = () => {
      setForce("");
      setArea("");
      setRateofdeformation("");
      setShowSolution(false);
      setResult(null);
    };

    const insertValues = `${force}${SI["Force"]} / ((${area}${SI["Area"]}) * (${rateofdeformation}${SI["Rateofdeformation"]}))`;

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
            <Form.Label> Force (in newtons)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              type="number"
              placeholder="Enter the force"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="area">
            <Form.Label> Area (in m²)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder="Enter area of each plate"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rateofdeformation">
            <Form.Label> Rate of deformation (u/y)</Form.Label>
            <Form.Control
              onChange={(e) => setRateofdeformation(e.target.value)}
              type="number"
              placeholder="Enter rate of shear deformation"
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="Fy/Au"
                toFind="Viscosity"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="pressure">
            <Form.Label>Viscosity</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === "" ? "Result" : result + " pascal-second "
              }
            />
            <Form.Text className="text-muted">
              Enter the above values to calculate.
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

  // Poiseuille's law calculator
  function CalculatorPoiseuillelaw() {
    const [result, setResult] = useState(null);
    const [viscosity, setViscosity] = useState(null);
    const [length, setLength] = useState(null);
    const [flowrate, setFlowrate] = useState(null);
    const [radius, setRadius] = useState(null);
    const [pressurediff, setPressurediff] = useState(null);
    const [choice, setChoice] = useState("pressure");
    const [pi, setPi] = useState(Math.PI);
    const [showModal, setShowModal] = useState(false);
    const [showSolutionPressure, setShowSolutionPressure] = useState(false);
    const [showSolutionFlowrate, setShowSolutionFlowrate] = useState(false);
    const givenValuesPressure = {
      viscosity: viscosity,
      length: length,
      flowrate: flowrate,
      radius: radius,
    };
    const givenValuesFlowrate = {
      viscosity: viscosity,
      length: length,
      pressure_difference: pressurediff,
      radius: radius,
    };
    const insertValuesPressure = `(8* ${viscosity} * ${length}*${flowrate})/ π* ${radius}⁴`;
    const insertValuesFlowrate = `(${pressurediff} *π *${radius}⁴)/ 8 * ${viscosity}* ${length}`;

    function handleChange(e) {
      setChoice(e.target.value);
      choiceData();
    }

    const calcResult = () => {
      let res;
      if (choice === "pressure") {
        if (
          viscosity === null ||
          length === null ||
          flowrate === null ||
          radius === null
        ) {
          setShowModal(true);
        } else {
          res =
            (8 * viscosity * length * flowrate) /
              (Math.PI * Math.pow(radius, 4)) +
            " pascal";
          setShowSolutionPressure(true);
          setShowSolutionFlowrate(false);
        }
      } else if (choice === "flowrate") {
        if (
          viscosity === null ||
          length === null ||
          pressurediff === null ||
          radius === null
        ) {
          setShowModal(true);
        } else {
          res =
            (pressurediff * Math.PI * Math.pow(radius, 4)) /
              (8 * viscosity * length) +
            " m³/s";
          setShowSolutionFlowrate(true);
          setShowSolutionPressure(false);
        }
      }
      setResult(res);
    };

    function reset() {
      setResult(null);
      setViscosity(null);
      setLength(null);
      setFlowrate(null);
      setRadius(null);
      setPressurediff(null);
    }

    const choiceData = () => {
      if (choice === "pressure")
        return {
          name: "Pressure",
          mainunit: " ",
          quantities: [
            "Viscosity of fluid",
            "Length of pipe",
            "Flow rate of fluid",
            "Radius of the pipe",
            "Pi",
          ],
          subunits: ["pascal-second", "m", "m³/s", "m", "NaN"],
          setters: [setViscosity, setLength, setFlowrate, setRadius, setPi],
          getters: [viscosity, length, flowrate, radius, pi],
        };
      else if (choice === "flowrate")
        return {
          name: "Volumetric flow Rate",
          mainunit: " ",
          quantities: [
            "Viscosity of fluid",
            "Length of pipe",
            "Pressure Difference",
            "Radius of the pipe",
            "Pi",
          ],
          subunits: ["pascal-second", "m", "pascal", "m", "NaN"],
          setters: [setViscosity, setLength, setPressurediff, setRadius, setPi],
          getters: [viscosity, length, pressurediff, radius, pi],
        };
    };

    return (
      <>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please enter the numbers to get correct answer.
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
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="pressure">Pressure difference</option>
              <option value="flowrate">Volumetric flow rate</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[1]}
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[2](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[2]}
              value={
                choiceData().getters[2] === null ? "" : choiceData().getters[2]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[3]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[3](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[3]}
              value={
                choiceData().getters[3] === null ? "" : choiceData().getters[3]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[4]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[4](e.target.value)}
              readOnly
              type="number"
              placeholder={choiceData().getters[4]}
            />
          </Form.Group>
          {showSolutionPressure ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValuesPressure}
                formula="Δp = 8μLQ/πR⁴"
                toFind="Pressure Difference"
                insertValues={insertValuesPressure}
                result={result}
                // constants={constants}
              />
            </Form.Group>
          ) : null}
          {showSolutionFlowrate ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValuesFlowrate}
                formula="Q =ΔpπR⁴/8μL"
                toFind="Volumetric Flow Rate"
                insertValues={insertValuesFlowrate}
                result={result}
                // constants={constants}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
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
  }

  // Bernoulli's equation calculator
  const CalculatorBernoulliequation = () => {
    const [choice, setChoice] = useState("pressure");
    const [pressure1, setPressure1] = useState("");
    const [velocity1, setVelocity1] = useState("");
    const [height1, setHeight1] = useState("");
    const [pressure2, setPressure2] = useState("");
    const [velocity2, setVelocity2] = useState("");
    const [height2, setHeight2] = useState("");
    const [gravity, setGravity] = useState("");
    const [density, setDensity] = useState("");
    const [result, setResult] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const calcResult = () => {
      let res;
      if (choice === "pressure") {
        if (
          density !== "" &&
          velocity1 !== "" &&
          velocity2 !== "" &&
          height1 !== "" &&
          height2 !== "" &&
          gravity !== ""
        ) {
          let r1 = 0.5 * density * velocity1 * velocity1;
          let r2 = density * gravity * height1;
          let r3 = 0.5 * density * velocity2 * velocity2;
          let r4 = density * gravity * height2;
          res =
            parseFloat(pressure1) +
            parseFloat(r1) +
            parseFloat(r2) -
            parseFloat(r3) -
            parseFloat(r4);
          setShowSolution(true);
          setResult(res);
        } else {
          setShowModal(true);
        }
      }
      if (choice === "height") {
        if (
          density !== "" &&
          velocity1 !== "" &&
          velocity2 !== "" &&
          pressure2 !== "" &&
          pressure1 !== "" &&
          gravity !== ""
        ) {
          let r1 = (pressure1 - pressure2) / (density * gravity);
          let r2 = (0.5 * velocity1 * velocity1) / gravity;
          let r3 = (0.5 * velocity2 * velocity2) / gravity;
          res =
            parseFloat(r1) +
            parseFloat(r2) +
            parseFloat(height1) -
            parseFloat(r3);
          setShowSolution(true);
          setResult(res);
        } else {
          setShowModal(true);
        }
      }
      if (choice === "velocity") {
        if (
          density !== "" &&
          velocity1 !== "" &&
          height2 !== "" &&
          pressure2 !== "" &&
          pressure1 !== "" &&
          gravity !== ""
        ) {
          let r1 = (2 * (pressure1 - pressure2)) / density;
          let r2 = 2 * gravity * (height1 - height2);
          let r3 = velocity1 * velocity1;
          let r4 = parseFloat(r1) + parseFloat(r2) + parseFloat(r3);
          res = Math.sqrt(r4);
          setShowSolution(true);
          setResult(res);
        } else {
          setShowSolution(false);
          setShowModal(true);
        }
      }
    };

    // const reset = () => {
    //   setPressure1(null);
    //   setPressure2(null);
    //   setVelocity2(null);
    //   setVelocity1(null);
    //   setDensity(null);
    //   setHeight1(null);
    //   setHeight2(null);
    //   setGravity(null);
    //   setResult(null);
    // };

    const resetForm = () => {
      setPressure1("");
      setPressure2("");
      setVelocity2("");
      setVelocity1("");
      setDensity("");
      setHeight1("");
      setHeight2("");
      setGravity("");
      setResult("");
      setShowSolution(false);
      setResult("");
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      resetForm();
    };

    let givenValues;
    let insertValues;
    let toFindChoice;
    let choiceFormula;

    const choiceData = () => {
      if (choice === "pressure") {
        givenValues = {
          Pressure1: pressure1,
          Density: density,
          Height1: height1,
          Velocity1: velocity1,
          Height2: height2,
          Velocity2: velocity2,
          Gravity: gravity,
        };
        toFindChoice = "Final Pressure (P₂)";
        choiceFormula = "P₁ + 1/2ρ(V₁² - V₂²) + ρg(h₁ - h₂)";
        insertValues = ` ${pressure1}${SI["Pressure"]} + (1/2 * ${density}${SI["Density"]} * (${velocity1}${SI["Velocity"]}² - ${velocity2}${SI["Velocity"]}² )) + (${density}${SI["Density"]} * ${gravity}${SI["Gravity"]} * (${height1}${SI["Length"]} - ${height2}${SI["Length"]} )) `;
        return {
          name: "Pressure",
          mainunit: "pascal",
          quantities: [
            "Pressure 1 (P1)",
            "Density (ρ)",
            "Height 1 (h1)",
            "Velocity 1 (V1)",
            "Heigth 2 (h2)",
            "Velocity 2 (V2)",
            "Gravity",
          ],
          subunits: ["Pascal", "kg m⁻³", "m", "m/s", "m", "m/s", "m/s²"],
          getters: [
            pressure1,
            density,
            height1,
            velocity1,
            height2,
            velocity2,
            gravity,
          ],
          setters: [
            setPressure1,
            setDensity,
            setHeight1,
            setVelocity1,
            setHeight2,
            setVelocity2,
            setGravity,
          ],
        };
      }
      if (choice === "velocity") {
        givenValues = {
          Pressure1: pressure1,
          Density: density,
          Height1: height1,
          Velocity1: velocity1,
          Height2: height2,
          Pressure2: pressure2,
          Gravity: gravity,
        };
        toFindChoice = "Final Velocity (V₂)";
        choiceFormula = "(2 * ρ *((P₁ - P₂) + 1/2ρV₁² + ρg(h₁ - h₂)))¹ᐟ²";
        insertValues = ` (2 * ${density}${SI["Density"]} *((${pressure1}${SI["Pressure"]}) - ${pressure2}${SI["Pressure"]}) + (1/2 * ${density}${SI["Density"]} * ${velocity1}${SI["Velocity"]}²) + (${density}${SI["Density"]} * ${gravity}${SI["Gravity"]} * (${height1}${SI["Length"]} - ${height2}${SI["Length"]} )))¹ᐟ² `;
        return {
          name: "Velocity",
          mainunit: "m/s",
          quantities: [
            "Pressure 1 (P1)",
            "Density (ρ)",
            "Height 1 (h1)",
            "Velocity 1 (V1)",
            "Heigth 2 (h2)",
            "Pressure 2 (P2)",
            "Gravity",
          ],
          subunits: ["Pascal", "kg m⁻³", "m", "m/s", "m", "Pascal", "m/s²"],
          getters: [
            pressure1,
            density,
            height1,
            velocity1,
            height2,
            pressure2,
            gravity,
          ],
          setters: [
            setPressure1,
            setDensity,
            setHeight1,
            setVelocity1,
            setHeight2,
            setPressure2,
            setGravity,
          ],
        };
      }
      if (choice === "height") {
        givenValues = {
          Pressure1: pressure1,
          Density: density,
          Height1: height1,
          Velocity1: velocity1,
          Pressure2: pressure2,
          Velocity2: velocity2,
          Gravity: gravity,
        };
        toFindChoice = "Final Height (h₂)";
        choiceFormula = "((P₁ - P₂) + 1/2ρ(V₁² - V₂²) + ρgh₁)/ρg";
        insertValues = ` ((${pressure1}${SI["Pressure"]} - ${pressure2}${SI["Pressure"]}) + (1/2 * ${density}${SI["Density"]} * (${velocity1}${SI["Velocity"]}² - ${velocity2}${SI["Velocity"]}² )) + (${density}${SI["Density"]} * ${gravity}${SI["Gravity"]} * ${height1}${SI["Length"]}))/(${density}${SI["Density"]} * ${gravity}${SI["Gravity"]}) `;
        return {
          name: "Height",
          mainunit: "m",
          quantities: [
            "Pressure 1 (P1)",
            "Density (ρ)",
            "Height 1 (h1)",
            "Velocity 1 (V1)",
            "Velocity 2 (V2)",
            "Pressure 2 (P2)",
            "Gravity",
          ],
          subunits: ["Pascal", "kg m⁻³", "m", "m/s", "m/s", "Pascal", "m/s²"],
          getters: [
            pressure1,
            density,
            height1,
            velocity1,
            velocity2,
            pressure2,
            gravity,
          ],
          setters: [
            setPressure1,
            setDensity,
            setHeight1,
            setVelocity1,
            setVelocity2,
            setPressure2,
            setGravity,
          ],
        };
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
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="pressure">Final Pressure(P₂)</option>
              <option value="velocity">Final Velocity(V₂)</option>
              <option value="height">Final Height(h₂)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[1]}
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[2](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[2]}
              value={
                choiceData().getters[2] === null ? "" : choiceData().getters[2]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[3]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[3](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[3]}
              value={
                choiceData().getters[3] === null ? "" : choiceData().getters[3]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[4]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[4](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[4]}
              value={
                choiceData().getters[4] === null ? "" : choiceData().getters[4]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[5]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[5](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[5]}
              value={
                choiceData().getters[5] === null ? "" : choiceData().getters[5]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[6]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[6](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[6]}
              value={
                choiceData().getters[6] === null ? "" : choiceData().getters[6]
              }
            />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula={choiceFormula}
                toFind={toFindChoice}
                insertValues={insertValues}
                result={result}
                // constants={constants}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => resetForm()} type="reset">
            Reset
          </Button>
        </div>
      </React.Fragment>
    );
  };
  // Adding Calculators together
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Density":
        currentCall = CalculatorDensity();
        break;
      case "Pressure":
        currentCall = CalculatorPressure();
        break;
      case "Volume flow rate":
        currentCall = CalculatorVolumeflowrate();
        break;
      case "Continuity equation":
        currentCall = CalculatorContinuityequation();
        break;
      case "Viscosity":
        currentCall = CalculatorViscosity();
        break;
      case "Poiseuille's law":
        currentCall = CalculatorPoiseuillelaw();
        break;
      case "Bernoulli's equation":
        currentCall = CalculatorBernoulliequation();
        break;
      default:
        break;
    }
    return currentCall;
  }

  return (
    <React.Fragment>
      <Navbar />
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
      <div className="Calculator__main">
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

export default FluidCalculator;
