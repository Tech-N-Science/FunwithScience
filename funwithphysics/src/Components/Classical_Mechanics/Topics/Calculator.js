import React, { useState } from "react";
import "./Calculator.css";
import Topics from "../topics_data";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import "../classicalMechanics.css";
import WPE_list from "../wpe_data";
import shm_list from "../shm_data";
import rotation_list from "../rotation_data";
import Gravitation_list from "../gravitation_data";
import MOI_list from "../moi_data";
import fluid_list from "../fluidmechanics_data";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet"

function Calculator({ match }) {
  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];
  
  // Projectile Motion Calculator
  const CalculatorProjectileMotion=()=>{

    const [choice, setChoice] = useState("range")
    const [velocity, setVelocity] = useState(null)
    const [angle, setAngle] = useState(null)
    const [result, setResult] = useState(null)
    const reset =()=>{
      setVelocity(null)
      setAngle(null)
      setResult(null)

    }

    const handleChange=(e)=>{
      setChoice(e.target.value)
      reset();
    }
    const calcResult=()=>{
      let res;
      if(choice === "range"){
        res=(2 * velocity * velocity * Math.sin(angle*Math.PI/180) * Math.cos(angle*Math.PI/180))/9.8
      }
      else if(choice === "time"){
        res=(2 * velocity * Math.sin(angle*Math.PI/180))/9.8
      }
      else if (choice === "max-height"){
        res=(velocity * velocity * Math.sin(angle*Math.PI/180) * Math.sin(angle*Math.PI/180))/19.6
      }
      setResult(res)

    }
    const choiceData=()=>{
      if (choice === "range")
      return{
        name:"Range",
        mainunit:"m",
        quantities:["Initial Velocity (u)","Angle (θ)"],
        setters:[setVelocity,setAngle],
        getters:[velocity,angle]

      }
      else if(choice === "time")
      return{
        name:"Time",
        mainunit:"s",
        quantities:["Initial Velocity (u)","Angle (θ)"],
        setters:[setVelocity,setAngle],
        getters:[velocity,angle]
      }
      else if(choice === "max-height")
      return{
        name:"Maximum Height",
        mainunit:"m",
        quantities:["Initial Velocity (u)","Angle (θ)"],
        setters:[setVelocity,setAngle],
        getters:[velocity,angle]
      }
    }
    return(
      <>
        <Form>
          <Form.Group className="mb-3" controlId="choice2">
          <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" onChange={(e)=>handleChange(e)}>
              <option value="range">R : Range or Distance</option>
              <option value="time">T : Time of flight</option>
              <option value="max-height">H : Maximum-Height</option>
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
              onChange={(e) =>choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in m/s"}
              value={
                choiceData().getters[0] === null ? "": choiceData().getters[0]
              }
            />
            </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) =>choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={"Enter in degree"}
              value={
                choiceData().getters[1] === null ? "": choiceData().getters[1]
              }
            />
            </Form.Group>
            <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " "+choiceData().mainunit 
              }
            />
          </Form.Group>
        <Button variant="primary" onClick={calcResult}>
          Calculate
        </Button>
        </Form>
        &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
            
</>)
  }

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
                result === null ? "Result" : result + " N or Kg.m/s² "
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
            <Form.Label>Torque (T)</Form.Label>
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

  //Collision Calculator
  function CalculatorCollision() {
    const [massOne, setMassOne] = useState(null);
    const [massTwo, setMassTwo] = useState(null);
    const [initialVelOne, setInitialVelOne] = useState(null);
    const [initialVelTwo, setInitialVelTwo] = useState(null);
    const [finalVelOne, setFinalVelOne] = useState(null);
    const [finalVelTwo, setFinalVelTwo] = useState(null);

    const handleSubmit = () => {
      let result =
        (massOne * initialVelOne +
          massTwo * initialVelTwo -
          massOne * finalVelOne) /
        massTwo;
      setFinalVelTwo(result);
    };
    const handleReset = () => {
      setMassOne(null);
      setMassTwo(null);
      setInitialVelOne(null);
      setInitialVelTwo(null);
      setFinalVelOne(null);
      setFinalVelTwo(null);
    };

    return (
      <>
        <Form>
          {/* Mass  */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Label> Mass One (m1) </Form.Label>
                <Form.Control
                  onChange={(e) => setMassOne(e.target.value)}
                  type="number"
                  placeholder="Enter mass of the first object"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label> Mass Two (m2) </Form.Label>
                <Form.Control
                  onChange={(e) => setMassTwo(e.target.value)}
                  type="number"
                  placeholder="Enter mass of the second object"
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Initial Velocity */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Label> Initial Velocity One (u1) </Form.Label>
                <Form.Control
                  onChange={(e) => setInitialVelOne(e.target.value)}
                  type="number"
                  placeholder="Enter Initial Velocity of the first object"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label> Initial Velocity Two (u2) </Form.Label>
                <Form.Control
                  onChange={(e) => setInitialVelTwo(e.target.value)}
                  type="number"
                  placeholder="Enter Initial Velocity of the second object"
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Final Velocity */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Label> Final Velocity One (v1) </Form.Label>
                <Form.Control
                  onChange={(e) => setFinalVelOne(e.target.value)}
                  type="number"
                  placeholder="Enter Final Velocity of the first object"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label> Final Velocity Two (v2) </Form.Label>
                <Form.Control
                  disabled="true"
                  type="number"
                  placeholder={
                    finalVelTwo === null
                      ? "The Final Velocity of the second object"
                      : finalVelTwo
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Submit Btn */}
          <Button variant="primary" onClick={handleSubmit}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={handleReset} type="reset">
            Reset
          </Button>
        </Form>
      </>
    );
  }

  // Kinematics Calculator
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
      setResult(null);
      setiVelocity(null);
      setfVelocity(null);
      setAcceleration(null);
      setTime(null);
      setDisplacement(null);
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res;
      if (choice === "displacement") {
        res =
          ivelocity * Math.abs(time) +
          (1 / 2) * acceleration * Math.abs(time) * Math.abs(time);
      } else if (choice === "velocity_fin") {
        res = parseFloat(ivelocity) + parseFloat(acceleration * Math.abs(time));
      } else if (choice === "velocity_ini") {
        res = parseFloat(fvelocity) - parseFloat(acceleration * Math.abs(time));
      } else if (choice === "acceleration") {
        res = (fvelocity * fvelocity - ivelocity * ivelocity) / (2 * displacement);
      } else if (choice === "time") {
        res = Math.abs((fvelocity - ivelocity) / acceleration);
      }
      // console.log(res);
      // console.log(time, ivelocity, fvelocity, acceleration, displacement);
      setResult(res);
    };
    function reset() {
      setResult(null);
      setiVelocity(null);
      setfVelocity(null);
      setAcceleration(null);
      setTime(null);
      setDisplacement(null);
    }
    const choiceData = () => {
      if (choice === "displacement")
        return {
          name: "Displacement",
          mainunit: "m",
          quantities: ["Initial Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setiVelocity, setTime, setAcceleration],
          getters: [ivelocity, time, acceleration],
        };
      else if (choice === "time")
        return {
          name: "Time Interval",
          mainunit: "s",
          quantities: ["Initial Velocity", "Final Velocity", "Acceleration"],
          subunits: ["m/s", "m/s", "m/s²"],
          setters: [setiVelocity, setfVelocity, setAcceleration],
          getters: [ivelocity, fvelocity, acceleration],
        };
      else if (choice === "acceleration")
        return {
          name: "Acceleration",
          mainunit: "m/s²",
          quantities: ["Initial Velocity", "Final Velocity", "Displacement"],
          subunits: ["m/s", "m/s", "m"],
          setters: [setiVelocity, setfVelocity, setDisplacement],
          getters: [ivelocity, fvelocity, displacement],
        };
      else if (choice === "velocity_ini")
        return {
          name: "Initial Velocity",
          mainunit: "m/s",
          quantities: ["Final Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setfVelocity, setTime, setAcceleration],
          getters: [fvelocity, time, acceleration],
        };
      else if (choice === "velocity_fin")
        return {
          name: "Final Velocity",
          mainunit: "m/s",
          quantities: ["Initial Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setiVelocity, setTime, setAcceleration],
          getters: [ivelocity, time, acceleration],
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
        <Button variant="dark" onClick={() => reset()} type="reset">
          Reset
        </Button>
      </>
    );
  }

  //Circular Motion Calculator
  function CalculatorCircularMotion() {
    const [result, setResult] = useState(null);
    const [radius, setRadius] = useState(null);
    const [time, setTime] = useState(null);
    const [pi, setPi] = useState(Math.PI);
    const [velocity, setVelocity] = useState(null);
    const [choice, setChoice] = useState("circumference");
    function handleChange(e) {
      console.log(e.target.value);
      setResult(null);
      setRadius(null);
      setTime(null);
      setVelocity(null);
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res;
      if (choice === "circumference") res = 2 * Math.PI * radius;
      else if (choice === "velocity") {
        res = parseFloat(2 * Math.PI * radius) / parseFloat(time);
      } else if (choice === "time")
        res = parseFloat(2 * Math.PI * radius) / parseFloat(velocity);
      else if (choice === "rad") {
        let x = (velocity * velocity);
        res = x / radius;
      } else if (choice === "omega") {
        res = (2 * Math.PI) / time;
      }

      setResult(res);
    };
    function reset() {
      setResult(null);
      setRadius(null);
      setTime(null);
     setVelocity(null);
    
    }
    const choiceData = () => {
      if (choice === "circumference")
        return {
          name: "Circumference",
          mainunit: "m",
          quantities: ["Radius", "Pi"],
          subunits: ["m", "NaN"],
          setters: [setRadius, setPi],
          getters: [radius, pi],
          disable: true,
        };
      else if (choice === "velocity") {
        return {
          name: "Velocity",
          mainunit: "m/s",
          quantities: ["Radius", "Time"],
          subunits: ["m", "s"],
          setters: [setRadius, setTime],
          getters: [radius, time],
        };
      } else if (choice === "time") {
        return {
          name: "Time",
          mainunit: "s",
          quantities: ["Radius", "Velocity"],
          subunits: ["m", "m/s"],
          setters: [setRadius, setVelocity],
          getters: [radius, velocity],
        };
      } else if (choice === "rad") {
        return {
          name: "Radial Acceleration",
          mainunit: "m",
          quantities: ["Velocity", "Radius"],
          subunits: ["m/s", "m"],
          setters: [setVelocity, setRadius],
          getters: [velocity, radius],
        };
      } else if (choice === "omega") {
        return {
          name: "Angular Velocity",
          mainunit: "rad/s",
          quantities: ["Time", "Pi"],
          subunits: ["s", "NaN"],
          setters: [setTime, setPi],
          getters: [time, pi],
          disable: true,
        };
      }
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" onChange={(e) => handleChange(e)}>
              <option value="circumference">
                C : Circumference of Circular Path
              </option>
              <option value="velocity">V : Velocity of Rotation</option>
              <option value="time">T : Time Period of Rotation</option>
              <option value="rad">aᵣₐ : Radial Acceleration </option>
              <option value="omega">ω : Angular Velocity </option>
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
              placeholder={
                choiceData().subunits[1] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[1]
              }
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
              disabled={choiceData().disable}
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
        <Button variant="dark" onClick={() => reset()} type="reset">
          Reset
        </Button>
      </>
    );
  }

  //Stress and Strain
  function Stress_Strain_calc() {
    const [result, setResult] = useState(null);
    const [options, setOptions] = useState("stress");
    const [force, setForce] = useState(null)
    const [area, setArea] = useState(null)
    const [delX, setDelX] = useState(null)
    const [x, setX] = useState(null)

    function handleChange(e) {
      console.log(e.target.value);
      setOptions(e.target.value);
    }
    const calcResult = () => {
      let res;
      if (options === "stress")
        res = force / area;
      else if (options === "strain")
        res = delX / x;

      setResult(res);
    };

    function reset() {
      setResult(null);
      setForce(null);
      setArea(null);
      setDelX(null);
      setX(null);
    }
    const choiceData = () => {
      if (options === "stress")
        return {
          name: "Stress",
          mainunit: "Pascal(Pa)",
          quantities: ["Force", "Area"],
          subunits: ["F", "M^2"],
          setters: [setForce, setArea],
          getters: [force, area],
        };
      else if (options === "strain") {
        return {
          name: "Strain",
          mainunit: " ",
          quantities: ["Delta X", "X"],
          subunits: ["m or m^2 or m^3", "m or m^2 or m^3"],
          setters: [setDelX, setX],
          getters: [delX, x],
        };
      }
    };

    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" onChange={(e) => handleChange(e)}>
              <option value="stress">Stress</option>
              <option value="strain">Strain</option>
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
              placeholder={
                choiceData().subunits[1] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[1]
              }
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
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
        <Button variant="dark" onClick={() => reset()} type="reset">
          Reset
        </Button>
      </>
    );
  }

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
      case "Collision":
        currentCall = CalculatorCollision();
        break;
      case "Kinematics":
        currentCall = CalculatorKinematics();
        break;
      case "Circular Motion":
        currentCall = CalculatorCircularMotion();
        break;
      case "Stress and Strain":
        currentCall = Stress_Strain_calc();
        break;
      case "Projectile Motion":
        currentCall = CalculatorProjectileMotion();
        break;
      default:
        break;
    }
    return currentCall;
  }

  //Moment of inertia
  if (details.topic === "Moment of Inertia") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Moment of Inertia</h1>
        </div>
        <div className="mech__topics-card">
          {MOI_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/moment_of_inertia/${data.topic}`}
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
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Work power energy
  else if (details.topic === "Work Power Energy") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Work Power Energy</h1>
        </div>
        <div className="mech__topics-card">
          {WPE_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/work_power_energy/${data.topic}`}
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
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }


  // Rotational Dynamics
  else if(details.topic === "Rotational Dynamics"){
     return(
      <div className="mech__main">
      <div className="mech__header">
        <h1>Rotational Dynamics</h1>
      </div>
      <div className="mech__topics-card">
        {rotation_list.map((data) => (
          <React.Fragment key={data.topic}>
            <Link
              to={`/classicalmechanics/calc/rotation/${data.topic}`}
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
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
     );
  }

  // Simple Harmonic Motion
  else if (details.topic === "Simple Harmonic Motion") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Simple Harmonic Motion</h1>
        </div>
        <div className="mech__topics-card">
          {shm_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/shm/${data.topic}`}
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
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Fluid Mechanics 
  else if (details.topic === "Fluid Mechanics") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Fluid Mechanics</h1>
        </div>
        <div className="mech__topics-card">
          {fluid_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/fluid_mechanics/${data.topic}`}
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
              </Link>
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
              <Link
                to={`/classicalmechanics/calc/gravitation/${data.topic}`}
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
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <>
      
      <div className="Calculator__main">
      <Helmet>
          <title>{details.topic}</title>
          <meta name="description" content={details.details} data-react-helmet="true"/>
          <meta name="keywords" content="Classical Mechanics, calculator, physics, Tech n science, technscience, tech and science"/>
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
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
        <div className="Calculator__calc">
          <h3>{details.topic} Calculator</h3>
          <hr />
          {calC(details.topic)}
        </div>
      </div>
      </>
    );
  }
}

export default Calculator;