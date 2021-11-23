import React from "react";
import "./Calculator.css";
import { Card } from "react-bootstrap";
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
        "2) If r = R, in in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
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
      details: `Electric field produced by the charged disc at a point P is given by the equation "E=σ/2ε₀[1-x²/√(x²+R²)]" where σ is surface density, x is distance, R is the radius where as ε₀ is constant and it's value is 8.854187817 × 10⁻¹² C²/N. m² `,
      process:
        "To find the electric field for the disc we need to know the Radius (R) of the disc, and the distance (x) and the surface density(σ), where as the (ε₀) is constant and its value is 8.854187817 × 10⁻¹² C²/N. m² ",
    },
    {
      topic: "Shell",
      details: [
        "There are three condition for Shell:",
        <br />,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
        <br />,
        "2) If r = R, in in this case electric field produced is same as that of a point charge i.e, E = kq/r²",
        <br />,
        "3) If r < R, in in this case electric field produced is zero",
        <br />,

        "where 'r' is the distance between the center of sphere and the point at which electric field is produced and 'R' is the radius of sphere. ",
      ],
      formula: "E=kQ/r²",
      siunit: "newtons per coulomb (N/C)",
      dimension: "[M L I⁻¹ T⁻³].",
      process:
        "To find the electric field produced by a spherical shell we need to know the charge of magnitude (Q), distance (r) away from the spherical shell and by putting these values in formula we can easily find the electric field.",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

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
            {/* {calC(details.topic)} */}
          </div>
        </div>
      </>
    );
  }
};

export default calculator;
