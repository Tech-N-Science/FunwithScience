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
    <Footer/>
   </>
  );
}
