import React, { useState } from "react";
import "./Calculator.css";
import { Form, Card, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const calculator = ({ match }) => {
  //topics_data
  const Topics = [
    {
      topic: "Electric Field",
      details: "....",
    },
    {
      topic:"Ohm's Law",
      details:`Ohm's law states that the voltage (V) between two points is directly proportional to the current (I) across that two points and the constant of proportionality is resistance (R) and the equation is given as "V=IR"`,
      siunit:["Resistance  : Ohm", <br/>,"Current : (Ampere)", <br/>,"Voltage : (V)"],
      process:"To find the voltage (V), we need to know the the current between the two point and the resistance(R) across the points & To find the current(I) or the resistance(R) we can also find it using the ohm's law.",
      formula:"V=IR",
      dimension:"V = ML²T⁻²I⁻¹, R = ML²T⁻³I⁻²",

  },
  {
    topic:"Drift Velocity",
    details:`Subatomic particles, such as electrons, constantly move in random directions. When electrons are subjected to an electric field, they move randomly, but slowly in one direction, the direction of the applied electric field. Drift velocity is the net velocity at which these electrons drift.`,
    siunit: 'm/s',
    process:"To find the drift velocity (V), we need to know the the current flowing through the conductor(I), number of electrons(n), Area of cross-section of the conductor(A) and the charge of electron(q).",
    formula:"V = I/nAq",
    dimension:"M⁻¹T²I",

},
  {
    topic:"Electric Potential",
    details:"..."

  },
  {
    topic:"Flux",
    details:"..."

  },
  {
    topic:"Resistivity",
    details:`By using the equation "ρ=RA/l", where ρ is resistivity, R is resistance, A is area and l is Length we can easily calculate the resistivity.`,
    siunit:"ohm-meter",
    dimension: "ML³T⁻³I⁻²",
    process:"To find the resistivity we need to know the Resistance (R), area (A), and the length (l) by putting these value in formula we can easily find the resistivity.",
    formula:"ρ=RA/l"

  },
  ];
  //Flux data
  const flux_data = [
    {
      topic: "Electric Flux",
      formula: "ΦE=E.S.cosθ",
      siunit: "volt metres (V m)",
      dimension: "[M L³ T⁻³ I⁻¹]",
      process:
        "To find the electric flux, we need to know the electric field (E), area of the surface (S) and angle (θ) between the electric field lines and the normal to S.",
      details: `Electric Flux is defined as "ΦE=E.S.cosθ", where ΦE denotes the electric flux, E denotes the electric field, S denotes the surface area, and θ is the angle between the electric field lines and the normal (perpendicular) to S. `,
    },
    {
      topic: "Magnetic Flux",
      formula: "ΦB=B.A.cosθ",
      siunit: "volt–seconds or weber",
      dimension: "[M L² T⁻² I⁻¹]",
      process:
        "To find the magnetic flux we need to know the magnetic field (B), area (A)and the angle (θ).",
      details: `Magnetic Flux is given by the equation "ΦB=B.A.cosθ", where ΦB is the magnetic flux, B is the magnetic field, A is area and θ is the angle between the perpendicular vector to the area and magnetic field.`,
    },
  ];
  //electricpotential_data
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
        "To find the electric potential for the Outside the shell we need to know the charge (Q), and the distance (r) at which charge is placed where as k is (1/4πε₀) which is constant and it's value is 8.99*10^9 N m²/C².",
    },
  ];

  //electricfield_data
  const electricfield_data = [
    {
      topic: "Point Charge",
      details:
        "The electric field (E) produced at a point(P) due to a point charge(Q) held at a distance (r) from the point(P) is kQ/r².",
      formula: "E=kQ/r²",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      process:
        "To find the electric field for a point due to a point charge we need to know the charge of magnitude (Q), distance (r) between the point and point charge. ",
    },
    {
      topic: "Line Charge",
      formula: "E=kq/x*√(x²+a²)",
      siunit: "newtons per coulomb (N/C)",
      details:
        "Electric field produced (E) by a line charge (q) of finite length at a distance (x) from the center is given by the equation E=kq/x*√(x²+a²) [where (a) is half length of line charge]",
      dimension: "[M L I⁻¹ T⁻³]",
      process:
        "To find the electric field (E) by a line charge of finite length we need to know the charge (q), distance(x) and the half length (a).",
    },
    {
      topic: "Sphere",
      formula: "E=kqr/R³",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³]",
      details: [
        "There are three condition for Sphere:",
        <br />,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
        <br />,
        "2) If r = R, in in this case electric field produced is given by E = kq/R²",
        <br />,
        "3) If r < R, in in this case electric field produced is kqr/R³",
        <br />,

        "where 'r' is the distance between the center of sphere and the point at which electric field is produced and 'R' is the radius of sphere. ",
      ],
      process:
        "To find the Electric field (E) for the sphere, we need to know the charge (q) by the sphere, radius (R) of the sphere and the distance (r) where as k is the constant",
    },
    {
      topic: "Ring",
      formula: "E=kQx/(x²+R²)⁽³/²⁾",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³]",
      details:
        "The electric field produced at a point P due to a ring charge is E=kQx/(x²+R²)⁽³/²⁾, Where Q=total charge, R is the Radius of the ring, x is the distance from the center of the ring and P where as k is constant. In case total charge is not known then Q=2πλR (where λ is charge density and R is radius of ring).",
      process:
        "By putting the value of radius (R), charge (Q) and the distance (x), we can easily find the electric fied produced by the charged ring.",
    },
    {
      topic: "Disc",
      formula: "E=σ/2ε₀[1-x/√(x²+R²)]",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      details: `Electric field produced by the charged disc at a point P is given by the equation "E=σ/2ε₀[1-x²/√(x²+R²)]" where σ is surface charge density, x is distance, R is the radius where as ε₀ is constant and it's value is 8.854187817 × 10⁻¹² C²/N. m² `,
      process:
        "To find the electric field for the disc we need to know the Radius (R) of the disc, and the distance (x) and the surface charge density(σ), where as the (ε₀) is constant and its value is 8.854187817 × 10⁻¹² C²/N. m² ",
    },
    {
      topic: "Shell",
      details: [
        "There are three condition for Shell:",
        <br />,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
        <br />,
        "2) If r = R, in this case electric field produced is given by E = kq/R²",
        <br />,
        "3) If r < R, in this case electric field produced is zero",
        <br />,

        "where 'r' is the distance between the center of shell and the point at which electric field is produced and 'R' is the radius of shell. ",
      ],
      formula: "E=kQ/r²",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      process:
        "he charge of magnitude (Q), distance (r) away from the spherical shell and by putting these values in formula we can easily find the electric field.",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];
  //Resistivity Calculator
  const ResistivityCalculator=()=>{
    const [resistance, setResistance] = useState(null);
    const [length, setLength] = useState(null);
    const [area, setArea] = useState(null);
    const [result, setResult] = useState(null);

    const calcResult =()=>{
      let res;
      res=resistance*area/length;
      setResult(res)
    }
    const reset =()=>{
      setResistance(null)
      setLength(null)
      setArea(null)
      setResult(null)
    }
    return(<>
    <Form>
    <Form.Group className="mb-4">
            <Form.Label>Resistance (R)</Form.Label>
            <Form.Control
              onChange={(e) => setResistance(e.target.value)}
              type="number"
              placeholder=
                "Enter in ohm (Ω)"
              
              value={
                resistance === null ? "" : resistance
              }
            />
          </Form.Group>
    <Form.Group className="mb-4">
            <Form.Label>Area (A)</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder=
                "Enter in (m²)"
              
              value={
                area === null ? "" : area
              }
            />
          </Form.Group>
    <Form.Group className="mb-4">
            <Form.Label>Length (l)</Form.Label>
            <Form.Control
              onChange={(e) => setLength(e.target.value)}
              type="number"
              placeholder=
                "Enter in (m)"
              
              value={
                length === null ? "" : length
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
                  : result + " (Ω⋅m)"
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
    </>)
  }

  //Ohm's Law
  const OhmCalculator = () => {
    const [choice, setChoice] = useState("voltage");
    const [voltage, setVoltage] = useState(null);
    const [current, setCurrent] = useState(null);
    const [resistance, setResistance] = useState(null);
    const [result, setResult] = useState(null);

    const calcResult = () => {
      let res;
      if (choice === "voltage") {
        res = current * resistance;
      }
      if (choice === "current") {
        res = voltage / resistance;
      }
      if (choice === "resistance") {
        res = voltage / current;
      }
      setResult(res);
    };
    const reset = () => {
      setCurrent(null);
      setVoltage(null);
      setResistance(null);
      setResult(null);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      setCurrent(null);
      setResistance(null);
      setVoltage(null);
    };
    const choiceData = () => {
      if (choice === "voltage")
        return {
          name: "Voltage (V)",
          mainunit: "(V)",
          quantities: ["Current", "Resistance"],
          subunits: ["(A)", "(ohm)"],
          getters: [current, resistance],
          setters: [setCurrent, setResistance],
        };
      if (choice === "current")
        return {
          name: "Current (I)",
          mainunit: "(A)",
          quantities: ["Voltage", "Resistance"],
          subunits: ["(V)", "(ohm)"],
          getters: [voltage, resistance],
          setters: [setVoltage, setResistance],
        };
      if (choice === "resistance")
        return {
          name: "Resistance (R)",
          mainunit: "(ohm)",
          quantities: ["Voltage", "Current"],
          subunits: ["(V)", "(I)"],
          getters: [voltage, current],
          setters: [setVoltage, setCurrent],
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
              <option value="voltage">Voltage (V)</option>
              <option value="current">Current (I)</option>
              <option value="resistance">Resistance (R)</option>
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

  //Drift velocity
  const DriftVelocity=()=>{
    const [area, setArea] = useState(null);
    const [current, setCurrent] = useState(null);
    const [number, setNumber] = useState(null);
    const [charge, setCharge] = useState(null);
    const [result, setResult] = useState(null);

    const reset=()=>{
      setCurrent(null)
      setNumber(null)
      setCharge(null)
      setResult(null)
    }
    const calcResult=()=>{
      let res;
      res=current/(number*area*charge);
      setResult(res);
    }
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Current (I)</Form.Label>
            <Form.Control
              onChange={(e) => setCurrent(e.target.value)}
              type="number"
              placeholder={"Enter in Ampere"}
              value={current === null ? "" : current}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Area (A))</Form.Label>
            <Form.Control
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder={"Enter in (m²)"}
              value={area === null ? "" : area}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Number of electrons (n)</Form.Label>
            <Form.Control
              onChange={(e) => setNumber(e.target.value)}
              type="number"
              placeholder={"Enter number of electrons"}
              value={number === null ? "" : number}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Charge (q)</Form.Label>
            <Form.Control
              onChange={(e) => setCharge(e.target.value)}
              type="number"
              placeholder={"Enter in coulomb"}
              value={charge === null ? "" : charge}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " m/s²"}
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

  const calC=(key)=>{
    let currentCall;
    switch (key) {
      case "Ohm's Law":
        currentCall = OhmCalculator();
        break;
      case "Resistivity":
        currentCall = ResistivityCalculator();
        break;
      case "Drift Velocity":
        currentCall=DriftVelocity()
        break;
      default:
        break;
    }
    return currentCall;
  }

  //Electric field
  if (details.topic === "Electric Field") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Electric field</h1>
        </div>
        <div className="mech__topics-card">
          {electricfield_data.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/electromagnetism/calc/electric_field/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else if (details.topic === "Electric Potential") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Electric Potential</h1>
        </div>
        <div className="mech__topics-card">
          {electricpotential_data.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/electromagnetism/calc/electric_potential/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else if (details.topic === "Flux") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Flux</h1>
        </div>
        <div className="mech__topics-card">
          {flux_data.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/electromagnetism/calc/Flux/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
};

export default calculator;
