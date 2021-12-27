import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button, Modal } from "react-bootstrap";
import "../AtomicPhysics.css";
import "../../../Responsive/style.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
import { constant } from "../../Solution/allConstants";

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
        "To find the (λ) wavelength of the emitted EM radiation we need to know the value of initial state (ni) and the final excitation state (nf) where R is the Rydberg constant, and it's value is determined by an experiment 1.097 × 10⁷ / m (or m⁻¹)",
      dimension: "[L]",
    },
    {
      topic: "Einstein's photoelectric equation",
      formula: "E=φ+KEₘₐₓ",
      siunit: "Electron-volt: eV",
      details:
        "Einstein's photoelectric equation is used to obtain the energy of photon using the photon picture of electromagnetic radiation. A photon of energy hv is absorbed by the electron of the metal surface, then the energy is used to liberate the electron from the surface and rest of the energy becomes the kinetic energy of the electron.",
      process:
        "So The Energy(E) of a photon can be obtained by using the work function(φ) and the maximum kinetic energy of the ejected electrons from the metal surface. Where E is the incident energy of photons with the formula E=hv and h represents the Planck constant, v represents the frequency of incident radiation, 'φ' is the work function of metal and 'KEₘₐₓ' is the maximum kinetic energy of electrons.",
      dimension: "ML²T⁻²",
    },
    {
      topic: "Angular momentum",
      formula: "mvr=nh/2π",
      siunit: "kg m²/s",
      details:
        "The Bohr's atomic model says that the angular momentum of electrons in different orbits around the nucleus is quantized.He also stated that the electrons move only in those orbits where the angular momentum of an electron is an integral multiple of h/2.",
      process:
        "The angular momentum of an electron can be calculated by using mvr or nh/2π (where v is the velocity, n is the orbit in which electron is, m is mass of the electron, and r is the radius of the nth orbit). h is the planck's constant with the value 6.62607004 × 10⁻³⁴ and pi which is approximately equal to 3.14159.",
      dimension: "ML²T⁻¹",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Mass Energy Relation calculator
  const BohrModel = () => {
    const [initial, setInitial] = useState("");
    const [final, setFinal] = useState("");
    const [result, setResult] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      ni: initial,
      nf: final,
    };
    const constants = ["R"];
    const insertValues = `1/(${constant["R"]}[(1/${final}²)-(1/${initial}²)])`;

    const R = 1.097 * Math.pow(10, 7);
    const reset = () => {
      setInitial("");
      setFinal("");
      setShowSolution(false);
      setResult("");
    };
    const calcResult = () => {
      if (initial !== "" && final !== "") {
        let res;
        let r1 = 1 / (initial * initial);
        let r2 = 1 / (final * final);
        let r3 = R * (r2 - r1);
        res = 1 / r3;

        setResult(res);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
    };
    return (
      <>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowModal(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
            <Form.Control readOnly placeholder="1.097 × 10⁷ / m (or m⁻¹)" />
          </Form.Group>
          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="1/(R[(1/nf²)-(1/ni²)])"
                toFind="wave Length"
                insertValues={insertValues}
                result={result}
                constants={constants}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " m"}
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
            <Form.Label>Kinetic Energy Max (KEₘₐₓ)</Form.Label>
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

  // Angular momentum calculator.
  const AngularMomentumCalci = () => {
    const [orbitNumber, setOrbitNumber] = useState(null);
    const [velocity, setVelocity] = useState(null);
    const [radius, setRadius] = useState(null);
    const [result, setResult] = useState(null);
    const [choice, setChoice] = useState("Angular momentum");
    const [planck, setPlanck] = useState(6.62607004 * Math.pow(10, -34));
    const h = 6.62607004 * Math.pow(10, -34);
    const m = 9.10938356 * Math.pow(10, -31);

    function handleChange(e) {
      setResult(null);
      setVelocity(null);
      setOrbitNumber(null);
      setRadius(null);
      setChoice(e.target.value);
      choiceData();
    }
    const choiceData = () => {
      if (choice === "Angular momentum")
        return {
          name: "Angular Momentum",
          mainunit: "kg m2/s",
          quantities: ["OrbitNumber(n) ", "Planck's constant (h)"],
          subunits: ["m", "NaN"],
          setters: [setOrbitNumber, setPlanck],
          getters: [orbitNumber, planck],
          hidden: true,
          disable: true,
        };
      else if (choice === "Velocity")
        return {
          name: "Velocity",
          mainunit: "m/s",
          quantities: ["OrbitNumber (n)", "Radius (r)"],
          subunits: ["m", "m"],
          setters: [setOrbitNumber, setRadius],
          getters: [orbitNumber, radius],
        };
      else if (choice === "Radius")
        return {
          name: "Radius",
          mainunit: "m",
          quantities: ["OrbitNumber (n)", "Velocity (v)"],
          subunits: ["m", "m/s"],
          setters: [setOrbitNumber, setVelocity],
          getters: [orbitNumber, velocity],
        };
    };

    const reset = () => {
      setOrbitNumber(null);
      setResult(null);
      setVelocity(null);
      setRadius(null);
    };
    const calcResult = () => {
      let res;
      // L is the angular momentum.
      let L = (orbitNumber * h) / (2 * Math.PI);
      switch (choice) {
        case "Angular momentum":
          res = L;
          break;
        case "Velocity":
          res = L / (m * radius);
          break;
        case "Radius":
          res = L / (m * velocity);
          break;
        default:
          break;
      }

      setResult(res);
    };

    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="Angular momentum">L : Angular momentum</option>
              <option value="Velocity">v : Velocity of Electron</option>
              <option value="Radius">r : Radius of electron</option>
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
              placeholder={"Enter orbit number "}
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
              disabled={choiceData().disable}
            />
          </Form.Group>

          <Form.Group hidden={choiceData().hidden} className="mb-4">
            <Form.Label>Planck's constant(h)</Form.Label>
            <Form.Control readOnly placeholder="6.62607004 × 10⁻³⁴ m² kg / s" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>PI</Form.Label>
            <Form.Control readOnly placeholder={Math.PI} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Mass(m)</Form.Label>
            <Form.Control readOnly placeholder="9.10938356 x 10⁻³¹ kg" />
          </Form.Group>
        </Form>

        <Form.Group className="mb-4">
          <Form.Control
            readOnly
            type="number"
            placeholder={
              result === null ? "Result" : result + " " + choiceData().mainunit
            }
          />
        </Form.Group>

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
      case "Angular momentum":
        currentCall = AngularMomentumCalci();
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
