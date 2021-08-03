import React, { useState } from 'react'
import './Calculator.css'
import Topics from '../topics_data'
import { Form, Button } from 'react-bootstrap'

function Calculator({ match }) {
    const page = Topics.filter(data => (data.topic) === (match.params.topic))
    const details = page[0]
    console.log(page)
    console.log(details.formula)

    // Momentum Calculator
    function CalculatorMomentum() {
        const [result, setResult] = useState(null)
        const [mass, setMass] = useState(null)
        const [vel, setVel] = useState(null)

        const handleClick = () => {
            let res = mass * vel;
            setResult(res)
        }
        return <React.Fragment>
            <Form>

                <Form.Group className="mb-3" controlId="mass">
                    <Form.Label>Mass (M)</Form.Label>
                    <Form.Control onChange={(e) => setMass(e.target.value)} type="number" placeholder="Enter Mass in SI unit" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="velocity">
                    <Form.Label>Velocity (V)</Form.Label>
                    <Form.Control onChange={(e) => setVel(e.target.value)} type="number" placeholder="Enter Velocity in SI unit" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="momentum">
                    <Form.Label>Momentum (P)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " kg.m/s"} />
                    <Form.Text className="text-muted">
                        Enter Mass & Velocity to Calculate the Momentum.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleClick}>
                    Calculate
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="dark" type="reset">
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }

    // Friction Calculator
    function CalculatorFriction() {
        const [result, setResult] = useState(null)
        const [force, setForce] = useState(null)
        const [coeff, setCoeff] = useState(null)

        function Cos(Deg) {
            return Math.cos(Deg * Math.PI / 180);
        }

        const handleClick = () => {
            let res = force * coeff;
            setResult(res)
        }
       
        return <React.Fragment>
            <Form>

               
                <Form.Group className="mb-3" controlId="force">
                    <Form.Label> Force applied (N)</Form.Label>
                    <Form.Control onChange={(e) => setForce(e.target.value)} type="number" placeholder="Enter Force applied" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="coeff">
                    <Form.Label> coefficient of Friction (μ)</Form.Label>
                    <Form.Control onChange={(e) => setCoeff(e.target.value)} type="number" placeholder="Enter coefficient of Friction (μ)" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="momentum">
                    <Form.Label>Frictional Force (F)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " N"} />
                    <Form.Text className="text-muted">
                        Enter the above values to Calculate.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleClick}>
                    Calculate
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="dark" type="reset">
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }

    // Gravitation Calculator
    function CalculatorGravitation() {
        const [result, setResult] = useState(null)
        const [mass_A, setMassA] = useState(null)
        const [mass_B, setMassB] = useState(null)
        const [distance, setDistance] = useState(null)

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
                <Button variant="dark" type="reset">
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }

    // Adding Calculators together
    

    function calC(key) {
        let currentCall;
        switch (key) {
            case "Momentum":
                currentCall = CalculatorMomentum();
                break;
            case "Friction":
                currentCall = CalculatorFriction();
                break;
            case "Gravitation":
                currentCall = CalculatorGravitation();
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
        </div>
    )
}

export default Calculator
