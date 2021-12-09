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
        formula:"",
        siunit:"",
        process:"",
        details:"",
        dimension:""
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
