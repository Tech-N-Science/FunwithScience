import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Trigonometric() {
  // topics_data
  const Topics = [
    {
      topic: "Trigonometric Functions",
      details: [        
        "Trigonometric functions is used to find the value of unknown angle or side of a right angle triangle.",
        <br />,
        "There are three basic trigonometric functions such as Sine, Cosine and Tangent.",
      ],
      formula: [
        "sin θ = Perpendicular / Hypotenuse",
        <br />,
        "cos θ = Base / Hypotenuse",
        <br />,
        "tan θ = Perpendicular / Base",
        <br />,
        "cot θ = Base / Perpendicular OR 1 / tan θ",
        <br />,
        "sec θ = Hypotenuse / Base OR 1 / cos θ",
        <br />,
        "cosec θ = Hypotenuse / Perpendicular OR 1 / sin θ",
        <br />,
    ],
      process: [
        "Using the formulas we can find values of trigonometric functions ",
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
