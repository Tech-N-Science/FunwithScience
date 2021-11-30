import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../classicalMechanics.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar"

function GravitationCalculator({ match }) {
  // Gravitation_list
  const Gravitation_list = [
    {
      topic: "Gravitational Force",
      details:
        "Gravity also termed as gravitation, is a force that occurs among all material objects in the universe. For any two objects or units having non-zero mass, the force of gravity has a tendency to attract them toward each other. The Universal Law of Gravitation says that: Every object in the universe has the property to attract every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between them. ",
      formula: "F = GmMd⁻²",
      process:
        "The Force of Gravitation F , between two bodies / system of mass m and M , where d is the radius or distance between the two bodies and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) , is equals to product of ( G , m and M ) divided by the ( d² ) . SI unit for gravitation force is Newton . SI unit for universal gravitational constant is Newton - meter² · Kg⁻² ",
      siunit: "F = kg·m/s² or N",
      dimension: "G = M L T⁻²",
    },
    {
      topic: "Gravitational Field",
      details: 
        "The gravitational field is defined as the gravitational force per unit mass that would be exerted on a small test mass at that position. It's a vector field that points in the direction of the force experienced by a small test mass at that location.",
      formula: "g = GM/r²",
      process: 
        "Let’s consider a point particle of mass M and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) then the magnitude of the resultant gravitational field strength denoted by term g, at a distance of r,  from M is equals to product of (G and M) divided by (r²).",
      siunit: "N/kg",
      dimension: "g = L T⁻²",
    },
    {
      topic: "Gravitational Potential Energy",
      details: 
        "Gravitational potential energy refers to the work that a body needs to do against a test mass in order to arrive to a specific position. In other words, gravitational potential energy is the amount of energy that an object has or gains as a result of a change in the position of its gravitational field.",
      formula: "U = -GMm/r",
      process: 
        "Consider a source mass ‘M’ is placed at a point along the x-axis, initially, a test mass ‘m’ is at infinity and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) therefore gravitational potential energy (U) at a point which is at a distance ‘r’ from the source mass is equal to the product of negative of (G, M and m) divided by (r).",
      siunit: " Joule",
      dimension: "U = M¹ L² T⁻²",
    },
  ];

  const page = Gravitation_list.filter(
    (data) => data.topic === match.params.topic
  );
  const details = page[0];
  console.log(page);
  console.log(details.formula);

  //Gravitational Force
  function CalculatorGravitationalForce() {
    const [result, setResult] = useState(null);
    const [mass_A, setMassA] = useState(null);
    const [mass_B, setMassB] = useState(null);
    const [distance, setDistance] = useState(null);

    const handleClick = () => {
      let res =
        (6.67 * Math.pow(10, -11) * mass_A * mass_B) / (distance * distance);
      setResult(res);
    };
    return (
      <React.Fragment>
        <Navbar/>
        <Form>
          <Form.Group className="mb-3" controlId="mass_A">
            <Form.Label>Mass A (m)</Form.Label>
            <Form.Control
              onChange={(e) => setMassA(e.target.value)}
              type="number"
              placeholder="Enter Mass of body A in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mass_B">
            <Form.Label>Mass B (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMassB(e.target.value)}
              type="number"
              placeholder="Enter Mass of body B in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="distance">
            <Form.Label>Distance (D)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              placeholder="Enter Distance in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Gravitational_Force">
            <Form.Label>Gravitational Force (F)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " Newton"}
            />
            <Form.Text className="text-muted">
              Enter masses & distance to Calculate the Gravitational Force .
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

  //Gravitational Field
  function CalculatorGravitationalField() {
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [distance, setDistance] = useState(null);
    // const [G, setG] = useState(Math.G);

    const handleClick = () => {
      let res =
        (6.67 * Math.pow(10, -11)  * mass) / (distance * distance);
      setResult(res);
    };
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="Mass">
            <Form.Label>Mass (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter Mass of body in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Distance">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              placeholder="Enter Distance in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Distance">
            <Form.Label>Universal Gravitation Constant (G)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder="6.67 × 10⁻¹¹ Newton - meter² · kg⁻²"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Gravitational_Field">
            <Form.Label>Gravitational Field (g)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " N/kg"}
            />
            <Form.Text className="text-muted">
              Enter mass & distance to Calculate the Gravitational Field .
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

  //Gravitational Potential Energy
  function CalculatorGravitationalPotentialEnergy() {
    const [result, setResult] = useState(null);
    const [mass_A, setMassA] = useState(null);
    const [mass_B, setMassB] = useState(null);
    const [distance, setDistance] = useState(null);

    const handleClick = () => {
      let res =
      -(6.67 * Math.pow(10, -11)  * mass_A * mass_B) / (distance);
      setResult(res);
    };
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="Mass">
            <Form.Label>Mass (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMassA(e.target.value)}
              type="number"
              placeholder="Enter Mass of body in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Mass">
            <Form.Label>Mass (m)</Form.Label>
            <Form.Control
              onChange={(e) => setMassB(e.target.value)}
              type="number"
              placeholder="Enter Mass of body in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Height">
            <Form.Label>Distance (r)</Form.Label>
            <Form.Control
              onChange={(e) => setDistance(e.target.value)}
              type="number"
              placeholder="Enter Height in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Distance">
            <Form.Label>Universal Gravitation Constant (G)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder="6.67 × 10⁻¹¹ Newton - meter² · kg⁻²"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Gravitational_Potential_Energy">
            <Form.Label>Gravitational Potential Energy (U)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " N/kg"}
            />
            <Form.Text className="text-muted">
              Enter mass & height to Calculate the Gravitational Potential Energy .
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

  // Adding Calculators together

  function calCu_gravi(key) {
    let currentCall;
    switch (key) {
      case "Gravitational Force":
        currentCall = CalculatorGravitationalForce();
        break;
      case "Gravitational Field":
        currentCall = CalculatorGravitationalField();
        break;
      case "Gravitational Potential Energy":
        currentCall = CalculatorGravitationalPotentialEnergy();
        break;
      default:
        break;
    }
    return currentCall;
  }

  return (
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
          content="Classical Mechanics, calculator, physics, Tech n science, technscience, tech and science"
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
        {calCu_gravi(details.topic)}
      </div>
      <div className="Calculator__process">
        <h3> Process</h3>
        <p>{details.process}</p>
      </div>
    </div>
  );
}

export default GravitationCalculator;