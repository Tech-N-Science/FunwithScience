const Topics = [
    {
        topic: "Waves",
        details: `Waves can be described as a dynamic disturbance of one or more than one quantities, which propagates through a medium.`,
        formula: "λ = v/f",
        process: "λ is the wavelength here, v is the wave velocity, f is the frequency of the wave length.",
        siunit: "Wave Length: m, Frequency: 1/s, Time: s, velocity: m/s",
        dimension: "Wave Length: L, Frequency: 1/T, Time: T, velocity: L/T"
    },
    {
        topic: "Oscillation",
        details: `
            Oscillation is a periodic motion, it's known as the repetitive variation of a quantity in magnitude or position.
            for example: a moving spring-mass system or a pendulum. 
        `,
        formula: ["x = A sin(ωt + Φ)", <br/> , "T=2π√(l/g)" , <br/> , "T=2π√(m/k)" ],
        process: "The first formula is a general formula, for calculating the displacement for a simple harmonic motion (here A is the amplitude and (ωt + Φ) is the phase, Φ being the initial phase), second one is for the simple pendulum (l = length of the pendulum). Third one is for a spring-mass system where, m is mass and k is the spring constant of the spring.",
        siunit: "Wave Length: m, Time period: s",
        dimension: "Wave Length: L, Time period: T"
    },
]

export default Topics
