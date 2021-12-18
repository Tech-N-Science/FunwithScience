import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../AtomicPhysics.css";
import "../../../Responsive/style.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: "Bohr's model",
      formula: "1/λ=R[(1/nf²)-(1/ni²)]",
      siunit: "Wavelength: m",
      details:
        "The Rydberg formula describes the various transition energies that occur between energy levels. A photon is released when an electron goes from a higher to a lower energy level. Depending on the beginning and ultimate energy levels of the transition, the hydrogen atom can produce different wavelengths of light. It emits a photon with an energy equal to the square of the energy levels of the final (nf) and initial (ni).",
      process:
        "To find the (λ) wavelength of the emitted EM radiation we need to know the value of initial state (ni) and the final excitation state (nf) where R is the Rydberg constant, and it's value is determined by an experiment 1.097 × 10^7 / m (or m⁻¹)",
      dimension: "[L]",
    },
    {
      topic: "Einstein's photoelectric equation",
      formula: "E=φ+KEmax",
      siunit: "Electron-volt: eV",
      details:
        "Einstein's photoelectric equation is used to obtain the energy of photon using the photon picture of electromagnetic radiation. A photon of energy hv is absorbed by the electron of the metal surface, then the energy is used to liberate the electron from the surface and rest of the energy becomes the kinetic energy of the electron.",
      process:
        "So The Energy(E) of a photon can be obtained by using the work function(φ) and the maximum kinetic energy of the ejected electrons from the metal surface. Where E is the incident energy of photons with the formula E=hv and h represents the Planck constant, v represents the frequency of incident radiation, φ is the work function of metal and KEmax is the maximum kinetic energy of electrons.",
      dimension: "M1L2T-2",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Mass Energy Relation calculator
  const BohrModel = () => {
    const [initial, setInitial] = useState(null);
    const [final, setFinal] = useState(null);
    const [result, setResult] = useState(null);
    const R = 1.097 * Math.pow(10, 7);
    const reset = () => {
      setInitial(null);
      setFinal(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      let r1 = 1 / (initial * initial);
      let r2 = 1 / (final * final);
      let r3 = R * (r2 - r1);
      res = 1 / r3;

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Initial State (ni)</Form.Label>
            <Form.Control
              onChange={(e) => setInitial(e.target.value)}
              type="number"
              placeholder="Enter the initial state (ni)"
              value={initial === null ? "" : initial}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Final Excitation State (nf)</Form.Label>
            <Form.Control
              onChange={(e) => setFinal(e.target.value)}
              type="number"
              placeholder="Enter the Final state (nf)"
              value={final === null ? "" : final}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Rydberg constant(R)</Form.Label>
            <Form.Control readOnly placeholder="1.097 × 10^7 / m (or m⁻¹)" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " m"}
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

  // Einstein's Photo Electric equation (Energy calculator)
  const PhotoElectricCalci = () => {
    const [workFunction, setWorkFunction] = useState(null);
    const [KEmax, setKEmax] = useState(null);
    const [result, setResult] = useState(null);

    const reset = () => {
      setWorkFunction(null);
      setKEmax(null);
      setResult(null);
    };
    const calcResult = () => {
      let res;
      res = parseFloat(workFunction) + parseFloat(KEmax);

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Work Function</Form.Label>
            <Form.Control
              onChange={(e) => setWorkFunction(e.target.value)}
              type="number"
              placeholder="Enter the work function(φ)"
              value={workFunction === null ? "" : workFunction}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Kinetic Energy Max (KEmax)</Form.Label>
            <Form.Control
              onChange={(e) => setKEmax(e.target.value)}
              type="number"
              placeholder="Enter the Maximum Kinectic Energy"
              value={KEmax === null ? "" : KEmax}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " eV"}
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

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Bohr's model":
        currentCall = BohrModel();
        break;
      case "Einstein's photoelectric equation":
        currentCall = PhotoElectricCalci();
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
            content="Atomic, Physics, calculator, Atomic physics calculator, Tech n science, technscience, tech and science"
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
