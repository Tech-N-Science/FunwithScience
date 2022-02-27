import React, { useState } from "react";
import '../../PysicsStyles/physicscalculator.css'
import { Form, Button, Modal } from "react-bootstrap";

import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";
import Solution from "../../Solution/Solution";
import { SI } from "../../Solution/allSIUnits";

function ShmCalculator() {
  let { topic } = useParams();
  // shm_list
  const shm_list = [
    {
      topic: "Waves",
      details: `Waves can be described as a dynamic disturbance of one or more than one quantities, which propagates through a medium.`,
      formula: "λ = v/f",
      process:
        "λ is the wavelength here, v is the wave velocity, f is the frequency of the Wave Length.",
      siunit: "Wave Length: m, Frequency: 1/s, Time: s, velocity: m/s",
      dimension: "Wave Length: L, Frequency: 1/T, Time: T, velocity: L/T",
    },
    {
      topic: "Oscillation",
      details: `
                Oscillation is a periodic motion, it's known as the repetitive variation of a quantity in magnitude or position.
                for example: a moving spring-mass system or a pendulum. 
            `,
      formula: [
        "x = A sin(ωt + Φ)",
        <br />,
        "T=2π√(l/g)",
        <br />,
        "T=2π√(m/k)",
      ],
      process:
        "The first formula is a general formula, for calculating the displacement for a simple harmonic motion (here A is the amplitude and (ωt + Φ) is the phase, Φ being the initial phase), second one is for the simple pendulum (l = length of the pendulum). Third one is for a spring-mass system where, m is mass and k is the spring constant of the spring.",
      siunit: "Wave Length: m, Time period: s",
      dimension: "Wave Length: L, Time period: T",
    },
  ];

  const page = shm_list.filter((data) => data.topic === topic);
  const details = page[0];

  // Wave Calculator
  function CalculatorWave() {
    const [result, setResult] = useState(null);
    const [wave_length, setWave_length] = useState(null);
    const [velocity, setVelocity] = useState(null);
    const [freq, setFreq] = useState(null);
    const [choice, setChoice] = useState("Wave Length");
    const [plank, setPlank] = useState(6.62607015 * Math.pow(10, -34));
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    
    const handle_reset = () => {
      setResult(null);
      setWave_length(null);
      setVelocity(null);
      setFreq(null);
      setShowSolution(false);
    };

    const choice_data = () => {
      if (choice === "Wave Length")
        return {
          name: "Wave Length",
          mainunit: "m",
          quantities: ["Wave Velocity", "Frequency"],
          subunits: ["m/s", "Hz"],
          setters: [setVelocity, setFreq],
          getters: [velocity, freq],
          formula: "v / f",
          insertValues : `${velocity}${SI["Wave Velocity"]} / ${freq}${SI["frequency"]}`,
          givenValues : {
              velocity: velocity,
              frequency: freq,
          },
        };
      else if (choice === "frequency")
        return {
          name: "frequency",
          mainunit: "Hz",
          quantities: ["Wave Length", "Wave Velocity"],
          subunits: ["m", "m/s"],
          setters: [setWave_length, setVelocity],
          getters: [wave_length, velocity],
          formula: "v / λ",
          insertValues : `${velocity}${SI["Wave Velocity"]} / ${wave_length}${SI["Wave Length"]}`,
          givenValues : {
              velocity: velocity,
              wavelength: wave_length,
          },
        };
      else if (choice === "time period")
        return {
          name: "time period",
          mainunit: "s",
          quantities: ["Frequency"],
          subunits: ["Hz"],
          setters: [setFreq],
          getters: [freq],
          formula: "1 / f",
          insertValues : `1 / ${freq}${SI["frequency"]}`,
          givenValues : {
            frequency: freq,
          },
        };
      else if (choice === "velocity")
        return {
          name: "Initial Velocity",
          mainunit: "m/s",
          quantities: ["Wave Length", "Frequency"],
          subunits: ["m", "Hz"],
          setters: [setWave_length, setFreq],
          getters: [wave_length, freq],
          formula: "λ * f",
        };
      else if (choice === "energy")
        return {
          name: "Energy",
          mainunit: "Joule",
          quantities: ["Frequency", "Plank's constant"],
          subunits: ["Hz", "m² kg / s"],
          setters: [setFreq, setPlank],
          getters: [freq, plank],
          formula: "6.62607015 x 10^-34 * f",
        };
    };

    const givenValues = choice_data().givenValues;
    const insertValues = choice_data().insertValues;

    const handleClick = () => {
        let res;
        switch (choice) {
          case "Wave Length":            
            if(velocity !== null && freq !== null){
              res = velocity / freq;
              setShowSolution(true);
            }            
            else {
              setShowModal(true);
              return;
            }  
            break;
          case "frequency":
            if(velocity !== null && wave_length !== null){
              res = velocity / wave_length;
              setShowSolution(true);
            }            
            else {
              setShowModal(true);
              return;
            }
            break;
          case "time period":
            if(freq !== null){
              res = 1 / freq;
              setShowSolution(true);
            }            
            else {
              setShowModal(true);
              return;
            }
            break;
          case "velocity":
            if(wave_length !== null && freq !== null){
              res = wave_length * freq;
              setShowSolution(true);
            }            
            else {
              setShowModal(true);
              return;
            }
            break;
          case "energy":
            if(freq !== null){
              res = 6.62607015 * Math.pow(10, -34) * freq;
              setShowSolution(true);
            }            
            else {
              setShowModal(true);
              return;
            }            
            break;
          default:
            break;
        }
        setResult(res);
    };

    return (
      <React.Fragment>
        {/* <Navbar/> */}
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
              onChange={(e) => setChoice(e.target.value)}
            >
              <option value="Wave Length">λ : Wave Length</option>
              <option value="frequency">f : frequency </option>
              <option value="velocity">v : wave velocity</option>
              <option value="energy"> e: energy </option>
              <option value="time period">t: time period</option>
            </Form.Control>
          </Form.Group>

          {/* Inputs */}
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choice_data().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choice_data().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choice_data().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choice_data().subunits[0]}
              value={
                choice_data().getters[0] === null
                  ? ""
                  : choice_data().getters[0]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choice_data().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choice_data().setters[1](e.target.value)}
              type="number"
              placeholder={
                choice_data().getters[1] !== null
                  ? ""
                  : "Enter in " + choice_data().subunits[1]
              }
              value={
                choice_data().getters[1] === null
                  ? ""
                  : choice_data().getters[1]
              }
              readOnly={
                choice_data().getters[1] === undefined ||
                choice_data().getters[1] === plank
                  ? true
                  : false
              }
            />
          </Form.Group>

          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula={choice_data().formula}
                toFind={choice_data().name}
                insertValues={insertValues}
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
                  : result + " " + choice_data().mainunit
              }
            />
          </Form.Group>

          {/* Buttons */}
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            <Button variant="dark" onClick={handle_reset} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  // Oscillation Calculator
  function CalculatorOscillation() {
    const [choiceOsc, setChoiceOsc] = useState("shm");
    const [result, setResult] = useState(null);

    const [omega, setOmega] = useState(null);
    const [time, setTime] = useState(null);
    const [phi, setPhi] = useState(null);
    const [amplitude, setAmplitude] = useState(null);
    const [length, setLength] = useState(null);
    const [mass, setMass] = useState(null);
    const [springConst, setSpringConst] = useState(null);

    const handleClick = () => {
      let res;
      const pi = Math.PI;
      const g = 9.8;
      switch (choiceOsc) {
        case "shm":
          res =
            amplitude *
            Math.sin(
              ((omega * parseFloat(time) + parseFloat(phi)) * Math.PI) / 180
            );
          break;
        case "pendulum":
          res = 2 * pi * Math.sqrt(length / g);
          break;
        case "spring-mass":
          res = 2 * pi * Math.sqrt(mass / springConst);
          break;
        default:
          res = null;
          break;
      }
      setResult(res);
    };

    const handle_reset = () => {
      setResult(null);
      setOmega(null);
      setTime(null);
      setPhi(null);
      setAmplitude(null);
      setLength(null);
      setMass(null);
      setSpringConst(null);
      // setChoiceOsc("shm");
    };

    const choice_data = () => {
      if (choiceOsc === "shm")
        return {
          name: "General Eqn: SHM",
          mainunit: "m",
          quantities: [
            "Amplitude",
            "Angular velocity(ω)",
            "Time",
            "Initial Phase(Φ)",
          ],
          subunits: ["m/s", "rad s^-1", "s", "rad"],
          setters: [setAmplitude, setOmega, setTime, setPhi],
          getters: [amplitude, omega, time, phi],
        };
      else if (choiceOsc === "pendulum")
        return {
          name: "Simple Pendulum",
          mainunit: "sec",
          quantities: ["Length of the pendulum"],
          subunits: ["m"],
          setters: [setLength],
          getters: [length],
        };
      else if (choiceOsc === "spring-mass")
        return {
          name: "Spring-Mass System",
          mainunit: "sec",
          quantities: ["Mass", "Spring Constant"],
          subunits: ["Hz", "N/m"],
          setters: [setMass, setSpringConst],
          getters: [mass, springConst],
        };
    };

    return (
      <React.Fragment>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => setChoiceOsc(e.target.value)}
            >
              <option value="shm">General Equation: SHM</option>
              <option value="pendulum">Simple Pendulum </option>
              <option value="spring-mass">Spring-Mass system</option>
            </Form.Control>
          </Form.Group>

          {/* Inputs */}
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choice_data().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choice_data().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choice_data().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choice_data().subunits[0]}
              value={
                choice_data().getters[0] === null
                  ? ""
                  : choice_data().getters[0]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choice_data().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choice_data().setters[1](e.target.value)}
              type="number"
              placeholder={
                choice_data().getters[1] !== null
                  ? ""
                  : "Enter in " + choice_data().subunits[1]
              }
              value={
                choice_data().getters[1] === null
                  ? ""
                  : choice_data().getters[1]
              }
              readOnly={choice_data().getters[1] === undefined ? true : false}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choice_data().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choice_data().setters[2](e.target.value)}
              type="number"
              placeholder={
                choice_data().getters[2] !== null
                  ? ""
                  : "Enter in " + choice_data().subunits[2]
              }
              value={
                choice_data().getters[2] === null
                  ? ""
                  : choice_data().getters[2]
              }
              readOnly={choice_data().getters[2] === undefined ? true : false}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choice_data().quantities[3]}</Form.Label>
            <Form.Control
              onChange={(e) => choice_data().setters[3](e.target.value)}
              type="number"
              placeholder={
                choice_data().getters[3] !== null
                  ? ""
                  : "Enter in " + choice_data().subunits[3]
              }
              value={
                choice_data().getters[3] === null
                  ? ""
                  : choice_data().getters[3]
              }
              readOnly={choice_data().getters[3] === undefined ? true : false}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choice_data().mainunit
              }
            />
          </Form.Group>
        </Form>
        {/* Buttons */}
        <div className="button-custom-grp">
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          <Button variant="dark" onClick={handle_reset} type="reset">
            Reset
          </Button>
        </div>
      </React.Fragment>
    );
  }

  // Adding Calculators together

  function calC(key) {
    let currentCall;
    switch (key) {
      case "Waves":
        currentCall = CalculatorWave();
        break;
      case "Oscillation":
        currentCall = CalculatorOscillation();
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

export default ShmCalculator;
