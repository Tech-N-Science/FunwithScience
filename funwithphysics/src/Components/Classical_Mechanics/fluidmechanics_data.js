const Topics = [
    {
        topic: "Density",
        details: `Density is the measurement of how tightly a material is packed together. A fluid's mass density, often known as density, is defined as the ratio of a fluid's mass to its volume.
                 A fluid's density is defined as its mass per unit volume.`,
        formula: "ρ = m/V",
        process: "In general, liquids are less dense than solids and gases are less dense than liquids. This is due to the fact that solids have densely packed particles, liquids are materials where particles can slide around one another, and gases have particles that are free to move all over the place. Density is denoted by symbol ρ (rho) and the unit of mass density is (kg/m3).",
        siunit: "kg m⁻³",
        dimension: "M L⁻³"
    },
    {
        topic: "Pressure",
        details: `The amount of force delivered at right angles to an object's surface per unit area is known as pressure. For example, A knife distributes the force over its entire cutting edge. Sharper the edge, higher the pressure, and consequently the cutting with a sharp knife is easy. In a blunt knife, the force is distributed over its blunt surface with a larger surface area. Therefore, we need to put more force in order to cut.`,
        formula: "P = F/A",
        process: "Here Pressure(P) is calculated by the Force(F) upon Area(A).",
        siunit: "pascal",
        dimension: "M L⁻¹ T⁻²"
    },
    {
        topic: "Volume flow rate",
        details: `Volume flow rate is the quantity of fluid flowing in the specified time.Accurate flow rate measurement using an appropriate flowmeter is paramount to ensuring fluid control industrial processes run smoothly, safely and cost-effectively.`,
        formula: "Q = AV",
        process: "Here Volume flow rate(Q) is calculated by entering the values of Area(A) and Velocity(V).",
        siunit: "m³/s",
        dimension: "L³ T⁻¹"
    },
    {
        topic: "Continuity equation",
        details: `According to the equation, the volume of liquid flowing into a pipe in a particular interval of time must equal the volume of liquid flowing out of the same pipe in the same amount of time.`,
        formula: "A1 * V1 = A2 * V2",
        process: "Here 'A1' and 'V1' are the Area and Velocity of one side of the pipe respectively through which the liquid enters whereas 'A2' and 'V2' are the Area and Velocity of other side of the pipe respectively through which the liquid flows out.",
        siunit: "Arae: m², Velocity: m/s",
        dimension: "Area: L², Velocity: LT⁻¹"
    },
    {
        topic: "Viscosity",
        details: `The majority of fluids aren't perfect and have varying degrees of resistance to motion. This resistance to fluid motion is akin to the friction that occurs when a solid moves across a surface. This is referred to as viscosity.
        When there is relative motion between liquid layers, this force exists.`,
        formula: "μ = Fy/Au",
        process: "When we take a drop of water and honey on a slanting plane, the water reaches down the plane first than honey because of it low viscosity.Here 'μ' represents viscosity, 'F/A' is the pressure and 'u/y' is rate of deformation.",
        siunit: "pascal-second",
        dimension: "M L⁻¹ T⁻¹"
    },
    {
        topic: "Poiseuille's law",
        details: `Poiseuille's law states that the flow of liquid depends on the following variables such as the length of the tube(L), radius (r), pressure gradient (∆P) and the viscosity of the fluid (μ) in accordance with their relationship.`,
        formula: "Δp = 8μLQ/πR⁴",
        process: "While examining the blood flow through arteries, it is found that high viscosity of blood makes it almost incompressible. It also has application in blood pressure measurement instruments. Here 'Δp' represents difference in pressure, 'μ' represents viscosity,'L' is length of pipe, 'Q' is volumetric flow rate and 'R' is the radius of pipe.",
        siunit: "Pressure: pascal,  Volumetric flow rate: m³/s",
        dimension: "Pressure: ML⁻¹T⁻²,  Volumetric flow rate: L³T⁻¹"
    },
    {
        topic: "Bernoulli's equation",
        details: `According to Bernoulli's equation, the total mechanical energy of the moving fluid remains constant, which comprises the energy associated with fluid pressure, the gravitational potential energy of elevation, and the kinetic energy of fluid motion.`,
        formula: "P₁ + 1/2ρV₁² + ρgh₁ = P₂ + 1/2ρV₂² + ρgh₂",
        process: "It is applied to various measuring devices such as Venturi meter, Nozzle meter, Orifice meter, Pitot tube,etc. Here 'P₁', 'V₁' and 'h₁' are the pressure, velocity and height of one opening of the tube and 'P₂', 'V₂' and 'h₂' are the pressure, velocity and height of other opening of the tube and 'ρ' is density of fluid.",
        siunit: "Pressure: pascal, Velocity: m/s, height: m, density: kg m⁻³",
        dimension: "Pressure: ML⁻¹T⁻²,  Velocity: LT⁻¹, Height: L, density: ML⁻³"
    }
]

export default Topics