import disc from "../../Images/Classical_mechanics/moment of inertia/disc.png";
import ring from "../../Images/Classical_mechanics/moment of inertia/ring.png";
import hollowCylinder from "../../Images/Classical_mechanics/moment of inertia/hollowCylinder.png";
import solidCylinder from "../../Images/Classical_mechanics/moment of inertia/solidCylinder.jpg";
import rectangularPlate from "../../Images/Classical_mechanics/moment of inertia/rectangularPlate.jpg";
import solidSphere from "../../Images/Classical_mechanics/moment of inertia/solidSphere.jpg";
import rod from "../../Images/Classical_mechanics/moment of inertia/rod.jpg";
import sphericalShell from "../../Images/Classical_mechanics/moment of inertia/sphericalShell.png";

export {
  disc,
  ring,
  hollowCylinder,
  solidCylinder,
  solidSphere,
  rectangularPlate,
  rod,
};
const Topics = [
  {
    topic: "Disc",
    image: disc,
    details: `The moment of inertia of a disc is calculated about an axis which is perpendicular to it and through its center. We assume that the disc is planar.`,
    formula: "M.O.I = 1/2 × Mass × Radius² = 1/2 × M × R²",
    process:
      "Here the moment of inertia of a solid disc is given by the formula 1/2MR². Here 'M' denotes the mass of disc and 'R' is the radius of disc or the distance from center to circumference.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Ring",
    image: ring,
    details: `The moment of inertia of a circular ring is calculated about an axis perpendicular to its plane passing through its centre.`,
    formula: "M.O.I = Mass × Radius² =  M × R²",
    process:
      "Here the moment of inertia of a ring is given by the formula MR². Here 'M' denotes the mass of disc and 'R' is the radius of disc or the distance from center to circumference.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Hollow Cylinder",
    image: hollowCylinder,
    details: `Moment of inertia of a hollow cylinder is calculated using the axis passing through the centre of the cylinder with an internal radius r1 and external radius r2 and mass M. If the hollow cylinder has a thin wall then the formula will be same as that of a ring.`,
    formula:[ "I = 1/2 x Mass ×(External Radius² + Internal radius²)",
    <br/>,
    " = 1/2 x M × (r2² + r1²)",
         ],
    process:
      "Here the moment of inertia of a hollow cylinder is given by the formula 1/2M(r2² + r1²). Here 'M' denotes the mass of disc and 'r1' and 'r2' are  internal and external radius respectively. If the hollow cylinder has a thin wall then the formula will be same as that of a ring i.e, MR² because the axis goes through the centre of the cylinder",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Solid Cylinder",
    image: solidCylinder,
    details: `Moment of Inertia of a solid cylinder is calculated about its center with mass 'M' and Radius 'R'.`,
    formula: "M.O.I = 1/2 × Mass × Radius² = 1/2 × M × R²",
    process:
      "Here the moment of inertia of solid cylinder is given by the formula 1/2MR². Here 'M' is the mass of the solid cylinder and 'R' is radius of cylinder.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Rectangular Plate",
    image: rectangularPlate,
    details: `Moment of inertia of a rectangular plate is calculated using the axis which passes through its length(x-axis) and another axis which passes through its breadth(y-axis).`,
    formula: "I=1/12×Mass×(Length²+Width²)=1/12 × m × (a²+b²)",
    process:
      "Here the moment of inertia of rectangular plate is given by the formula 1/12m(a²+b²). Where 'm' is the mass of plate, 'a' is the length and 'b' is breadth of the plate. ",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Solid Sphere",
    image: solidSphere,
    details: `The moment of inertia of a solid sphere is calculated about its central axis. The moment of inertia can also be calculated about its axis on the surface whose formula is (7/5)MR². `,
    formula: "M.O.I = 2/5 × Mass × Radius² = 2/5 × M × R²",
    process:
      "Here the moment of inertia of solid sphere is given by the formula 2/5MR². Where 'M' is the mass of plateand 'R' is the radius of solid sphere.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Rod",
    image: rod,
    details: `The moment of inertia of the rod can be calculated about the axis passing through its center. Moment of inertia can aslo be calculated about the axis passing through its end whose formula is (1/3)ML². `,
    formula: "M.O.I = 1/12 × Mass × Length² = 1/12 × M × L²",
    process:
      "Here the moment of inertia of rod is given by the formula 1/12ML². Where 'M' is the mass of plate and 'L' is length of the rod.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Spherical Shell",
    image: sphericalShell,
    details: `The moment of inertia of the Spherical Shell can be calculated about the axis passing through its center.`,
    formula: "M.O.I = 2/3 × Mass × Radius² = 2/3 × M × R²",
    process:
      "Here the moment of inertia of spherical shell is given by the formula 2/3MR². Where 'M' is the mass of shell and 'R' is radius of the shell.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
];

export default Topics;
