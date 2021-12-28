import React from "react";
import { Card } from "react-bootstrap";
import "./AtomicPhysics.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

export default function AtomicPhysics() {
  // topics_data
  const Topics = [
    {
      topic: "Bohr's model",
      formula: "1/λ=R[(1/nf²)-(1/ni²)]",
      siunit: "Wavelength: m",
      details:
        "The Rydberg formula describes the various transition energies that occur between energy levels. A photon is released when an electron goes from a higher to a lower energy level. Depending on the beginning and ultimate energy levels of the transition, the hydrogen atom can produce different wavelengths of light. It emits a photon with an energy equal to the square of the energy levels of the final (nf) and initial (ni).",
      process:
        "To find the (λ) wavelength of the emitted EM radiation we need to know the value of initial state (ni) and the final excitation state (nf) where R is the Rydberg constant, and it's value is determined by an experiment 1.097 × 107 / m (or m⁻¹)",
      dimension: "[L]",
    },
    {
      topic: "Einstein's photoelectric equation",
      formula: "E=φ+KEₘₐₓ",
      siunit: "Electron-volt: eV",
      details:
        "Einstein's photoelectric equation is used to obtain the energy of photon using the photon picture of electromagnetic radiation. A photon of energy hv is absorbed by the electron of the metal surface, then the energy is used to liberate the electron from the surface and rest of the energy becomes the kinetic energy of the electron.",
      process:
        "So The Energy(E) of a photon can be obtained by using the work function(φ) and the maximum kinetic energy of the ejected electrons from the metal surface. Where E is the incident energy of photons with the formula E=hv and h represents the Planck constant, v represents the frequency of incident radiation, 'φ' is the work function of metal and 'KEₘₐₓ' is the maximum kinetic energy of electrons.",
      dimension: "ML²T⁻²",
    },
    {
      topic: "Angular momentum",
      formula: "mvr=nh/2π",
      siunit: "kg m²/s",
      details:
        "The Bohr's atomic model says that the angular momentum of electrons in different orbits around the nucleus is quantized.He also stated that the electrons move only in those orbits where the angular momentum of an electron is an integral multiple of h/2.",
      process:
        "The angular momentum of an electron can be calculated by using mvr or nh/2π (where v is the velocity, n is the orbit in which electron is, m is mass of the electron, and r is the radius of the nth orbit). h is the planck's constant with the value 6.62607004 × 10⁻³⁴ and pi which is approximately equal to 3.14159.",
      dimension: "ML²T⁻¹",
    },
    {
      topic: "Radius of orbit",
      formula: "r = n²h²/4π²me² x 1/Z",
      siunit: "A°",
      details:
        "The Bohr radius is part of the fundamental model of the hydrogen atom. The model asserts that the electron can only occupy certain stable orbits in whole number units of 5.29 x 10⁻¹¹m or the Bohr radius. ",
      process:
        "The following equation is used to calculate the radius of the orbit in Angstroms, Å. Where n is the prinicipal quantum number of the orbit and Z is the atomic number.",
      dimension: "L¹",
    },
    {
      topic: "Velocity of electron",
      formula: "vₙ= 2πkZe²/nh",
      siunit: "m/s",
      details:
        "According to the hydrogen spectra given by Bohr's atomic model, which states that the electrons move in fixed paths around the nucleus called orbits. The velocity of these electrons can be known by using the following formula.",
      process:
        "The following equation is used to calculate the velocity of the electron. Where n is the prinicipal quantum number of the orbit and Z is the atomic number",
      dimension: "M⁰L¹T¹",
    },
    {
      topic: "Energy of electron",
      formula: "Eₙ = -me⁴Z²/8ε₀²n²h²",
      siunit: "Electron-volt: eV",
      details:
        "Bohr's formula is used to get the energy of electrons in orbits. We know that the total energy of an electron is the sum of its kinetic and potential energy. The kinetic energy of the electron is given by K.E=mvₙ²/2. The potential energy is given by P.E=-Ze²/4πε₀rₙ.So, Total energy of an electron can be calculated by using the following Bohr's formula",
      process:
        "An electron make jumps between the orbits around the nucleus according to the amount of energy that they have.When they jump from lower orbit to higher orbit they absorb energy, and they lose energy when they jump from higher orbit to lower orbit. We can calculate the energy of the electron by specifying the atomic number(Z) and the orbit number(n) of the electron",
      dimension: "ML²T⁻²",
    },
    {
      topic: "Bragg's equation",
      formula: "nλ = 2dsinΘ",
      siunit: "A°",
      details:
        "When an electromagnetic radiation or X-ray is incident upon  a crystalline sample with wavelength comparable to atomic spacings, it gets scattered by the atoms in the system which results in constructive interference.",
      dimension: "NA",
      process:
        "The wavelength of x-rays, and moving electrons, protons and neutrons can be calculated by using these equation. Here n is an integer determined by the order given, λ is the wavelength, d is the spacing between the planes in the atomic lattice, θ is the angle between the incident ray and the scattering planes.",
    },
    {
      topic: "DeBroglie wavelength",
      formula: "λ = h/p = h/mv",
      siunit: "metre(m)",
      details:
        "Any moving particle with an associated momentum that varies in time or space will behave as a matter wave, also called de broglie wave.A particle’s de Broglie wavelength is usually inversely proportional to its force.",
      dimension: "M⁰L¹T⁰",
      process:
        "The de Broglie equation is used to calculate the wavelength of the moving particle. Where p is the momentum of the given particle and h is the planck's constant.",
    },
  ];

  return (
    <>
      <div className="mech__main">
        <Helmet>
          <title>Atomic | physics | Tech N Science</title>
          <meta
            name="description"
            content="Explore the Atomic physics calculator"
          />
          <meta name="keywords" content="Atomic physics, Bohr's model" />
        </Helmet>
        <div className="mech__header">
          <h1>Atomic Physics-Topics</h1>
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
                      to={`/atomicphysics/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/atomicphysics/calc/${data.topic}`}
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
      <Footer />
    </>
  );
}
