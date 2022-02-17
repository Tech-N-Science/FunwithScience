import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Trigonometric() {
  // topics_data
  const Topics = [
    {
      topic: "Trigonometric Functions",
      details: `If the following three requirements are met, a function f(x) is said to be continuous at a point x = a, in its domain:
        <br>1. f(a) exists (i.e. f(a) has a finite value)
        <br>2. Limx→a f(x) exists (i.e. the right-hand limit = left-hand limit, and both are finite)
        <br>3. Limx→a f(x) = f(a)`,
      formula: "Prove LHS = RHS",
      process: [
        "The function f(x) is said to be continuous in the interval I = [x1,x2] if the three conditions mentioned above are satisfied for every point in the interval I.",
        <br />,
      ],
    },
  ];

  return (
    <>
      <div className="mech__main">
        <Helmet>
          <title>Trigonometry | Math | Tech N Science</title>
          <meta
            name="description"
            content="Explore the Trigonometry calculator"
          />
          <meta name="keywords" content="Trigonometry" />
        </Helmet>
        <div className="mech__header">
          <h1>Trigonometry-Topics</h1>
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
                      to={`/trigonometry/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/trigonometry/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  )}
                </Card.Body>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
