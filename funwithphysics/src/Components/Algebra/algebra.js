import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Algebra() {
  // topics_data
  const Topics = [
    {
      topic: "Permutation",
      details: `A permutation of a set is a loosely defined organisation of its members into a sequence or linear order, or a rearranging of its elements if the set is already sorted.
      The word "permutation" also refers to the act or process of changing the linear order of an ordered set.`,
      formula: "P = n!/(n-r)!",
      process:
        "To find the permutation, first we need to find the value of n factorial and n - r factorial, then we need to devide them.",
    },
    {
      topic: "Combination",
      details: `A combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`,
      formula: "C = n!/r!(n-r)!",
      process:
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
    },
  ];

  return (
    <>
      <div className="mech__main">
        <Helmet>
          <title>Algebra | Math | Tech N Science</title>
          <meta name="description" content="Explore the Algebra calculator" />
          <meta name="keywords" content="Algebra" />
        </Helmet>
        <div className="mech__header">
          <h1>Algebra-Topics</h1>
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
                      to={`/algebra/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/algebra/calc/${data.topic}`}
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
