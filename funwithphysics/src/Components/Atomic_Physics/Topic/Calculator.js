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
    {
      topic: "Radius of orbit",
      formula: "r = n²h²/4π²me² x 1/Z",
      siunit: "A°",
      details:
        "The Bohr radius is part of the fundamental model of the hydrogen atom. The model asserts that the electron can only occupy certain stable orbits in whole number units of 5.29 x 10⁻¹¹m or the Bohr radius. ",
      process:
        "The following equation is used to calculate the radius of the orbit in Angstroms, Å. Where n is the prinicipal quantum number of the orbit and Z is the atomic number.",
      dimension: "L¹",
    },
    {
      topic: "Velocity of electron",
      formula: "vₙ= 2πkZe²/nh",
      siunit: "m/s",
      details:
        "According to the hydrogen spectra given by Bohr's atomic model, which states that the electrons move in fixed paths around the nucleus called orbits. The velocity of these electrons can be known by using the following formula.",
      process:
        "The following equation is used to calculate the velocity of the electron. Where n is the prinicipal quantum number of the orbit and Z is the atomic number",
      dimension: "M⁰L¹T¹",
    },
    {
      topic: "Energy of electron",
      formula: "Eₙ = -me⁴Z²/8ε₀²n²h²",
      siunit: "Electron-volt: eV",
      details:
        "Bohr's formula is used to get the energy of electrons in orbits. We know that the total energy of an electron is the sum of its kinetic and potential energy. The kinetic energy of the electron is given by K.E=mvₙ²/2. The potential energy is given by P.E=-Ze²/4πε₀rₙ.So, Total energy of an electron can be calculated by using the following Bohr's formula",
      process:
        "An electron make jumps between the orbits around the nucleus according to the amount of energy that they have.When they jump from lower orbit to higher orbit they absorb energy, and they lose energy when they jump from higher orbit to lower orbit. We can calculate the energy of the electron by specifying the atomic number(Z) and the orbit number(n) of the electron",
      dimension: "ML²T⁻²",
    },
    {
      topic: "Bragg's equation",
      formula: "nλ = 2dsinΘ",
      siunit: "A°",
      details:
        "When an electromagnetic radiation or X-ray is incident upon  a crystalline sample with wavelength comparable to atomic spacings, it gets scattered by the atoms in the system which results in constructive interference.",
      dimension: "M⁰L¹T⁰",
      process:
        "The wavelength of x-rays, and moving electrons, protons and neutrons can be calculated by using these equation. Here n is an integer determined by the order given, λ is the wavelength, d is the spacing between the planes in the atomic lattice, θ is the angle between the incident ray and the scattering planes.",
    },
    {
      topic: "DeBroglie wavelength",
      formula: "λ = h/p = h/mv",
      siunit: "metre(m)",
      details:
        "Any moving particle with an associated momentum that varies in time or space will behave as a matter wave, also called de broglie wave.A particle’s de Broglie wavelength is usually inversely proportional to its force.",
      dimension: "M⁰L¹T⁰",
      process:
        "The de Broglie equation is used to calculate the wavelength of the moving particle. Where p is the momentum of the given particle and h is the planck's constant.",
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
    const [planck, setPlanck] = useState("6.62607004 * 10⁻³⁴");
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
            <Form.Label hidden={choiceData().hidden}>
              {choiceData().quantities[1]}
            </Form.Label>
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
              hidden={choiceData().hidden}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Planck's constant(h)</Form.Label>
            <Form.Control readOnly placeholder="6.62607004 × 10⁻³⁴ " />
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

  // Radius of orbit calculator.
  const RadiusOfOrbitCalci = () => {
    const [orbit, setOrbit] = useState(null);
    const [protons, setProtons] = useState(null);
    const [result, setResult] = useState(null);

    const calcResult = () => {
      let res;
      res = (0.529 * (orbit * orbit)) / protons;

      setResult(res);
    };

    const reset = () => {
      setOrbit(null);
      setProtons(null);
      setResult(null);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>OrbitNumber (n)</Form.Label>
            <Form.Control
              onChange={(e) => setOrbit(e.target.value)}
              type="number"
              placeholder="Enter the Nᵗʰ orbit"
              value={orbit === null ? "" : orbit}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Protons (Z)</Form.Label>
            <Form.Control
              onChange={(e) => setProtons(e.target.value)}
              type="number"
              placeholder="Enter the number of protons"
              value={protons === null ? "" : protons}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Planck's constant(h)</Form.Label>
            <Form.Control readOnly placeholder="6.62607004 × 10⁻³⁴ " />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>PI</Form.Label>
            <Form.Control readOnly placeholder={Math.PI} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Mass(m)</Form.Label>
            <Form.Control readOnly placeholder="9.10938356 x 10⁻³¹ kg" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Charge(e)</Form.Label>
            <Form.Control readOnly placeholder="1.6 x 10⁻¹⁹ C" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " A°"}
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

  // Velocity of electron calculator.
  const VelocityOfElectronCalci = () => {
    const [orbit, setOrbit] = useState(null);
    const [protons, setProtons] = useState(null);
    const [result, setResult] = useState(null);

    const calcResult = () => {
      let res;
      res = 2.18 * Math.pow(10, 6) * (protons / orbit);

      setResult(res);
    };

    const reset = () => {
      setOrbit(null);
      setProtons(null);
      setResult(null);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>OrbitNumber (n)</Form.Label>
            <Form.Control
              onChange={(e) => setOrbit(e.target.value)}
              type="number"
              placeholder="Enter the Nᵗʰ orbit"
              value={orbit === null ? "" : orbit}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Protons (Z)</Form.Label>
            <Form.Control
              onChange={(e) => setProtons(e.target.value)}
              type="number"
              placeholder="Enter the number of protons"
              value={protons === null ? "" : protons}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Planck's constant(h)</Form.Label>
            <Form.Control readOnly placeholder="6.62607004 × 10⁻³⁴ " />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>PI</Form.Label>
            <Form.Control readOnly placeholder={Math.PI} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Charge(e)</Form.Label>
            <Form.Control readOnly placeholder="1.6 x 10⁻¹⁹ C" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>K</Form.Label>
            <Form.Control readOnly placeholder="9 x 10⁹ N " />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " m/s"}
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

  // Energy of electron calculator.
  const EnergyOfElectronCalci = () => {
    const [orbit, setOrbit] = useState(null);
    const [protons, setProtons] = useState(null);
    const [result, setResult] = useState(null);

    const calcResult = () => {
      let res;
      res = -13.6 * ((protons * protons) / (orbit * orbit));

      setResult(res);
    };

    const reset = () => {
      setOrbit(null);
      setProtons(null);
      setResult(null);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>OrbitNumber (n)</Form.Label>
            <Form.Control
              onChange={(e) => setOrbit(e.target.value)}
              type="number"
              placeholder="Enter the Nᵗʰ orbit"
              value={orbit === null ? "" : orbit}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Protons (Z)</Form.Label>
            <Form.Control
              onChange={(e) => setProtons(e.target.value)}
              type="number"
              placeholder="Enter the number of protons"
              value={protons === null ? "" : protons}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Mass(m)</Form.Label>
            <Form.Control readOnly placeholder="9.10938356 x 10⁻³¹ kg" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Charge(e)</Form.Label>
            <Form.Control readOnly placeholder="1.6 x 10⁻¹⁹ C" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Planck's constant(h)</Form.Label>
            <Form.Control readOnly placeholder="6.62607004 × 10⁻³⁴ " />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Epsilon(ε₀)</Form.Label>
            <Form.Control readOnly placeholder="8.854187817 × 10⁻¹²" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " ev"}
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

  // Bragg's Equation.
  const BragsEquation = () => {
    const [n, setN] = useState(null);
    const [angle, setAngle] = useState(null);
    const [wavelength, setWavelength] = useState(null);
    const [choice, setChoice] = useState("Wavelength");
    const [d, setD] = useState(null);
    const [result, setResult] = useState(null);

    function handleChange(e) {
      setResult(null);
      setN(null);
      setAngle(null);
      setWavelength(null);
      setChoice(e.target.value);
      choiceData();
      setD(null);
    }

    const choiceData = () => {
      if (choice === "Wavelength")
        return {
          name: "Wavelength",
          mainunit: "A°",
          quantities: ["Order of diffraction (n)", "Distance (d)", "angle (Θ)"],
          subunits: ["n", "A°", "degrees (Θ)"],
          setters: [setN, setD, setAngle],
          getters: [n, d, angle],
        };
      else if (choice === "d")
        return {
          name: "d",
          mainunit: "A°",
          quantities: [
            "angle (Θ)",
            "Order of diffraction (n)",
            "Wavelength (λ)",
          ],
          subunits: ["degrees (Θ)", "n", "A°"],
          setters: [setAngle, setN, setWavelength],
          getters: [angle, n, wavelength],
        };
      else if (choice === "Angle")
        return {
          name: "Angle",
          mainunit: "degree",
          quantities: [
            "Order of diffraction (n)",
            "Wavelength (λ)",
            "Distance (d)",
          ],
          subunits: ["n", "m", "m"],
          setters: [setN, setWavelength, setD],
          getters: [n, wavelength, d],
        };
    };

    const reset = () => {
      setN(null);
      setAngle(null);
      setWavelength(null);
      setD(null);
      setResult(null);
    };

    const calcResult = () => {
      let res;

      switch (choice) {
        case "Wavelength":
          const sineValue = Math.sin(angle * (Math.PI / 180));
          res = (2 * d * sineValue) / n;
          break;
        case "Angle":
          //setD(Number(d));
          const numerator = n * (wavelength * Math.pow(10, -10));
          res = Math.asin((numerator / (2 * d)) * (Math.PI / 180));
          break;
        case "d":
          const angleValue = Math.sin(angle * (Math.PI / 180)) * 2;
          res = (n * (wavelength * Math.pow(10, -10))) / angleValue;
          res = res * Math.pow(10, 10);
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
              <option value="Wavelength">λ : Wavelength of x-ray</option>
              {/* <option value="Angle">Θ : Angle of incident x-ray</option> */}
              <option value="d">d : distance between layers of atom</option>
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
              placeholder={
                choiceData().subunits[0] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[0]
              }
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
            <Form.Label>{choiceData().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[2](e.target.value)}
              type="string"
              placeholder={
                choiceData().subunits[2] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[2]
              }
              value={
                choiceData().getters[2] === null ? "" : choiceData().getters[2]
              }
            />
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

  // DeBroglie Wavelength Calculator.
  const DeBroglieWavelength = () => {
    const [velocity, setVelocity] = useState(null);
    const [result, setResult] = useState(null);

    const reset = () => {
      setResult(null);
      setVelocity(null);
    };

    const calcResult = () => {
      let res;
      res = (6.626 * Math.pow(10, -34)) / (9.11 * Math.pow(10, -31) * velocity);

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Velocity</Form.Label>
            <Form.Control
              onChange={(e) => setVelocity(e.target.value)}
              type="number"
              placeholder="Enter the velocity (v)"
              value={velocity === null ? "" : velocity}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Planck's constant(h)</Form.Label>
            <Form.Control readOnly placeholder="6.62607004 × 10⁻³⁴ " />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Mass(m)</Form.Label>
            <Form.Control readOnly placeholder="9.10938356 x 10⁻³¹ kg" />
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
      case "Radius of orbit":
        currentCall = RadiusOfOrbitCalci();
        break;
      case "Velocity of electron":
        currentCall = VelocityOfElectronCalci();
        break;
      case "Energy of electron":
        currentCall = EnergyOfElectronCalci();
        break;
      case "Bragg's equation":
        currentCall = BragsEquation();
        break;
      case "DeBroglie wavelength":
        currentCall = DeBroglieWavelength();
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
