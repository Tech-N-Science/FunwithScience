import React, { useState } from 'react'
import './Calculator.css'
import { Form, Button } from 'react-bootstrap'
import '../classicalMechanics.css'
import Gravitation_list from "../gravitation_data";


function GravitationCalculator({ match }) {
    const page = Gravitation_list.filter(data => (data.topic) === (match.params.topic))
    const details = page[0]
    console.log(page)
    console.log(details.formula)

    //Gravitational Force
    function CalculatorGravitationalForce() {
        const [result, setResult] = useState(null)
        const [mass_A, setMassA] = useState(null)
        const [mass_B, setMassB] = useState(null)
        const [distance, setDistance] = useState(null)

        const handleClick = () => {
            let res = ( 6.67 * Math.pow(10,-11) * mass_A * mass_B ) / ( distance * distance );
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
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " Newton"} />
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
    }

      // Adding Calculators together
    
      function calCu_gravi(key) {
        let currentCall;
        switch (key) {
            case "Gravitational Force":
                    currentCall = CalculatorGravitationalForce();
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
                {
                    calCu_gravi(details.topic)
                }
            </div>
            <div className="Calculator__process">
                <h3> Process</h3>
                <p>{details.process}</p>
            </div>
        </div>
    )

}
export default GravitationCalculator