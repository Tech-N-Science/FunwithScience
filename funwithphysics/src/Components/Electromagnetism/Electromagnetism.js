import React from "react";
import { Card } from "react-bootstrap";
import "./Electromagnetism.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Electromagnetism() {
    //topics_data
    const Topics = [
        {
            topic:"Electric Field",
            details:"....",
        },
        {
            topic:"Ohm's Law",
            details:`Ohm's law states that the voltage (V) between two points is directly proportional to the current (I) across that two points and the constant of proportionality is resistance (R) and the equation is given as "V=IR"`,
            siunit:["Resistance  : Ohm", <br/>,"Current : (Ampere)", <br/>,"Voltage : (V)"],
            process:"To find the voltage (V), we need to know the the current between the two point and the resistance(R) across the points & To find the current(I) or the resistance(R) we can also find it using the ohm's law.",
            formula:"V=IR",
            dimension:"V = ML²T⁻²I⁻¹, R = ML²T⁻³I⁻²",
      
        },
        {
            topic:"Drift Velocity",
            details:`Subatomic particles, such as electrons, constantly move in random directions. When electrons are subjected to an electric field, they move randomly, but slowly in one direction, the direction of the applied electric field. Drift velocity is the net velocity at which these electrons drift.`,
            siunit: 'm/s',
            process:"To find the drift velocity (V), we need to know the the current flowing through the conductor(I), number of electrons(n), Area of cross-section of the conductor(A) and the charge of electron(q).",
            formula:"V = I/nAq",
            dimension:"M⁻¹T²I",
        
        },
        {
            topic:"Electric Potential",
            details:"..."
        
          },
        {

            topic: "Electromotive Force (EMF)",
            details:
              "The eletromotive force (emf) of a source may be defined as the work done by the source in taking a unit positive charge from lower to the higher potential.",
            formula: "ε = V+Ir",
            siunit: "Volts (Joules/Coulombs)",
            dimension: "M L² T⁻³ I⁻¹",
            process:
             "To find the electromotive force (ε) we need to know the voltage of a cell (V), internal resistance (r) and current across the circuit(I). ",
           },

            topic:"Flux",
            details:"..."
        
          },
          {
            topic: "Resistivity",
            details: `Electrical resistance of a conductor with a unit cross-sectional area and length. Resistivity, a material attribute, is useful in comparing different materials based on their capacity to conduct electric currents. Poor conductors have high resistance.`,
            siunit: "ohm-meter",
            dimension: "ML³T⁻³I⁻²",
            process:
              "To find the resistivity we need to know the Resistance (R), area (A), and the length (l) by putting these value in formula we can easily find the resistivity.",
            formula: "ρ=RA/l",
          },
          {
            topic:"Self Inductance",
            details:`When the coil's current or magnetic flux changes, an opposing induced electromotive force is created. Self Induction is the name given to this occurrence. When electricity begins to flow through the coil at any time, it is discovered that the magnetic flux becomes directly proportional to the current flowing through the circuit. `,
            siunit: 'Henry (H)',
            process:"To find the Self inductance of inductor(L), we need to know the the current flowing through the conductor(I), number of turns (N) and magnetic flux(Φ).",
            formula:"L = NΦ/I",
            dimension:"ML²T⁻²I²",
        
        },
    ]

  return (
    <>
      <Helmet>
        <title>Electromagnetism | physics | Tech N Science</title>
        <meta
          name="description"
          content="Explore the Electromagnetism section and try out the calculators."
        />
        <meta
          name="keywords"
          content="Electromagnetism, calculator, physics, Tech n science, technscience, tech and science"
        />
      </Helmet>
      <div className="mech__main">
        <div className="mech__header">
          <h1>Electromagnetism-Topics</h1>
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
                      to={`/electromagnetism/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/electromagnetism/calc/${data.topic}`}
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
