import React, { useState } from 'react'
import './Calculator.css'
import Topics from '../topics_data'
import { Form, Card, Button, Row, Col } from 'react-bootstrap'
import '../classicalMechanics.css'
import WPE_list from "../wpe_data";
import Gravitation_list from "../gravitation_data";

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
                <Button variant="dark" onClick={() => setResult(null)} type="reset">
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }

    // Force Calculator
    function CalculatorForce() {
        const [result, setResult] = useState(null)
        const [mass, setMass] = useState(null)
        const [acceleration, setAcce] = useState(null)

        const handleClick = () => {
            let res = mass * acceleration;
            setResult(res)
        }

        return <React.Fragment>
            <Form>


                <Form.Group className="mb-3" controlId="mass">
                    <Form.Label> Mass (in Kg)</Form.Label>
                    <Form.Control onChange={(e) => setMass(e.target.value)} type="number" placeholder="Enter mass of an object in kilograms" />
                </Form.Group>
                <Form.Label> Acceleration (in m/s²)</Form.Label>
                <Form.Group className="mb-3" controlId="acceleration">
                    <Form.Control onChange={(e) => setAcce(e.target.value)} type="number" placeholder="Enter acceleration in metre per second square [m/s²]" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="momentum">
                    <Form.Label>Force (F)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " N or Kg.m.s² "} />
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


    // Friction Calculator
    function CalculatorFriction() {
        const [result, setResult] = useState(null)
        const [force, setForce] = useState(null)
        const [coeff, setCoeff] = useState(null)

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
                <Button variant="dark" onClick={() => setResult(null)} type="reset">
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }

    // Gravitation Calculator
    /*function CalculatorGravitation() {
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
                <Button variant="dark" onClick={() => setResult(null)} type="reset" >
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }*/

    // Error Measurement Calculator
    function CalculatorErrorMeasurement() {
        const [absolute, setResultAbs] = useState(null)
        const [relative, setResultRel] = useState(null)
        const [percentage, setResultPer] = useState(null)
        const [x_measured, setXM] = useState(null)
        const [x_actual, setXA] = useState(null)

        const handleClick = () => {
            let res_abs = Math.abs(x_measured - x_actual);
            let res_rel = res_abs / x_actual;
            let res_per = res_rel * 100;
            setResultAbs(res_abs);
            setResultRel(res_rel);
            setResultPer(res_per);
        }
        return <React.Fragment>
            <Form>

                <Form.Group className="mb-3" controlId="x_measured">
                    <Form.Label>X Measured (XM)</Form.Label>
                    <Form.Control onChange={(e) => setXM(e.target.value)} type="number" placeholder="Enter Measured Value" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="x_actual">
                    <Form.Label>X Actual (XA)</Form.Label>
                    <Form.Control onChange={(e) => setXA(e.target.value)} type="number" placeholder="Enter Actual Value" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="absolute">
                    <Form.Label>Absolute Error (EA)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={absolute === null ? "Result" : absolute} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="relative">
                    <Form.Label>Relative Error (ER)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={relative === null ? "Result" : relative} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="percentage">
                    <Form.Label>Percentage Error (ER)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={percentage === null ? "Result" : percentage} />
                    <Form.Text className="text-muted">
                        Enter measured and actual values to calculate result .
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleClick}>
                    Calculate
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="dark" onClick={() => { setResultAbs(null); setResultPer(null); setResultRel(null); }} type="reset">
                    Reset
                </Button>
            </Form>
        </React.Fragment>
    }

    //Torque Calculator
    function CalculatorTorque() {
        const [result, setResult] = useState(null)
        const [force, setForce] = useState(null)
        const [distance, setDist] = useState(null)
        const [angle, setAngle] = useState(null)

        const handleClick = () => {
            let res = force * distance * Math.sin(angle * Math.PI / 180);;
            setResult(res)
        }

        return <React.Fragment>
            <Form>


                <Form.Group className="mb-3" controlId="force">
                    <Form.Label> Force (in Newton)</Form.Label>
                    <Form.Control onChange={(e) => setForce(e.target.value)} type="number" placeholder="Enter force applied" />
                </Form.Group>
                <Form.Label> Distance (in meter)</Form.Label>
                <Form.Group className="mb-3" controlId="distance">
                    <Form.Control onChange={(e) => setDist(e.target.value)} type="number" placeholder="Enter distance covered" />
                </Form.Group>
                <Form.Label> Angle (in degree)</Form.Label>
                <Form.Group className="mb-3" controlId="angle">
                    <Form.Control onChange={(e) => setAngle(e.target.value)} type="number" placeholder="Enter angle (sin θ)" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="torque">
                    <Form.Label>Force (F)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " N.m "} />
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

    //Collision Calculator 
    function CalculatorCollision() {
        const [massOne, setMassOne] = useState(null);
        const [massTwo, setMassTwo] = useState(null);
        const [initialVelOne, setInitialVelOne] = useState(null);
        const [initialVelTwo, setInitialVelTwo] = useState(null);
        const [finalVelOne, setFinalVelOne] = useState(null);
        const [finalVelTwo, setFinalVelTwo] = useState(null);

        const handleSubmit = () => {
            let result = ((massOne * initialVelOne + massTwo * initialVelTwo - massOne * finalVelOne) / massTwo);
            setFinalVelTwo(result);
        }
        const handleReset = () => {
            setMassOne(null);
            setMassTwo(null);
            setInitialVelOne(null);
            setInitialVelTwo(null);
            setFinalVelOne(null);
            setFinalVelTwo(null);
        }

        return <>
            <Form>
                {/* Mass  */}
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label> Mass One (m1) </Form.Label>
                            <Form.Control onChange={(e) => setMassOne(e.target.value)} type="number" placeholder="Enter mass of the first object" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label> Mass Two (m2) </Form.Label>
                            <Form.Control onChange={(e) => setMassTwo(e.target.value)} type="number" placeholder="Enter mass of the second object" />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Initial Velocity */}
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label> Initial Velocity One (u1) </Form.Label>
                            <Form.Control onChange={(e) => setInitialVelOne(e.target.value)} type="number" placeholder="Enter Initial Velocity of the first object" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label> Initial Velocity Two (u2) </Form.Label>
                            <Form.Control onChange={(e) => setInitialVelTwo(e.target.value)} type="number" placeholder="Enter Initial Velocity of the second object" />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Final Velocity */}
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label> Final Velocity One (v1) </Form.Label>
                            <Form.Control onChange={(e) => setFinalVelOne(e.target.value)} type="number" placeholder="Enter Final Velocity of the first object" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label> Final Velocity Two (v2) </Form.Label>
                            <Form.Control disabled="true" type="number" placeholder={finalVelTwo === null ? "The Final Velocity of the second object" : finalVelTwo} />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Submit Btn */}
                <Button variant="primary" onClick={handleSubmit}>
                    Calculate
                </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="dark" onClick={handleReset} type="reset">
                    Reset
                </Button>
            </Form>
        </>


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
                    {
                        WPE_list.map(data =>
                            <React.Fragment key={data.topic}>
                                <a href={`/classicalmechanics/calc/work_power_energy/${data.topic}`} style={{ textDecoration: "none" }}>
                                    <Card className="a" key={data.topic} style={{ width: '18rem', color: 'black', textAlign: 'center', fontSize: "20px" }}>
                                        <Card.Body >
                                            <div> {data.topic}</div>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </React.Fragment>
                        )
                    }
                </div>
            </div >
        )
    }

    //Gravitation
    else if (details.topic === "Gravitation") {
        return (
            <div className="mech__main">
                <div className="mech__header">
                    <h1>Gravitation</h1>
                </div>
                <div className="mech__topics-card">
                    {
                        Gravitation_list.map(data =>
                            <React.Fragment key={data.topic}>
                                <a href={`/classicalmechanics/calc/gravitation/${data.topic}`} style={{ textDecoration: "none" }}>
                                    <Card className="a" key={data.topic} style={{ width: '18rem', color: 'black', textAlign: 'center', fontSize: "20px" }}>
                                        <Card.Body >
                                            <div> {data.topic}</div>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </React.Fragment>
                        )
                    }
                </div>
            </div >
        )
    }
    else {
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
}

export default Calculator
