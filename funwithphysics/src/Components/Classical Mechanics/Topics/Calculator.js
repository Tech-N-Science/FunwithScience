import React, { useState } from "react";
import "./Calculator.css";
import Topics from "../topics_data";
import { Form, Card, Button } from "react-bootstrap";
import "../classicalMechanics.css";
import WPE_list from "../wpe_data";
import Gravitation_list from "../gravitation_data";
// import Parser from 'html-react-parser';

function Calculator({ match }) {
  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];
  // console.log(page);
  // console.log(details.formula);

  // Momentum Calculator
  function CalculatorMomentum() {
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [vel, setVel] = useState(null);

    const handleClick = () => {
      let res = mass * vel;
      setResult(res);
    };
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label>Mass (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter Mass in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="velocity">
            <Form.Label>Velocity (V)</Form.Label>
            <Form.Control
              onChange={(e) => setVel(e.target.value)}
              type="number"
              placeholder="Enter Velocity in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Momentum (P)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " kg.m/s"}
            />
            <Form.Text className="text-muted">
              Enter Mass & Velocity to Calculate the Momentum.
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

  // Force Calculator
  function CalculatorForce() {
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [acceleration, setAcce] = useState(null);

    const handleClick = () => {
      let res = mass * acceleration;
      setResult(res);
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass (in Kg)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter mass of an object in kilograms"
            />
          </Form.Group>
          <Form.Label> Acceleration (in m/s²)</Form.Label>
          <Form.Group className="mb-3" controlId="acceleration">
            <Form.Control
              onChange={(e) => setAcce(e.target.value)}
              type="number"
              placeholder="Enter acceleration in metre per second square [m/s²]"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Force (F)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null ? "Result" : result + " N or Kg.m.s² "
              }
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

  // Friction Calculator
  function CalculatorFriction() {
    const [result, setResult] = useState(null);
    const [force, setForce] = useState(null);
    const [coeff, setCoeff] = useState(null);

    const handleClick = () => {
      let res = force * coeff;
      setResult(res);
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Force applied (N)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              type="number"
              placeholder="Enter Force applied"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="coeff">
            <Form.Label> coefficient of Friction (μ)</Form.Label>
            <Form.Control
              onChange={(e) => setCoeff(e.target.value)}
              type="number"
              placeholder="Enter coefficient of Friction (μ)"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Frictional Force (F)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " N"}
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

  // Gravitation Calculator
  /*function CalculatorGravitation() {
        const [result, setResult] = useState(null)
        const [mass_A, setMassA] = useState(null)
        const [mass_B, setMassB] = useState(null)
        const [displacement, setDistance] = useState(null)

        const handleClick = () => {
            let res = ( 6.67 * mass_A * mass_B ) / ( distance * distance );
            setResult(res)
        }
        return <React.Fragment>
            <Form>

                <Form.Group className="mb-3" controlId="mass_A">
                    <Form.Label>Mass A (m)</Form.Label>
                    <Form.Control onChange={(e) => setMassA(e.target.value)} type="number" placeholder="Enter Mass of body A in SI unit" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mass_B">
                    <Form.Label>Mass B (M)</Form.Label>
                    <Form.Control onChange={(e) => setMassB(e.target.value)} type="number" placeholder="Enter Mass of body B in SI unit" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="distance">
                    <Form.Label>Distance (D)</Form.Label>
                    <Form.Control onChange={(e) => setDistance(e.target.value)} type="number" placeholder="Enter Distance in SI unit" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Gravitational_Force">
                    <Form.Label>Gravitational Force (F)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " x 10 ^ -11 Newton"} />
                    <Form.Text className="text-muted">
                        Enter masses & distance to Calculate the Gravitational Force .
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleClick}>
                    Calculate
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="dark" onClick={() => setResult(null)} type="reset" >
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }*/

  // Error Measurement Calculator
  function CalculatorErrorMeasurement() {
    const [absolute, setResultAbs] = useState(null);
    const [relative, setResultRel] = useState(null);
    const [percentage, setResultPer] = useState(null);
    const [x_measured, setXM] = useState(null);
    const [x_actual, setXA] = useState(null);

    const handleClick = () => {
      let res_abs = Math.abs(x_measured - x_actual);
      let res_rel = res_abs / x_actual;
      let res_per = res_rel * 100;
      setResultAbs(res_abs);
      setResultRel(res_rel);
      setResultPer(res_per);
    };
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="x_measured">
            <Form.Label>X Measured (XM)</Form.Label>
            <Form.Control
              onChange={(e) => setXM(e.target.value)}
              type="number"
              placeholder="Enter Measured Value"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="x_actual">
            <Form.Label>X Actual (XA)</Form.Label>
            <Form.Control
              onChange={(e) => setXA(e.target.value)}
              type="number"
              placeholder="Enter Actual Value"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="absolute">
            <Form.Label>Absolute Error (EA)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={absolute === null ? "Result" : absolute}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="relative">
            <Form.Label>Relative Error (ER)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={relative === null ? "Result" : relative}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="percentage">
            <Form.Label>Percentage Error (ER)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={percentage === null ? "Result" : percentage}
            />
            <Form.Text className="text-muted">
              Enter measured and actual values to calculate result .
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="dark"
            onClick={() => {
              setResultAbs(null);
              setResultPer(null);
              setResultRel(null);
            }}
            type="reset"
          >
            Reset
          </Button>
        </Form>
      </React.Fragment>
    );
  }

  //Torque Calculator
  function CalculatorTorque() {
    const [result, setResult] = useState(null);
    const [force, setForce] = useState(null);
    const [distance, setDist] = useState(null);
    const [angle, setAngle] = useState(null);

    const handleClick = () => {
      let res = force * distance * Math.sin((angle * Math.PI) / 180);
      setResult(res);
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Force (in Newton)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              type="number"
              placeholder="Enter force applied"
            />
          </Form.Group>
          <Form.Label> Distance (in meter)</Form.Label>
          <Form.Group className="mb-3" controlId="distance">
            <Form.Control
              onChange={(e) => setDist(e.target.value)}
              type="number"
              placeholder="Enter distance covered"
            />
          </Form.Group>
          <Form.Label> Angle (in degree)</Form.Label>
          <Form.Group className="mb-3" controlId="angle">
            <Form.Control
              onChange={(e) => setAngle(e.target.value)}
              type="number"
              placeholder="Enter angle (sin θ)"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="torque">
            <Form.Label>Force (F)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " N.m "}
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

  // Kinematics Calculator

  //     return (
  //       <React.Fragment>
  //         <Form>
  //           <Form.Group className="mb-4" controlId="velocity">
  //             <Form.Label> Velocity (in m/s)</Form.Label>
  //             <Form.Control
  //               onChange={(e) => setVelocity(e.target.value)}
  //               type="number"
  //               placeholder="Enter velocity"
  //             />
  //           </Form.Group>
  //           <Form.Group className="mb-4" controlId="acceleration">
  //             <Form.Label> Acceleration (in m/s^2)</Form.Label>
  //             <Form.Control
  //               onChange={(e) => setAcceleration(e.target.value)}
  //               type="number"
  //               placeholder="Enter acceleration"
  //             />
  //           </Form.Group>
  //           <Form.Group className="mb-4" controlId="time">
  //             <Form.Label> Time (in s)</Form.Label>
  //             <Form.Control
  //               onChange={(e) => setTime(e.target.value)}
  //               type="number"
  //               placeholder="Enter time"
  //             />
  //           </Form.Group>

  //           <Form.Group className="mb-4" controlId="kinematics">
  //             <Form.Label>Kinematics (in m)</Form.Label>
  //             <Form.Control
  //               readOnly
  //               type="number"
  //               placeholder={result === null ? "Result" : result + " m "}
  //             />
  //             <Form.Text className="text-muted">
  //               Enter the above values to Calculate.
  //             </Form.Text>
  //           </Form.Group>
  //           <Button variant="primary" onClick={handleClick}>
  //             Calculate
  //           </Button>
  //           &nbsp;&nbsp;&nbsp;
  //           <Button variant="dark" onClick={() => setResult(null)} type="reset">
  //             Reset
  //           </Button>
  //         </Form>
  //       </React.Fragment>
  //     );
  //   }
  function CalculatorKinematics() {
    const [result, setResult] = useState(null);
    const [ivelocity, setiVelocity] = useState(null);
    const [fvelocity, setfVelocity] = useState(null);
    const [acceleration, setAcceleration] = useState(null);
    const [time, setTime] = useState(null);
    const [displacement, setDisplacement] = useState(null);
    const [choice, setChoice] = useState("displacement");
    function handleChange(e) {
      console.log(e.target.value);
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res;
      if (choice === "displacement") {
        res = ivelocity * time + (1 / 2) * acceleration * time * time;
      } else if (choice === "velocity_fin") {
        res = ivelocity + acceleration * time;
      } else if (choice === "velocity_ini") {
        res = fvelocity - acceleration * time;
      } else if (choice === "acceleration") {
        res = (fvelocity ** 2 - ivelocity ** 2) / (2 * displacement);
      } else if (choice === "time") {
        res = (fvelocity - ivelocity) / acceleration;
      }
      // console.log(res);
      // console.log(time, ivelocity, fvelocity, acceleration, displacement);
      setResult(res);
    };
    const choiceData = () => {
      if (choice === "displacement")
        return {
          name: "Displacement",
          mainunit: "m",
          quantities: ["Initial Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setiVelocity, setTime, setAcceleration],
        };
      else if (choice === "time")
        return {
          name: "Time Interval",
          mainunit: "s",
          quantities: ["Initial Velocity", "Final Velocity", "Acceleration"],
          subunits: ["m/s", "m/s", "m/s²"],
          setters: [setiVelocity, setfVelocity, setAcceleration],
        };
      else if (choice === "acceleration")
        return {
          name: "Acceleration",
          mainunit: "m/s²",
          quantities: ["Initial Velocity", "Final Velocity", "Displacement"],
          subunits: ["m/s", "m/s", "m"],
          setters: [setiVelocity, setfVelocity, setDisplacement],
        };
      else if (choice === "velocity_ini")
        return {
          name: "Initial Velocity",
          mainunit: "m/s",
          quantities: ["Final Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setfVelocity, setTime, setAcceleration],
        };
      else if (choice === "velocity_fin")
        return {
          name: "Final Velocity",
          mainunit: "m/s",
          quantities: ["Initial Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setiVelocity, setTime, setAcceleration],
        };
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" onChange={(e) => handleChange(e)}>
              <option value="displacement">∆x : Displacement</option>
              <option value="time">t : Time interval</option>
              <option value="velocity_ini">v₀​ : Initial velocity</option>
              <option value="velocity_fin">v : Final velocity</option>
              <option value="acceleration">a : Constant Acceleration</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
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
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[1]}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[2](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[2]}
            />
          </Form.Group>
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
        <Button variant="primary" onClick={calcResult}>
          Calculate
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="dark" onClick={() => setResult(null)} type="reset">
          Reset
        </Button>
      </>
    );
  }

  //

  // Adding Calculators together

  function calC(key) {
    let currentCall;
    switch (key) {
      case "Momentum":
        currentCall = CalculatorMomentum();
        break;
      case "Force":
        currentCall = CalculatorForce();
        break;
      case "Friction":
        currentCall = CalculatorFriction();
        break;

      case "Error Measurements":
        currentCall = CalculatorErrorMeasurement();
        break;
      case "Torque":
        currentCall = CalculatorTorque();
        break;
      case "Kinematics":
        currentCall = CalculatorKinematics();
        break;
      default:
        break;
    }
    return currentCall;
  }

  //Work Power Energy
  if (details.topic === "Work Power Energy") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Work Power Energy</h1>
        </div>
        <div className="mech__topics-card">
          {WPE_list.map((data) => (
            <React.Fragment key={data.topic}>
              <a
                href={`/classicalmechanics/calc/work_power_energy/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  //Gravitation
  else if (details.topic === "Gravitation") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Gravitation</h1>
        </div>
        <div className="mech__topics-card">
          {Gravitation_list.map((data) => (
            <React.Fragment key={data.topic}>
              <a
                href={`/classicalmechanics/calc/gravitation/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Calculator__main">
        <div className="Calculator__header">
          <h1>{details.topic}:</h1>
        </div>
        <div className="Calculator__image">
          <img src={details.image} rounded="true" alt={details.topic} />
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
}

export default Calculator;
