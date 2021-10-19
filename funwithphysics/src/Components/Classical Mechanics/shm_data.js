import waves from '../../Images/Classical_mechanics/shm/waves.jpg';
import oscillation from '../../Images/Classical_mechanics/shm/oscillation.png';

export {
    waves,
    oscillation
}

const Topics = [
    {
        topic: "Waves",
        image: waves,
        details: `Waves can be described as a dynamic disturbance of one or more than one quantities, which propagates through a medium.`,
        formula: "λ = v/f",
        process: "λ is the wavelength here, v is the wave velocity, f is the frequency of the wave length.",
        siunit: "metre",
        dimension: "L"
    },
    {
        topic: "Oscillation",
        image: oscillation,
        details: `
            Oscillation is a periodic motion, it's known as the repetitive variation of a quantity in magnitude or position.
            for example: a moving spring-mass system or a pendulum. 
        `,
        formula: "x = A sin(ωt + Φ) || T=2π(l/g)^1/2 || T=2π(m/k)^1/2",
        process: "The first formula is a general formula, for calculating the displacement for a simple harmonic motion (here A is the amplitude and (ωt + Φ) is the phase, Φ being the initial phase), second one is for the simple pendulum (l = length of the pendulum). Third one is for a spring-mass system where, m is mass and k is the spring constant of the spring.",
        siunit: "m || sec || sec",
        dimension: "L || T || T"
    },
]

export default Topics
