import React from "react";
import { Card } from "react-bootstrap";
import "./Photonics.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Photonics() {
  // topics_data
  const Topics = [
    {
        topic: "Brewster's Angle",
        formula:"θ = tan⁻¹(n2/n1)",
        siunit:"degree",
        process:`To find the Brewster's angle we need to know the (n1) refractive index of the initial medium through which the light propagates (the "incident medium") and (n2) the index of the other medium, we can easily find the the angle by putting these values`,
        details:`"θ = tan⁻¹(n2/n1)" This equation is known as Brewster's law where θ is a brewster's angle and n1 is the refractive index of the initial medium through which the light propagates (the "incident medium") and n2 is the index of the other medium, we can easily find the the angle by putting these values`,
        dimension:"M⁰ L⁰ T⁰ "
    },
  ];

  return (
    <div className="mech__main">
      <Helmet>
        <title>Atomic | physics | Tech N Science</title>
        <meta name="description" content="Explore the Atomic physics calculator" />
        <meta name="keywords" content="Atomic physics, Bohr's model" />
      </Helmet>
      <div className="mech__header"> 
        <h1>Photonics-Topics</h1>
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
                    to={`/photonics/calc/${data.topic}`}
                    variant="outline-dark"
                  >
                    {" "}
                    {data.topic}
                  </Link>
                ) : (
                  <Link
                    className="btn"
                    to={`/photonics/calc/${data.topic}`}
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
