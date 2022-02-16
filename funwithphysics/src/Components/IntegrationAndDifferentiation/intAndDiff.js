import React from "react";
import './intAndDiff.css'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function IntAndDiff() {
  // topics_data
  const Topics = [
    {
      topic: "Limits",
      details: `straight line details`,
      formula: "Straight line formula",
      process: "Straight line process",
    },

  ];

  return (
    <>
      <div className="mech__main">
        <Helmet>
          <title>Geometry | Math | Tech N Science</title>
          <meta name="description" content="Explore the  calculator" />
          <meta
            name="keywords"
            content="Algebra, Geometry, straightlines, Straight Lines, Pair of Straight Lines"
          />
        </Helmet>
        <div className="mech__header">
          <h1>Geometry-Topics</h1>
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
                      to={`/integrationanddifferentiation/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/integrationanddifferentiation/calc/${data.topic}`}
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
