import React, { useState } from 'react'
import './Calculator.css'
import { Form, Button } from 'react-bootstrap'
import "../classicalMechanics.css";
import shm_list from "../shm_data";
import {Helmet} from "react-helmet"

function shm_Calculator({ match }) {
    const page = shm_list.filter(data => (data.topic) === (match.params.topic))
    const details = page[0]

    // Wave Calculator
    function CalculatorWave() {
        const [result, setResult] = useState(null)
        const [wave_length, setWave_length] = useState(null)
        const [velocity, setVelocity] = useState(null)
        const [freq, setFreq] = useState(null)
        const [choice, setChoice] = useState("wave length")
        const [plank, setPlank] = useState(6.62607015 * Math.pow(10, -34));

        const handle_reset = () => {
            setResult(null);
            setWave_length(null);
            setVelocity(null);
            setFreq(null);
        }

        const choice_data = () => {
            if (choice === "wave length")
                return {
                    name: "wave length",
                    mainunit: "m",
                    quantities: ["Wave Velocity", "Frequency"],
                    subunits: ["m/s", "Hz"],
                    setters: [setVelocity, setFreq],
                    getters: [velocity, freq],
                };
            else if (choice === "frequency")
                return {
                    name: "frequency",
                    mainunit: "Hz",
                    quantities: ["Wave Length", "Wave Velocity"],
                    subunits: ["m", "m/s"],
                    setters: [setWave_length, setVelocity],
                    getters: [wave_length, velocity],
                };
            else if (choice === "time period")
                return {
                    name: "time period",
                    mainunit: "s",
                    quantities: ["Frequency"],
                    subunits: ["Hz"],
                    setters: [setFreq],
                    getters: [freq],
                };
            else if (choice === "velocity")
                return {
                    name: "Initial Velocity",
                    mainunit: "m/s",
                    quantities: ["Wave Length", "Frequency"],
                    subunits: ["m", "Hz"],
                    setters: [setWave_length, setFreq],
                    getters: [wave_length, freq],
                };
            else if (choice === "energy")
                return {
                    name: "Energy",
                    mainunit: "Joule",
                    quantities: ["Frequency","Plank's constant"],
                    subunits: ["Hz","m² kg / s"],
                    setters: [setFreq, setPlank],
                    getters: [freq,plank],
                    
                };
        };


        const handleClick = () => {
            let res;
            switch (choice) {
                case "wave length":
                    res = velocity / freq;
                    break;
                case "frequency":
                    res = velocity / wave_length;
                    break;
                case "time period":
                    res = 1 / freq;
                    break;
                case "velocity":
                    res = wave_length * freq;
                    break;
                case "energy":
                    res = 6.62607015 * Math.pow(10, -34) * freq;
                    break;
                default:
                    break;
            }
            setResult(res)
        }


        return <React.Fragment>
            <Form>
                {/* dropdown */}
                <Form.Group className="mb-4" controlId="choice">
                    <Form.Label>Select the type of calculation</Form.Label>
                    <Form.Control as="select" onChange={(e) => setChoice(e.target.value)}>
                        <option value="wave length">λ : wave length</option>
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
                        value={choice_data().getters[0] === null ? '' : choice_data().getters[0]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choice_data().quantities[1]}</Form.Label>
                    <Form.Control
                        onChange={(e) => choice_data().setters[1](e.target.value)}
                        type="number"
                        placeholder={choice_data().getters[1] !== null ? '' : "Enter in " + choice_data().subunits[1]}
                        value={choice_data().getters[1] === null ? '' : choice_data().getters[1]}
                        readOnly={choice_data().getters[1] === undefined || choice_data().getters[1] === plank ? true : false}
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

                {/* Buttons */}
                <Button variant="primary" onClick={handleClick}>
                    Calculate
                </Button>
                </Form>
                &nbsp;&nbsp;&nbsp;
                <Button variant="dark" onClick={handle_reset} type="reset">
                    Reset
                </Button>
            
        </React.Fragment>
    }




    // Oscillation Calculator
    function CalculatorOscillation() {
        const [choiceOsc, setChoiceOsc] = useState("shm")
        const [result, setResult] = useState(null)

        const [omega, setOmega] = useState(null)
        const [time, setTime] = useState(null)
        const [phi, setPhi] = useState(null)
        const [amplitude, setAmplitude] = useState(null)
        const [length, setLength] = useState(null)
        const [mass, setMass] = useState(null)
        const [springConst, setSpringConst] = useState(null)

        const handleClick = () => {
            let res;
            const pi = Math.PI;
            const g = 9.8;
            switch (choiceOsc) {
                case "shm":
                    res = amplitude * Math.sin(omega * time + phi)
                    break;
                case "pendulum":
                    res = 2 * pi * Math.sqrt(length / g);
                    break;
                case "spring-mass":
                    res = 2 * pi * Math.sqrt(mass / springConst);;
                    break;
                default:
                    res = null;
                    break;
            }
            setResult(res)
        }

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
        }

        const choice_data = () => {
            if (choiceOsc === "shm")
                return {
                    name: "General Eqn: SHM",
                    mainunit: "m",
                    quantities: ["Amplitude", "Angular velocity(ω)", "Time", "Initial Phase(Φ)"],
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

        return <React.Fragment>
            <Form>
                {/* dropdown */}
                <Form.Group className="mb-4" controlId="choice">
                    <Form.Label>Select the type of calculation</Form.Label>
                    <Form.Control as="select" onChange={(e) => setChoiceOsc(e.target.value)}>
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
                        value={choice_data().getters[0] === null ? '' : choice_data().getters[0]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choice_data().quantities[1]}</Form.Label>
                    <Form.Control
                        onChange={(e) => choice_data().setters[1](e.target.value)}
                        type="number"
                        placeholder={choice_data().getters[1] !== null ? '' : "Enter in " + choice_data().subunits[1]}
                        value={choice_data().getters[1] === null ? '' : choice_data().getters[1]}
                        readOnly={choice_data().getters[1] === undefined ? true : false}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choice_data().quantities[2]}</Form.Label>
                    <Form.Control
                        onChange={(e) => choice_data().setters[2](e.target.value)}
                        type="number"
                        placeholder={choice_data().getters[2] !== null ? '' : "Enter in " + choice_data().subunits[2]}
                        value={choice_data().getters[2] === null ? '' : choice_data().getters[2]}
                        readOnly={choice_data().getters[2] === undefined ? true : false}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choice_data().quantities[3]}</Form.Label>
                    <Form.Control
                        onChange={(e) => choice_data().setters[3](e.target.value)}
                        type="number"
                        placeholder={choice_data().getters[3] !== null ? '' : "Enter in " + choice_data().subunits[3]}
                        value={choice_data().getters[3] === null ? '' : choice_data().getters[3]}
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
            <Button variant="primary" onClick={handleClick}>
                Calculate
            </Button>&nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={handle_reset} type="reset">
                Reset
            </Button>
        </React.Fragment>
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
            <div className="Calculator__calc">
                <h3>{details.topic} Calculator</h3>
                <hr />
                {
                    calC(details.topic)
                }
            </div>
            <div className="Calculator__process">
                <h3> Process</h3>
                <p>{details.process}</p>
            </div>
        </div>
    )
}


export default shm_Calculator
