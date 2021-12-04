import React from "react";
import { Card } from "react-bootstrap";
import "./Relativity.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Relativity() {
  // topics_data
  const Topics = [
    {
      topic: "Mass Energy Relation",
      details: `The Einstein's special relativity equation "E = mc²" states that mass and energy are the same physical object that may be converted into one another. The kinetic energy (E) of a body is equal to its enhanced relativistic mass (m) times the speed of light squared (c²) in the equation, where the speed of light is 3x10⁸m/s`,
      formula: "E=MC²",
      process:
        "To find the the energy we need to know the value of mass & we can easily calculate mass if we have the value of energy. where as the value of speed of light is 3x10⁸m/s",
      siunit: ["Energy: joule", <br />, "Mass: kg"],
      dimension: ["Energy: M L² T⁻²", <br />, "mass: M"],
    },
  ];

  return (
    <div className="mech__main">
      <Helmet>
        <title>Relativity | physics | Tech N Science</title>
        <meta name="description" content="Explore the Relativity calculator" />
        <meta name="keywords" content="Relativity," />
      </Helmet>
      <div className="mech__header">
        <h1>Relativity-Topics</h1>
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
                    to={`/relativity/calc/${data.topic}`}
                    variant="outline-dark"
                  >
                    {" "}
                    {data.topic}
                  </Link>
                ) : (
                  <Link
                    className="btn"
                    to={`/relativity/calc/${data.topic}`}
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
  );
}
