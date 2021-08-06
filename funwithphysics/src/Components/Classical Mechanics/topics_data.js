import momentum from '../../Images/Classical_mechanics/momentum.jpg';
import friction from '../../Images/Classical_mechanics/friction.jpg';
import gravitation from '../../Images/Classical_mechanics/gravitation.jpg';
import force from '../../Images/Classical_mechanics/force.jpg';

import error_measurement from '../../Images/Classical_mechanics/error.jpg';

import torque from '../../Images/Classical_mechanics/torque.jpg'


export {
    momentum,
    force,
    friction,
    gravitation,
    error_measurement
}

const Topics = [
    {
        topic: "Momentum",
        image: momentum,
        details: `Momentum is a vector quantity, defined as the product of the mass of a particle and its velocity. From Isaac Newton’s second law of motion we can see that the rate of change of momentum is equal to the force acting on the particle.
        

        From Newton’s second law it follows that, if a constant force acts on a particle for a given time, the product of force and the time interval is equal to the change in the momentum. Conversely, the momentum of a particle is a measurement of the time, required for a constant force to bring it to rest.`,
        formula: "p = mv",
        process: "Here, the linear momentum is defined by p, m is the mass of the system and v is its velocity. We can calculate the momentum (p) by multiplying Mass of the particle (m) with the velocity of the particle (v).",
        siunit: "kg · m/s",
        dimension: "ML/T"
    },
    {
        topic: "Force",
        image: force,
        details: ` 
        Force is an external agent capable of changing the state of rest or motion of a particular body. It has a magnitude and a direction. The direction towards which the force is applied is known as the direction of the force and the application of force is the point where force is applied. 
        The Force can be measured using a spring balance.                                             
        Force has different effects and here are some of them, 
        Force can make a body that is at rest to move.
        It can stop a moving body or slow it down.
        It can accelerate the speed of a moving body.
        It can also change the direction of a moving body along with its shape and size.

        `,
        formula: "f = ma",
        process: `The force (F) required to move an object of mass (m) with an acceleration (a) is given by the formula F = m x a. So, force = mass multiplied by acceleration.`,
        siunit: "N or Kg.m.s²",
        dimension: "ML/T²"
    },
    {
        topic: "Friction",
        image: friction,
        details: `Friction is a force that resists the sliding or rolling of one solid object over another.
        Surface of an object is microscopically irreguler, thats why, when any two objects in contact try to be in motion relatively with the another one, a force apears at their contact point resisting the motion, this force is opposite to the direction of motion.`,
        formula: "F = μN",
        process: `F, is the frictional force, N is the normal force. The the friction is calculated by F = μN.
        
        μ is the coefficient of friction, when the two objects are in relative motion, we call it coefficient of kinetic friction and when they are static, it is called the static friction coefficient.`,
        siunit: "kg · m/s",
        dimension: "ML/T²"
    },
    {
        topic: "Gravitation",
        image: gravitation,
        details: "Gravity also termed as gravitation, is a force that occurs among all material objects in the universe. For any two objects or units having non-zero mass, the force of gravity has a tendency to attract them toward each other. The Universal Law of Gravitation says that: Every object in the universe has the property to attract every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between them ",

        formula: "F = GmM(d^-2)",
        process: "The Force of Gravitation F , between two bodies / system of mass m and M , where d is the radius or distance between the two bodies and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10 ^ -11 Newton - meter ^ 2 · kg ^ -2 ) , is equals to product of ( G , m and M ) divided by the ( d ^ 2 ) . SI unit for gravitation force is Newton . SI unit for universal gravitational constant is Newton - meter ^ 2 · Kg ^ -2 ",
        siunit: "G = Nm²/Kg²",
        dimension: "G = M^-1 L^3 T^-2"
    },
    {
        topic: "Error Measurements",
        image: error_measurement,
        details: "Any measurement that you make is just an approximation, 100% accuracy is not possible. If you measure the same object two different times, the two measurements may not be exactly the same.  The difference between the two measurements is called a variation in the measurements. This variation introduces an unwanted but unavoidable uncertainty in our measurement. This uncertainty is called the Errors in measurement. This ‘error’ should not be confused with a ‘mistake’. Error, unlike mistake, does not mean that you got the wrong answer. It just means you didn’t get as close to the true value as possible. The errors in measurement are a mathematical way to show the uncertainty in the measurement.  It is the difference between the result of the measurement and the true value of what you were measuring. Absolute , Relative and Percentage error are three types of error with which every experimental scientist should be familiar.",

        formula: ["E (Abs) = | X (measured) - X (actual) | ", <br/>,
                  "E(Rel) = E(Abs) / X(actual) & ",
                  "E(Per) = E(Rel) * 100% "],
        process: "Absolute error in measurement refers to the actual amount of error in the measurement. The absolute error of the measurement shows how large the error actually is. \
                  Relative error represents the ratio of the absolute error of the measurement to the accepted measurement. This way we can determine the magnitude of the absolute error in terms of the actual size of the measurement. \
                  Errors in measurement may also be expressed in terms of percentage. This is similar to relative error except that the error here is converted to a percent value. The percentage error is found by multiplying the relative error by 100%.",
        siunit: "NA",
        dimension: "NA"
    },
    {
        topic: "Torque",
        image: torque,
        details: `Torque is the measure of the force that can cause an object to rotate about an axis. Force is what causes an object to accelerate in linear kinematics. Similarly, torque is what causes an angular acceleration. Hence, torque can be defined as the rotational equivalent of linear force. The point where the object rotates is called the axis of rotation. In physics, torque is simply the tendency of a force to turn or twist. Different terminologies such as moment or moment of force are interchangeably used to describe torque.`,
        formula: "T = F.r. sinθ",
        process: `A simple way to calculate the magnitude of the torque is to first determine the lever arm and then multiply it times the applied force.

        Now, from the above observation, we conclude that torque produced depends on the magnitude of the force and the perpendicular distance between the point about which torque is calculated and the point of application of force.`,
        siunit: "N.m",
        dimension: "ML²/T²"
    },
    {
        topic: "Frictional Force on Inclined Plane",
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
        topic: "Work Power Energy",
    },
    {
        topic: "Kinematics",
    }
]

export default Topics
