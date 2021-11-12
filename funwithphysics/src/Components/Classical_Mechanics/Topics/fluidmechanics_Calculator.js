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

    // Continuity Equation calculator
    function CalculatorContinuityequation() {
        const [result, setResult] = useState(null)
        const [area1, setArea1] = useState(null)
        const [area2, setArea2] = useState(null)
        const [velocity1, setVelocity1] = useState(null)
        const [velocity2, setVelocity2] = useState(null)
        const [choice, setChoice] = useState("area");

        function handleChange(e) {
            console.log(e.target.value);
            setResult(null);
            setArea1(null);
            setArea2(null);
            setVelocity1(null);
            setVelocity2(null);
            setChoice(e.target.value);
            choiceData();
        }

        const calcResult = () => {
            let res;
            if (choice === "area"){
                res = (area1 * velocity1) / velocity2
                console.log(res)
            }
            else if (choice === "velocity"){
                res = (area1 * velocity1) / area2
                console.log(res)
            }
            console.log(res)
            setResult(res);
        }

        function reset() {
            setResult(null)
        }

        const choiceData = () => {
            if (choice === "area")
              return {
                name: "Area",
                mainunit: "m^2",
                quantities: ["Area 1", "Velocity 1", "Velocity 2"],
                subunits: ["m^2", "m/s", "m/s"],
                setters: [setArea2, setVelocity1, setVelocity2],
                getters: [area2, velocity1, velocity2],
            }
            else if (choice === "velocity")
                return {
                name: "Velocity",
                mainunit: "m/s",
                quantities: ["Area 1", "Velocity 1", "Area 2"],
                subunits: ["m^2", "m/s", "m^2"],
                setters: [setArea1, setVelocity1, setArea2],
                getters: [area1, velocity1, area2],
            }
        }

        return <>
            <Form>
                {/* dropdown */}
                <Form.Group className="mb-4" controlId="choice">
                    <Form.Label>Select the type of calculation</Form.Label>
                    <Form.Control as="select" onChange={(e) => handleChange(e)}>
                    <option value="area">Area</option>
                    <option value="velocity">Velocity</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-4" controlId="text">
                    <Form.Text className="text">
                    <strong>
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
                    value={choiceData().getters[0]===null?'':choiceData().getters[0]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[1]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[1](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[1]}
                    value={choiceData().getters[1]===null?'':choiceData().getters[1]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[2]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[2](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[2]}
                    value={choiceData().getters[2]===null?'':choiceData().getters[2]}
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
    }

    // Viscosity calculator
    function CalculatorViscosity() {
        const [result, setResult] = useState(null)
        const [force, setForce] = useState(null)
        const [area, setArea] = useState(null)
        const [rateofdeformation, setRateofdeformation] = useState(null)

        const handleClick = () => {
            let res = (force / area) / rateofdeformation;
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
        const [flowrate, setFlowrate] = useState(null)
        const [radius, setRadius] = useState(null)
        const [pressurediff, setPressurediff] = useState(null)
        const [choice, setChoice] = useState("pressure")

        function handleChange(e) {
            console.log(e.target.value);
            setResult(null);
            setViscosity(null);
            setLength(null);
            setFlowrate(null);
            setRadius(null);
            setPressurediff(null);
            setChoice(e.target.value);
            choiceData();
        }

        const calcResult = () => {
            let res
            if (choice === "pressure"){
                res = (8*viscosity*length*flowrate) / (Math.PI * Math.pow(radius, 4))
            }
            else if (choice === "flowrate"){
                res = (pressurediff * Math.PI * Math.pow(radius, 4)) / (8*viscosity*length)
            }
            setResult(res)
        }

        function reset() {
            setResult(null)
        }
   
        const choiceData = () => {
            if (choice === "pressure")
              return {
                name: "Pressure",
                mainunit: "pascal",
                quantities: ["Viscosity of fluid", "Length of pipe", "Flow rate of fluid", "Radius of the pipe"],
                subunits: ["pascal-second", "m", "m^3/s", "m"],
                setters: [setViscosity, setLength, setFlowrate, setRadius],
                getters: [viscosity, length, flowrate, radius],
            }
            else if (choice === "flowrate")
                return {
                name: "Volumetric flow Rate",
                mainunit: "m^3/s",
                quantities: ["Viscosity of fluid", "Length of pipe", "Pressure Difference", "Radius of the pipe"],
                subunits: ["pascal-second", "m", "pascal", "m"],
                setters: [setViscosity, setLength, setPressurediff, setRadius],
                getters: [viscosity, length, pressurediff, radius],
            }
        }

        return <>
            <Form>
                {/* dropdown */}
                <Form.Group className="mb-4" controlId="choice">
                    <Form.Label>Select the type of calculation</Form.Label>
                    <Form.Control as="select" onChange={(e) => handleChange(e)}>
                    <option value="pressure">Pressure difference</option>
                    <option value="flowrate">Volumetric flow rate</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-4" controlId="text">
                    <Form.Text className="text">
                    <strong>
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
                    value={choiceData().getters[0]===null?'':choiceData().getters[0]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[1]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[1](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[1]}
                    value={choiceData().getters[1]===null?'':choiceData().getters[1]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[2]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[2](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[2]}
                    value={choiceData().getters[2]===null?'':choiceData().getters[2]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[3]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[3](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[3]}
                    value={choiceData().getters[3]===null?'':choiceData().getters[3]}
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
    }

    // Bernoulli's equation calculator
    function CalculatorBernoulliequation() {
        const [result, setResult] = useState(null)
        const [pressure1, setPressure1] = useState(null)
        const [pressure2, setPressure2] = useState(null)
        const [velocity1, setVelocity1] = useState(null)
        const [velocity2, setVelocity2] = useState(null)
        const [height1, setHeight1] = useState(null)
        const [height2, setHeight2] = useState(null)
        const [density, setDensity] = useState(null)
        const [gravity, setGravity] = useState(null)
        const [choice, setChoice] = useState("pressure")

        function handleChange(e) {
            console.log(e.target.value);
            setResult(null);
            setPressure1(null);
            setPressure2(null);
            setVelocity1(null);
            setVelocity2(null);
            setHeight1(null);
            setHeight2(null);
            setDensity(null);
            setGravity(null);
            setChoice(e.target.value);
            choiceData();
        }

        const calcResult = () => {
            let res
            if (choice === "pressure"){
                res = pressure1 + 0.5*density*(Math.pow(velocity1, 2)) + density*gravity*height1 - 0.5*density*(Math.pow(velocity2, 2)) - density*gravity*height2
            }
            else if (choice === "velocity"){
                res = Math.sqrt(((pressure1 + 0.5*density*(Math.pow(velocity1, 2)) + density*gravity*height1 - pressure2 - density*gravity*height2) / density) * 2)  
            }
            else if (choice === "height"){
                res = (pressure1 + 0.5*density*(Math.pow(velocity1, 2)) + density*gravity*height1 - pressure1 - 0.5*density*(Math.pow(velocity2, 2))) / (density*gravity)
            }
            setResult(res)
        }

        function reset() {
            setResult(null)
        }

        const choiceData = () => {
            if (choice === "pressure")
              return {
                name: "Pressure",
                mainunit: "pascal",
                quantities: ["Pressure 1", "Velocity 1", "Height 1", "Velocity 2", "Height 2", "Density", "Gravity"],
                subunits: ["pascal", "m/s", "m", "m/s", "m", "kg m^-3", "m/s^2"],
                setters: [setPressure1, setVelocity1, setHeight1, setVelocity2, setHeight2, setDensity, setGravity],
                getters: [pressure1, velocity1, height1, velocity2, height2, density, gravity],
            }
            else if (choice === "velocity")
                return {
                name: "Velocity",
                mainunit: "m/s",
                quantities: ["Pressure 1", "Velocity 1", "Height 1", "Pressure 2", "Height 2", "Density", "Gravity"],
                subunits: ["pascal", "m/s", "m", "pascal", "m", "kg m^-3", "m/s^2"],
                setters: [setPressure1, setVelocity1, setHeight1, setPressure2, setHeight2, setDensity, setGravity],
                getters: [pressure1, velocity1, height1, pressure2, height2, density, gravity],
            }
            else if (choice === "height")
                return {
                name: "Height",
                mainunit: "m",
                quantities: ["Pressure 1", "Velocity 1", "Height 1", "Pressure 2", "Velocity 2", "Density", "Gravity"],
                subunits: ["pascal", "m/s", "m", "pascal", "m/s", "kg m^-3", "m/s^2"],
                setters: [setPressure1, setVelocity1, setHeight1, setPressure2, setVelocity2, setDensity, setGravity],
                getters: [pressure1, velocity1, height1, pressure2, velocity2, density, gravity],
            }
        }

        return <>
            <Form>
                {/* dropdown */}
                <Form.Group className="mb-4" controlId="choice">
                    <Form.Label>Select the type of calculation</Form.Label>
                    <Form.Control as="select" onChange={(e) => handleChange(e)}>
                    <option value="area">Pressure</option>
                    <option value="velocity">Velocity</option>
                    <option value="height">Height</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-4" controlId="text">
                    <Form.Text className="text">
                    <strong>
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
                    value={choiceData().getters[0]===null?'':choiceData().getters[0]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[1]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[1](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[1]}
                    value={choiceData().getters[1]===null?'':choiceData().getters[1]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[2]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[2](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[2]}
                    value={choiceData().getters[2]===null?'':choiceData().getters[2]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[3]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[3](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[3]}
                    value={choiceData().getters[3]===null?'':choiceData().getters[3]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[4]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[4](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[4]}
                    value={choiceData().getters[4]===null?'':choiceData().getters[4]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[5]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[5](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[5]}
                    value={choiceData().getters[5]===null?'':choiceData().getters[5]}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>{choiceData().quantities[6]}</Form.Label>
                    <Form.Control
                    onChange={(e) => choiceData().setters[6](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[6]}
                    value={choiceData().getters[6]===null?'':choiceData().getters[6]}
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
            case "Continuity equation":
                currentCall = CalculatorContinuityequation();
                break;
            case "Viscosity":
                currentCall = CalculatorViscosity();
                break;
            case "Poiseuille's law":
                currentCall = CalculatorPoiseuillelaw();
                break;
            case "Bernoulli's equation":
                currentCall = CalculatorBernoulliequation();
                break;
            default:
                break;
        }
        return currentCall;
    }

    return (
        <div className="Calculator__main">
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
    )
}

export default FluidCalculator