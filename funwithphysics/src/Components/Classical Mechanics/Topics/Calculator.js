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
            </Form>
        </React.Fragment>
    }

    // Friction Calculator
    function CalculatorFriction() {
        const [result, setResult] = useState(null)
        const [mass, setMass] = useState(null)
        const [theta, setTheta] = useState(null)
        const [coeff, setCoeff] = useState(null)

        function Cos(Deg) {
            return Math.cos(Deg * Math.PI / 180);
        }

        const handleClick = () => {
            let res = mass * 9.8 * Cos(theta) * coeff;
            setResult(res)
        }
        return <React.Fragment>
            <Form>

                <Form.Group className="mb-3" controlId="mass">
                    <Form.Label>Mass (M)</Form.Label>
                    <Form.Control onChange={(e) => setMass(e.target.value)} type="number" placeholder="Enter Mass in SI unit" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="theta">
                    <Form.Label> Inclination Angle (θ)</Form.Label>
                    <Form.Control onChange={(e) => setTheta(e.target.value)} type="number" placeholder="Enter Inclination Angle in degrees" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="coeff">
                    <Form.Label> coefficient of Friction (μ)</Form.Label>
                    <Form.Control onChange={(e) => setCoeff(e.target.value)} type="number" placeholder="Enter coefficient of Friction (μ)" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="momentum">
                    <Form.Label>Frictional Force (P)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " N"} />
                    <Form.Text className="text-muted">
                        Enter the above values to Calculate.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleClick}>
                    Calculate
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
