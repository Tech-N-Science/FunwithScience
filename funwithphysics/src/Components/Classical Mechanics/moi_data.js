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
    details: `A quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.`,
    formula: "M.O.I = 1/2 × Mass × Radius² = 1/2 × M × R²",
    process:
      "Basically, for any rotating object, the moment of inertia can be calculated by taking the distance of each particle from the axis of rotation (r in the equation), squaring that value (that's the r² term), and multiplying it times the mass of that particle.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Ring",
    image: ring,
    details: `A quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.`,
    formula: "M.O.I = Mass × Radius² =  M × R²",
    process:
      "Basically, for any rotating object, the moment of inertia can be calculated by taking the distance of each particle from the axis of rotation (r in the equation), squaring that value (that's the r² term), and multiplying it times the mass of that particle.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Hollow Cylinder",
    image: hollowCylinder,
    details: `A quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.`,
    formula: "M.O.I = Mass × Radius² = M × R²",
    process:
      "Basically, for any rotating object, the moment of inertia can be calculated by taking the distance of each particle from the axis of rotation (r in the equation), squaring that value (that's the r² term), and multiplying it times the mass of that particle.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Solid Cylinder",
    image: solidCylinder,
    details: `A quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.`,
    formula: "M.O.I = 1/2 × Mass × Radius² = 1/2 × M × R²",
    process:
      "Basically, for any rotating object, the moment of inertia can be calculated by taking the distance of each particle from the axis of rotation (r in the equation), squaring that value (that's the r² term), and multiplying it times the mass of that particle.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Rectangular Plate",
    image: rectangularPlate,
    details: `A quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.`,
    formula: "M.O.I=1/12×Mass×(Length²+Width²)=1/12×m×(a²+b²)",
    process:
      "Basically, for any rotating object, the moment of inertia can be calculated by taking the distance of each particle from the axis of rotation (r in the equation), squaring that value (that's the r² term), and multiplying it times the mass of that particle.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Solid Sphere",
    image: solidSphere,
    details: `A quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.`,
    formula: "M.O.I = 2/5 × Mass × Radius² = 2/5 × M × R²",
    process:
      "Basically, for any rotating object, the moment of inertia can be calculated by taking the distance of each particle from the axis of rotation (r in the equation), squaring that value (that's the r² term), and multiplying it times the mass of that particle.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Rod",
    image: rod,
    details: `A quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.`,
    formula: "M.O.I = 1/2 × Mass × Radius² = 1/2 × M × R²",
    process:
      "Basically, for any rotating object, the moment of inertia can be calculated by taking the distance of each particle from the axis of rotation (r in the equation), squaring that value (that's the r² term), and multiplying it times the mass of that particle.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
  {
    topic: "Spherical Shell",
    image: sphericalShell,
    details: `A quantity expressing a body's tendency to resist angular acceleration, which is the sum of the products of the mass of each particle in the body with the square of its distance from the axis of rotation.`,
    formula: "M.O.I = 2/3 × Mass × Radius² = 2/3 × M × R²",
    process:
      "Basically, for any rotating object, the moment of inertia can be calculated by taking the distance of each particle from the axis of rotation (r in the equation), squaring that value (that's the r² term), and multiplying it times the mass of that particle.",
    siunit: "kilogram-metre square",
    dimension: "M L²",
  },
];

export default Topics;
