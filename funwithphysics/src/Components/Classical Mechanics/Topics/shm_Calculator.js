import React, { useState } from 'react'
import './Calculator.css'
import { Form, Button } from 'react-bootstrap'
import "../classicalMechanics.css";
import shm_list from "../shm_data";

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
        // l = v/f
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
                    quantities: ["Frequency"],
                    subunits: ["Hz"],
                    setters: [setFreq],
                    getters: [freq],
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
            // console.log(velocity + " " + freq + " " + res)
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
                        disable={choice_data().getters[1] !== null ? true : false}
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
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="dark" onClick={() => setResult(null)} type="reset">
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }

    // Oscillation Calculator
    function CalculatorOscillation() {
        const [result, setResult] = useState(null)
        const [workdone, setworkdone] = useState(null)
        const [time, settime] = useState(null)

        const handleClick = () => {
            let res = workdone * time;
            setResult(res)
        }

        return <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="workdone">
                    <Form.Label> Work Done (in Joules)</Form.Label>
                    <Form.Control onChange={(e) => setworkdone(e.target.value)} type="number" placeholder="Enter work done in joules" />
                </Form.Group>
                <Form.Label> Time Taken (in sec)</Form.Label>
                <Form.Group className="mb-3" controlId="time">
                    <Form.Control onChange={(e) => settime(e.target.value)} type="number" placeholder="Enter time taken in seconds" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="power">
                    <Form.Label>Power (P)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " W "} />
                    <Form.Text className="text-muted">
                        Enter the above values to Calculate.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleClick}>
                    Calculate
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="dark" onClick={() => setResult(null)} type="reset">
                    Reset
                </Button>
            </Form>
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
                {
                    calC(details.topic)
                }
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
    )
}


export default shm_Calculator
