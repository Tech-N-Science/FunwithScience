import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../classicalMechanics.css";
import { Helmet } from "react-helmet";
import Solution from "../../Solution/Solution";
import Navbar from "../../Navbar/Navbar";
import { constant } from "../../Solution/allConstants";
import { SI } from "../../Solution/allSIUnits";
import Modal from "react-bootstrap/Modal";

function GravitationCalculator({ match }) {
  // Gravitation_list
  const Gravitation_list = [
    {
      topic: "Gravitational Force",
      details:
        "Gravity also termed as gravitation, is a force that occurs among all material objects in the universe. For any two objects or units having non-zero mass, the force of gravity has a tendency to attract them toward each other. The Universal Law of Gravitation says that: Every object in the universe has the property to attract every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between them. ",
      formula: "F = GmMd⁻²",
      process:
        "The Force of Gravitation F , between two bodies / system of mass m and M , where d is the radius or distance between the two bodies and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) , is equals to product of ( G , m and M ) divided by the ( d² ) . SI unit for gravitation force is Newton . SI unit for universal gravitational constant is Newton - meter² · Kg⁻² ",
      siunit: "F = kg·m/s² or N",
      dimension: "G = M L T⁻²",
    },
    {
      topic: "Gravitational Field",
      details:
        "The gravitational field is defined as the gravitational force per unit mass that would be exerted on a small test mass at that position. It's a vector field that points in the direction of the force experienced by a small test mass at that location.",
      formula: "g = GM/r²",
      process:
        "Let’s consider a point particle of mass M and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) then the magnitude of the resultant gravitational field strength denoted by term g, at a distance of r,  from M is equals to product of (G and M) divided by (r²).",
      siunit: "N/kg",
      dimension: "g = L T⁻²",
    },
    {
      topic: "Gravitational Potential Energy",
      details:
        "Gravitational potential energy refers to the work that a body needs to do against a test mass in order to arrive to a specific position. In other words, gravitational potential energy is the amount of energy that an object has or gains as a result of a change in the position of its gravitational field.",
      formula: "U = -GMm/r",
      process:
        "Consider a source mass ‘M’ is placed at a point along the x-axis, initially, a test mass ‘m’ is at infinity and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) therefore gravitational potential energy (U) at a point which is at a distance ‘r’ from the source mass is equal to the product of negative of (G, M and m) divided by (r).",
      siunit: " Joule",
      dimension: "U = M¹ L² T⁻²",
    },
    {
      topic: "Escape Velocity",
      details:
        "Escape velocity is the speed at which an object may break away from the gravitational pull of the planet or moon and escape without developing propulsion.",
      formula: "V = √(2GM/R)",
      process:
        "It is the minimum velocity required by an object to escape the gravitational field that is, escape the land without ever falling back. An object that has this velocity at the earth’s surface will totally escape the earth’s gravitational field ignoring the losses due to the atmosphere. Here 'V' is the escape velocity, 'M' is mass of the celestial object whose gravitational pull has to be superseded and 'R' is the distance from the object to the centre of mass of the body to be escaped",
      siunit: "m/s",
      dimension: "L T⁻¹",
    },
    {
      topic: "Kepler's Second Law",
      details:
        "According to Kepler's second law, a planet sweeps away equal areas in equal periods, i.e., the areal velocity (area divided by time) remains constant.",
      formula: "(dA/dt) = L/2m",
      process:
        "The conservation of angular momentum, which holds for any system with just radial forces, is the source of Kepler's second law. The areal velocity must be constant since the angular momentum is constant. Here 'L' is angular velocity, 'dA' is change in area, 'dt' change in time and 'm' is mass of celestial body.",
      siunit: "L = kg-m²/sec",
      dimension: "M L² T⁻¹",
    },
    {
      topic: "Kepler's Third Law",
      details:
        "According to Kepler's third law, the square of the period is equal to the cube of the orbit's semi-major axis. In Satellite Orbits and Energy, we derived Kepler’s third law for the special case of a circular orbit.",
      formula: "T² = 4π²a³/GM",
      process:
        "Remember that the semi-major axis of an ellipse is one-half the sum of the perihelion and aphelion. The semi-major axis (a) of a circular orbit is the same as the orbit's radius. Here 'T' is the time period, 'a' is semi-major axis and 'M' is mass of celestial body.",
      siunit: "Time Period: s, Semi-Major Axis: m",
      dimension: "Time Period: T, Semi-Major Axis: L",
    },
  ];

  const page = Gravitation_list.filter(
    (data) => data.topic === match.params.topic
  );
  const details = page[0];

  //Gravitational Force
  function CalculatorGravitationalForce() {
    const [result, setResult] = useState("");
    const [mass_A, setMassA] = useState("");
    const [mass_B, setMassB] = useState("");
    const [distance, setDistance] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // object of given values
    const givenValues = {
      Mass_A: mass_A,
      Mass_B: mass_B,
      Distance: distance,
    };

    // defintion of insertValues
    // how to add a variable  variable(their SI unit)
    // example ${mass}${SI["mass"]}
    // how to add constant
    // example ${constant["G"]}

    const insertValues = `(${constant["G"]} * ${mass_A}${SI["mass"]} * ${mass_B}${SI["mass"]}) / (${distance} ${SI["distance"]})² `;

    // It Have List of all constant used in that formulae
    const constants = ["G"];

    //add these  validation also and also set setShowSolution
    const handleClick = () => {
      if (mass_A !== "" && mass_B !== "" && distance !== "") {
        let res =
          (6.67 * Math.pow(10, -11) * mass_A * mass_B) / (distance * distance);
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    //reset function => to reset all states
    const resetForm = () => {
      setMassA("");
      setMassB("");
      setDistance("");
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
        {/* <Navbar/> */}
        <Form>
          <Form.Group className="mb-3" controlId="mass_A">
            <Form.Label>Mass A (m)</Form.Label>
            <Form.Control
              onChange={(e) => setMassA(e.target.value)}
              type="number"
              value={mass_A}
              placeholder="Enter Mass of body A in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mass_B">
            <Form.Label>Mass B (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMassB(e.target.value)}
              type="number"
              value={mass_B}
              placeholder="Enter Mass of body B in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="distance">
            <Form.Label>Distance (D)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              value={distance}
              placeholder="Enter Distance in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Distance">
            <Form.Label>Universal Gravitation Constant (G)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder="6.67 × 10⁻¹¹ Newton - meter² · kg⁻²"
            />
            </Form.Group>
            <br/>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="GMm/d²"
                toFind="Gravitational Force"
                insertValues={insertValues}
                result={result}
                constants={constants}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-3" controlId="Gravitational_Force">
            <Form.Label>Gravitational Force (F)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " Newton"}
            />
            <Form.Text className="text-muted">
              Enter masses &amp; distance to Calculate the Gravitational Force .
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

  //Gravitational Field
  function CalculatorGravitationalField() {
    const [result, setResult] = useState("");
    const [mass, setMass] = useState("");
    const [distance, setDistance] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // const [G, setG] = useState(Math.G);

    const handleClick = () => {
      if (mass !== "" && distance !== "") {
        let res = (6.67 * Math.pow(10, -11) * mass) / (distance * distance);
        setShowSolution(true);
        setResult(res);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Mass: mass,
      Distance: distance,
    };

    const resetForm = () => {
      setMass("");
      setDistance("");
      setShowSolution(false);
      setResult("");
    };

    const insertValues = `(${constant["G"]} * ${mass}${SI["mass"]}) / (${distance} ${SI["distance"]})² `;
    const constants = ["G"];

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
          <Form.Group className="mb-3" controlId="Mass">
            <Form.Label>Mass (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              value={mass}
              placeholder="Enter Mass of body in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Distance">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              value={distance}
              placeholder="Enter Distance in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Distance">
            <Form.Label>Universal Gravitation Constant (G)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder="6.67 × 10⁻¹¹ Newton - meter² · kg⁻²"
            />
            <br/>
            {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
               givenValues={givenValues}
               formula="GM/r²"
               toFind="Gravitational Field"
               insertValues={insertValues}
               result={result}
               constants={constants}
            />
          </Form.Group>
        ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="Gravitational_Field">
            <Form.Label>Gravitational Field (g)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " N/kg"}
            />
            <Form.Text className="text-muted">
              Enter mass &amp; distance to Calculate the Gravitational Field .
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

  //Gravitational Potential Energy
  function CalculatorGravitationalPotentialEnergy() {
    const [result, setResult] = useState("");
    const [mass_A, setMassA] = useState("");
    const [mass_B, setMassB] = useState("");
    const [distance, setDistance] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      if (mass_A!== "" && mass_B!=="" && distance!==""){
      let res = -(6.67 * Math.pow(10, -11) * mass_A * mass_B) / distance;
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Mass_A: mass_A,
      Mass_B: mass_B,
      Distance: distance,
    };

    const resetForm = () => {
      setMassA("");
      setMassB("");
      setDistance("");
      setShowSolution(false);
      setResult("");
    };

    const insertValues = `- (${constant["G"]} * ${mass_A}${SI["mass"]} * ${mass_B}${SI["mass"]}) / (${distance} ${SI["distance"]}) `;
    const constants = ["G"];

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="Mass">
            <Form.Label>Mass (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMassA(e.target.value)}
              type="number"
              value={mass_A}
              placeholder="Enter Mass of body in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Mass">
            <Form.Label>Mass (m)</Form.Label>
            <Form.Control
              onChange={(e) => setMassB(e.target.value)}
              type="number"
              value={mass_B}
              placeholder="Enter Mass of body in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Height">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              value={distance}
              placeholder="Enter Height in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Distance">
            <Form.Label>Universal Gravitation Constant (G)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder="6.67 × 10⁻¹¹ Newton - meter² · kg⁻²"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="Gravitational_Potential_Energy"
          >
            {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="-GMm/r"
              toFind="Energy Potential Energy"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
            <Form.Label>Gravitational Potential Energy (U)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " Joules"}
            />
            <Form.Text className="text-muted">
              Enter mass &amp; height to Calculate the Gravitational Potential
              Energy .
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

  // Escape Velocity Calculator
  function CalculatorEscapeVelocity() {
    const [result, setResult] = useState("");
    const [mass, setMass] = useState("");
    const [radius, setRadius] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      if (mass!== "" && radius!== ""){
      let res = Math.sqrt((2 * 6.67 * Math.pow(10, -11) * mass) / radius);
      setShowSolution(true);
      setResult(res);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Mass: mass,
      Radius: radius,
    };

    const resetForm = () => {
      setMass("");
      setRadius("");
      setShowSolution(false);
      setResult("");
    };

    const insertValues = ` √[(2 * ${constant["G"]} * ${mass}${SI["Mass"]}) / (${radius}${SI["Radius"]})]`;
    const constants = ["G"];

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="Mass">
            <Form.Label>Mass (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              value={mass}
              placeholder="Enter mass of body in kgs"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Radius">
            <Form.Label>Radius (R)</Form.Label>
            <Form.Control
              onChange={(e) => setRadius(e.target.value)}
              type="number"
              value={radius}
              placeholder="Enter distance of body from the center of gravity in metres"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Gravitational_Constant">
            <Form.Label>Universal Gravitation Constant (G)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder="6.67 × 10⁻¹¹ Newton - meter² · kg⁻²"
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="√(2GM/R)"
              toFind="Escape Velocity"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-3" controlId="Escape_velocity">
            <Form.Label>Escape Velocity (V)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " m/s"}
            />
            <Form.Text className="text-muted">
              Enter mass &amp; radius to calculate the Escape Velocity .
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

  // Kepler's Second Law
  function CalculatorKeplerSecondLaw() {
    const [result, setResult] = useState("");
    const [area, setArea] = useState("");
    const [time, setTime] = useState("");
    const [mass, setMass] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      if (mass!== "" && area!== "" && time!==""){
      let res = (mass * area * 2) / time;
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Mass: mass,
      Area: area,
      Time: time,
    };

    const resetForm = () => {
      setMass("");
      setArea("");
      setTime("");
      setShowSolution(false);
      setResult("");
    };

    const insertValues = `(${area}${SI["area"]} / ${time}${SI["time"]}) * 2(${mass}${SI["mass"]})`;

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="Area">
            <Form.Label>Change in area (dA)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              value={area}
              placeholder="Enter in metres squared"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Time">
            <Form.Label>Change in time (dt)</Form.Label>
            <Form.Control
              onChange={(e) => setTime(e.target.value)}
              type="number"
              value={time}
              placeholder="Enter in seconds"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Mass">
            <Form.Label>Mass of the moving planet(m)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              value={mass}
              placeholder="Enter in kgs"
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="(dA/dt) x 2m"
              toFind="Angular Momentum"
              insertValues={insertValues}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-3" controlId="Angular_momentum">
            <Form.Label>Angular Momentum (L)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " kg-m²/s"}
            />
            <Form.Text className="text-muted">
              Enter all the above fields to calculate the angular momentum.
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

  // Kepler's Third Law
  function CalculatorKeplerThirdLaw() {
    const [result, setResult] = useState("");
    const [timeperiod, setTimeperiod] = useState("");
    const [mass, setMass] = useState("");
    const [sma, setSMA] = useState("");
    const [choice, setChoice] = useState("timeperiod");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleChange(e) {
      setChoice(e.target.value);
      choiceData();
      reset();
    }

    const calcResult = () => {
      let res;
      if (choice === "timeperiod" && mass!=="" && sma!=="") {
        res = Math.sqrt(
          (4 * Math.pow(Math.PI, 2) * Math.pow(sma, 3)) /
            (6.67 * Math.pow(10, -11) * mass)
        );
        setShowSolution(true);
      } else if (choice === "semimajoraxis" && mass!=="" && timeperiod!=="") {
        res = Math.cbrt(
          (6.67 * Math.pow(10, -11) * mass * Math.pow(timeperiod, 2)) /
            (4 * Math.pow(Math.PI, 2))
        );
        setShowSolution(true);
      }else {
        setShowModal(true)
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "timeperiod")
        return {
      Mass: mass,
      Semi_Major_Axis: sma,
    };
    else
    return{
      Mass: mass,
      TimePeriod: timeperiod,
    };
    };

    function reset() {
      setResult("");
      setTimeperiod("");
      setMass("");
      setSMA("");
      setShowSolution(false);
    }

    const insertValues = () => {
      if (choice === "timeperiod")
        return `√[(4 * π² *(${sma}${SI["sma"]})³) / (${constant["G"]} * ${mass}${SI["mass"]})]`;
      else
      return `∛[(${constant["G"]} * ${mass}${SI["mass"]} * (${timeperiod}${SI["TimePeriod"]})²) / (4 * π²)]`;
    }
    const constants = ["G"];

    const choiceData = () => {
      if (choice === "timeperiod")
        return {
          name: "Time Period",
          formula: "√(4π²a³/GM)",
          mainunit: "s",
          quantities: ["Mass (M)", "Semi-major axis (a)"],
          subunits: ["kg", "m"],
          setters: [setMass, setSMA],
          getters: [mass, sma],
        };
      else if (choice === "semimajoraxis")
        return {
          name: "Semi-major axis",
          formula: "∛(GMT²/4π²)",
          mainunit: "m",
          quantities: ["Mass (M)", "Time Period (T)"],
          subunits: ["kg", "s"],
          setters: [setMass, setTimeperiod],
          getters: [mass, timeperiod],
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
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
              <option value="timeperiod">Time Period</option>
              <option value="semimajoraxis">Semi-major axis</option>
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
          <Form.Group className="mb-3" controlId="Gravitational_Constant">
            <Form.Label>Universal Gravitation Constant (G)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder="6.67 × 10⁻¹¹ Newton - meter² · kg⁻²"
            />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues()}
              formula={choiceData().formula}
              toFind={choiceData().name}
              insertValues={insertValues()}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === ""
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
            <Form.Text className="text-muted">
              Enter the above values to calculate.
            </Form.Text>
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

  // Adding Calculators together

  function calCu_gravi(key) {
    let currentCall;
    switch (key) {
      case "Gravitational Force":
        currentCall = CalculatorGravitationalForce();
        break;
      case "Gravitational Field":
        currentCall = CalculatorGravitationalField();
        break;
      case "Gravitational Potential Energy":
        currentCall = CalculatorGravitationalPotentialEnergy();
        break;
      case "Escape Velocity":
        currentCall = CalculatorEscapeVelocity();
        break;
      case "Kepler's Second Law":
        currentCall = CalculatorKeplerSecondLaw();
        break;
      case "Kepler's Third Law":
        currentCall = CalculatorKeplerThirdLaw();
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
          {calCu_gravi(details.topic)}
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GravitationCalculator;
