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
    {
      topic: "Mass and Energy",
      details: `The mass and energy equivalence shows that the mass and energy are inter-convertible. It means if you have mass you have got energy inside that body. Whenver that body loses mass or has a mass defect it releases some amount of energy. This relation was given by Physicist Albert Einstein.`,
      siunit: [
        "Energy  : Joules",
        <br />,
        "Mass : Kilograms",
        <br />,
        "Velocity : meter/sec",
        <br />,
      ],
      process:
        "To find the Energy(E), we need to know the the mass defect of the particular Substance and speed of light which is c = 3x10⁸ m/s.",
      formula: "E=mc²",
      dimension: "E = M¹L²T⁻², m = M¹ , c = LT⁻¹",
    },

    {
      topic: "Radius of Nucleus",
      details: `The nucleus of an atom has no sharply defined boundaries and, although it can be considered spherical in form, care must be taken when speaking of its ‘radius’. These radii can be obtained experimentally by deflection experiments using fast neutrons. The results show that the nuclear radius is proportional to ∛A where A is the mass number.`,
      siunit: [
        "Radius  : Meter",
        <br />,
        "Mass Number : Dimensionless",
        <br />,
      ],
      process:
        "To find the Radius of Nucleus(R), we need to know the the mass Number(A) of the particular Substance and Proportionality constant(Rₒ) which is Rₒ = 1.2 x 10⁻¹⁵.",
      formula: "R = Rₒ x ∛A",
      dimension: "R = L¹, A = M⁰",
    },

    {
      topic: "Q value",
      details: `In nuclear physics, the Q value for a reaction is the amount of energy absorbed or released during the nuclear reaction, it can be positive and negative as well. The value relates to the enthalpy of a chemical reaction or the energy of radioactive decay products. It can be determined from the masses of reactants and products.`,
      siunit: [
        "Q value  : MeV",
        <br />,
        "Mass Defect : amu",
        <br />,
      ],
      process:
        "To find the Q value, we need to know the the mass defect of the particular reaction and the energy released when 1 amu is converted to energy which is equal to 931.5 MeV. Speed of Light = 3 x 10⁸ m/s .",
      formula: "Q = Δm x c²",
      dimension: "Q = M¹ L² T⁻², Δm = M¹, c = L¹T⁻¹",
    },

    {
      topic: "Binding Energy",
      details: `Binding energy is the smallest amount of energy required to remove a particle from a system of particles or to disassemble a system of particles into individual parts.`,
      siunit: [
        "Energy  : Joule",
        <br />,
        "Mass Defect : Kg",
        <br />,
      ],
      process:
        "To find the Binding Energy(B.E) value, we need to know the the mass defect(Δm) of the particular reaction and for Binding Energy per nucleon we also need to know the mass number(A). The Speed of Light = 3 x 10⁸ m/s .",
      formula: "B.E = Δm x c², B.E per Nucleon = (Δm x c²) / A",
      dimension: "B.E = M¹ L² T⁻², Δm = M¹, c = L¹T⁻¹",
    },

    {
      topic: "Half and Mean Lifetime",
      details: `Half-life refers to the amount of time it takes for half of a particular sample to react i.e it refers to the time that a particular quantity requires to reduce its initial value to half. Mean lifetime of all the nuclei of a particular unstable atomic species is the time interval which is thought as the sum of the lifetimes of all the individual unstable nuclei in a sample, divided by the total number of unstable nuclei present. `,
      siunit: [
        "Half Life  : Seconds",
        <br />,
        "Mean Life : Seconds",
        <br />,
        "Decay Constant : 1/Seconds",
        <br />,
      ],
      process:
        "To find the Half Life and Mean Life value, we need to know the the Decay Constant(λ) of the particular Substance.",
      formula: "Half Life = ln2/λ, Mean Life = 1/λ",
      dimension: "Half Life = T, Mean Life = T, λ = T⁻¹",
    },

    {
      topic: "Carbon Dating",
      details: `Carbon Dating is a method for determining the age of an object containing organic material by using the properties of radiocarbon, a radioactive isotope of carbon. `,
      siunit: [
        "Amount of ¹⁴C  : Grams",
        <br />,
        "Time : Seconds",
        <br />,
      ],
      process:
        "To find the Initial amount of ¹⁴C, Final Amount of ¹⁴C, and the time taken to reach the final amount of ¹⁴C, we need at least two known quantities to find the third quantity.",
      formula: "Initial Amount of ¹⁴C = Final Amount of ¹⁴C x e⁽⁻⁰·⁰⁰⁰¹²¹⁶ ˣ ᵀⁱᵐᵉ⁾",
      dimension: "Amount of ¹⁴C = M¹, Time = T¹",
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

  // Mass-Energy Calculator
  function MassEnergy() {
    const [result, setResult] = useState(null);
    const [mass, setmass] = useState(null);

    const handleClick = () => {
      let res = mass*(9);
      setResult(res);
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass Defect</Form.Label>
            <Form.Control
              onChange={(e) => setmass(e.target.value)}
              type="number"
              placeholder="Enter the Mass Defect"
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Energy Released(J)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null ? "Result" : result + " x 10¹⁶ Joules"
              }
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => setResult(null)} type="reset">
            Reset
          </Button>
        </Form>
      </React.Fragment>
    );
  }

  //Radius of Nucleus Calculator
  function Radius() {
    const [result, setResult] = useState(null);
    const [massnumber, setmassnumber] = useState(null);

    const R0 = 1.2;
    const handleClick = () => {
      let res = (R0)*Math.pow(massnumber, 1/3 );  
      setResult(res);
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass Number</Form.Label>
            <Form.Control
              onChange={(e) => setmassnumber(e.target.value)}
              type="number"
              placeholder="Enter the Mass Number"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Proportionality Constant(Rₒ)</Form.Label>
            <Form.Control readOnly type="number" placeholder={"1.2 x 10⁻¹⁵"} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Radius of Nucleus</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null ? "Result" : result + " x 10⁻¹⁵ m"
              }
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => setResult(null)} type="reset">
            Reset
          </Button>
        </Form>
      </React.Fragment>
    );
  }

  //Q value
  function Qvalue() {
    const [result, setResult] = useState(null);
    const [massdefect, setmassdefect] = useState(null);

    const A = 931.5;//Energy released in Mev per amu.
    const handleClick = () => {
      let res = (massdefect)*A;  
      setResult(res);
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass Defect (in amu)</Form.Label>
            <Form.Control
              onChange={(e) => setmassdefect(e.target.value)}
              type="number"
              placeholder="Enter the Mass Defect"
            />
          </Form.Group> 

          <Form.Group className="mb-4">
            <Form.Label>Speed of Light (c)</Form.Label>
            <Form.Control readOnly type="number" placeholder={"3 x 10⁸ ms⁻¹"} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Q value</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null ? "Result" : result + " MeV"
              }
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => setResult(null)} type="reset">
            Reset
          </Button>
        </Form>
      </React.Fragment>
    );
  }

  //Binding Energy Calculator
  const BindingEnergy = () => {
    const [choice, setChoice] = useState("Binding Energy");
    const [MassDefect, setMassDefect] = useState(null);
    const [MassNumber, setMassNumber] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setMassNumber(null);
      setMassDefect(null);
      setResult(null);
    };
    const C = 3 * Math.pow(10, 8);

    const handleChange = (e) => {
      setChoice(e.target.value);
      reset();
    };
    const calcResult = () => {
      let res;
      if (choice === "Binding Energy") {
        res = MassDefect * C * C;
      } else if (choice === "Binding Energy per Nucleon") {
        res = (MassDefect * C * C)/MassNumber;
      }
      setResult(res);
    };
    const choiceData = () => {
      if (choice === "Binding Energy")
        return {
          name: "Binding Energy",
          mainunit: "joule",
        };
      if (choice === "Binding Energy per Nucleon")
        return {
          name: "Binding Energy per Nucleon",
          mainunit: "joule/nucleon",
        };
    };
    return (
      <>
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
              <option value="Binding Energy">Binding Energy</option>
              <option value="Binding Energy per Nucleon">Binding Energy per Nucleon</option>
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
          {choice === "Binding Energy" ? (
            <Form.Group className="mb-4">
              <Form.Label>Mass Defect (Δm)</Form.Label>
              <Form.Control
                onChange={(e) => setMassDefect(e.target.value)}
                type="number"
                placeholder={"Enter Mass Defect in Kg"}
                value={MassDefect === null ? "" : MassDefect}
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-4">
              <Form.Label>Mass Defect (Δm)</Form.Label>
              <Form.Control
                onChange={(e) => setMassDefect(e.target.value)}
                type="number"
                placeholder={"Enter Mass Defect in Kg"}
                value={MassDefect === null ? "" : MassDefect}
              />
              <br/>
              <Form.Label>Mass Number (A)</Form.Label>
              <Form.Control
                onChange={(e) => setMassNumber(e.target.value)}
                type="number"
                placeholder={"Enter the mass number"}
                value={MassNumber === null ? "" : MassNumber}
              />
              
            </Form.Group>
            
          )}
          <Form.Group className="mb-4">
            <Form.Label>Speed of ligth (C)</Form.Label>
            <Form.Control readOnly type="number" placeholder={"3 * 10⁸ m/s"} />
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
      </>
    );
  };

  const Lifetime = () => {
    const [choice, setChoice] = useState("Half Life");
    const [DecayConstant, setDecayConstant] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setDecayConstant(null);
      setResult(null);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      reset();
    };
    const calcResult = () => {
      let res;
      if (choice === "Half Life") {
        res = Math.LN2/DecayConstant;
      } else if (choice === "Mean Life") {
        res = 1/DecayConstant;
      }
      setResult(res);
    };
    const choiceData = () => {
      if (choice === "Half Life")
        return {
          name: "Half Life",
          mainunit: "seconds",
        };
      if (choice === "Mean Life")
        return {
          name: "Mean Life",
          mainunit: "seconds",
        };
    };
    return (
      <>
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
              <option value="Half Life">Half Life</option>
              <option value="Mean Life">Mean Life</option>
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
          {choice === "Half Life" ? (
            <Form.Group className="mb-4">
              <Form.Label>Decay Constant(λ)</Form.Label>
              <Form.Control
                onChange={(e) => setDecayConstant(e.target.value)}
                type="number"
                placeholder={"Enter Decay Constant in s⁻¹"}
                value={DecayConstant === null ? "" : DecayConstant}
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-4">
              <Form.Label>Decay Constant(λ)</Form.Label>
              <Form.Control
                onChange={(e) => setDecayConstant(e.target.value)}
                type="number"
                placeholder={"Enter Decay Constant in s⁻¹"}
                value={DecayConstant === null ? "" : DecayConstant}
              />
            </Form.Group>
            
          )}
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
      </>
    );
  };

  //Carbon Dating Calculator
  function CarbonDating() {
    const [result, setResult] = useState(null);
    const [initialamt, setInitialamt] = useState(null);
    const [finalamt, setFinalamt] = useState(null);
    const [time, setTime] = useState(null);
    const [choice, setChoice] = useState("initialamt");
    function handleChange(e) {
      console.log(e.target.value);
      setResult(null);
      setInitialamt(null);
      setFinalamt(null);
      setTime(null);
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res;
      let A = 0.0001216*time;
      if (choice === "initialamt") {
        res = (finalamt)*(Math.exp(A));
      } else if (choice === "finalamt") {
        res = (initialamt)/(Math.exp(A));
      } else if (choice === "time") {
        res = (Math.log(initialamt/finalamt)/0.0001216);
      }
      setResult(res);
    };
    function reset() {
      setResult(null);
      setInitialamt(null);
      setFinalamt(null);
      setTime(null);
    }
    const choiceData = () => {
      if (choice === "initialamt")
        return {
          name: "Initial Amount",
          mainunit: "grams",
          quantities: ["Final Amount of ¹⁴C", "Time"],
          subunits: ["grams", "Years"],
          setters: [setFinalamt, setTime],
          getters: [finalamt, time],
        };
      else if (choice === "finalamt")
        return {
          name: "Final Amount",
          mainunit: "grams",
          quantities: ["Initial Amount of ¹⁴C", "Time"],
          subunits: ["grams", "Years"],
          setters: [setInitialamt, setTime],
          getters: [initialamt, time],
        };
      else if (choice === "time")
        return {
          name: "Time",
          mainunit: "years",
          quantities: ["Initial Amount of ¹⁴C", "Final Amount of ¹⁴C"],
          subunits: ["grams", "grams"],
          setters: [setInitialamt, setFinalamt],
          getters: [initialamt, finalamt],
        };
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" onChange={(e) => handleChange(e)}>
              {/* <option value="displacement">∆x : Displacement</option> */}
              <option value="initialamt">Initial Amount</option>
              <option value="finalamt">Final Amount</option>
              <option value="time">Time</option>
              {/* <option value="acceleration">a : Constant Acceleration</option> */}
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
              placeholder={"Enter in " + choiceData().subunits[1]}
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
      </>
    );
  }


  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Mass defect":
        currentCall = MassDefect();
        break;
      case "Mass and Energy":
        currentCall = MassEnergy();
        break;
      case "Radius of Nucleus":
        currentCall = Radius();
        break;
      case "Q value":
        currentCall = Qvalue();
        break;
      case "Binding Energy":
        currentCall = BindingEnergy();
        break;
      case "Half and Mean Lifetime":
        currentCall = Lifetime();
        break;
      case "Carbon Dating":
        currentCall = CarbonDating();
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
