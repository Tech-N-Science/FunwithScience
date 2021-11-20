import React from 'react'
import "./Calculator.css"
import { Form, Button } from 'react-bootstrap'
import '../Electromagnetism.css'
import electricfield_data from '../electricfield_data'
import {Helmet} from "react-helmet"


function electricfield_calculator({match}) {
    const page=electricfield_data.filter(data => (data.topic) === (match.params.topic))
    const details = page[0]

    //point Charge
    const PointCharge=()=>{
        return(<>
        <Form>
        <Form.Group className="mb-4">
                    <Form.Label>Enter the Charge</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder={"Enter in the charge"}
                        // value={choice_data().getters[0] === null ? '' : choice_data().getters[0]}
                    />
                </Form.Group>
        </Form>
        </>)
    }

    const calC=(key)=>{
        let currentCall;
        switch (key) {
            case "Point Charge":
                currentCall = PointCharge();
                break;
            default:
                break;
        }
        return currentCall;
    }
    return (
    <>
    <div className="Calculator__main">
            <Helmet>
                <title>{details.topic}</title>
                <meta name="description" content={details.details} data-react-helmet="true"/>
                <meta name="keywords" content="Electromagnetism, calculator, physics, Tech n science, technscience, tech and science"/>
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
    </>
    )
}

export default electricfield_calculator

