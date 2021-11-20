import React from 'react'
import './Calculator.css'
import Topics from "../topics_data"
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import '../Electromagnetism.css'
import electricfield_data from "../electricfield_data"
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet" 

const calculator = ({match}) => {
    const page=Topics.filter((data)=>data.topic===match.params.topic)
    const details=page[0]

    if (details.topic === "Electric Field") {
        return (
          <div className="mech__main">
            <div className="mech__header">
              <h1>Electric field</h1>
            </div>
            <div className="mech__topics-card">
              {electricfield_data.map((data) => (
                <React.Fragment key={data.topic}>
                  <Link
                    to={`/electromagnetism/calc/electric_field/${data.topic}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card
                      className="a"
                      key={data.topic}
                      style={{
                        width: "18rem",
                        color: "black",
                        textAlign: "center",
                        fontSize: "20px",
                      }}
                    >
                      <Card.Body>
                        <div> {data.topic}</div>
                      </Card.Body>
                    </Card>
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      }
      else{
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
          <div className="Calculator__process">
            <h3> Process</h3>
            <p>{details.process}</p>
          </div>
          <div className="Calculator__calc">
            <h3>{details.topic} Calculator</h3>
            <hr />
            {/* {calC(details.topic)} */}
          </div>
        </div>
        </>
      );
}
}

export default calculator
