import momentum from '../../Images/Classical_mechanics/momentum.jpg';
import friction from '../../Images/Classical_mechanics/friction.jpg';

export {
    momentum
}

const Topics = [
    {
        topic: "Momentum",
        image: momentum,
        details: `Momentum is a vector quantity, defined as the product of the mass of a particle and its velocity. From Isaac Newton’s second law of motion we can see that the rate of change of momentum is equal to the force acting on the particle.
        

        From Newton’s second law it follows that, if a constant force acts on a particle for a given time, the product of force and the time interval is equal to the change in the momentum. Conversely, the momentum of a particle is a measurement of the time, required for a constant force to bring it to rest.`,
        formula: "p = mv",
        process: "Here, the linear momentum is defined by p, m is the mass of the system and v is its velocity. We can calculate the momentum (p) by multiplying Mass of the particle (m) with the velocity of the particle (v). The SI unit for momentum is kg · m/s."
    },
    {
        topic: "Force",
    },
    {
        topic: "Friction",
        image: friction,
        details: `Friction is a force that resists the sliding or rolling of one solid object over another.
        Surface of an object is microscopically irreguler, thats why, when any two objects in contact try to be in motion relatively with the another one, a force apears at their contact point resisting the motion, this force is opposite to the direction of motion.`,
        formula: "F = μN",
        process: `F, is the frictional force, N is the normal force ; this normal force is calculated by multiplying mass (m), the gravitational acceleration (g) and the cosine of the angle by which the surface is inclined to (θ). 
        
        μ is the coefficient of friction, when the two objects are in relative motion, we call it coefficient of kinetic friction and when they are static, it is called the static friction coefficient.`
    },
    {
        topic: "Collision",
    },
    {
        topic: "Circular Motion",
    },
    {
        topic: "Torque",
    },
    {
        topic: "Error Measurements",
    },
    {
        topic: "Gravitation",
    },
    {
        topic: "Work Power Energy",
    },
    {
        topic: "Kinematics",
    }
]

export default Topics