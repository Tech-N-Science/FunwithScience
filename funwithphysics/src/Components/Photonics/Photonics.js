import React from "react";
import { Card } from "react-bootstrap";
import "./Photonics.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

export default function Photonics() {
  // topics_data
  const Topics = [
    {
      topic: "Brewster's Angle",
      formula: "θ = tan⁻¹(n₂/n₁)",
      siunit: "degree",
      process: `"θ = tan⁻¹(n₂/n₁)" This equation is known as Brewster's law, where 'θ' is a brewster's angle, 'n₁' is the refractive index of the first media through which light propagates (the "incidental medium"), and 'n₂' is the index of the other medium, and we can simply get the angle by plugging these numbers into the equation.`,
      details: `The reflected light will be linearly polarised if light strikes an interface at a 90ᴼ angle between the reflected and refracted rays. The polarisation direction (the direction in which the electric field vectors point) is parallel to the interface plane.

               The Brewster angle, θ., is a unique incidence angle that results in a 90ᴼ angle between the reflected and refracted rays. A quick calculation reveals that tan(θ) = n₂/n₁.`,
      dimension: "M⁰ L⁰ T⁰ ",
    },
    {
      topic: "Mirror Formula",
      formula: "(1/v) + (1/u) = 1/f ",
      siunit: "metre",
      process: `In order to find the focal length we should know the object distance(u) and image distance(v)`,
      details: `The relation of object distance and image distance with focal length is known as a mirror equation. It is also known as a mirror formula. (u) is the Object distance.(v) is the Image distance.(f) is the Focal Length. It follows laws of reflection`,
      dimension: "L¹ ",
    },
    {
      topic: "Lens Formula",
      formula: "(1/v) - (1/u) = 1/f ",
      siunit: "metre",
      process: `In order to find the focal length we should know the object distance(u) and image distance(v)`,
      details: `The relation of object distance and image distance with focal length is known as a mirror equation. It is also known as a mirror formula. (u) is the Object distance.(v) is the Image distance.(f) is the Focal Length. It follows laws of refraction`,
      dimension: "L¹ ",
    },
    {
      topic: "Magnification of Mirror",
      formula: "m = h2 / h1",
      siunit: "No unit",
      process: `In order to find the magnification(m) we must know the height of image(h2) and the height of object(h1)`,
      details: `The linear magnification of a mirror(m) can be defined as the ratio of the height of the image(h2) formed by the mirror to that of the height of the object(h1).`,
      dimension: "NA ",
    },
    {
      topic: "Magnification of Lens",
      formula: "m = h2 / h1",
      siunit: "No unit",
      process: `In order to find the magnification(m) we must know the height of image(h2) and the height of object(h1)`,
      details: `The linear magnification of a lens(m) can be defined as the ratio of the height of the image(h2) formed by the lens to that of the height of the object(h1).`,
      dimension: "NA ",
    },
    {
      topic: "Power of Lens",
      formula: "P = 1 / f ",
      siunit: ["meter", <sup>-1</sup>, ` or also known as "diopter"`],
      process: `In order to find the power of lens we need to know the focal lenght of the lens(f)`,
      details: `The power of a lens is defined as its ability to converge or diverge the beam of light that falls on it.`,
      dimension: "L¹",
    },
  ];

  return (
    <>
      <div className="mech__main">
        <Helmet>
          <title>Photonics | physics | Tech N Science</title>
          <meta
            name="description"
            content="Explore the Photonics physics calculator"
          />
          <meta name="keywords" content="Atomic physics, Bohr's model" />
        </Helmet>
        <div className="mech__header">
          <h1>Photonics-Topics</h1>
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
                      to={`/photonics/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/photonics/calc/${data.topic}`}
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
