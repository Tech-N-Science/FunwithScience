const Topics = [
    {
        topic: "Density",
        details: `Density is the measurement of how tightly a material is packed together.`,
        formula: "ρ = m/V",
        process: "Iron, platinum, and lead are examples of dense materials. Materials that are dense are most likely to ‘feel’ heavy or hard. The opposite of dense is sparse and a few examples of sparse material are glass, bamboo, aluminium, and styrofoam. In general, liquids are less dense than solids and gases are less dense than liquids. This is due to the fact that solids have densely packed particles, liquids are materials where particles can slide around one another, and gases have particles that are free to move all over the place.",
        siunit: "kg m⁻³",
        dimension: "M L⁻³"
    },
    {
        topic: "Pressure",
        details: `Pressure is defined as the force applied perpendicular to the surface of an object per unit area over which that force is distributed.`,
        formula: "P = F/A",
        process: "A knife distributes the force over its entire cutting edge. Sharper the edge, higher the pressure, and consequently the cutting with a sharp knife is easy. In a blunt knife, the force is distributed over its blunt surface with a larger surface area. Therefore, we need to put more force in order to cut.",
        siunit: "pascal",
        dimension: "M L⁻¹ T⁻²"
    },
    {
        topic: "Volume flow rate",
        details: `Volume flow rate is the quantity of fluid flowing in the specified time.`,
        formula: "Q = AV",
        process: "Accurate flow rate measurement using an appropriate flowmeter is paramount to ensuring fluid control industrial processes run smoothly, safely and cost-effectively.",
        siunit: "m³/s",
        dimension: "L³ T⁻¹"
    },
    {
        topic: "Continuity equation",
        details: `The equation states that the volume of liquid that flows into a pipe in a given amount of time must equal the volume of liquid that flows out of a pipe in the same amount of time.`,
        formula: "A1 * V1 = A2 * V2",
        process: "Liquids maintain their volume as they flow in a pipe since they are nearly incompressible.",
        siunit: "m², m/s",
        dimension: "L², LT⁻¹"
    },
    {
        topic: "Viscosity",
        details: `Viscosity is a measure of a fluid’s resistance to flow.`,
        formula: "μ = Fy/Au",
        process: "When we take a drop of water and honey on a slanting plane, the water reaches down the plane first than honey because of it low viscosity.",
        siunit: "pascal-second",
        dimension: "M L⁻¹ T⁻¹"
    },
    {
        topic: "Poiseuille's law",
        details: `Poiseuille's law states that the flow of liquid depends on the following variables such as the length of the tube(L), radius (r), pressure gradient (∆P) and the viscosity of the fluid (μ) in accordance with their relationship.`,
        formula: "Δp = 8μLQ/πR⁴",
        process: "While examining the blood flow through arteries, it is found that high viscosity of blood makes it almost incompressible. It also has application in blood pressure measurement instruments.",
        siunit: "pascal, m³/s",
        dimension: "ML⁻¹T⁻², L³T⁻¹"
    },
    {
        topic: "Bernoulli's equation",
        details: `Bernoulli's equation states that the total mechanical energy of the flowing fluid, comprising the energy associated with fluid pressure, the gravitational potential energy of elevation, and the kinetic energy of fluid motion, remains constant.`,
        formula: "P1 + 1/2ρV1² + ρgh1 = P2 + 1/2ρV2² + ρgh2",
        process: "It is applied to various measuring devices such as Venturi meter, Nozzle meter, Orifice meter, Pitot tube,etc.",
        siunit: "pascal, m/s, m, kg m⁻³, m/s²",
        dimension: "ML−¹T−², LT⁻¹, L, ML⁻³, LT⁻²"
    }
]

export default Topics