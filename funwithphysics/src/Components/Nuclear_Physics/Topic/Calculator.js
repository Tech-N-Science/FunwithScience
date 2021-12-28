import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../NuclearPhysics.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
import {constant} from '../../Solution/allConstants';
import {SI} from '../../Solution/allSIUnits';
import Modal from "react-bootstrap/Modal";


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
      details: `The nucleus of an atom has no sharply defined borders, and while it may be thought of as spherical in shape, caution must be used when referring to its 'radius.' These radii may be measured experimentally using rapid neutron deflection tests. According to the results, the nuclear radius is proportional to ∛A, where A is the mass number.`,
      siunit: [
        "Radius  : Meter",
        <br />,
        "Mass Number : Dimensionless",
        <br />,
      ],
      process:
        "To find the Radius of Nucleus(R), we need to know the the mass Number(A) of the particular Substance and Proportionality constant(Rₒ) which is Rₒ = 1.2 x 10⁻¹⁵.",
      formula: "R = Rₒ x ∛A",
      dimension: "R = L¹",
    },

    {
      topic: "Q value",
      details: `In nuclear physics, the Q value for a reaction is the amount of energy absorbed or released during the nuclear reaction, it can be positive and negative as well. The value relates to the enthalpy of a chemical reaction or the energy of radioactive decay products. It can be determined from the masses of reactants and products.`,
      siunit: ["Q value  : MeV", <br />, "Mass Defect : amu", <br />],
      process:
        "To find the Q value, we need to know the the mass defect of the particular reaction and the energy released when 1 amu is converted to energy which is equal to 931.5 MeV. ",
      formula: "Q = (mᵣ-mₚ) x 931.5 MeV",
      dimension: "Q = M¹ L² T⁻², Δm = M¹, c = L¹T⁻¹",
    },

    {
      topic: "Binding Energy",
      details: `Binding energy is commonly described as the minimum amount of energy necessary to remove a particle from a particle system. In other words, energy is employed to divide a system of particles into single units. Binding energy is mostly studied in atomic physics, chemistry, and condensed matter physics. The binding energy word is used in nuclear physics to define the separation energy.`,
      siunit: ["Energy  : Joule", <br />, "Mass Defect : Kg", <br />],
      process:
        "To find the Binding Energy(B.E) value, we need to know the the mass defect(Δm) of the particular reaction and for Binding Energy per nucleon we also need to know the mass number(A). The Speed of Light = 3 x 10⁸ m/s .",
      formula: "B.E = Δm x c², B.E per Nucleon = (Δm x c²) / A",
      dimension: "B.E = M¹ L² T⁻², Δm = M¹, c = L¹T⁻¹",
    },

    {
      topic: "Half and Mean Lifetime",
      details: `The half-life of a sample refers to the time it takes for half of a sample to respond, or the time it takes for a quantity to decline from its initial value to half. The time period calculated as the sum of the lives of all the individual unstable nuclei in a sample divided by the total number of unstable nuclei present is known as the mean lifespan of all the nuclei of a specific unstable atomic species. `,
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
      details: `Carbon-14 dating, also known as radiocarbon dating, is a method of determining age that is based on radiocarbon decay to nitrogen. Carbon-14 is constantly created in nature by the interaction of neutrons with nitrogen-14 in the Earth's atmosphere; the neutrons required for this reaction are produced by cosmic rays interacting with the atmosphere.`,
      siunit: ["Amount of ¹⁴C  : Grams", <br />, "Time : Seconds", <br />],
      process:
        "To find the Initial amount of ¹⁴C, Final Amount of ¹⁴C, and the time taken to reach the final amount of ¹⁴C, we need at least two known quantities to find the third quantity.",
      formula:
        "Initial Amount of ¹⁴C = Final Amount of ¹⁴C x e⁽⁻⁰·⁰⁰⁰¹²¹⁶ ˣ ᵀⁱᵐᵉ⁾",
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
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const reset = () => {
      setAtomicNumber(null);
      setMassNumber(null);
      setMatom(null);
      setResult(null);
      setShowSolution(false);
    };
    const Melectron = 0.000548597;
    const Mptoton = 1.007277;
    const Mneutron = 1.008665;
    const calcResult = () => {
      if(atomicNumber!==null && massNumber!==null && matom!==null){
      let res;
      res =
        atomicNumber * (Mptoton + Melectron) +
        (massNumber - atomicNumber) * Mneutron -
        matom;
      setResult(res);
      setShowSolution(true);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      Atomic_Number: atomicNumber,
      Mass_Number: massNumber,
      Mass_Atom: matom,
    }

    const insertValues = `[${atomicNumber}${SI["number"]}(${constant["mass_proton"]} + ${constant["mass_electron"]}) + (${massNumber}${SI["number"]} - ${atomicNumber}${SI["number"]})${constant["mass_neutron"]}] - (${matom}${SI["atomic_mass"]})`;
    const constants = ["mass_electron","mass_proton","mass_neutron"];


    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
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
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="[Z(mp+me)+(A-Z)mn]-matom"
              toFind="Mass Defect"
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
              placeholder={result === null ? "Result" : result + " amu"}
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

  // Mass-Energy Calculator
  function MassEnergy() {
    const [result, setResult] = useState("");
    const [mass, setmass] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const handleClick = () => {
      if (mass!== ""){
      let res = mass * (3*Math.pow(10,8))*(3*Math.pow(10,8));
      setShowSolution(true);
      setResult(res);
      }else {
        setShowModal(true)
      }
    };

    const givenValues = {
      MassDefect: mass,
    };

    const resetForm = () => {
      setmass("");
      setShowSolution(false);
      setResult("");
    };

    const insertValues = ` ${mass}${SI["MassDefect"]} * (${constant["c"]})²`;
    const constants = ["c"];

    return (
      <React.Fragment>
         <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass Defect(m)</Form.Label>
            <Form.Control
              onChange={(e) => setmass(e.target.value)}
              type="number"
              value={mass}
              placeholder="Enter the Mass Defect in kg"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Speed of Light (c)</Form.Label>
            <Form.Control readOnly type="number" placeholder={"3 x 10⁸ m/s"} />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="mc²"
              toFind="Energy Released"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Energy Released(E)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === "" ? "Result" : result + " Joule"
              }
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  //Radius of Nucleus Calculator
  function Radius() {
    const [result, setResult] = useState("");
    const [massnumber, setmassnumber] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const R0 = 1.2 * Math.pow(10, -15);
    const handleClick = () => {
      if(massnumber!==""){
      let res = R0 * Math.pow(massnumber, 1 / 3);
      setResult(res);
      setShowSolution(true);
  }else{
    setShowModal(true)
  }
  };

  const givenValues = {
    MassNumber: massnumber,
  };

  const resetForm = () => {
    setmassnumber("");
    setShowSolution(false);
    setResult("");
  };

  const insertValues = `${constant["R₀"]} * ∛${massnumber}${SI["massnumber"]}`;
  const constants = ["R₀"];

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass Number(A)</Form.Label>
            <Form.Control
              onChange={(e) => setmassnumber(e.target.value)}
              type="number"
              value={massnumber}
              placeholder="Enter the Mass Number"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Proportionality Constant(Rₒ)</Form.Label>
            <Form.Control readOnly type="number" placeholder={"1.2 x 10⁻¹⁵ m"} />
          </Form.Group>

          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="Rₒ x ∛A"
              toFind="Radius of Nucleus"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}

          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Radius of Nucleus(R)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " m"}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  //Q value
  function Qvalue() {
    const [result, setResult] = useState(null);
    const [massreact, setmassreact] = useState("");
    const [massproduct, setmassproduct] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const A = 931.5; //Energy released in Mev per amu.
    const handleClick = () => {
      if(massreact!=="" && massproduct !== ""){
      let res = (massreact - massproduct) * A;
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true)
      }
    };

    const givenValues = {
      Reactant_Mass: massreact,
      Product_Mass: massproduct,
    };

    const resetForm = () => {
      setmassreact("");
      setmassproduct("");
      setShowSolution(false);
      setResult("");
    };

    const insertValues = `(${massreact}${SI["Reactant_Mass"]} - ${massproduct}${SI["Product_Mass"]}) * 931.5 MeV`;
    const constants = ["constant"];

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass of reactant (mᵣ)</Form.Label>
            <Form.Control
              onChange={(e) => setmassreact(e.target.value)}
              type="number"
              value={massreact}
              placeholder="Enter the Mass of reactant in amu"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass of product(mₚ)</Form.Label>
            <Form.Control
              onChange={(e) => setmassproduct(e.target.value)}
              type="number"
              value={massproduct}
              placeholder="Enter the Mass of product in amu"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Constant</Form.Label>
            <Form.Control readOnly type="number" placeholder={"931.5 MeV"} />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
          <Solution
              givenValues={givenValues}
              formula="(mᵣ-mₚ) x 931.5 MeV"
              toFind="Q Value"
              insertValues={insertValues}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}

          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Q value(Q)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " MeV"}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  //Binding Energy Calculator
  const BindingEnergy = () => {
    const [choice, setChoice] = useState("Binding Energy");
    const [MassDefect, setMassDefect] = useState("");
    const [MassNumber, setMassNumber] = useState("");
    const [result, setResult] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setMassNumber("");
      setMassDefect("");
      setResult("");
      setShowSolution(false);
    };

    const C = 3 * Math.pow(10, 8);

    const handleChange = (e) => {
      setChoice(e.target.value);
      choiceData();
      reset();
    };

    const givenValues = () => {
      if (choice === "Binding Energy")
        return {
      MassDefect: MassDefect,
    };
    else
    return{
      MassDefect: MassDefect,
      MassNumber: MassNumber,
    };
  };

    const calcResult = () => {
      let res;
      if (choice === "Binding Energy" && MassDefect!=="") {
        res = MassDefect * C * C;
        setShowSolution(true);
      } else if (choice === "Binding Energy per Nucleon" && MassNumber !=="" && MassNumber !== "") {
        res = (MassDefect * C * C) / MassNumber;
        setShowSolution(true);
      }else {
        setShowModal(true)
      }
      setResult(res);
    };

    const insertValues = () => {
      if (choice === "Binding Energy")
        return `${MassDefect}${SI["MassDefect"]} * (${constant["c"]})²`;
      else
        return `(${MassDefect}${SI["MassDefect"]} * (${constant["c"]})²) / ${MassNumber}`; 
    }
    const constants = ["c"];

    const choiceData = () => {
      if (choice === "Binding Energy")
        return {
          name: "Binding Energy",
          mainunit: "joule",
          formula: "Δm x c²",
        };
      if (choice === "Binding Energy per Nucleon")
        return {
          name: "Binding Energy per Nucleon",
          mainunit: "joule/nucleon",
          formula: "(Δm x c²) / A",
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="Binding Energy">Binding Energy</option>
              <option value="Binding Energy per Nucleon">
                Binding Energy per Nucleon
              </option>
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
              <br />
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
            <Form.Label>Speed of ligth (c)</Form.Label>
            <Form.Control readOnly type="number" placeholder={"3 * 10⁸ m/s"} />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
          <Solution
              givenValues={givenValues()}
              formula={choiceData().formula}
              toFind={choiceData().name}
              insertValues={insertValues()}
              result={result}
              constants={constants}
            />
          </Form.Group>
        ) : null}
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === ""
                  ? "Result"
                  : result + " " + choiceData().mainunit
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

  //Life Time Calculator
  const Lifetime = () => {
    const [choice, setChoice] = useState("Half Life");
    const [DecayConstant, setDecayConstant] = useState("");
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setDecayConstant("");
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      choiceData();
      reset();
    };

    const givenValues = () => {
      return {
        DecayConstant: DecayConstant,
      }
    };

    const insertValues = () => {
      if (choice === "Half Life")
        return `ln(2) / ${DecayConstant}${SI["DecayConstant"]}`;
      else
      return `1 / ${DecayConstant}${SI["DecayConstant"]}`;
    }

    const calcResult = () => {
      let res;
      if (choice === "Half Life" && DecayConstant !=="") {
        res = Math.LN2 / DecayConstant;
        setShowSolution(true);
      } else if (choice === "Mean Life" && DecayConstant !=="") {
        res = 1 / DecayConstant;
        setShowSolution(true);
      }else {
        setShowModal(true)
      }
      setResult(res);
    };
    const choiceData = () => {
      if (choice === "Half Life")
        return {
          name: "Half Life",
          mainunit: "s",
          formula: "ln(2) / λ"
        };
      if (choice === "Mean Life")
        return {
          name: "Mean Life",
          mainunit: "s",
          formula: "1 / λ"
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
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
                  : result + " " + choiceData().mainunit
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

  //Carbon Dating Calculator
  function CarbonDating() {
    const [result, setResult] = useState(null);
    const [initialamt, setInitialamt] = useState("");
    const [finalamt, setFinalamt] = useState("");
    const [timeyr, setTimeyr] = useState("");
    const [choice, setChoice] = useState("initialamt");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleChange(e) {
      console.log(e.target.value);
      setResult(null);
      setInitialamt("");
      setFinalamt("");
      setTimeyr(""); //time in years
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res;
      let A = -0.0001216 * timeyr;
      if (choice === "initialamt" && finalamt !=="" && timeyr !=="") {
        res = finalamt * Math.exp(A);
        setShowSolution(true);
      } else if (choice === "finalamt" && initialamt!=="" && timeyr!=="") {
        res = initialamt / Math.exp(A);
        setShowSolution(true);
      } else if (choice === "timeyr" && initialamt!=="" && finalamt!=="") {
        res = Math.log(initialamt / finalamt) / -0.0001216;
        setShowSolution(true);
      }else {
        setShowModal(true)
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "initialamt")
        return {
      Final_Amount: finalamt,
      Time_year: timeyr,
    };
    else if( choice === "finalamt")
    return{
      Initial_Amount : initialamt,
      Time_year: timeyr,
    };
    else
    return{
      Initial_Amount : initialamt,
      Final_Amount: finalamt,
    }
    };

    function reset() {
      setResult(null);
      setInitialamt("");
      setFinalamt("");
      setTimeyr("");
      setShowSolution(false);
    }

    const insertValues = () => {
      if (choice === "initialamt")
        return `${finalamt}${SI["Final_Amount"]} * e^(-0.0001216 * ${timeyr}${SI["Time_year"]})`;
      else if(choice === "finalamt")
      return `${initialamt}${SI["Initial_Amount"]} / e^(-0.0001216 * ${timeyr}${SI["Time_year"]})`;
      else
      return `ln(${finalamt}${SI["Final_Amount"]} / ${initialamt}${SI["Initial_Amount"]}) / 0.0001216`;
    }

    const choiceData = () => {
      if (choice === "initialamt")
        return {
          name: "Initial Amount",
          mainunit: "g",
          formula: "Final Amount of ¹⁴C x e⁽⁻⁰·⁰⁰⁰¹²¹⁶ ˣ ᵀⁱᵐᵉ⁾",
          quantities: ["Final Amount of ¹⁴C", "Time"],
          subunits: ["grams", "Years"],
          setters: [setFinalamt, setTimeyr],
          getters: [finalamt, timeyr],
        };
      else if (choice === "finalamt")
        return {
          name: "Final Amount",
          mainunit: "g",
          formula: "Initial Amount of ¹⁴C / e⁽⁻⁰·⁰⁰⁰¹²¹⁶ ˣ ᵀⁱᵐᵉ⁾",
          quantities: ["Initial Amount of ¹⁴C", "Time"],
          subunits: ["grams", "Years"],
          setters: [setInitialamt, setTimeyr],
          getters: [initialamt, timeyr],
        };
      else if (choice === "timeyr")
        return {
          name: "Time_year",
          mainunit: "years",
          formula: "ln(Final Amount of ¹⁴C / Initial Amount of ¹⁴C) / 0.0001216",
          quantities: ["Initial Amount of ¹⁴C", "Final Amount of ¹⁴C"],
          subunits: ["grams", "grams"],
          setters: [setInitialamt, setFinalamt],
          getters: [initialamt, finalamt],
        };
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="initialamt">Initial Amount</option>
              <option value="finalamt">Final Amount</option>
              <option value="timeyr">Time</option>
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
                  : result + " " + choiceData().mainunit
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
