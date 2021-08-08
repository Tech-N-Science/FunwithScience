import React, { useState } from 'react'
import './Calculator.css'
//import { Form, Button } from 'react-bootstrap'
import { Form, Card, Button } from 'react-bootstrap'
import '../classicalMechanics.css'
import WPE_list from "../wpe_data";

function Dalculator({ match }) {
    const page = WPE_list.filter(data => (data.topic) === (match.params.topic))
    const details = page[0]
    console.log(page)
    console.log(details.formula)

    // Work Calculator
    function CalculatorWork() {
        const [result, setResult] = useState(null)
        const [force, setForce] = useState(null)
        const [displacement, setDisp] = useState(null)

        const handleClick = () => {
            let res = force * displacement;
            setResult(res)
        }
       
        return <React.Fragment>
            <Form>

               
                <Form.Group className="mb-3" controlId="force">
                    <Form.Label> Force (in Newtons)</Form.Label>
                    <Form.Control onChange={(e) => setForce(e.target.value)} type="number" placeholder="Enter Force applied to an object in newtons" />
                </Form.Group>
                    <Form.Label> Displacement (in m/s²)</Form.Label>
                <Form.Group className="mb-3" controlId="displacement">
                    <Form.Control onChange={(e) => setDisp(e.target.value)} type="number" placeholder="Enter displacement in metre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="work">
                    <Form.Label>Work Done (W)</Form.Label>
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " Joules "} />
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

    // Power Calculator
    function CalculatorPower() {
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
                    <Form.Control readOnly type="number" placeholder={result === null ? "Result" : result + " w "} />
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
            case "Work":
                currentCall = CalculatorWork();
                break;
            case "Power":
                    currentCall = CalculatorPower();
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


export default Dalculator
