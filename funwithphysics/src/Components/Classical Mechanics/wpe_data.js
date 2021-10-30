import work from '../../Images/Classical_mechanics/work_power_energy/work.jpg';
import power from '../../Images/Classical_mechanics/work_power_energy/power.jpg';
import energy from '../../Images/Classical_mechanics/work_power_energy/Energy.jpg';



export {
    work,
    power,
    energy
}

const Topics = [
    {
        topic: "Work",
        image: work,
        details: `Work is said to be done when a body or object moves with the application of external force. We can define work as an activity involving a movement and force in the direction of the force. For example, a force of 20 newtons (N) pushing an object 3 meters in the same direction of the force will do 60 joules (J) of work .`,
        formula: "Work = Force × Displacement = F × d",
        process: "When we kick a football, we are exerting an external force called F and due to this force (kick), the ball moves to a certain distance. This disposition of ball from position A to B is known as displacement (d). This work is said to be done and can be calculated as W = F × d ",
        siunit: "Joule or Newton-Meter",
        dimension: "ML²/T²"
    },
    {
        topic: "Power",
        image: power,
        details: `Power is a physical concept that has several different meanings, depending on the context and the information that is available. We can define power as the rate of doing work. It is the amount of energy consumed per unit time.`,
        formula: "P = W/t",
        process: "As discussed power is the rate of doing work. Therefore, it can be calculated by dividing work done by time. ",
        siunit: "watt",
        dimension: "M L^2 T^-3"
    },
    {
        topic: "Energy",
        image: energy,
        details: [
            `In simple words, Energy is known as the capacity of doing work, it could exist in various forms, like heat energy, kinetic energy, thermal energy, electrical energy, gravitational energy, electromagnetic energy etc.`, <br />,
            "All these forms of Energy, are categories as Kinetic energy and Potential Energy."
        ],
        formula: [
            "K.E = 1/2 x m x v^2", <span > &nbsp; &nbsp; </span>,
            "P.E = m x g x h",
        ],
        process: [
            "To summerize in a single line,", <br />, <b>Energy = Power x Time</b >, <br />,
            "here, K.E is kinetic energy, P.E is potential energy, 'm' is mass, 'v' is velocity and 'h' is height"
        ],
        siunit: "joule",
        dimension: "M L^2 T^-2"
    }


]

export default Topics
