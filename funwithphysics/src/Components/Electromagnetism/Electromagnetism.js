import React from "react";
import { Card } from "react-bootstrap";
import "./Electromagnetism.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Electromagnetism() {
  //topics_data
  const Topics = [
    {
      topic: "Electric Field",
      details: "....",
    },
    {
      topic: "Ohm's Law",
      details: `Ohm's law states that the voltage (V) between two points is directly proportional to the current (I) across that two points and the constant of proportionality is resistance (R) and the equation is given as "V=IR"`,
      siunit: [
        "Resistance  : Ohm",
        <br />,
        "Current : (A)",
        <br />,
        "Voltage : (V)",
      ],
      process:
        "To find the voltage (V), we need to know the the current between the two point and the resistance(R) across the points & To find the current(I) or the resistance(R) we can also find it using the ohm's law.",
      formula: "V=IR",
      dimension: "",
    },
    {
        topic: "Resistivity",
        formula:"ρ = RA/l",
        details:`By using the formula "ρ = RA/l", we can easily find the resistivity where R is the resistance, A is the area and l is the length.`,
        process:"To find the resistivity we need to know the Resistance (R), area (A) and the length (l) by which we can easily calculate the resistivity.",
        siunit:"ohm-meter (Ω⋅m)",
        dimension:"ML²T⁻¹Q⁻¹."
      },
    {
      topic: "Electric Potential",
      details: "...",
    },
    {
      topic: "Flux",
      details: "...",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Electromagnetism | physics | Tech N Science</title>
        <meta
          name="description"
          content="Explore the Electromagnetism section and try out the calculators."
        />
        <meta
          name="keywords"
          content="Electromagnetism, calculator, physics, Tech n science, technscience, tech and science"
        />
      </Helmet>
      <div className="mech__main">
        <div className="mech__header">
          <h1>Electromagnetism-Topics</h1>
        </div>
        <div className="mech__topics-card">
          {Topics.map((data) => (
            <React.Fragment key={data.topic}>
              <Card key={data.topic} style={{ width: "18rem" }}>
                <Card.Body>
                  {data.details === undefined ? (
                    <Link
                      className="btn"
                      disabled={true}
                      to={`/electromagnetism/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/electromagnetism/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  )}
                  <div style={{ padding: "0.3em" }}>
                    {data.details === undefined ? (
                      <Card.Text>
                        {" "}
                        Will be{" "}
                        <span style={{ fontWeight: "bold", color: "#19165b" }}>
                          available
                        </span>{" "}
                        soon...
                      </Card.Text>
                    ) : (
                      <Card.Text> </Card.Text>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
