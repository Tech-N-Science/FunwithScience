import React from "react";
import { Card } from "react-bootstrap";
import "./NuclearPhysics.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

export default function NuclearPhysics() {
  // topics_data
  const Topics = [
    {
      topic: "Mass defect",
      formula: "Δm=[Z(mp+me)+(A-Z)mn]-matom",
      siunit: "Atomic mass unit (amu)",
      details: ` The mass of an atom is always slightly less than the total of the masses of the individual neutrons, protons, and electrons that make up the atom, according to careful measurements. The mass defect (m) is the discrepancy between the mass of an atom and the sum of its components' masses.`,
      process: `The calculation of mass defect can be calculated by the equation "Δm=[Z(mₚ+mₑ)+(A-Z)mₙ]-mₐₜₒₘ", where 'Δm' is the mass defect, 'Z' is the atomic number (number of protons), 'A' is the mass number (number of nucleons), 'mₚ' is the mass of a proton (1.007277 amu), 'mₑ' is mass of an electron (0.000548597 amu), 'mₙ' is mass of a neutron (1.008665 amu) and 'mₐₜₒₘ' is the mass of nuclide. In order to calculate the mass defect it is important to use full accuracy of mass masurement.`,
      dimension: "M",
    },
    {
      topic: "Mass and Energy",
      details: `The mass and energy equivalence shows that the mass and energy are inter-convertible. It means if you have mass you have got energy inside that body. Whenver that body loses mass or has a mass defect it releases some amount of energy. This relation was given by Physicist Albert Einstein.`,
      siunit: [
        "Energy  : Joules",
        <br />,
        "Mass : Kilograms",
        <br />,
        "Velocity : meter/sec",
        <br />,
      ],
      process:
        "To find the Energy(E), we need to know the the mass defect of the particular Substance and speed of light which is c = 3x10⁸ m/s.",
      formula: "E=mc²",
      dimension: "E = M¹L²T⁻², m = M¹ , c = LT⁻¹",
    },

    {
      topic: "Radius of Nucleus",
      details: `The nucleus of an atom has no sharply defined borders, and while it may be thought of as spherical in shape, caution must be used when referring to its 'radius.' These radii may be measured experimentally using rapid neutron deflection tests. According to the results, the nuclear radius is proportional to ∛A, where A is the mass number.`,
      siunit: [
        "Radius  : Meter",
        <br />,
        "Mass Number : Dimensionless",
        <br />,
      ],
      process:
        "To find the Radius of Nucleus(R), we need to know the the mass Number(A) of the particular Substance and Proportionality constant(Rₒ) which is Rₒ = 1.2 x 10⁻¹⁵.",
      formula: "R = Rₒ x ∛A",
      dimension: "R = L¹",
    },

    {
      topic: "Q value",
      details: `In nuclear physics, the Q value for a reaction is the amount of energy absorbed or released during the nuclear reaction, it can be positive and negative as well. The value relates to the enthalpy of a chemical reaction or the energy of radioactive decay products. It can be determined from the masses of reactants and products.`,
      siunit: ["Q value  : MeV", <br />, "Mass Defect : amu", <br />],
      process:
        "To find the Q value, we need to know the the mass defect of the particular reaction and the energy released when 1 amu is converted to energy which is equal to 931.5 MeV. ",
      formula: "Q = (mᵣ-mₚ) x 931.5 MeV",
      dimension: "Q = M¹ L² T⁻², Δm = M¹, c = L¹T⁻¹",
    },

    {
      topic: "Binding Energy",
      details: `Binding energy is commonly described as the minimum amount of energy necessary to remove a particle from a particle system. In other words, energy is employed to divide a system of particles into single units. Binding energy is mostly studied in atomic physics, chemistry, and condensed matter physics. The binding energy word is used in nuclear physics to define the separation energy.`,
      siunit: ["Energy  : Joule", <br />, "Mass Defect : Kg", <br />],
      process:
        "To find the Binding Energy(B.E) value, we need to know the the mass defect(Δm) of the particular reaction and for Binding Energy per nucleon we also need to know the mass number(A). The Speed of Light = 3 x 10⁸ m/s .",
      formula: "B.E = Δm x c², B.E per Nucleon = (Δm x c²) / A",
      dimension: "B.E = M¹ L² T⁻², Δm = M¹, c = L¹T⁻¹",
    },

    {
      topic: "Half and Mean Lifetime",
      details: `The half-life of a sample refers to the time it takes for half of a sample to respond, or the time it takes for a quantity to decline from its initial value to half. The time period calculated as the sum of the lives of all the individual unstable nuclei in a sample divided by the total number of unstable nuclei present is known as the mean lifespan of all the nuclei of a specific unstable atomic species. `,
      siunit: [
        "Half Life  : Seconds",
        <br />,
        "Mean Life : Seconds",
        <br />,
        "Decay Constant : 1/Seconds",
        <br />,
      ],
      process:
        "To find the Half Life and Mean Life value, we need to know the the Decay Constant(λ) of the particular Substance.",
      formula: "Half Life = ln2/λ, Mean Life = 1/λ",
      dimension: "Half Life = T, Mean Life = T, λ = T⁻¹",
    },

    {
      topic: "Carbon Dating",
      details: `Carbon-14 dating, also known as radiocarbon dating, is a method of determining age that is based on radiocarbon decay to nitrogen. Carbon-14 is constantly created in nature by the interaction of neutrons with nitrogen-14 in the Earth's atmosphere; the neutrons required for this reaction are produced by cosmic rays interacting with the atmosphere.`,
      siunit: ["Amount of ¹⁴C  : Grams", <br />, "Time : Seconds", <br />],
      process:
        "To find the Initial amount of ¹⁴C, Final Amount of ¹⁴C, and the time taken to reach the final amount of ¹⁴C, we need at least two known quantities to find the third quantity.",
      formula:
        "Initial Amount of ¹⁴C = Final Amount of ¹⁴C x e⁽⁻⁰·⁰⁰⁰¹²¹⁶ ˣ ᵀⁱᵐᵉ⁾",
      dimension: "Amount of ¹⁴C = M¹, Time = T¹",
    },
  ];

  return (
    <>
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
    <Footer/>
    </>
  );
}
