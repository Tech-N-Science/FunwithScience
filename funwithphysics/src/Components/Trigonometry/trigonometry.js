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
    {
      topic: "Inverse Trigonometry",
      details: [
        `Inverse trigonometric ratios are the inverse of the trigonometric functions.They operate on the ratio of the sides of the triangle to find out the measure of the angles of the  triangle.
         The inverse of a function is denoted by the superscript "-1" of the given trigonometric function. 
         For example, the inverse of the cosine function will be cos-1. 
         The inverse of the trigonometric function is also written as an "arc"-trigonometric function, for example, arcsin will be the inverse of the sine function.`
      ],
      formula: [
        `sin`, <sup>-1</sup>, `[Opposite/Hypotenuse] =  θ`,
        <br />,
        `cos`, <sup>-1</sup>, `[Base/Hypotenuse] =  θ`,
        <br />,
        `tan`, <sup>-1</sup>, `[Opposite/Base] =  θ`,
        <br />,
        `cosec`, <sup>-1</sup>, `[Hypotenuse/Opposite] =  θ`,
        <br />,
        `sec`, <sup>-1</sup>, `[Hypotenuse/Base] =  θ`,
        <br />,
        `cot`, <sup>-1</sup>, `[Base/Opposite] =  θ`,
        <br />,
      ],
      process: [
        "Using the formulae, we can find Angles corresponding to a Trigonometric Function",
        <br />,
      ],
    }
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
