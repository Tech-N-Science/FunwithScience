import React, { useState } from 'react'
import './Calculator.css'
import { Form, Button } from 'react-bootstrap'
import '../classicalMechanics.css'
import fluid_list from "../fluidmechanics_data";

function FluidCalculator({ match }) {
    const page = fluid_list.filter(data => (data.topic) === (match.params.topic))
    const details = page[0]
    console.log(page)
    console.log(details.formula)

    // Density Calculator
    function CalculatorDensity() {
        const [result, setResult] = useState(null)
        const [mass, setMass] = useState(null)
        const [vol, setVol] = useState(null)

        const handleClick = () => {
            let res = mass / vol;
            setResult(res)
        }
       
        return <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="mass">
                    <Form.Label> Mass (in kgs)</Form.Label>
                    <Form.Control onChange={(e) => setMass(e.target.value)} type="number" placeholder="Enter mass of the object" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="volume">
                    <Form.Label> Volume (in m^3)</Form.Label>
                    <Form.Control onChange={(e) => setVol(e.target.value)} type="number" placeholder="Enter volume of the object" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="density">
                    <Form.Label>Density</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " kg m^-3 "} />
                    <Form.Text className="text-muted">
                        Enter the above values to calculate.
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

    // Pressure Calculator
    function CalculatorPressure() {
        const [result, setResult] = useState(null)
        const [force, setForce] = useState(null)
        const [area, setArea] = useState(null)

        const handleClick = () => {
            let res = force / area;
            setResult(res)
        }
   
        return <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="force">
                    <Form.Label> Force (in newtons)</Form.Label>
                    <Form.Control onChange={(e) => setForce(e.target.value)} type="number" placeholder="Enter the force applied on the object" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="area">
                    <Form.Label> Area (in m^2)</Form.Label>
                    <Form.Control onChange={(e) => setArea(e.target.value)} type="number" placeholder="Enter area of the object" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pressure">
                    <Form.Label>Pressure</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " pascal "} />
                    <Form.Text className="text-muted">
                        Enter the above values to calculate.
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

    // Volume flow rate calculator
    function CalculatorVolumeflowrate() {
        const [result, setResult] = useState(null)
        const [area, setArea] = useState(null)
        const [velocity, setVelocity] = useState(null)

        const handleClick = () => {
            let res = area * velocity;
            setResult(res)
        }
   
        return <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="area">
                    <Form.Label> Area (in m^2)</Form.Label>
                    <Form.Control onChange={(e) => setArea(e.target.value)} type="number" placeholder="Enter the cross-sectional area of object" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="velocity">
                    <Form.Label> Velocity (in m/s)</Form.Label>
                    <Form.Control onChange={(e) => setVelocity(e.target.value)} type="number" placeholder="Enter the velocity of fluid at a point" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="volumeflowrate">
                    <Form.Label>Volume flow rate</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " m^3/s "} />
                    <Form.Text className="text-muted">
                        Enter the above values to calculate.
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

    // Viscosity calculator
    function CalculatorViscosity() {
        const [result, setResult] = useState(null)
        const [force, setForce] = useState(null)
        const [area, setArea] = useState(null)
        const [rateofdeformation, setRateofdeformation] = useState(null)

        const handleClick = () => {
            let res = force * area * rateofdeformation;
            setResult(res)
        }
   
        return <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="force">
                    <Form.Label> Force (in newtons)</Form.Label>
                    <Form.Control onChange={(e) => setForce(e.target.value)} type="number" placeholder="Enter the force" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="area">
                    <Form.Label> Area (in m^2)</Form.Label>
                    <Form.Control onChange={(e) => setArea(e.target.value)} type="number" placeholder="Enter area of each plate" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rateofdeformation">
                    <Form.Label> Rate of deformation (u/y)</Form.Label>
                    <Form.Control onChange={(e) => setRateofdeformation(e.target.value)} type="number" placeholder="Enter rate of shear deformation" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pressure">
                    <Form.Label>Viscosity</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " pascal-second "} />
                    <Form.Text className="text-muted">
                        Enter the above values to calculate.
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

    // Poiseuille's law calculator
    function CalculatorPoiseuillelaw() {
        const [result, setResult] = useState(null)
        const [viscosity, setViscosity] = useState(null)
        const [length, setLength] = useState(null)
        const [flow, setFlow] = useState(null)
        const [radius, setRadius] = useState(null)

        const handleClick = () => {
            let res = (8*viscosity*length*flow)/(Math.PI*Math.pow(radius, 4)) ;
            setResult(res)
        }
   
        return <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="viscosity">
                    <Form.Label> Viscosity (in pascal-second)</Form.Label>
                    <Form.Control onChange={(e) => setViscosity(e.target.value)} type="number" placeholder="Enter viscosity of the fluid" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="length">
                    <Form.Label> Length (in meters)</Form.Label>
                    <Form.Control onChange={(e) => setLength(e.target.value)} type="number" placeholder="Enter length of the pipe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="flow">
                    <Form.Label> Volumetric flow rate (in m^3/s)</Form.Label>
                    <Form.Control onChange={(e) => setFlow(e.target.value)} type="number" placeholder="Enter flow rate of the fluid" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="radius">
                    <Form.Label> Radius (in m)</Form.Label>
                    <Form.Control onChange={(e) => setRadius(e.target.value)} type="number" placeholder="Enter radius of the pipe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pressure">
                    <Form.Label>Pressure Difference</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " pascal "} />
                    <Form.Text className="text-muted">
                        Enter the above values to calculate.
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
            case "Density":
                currentCall = CalculatorDensity();
                break;
            case "Pressure":
                currentCall = CalculatorPressure();
                break;
            case "Volume flow rate":
                currentCall = CalculatorVolumeflowrate();
                break;
            // case "Continuity equation":
            //    currentCall = CalculatorContinuityequation();
            //    break;
            case "Viscosity":
                currentCall = CalculatorViscosity();
                break;
            case "Poiseuille's law":
                currentCall = CalculatorPoiseuillelaw();
                break;
            // case "Bernoulli's equation":
            //    currentCall = CalculatorBernoulliequation();
            //    break;
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
    )
}

export default FluidCalculator