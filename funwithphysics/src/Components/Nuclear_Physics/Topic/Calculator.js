import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../NuclearPhysics.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: "Mass defect",
      formula: "Δm=[Z(mp+me)+(A-Z)mn]-matom",
      siunit: "Atomic mass unit (amu)",
      details: ` The mass of an atom is always slightly less than the total of the masses of the individual neutrons, protons, and electrons that make up the atom, according to careful measurements. The mass defect (m) is the discrepancy between the mass of an atom and the sum of its components' masses.`,
      process: `The calculation of mass defect can be calculated by the equation "Δm=[Z(mₚ+mₑ)+(A-Z)mₙ]-mₐₜₒₘ", where 'Δm' is the mass defect, 'Z' is the atomic number (number of protons), 'A' is the mass number (number of nucleons), 'mₚ' is the mass of a proton (1.007277 amu), 'mₑ' is mass of an electron (0.000548597 amu), 'mₙ' is mass of a neutron (1.008665 amu) and 'mₐₜₒₘ' is the mass of nuclide. In order to calculate the mass defect it is important to use full accuracy of mass masurement.`,
      dimension: "M",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Mass defect calculator
  const MassDefect = () => {
    const [atomicNumber, setAtomicNumber] = useState(null);
    const [massNumber, setMassNumber] = useState(null);
    const [matom, setMatom] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setAtomicNumber(null);
      setMassNumber(null);
      setMatom(null);
      setResult(null);
    };
    const Melectron = 0.000548597;
    const Mptoton = 1.007277;
    const Mneutron = 1.008665;
    const calcResult = () => {
      let res;
      res =
        atomicNumber * (Mptoton + Melectron) +
        (massNumber - atomicNumber) * Mneutron -
        matom;
      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>
              Enter the Atomic number (Z) (Number of protons)
            </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setAtomicNumber(e.target.value)}
              placeholder="Enter the atomic number"
              value={atomicNumber === null ? "" : atomicNumber}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter the Mass number(A)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setMassNumber(e.target.value)}
              placeholder="Enter the mass number"
              value={massNumber === null ? "" : massNumber}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter the Mass of Nuclide (mₐₜₒₘ)</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setMatom(e.target.value)}
              placeholder="Enter the mass number"
              value={matom === null ? "" : matom}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Masss of Electron (mₑ)</Form.Label>
            <Form.Control
              type="number"
              readOnly
              placeholder="(0.000548597 amu)"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Masss of Proton (mₚ)</Form.Label>
            <Form.Control type="number" readOnly placeholder="(1.007277 amu)" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Masss of Neutron (mₙ)</Form.Label>
            <Form.Control type="number" readOnly placeholder="(1.008665 amu)" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " amu"}
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
    );
  };

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Mass defect":
        currentCall = MassDefect();
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
            content="Nuclear, Physics, calculator, Nuclear physics calculator, Tech n science, technscience, tech and science"
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
