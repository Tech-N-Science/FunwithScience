import ktg from "../../Images/Thermodynamics/KTG.png";

export { ktg };

const Topics = [
  {
    topic: "Efficiency",
    details: "Any heat engine's thermal efficiency (th) is a dimensionless performance measure of a device that uses thermal energy, such as an internal combustion engine, boiler, or furnace, and can be defined as the ratio of work done (W) to heat input at the highest temperature (QH).", 
    formula:"ηth=W/QH",
    process:" 'ηth' is the efficiency and to calculate it put the value of work (W) and the heat input at he heigh temperatue(QH).",
    siunit:"NA",
    dimension:"NA"
    
  },
  {
    topic: "First law",
    details: "The first law of thermodynamics states that the change in internal energy (ΔU) of the thermodynamics system is equal to the difference between the amount of heat (Q) applied to the system and the worked done by the system (W) due to this.",
    formula: "ΔU = Q − W",
    process:"Basically this is used to find the work done by the thermodynamics system (w) for which we need to be know change in energy (ΔU) after applied the some amount of heat (Q), by putting these values in formula we can easily find any of these.",
    siunit :"joule",
    dimension:"[M L² / T²]"
  },
  {
    topic: "Kinetic Theory of Gases",
    image: ktg,
    details: `According to the Kinetic Theory of Gases, gaseous particles are constantly moving and collide in completely elastic collisions. In a collection of gas particles, the average kinetic energy is directly proportional to absolute temperature.

    According to this theory, the gas molecule is composed of a huge number of tiny molecules compared to the distances between them. The kinetic theory of gases is necessary for clarifying the process of trapping particles by the diffusion mechanism.`,
    formula: "P.V=n.R.T",
    process:
      "The Kinetic theory of gases is based on the Universal Gas Equation and all quantities related to it are derived from this. The required values can be easily found by punching in the other values in the equation and this calculator can very easily do that.",
    siunit: "Pressure: N/m² , Volume: m³ , moles: mol , Universal Gas Constant: J/K.mol , Temperature: K  ",
    dimension: "Pressure: M¹L⁻¹T⁻², Volume: L³, moles: Mol, Universal Gas Constant: M¹ L² T⁻² K⁻¹, Temperature: K",
  },

  {
    topic: "Second law",
    details: "The concept of entropy as a physical attribute of a thermodynamic system is established by the second law of thermodynamics. Despite following the necessity of energy conservation as specified in the first law of thermodynamics, entropy predicts the direction of spontaneous processes and determines whether they are irreversible or impossible. Second law of thermodynamics states that the change in entropy (dS) is defined as the ratio of the heat transfer (dQ) into the system and the temperature (T).",
    formula: "dS=dQ/T",
    process:"To find the change in entropy we need to know the heat transfer (dQ) and the temperature (T). Here 'dS' is the change in entropy.",
    siunit :"Entropy: joules per kelvin",
    dimension:"Entropy: [M L² K/ T²]"
  },
  

];

export default Topics;
