const Topics = [
    {
        topic: "Torque",
        details: `Torque is necessary in rotational motion to create an object's angular acceleration. The amount of torque necessary to cause an angular acceleration is determined by the distribution of the object's mass. The distribution is described by the moment of inertia. It may be calculated by integrating the masses of all elements of the object and their distances from the centre of rotation, but the moments of inertia for typical forms can also be obtained.`,
        formula: "τ=Iα",
        process: "The torque on a given axis is the product of the moment of inertia and the angular acceleration. The units are Newton-meters (N∙m). Here 'τ' denotes torque, 'I' denotes moment of inertia and 'α' denotes angular acceleration.",
        siunit: " Newton-Meter",
        dimension: "ML²/T²"
    },
    {
        topic: "Work",
        details: `The total work done on a rigid body is the sum of the torques integrated over the angle of rotation (angular displacement). 
        dW = ( ∑ᵢτᵢ ) dθ`,
        formula: "W = τ x θ",
        process: "The rotational work done on a rigid body is dot product of torque and angle of rotation. Here 'W' denotes rotational work done by rigid body, 'τ' represents the torque and  'θ' represents angle of rotation(angular dispalcement).",
        siunit: "joule",
        dimension: "M L²/T²"
    },
    {
        topic: "Power",
        details: `The torque multiplied by the angular velocity is the power given to a system revolving about a fixed axis. 
        As we know Power is work done upon time, so angular work done τθ is derivated with respect to time.`,
        formula: "P = τ x ω",
        process: "The rotational power is dot product of torque and angular velocity. Here 'P' denotes rotational power of rigid body, 'τ' represents the torque and  'ω' represents angular velocity.",
        siunit: "watt",
        dimension: "M L² T⁻³"
    },
    {
        topic: "Kinetic Energy",
        details: [
            `Things that roll without sliding have some translational kinetic energy and the rest rotational kinetic energy. The ratio is determined by the rolling object's moment of inertia.`, <br />,
        ],
        formula: [
            "K.E. = 0.5 x I x ω²"
        ],
        process: [
            "The Kinetic energy of a rolling body is defined as 1/2Iω²",
            "where I is the moment of inertia around the axis of rotation and ω is the angular velocity",<br/>,
            "The kinetic energy of a rigid body rotating around a fixed axis is calculated by adding the kinetic energy of each particle in the rigid body."
        ],
        siunit: "joule",
        dimension: "M L² T⁻²"
    }


]

export default Topics