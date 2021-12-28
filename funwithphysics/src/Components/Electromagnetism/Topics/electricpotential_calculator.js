import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";
import {constant} from '../../Solution/allConstants';
import {SI} from '../../Solution/allSIUnits';
import Modal from "react-bootstrap/Modal";

export const electricpotential_calculator = ({ match }) => {
  const electricpotential_data = [
    {
      topic: "Point Charge",
      details: `Electric Potential due to a point charge (Q) at a point P is given by the equation "V=kQ/r", where V is the electric potential and Q is the charge, r is the distance from the charge to the point P,  where as k is (1/4πε₀) which is constant and it's value is 8.99*10⁹ N m²/C²`,
      formula: "V=kQ/r",
      siunit: "volt",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the the electric potential for a point charge we need to know the charge (Q) and the distance (r), by putting these values in the formula we can easily find the electric potential.",
    },
    {
      topic: "Ring",
      formula: "V=kQ/√(R²+r²)",
      details: `Electric potential due to a charged ring at a point P perpendicular to its axis is given by the equation "V=kQ/√(R²+r²)" where Q is the charge, R is the Radius, r is the distance of the charge ring from the point P where as k is (1/4πε₀) which is constant and it's value is 8.99*10⁹ N m²/C²`,
      siunit: "volt",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the electric potential for the charged ring we need to know the charge (Q), distance of the charge from the center (r) and the radius of the ring (R) where as the k is constant by putting these values in the formula we can easily find the electric potential.",
    },
    {
      topic: "Disc",
      details: `Electric potential due to a charged Disc at a point P perpendicular to its axis is given by the equation "V=kσ2π[√(R²+r²)-r]" where σ is the surface charge density, R is the radius, and r is the distance between the center of disc and point P where as k is (1/4πε₀) which is constant and it's value is 8.99*10^9 N m²/C²`,
      formula: "V=kσ2π[√(R²+r²)-r]",
      siunit: "volt",
      process:
        "By putting the value of surface charge density (σ), Radius (R) and distance (r) in given equation we can easily find the electric potential for the disc, where as k is constant and it's value is 8.99*10⁹ N m²/C²",
      dimension: "M L² T⁻³ I⁻¹",
    },
    {
      topic: "Sphere",
      details: [
        "There are three condition for Sphere:",
        <br />,
        "1) If r > R, in this case electric potential due to the charged sphere is same as that of a point charge i.e, V = kQ/r",
        <br />,
        "2) If r = R, in this case electric potential due to the charged sphere is given by the formula V = kQ/R",
        <br />,
        "3) If r < R, in this case electric potential due to the charged sphere is given by the formula V = kQ/R³[(3R²/2)-(r²/2)]",
        <br />,

        "where 'r' is the distance between the center of sphere and the point at which electric potential is produced and 'R' is the radius of sphere. ",
      ],
      formula: [
        "Sphere (r > R)=> V=kQ/r",
        <br />,
        "Sphere (r < R)=> V=kQ/R³[(3R²/2)-(r²/2)]",
      ],
      siunit: "volt",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the electric potential for (r > R) the sphere we need to know the charge (Q) and the distance (r) where as k is (1/4πε₀) which is constant and it's value is 8.99*10⁹ N m²/C² ",
    },
    {
      topic: "Shell",
      formula: ["Shell (r > R)=> V=kQ/r", <br />, "Shell (r < R)=> V=kQ/R"],
      details: [
        "There are three condition for Shell:",
        <br />,
        "1) If r > R, in this case electric potential produced is same as that of a point charge i.e, V = kQ/r",
        <br />,
        "2) If r = R, in this case electric potential produced is given by the formula V = kQ/R",
        <br />,
        "3) If r < R, in this case electric potential produced is given by the formula V = kQ/R",
        <br />,

        "where 'r' is the distance between the center of shell and the point at which electric potential is produced and 'R' is the radius of shell. ",
      ],
      siunit: "volt",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the electric potential for the Outside the shell we need to know the charge (Q), and the distance (r) at which charge is placed where as k is (1/4πε₀) which is constant and it's value is 8.99*10⁹ N m²/C².",
    },
  ];
  const page = electricpotential_data.filter(
    (data) => data.topic === match.params.topic
  );
  const details = page[0];

  //electric potential for the shell
  const Shell = () => {
    const [choice, setChoice] = useState("Inshell");
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [radius, setRadius] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const k = 8.99 * Math.pow(10, 9);
    const calcResult = () => {
      let res;
      if (choice === "Inshell" && charge!==null && radius!==null) {
        res = (k * charge) / radius;
        setShowSolution(true);
      }
      else if (choice === "Outshell" && charge!==null && distance!==null) {
        res = (k * charge) / distance;
        setShowSolution(true);
      }else {
        setShowModal(true)
      }
      setResult(res);
    };

    const reset = () => {
      setCharge(null);
      setDistance(null);
      setRadius(null);
      setResult(null);
      setShowSolution(false);

    };
    const handleChange = (e) => {
      setChoice(e.target.value);
      reset();
    };

    const givenValues = () => {
      if (choice === "Inshell")
        return {
      Charge:charge,
      Radius:radius,
    };
    else
        return {
      Charge:charge,
      Distance:distance,
    };
  };

    const insertValues = () =>{
      if (choice === "Inshell")
      return `(${constant["k"]} * ${charge}${SI["charge"]}) / ${radius}${SI["Radius"]}`;
      else
      return `(${constant["k"]} * ${charge}${SI["charge"]}) / ${distance}${SI["distance"]}`;
    }
    const constants = ["k"];

    const choiceData = () => {
      if (choice === "Outshell") {
        return {
          name: "Electric Potential for (outside) the Shell",
          mainunit: "volt",
          formula:"KQ/r",
          quantities: ["Charge (Q)", "Distance (r)"],
          subunits: ["(C)", "(m)"],
          getters: [charge, distance],
          setters: [setCharge, setDistance],
        };
      } else if (choice === "Inshell") {
        return {
          name: "Electric Potential for (inside) the Shell",
          mainunit: "volt",
          formula:"KQ/R",
          quantities: ["Charge (Q)", "Radius (R)"],
          subunits: ["(C)", "(m)"],
          getters: [charge, radius],
          setters: [setCharge, setRadius],
        };
      }
    };
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
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
              <option value="Inshell">
                Electric Potential for (inside) the Shell
              </option>
              <option value="Outshell">
                Electric Potential for (outside) the Shell
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
            <Form.Label>constant (k)</Form.Label>
            <Form.Control readOnly value={`${k}  N m²/C²`} />
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
              placeholder={result === null ? "Result" : result + " volt"}
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

  //electric potential for the Sphere
  const Sphere = () => {
    const [choice, setChoice] = useState("Insphere");
    const [distance, setDistance] = useState(null);
    const [radius, setRadius] = useState(null);
    const [charge, setCharge] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const calcResult = () => {
      let res;
      if (choice === "Outsphere" && charge!==null && distance!==null) {
        res = (k * charge) / distance;
        setShowSolution(true);
      } else if (choice === "Insphere" && charge!==null && radius!==null) {
        res =
          k *
          (charge / Math.pow(radius, 3)) *
          ((3 * radius * radius) / 2 - (distance * distance) / 2);
          setShowSolution(true);
      }else {
        setShowModal(true)
      }
      setResult(res);
    };

    const givenValues = () => {
      if (choice === "Outsphere")
        return {
      Charge:charge,
      Distance:distance,
    };
    else
        return {
      Charge:charge,
      Distance:distance,
      Radius:radius,
    };
  };

  const insertValues = () =>{
    if (choice === "Outsphere")
    return `(${constant["k"]} * ${charge}${SI["charge"]}) / ${distance}${SI["Distance"]}`;
    else
    return `(${constant["k"]} * ${charge}${SI["charge"]}) / (${radius}${SI["Radius"]})³[(3(${radius}${SI["Radius"]})² / 2) - ((${distance}${SI["distance"]})² / 2)]`;
  }
  const constants = ["k"];

    const reset = () => {
      setDistance(null);
      setResult(null);
      setRadius(null);
      setCharge(null);
      setShowSolution(false);
    };

    const k = 8.99 * Math.pow(10, 9);
    const handleChange = (e) => {
      setChoice(e.target.value);
      reset();
    };
    const choiceData = () => {
      if (choice === "Outsphere")
        return {
          name: "Electric Potential for (Outside) the sphere",
          mainunit: "volt",
          formula:"kQ/r",
          quantities: ["Charge (Q)", "Distance (r)"],
          subunits: ["(C)", "(m)"],
          getters: [charge, distance],
          setters: [setCharge, setDistance],
        };
      if (choice === "Insphere")
        return {
          name: "Electric Potential for (Inside) the sphere",
          mainunit: "volt",
          formula:"kQ/R³[(3R²/2)-(r²/2)]",
          quantities: ["Charge (Q)", "Distance (r)", "Radius (R)"],
          subunits: ["(C)", "(m)", "(m)"],
          getters: [charge, distance, radius],
          setters: [setCharge, setDistance, setRadius],
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
              <option value="Insphere">
                Electric Potential for inside the sphere{" "}
              </option>
              <option value="Outsphere">
                Electric Potential for outside the sphere{" "}
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
          {choice === "Insphere" ? (
            <Form.Group className="mb-4">
              <Form.Label>{choiceData().quantities[2]}</Form.Label>
              <Form.Control
                onChange={(e) => choiceData().setters[2](e.target.value)}
                type="number"
                placeholder={"Enter in " + choiceData().subunits[2]}
                value={
                  choiceData().getters[2] === null
                    ? ""
                    : choiceData().getters[2]
                }
              />
            </Form.Group>
          ) : (
            ""
          )}
          <Form.Group className="mb-4">
            <Form.Label>constant (k)</Form.Label>
            <Form.Control readOnly value={`${k}  N m²/C²`} />
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
              placeholder={result === null ? "Result" : result + " volt"}
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

  //electric potential for the Disc
  const Disc = () => {
    const [distance, setDistance] = useState(null);
    const [radius, setRadius] = useState(null);
    const [density, setDensity] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const reset = () => {
      setDistance(null);
      setRadius(null);
      setDensity(null);
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(radius!==null && distance!=null && density !==null){
      let res;
      res =
        density *
        2 *
        3.14 *
        k *
        (Math.sqrt(distance * distance + radius * radius) - distance);
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true)
      }
    };

    const givenValues = {
      Distance:distance,
      Radius:radius,
      Surface_charge_density:density,
    };

    const insertValues = `[${constant["k"]} * ${density}${SI["Surface_charge_density"]} * 2 * π * √((${radius}${SI["Radius"]})² + (${distance}${SI["Distance"]})²) - ${radius}${SI["Radius"]})]`;
    const constants = ["k"];

    const k = 8.99 * Math.pow(10, 9);
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              placeholder={"Enter in (m)"}
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Radius (R)</Form.Label>
            <Form.Control
              onChange={(e) => setRadius(e.target.value)}
              type="number"
              placeholder={"Enter in (m)"}
              value={radius === null ? "" : radius}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Surface charge density (σ)</Form.Label>
            <Form.Control
              onChange={(e) => setDensity(e.target.value)}
              type="number"
              placeholder={"Enter in (Cm⁻²)"}
              value={density === null ? "" : density}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>constant (k)</Form.Label>
            <Form.Control readOnly value={`${k}  N m²/C²`} />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="kσ2π[√(R²+r²)-r]"
              toFind="Electric Potential for disc"
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
              placeholder={result === null ? "Result" : result + " volt"}
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

  //electric potential for the charged ring
  const Ring = () => {
    const [charge, setCharge] = useState(null);
    const [radius, setRadius] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const reset = () => {
      setRadius(null);
      setResult(null);
      setDistance(null);
      setCharge(null);
      setShowSolution(false);
    };

    const givenValues = {
      Charge:charge,
      Radius:radius,
      Distance:distance,
    };

    const insertValues = `(${constant["k"]} * ${charge}${SI["charge"]}) / √((${radius}${SI["Radius"]})² + (${distance}${SI["Distance"]})²)`;
    const constants = ["k"];

    const calcResult = () => {
      if(charge!==null && radius !==null && distance!==null){
      let res;
      res = (k * charge) / Math.sqrt(radius * radius + distance * distance);
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true)
      }
    };

    const k = 8.99 * Math.pow(10, 9);
    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Charge (Q)</Form.Label>
            <Form.Control
              onChange={(e) => setCharge(e.target.value)}
              type="number"
              placeholder={"Enter in (C)"}
              value={charge === null ? "" : charge}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              placeholder={"Enter in (m)"}
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Radius (R)</Form.Label>
            <Form.Control
              onChange={(e) => setRadius(e.target.value)}
              type="number"
              placeholder={"Enter in (m)"}
              value={radius === null ? "" : radius}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>constant (k)</Form.Label>
            <Form.Control readOnly value={`${k}  N m²/C²`} />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="kQ/√(R²+r²)"
              toFind="Electric Potential for ring"
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
              placeholder={result === null ? "Result" : result + " volt"}
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

  //electric potential for point charge
  const Pointcharge = () => {
    const [charge, setCharge] = useState(null);
    const [distance, setDistance] = useState(null);
    const [result, setResult] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const k = 8.99 * Math.pow(10, 9);

    const reset = () => {
      setDistance(null);
      setCharge(null);
      setResult(null);
      setShowSolution(false);
    };
    const calcResult = () => {
      if(distance!==null && charge!==null){
      let res = (k * charge) / distance;
      setResult(res);
      setShowSolution(true);
      }else{
        setShowModal(true)
      }
    };

    const givenValues = {
      Charge:charge,
      Distance:distance,
    };

    const insertValues = `(${constant["k"]} * ${charge}${SI["charge"]}) / ${distance}${SI["Distance"]}`;
    const constants = ["k"];

    return (
      <>
      <Modal show={showModal} class="modal-dialog modal-dialog-centered">
          <Modal.Header >Please Enter all values to get Proper answer</Modal.Header>
          <Modal.Footer><Button onClick={()=>setShowModal(false)} class="btn btn-primary btn-sm">Close</Button></Modal.Footer>
        </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Charge (Q)</Form.Label>
            <Form.Control
              onChange={(e) => setCharge(e.target.value)}
              type="number"
              placeholder={"Enter in (C)"}
              value={charge === null ? "" : charge}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              placeholder={"Enter in (m)"}
              value={distance === null ? "" : distance}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>constant (k)</Form.Label>
            <Form.Control readOnly value={`${k}  N m²/C²`} />
          </Form.Group>
          {showSolution ? (
          <Form.Group className="mb-3" controlId="acceleration">
            <Solution
              givenValues={givenValues}
              formula="kQ/r"
              toFind="Electric Potential for point charge"
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
              placeholder={result === null ? "Result" : result + " volt"}
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
      case "Point Charge":
        currentCall = Pointcharge();
        break;
      case "Ring":
        currentCall = Ring();
        break;
      case "Disc":
        currentCall = Disc();
        break;
      case "Sphere":
        currentCall = Sphere();
        break;
      case "Shell":
        currentCall = Shell();
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
