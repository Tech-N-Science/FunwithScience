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
        formula: "Work = Force × Displacement = F × d",
        process: "When we kick a football, we are exerting an external force called F and due to this force (kick), the ball moves to a certain distance. This disposition of ball from position A to B is known as displacement (d). This work is said to be done and can be calculated as W = F × d ",
        siunit: "Joule or Newton-Meter",
        dimension: "ML²/T²"
    },
    {
        topic: "Oscillation",
        image: oscillation,
        details: `Power is a physical concept that has several different meanings, depending on the context and the information that is available. We can define power as the rate of doing work. It is the amount of energy consumed per unit time.`,
        formula: "P = W/t",
        process: "As discussed power is the rate of doing work. Therefore, it can be calculated by dividing work done by time. ",
        siunit: "watt",
        dimension: "M L^2 T^-3"
    },
]

export default Topics
