import React,{useState} from 'react'
import './Calculator.css'
import Topics from "../topics_data"
import { Form, Card, Button } from "react-bootstrap";
// import {  Card, } from "react-bootstrap";
import '../Electromagnetism.css'
import electricfield_data from "../electricfield_data"
import electricpotential_data from "../electricpotential_data"
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet" 

const calculator = ({match}) => {
    const page=Topics.filter((data)=>data.topic===match.params.topic)
    const details=page[0]

    //Adding Ohm's law Calculator
    const OhmCalculator=()=>{
      const [choice, setChoice] = useState("voltage");
      const [voltage, setVoltage] = useState(null);
      const [current, setCurrent] = useState(null);
      const [resistance, setResistance] = useState(null);
      const [result, setResult] = useState(null);

      const calcResult=()=>{
        let res;
        if(choice==="voltage"){
          res=current * resistance;
        }
        if(choice==="current"){
          res=voltage / resistance;
        }
        if(choice==="resistance"){
          res=voltage / current;
        }
        setResult(res)

      }
      const reset =()=>{
        setCurrent(null)
        setVoltage(null)
        setResistance(null)
        setResult(null)
      }

      const handleChange=(e)=>{
        setChoice(e.target.value);
        setCurrent(null);
        setResistance(null);
        setVoltage(null)
      }
      const choiceData=()=>{
        if(choice==="voltage")
        return{
          name:"Voltage (V)",
          mainunit:"(V)",
          quantities:["Current","Resistance"],
          subunits:["(A)","(ohm)"],
          getters:[current,resistance],
          setters:[setCurrent,setResistance]
        }
        if(choice==="current")
        return{
          name:"Current (I)",
          mainunit:"(A)",
          quantities:["Voltage","Resistance"],
          subunits:["(V)","(ohm)"],
          getters:[voltage,resistance],
          setters:[setVoltage,setResistance]
        }
        if(choice==="resistance")
        return{
          name:"Resistance (R)",
          mainunit:"(ohm)",
          quantities:["Voltage","Current"],
          subunits:["(V)","(I)"],
          getters:[voltage,current],
          setters:[setVoltage,setCurrent]
        }
      }
      return(<>
      <Form>
         {/* dropdown */}
         <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" onChange={(e)=>{handleChange(e)}}>
              <option value="voltage">Voltage (V)</option>
              <option value="current">Current (I)</option>
              <option value="resistance">Resistance (R)</option>
              
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
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
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={
                choiceData().subunits[1] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[1]
              }
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
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
      </>)

    }

    const calC=(key)=>{
      let currentCall;
      switch(key){
        case "Ohm's Law":
          currentCall=OhmCalculator()
          break;
        default:
          break;
      }
      return currentCall;
    }

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
      else if (details.topic === "Electric Potential") {
        return (
          <div className="mech__main">
            <div className="mech__header">
              <h1>Electric Potential</h1>
            </div>
            <div className="mech__topics-card">
              {electricpotential_data.map((data) => (
                <React.Fragment key={data.topic}>
                  <Link
                    to={`/electromagnetism/calc/electric_potential/${data.topic}`}
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
            {calC(details.topic)}
          </div>
        </div>
        </>
      );
}
}


export default calculator
