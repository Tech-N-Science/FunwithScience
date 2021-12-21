import React from "react";
import { Card } from "react-bootstrap";
import "./Electromagnetism.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

export default function Electromagnetism() {
  //topics_data
  const Topics = [
    {
      topic: "Coulomb's law",
      details: `The quantity of electric force between two point charges q1 and q2 is proportional to the product of the charges' magnitudes; this electric force is known as electrostatic force or coulomb force. using the formula F=k[(q1*q2)/r2], where F is the electric force, q1 and q2 are the charges, and r is the separation distance.`,
      formula: "F=k[(q1*q2)/r²]",
      process:
        "To find the force between these charges we need to know the q1 and q2 charges and distance of separation (r), where k is constant and it's value is 8.99 × 10⁹ N m²/C².",
      siunit: "(N)",
      dimension: "[M¹L¹T⁻²]",
    },
    {
      topic: "Electric Field",
      details: "....",
    },
    {
      topic: "Ohm's Law",
      details: `Ohm's law states that the voltage (V) between two points is directly proportional to the current (I) across that two points and the constant of proportionality is resistance (R) and the equation is given as "V=IR"`,
      siunit: [
        "Resistance  : Ohm",
        <br />,
        "Current : (Ampere)",
        <br />,
        "Voltage : (V)",
      ],
      process:
        "To find the voltage (V), we need to know the the current between the two point and the resistance(R) across the points & To find the current(I) or the resistance(R) we can also find it using the ohm's law.",
      formula: "V=IR",
      dimension: "V = ML²T⁻²I⁻¹, R = ML²T⁻³I⁻²",
    },
    {
      topic: "Drift Velocity",
      details: `Subatomic particles, such as electrons, constantly move in random directions. When electrons are subjected to an electric field, they move randomly, but slowly in one direction, the direction of the applied electric field. Drift velocity is the net velocity at which these electrons drift.`,
      siunit: "m/s",
      process:
        "To find the drift velocity (V), we need to know the the current flowing through the conductor(I), number of electrons(n), Area of cross-section of the conductor(A) and the charge of electron(q).",
      formula: "V = I/nAq",
      dimension: "M⁻¹T²I",
    },
    {
      topic: "Electric Potential",
      details: "...",
    },
    {
      topic: "Flux",
      details: "...",
    },
    {
      topic: "Gauss Law",
      details:
        "The Gauss law is a relationship between the 'flow' of electric field lines (flux) and the charges on the enclosed surface. The net electric flow stays zero if no charges are contained by a surface. The number of electric field lines entering the surface equals the number of field lines exiting the surface.",
      formula: "Φ = Q/ε₀",
      siunit: "Nm²/C or volt-meter",
      dimension: "M L³ T⁻³ I⁻¹",
      process:
        "According to the Gauss law, the total electric flux (Φ) linked with a closed surface is 1/ε₀ times the charge Q enclosed by the closed surface.",
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
      topic: "Self Inductance",
      details: `When the coil's current or magnetic flux changes, an opposing induced electromotive force is created. Self Induction is the name given to this occurrence. When electricity begins to flow through the coil at any time, it is discovered that the magnetic flux becomes directly proportional to the current flowing through the circuit. `,
      siunit: "Henry (H)",
      process:
        "To find the Self inductance of inductor(L), we need to know the the current flowing through the conductor(I), number of turns (N) and magnetic flux(Φ).",
      formula: "L = NΦ/I",
      dimension: "ML²T⁻²I²",
    },
    {
      topic: "Energy Density Of Inductor",
      details: `The effort required to create a current via an inductor is equal to the energy stored in a magnetic field. When an electric current travels through an inductor, the energy density is the amount of energy stored per unit volume in the magnetic field.`,
      siunit: "joules per cubic metre",
      process:
        "To find the energy density of inductor, we need to know the value of magnetic field that is generated when current(I) flows throw an inductor with inductance(L).",
      formula: "B²/2μ₀",
      dimension: "ML⁻¹T⁻²",
    },
    {
      topic: "Power Factor",
      details:
        "Power factor may be defined as the ratio between Resistance and Impedance in AC Circuit.",
      siunit: "Unitless",
      process:
        "To find the Power Factor of an a.c. circuit, we need to know the resistance (R), and impedance of the circuit (Z). Where Z = Z = √(R²+(XL - Xc)²). If cosθ is 1 then AC circuit is purely Resistive.",
      formula: "cosθ = R/Z, Z = √(R²+(XL - Xc)²)",
      dimension: "Dimensionless",
    },
    {
      topic: "Motional EMF",
      details:
        "A motional electromotive force in a sliding bar is an emf caused by the movement of a conductor across a magnetic field. E = -vLB denotes the equation. This equation holds true as long as the velocity, field, and length of sliding bar are all perpendicular to each other. The minus sign represents Lentz law.",
      formula: "ε = -Bvl",
      siunit: "Volts (Joules/Coulombs)",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "To find the motional EMF(ε) we need to know the magnetic field (B), the constant speed (v) and the length (l) of sliding bar. ",
    },
    {
      topic: "Faraday's Law",
      details:
        "Faraday's law states that the induced emf(ε) in a circuit is proportional to the rate of change over time(t) of the magnetic flux(Φ) through that circuit.",
      formula: "ε = -N * (ΔΦ /Δt) ",
      siunit: "Volts (Joules/Coulombs)",
      dimension: "M L² T⁻³ I⁻¹",
      process:
        "In order to find the induced EMF(ε) we need know the rate of change of Time period(Δt) and the rate of change of magnetic flux(ΔΦ) in the circuit and also the number of turns in the coil(N). ",
    },
    {
      topic: "Time period",
      details:
        "The time for the charged particle to go around the circular path is defined as the period, which is the same as the distance traveled (the circumference) divided by the speed. Based on this and Equation, we can derive the period of motion as T = 2πm/(qB).",
      formula: "T = 2πm/(qB)",
      siunit: "second",
      dimension: "T",
      process:
        "To find the Time period (T) we need to know the magnetic field (B), the mass of the particle(m) and the charge of the particle(q). ",
    },
    {
      topic: "Magnetic Force",
      details: `Moving charges exert forces on magnetic fields, which in turn impose pressures on other magnets with moving charges. Right hand rule 1 (RHR-1) determines the direction of force on a moving charge: The right hand's thumb should point in the direction of v, the fingers should point in the direction of B, and a perpendicular to the palm should point in the direction of F. The force is parallel to the plane created by v and B. Charged particles frequently follow magnetic field lines rather than crossing them because the force is zero when v is parallel to B. `,
      siunit: "Newton (N)",
      process:
        "To find the Magnetic Force exerted(F), we need to know the charge flowing(q), speed of charges (v) and magnetic field strength(B) and the angle between velocity and magnetic field(θ).",
      formula: "F = qvBsin(θ)",
      dimension: "ML¹T⁻²",
    },
    {
      topic: "Magnetic field",
      details: "....",
    },
  ];

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
      <Footer/>
    </>
  );
}
