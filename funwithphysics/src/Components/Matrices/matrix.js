import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Matrices() {
  // topics_data
  const Topics = [
    {
      topic: "Determinants",
      details:
        "A determinant is a scalar value which is obtained using a square matrix. Determinants are used to find adjoint and inverse of a matrix. Other important uses include solving linear equations and capturing linear transformations effects. It is mainly calculated by adding the product of elements and their co-factors.",
    },
  ];

  return (
    <>
      <div className="mech__main">
        <Helmet>
          <title>Matrices | Math | Tech N Science</title>
          <meta name="description" content="Explore the Matrix calculator" />
          <meta name="keywords" content="Matrices" />
        </Helmet>
        <div className="mech__header">
          <h1>Matrices-Topics</h1>
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
                      to={`/matrices/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/matrices/calc/${data.topic}`}
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
