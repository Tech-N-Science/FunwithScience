import React from "react";
import { Card } from "react-bootstrap";
import "./NuclearPhysics.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NuclearPhysics() {
  // topics_data
  const Topics = [
    {
        topic:"Mass defect",
      formula:"Δm=[Z(mp+me)+(A-Z)mn]-matom",
      siunit:"Atomic mass unit (amu)",
      details:`The calculation of mass defect can be calculated by the equation "Δm=[Z(mp+me)+(A-Z)mn]-matom", where Δm is the mass defect, Z is the atomic number (number of protons), A is the mass number (number of nucleons), mp is the mass of a proton (1.007277 amu), mass of an electron (0.000548597 amu) and mass of a neutron (1.008665 amu) and matom is the mass of nuclide , in order to calculate the mass defect it is important to use full accuracy of mass masurement. `,
      process:"To find the mass defect we need to know the mass of nuclide (matom), atomic number (number of protons) (Z) and mass number (number of nucleons) (A) by using these values we can easily find the mass defect",
      dimension:"M"
      },
  ];

  return (
    <div className="mech__main">
      <Helmet>
        <title>Nuclear | physics | Tech N Science</title>
        <meta name="description" content="Explore the Relativity calculator" />
        <meta name="keywords" content="Nuclear Physics, Calculator" />
      </Helmet>
      <div className="mech__header">
        <h1>Nuclear Physics-Topics</h1>
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
                    to={`/nuclearphysics/calc/${data.topic}`}
                    variant="outline-dark"
                  >
                    {" "}
                    {data.topic}
                  </Link>
                ) : (
                  <Link
                    className="btn"
                    to={`/nuclearphysics/calc/${data.topic}`}
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
