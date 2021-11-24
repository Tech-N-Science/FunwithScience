import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import electricpotential_data from "../electricpotential_data";
import { Helmet } from "react-helmet";



export const electricpotential_calculator = ({match}) => {
    const page=electricpotential_data.filter((data)=>data.topic===match.params.topic);
    const details=page[0];

    //electric potential for point charge
    const Pointcharge=()=>{
        return(<>
        
        </>)
    }




const calC=(key)=>{
    let currentCall;
    switch(key){
        case "Point Charge":
            currentCall=Pointcharge();
            break;
        default:
            break;
    }
    return currentCall

}

    return (
        <>
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta
            name="description"
            content={details.details}
            data-react-helmet="true"
          />
          <meta
            name="keywords"
            content="Electromagnetism, calculator, physics, Tech n science, technscience, tech and science"
          />
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
          {calC(details.topic)}
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
      </div>
    </>
    )
}
