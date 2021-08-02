import React, { useState } from 'react'
import './Momentum_Calc.css'
import Topics from '../topics_data'
import { Form, Button } from 'react-bootstrap'

const topic = Topics.filter(data => data.topic === "Momentum")
const details = topic[0]

const Calculator = () => {
    const [result, setResult] = useState(null)
    const [mass, setMass] = useState(null)
    const [vel, setVel] = useState(null)

    const handleClick = () => {
        let res = mass * vel;
        setResult(res)
        // alert(`${res}  ${mass} ${vel}`)
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

function Momentum_Calc() {
    return (
        <div className="momentumCalc__main">
            <div className="momentumCalc__header">
                <h1>{details.topic}:</h1>
            </div>
            <div className="momentumCalc__image">
                <img src={details.image} rounded="true" alt={details.topic} />
            </div>
            <div className="momentumCalc__details">
                <p>{details.details}</p>
            </div>
            <div className="momentumCalc__formula-text">
                <h3>Working Formula:</h3>
            </div>
            <div className="momentumCalc__formula">
                <h3>{details.formula}</h3>
            </div>
            <div className="momentumCalc__calc">
                <h3>{details.topic} Calculator</h3>
                <hr />
                <Calculator />
            </div>
            <div className="momentumCalc__process">
                <h3> Process</h3>
                <p>{details.process}</p>
            </div>
        </div>
    )
}

export default Momentum_Calc
