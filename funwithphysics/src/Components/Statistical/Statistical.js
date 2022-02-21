import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import '../PysicsStyles/physicsmenustyle.css';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

export default function Statistical() {
  //topics_data
  useEffect(() => {
    
    window.scrollTo(0, 0);
   
 
}, []);
  const Topics = [
    {
      topic: "Vernier Calliper",
      details: `A vernier scale is a visual aid to take an accurate measurement reading between two graduation markings on a linear scale by using mechanical interpolation, thereby increasing resolution and reducing measurement uncertainty by using vernier acuity to reduce human estimation error.`,
      formula: "Least Count = Smallest Reading on main scale / Number of readings on vernier scale, Length  = MSR + (VSR x Least Count)",
      process:
        "To find the least count we have to know the smallest reading on the main scale reading and the number of readings on vernier scale. By dividing the first term with the second we can find the least count. For the reading of the vernier calliper or the length, we should have the MSR which is main scale reading , VSR which is vernier scale reading and the least count. Then we can use the formula MSR + (VSR x Least Count) to find the Length.",
      siunit: "(mm)",
      dimension: "[L¹]",
    },
    {
      topic: "Screw Gauge",
      details: `A screw Gauge is a device incorporating a calibrated screw widely used for accurate measurement of components in mechanical engineering. It is mostly used to measure the diameters of thin objects with good accuracy and precision.`,
      formula: "Pitch = Distance Travelled by screw / Number of Rotations,LeastCount = Pitch / Number of Divisions on circular scale, Reading = MSR + (CSR x Least Count) ",
      process: `Pitch of a screw gauge is the distance it moves in one rotation. So to calculate the pitch we should know the Distance travelled by the Screw and the number of rotations. By dividing the first term with the second we get the value of Pitch. The least count is the smallest distance a screw gauge can measure. Least count is calculated by dividing the pitch by the number of rotations on the circular scale. The reading of the screw gauge can be known by the formula: MSR + (CSR x Least Count). MSR is the main scale reading, CSR is the Circular scaler reading.`,
      siunit: "(mm)",
      dimension: "[L¹]",
    },
    {
      topic: "Young's Modulus",
      details: `Young’s Modulus of Elasticity is defined as the ratio of normal stress to the longitudinal strain within the elastic limit.`,
      formula: "Y = Normal Stress / longitudinal Strain, Y = (F x ΔL)/(L x A)",
      process: `The Young's Modulus can be found using two formulas, First is the ratio of normal stress to the Longitudinal Strain within the elastic limit. The second formula is the ratio of force times the change in length to the area of the cross section times the length.`,
      siunit: "(Pa)",
      dimension: "[ML⁻¹T⁻²]",
    },
    {
      topic: "Bulk Modulus",
      details: `It is defined as the ratio of volumetric stress to the volumetric strain within the elastic limit.`,
      formula: "Y = Volumetric Stress / Volumetric Strain, Y = (F x ΔV)/(V x A)",
      process: `The Bulk Modulus can be found using two formulas, First is the ratio of Volumetric stress to the Volumetric Strain. The second formula is the ratio of force times the change in volume to the area of the cross section times the volume.`,
      siunit: "Unitless",
      dimension: "[ML⁻¹T⁻²]",
    },
    {
      topic: "Force Constant of Wire",
      details: `Force required to produce unit elongation in a wire is called force constant of a material of wire. It is denoted by k.`,
      formula: "K = (Y x A) / L",
      process: `To calculate the force constant of a wire, we need to have the Young's modulus of the wire and the area of cross-section and the length of the wire. Then by putting these values in the formula K=(Y X A)/L, we can obtain the force constant of the wire.`,
      dimension: "Dimensionless",
    },
    {
      topic: "Thermal Expansion",
      details: `Force required to produce unit elongation in a wire is called force constant of a material of wire. It is denoted by k.`,
      formula: "K = (Y x A) / L",
      process: `To calculate the force constant of a wire, we need to have the Young's modulus of the wire and the area of cross-section and the length of the wire. Then by putting these values in the formula K=(Y X A)/L, we can obtain the force constant of the wire.`,
      siunit: "Unitless",
      dimension: "Dimensionless",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Electromagnetism | physics | Tech N Science</title>
        <meta
          name="description"
          content="Explore the Statistical Mechanics section and try out the calculators."
        />
        <meta
          name="keywords"
          content="Statistical Mechanics, calculator, physics, Tech n science, technscience, tech and science"
        />
      </Helmet>
      <div className="mech__main">
        <div className="mech__header">
          <h1>Statistical Mechanics-Topics</h1>
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
                      to={`/statistical/calc/${data.topic}`}
                      variant="outline-dark"
                    >
                      {" "}
                      {data.topic}
                    </Link>
                  ) : (
                    <Link
                      className="btn"
                      to={`/statistical/calc/${data.topic}`}
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
