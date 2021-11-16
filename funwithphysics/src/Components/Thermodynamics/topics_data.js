import ktg from "../../Images/Thermodynamics/KTG.png";

export { ktg };

const Topics = [
  {
    topic: "Kinetic Theory of Gases",
    image: ktg,
    details: `According to the Kinetic Theory of Gases, gaseous particles are constantly moving and collide in completely elastic collisions. In a collection of gas particles, the average kinetic energy is directly proportional to absolute temperature.

    According to this theory, the gas molecule is composed of a huge number of tiny molecules compared to the distances between them. The kinetic theory of gases is necessary for clarifying the process of trapping particles by the diffusion mechanism.`,
    formula: "P.V=n.R.T",
    process:
      "The Kinetic theory of gases is based on the Universal Gas Equation and all quantities related to it are derived from this. The required values can be easily found by punching in the other values in the equation and this calculator can very easily do that.",
    siunit: "N/m² , m³ , mol , J/K.mol , K  ",
    dimension: "M/L.T², M³, Mol, M.L²/T².K",
  },
  {
    topic: "First law",
    details: "The first law of thermodynamics states that the change in internal energy (ΔU) of the thermodynamics system is equal to the difference between the amount of heat (Q) applied to the system and the worked done by the system (W) due to this",
    formula: "ΔU = Q − W",
    process:"Basically this is used to find the work done by the thermodynamics system (w) for which we need to be know change in energy (ΔU) after applied the some amount of heat (Q), by putting these values in formula we can easily find any of these",
    siunit :"joule",
    dimension:"[M L² / T²]"
  },
  {
    topic: "Second law",
  },
  {
    topic: "Entropy",
  },
  {
    topic: "Energy",
    details:"Using the first law of thermodynamics we can easily find the change in energy",
    formula: "ΔU = Q − W",
    process:"Put the amount of heat applied and the work done by the thermodynamics system",
    siunit :"joule",
    dimension:"[M L² / T²]"
  },
];

export default Topics;
