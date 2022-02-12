import React, { useState } from "react";
import '../../PysicsStyles/physicscalculator.css'
import { Form, Button } from "react-bootstrap";


import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
// import { constant } from "../../Solution/allConstants";
import { SI } from "../../Solution/allSIUnits";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";

function Calculator() {
  let {topic} = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Vernier Calliper",
      details: `A vernier scale is a visual tool used to take an accurate measurement reading between two graduation markers on a linear scale by applying mechanical interpolation, therefore enhancing resolution and minimising measurement uncertainty by reducing human estimating error.`,
      formula: [
        "Least Count = Smallest Reading on main scale / Number of readings on vernier scale",
        <br />,
        "Length  = MSR + (VSR x Least Count)",
      ],
      process:
        "To find the least count we have to know the smallest reading on the main scale reading and the number of readings on vernier scale. By dividing the first term with the second we can find the least count. For the reading of the vernier calliper or the length, we should have the MSR which is main scale reading , VSR which is vernier scale reading and the least count. Then we can use the formula MSR + (VSR x Least Count) to find the Length.",
      siunit: "(mm)",
      dimension: "[L¹]",
    },
    {
      topic: "Screw Gauge",
      details: `A screw Gauge is a device incorporating a calibrated screw widely used for accurate measurement of components in mechanical engineering. It is mostly used to measure the diameters of thin objects with good accuracy and precision.`,
      formula:
        "Pitch = Distance Travelled by screw / Number of Rotations,LeastCount = Pitch / Number of Divisions on circular scale, Reading = MSR + (CSR x Least Count) ",
      process: `Pitch of a screw gauge is the distance it moves in one rotation. So to calculate the pitch we should know the Distance travelled by the Screw and the number of rotations. By dividing the first term with the second we get the value of Pitch. The least count is the smallest distance a screw gauge can measure. Least count is calculated by dividing the pitch by the number of rotations on the circular scale. The reading of the screw gauge can be known by the formula: MSR + (CSR x Least Count). MSR is the main scale reading, CSR is the Circular scaler reading.`,
      siunit: "(mm)",
      dimension: "[L¹]",
    },
    {
      topic: "Young's Modulus",
      details: `The ratio of normal stress to longitudinal strain inside the elastic limit is defined as Young's Modulus of Elasticity.`,
      formula: "Y = Normal Stress / longitudinal Strain, Y = (F x ΔL)/(L x A)",
      process: `The Young's Modulus can be found using two formulas, First is the ratio of normal stress to the Longitudinal Strain within the elastic limit. The second formula is the ratio of force times the change in length to the area of the cross section times the length.`,
      siunit: "(Pa)",
      dimension: "[ML⁻¹T⁻²]",
    },
    {
      topic: "Bulk Modulus",
      details: `Bulk Modulus is defined as the volumetric stress to volumetric strain ratio inside the elastic limit.`,
      formula:
        "Y = Volumetric Stress / Volumetric Strain, Y = (F x ΔV)/(V x A)",
      process: `The Bulk Modulus can be found using two formulas, First is the ratio of Volumetric stress to the Volumetric Strain. The second formula is the ratio of force times the change in volume to the area of the cross section times the volume.`,
      siunit: "(Pa)",
      dimension: "[ML⁻¹T⁻²]",
    },
    {
      topic: "Force Constant of Wire",
      details: `The force required to create one unit elongation in a wire is known as the force constant of a wire material. It is represented by the letter k.`,
      formula: "K = (Y x A) / L",
      process: `To calculate the force constant of a wire, we need to have the Young's modulus of the wire and the area of cross-section and the length of the wire. Then by putting these values in the formula K=(Y X A)/L, we can obtain the force constant of the wire.`,
      siunit: "Unitless",
      dimension: "NA",
    },
    {
      topic: "Thermal Expansion",
      details: `Thermal Expansion is a well-known phenomenon now that substances expand on heating and contract on cooling. If you heat a body, it alters its dimensions. Depending on the shape of the body.`,
      formula:
        "Length Expansion: L x αₗ x 	ΔT, Area Expansion: A x αₐ x 	ΔT, Volume Expansion: V x αᵥ x 	ΔT",
      process: `To calculate the thermal expansion we have to know the length for length expansion, area for area expansion and volume for volume expansion. For all types of expansion their expansion coefficient has to be known and the temperature change also. Therefore putting these respective values in the formuals we can calculate the expansion in Length, Area and Volume.`,
      siunit: "Length Expansion: m, Area Expansion: m², Volume Expansion: m³",
      dimension:
        "Length Expansion: L¹, Area Expansion: L², Volume Expansion: L³",
    },
  ];
  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];

  //Vernier Calliper Calculator
  const VernierCalliper = () => {
    const [choice, setChoice] = useState("Least Count");
    const [SmallReading, setSmallReading] = useState("");
    const [Divisions, setDivisions] = useState("");
    const [MSR, setMSR] = useState("");
    const [VSR, setVSR] = useState("");
    const [LeastCount, setLeastCount] = useState("");
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const reset = () => {
      setSmallReading("");
      setDivisions("");
      setMSR("");
      setVSR("");
      setLeastCount("");
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      choiceData();
      reset();
    };

    const givenValues = () => {
      if (choice === "Least Count")
        return {
          Smallest_Reading: SmallReading,
          Divisions: Divisions,
        };
      else
        return {
          MSR: MSR,
          VSR: VSR,
          Least_Count: LeastCount,
        };
    };

    const insertValues = () => {
      if (choice === "Least Count")
        return `${SmallReading}${SI["SmallReading"]} / ${Divisions}${SI["Divisions"]}`;
      else
        return `${MSR}${SI["SmallReading"]} + (${VSR}${SI["SmallReading"]} * ${LeastCount}${SI["SmallReading"]})`;
    };

    const calcResult = () => {
      let res;
      if (choice === "Least Count" && SmallReading !== "" && Divisions !== "") {
        res = SmallReading / Divisions;
        setShowSolution(true);
      } else if (
        choice === "Length" &&
        MSR !== "" &&
        VSR !== "" &&
        LeastCount !== ""
      ) {
        res = parseFloat(MSR) + parseFloat(VSR) * parseFloat(LeastCount);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
      setResult(res);
    };
    const choiceData = () => {
      if (choice === "Least Count")
        return {
          name: "Least Count",
          mainunit: "mm",
          formula:
            "Smallest Reading on main scale / Number of readings on vernier scale",
        };
      if (choice === "Length")
        return {
          name: "Final Length",
          mainunit: "mm",
          formula: "MSR + (VSR x Least Count)",
        };
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
              <option value="Least Count">Least Count</option>
              <option value="Length">Length</option>
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
          {choice === "Least Count" ? (
            <>
              <Form.Group className="mb-4">
                <Form.Label>Smallest Reading on main Scale</Form.Label>
                <Form.Control
                  onChange={(e) => setSmallReading(e.target.value)}
                  type="number"
                  placeholder={"Enter Smallest Reading on main Scale in mm"}
                  value={SmallReading === null ? "" : SmallReading}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Number of Divisions on vernier scale</Form.Label>
                <Form.Control
                  onChange={(e) => setDivisions(e.target.value)}
                  type="number"
                  placeholder={"Enter number of division on vernier scale"}
                  value={Divisions === null ? "" : Divisions}
                />
              </Form.Group>
            </>
          ) : (
            <>
              <Form.Group className="mb-4">
                <Form.Label>MSR</Form.Label>
                <Form.Control
                  onChange={(e) => setMSR(e.target.value)}
                  type="number"
                  placeholder={"Enter the main scale reading in mm"}
                  value={MSR === null ? "" : MSR}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>VSR</Form.Label>
                <Form.Control
                  onChange={(e) => setVSR(e.target.value)}
                  type="number"
                  placeholder={"Enter the vernier scale reading in mm"}
                  value={VSR === null ? "" : VSR}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Least Count</Form.Label>
                <Form.Control
                  onChange={(e) => setLeastCount(e.target.value)}
                  type="number"
                  placeholder={"Enter the Least Count in mm"}
                  value={LeastCount === null ? "" : LeastCount}
                />
              </Form.Group>
            </>
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

  //Screw Gauge Calculator
  const ScrewGauge = () => {
    const [choice, setChoice] = useState("Pitch");
    const [Pitch, setPitch] = useState(null);
    const [LeastCount, setLeastCount] = useState(null);
    const [DistanceMove, setDistanceMove] = useState(null);
    const [Rotations, setRotations] = useState(null);
    const [Divisions, setDivisions] = useState(null);
    const [MSR, setMSR] = useState(null);
    const [CSR, setCSR] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (choice === "Pitch" && DistanceMove !== null && Rotations !== null) {
        res = DistanceMove / Rotations;
        setShowSolution(true);
      } else if (
        choice === "LeastCount" &&
        Pitch !== null &&
        Divisions !== null
      ) {
        res = Pitch / Divisions;
        setShowSolution(true);
      } else if (
        choice === "Reading" &&
        MSR !== null &&
        CSR !== null &&
        LeastCount !== null
      ) {
        res = parseFloat(MSR) + parseFloat(CSR) * parseFloat(LeastCount);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "Pitch")
        return {
          Distance_Moved: DistanceMove,
          Rotations: Rotations,
        };
      else if (choice === "LeastCount")
        return {
          Pitch: Pitch,
          Divisions: Divisions,
        };
      else
        return {
          MSR: MSR,
          CSR: CSR,
          LeastCount: LeastCount,
        };
    };

    const reset = () => {
      setLeastCount(null);
      setPitch(null);
      setDistanceMove(null);
      setRotations(null);
      setDivisions(null);
      setMSR(null);
      setCSR(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setLeastCount(null);
      setPitch(null);
      setDistanceMove(null);
      setRotations(null);
      setDivisions(null);
      setMSR(null);
      setCSR(null);
    };

    const insertValues = () => {
      if (choice === "Pitch")
        return `${DistanceMove}${SI["Distance_Moved"]} / ${Rotations}${SI["Rotations"]}`;
      else if (choice === "LeastCount")
        return `${Pitch}${SI["Pitch"]} / ${Divisions}${SI["Divisions"]}`;
      else
        return `${MSR}${SI["MSR"]} + (${LeastCount}${SI["LeastCount"]} * ${CSR}${SI["CSR"]})`;
    };

    const choiceData = () => {
      if (choice === "Pitch")
        return {
          name: "Pitch",
          mainunit: "mm",
          formula: "Distance Moved by screw / Number of Rotations",
          quantities: ["Distance Moved", "Rotations"],
          subunits: ["in mm", "number of rotations"],
          getters: [DistanceMove, Rotations],
          setters: [setDistanceMove, setRotations],
        };
      if (choice === "LeastCount")
        return {
          name: "Least Count",
          mainunit: "mm",
          formula: "Pitch / Number of Divisions on circular scale",
          quantities: ["Pitch", "Divisions"],
          subunits: ["in mm", "number of divisions"],
          getters: [Pitch, Divisions],
          setters: [setPitch, setDivisions],
        };
      if (choice === "Reading")
        return {
          name: "Reading",
          mainunit: "mm",
          formula: "MSR + (CSR x Least Count)",
          quantities: ["MSR", "CSR", "Least Count"],
          subunits: ["in mm", "in mm", "in mm"],
          getters: [MSR, CSR, LeastCount],
          setters: [setMSR, setCSR, setLeastCount],
        };
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
        {/* <Navbar/> */}
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
              <option value="Pitch">Pitch</option>
              <option value="LeastCount">Least Count</option>
              <option value="Reading">Reading</option>
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
          {choice === "Reading" ? (
            <>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[0]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[0](e.target.value)}
                  type="number"
                  placeholder={"Enter " + choiceData().subunits[0]}
                  value={
                    choiceData().getters[0] === null
                      ? ""
                      : choiceData().getters[0]
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
                      : "Enter " + choiceData().subunits[1]
                  }
                  value={
                    choiceData().getters[1] === null
                      ? ""
                      : choiceData().getters[1]
                  }
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[2]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[2](e.target.value)}
                  type="number"
                  placeholder={
                    choiceData().subunits[2] === "NaN"
                      ? "No Unit"
                      : "Enter " + choiceData().subunits[2]
                  }
                  value={
                    choiceData().getters[2] === null
                      ? ""
                      : choiceData().getters[2]
                  }
                />
              </Form.Group>
            </>
          ) : (
            <>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[0]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[0](e.target.value)}
                  type="number"
                  placeholder={"Enter " + choiceData().subunits[0]}
                  value={
                    choiceData().getters[0] === null
                      ? ""
                      : choiceData().getters[0]
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
                      : "Enter " + choiceData().subunits[1]
                  }
                  value={
                    choiceData().getters[1] === null
                      ? ""
                      : choiceData().getters[1]
                  }
                />
              </Form.Group>
            </>
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

  //Youngs's Modulus
  const YoungModulus = () => {
    const [choice, setChoice] = useState("When Stress and Strain are known");
    const [Stress, setStress] = useState(null);
    const [Strain, setStrain] = useState(null);
    const [Force, setForce] = useState(null);
    const [Area, setArea] = useState(null);
    const [ChangeLength, setChangeLength] = useState(null);
    const [Length, setLength] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (
        choice === "When Stress and Strain are known" &&
        Stress !== null &&
        Strain !== null
      ) {
        res = Stress / Strain;
        setShowSolution(true);
      } else if (
        choice === "When F, A, L, ΔL are known" &&
        Force !== null &&
        Area !== null &&
        ChangeLength !== null &&
        Length !== null
      ) {
        res = (Force * Length) / (Area * ChangeLength);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "When Stress and Strain are known")
        return {
          Stress: Stress,
          Strain: Strain,
        };
      else
        return {
          Force: Force,
          Area: Area,
          Length: Length,
          Change_Length: ChangeLength,
        };
    };

    const reset = () => {
      setStress(null);
      setStrain(null);
      setForce(null);
      setArea(null);
      setLength(null);
      setChangeLength(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setStress(null);
      setStrain(null);
      setForce(null);
      setArea(null);
      setLength(null);
      setChangeLength(null);
    };

    const insertValues = () => {
      if (choice === "When Stress and Strain are known")
        return `${Stress}${SI["Stress"]} / ${Strain}${SI["Number"]}`;
      else
        return `(${Force}${SI["Force"]} x ${Length}${SI["Length"]}) / (${ChangeLength}${SI["Length"]} x ${Area}${SI["Area"]})`;
    };

    const choiceData = () => {
      if (choice === "When Stress and Strain are known")
        return {
          name: "Young's Modulus",
          mainunit: "Pa",
          formula: "Stress / Strain",
          quantities: ["Stress", "Strain"],
          subunits: ["in Pa", "Strain"],
          getters: [Stress, Strain],
          setters: [setStress, setStrain],
        };
      if (choice === "When F, A, L, ΔL are known")
        return {
          name: "Young's Modulus",
          mainunit: "Pa",
          formula: "(F x L) / (ΔL x A)",
          quantities: ["Force", "Length", "Area", "Change Length"],
          subunits: ["in N", "in m", "in m²", "in m"],
          getters: [Force, Length, Area, ChangeLength],
          setters: [setForce, setLength, setArea, setChangeLength],
        };
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
        {/* <Navbar/> */}
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
              <option value="When Stress and Strain are known">
                When Stress and Strain are known
              </option>
              <option value="When F, A, L, ΔL are known">
                When F, A, L, ΔL are known
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
          {choice === "When F, A, L, ΔL are known" ? (
            <>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[0]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[0](e.target.value)}
                  type="number"
                  placeholder={"Enter " + choiceData().subunits[0]}
                  value={
                    choiceData().getters[0] === null
                      ? ""
                      : choiceData().getters[0]
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
                      : "Enter " + choiceData().subunits[1]
                  }
                  value={
                    choiceData().getters[1] === null
                      ? ""
                      : choiceData().getters[1]
                  }
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[2]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[2](e.target.value)}
                  type="number"
                  placeholder={
                    choiceData().subunits[2] === "NaN"
                      ? "No Unit"
                      : "Enter " + choiceData().subunits[2]
                  }
                  value={
                    choiceData().getters[2] === null
                      ? ""
                      : choiceData().getters[2]
                  }
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[3]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[3](e.target.value)}
                  type="number"
                  placeholder={
                    choiceData().subunits[3] === "NaN"
                      ? "No Unit"
                      : "Enter " + choiceData().subunits[3]
                  }
                  value={
                    choiceData().getters[3] === null
                      ? ""
                      : choiceData().getters[3]
                  }
                />
              </Form.Group>
            </>
          ) : (
            <>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[0]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[0](e.target.value)}
                  type="number"
                  placeholder={"Enter " + choiceData().subunits[0]}
                  value={
                    choiceData().getters[0] === null
                      ? ""
                      : choiceData().getters[0]
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
                      : "Enter " + choiceData().subunits[1]
                  }
                  value={
                    choiceData().getters[1] === null
                      ? ""
                      : choiceData().getters[1]
                  }
                />
              </Form.Group>
            </>
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

  //Bulk Modulus
  const BulkModulus = () => {
    const [choice, setChoice] = useState("When Stress and Strain are known");
    const [Stress, setStress] = useState(null);
    const [Strain, setStrain] = useState(null);
    const [Force, setForce] = useState(null);
    const [Area, setArea] = useState(null);
    const [ChangeVolume, setChangeVolume] = useState(null);
    const [Volume, setVolume] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (
        choice === "When Stress and Strain are known" &&
        Stress !== null &&
        Strain !== null
      ) {
        res = Stress / Strain;
        setShowSolution(true);
      } else if (
        choice === "When F, A, V, ΔV are known" &&
        Force !== null &&
        Area !== null &&
        ChangeVolume !== null &&
        Volume !== null
      ) {
        res = (Force * Volume) / (Area * ChangeVolume);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "When Stress and Strain are known")
        return {
          Stress: Stress,
          Strain: Strain,
        };
      else
        return {
          Force: Force,
          Area: Area,
          Volume: Volume,
          Change_Volume: ChangeVolume,
        };
    };

    const reset = () => {
      setStress(null);
      setStrain(null);
      setForce(null);
      setArea(null);
      setVolume(null);
      setChangeVolume(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setStress(null);
      setStrain(null);
      setForce(null);
      setArea(null);
      setVolume(null);
      setChangeVolume(null);
    };

    const insertValues = () => {
      if (choice === "When Stress and Strain are known")
        return `${Stress}${SI["Stress"]} / ${Strain}${SI["Number"]}`;
      else
        return `(${Force}${SI["Force"]} x ${Volume}${SI["Volume"]}) / (${ChangeVolume}${SI["Volume"]} x ${Area}${SI["Area"]})`;
    };

    const choiceData = () => {
      if (choice === "When Stress and Strain are known")
        return {
          name: "Bulk Modulus",
          mainunit: "Pa",
          formula: "Stress / Strain",
          quantities: ["Stress", "Strain"],
          subunits: ["in Pa", "Strain"],
          getters: [Stress, Strain],
          setters: [setStress, setStrain],
        };
      if (choice === "When F, A, V, ΔV are known")
        return {
          name: "Bulk Modulus",
          mainunit: "Pa",
          formula: "(F x V) / (ΔV x A)",
          quantities: ["Force", "Volume", "Area", "Change Volume"],
          subunits: ["in N", "in m³", "in m²", "in m³"],
          getters: [Force, Volume, Area, ChangeVolume],
          setters: [setForce, setVolume, setArea, setChangeVolume],
        };
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
        {/* <Navbar/> */}
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
              <option value="When Stress and Strain are known">
                When Stress and Strain are known
              </option>
              <option value="When F, A, V, ΔV are known">
                When F, A, V, ΔV are known
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
          {choice === "When F, A, V, ΔV are known" ? (
            <>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[0]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[0](e.target.value)}
                  type="number"
                  placeholder={"Enter " + choiceData().subunits[0]}
                  value={
                    choiceData().getters[0] === null
                      ? ""
                      : choiceData().getters[0]
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
                      : "Enter " + choiceData().subunits[1]
                  }
                  value={
                    choiceData().getters[1] === null
                      ? ""
                      : choiceData().getters[1]
                  }
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[2]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[2](e.target.value)}
                  type="number"
                  placeholder={
                    choiceData().subunits[2] === "NaN"
                      ? "No Unit"
                      : "Enter " + choiceData().subunits[2]
                  }
                  value={
                    choiceData().getters[2] === null
                      ? ""
                      : choiceData().getters[2]
                  }
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[3]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[3](e.target.value)}
                  type="number"
                  placeholder={
                    choiceData().subunits[3] === "NaN"
                      ? "No Unit"
                      : "Enter " + choiceData().subunits[3]
                  }
                  value={
                    choiceData().getters[3] === null
                      ? ""
                      : choiceData().getters[3]
                  }
                />
              </Form.Group>
            </>
          ) : (
            <>
              <Form.Group className="mb-4">
                <Form.Label>{choiceData().quantities[0]}</Form.Label>
                <Form.Control
                  onChange={(e) => choiceData().setters[0](e.target.value)}
                  type="number"
                  placeholder={"Enter " + choiceData().subunits[0]}
                  value={
                    choiceData().getters[0] === null
                      ? ""
                      : choiceData().getters[0]
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
                      : "Enter " + choiceData().subunits[1]
                  }
                  value={
                    choiceData().getters[1] === null
                      ? ""
                      : choiceData().getters[1]
                  }
                />
              </Form.Group>
            </>
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

  //Force Constant of Wire

  function ForceConstant() {
    const [result, setResult] = useState("");
    const [YoungModulus, setYoungModulus] = useState("");
    const [Area, setArea] = useState("");
    const [Length, setLength] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      if (YoungModulus !== "" && Area !== "" && Length !== "") {
        let res = (YoungModulus * Area) / Length;
        setResult(res);
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
    };

    const givenValues = {
      Young_Modulus: YoungModulus,
      Area: Area,
      Length: Length,
    };

    const resetForm = () => {
      setYoungModulus("");
      setArea("");
      setLength("");
      setShowSolution(false);
      setResult("");
    };

    const insertValues = `(${YoungModulus}${SI["Young_Modulus"]} * ${Area}${SI["Area"]}) / ${Length}${SI["Length"]}`;

    return (
      <React.Fragment>
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
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Young's Modulus (Y)</Form.Label>
            <Form.Control
              onChange={(e) => setYoungModulus(e.target.value)}
              type="number"
              value={YoungModulus}
              placeholder="Enter Young's Modulus of eleasticity in Pa"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Area (A)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              value={Area}
              placeholder="Enter the Area of cross-section of wire in m²"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Length (L)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              type="number"
              value={Length}
              placeholder="Enter the Area of cross-section of wire in m"
            />
          </Form.Group>

          {showSolution ? (
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="(Y x A) / L"
                toFind="Force Constant of Wire"
                insertValues={insertValues}
                result={result}
              />
            </Form.Group>
          ) : null}

          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Force Constant of wire (K)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + ""}
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

  //Thermal Expansion Calculator
  const ThermalExpansion = () => {
    const [choice, setChoice] = useState("Length Expansion");
    const [TempChange, setTempChange] = useState(null);
    const [Length, setLength] = useState(null);
    const [Area, setArea] = useState(null);
    const [Volume, setVolume] = useState(null);
    const [ExpansionCoeff, setExpansionCoeff] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (
        choice === "Length Expansion" &&
        Length !== null &&
        ExpansionCoeff !== null &&
        TempChange !== null
      ) {
        res = Length * ExpansionCoeff * TempChange;
        setShowSolution(true);
      } else if (
        choice === "Area Expansion" &&
        Area !== null &&
        ExpansionCoeff !== null &&
        TempChange !== null
      ) {
        res = Area * ExpansionCoeff * TempChange;
        setShowSolution(true);
      } else if (
        choice === "Volume Expansion" &&
        Volume !== null &&
        ExpansionCoeff !== null &&
        TempChange !== null
      ) {
        res = Volume * ExpansionCoeff * TempChange;
        setShowSolution(true);
      } else {
        setShowModal(true);
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "Length Expansion")
        return {
          Length: Length,
          Expansion_Coeff: ExpansionCoeff,
          Temperature_Change: TempChange,
        };
      else if (choice === "Area Expansion")
        return {
          Area: Area,
          Expansion_Coeff: ExpansionCoeff,
          Temperature_Change: TempChange,
        };
      else
        return {
          Volume: Volume,
          Expansion_Coeff: ExpansionCoeff,
          Temperature_Change: TempChange,
        };
    };

    const reset = () => {
      setTempChange(null);
      setLength(null);
      setArea(null);
      setVolume(null);
      setExpansionCoeff(null);
      setResult(null);
      setShowSolution(false);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setTempChange(null);
      setLength(null);
      setArea(null);
      setVolume(null);
      setExpansionCoeff(null);
    };

    const insertValues = () => {
      if (choice === "Length Expansion")
        return `${Length}${SI["Length"]} * ${ExpansionCoeff}${SI["ExpansionCoeff"]} * ${TempChange}${SI["TempChange"]}`;
      else if (choice === "Area Expansion")
        return `${Area}${SI["Area"]} * ${ExpansionCoeff}${SI["ExpansionCoeff"]} * ${TempChange}${SI["TempChange"]}`;
      else
        return `${Volume}${SI["Volume"]} * ${ExpansionCoeff}${SI["ExpansionCoeff"]} * ${TempChange}${SI["TempChange"]}`;
    };

    const choiceData = () => {
      if (choice === "Length Expansion")
        return {
          name: "Length Expansion",
          mainunit: "m",
          formula: "L x αₗ x 	ΔT",
          quantities: ["Length", "Expansion Coefficient", "Temperature Change"],
          subunits: ["in m", "in K⁻¹", "K"],
          getters: [Length, ExpansionCoeff, TempChange],
          setters: [setLength, setExpansionCoeff, setTempChange],
        };
      if (choice === "Area Expansion")
        return {
          name: "Area Expansion",
          mainunit: "m²",
          formula: "A x αₐ x ΔT",
          quantities: ["Area", "Expansion Coefficient", "Temperature Change"],
          subunits: ["in m²", "in K⁻¹", "K"],
          getters: [Area, ExpansionCoeff, TempChange],
          setters: [setArea, setExpansionCoeff, setTempChange],
        };
      if (choice === "Volume Expansion")
        return {
          name: "Volume Expansion",
          mainunit: "m³",
          formula: "V x αᵥ x ΔT",
          quantities: ["Volume", "Expansion Coefficient", "Temperature Change"],
          subunits: ["in m³", "in K⁻¹", "K"],
          getters: [Volume, ExpansionCoeff, TempChange],
          setters: [setVolume, setExpansionCoeff, setTempChange],
        };
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
        {/* <Navbar/> */}
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
              <option value="Length Expansion">Length Expansion</option>
              <option value="Area Expansion">Area Expansion</option>
              <option value="Volume Expansion">Volume Expansion</option>
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
          <>
            <Form.Group className="mb-4">
              <Form.Label>{choiceData().quantities[0]}</Form.Label>
              <Form.Control
                onChange={(e) => choiceData().setters[0](e.target.value)}
                type="number"
                placeholder={"Enter " + choiceData().subunits[0]}
                value={
                  choiceData().getters[0] === null
                    ? ""
                    : choiceData().getters[0]
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
                    : "Enter " + choiceData().subunits[1]
                }
                value={
                  choiceData().getters[1] === null
                    ? ""
                    : choiceData().getters[1]
                }
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>{choiceData().quantities[2]}</Form.Label>
              <Form.Control
                onChange={(e) => choiceData().setters[2](e.target.value)}
                type="number"
                placeholder={
                  choiceData().subunits[2] === "NaN"
                    ? "No Unit"
                    : "Enter " + choiceData().subunits[2]
                }
                value={
                  choiceData().getters[2] === null
                    ? ""
                    : choiceData().getters[2]
                }
              />
            </Form.Group>
          </>
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

  //adding the calculators togather
  function calC(key) {
    let LeastCountCall;
    switch (key) {
      case "Vernier Calliper":
        LeastCountCall = VernierCalliper();
        break;
      case "Screw Gauge":
        LeastCountCall = ScrewGauge();
        break;
      case "Young's Modulus":
        LeastCountCall = YoungModulus();
        break;
      case "Bulk Modulus":
        LeastCountCall = BulkModulus();
        break;
      case "Force Constant of Wire":
        LeastCountCall = ForceConstant();
        break;
      case "Thermal Expansion":
        LeastCountCall = ThermalExpansion();
        break;
      default:
        break;
    }
    return LeastCountCall;
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
            content="Statistical, Physics, calculator, Statistical Mechanics calculator, Tech n science, technscience, tech and science"
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
