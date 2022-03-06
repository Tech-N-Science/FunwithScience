import React, { useState } from "react";
import '../../PysicsStyles/physicscalculator.css'
import { Form, Button } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
import { SI } from "../../Solution/allSIUnits";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";

const SeriesAndParallelCalc = () => {
  let { topic } = useParams();
  const seriesandparallel_data = [
    {
      topic: "Equivalent Resistance",
      formula: [
        "Series: R₁ + R₂",
        <br/>, 
        "Parallel: R₁*R₂/(R₁ + R₂)",
      ],
      siunit: "Ohm",
      dimension: "[M L² T⁻³ I⁻²]",
      process: [
      "1) Series: When the two resistors (R₁ and R₂) are in series, the equivalent resistance (R) = R₁ + R₂.",
      <br />,
      "2) Parallel: When the two resistors (R₁ and R₂) are in parallel, the equivalent resistance (R) = R₁*R₂ / (R₁ + R₂).",
          ],
      details: `Equivalent resistance is defined as the total resistance between any two nodes in a circuit which contains resistors connected in series or parallel between those two nodes.`,
    },
    {
      topic: "Equivalent Capacitance",
      formula: [
        "Series: C₁*C₂/(C₁ + C₂)",
        <br/>, 
        "Parallel: C₁ + C₂",
      ],
      siunit: "Farad (F)",
      dimension: "[M⁻¹ L⁻² T⁴ I²]",
      process: [
      "1) Series: When the two capacitors (C₁ and C₂) are in series, the equivalent capacitance (C) = C₁*C₂/(C₁ + C₂).",
      <br />,
      "2) Parallel: When the two capacitors(C₁ and C₂) are in parallel, the equivalent capacitance (C) = C₁ + C₂.",
          ],
      details: `Equivalent capacitance is defined as the total capacitance between any two nodes in a circuit which contains capacitors connected in series or parallel between those two nodes.`,
    },
    {
      topic: "Equivalent Inductance",
      formula: [
        "Series: L₁ + L₂",
        <br/>, 
        "Parallel: L₁*L₂/(L₁ + L₂)",
      ],
      siunit: "Henry (H)",
      dimension: "[M L² T⁻² A⁻²]",
      process: [
      "1) Series: When the two inductors (L₁ and L₂) are in series, the equivalent inductance (L) = L₁ + L₂.",
      <br />,
      "2) Parallel: When the two inductors (L₁ and L₂) are in parallel, the equivalent inductance (L) = L₁*L₂ / (L₁ + L₂).",
          ],
      details: `Equivalent inductance is defined as the total inductance between any two nodes in a circuit which contains inductors connected in series or parallel between those two nodes.`,
    },
  ];
  const page = seriesandparallel_data.filter((data) => data.topic === topic);
  const details = page[0];
  

  // //Series and parallel circuits
  //Equivalent Resistance

  const FindResistance = () => {
    const [choice, setChoice] = useState("series");
    const [resistance1, setResistance1] = useState(null);
    const [resistance2, setResistance2] = useState(null);
    // const [resistance, setResistance] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (choice === "series" && resistance1 !==null && resistance2!==null) {
        res = Number(resistance1) + Number(resistance2);
        setShowSolution(true);
      }
      else if (choice === "parallel" && resistance1 !==null && resistance2!==null) {
        res = (Number(resistance1) * Number(resistance2)) / (Number(resistance1) + Number(resistance2));
        setShowSolution(true);
      }
      // else if (choice === "resistance" && current !==null && voltage!==null) {
      //   res = voltage / current;
      //   setShowSolution(true);
      // }
      else {
        setShowModal(true);
      }
      setResult(res + SI["Resistance"]);
    };

    const givenValues = () => {
      if (choice === "series")
        return {
      Resistance1 : resistance1 + SI["Resistance"],
      Resistance2 : resistance2 + SI["Resistance"],
    };
    else
    return {
      Resistance1 : resistance1 + SI["Resistance"],
      Resistance2 : resistance2 + SI["Resistance"],
    }
    };
    
    const reset = () => {
      setResistance1(null);
      setResistance2(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setResistance1(null);
      setResistance2(null);
      // setVoltage(null);
    };

    const insertValues = () => {
      if (choice === "series")
        return `${resistance1}${SI["Resistance"]} + ${resistance2}${SI["Resistance"]}`;
      // else if(choice === "current")
      // return `${voltage}${SI["voltage"]} / ${resistance}${SI["Resistance"]}`;
      else
      return `(${resistance1}${SI["Resistance"]} * ${resistance2}${SI["Resistance"]}) / (${resistance1}${SI["Resistance"]} * ${resistance2}${SI["Resistance"]})`;
    }

    const choiceData = () => {
      if (choice === "series")
        return {
          name: "equivalent resistance",
          mainunit: "ohm",
          formula: "R₁ + R₂",
          quantities: ["Resistance R₁", "Resistance R₂"],
          subunits: ["ohm", "ohm"],
          getters: [resistance1, resistance2],
          setters: [setResistance1, setResistance2],
        };
      if (choice === "parallel")
        return {
          name: "equivalent resistance",
          mainunit: "ohm",
          formula: "R₁*R₂ / (R₁ + R₂)",
          quantities: ["Resistance R₁", "Resistance R₂"],
          subunits: ["ohm", "ohm"],
          getters: [resistance1, resistance2],
          setters: [setResistance1, setResistance2],
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please enter all values to get proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        {/* <Navbar/> */}
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of connection</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="series">Series</option>
              <option value="parallel">Parallel</option>
            </Form.Control>
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
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues()}
              formula={choiceData().formula}
              toFind={choiceData().name}
              insertValues={insertValues()}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " "
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  const FindCapacitance = () => {
    const [choice, setChoice] = useState("series");
    const [capacitance1, setCapacitance1] = useState(null);
    const [capacitance2, setCapacitance2] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (choice === "series" && capacitance1 !==null && capacitance2!==null) {
        res = (Number(capacitance1) * Number(capacitance2)) / (Number(capacitance1) + Number(capacitance2));
        setShowSolution(true);
      }
      else if (choice === "parallel" && capacitance1 !==null && capacitance2!==null) {
        res = Number(capacitance1) + Number(capacitance2);
        setShowSolution(true);
      }
      // else if (choice === "resistance" && current !==null && voltage!==null) {
      //   res = voltage / current;
      //   setShowSolution(true);
      // }
      else {
        setShowModal(true);
      }
      setResult(res + " F");
    };

    const givenValues = () => {
      if (choice === "series")
        return {
      Capacitance1 : capacitance1 + " F",
      Capacitance2 : capacitance2 + " F",
    };
    else
    return {
      Capacitance1 : capacitance1 + " F",
      Capacitance2 : capacitance2 + " F",
    }
    };
    
    const reset = () => {
      setCapacitance1(null);
      setCapacitance2(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setCapacitance1(null);
      setCapacitance2(null);
    };

    const insertValues = () => {
      if (choice === "series")
      return `(${capacitance1}${" F"} * ${capacitance2}${" F"}) / (${capacitance1}${" F"} + ${capacitance2}${" F"})`;
        
      else
      return `(${capacitance1}${" F"} + ${capacitance2}${" F"})`;
    }

    const choiceData = () => {
      
      if (choice === "series")
        return {
          name: "equivalent capacitance",
          mainunit: "F",
          formula: "C₁*C₂ / (C₁ + C₂)",
          quantities: ["Capacitance C₁", "Capacitance C₂"],
          subunits: ["F", "F"],
          getters: [capacitance1, capacitance2],
          setters: [setCapacitance1, setCapacitance2],
        };
        if (choice === "parallel")
        return {
          name: "equivalent capacitance",
          mainunit: "F",
          formula: "C₁ + C₂",
          quantities: ["Capacitance C₁", "Capacitance C₂"],
          subunits: ["F", "F"],
          getters: [capacitance1, capacitance2],
          setters: [setCapacitance1, setCapacitance2],
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please enter all values to get proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        {/* <Navbar/> */}
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of connection</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="series">Series</option>
              <option value="parallel">Parallel</option>
            </Form.Control>
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
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues()}
              formula={choiceData().formula}
              toFind={choiceData().name}
              insertValues={insertValues()}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " "
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };


  const FindInductance = () => {
    const [choice, setChoice] = useState("series");
    const [inductance1, setInductance1] = useState(null);
    const [inductance2, setInductance2] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (choice === "series" && inductance1 !==null && inductance2!==null) {
        res = Number(inductance1) + Number(inductance2);
        setShowSolution(true);
      }
      else if (choice === "parallel" && inductance1 !==null && inductance2!==null) {
        res = (Number(inductance1) * Number(inductance2)) / (Number(inductance1) + Number(inductance2));
        setShowSolution(true);
      }
      // else if (choice === "resistance" && current !==null && voltage!==null) {
      //   res = voltage / current;
      //   setShowSolution(true);
      // }
      else {
        setShowModal(true);
      }
      setResult(res + " H");
    };

    const givenValues = () => {
      if (choice === "series")
        return {
      Inductance1 : inductance1 + " H",
      Inductance2 : inductance2 + " H",
    };
    else
    return {
      Inductance1 : inductance1 + " H",
      Inductance2 : inductance2 + " H",
    }
    };
    
    const reset = () => {
      setInductance1(null);
      setInductance2(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setInductance1(null);
      setInductance2(null);
    };

    const insertValues = () => {
      if (choice === "series")
        return `${inductance1}${" H"} + ${inductance2}${" H"}`;
      else
      return `(${inductance1}${" H"} * ${inductance2}${" H"}) / (${inductance1}${" H"} * ${inductance2}${" H"})`;
    }

    const choiceData = () => {
      if (choice === "series")
        return {
          name: "equivalent inductance",
          mainunit: "H",
          formula: "L₁ + L₂",
          quantities: ["Inductance L₁", "Inductance L₂"],
          subunits: ["H", "H"],
          getters: [inductance1, inductance2],
          setters: [setInductance1, setInductance2],
        };
      if (choice === "parallel")
        return {
          name: "equivalent inductance",
          mainunit: "H",
          formula: "L₁*L₂ / (L₁ + L₂)",
          quantities: ["Inductance L₁", "Inductance L₂"],
          subunits: ["H", "H"],
          getters: [inductance1, inductance2],
          setters: [setInductance1, setInductance2],
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please enter all values to get proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        {/* <Navbar/> */}
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of connection</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="series">Series</option>
              <option value="parallel">Parallel</option>
            </Form.Control>
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
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues()}
              formula={choiceData().formula}
              toFind={choiceData().name}
              insertValues={insertValues()}
              result={result}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " "
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  
  const calC = (key) => {
    let currentCall;
    switch (key) {
      case "Equivalent Resistance":
        currentCall = FindResistance();
        break;
      case "Equivalent Capacitance":
        currentCall = FindCapacitance();
        break;
      case "Equivalent Inductance":
        currentCall = FindInductance();
        break;
      default:
        break;
    }
    return currentCall;
  };
  return (
    <React.Fragment>
      <Navbar />
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
    </React.Fragment>
  );
};

export default SeriesAndParallelCalc;
