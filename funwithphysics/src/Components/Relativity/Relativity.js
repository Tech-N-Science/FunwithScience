import React from "react";
import { Card } from "react-bootstrap";
import "./Relativity.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

export default function Relativity() {
  // topics_data
  const Topics = [
    {
      topic: "Mass Energy Relation",
      details: `The Einstein's special relativity equation "E = mc²" states that mass and energy are the same physical object that may be converted into one another. The kinetic energy (E) of a body is equal to its enhanced relativistic mass (m) times the speed of light squared (c²) in the equation, where the speed of light is 3x10⁸m/s`,
      formula: "E=MC²",
      process:
        "To find the the energy we need to know the value of mass & we can easily calculate mass if we have the value of energy. where as the value of speed of light is 3x10⁸m/s",
      siunit: ["Energy: joule", <br />, "Mass: kg"],
      dimension: ["Energy: M L² T⁻²", <br />, "mass: M"],
    },
    {
      topic: "Relativistic Kinetic Energy",
      details:
        "Relativistic effects can be observed if an object moves at least 1% of the speed of light. In this scenario, you must compute the kinetic energy using the formula KE= E-PE, where E = mc2 and PE = m0c2.",
      formula: "KE = m₀c² * [√(1- v²/c²) - 1]",
      process:
        "To find the kinetic energy we need to know the value of mass (m₀) and velocity of the body(v) where  the value of speed of light is 3x10⁸m/s",
      siunit: [
        "Kinetic Energy: joule",
        <br />,
        "Mass: kg",
        <br />,
        "Velocity: m/s",
      ],
      dimension: "Kinetic Energy: M L² T⁻²",
    },
    {
      topic: "Relativistic Velocity",
      details:
        "Relativistic effects can be observed if we combine time dilation and length contraction. In this scenario, you must compute the velocity using the formula  u = (v+w) / (1+(v * w)/c²). When the speed of the spacecraft or the projectile is less than the speed of light, the formula becomes u = v + w, which is the total of the velocities. If the velocities v and w are both high, the projectile's speed as perceived from outside the spacecraft is substantially lower than the sum of the two speeds v + w and never reaches the speed of light.",
      formula: " u = (v+w)/(1+(v*w)/c²)",
      process:
        "To find the relativistic velocity we need to know the value of speed of object (v) and speed of the projectile as seen from spaceship (w) where  the value of speed of light is 3x10⁸m/s",
      siunit: "Velocity: m/s",
      dimension: "Velocity: L T⁻¹",
    },
    {
      topic: "Time Dilation",
      details:
        "Time dilation is a measure of the elapsed time that we measure using two clocks. Time dilation is a measure of the elapsed time that we measure using two clocks. You can presumably see (or have already learned from playing with our time dilation calculator) that the observer speed must be extraordinarily high - on the same order of magnitude as the speed of light - for the difference in the two time spans to be evident. That is why relativistic effects are so perplexing: we cannot observe them in ordinary life.",
      formula: "Δt = Δt₀ / √(1 - v²/c²)",
      process:
        "To find the time dilation we need to know the value of velocity (v) and proper time (Δt₀) where  the value of speed of light is 3x10⁸m/s",
      siunit: "Time dilation: seconds",
      dimension: "Time dilation : T",
    },
    {
      topic: "Length Contraction",
      details:
        "Relativity can be observed when object travels with speed of light and there length contraction comes into the picture. The speed must be very high - equivalent to the speed of light - for the impact of length contraction to be evident. We have no experience with items travelling at such high speeds in our daily lives. As a result, the implications of special relativity are quite perplexing.",
      formula: "Relative Length = L * √(1 - v²/c²)",
      process:
        "Because, in addition to the great speed required, measuring the length of an item moving with regard to us is difficult, the consequences of length contraction are difficult to perceive. To find the length contraction we need to know the value of length (L) and speed of object (v) where  the value of speed of light is 3x10⁸m/s",
      siunit: "Relative Length: metres",
      dimension: "Relative Length : L",
    },
  ];

  return (
   <>
    <div className="mech__main">
      <Helmet>
        <title>Relativity | physics | Tech N Science</title>
        <meta name="description" content="Explore the Relativity calculator" />
        <meta name="keywords" content="Relativity," />
      </Helmet>
      <div className="mech__header">
        <h1>Relativity-Topics</h1>
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
                    to={`/relativity/calc/${data.topic}`}
                    variant="outline-dark"
                  >
                    {" "}
                    {data.topic}
                  </Link>
                ) : (
                  <Link
                    className="btn"
                    to={`/relativity/calc/${data.topic}`}
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
