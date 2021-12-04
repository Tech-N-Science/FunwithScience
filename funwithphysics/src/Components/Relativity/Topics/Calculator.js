import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Relativity.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic:"Mass Energy Relation",
      details:`Equation "E = mc²" is the Einstein’s theory of special relativity that defines that the mass and energy are the same physical entity and can be changed into one another. In the equation, the increased relativistic mass (m) of a body times the speed of light squared (c²) is equal to the kinetic energy (E) of that body. where the value of speed of light is 299,792,458 m/s`,
      formula:"E=MC²",
      process:"To find the the energy we need to know the value of mass & we can easily calculate mass if we have the value of energy. where as the value of speed of light is 299,792,458 m/s",
      siunit:["Energy: joule",<br/>,"Mass: kg"],
      dimension:["Energy: M L² T⁻²",<br/>,"mass: M"]

    }
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Mass Energy Relation calculator
  const MassEnergyCalculator=()=>{
    const [choice, setChoice] = useState("Energy");
    const [mass, setMass] = useState(null);
    const [energy, setEnergy] = useState(null);
    const [result, setResult] = useState(null);
    const reset=()=>{
      setMass(null)
      setEnergy(null)
      setResult(null)

    }
    const C=299792458 

    const handleChange=(e)=>{
      setChoice(e.target.value)
      reset()
    }
    const calcResult=()=>{
      let res;
      if(choice==="Energy"){
        res=mass*C*C;
      }
      else if(choice==="Mass"){
        res=energy/(C*C);
      }
      setResult(res);
    }
    const choiceData=()=>{
      if(choice==="Energy")
      return{
        name:"Energy",
        mainunit:"joule"
      }
      if(choice==="Mass")
      return{
        name:"Mass",
        mainunit:"kg"
      }
    }
    return(<>
    <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="Energy">Energy (E)</option>
              <option value="Mass">Mass (M)</option>
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
          {
            choice==="Energy"?<Form.Group className="mb-4">
            <Form.Label>Mass (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder={"Enter in kg"}
              value={
                mass === null ? "" : mass
              }
            />
          </Form.Group>:<Form.Group className="mb-4">
            <Form.Label>Energy (E)</Form.Label>
            <Form.Control
              onChange={(e) => setEnergy(e.target.value)}
              type="number"
              placeholder={"Enter in joule"}
              value={
                energy === null ? "" : energy
              }
            />
          </Form.Group>
          }
          <Form.Group className="mb-4">
            <Form.Label>Speed of ligth (C)</Form.Label>
            <Form.Control
            readOnly
              type="number"
              placeholder={"299,792,458 m/s"}
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

  

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Mass Energy Relation":
        currentCall=MassEnergyCalculator()
        break;
      default:
        break;
    }
    return currentCall;
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta name="description" content="{details.details}" />
          <meta
            name="keywords"
            content="Relativity, calculator, Relativity calculator, physics, Tech n science, technscience, tech and science"
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
    </React.Fragment>
  );
}
export default Calculator;
