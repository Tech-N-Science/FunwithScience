import React, { useState } from "react";
import "./Calculator.css";
import { Form, Card, Button, Row, Col ,Modal} from "react-bootstrap";
import "../classicalMechanics.css";
import { Link } from "react-router-dom";
import Solution from "../../Solution/Solution";
import { Helmet } from "react-helmet";
import {SI} from '../../Solution/allSIUnits'
import Navbar from "../../Navbar/Navbar";

function Calculator({ match }) {
  const Topics = [
    {
      topic: "Circular Motion",
      details:
        "Uniform circular motion means that the magnitude of the velocity will always be constant. But the direction of the velocity will change at a constant rate from every point. It means that the path of the object will form a circle. And the object will complete the repeated trips around the path in the same amount of time every time.",
      formula: ["v=( 2.π.r )/T", <br />, " ω=2π/T", <br />, "aᵣₐ=v²/r"],
      process:
        "For an object to move along a curved circular path, the direction of its velocity must change. It is because at each point on the circular path tangent will give the direction. A change in velocity will cause the acceleration which will not be in the same direction as the velocity. Therefore for an object to move along a circular path, there must be an acceleration that will always be perpendicular to the velocity.",
      siunit:
        "Circumference: m ,  Velocity: m/s ,  Time: s ,        Radial Acc: m/s² , Radial Acc: rad/s",
      dimension:
        "Circumference: L , Velocity: L/T , Time: T, Radial Acc: L/T² , Radial Acc: 1/T",
    },
    {
      topic: "Collision",
      details: [
        "Collision is known as the sudden but short interaction of two or more than two bodies to exert a mutual influence, usually by exchanging energy. For example, two biliard balls, a hammer and a nail etc. ",
        <br />,
        <br />,
        "There are three types of collision, Perfectly elastic, Partially elastic and Perfectly inelastic.",
        <br />,

        "In perfectly elastic collision, two bodies bounces off without any loss in kinetic energy or momentum, for example: a hard cricket ball hitting a hard surface. ",
        <br />,

        "In partially elastic collision kinetic energy is not conserved but momentum is, for example: a soft tennis ball hitting a hard surface.",

        " And in perfectly inelastic collision, the bodies stick together and moves at a common speed, as the momentum is conserved but kinetic energy is lost, for example: when a ball of clay is dropped.",
      ],

      formula: "m1u1 + m2u2 = m1v1 + m2v2",
      process:
        "Use the first object's mass(m1), initial velocity(u1), final velocity(v1) and second object's mass(m1), initial velocity(u2) to find out the unknown velocity of the second object(v2).",
      siunit: "Mass: kg, Velocity: m/s",
      dimension: "Mass: M, Velocity: L/T",
    },
    {
      topic: "Error Measurements",
      details:
        "Any measurement that you make is just an approximation, 100% accuracy is not possible. If you measure the same object two different times, the two measurements may not be exactly the same.  The difference between the two measurements is called a variation in the measurements. This variation introduces an unwanted but unavoidable uncertainty in our measurement. This uncertainty is called the Errors in measurement. This ‘error’ should not be confused with a ‘mistake’. Error, unlike mistake, does not mean that you got the wrong answer. It just means you didn’t get as close to the true value as possible. The errors in measurement are a mathematical way to show the uncertainty in the measurement.  It is the difference between the result of the measurement and the true value of what you were measuring. Absolute , Relative and Percentage error are three types of error with which every experimental scientist should be familiar.",

      formula: [
        "E (Abs) = | X (measured) - X (actual) | ",
        <br />,
        "E(Rel) = E(Abs) / X(actual)",
        <br />,
        "E(Per) = E(Rel) * 100% ",
      ],
      process:
        "Absolute error in measurement refers to the actual amount of error in the measurement. " +
        "The absolute error of the measurement shows how large the error actually is. Relative error represents the ratio of the absolute error of the measurement to the accepted measurement. " +
        "This way we can determine the magnitude of the absolute error in terms of the actual size of the measurement. Errors in measurement may also be expressed in terms of percentage. This is similar to relative error except that the error here is converted to a percent value. The percentage error is found by multiplying the relative error by 100%.",
      siunit: "NA",
      dimension: "NA",
    },
    {
      topic: "Fluid Mechanics",
      details: "...",
    },
    {
      topic: "Force",
      details: ` 
          Force is an external agent that has the ability to change the state of rest or motion of a certain body. It has a magnitude as well as a direction.
          The Force can be measured using a spring balance.                                             
          Force has different effects and here are some of them, 
          Force can make a body that is at rest to move.
          It can stop a moving body or slow it down.
          It can accelerate the speed of a moving body.
          It can also change the direction of a moving body along with its shape and size.
  
          `,
      formula: "F = ma",
      process: `The force (F) required to move an object of mass (m) with an acceleration (a) is given by the formula F = m x a. So, force = mass multiplied by acceleration.`,
      siunit: "Force: N or kg.m/s²",
      dimension: "Force: ML/T²",
    },
    {
      topic: "Friction",
      details: `Friction is a force that resists the sliding or rolling of one solid object over another.
Surface of an object is microscopically irreguler, thats why, when any two objects in contact try to be in motion relatively with the another one, a force apears at their contact point resisting the motion, this force is opposite to the direction of motion.`,
      formula: "F = μN",
      process: `F, is the frictional force, N is the normal force. The the friction is calculated by F = μN.
  
  μ is the coefficient of friction, when the two objects are in relative motion, we call it coefficient of kinetic friction and when they are static, it is called the static friction coefficient.`,
      siunit: "Friction: kg · m/s²",
      dimension: "Friction: ML/T²",
    },
    {
      topic: "Gravitation",
      details: "....",
    },
    {
      topic: "Kinematics",
      details: `Kinematics is a subject of physics evolved from classical mechanics that explains the motion of points, bodies (objects), and systems of bodies (groups of objects) without taking into account the forces that cause them to move. Kinematics is an area of mathematics that is sometimes referred to as "geometry of motion." A kinematics issue begins by specifying the geometry of the system and stating the beginning conditions of any known values of location, velocity, and/or acceleration of points inside the system. The location, velocity, and acceleration of any unknown portions of the system may then be calculated using geometry arguments. Kinetics, not kinematics, is the study of how forces operate on bodies.`,
      formula: [
        "v=v₀​+a.t",
        <br />,
        "Δx=v​₀.t+1/2.​a.t²",
        <br />,
        "(v)²=(v₀)²​+2.a.Δx",
      ],
      process: `In kinematics there are three 3 fundamental equations of motion as mentioned above. Each equation consists of different physical quantities and can be used to determine the missing value if all other values are already known. Some scenarios may need the utilzation of more than one equations. These can be used to solve real life problems like vehicular motion, projectile motion, falling motion and can also be used to derive more complex equation often used in higher Physics.Time is always taken as absolute ie. +tive. Here 'v' is final velocity, 'v₀' is initial velocity, ' a' is acceleration and 't' is time.`,
      siunit:
        "Distance/Displacement: m , Velocity: m/s , Time: s , Accelearation: m/s²",
      dimension:
        "Distance/Displacement: L ,Velocity: L/T , Time: T , Accelearation: L/T²",
    },
    {
      topic: "Momentum",
      details: `Momentum is a vector quantity, defined as the product of the mass of a particle and its velocity. From Isaac Newton’s second law of motion we can see that the rate of change of momentum is equal to the force acting on the particle.
          
  
          From Newton’s second law it follows that, if a constant force acts on a particle for a given time, the product of force and the time interval is equal to the change in the momentum. Conversely, the momentum of a particle is a measurement of the time, required for a constant force to bring it to rest.`,
      formula: "p = mv",
      process:
        "Here, the linear momentum is defined by p, m is the mass of the system and v is its velocity. We can calculate the momentum (p) by multiplying Mass of the particle (m) with the velocity of the particle (v).",
      siunit: "Momentum: kg · m/s",
      dimension: "Momentum: ML/T",
    },
    {
      topic: "Moment of Inertia",
      details: "...",
    },
    {
      topic: "Projectile Motion",
      details: `Projectile Motion  can be
      described by the
      horizontal and vertical
      components of motion.
      i.e, If a person throws a ball from any point with any speed (u) with any angle θ (theta), and due to the gravity (g) a downward force is applied on it which is constant (9.8m/s²) then the motion of the ball is called projectile motion, and the max height attained by the ball is denoted by (h). The total distance covered by the ball from initial point to final point is called the Range(R).
       `,
      formula: [
        "Range=u² * sin2θ/g",
        <br />,
        "Time= 2u sin θ/g ",
        <br />,
        " Max-Height=u² sin²θ/2g",
      ],
      process: [
        "Range: To find the range or the distance covered by the object, we need to know the initial speed which is (u) and the angle by which the object is through out where as the g is constant which is 9.8m/s², put these values in formula for the range & Time: To find the time at which the the ball touch the ground, we also need to know that the initial speed and the angle theeta and g is constant & Max Height: To find the maximum height covered by the object is initial speed and the angle",
      ],
      siunit: ["Range: m", ",  Time: s", ",   Max-Height: m"],
      dimension: ["Range: L", ",  Time: T", ",   Max-Height: L"],
    },
    {
      topic: "Rotational Dynamics",
      details: "....",
    },
    {
      topic: "Simple Harmonic Motion",
      details: "....",
    },
    {
      topic: "Stress and Strain",
      details: [
        <h3>Stress</h3>,
        "In classical mechanics, Stress is a known as a physical quantity that expresses the amount of force, which is experienced by the nearby particles. Stress is calculated as force per unit area.",
        <br />,
        <h3>Strain</h3>,
        "Strain is known as the measurement of the deformation of a body, it's the ratio of the deformed dimension and the initial dimension. ",
      ],
      formula: [" Stress(σ) = F/A", <br />, "Strain = ΔX/X"],
      siunit: "Stress: N/m² (Pa) , Strain: no unit",
      dimension: "Stress: ML⁻¹T⁻², Strain: dimensionless",
      process:
        "  Stress is measured by the force which is applied per unit area, it's denoted with sigma (σ). The strain is a ratio of the original dimensions and the deformed dimensions, as it's a ratio it's dimensionless and has no unit.",
    },
    {
      topic: "Torque",
      details: `Torque is the measure of the force that can cause an object to rotate about an axis. Force is what causes an object to accelerate in linear kinematics. Similarly, torque is what causes an angular acceleration. Hence, torque can be defined as the rotational equivalent of linear force. The point where the object rotates is called the axis of rotation. In physics, torque is simply the tendency of a force to turn or twist. Different terminologies such as moment or moment of force are interchangeably used to describe torque.`,
      formula: "T = F.r. sinθ",
      process: `A simple way to calculate the magnitude of the torque is to first determine the lever arm and then multiply it times the applied force.
  
          Now, from the above observation, we conclude that torque produced depends on the magnitude of the force and the perpendicular distance between the point about which torque is calculated and the point of application of force.`,
      siunit: "N.m",
      dimension: "ML²/T²",
    },
    {
      topic: "Work Power Energy",
      details: "....",
    },
  ];

  // WPE_list
  const WPE_list = [
    {
      topic: "Work",
      details: `Work is said to be done when a body or object moves with the application of external force. We can define work as an activity involving a movement and force in the direction of the force. For example, a force of 20 newtons (N) pushing an object 3 meters in the same direction of the force will do 60 joules (J) of work.`,
      formula: "Work = Force × Displacement = F × d",
      process:
        "When we kick a football, we are exerting an external force called F and due to this force (kick), the ball moves to a certain distance. This disposition of ball from position A to B is known as displacement (d). This work is said to be done and can be calculated as W = F × d ",
      siunit: "Joule",
      dimension: "ML²/T²",
    },
    {
      topic: "Power",
      details: `Power is a physical concept that has several different meanings, depending on the context and the information that is available. We can define power as the rate of doing work. It is the amount of energy consumed per unit time.`,
      formula: "P = W/t",
      process:
        "As discussed power is the rate of doing work. Therefore, it can be calculated by dividing work done by time. ",
      siunit: "watt",
      dimension: "M L² T⁻³",
    },
    {
      topic: "Energy",
      details: [
        `In simple words, Energy is known as the capacity of doing work, it could exist in various forms, like heat energy, kinetic energy, thermal energy, electrical energy, gravitational energy, electromagnetic energy etc.`,
        <br />,
        "All these forms of Energy, are categories as Kinetic energy and Potential Energy.",
      ],
      formula: [
        "K.E = 1/2 x m x v²",
        <span> &nbsp; &nbsp; </span>,
        "P.E = m x g x h",
      ],
      process: [
        "To summerize in a single line,",
        <br />,
        <b>Energy = Power x Time</b>,
        <br />,
        "here, K.E is kinetic energy, P.E is potential energy, 'm' is mass, 'v' is velocity and 'h' is height",
      ],
      siunit: "joule",
      dimension: "M L² T⁻²",
    },
  ];

  // shm_list
  const shm_list = [
    {
      topic: "Waves",
      details: `Waves can be described as a dynamic disturbance of one or more than one quantities, which propagates through a medium.`,
      formula: "λ = v/f",
      process:
        "λ is the wavelength here, v is the wave velocity, f is the frequency of the wave length.",
      siunit: "Wave Length: m, Frequency: 1/s, Time: s, velocity: m/s",
      dimension: "Wave Length: L, Frequency: 1/T, Time: T, velocity: L/T",
    },
    {
      topic: "Oscillation",
      details: `
            Oscillation is a periodic motion, it's known as the repetitive variation of a quantity in magnitude or position.
            for example: a moving spring-mass system or a pendulum. 
        `,
      formula: [
        "x = A sin(ωt + Φ)",
        <br />,
        "T=2π√(l/g)",
        <br />,
        "T=2π√(m/k)",
      ],
      process:
        "The first formula is a general formula, for calculating the displacement for a simple harmonic motion (here A is the amplitude and (ωt + Φ) is the phase, Φ being the initial phase), second one is for the simple pendulum (l = length of the pendulum). Third one is for a spring-mass system where, m is mass and k is the spring constant of the spring.",
      siunit: "Wave Length: m, Time period: s",
      dimension: "Wave Length: L, Time period: T",
    },
  ];

  //rotation_list
  const rotation_list = [
    {
      topic: "Torque",
      details: `Torque is necessary in rotational motion to create an object's angular acceleration. The amount of torque necessary to cause an angular acceleration is determined by the distribution of the object's mass. The distribution is described by the moment of inertia. It may be calculated by integrating the masses of all elements of the object and their distances from the centre of rotation, but the moments of inertia for typical forms can also be obtained.`,
      formula: "τ=Iα",
      process:
        "The torque on a given axis is the product of the moment of inertia and the angular acceleration. The units are Newton-meters (N∙m). Here 'τ' denotes torque, 'I' denotes moment of inertia and 'α' denotes angular acceleration.",
      siunit: " Newton-Meter",
      dimension: "ML²/T²",
    },
    {
      topic: "Work",
      details: `The total work done on a rigid body is the sum of the torques integrated over the angle of rotation (angular displacement). 
        dW = ( ∑ᵢτᵢ ) dθ`,
      formula: "W = τ x θ",
      process:
        "The rotational work done on a rigid body is dot product of torque and angle of rotation. Here 'W' denotes rotational work done by rigid body, 'τ' represents the torque and  'θ' represents angle of rotation(angular dispalcement).",
      siunit: "joule",
      dimension: "M L²/T²",
    },
    {
      topic: "Power",
      details: `The torque multiplied by the angular velocity is the power given to a system revolving about a fixed axis. 
        As we know Power is work done upon time, so angular work done τθ is derivated with respect to time.`,
      formula: "P = τ x ω",
      process:
        "The rotational power is dot product of torque and angular velocity. Here 'P' denotes rotational power of rigid body, 'τ' represents the torque and  'ω' represents angular velocity.",
      siunit: "watt",
      dimension: "M L² T⁻³",
    },
    {
      topic: "Kinetic Energy",
      details: [
        `Things that roll without sliding have some translational kinetic energy and the rest rotational kinetic energy. The ratio is determined by the rolling object's moment of inertia.`,
        <br />,
      ],
      formula: ["K.E. = 0.5 x I x ω²"],
      process: [
        "The Kinetic energy of a rolling body is defined as 1/2Iω²",
        "where I is the moment of inertia around the axis of rotation and ω is the angular velocity",
        <br />,
        "The kinetic energy of a rigid body rotating around a fixed axis is calculated by adding the kinetic energy of each particle in the rigid body.",
      ],
      siunit: "joule",
      dimension: "M L² T⁻²",
    },
  ];

  // gravitation_list
  const Gravitation_list = [
    {
      topic: "Gravitational Force",
      details:
        "Gravity also termed as gravitation, is a force that occurs among all material objects in the universe. For any two objects or units having non-zero mass, the force of gravity has a tendency to attract them toward each other. The Universal Law of Gravitation says that: Every object in the universe has the property to attract every other object with a force which is directly proportional to the product of their masses and inversely proportional to the square of the distance between them. ",
      formula: "F = GmMd⁻²",
      process:
        "The Force of Gravitation F , between two bodies / system of mass m and M , where d is the radius or distance between the two bodies and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) , is equals to product of ( G , m and M ) divided by the ( d² ) . SI unit for gravitation force is Newton . SI unit for universal gravitational constant is Newton - meter² · Kg⁻² ",
      siunit: "F = kg·m/s² or N",
      dimension: "G = M L T⁻²",
    },
    {
      topic: "Gravitational Field",
      details:
        "The gravitational field is defined as the gravitational force per unit mass that would be exerted on a small test mass at that position. It's a vector field that points in the direction of the force experienced by a small test mass at that location.",
      formula: "g = GM/r²",
      process:
        "Let’s consider a point particle of mass M and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) then the magnitude of the resultant gravitational field strength denoted by term g, at a distance of r,  from M is equals to product of (G and M) divided by (r²).",
      siunit: "N/kg",
      dimension: "g = L T⁻²",
    },
    {
      topic: "Gravitational Potential Energy",
      details:
        "Gravitational potential energy refers to the work that a body needs to do against a test mass in order to arrive to a specific position. In other words, gravitational potential energy is the amount of energy that an object has or gains as a result of a change in the position of its gravitational field.",
      formula: "U = -GMm/r",
      process:
        "Consider a source mass ‘M’ is placed at a point along the x-axis, initially, a test mass ‘m’ is at infinity and G is the constant of proportionality known as the universal gravitation constant ( 6.67 × 10⁻¹¹ Newton - meter² · kg⁻² ) therefore gravitational potential energy (U) at a point which is at a distance ‘r’ from the source mass is equal to the product of negative of (G, M and m) divided by (r).",
      siunit: " Joule",
      dimension: "U = M¹ L² T⁻²",
    },
    {
      topic: "Escape Velocity",
      details:
        "Escape velocity is the speed at which an object may break away from the gravitational pull of the planet or moon and escape without developing propulsion.",
      formula: "V = √(2GM/R)",
      process:
        "It is the minimum velocity required by an object to escape the gravitational field that is, escape the land without ever falling back. An object that has this velocity at the earth’s surface will totally escape the earth’s gravitational field ignoring the losses due to the atmosphere. Here 'V' is the escape velocity, 'M' is mass of the celestial object whose gravitational pull has to be superseded and 'R' is the distance from the object to the centre of mass of the body to be escaped.",
      siunit: "m/s",
      dimension: "L T⁻¹",
    },
    {
      topic: "Kepler's Second Law",
      details:
        "According to Kepler's second law, a planet sweeps away equal areas in equal periods, i.e., the areal velocity (area divided by time) remains constant.",
      formula: "(dA/dt) = L/2m",
      process:
        "The conservation of angular momentum, which holds for any system with just radial forces, is the source of Kepler's second law. The areal velocity must be constant since the angular momentum is constant. Here 'L' is angular velocity, 'dA' is change in area, 'dt' change in time and 'm' is mass of celestial body.",
      siunit: "L = kg-m²/sec",
      dimension: "M L² T⁻¹",
    },
    {
      topic: "Kepler's Third Law",
      details:
        "According to Kepler's third law, the square of the period is equal to the cube of the orbit's semi-major axis. In Satellite Orbits and Energy, we derived Kepler’s third law for the special case of a circular orbit.",
      formula: "T² = 4π²a³/GM",
      process:
        "Remember that the semi-major axis of an ellipse is one-half the sum of the perihelion and aphelion. The semi-major axis (a) of a circular orbit is the same as the orbit's radius. Here 'T' is the time period, 'a' is semi-major axis and 'M' is mass of celestial body.",
      siunit: "Time Period: s, Semi-Major Axis: m",
      dimension: "Time Period: T, Semi-Major Axis: L",
    },
  ];

  // MOI_list
  const MOI_list = [
    {
      topic: "Disc",
      details: `The moment of inertia of a disc is calculated about an axis which is perpendicular to it and through its center. We assume that the disc is planar.`,
      formula: "M.O.I = 1/2 × Mass × Radius² = 1/2 × M × R²",
      process:
        "Here the moment of inertia of a solid disc is given by the formula 1/2MR². Here 'M' denotes the mass of disc and 'R' is the radius of disc or the distance from center to circumference.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Ring",
      details: `The moment of inertia of a circular ring is calculated about an axis perpendicular to its plane passing through its centre.`,
      formula: "M.O.I = Mass × Radius² =  M × R²",
      process:
        "Here the moment of inertia of a ring is given by the formula MR². Here 'M' denotes the mass of disc and 'R' is the radius of disc or the distance from center to circumference.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Hollow Cylinder",
      details: `Moment of inertia of a hollow cylinder is calculated using the axis passing through the centre of the cylinder with an internal radius r1 and external radius r2 and mass M. If the hollow cylinder has a thin wall then the formula will be same as that of a ring.`,
      formula: [
        "I = 1/2 x Mass ×(External Radius² + Internal radius²)",
        <br />,
        " = 1/2 x M × (r2² + r1²)",
      ],
      process:
        "Here the moment of inertia of a hollow cylinder is given by the formula 1/2M(r2² + r1²). Here 'M' denotes the mass of disc and 'r1' and 'r2' are  internal and external radius respectively. If the hollow cylinder has a thin wall then the formula will be same as that of a ring i.e, MR² because the axis goes through the centre of the cylinder",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Solid Cylinder",
      details: `Moment of Inertia of a solid cylinder is calculated about its center with mass 'M' and Radius 'R'.`,
      formula: "M.O.I = 1/2 x Mass x Radius² = 1/2 x M x R²",
      process:
        "Here the moment of inertia of solid cylinder is given by the formula 1/2MR². Here 'M' is the mass of the solid cylinder and 'R' is radius of cylinder.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Rectangular Plate",
      details: `Moment of inertia of a rectangular plate is calculated using the axis which passes through its length(x-axis) and another axis which passes through its breadth(y-axis).`,
      formula: "I=1/12xMassx(Length²+Width²)=1/12 x m x (a²+b²)",
      process:
        "Here the moment of inertia of rectangular plate is given by the formula 1/12m(a²+b²). Where 'm' is the mass of plate, 'a' is the length and 'b' is breadth of the plate. ",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Solid Sphere",
      details: `The moment of inertia of a solid sphere is calculated about its central axis. The moment of inertia can also be calculated about its axis on the surface whose formula is (7/5)MR². `,
      formula: "M.O.I = 2/5 x Mass x Radius² = 2/5 x M x R²",
      process:
        "Here the moment of inertia of solid sphere is given by the formula 2/5MR². Where 'M' is the mass of plateand 'R' is the radius of solid sphere.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Rod",
      details: `The moment of inertia of the rod can be calculated about the axis passing through its center. Moment of inertia can aslo be calculated about the axis passing through its end whose formula is (1/3)ML². `,
      formula: "M.O.I = 1/12 x Mass x Length² = 1/12 x M x L²",
      process:
        "Here the moment of inertia of rod is given by the formula 1/12ML². Where 'M' is the mass of plate and 'L' is length of the rod.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
    {
      topic: "Spherical Shell",
      details: `The moment of inertia of the Spherical Shell can be calculated about the axis passing through its center.`,
      formula: "M.O.I = 2/3 x Mass x Radius² = 2/3 x M x R²",
      process:
        "Here the moment of inertia of spherical shell is given by the formula 2/3MR². Where 'M' is the mass of shell and 'R' is radius of the shell.",
      siunit: "kilogram-metre square",
      dimension: "M L²",
    },
  ];

  // fluid_list
  const fluid_list = [
    {
      topic: "Density",
      details: `Density is the measurement of how tightly a material is packed together. A fluid's mass density, often known as density, is defined as the ratio of a fluid's mass to its volume.
                 A fluid's density is defined as its mass per unit volume.`,
      formula: "ρ = m/V",
      process:
        "In general, liquids are less dense than solids and gases are less dense than liquids. This is due to the fact that solids have densely packed particles, liquids are materials where particles can slide around one another, and gases have particles that are free to move all over the place. Density is denoted by symbol ρ (rho) and the unit of mass density is (kg/m3).",
      siunit: "kg m⁻³",
      dimension: "M L⁻³",
    },
    {
      topic: "Pressure",
      details: `The amount of force delivered at right angles to an object's surface per unit area is known as pressure. For example, A knife distributes the force over its entire cutting edge. Sharper the edge, higher the pressure, and consequently the cutting with a sharp knife is easy. In a blunt knife, the force is distributed over its blunt surface with a larger surface area. Therefore, we need to put more force in order to cut.`,
      formula: "P = F/A",
      process: "Here Pressure(P) is calculated by the Force(F) upon Area(A).",
      siunit: "pascal",
      dimension: "M L⁻¹ T⁻²",
    },
    {
      topic: "Volume flow rate",
      details: `Volume flow rate is the quantity of fluid flowing in the specified time.Accurate flow rate measurement using an appropriate flowmeter is paramount to ensuring fluid control industrial processes run smoothly, safely and cost-effectively.`,
      formula: "Q = AV",
      process:
        "Here Volume flow rate(Q) is calculated by entering the values of Area(A) and Velocity(V).",
      siunit: "m³/s",
      dimension: "L³ T⁻¹",
    },
    {
      topic: "Continuity equation",
      details: `According to the equation, the volume of liquid flowing into a pipe in a particular interval of time must equal the volume of liquid flowing out of the same pipe in the same amount of time.`,
      formula: "A1 * V1 = A2 * V2",
      process:
        "Here 'A1' and 'V1' are the Area and Velocity of one side of the pipe respectively through which the liquid enters whereas 'A2' and 'V2' are the Area and Velocity of other side of the pipe respectively through which the liquid flows out.",
      siunit: "Arae: m², Velocity: m/s",
      dimension: "Area: L², Velocity: LT⁻¹",
    },
    {
      topic: "Viscosity",
      details: `The majority of fluids aren't perfect and have varying degrees of resistance to motion. This resistance to fluid motion is akin to the friction that occurs when a solid moves across a surface. This is referred to as viscosity.
        When there is relative motion between liquid layers, this force exists.`,
      formula: "μ = Fy/Au",
      process:
        "When we take a drop of water and honey on a slanting plane, the water reaches down the plane first than honey because of it low viscosity.Here 'μ' represents viscosity, 'F/A' is the pressure and 'u/y' is rate of deformation.",
      siunit: "pascal-second",
      dimension: "M L⁻¹ T⁻¹",
    },
    {
      topic: "Poiseuille's law",
      details: `Poiseuille's law states that the flow of liquid depends on the following variables such as the length of the tube(L), radius (r), pressure gradient (∆P) and the viscosity of the fluid (μ) in accordance with their relationship.`,
      formula: "Δp = 8μLQ/πR⁴",
      process:
        "While examining the blood flow through arteries, it is found that high viscosity of blood makes it almost incompressible. It also has application in blood pressure measurement instruments. Here 'Δp' represents difference in pressure, 'μ' represents viscosity,'L' is length of pipe, 'Q' is volumetric flow rate and 'R' is the radius of pipe.",
      siunit: "Pressure: pascal,  Volumetric flow rate: m³/s",
      dimension: "Pressure: ML⁻¹T⁻²,  Volumetric flow rate: L³T⁻¹",
    },
    {
      topic: "Bernoulli's equation",
      details: `According to Bernoulli's equation, the total mechanical energy of the moving fluid remains constant, which comprises the energy associated with fluid pressure, the gravitational potential energy of elevation, and the kinetic energy of fluid motion.`,
      formula: "P₁ + 1/2ρV₁² + ρgh₁ = P₂ + 1/2ρV₂² + ρgh₂",
      process:
        "It is applied to various measuring devices such as Venturi meter, Nozzle meter, Orifice meter, Pitot tube,etc. Here 'P₁', 'V₁' and 'h₁' are the pressure, velocity and height of one opening of the tube and 'P₂', 'V₂' and 'h₂' are the pressure, velocity and height of other opening of the tube and 'ρ' is density of fluid.",
      siunit: "Pressure: pascal, Velocity: m/s, height: m, density: kg m⁻³",
      dimension: "Pressure: ML⁻¹T⁻²,  Velocity: LT⁻¹, Height: L, density: ML⁻³",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  // Projectile Motion Calculator
  const CalculatorProjectileMotion = () => {
    const [choice, setChoice] = useState("range");
    const [velocity, setVelocity] = useState(null);
    const [angle, setAngle] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setVelocity(null);
      setAngle(null);
      setResult(null);
    };

    const handleChange = (e) => {
      setChoice(e.target.value);
      reset();
    };
    const calcResult = () => {
      let res;
      if (choice === "range") {
        res =
          (2 *
            velocity *
            velocity *
            Math.sin((angle * Math.PI) / 180) *
            Math.cos((angle * Math.PI) / 180)) /
          9.8;
      } else if (choice === "time") {
        res = (2 * velocity * Math.sin((angle * Math.PI) / 180)) / 9.8;
      } else if (choice === "max-height") {
        res =
          (velocity *
            velocity *
            Math.sin((angle * Math.PI) / 180) *
            Math.sin((angle * Math.PI) / 180)) /
          19.6;
      }
      setResult(res);
    };
    const choiceData = () => {
      if (choice === "range")
        return {
          name: "Range",
          mainunit: "m",
          quantities: ["Initial Velocity (u)", "Angle (θ)"],
          setters: [setVelocity, setAngle],
          getters: [velocity, angle],
        };
      else if (choice === "time")
        return {
          name: "Time",
          mainunit: "s",
          quantities: ["Initial Velocity (u)", "Angle (θ)"],
          setters: [setVelocity, setAngle],
          getters: [velocity, angle],
        };
      else if (choice === "max-height")
        return {
          name: "Maximum Height",
          mainunit: "m",
          quantities: ["Initial Velocity (u)", "Angle (θ)"],
          setters: [setVelocity, setAngle],
          getters: [velocity, angle],
        };
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="choice2">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" className="select-custom-res" onChange={(e) => handleChange(e)}>
              <option value="range">R : Range or Distance</option>
              <option value="time">T : Time of flight</option>
              <option value="max-height">H : Maximum-Height</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in m/s"}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={"Enter in degree"}
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={calcResult}>
              Calculate
            </Button>
            <Button variant="dark" onClick={() => reset()} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </>
    );
  };

  // Momentum Calculator
  function CalculatorMomentum() {
    const [result, setResult] = useState(null);
    const [mass, setMass] = useState(null);
    const [vel, setVel] = useState(null);

    const handleClick = () => {
      let res = mass * vel;
      setResult(res);
    };
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label>Mass (M)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              type="number"
              placeholder="Enter Mass in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="velocity">
            <Form.Label>Velocity (V)</Form.Label>
            <Form.Control
              onChange={(e) => setVel(e.target.value)}
              type="number"
              placeholder="Enter Velocity in SI unit"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Momentum (P)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " kg.m/s"}
            />
            <Form.Text className="text-muted">
              Enter Mass &amp; Velocity to Calculate the Momentum.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={() => setResult(null)} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  // Force Calculator
  function CalculatorForce() {
    const [result, setResult] = useState("");
    const [mass, setMass] = useState("");
    const [acceleration, setAcce] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      mass: mass,
      acceleration: acceleration,
    };

    const insertValues = `${mass}${SI["mass"]} * ${acceleration}${SI["acceleration"]}`;

    const handleClick = () => {
      if(mass!=="" && acceleration!=="")
      {let res = mass * acceleration;
      setShowSolution(true)
      setResult(res);}
      else{
        setShowModal(true);
      }
    };

    const resetForm=()=>{
      setMass("");
      setAcce("");
      setShowSolution(false);
      setResult("");
    }

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="mass">
            <Form.Label> Mass (in Kg)</Form.Label>
            <Form.Control
              onChange={(e) => setMass(e.target.value)}
              value={mass}
              type="number"
              placeholder="Enter mass of an object in kilograms"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="acceleration">
            <Form.Label> Acceleration (in m/s²)</Form.Label>
            <Form.Control
              onChange={(e) => setAcce(e.target.value)}
              type="number"
              value={acceleration}
              placeholder="Enter acceleration in metre per second square [m/s²]"
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="mass*accerelation"
                toFind="force"
                insertValues={insertValues}
                result={result}
                // constants={constants}
              />
            </Form.Group>
           : null }
          
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Force (F)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === "" ? "Result" : result + " N or Kg.m/s² "
              }
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  // Friction Calculator
  function CalculatorFriction() {
    const [result, setResult] = useState(null);
    const [force, setForce] = useState(null);
    const [coeff, setCoeff] = useState(null);

    const handleClick = () => {
      let res = force * coeff;
      setResult(res);
    };

    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Force applied (N)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              type="number"
              placeholder="Enter Force applied"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="coeff">
            <Form.Label> coefficient of Friction (μ)</Form.Label>
            <Form.Control
              onChange={(e) => setCoeff(e.target.value)}
              type="number"
              placeholder="Enter coefficient of Friction (μ)"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="momentum">
            <Form.Label>Frictional Force (F)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " N"}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={() => setResult(null)} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  // Error Measurement Calculator
  function CalculatorErrorMeasurement() {
    const [absolute, setResultAbs] = useState("");
    const [relative, setResultRel] = useState("");
    const [percentage, setResultPer] = useState("");
    const [x_measured, setXM] = useState("");
    const [x_actual, setXA] = useState("");
    const [showModal, setShowModal] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const givenValues = {
    "XM": x_measured,
    "XA": x_actual,
  };

  const insertAbs=`|${x_measured} - ${x_actual}|`
  const insertRel=`|${absolute} / ${x_actual}|`
  const insertPer=`|${relative} * 100 %|`

    const handleClick = () => {
      if(x_measured!=="" && x_actual!=="")
      {
        let res_abs = Math.abs(x_measured - x_actual);
        let res_rel = res_abs / x_actual;
        let res_per = res_rel * 100;
        setResultAbs(res_abs);
        setResultRel(res_rel);
        setResultPer(res_per);
      setShowSolution(true)
       }
      else{
        setShowModal(true);
      }
    };

      const resetForm=()=>{
        setXM("");
        setXA("");
        setResultAbs("");
        setResultRel("");
        setResultPer("");
        setShowSolution(false);
      }
     
    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="x_measured">
            <Form.Label>X Measured (XM)</Form.Label>
            <Form.Control
              onChange={(e) => setXM(e.target.value)}
              type="number"
              value={x_measured}
              placeholder="Enter Measured Value"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="x_actual">
            <Form.Label>X Actual (XA)</Form.Label>
            <Form.Control
              onChange={(e) => setXA(e.target.value)}
              value={x_actual}
              type="number"
              placeholder="Enter Actual Value"
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="|XM-XA|"
                toFind="Absolute Error"
                insertValues={insertAbs}
                result={absolute}
                // constants={constants}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-3" controlId="absolute">
            <Form.Label>Absolute Error (EA)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              value={absolute}
              placeholder={absolute === "" ? "Result" : absolute}
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="EA/XA"
                toFind="Relative Error"
                insertValues={insertRel}
                result={relative}
                // constants={constants}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-3" controlId="relative">
            <Form.Label>Relative Error (ER)</Form.Label>
            <Form.Control
              readOnly
              value={relative}
              type="number"
              placeholder={relative === "" ? "Result" : relative}
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="ER*100%"
                toFind="Percentage Error"
                insertValues={insertPer}
                result={percentage}
                // constants={constants}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-3" controlId="percentage">
            <Form.Label>Percentage Error (ER)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              value={percentage}
              placeholder={percentage === "" ? "Result" : percentage}
            />
            <Form.Text className="text-muted">
              Enter measured and actual values to calculate result .
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              variant="dark"
              onClick={resetForm}
              type="reset"
            >
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  //Torque Calculator
  function CalculatorTorque() {
    const [result, setResult] = useState("");
    const [force, setForce] = useState("");
    const [distance, setDist] = useState("");
    const [angle, setAngle] = useState("");
      const [showModal, setShowModal] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      force:force,
      distance:distance,
      angle:angle,
    };

    const insertValues = `${force}${SI["force"]} * ${distance}${SI["distance"]}*sin(${angle})`;


    const handleClick = () => {
      if(force!=="" && distance!=="" && angle!=="")
    {
      let res = force * distance * Math.sin((angle * Math.PI) / 180);
      setResult(res);
      setShowSolution(true)
    }
   else{
     setShowModal(true);
   }
    };

    const resetForm=()=>{
      setResult("");
      setForce("");
      setDist("");
      setAngle("");
      setShowSolution(false);
    }

    return (
      <React.Fragment>
        <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Form>
          <Form.Group className="mb-3" controlId="force">
            <Form.Label> Force (in Newton)</Form.Label>
            <Form.Control
              onChange={(e) => setForce(e.target.value)}
              type="number"
              value={force}
              placeholder="Enter force applied"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="distance">
            <Form.Label> Distance (in meter)</Form.Label>
            <Form.Control
              onChange={(e) => setDist(e.target.value)}
              type="number"
              value={distance}
              placeholder="Enter distance covered"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="angle">
            <Form.Label> Angle (in degree)</Form.Label>
            <Form.Control
              onChange={(e) => setAngle(e.target.value)}
              value={angle}
              type="number"
              placeholder="Enter angle (sin θ)"
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="force*distance*sinθ"
                toFind="torque"
                insertValues={insertValues}
                result={result}
                // constants={constants}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-3" controlId="torque">
            <Form.Label>Torque (T)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " N.m "}
            />
            <Form.Text className="text-muted">
              Enter the above values to Calculate.
            </Form.Text>
          </Form.Group>
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleClick}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={resetForm} type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }

  //Collision Calculator
  function CalculatorCollision() {
    const [massOne, setMassOne] = useState("");
    const [massTwo, setMassTwo] = useState("");
    const [initialVelOne, setInitialVelOne] = useState("");
    const [initialVelTwo, setInitialVelTwo] = useState("");
    const [finalVelOne, setFinalVelOne] = useState("");
    const [finalVelTwo, setFinalVelTwo] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
  
      const givenValues = {
        m1: massOne,
        m2: massTwo,
        u1:initialVelOne,
        u2:initialVelTwo,
        v1:finalVelOne,
        v2:finalVelTwo,
      };
  
      const insertValues = `(${massOne}${SI["mass"]} * ${initialVelOne}${SI["velocity"]} + ${massTwo}${SI["mass"]} * ${initialVelTwo}${SI["velocity"]} - ${massOne}${SI["mass"]} * ${finalVelOne}${SI["velocity"]}) / ${massTwo}${SI["mass"]}`;
  
    const handleSubmit = () => {
      if(massOne!=="" && massTwo!=="" && initialVelOne!=="" && initialVelTwo!=="" && finalVelOne!=="" )
      {let result =
        (parseFloat(massOne) * parseFloat(initialVelOne) +
          parseFloat(massTwo) * parseFloat(initialVelTwo) -
          parseFloat(massOne) * parseFloat(finalVelOne)) /
        massTwo;
      setFinalVelTwo(result);
      setShowSolution(true)
    }
      else{
        setShowModal(true);
      }
      
    };
    const handleReset = () => {
      setMassOne("");
      setMassTwo("");
      setInitialVelOne("");
      setInitialVelTwo("");
      setShowSolution(false);
      setFinalVelOne("");
      setFinalVelTwo("");
    };

    return (
      <>
       <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Form>
          {/* Mass  */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Label> Mass One (m1) </Form.Label>
                <Form.Control
                  onChange={(e) => setMassOne(e.target.value)}
                  type="number"
                  value={massOne}
                  placeholder="Enter mass of the first object"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label> Mass Two (m2) </Form.Label>
                <Form.Control
                  onChange={(e) => setMassTwo(e.target.value)}
                  value={massTwo}
                  type="number"
                  placeholder="Enter mass of the second object"
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Initial Velocity */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Label> Initial Velocity One (u1) </Form.Label>
                <Form.Control
                  onChange={(e) => setInitialVelOne(e.target.value)}
                  value={initialVelOne}
                  type="number"
                  placeholder="Enter Initial Velocity of the first object"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label> Initial Velocity Two (u2) </Form.Label>
                <Form.Control
                  onChange={(e) => setInitialVelTwo(e.target.value)}
                  value={initialVelTwo}
                  type="number"
                  placeholder="Enter Initial Velocity of the second object"
                />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <Form.Group>
                <Form.Label> Final Velocity One (v1) </Form.Label>
                <Form.Control
                  onChange={(e) => setFinalVelOne(e.target.value)}
                  value={finalVelOne}
                  type="number"
                  placeholder="Enter Final Velocity of the first object"
                />
              </Form.Group>
            </Col>
          
            <Col>
              <Form.Group>
                <Form.Label> Final Velocity Two (v2) </Form.Label>
                <Form.Control
                  disabled="true"
                  type="number"
                  placeholder={
                    finalVelTwo === ""
                      ? "The Final Velocity of the second object"
                      : finalVelTwo
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Solution */}
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="(m1u1 + m2u2 - m1v1) / m2"
                toFind="final Velocity"
                insertValues={insertValues}
                result={finalVelTwo}
              />
            </Form.Group>
           : null }
          {/* Submit Btn */}
          <div className="button-custom-grp">
            <Button variant="primary" onClick={handleSubmit}>
              Calculate
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark" onClick={handleReset} type="reset">
              Reset
            </Button>
            </div>
        </Form>
      </>
    );
  }

  // Kinematics Calculator
  function CalculatorKinematics() {
    const [result, setResult] = useState(null);
    const [ivelocity, setiVelocity] = useState(null);
    const [fvelocity, setfVelocity] = useState(null);
    const [acceleration, setAcceleration] = useState(null);
    const [time, setTime] = useState(null);
    const [displacement, setDisplacement] = useState(null);
    const [choice, setChoice] = useState("displacement");
    function handleChange(e) {
      console.log(e.target.value);
      setResult(null);
      setiVelocity(null);
      setfVelocity(null);
      setAcceleration(null);
      setTime(null);
      setDisplacement(null);
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res;
      if (choice === "displacement") {
        res =
          ivelocity * Math.abs(time) +
          (1 / 2) * acceleration * Math.abs(time) * Math.abs(time);
      } else if (choice === "velocity_fin") {
        res = parseFloat(ivelocity) + parseFloat(acceleration * Math.abs(time));
      } else if (choice === "velocity_ini") {
        res = parseFloat(fvelocity) - parseFloat(acceleration * Math.abs(time));
      } else if (choice === "acceleration") {
        res =
          (fvelocity * fvelocity - ivelocity * ivelocity) / (2 * displacement);
      } else if (choice === "time") {
        res = Math.abs((fvelocity - ivelocity) / acceleration);
      }
      // console.log(res);
      // console.log(time, ivelocity, fvelocity, acceleration, displacement);
      setResult(res);
    };
    function reset() {
      setResult(null);
      setiVelocity(null);
      setfVelocity(null);
      setAcceleration(null);
      setTime(null);
      setDisplacement(null);
    }
    const choiceData = () => {
      if (choice === "displacement")
        return {
          name: "Displacement",
          mainunit: "m",
          quantities: ["Initial Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setiVelocity, setTime, setAcceleration],
          getters: [ivelocity, time, acceleration],
        };
      else if (choice === "time")
        return {
          name: "Time Interval",
          mainunit: "s",
          quantities: ["Initial Velocity", "Final Velocity", "Acceleration"],
          subunits: ["m/s", "m/s", "m/s²"],
          setters: [setiVelocity, setfVelocity, setAcceleration],
          getters: [ivelocity, fvelocity, acceleration],
        };
      else if (choice === "acceleration")
        return {
          name: "Acceleration",
          mainunit: "m/s²",
          quantities: ["Initial Velocity", "Final Velocity", "Displacement"],
          subunits: ["m/s", "m/s", "m"],
          setters: [setiVelocity, setfVelocity, setDisplacement],
          getters: [ivelocity, fvelocity, displacement],
        };
      else if (choice === "velocity_ini")
        return {
          name: "Initial Velocity",
          mainunit: "m/s",
          quantities: ["Final Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setfVelocity, setTime, setAcceleration],
          getters: [fvelocity, time, acceleration],
        };
      else if (choice === "velocity_fin")
        return {
          name: "Final Velocity",
          mainunit: "m/s",
          quantities: ["Initial Velocity", "Time", "Acceleration"],
          subunits: ["m/s", "s", "m/s²"],
          setters: [setiVelocity, setTime, setAcceleration],
          getters: [ivelocity, time, acceleration],
        };
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" className="select-custom-res" onChange={(e) => handleChange(e)}>
              <option value="displacement">∆x : Displacement</option>
              <option value="time">t : Time interval</option>
              <option value="velocity_ini">v₀​ : Initial velocity</option>
              <option value="velocity_fin">v : Final velocity</option>
              <option value="acceleration">a : Constant Acceleration</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[1]}
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[2]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[2](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[2]}
              value={
                choiceData().getters[2] === null ? "" : choiceData().getters[2]
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  }

  //Circular Motion Calculator
  function CalculatorCircularMotion() {
    const [result, setResult] = useState(null);
    const [radius, setRadius] = useState(null);
    const [time, setTime] = useState(null);
    const [pi, setPi] = useState(Math.PI);
    const [velocity, setVelocity] = useState(null);
    const [choice, setChoice] = useState("circumference");
    function handleChange(e) {
      console.log(e.target.value);
      setResult(null);
      setRadius(null);
      setTime(null);
      setVelocity(null);
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res;
      if (choice === "circumference") res = 2 * Math.PI * radius;
      else if (choice === "velocity") {
        res = parseFloat(2 * Math.PI * radius) / parseFloat(time);
      } else if (choice === "time")
        res = parseFloat(2 * Math.PI * radius) / parseFloat(velocity);
      else if (choice === "rad") {
        let x = velocity * velocity;
        res = x / radius;
      } else if (choice === "omega") {
        res = (2 * Math.PI) / time;
      }

      setResult(res);
    };
    function reset() {
      setResult(null);
      setRadius(null);
      setTime(null);
      setVelocity(null);
    }
    const choiceData = () => {
      if (choice === "circumference")
        return {
          name: "Circumference",
          mainunit: "m",
          quantities: ["Radius", "Pi"],
          subunits: ["m", "NaN"],
          setters: [setRadius, setPi],
          getters: [radius, pi],
          disable: true,
        };
      else if (choice === "velocity") {
        return {
          name: "Velocity",
          mainunit: "m/s",
          quantities: ["Radius", "Time"],
          subunits: ["m", "s"],
          setters: [setRadius, setTime],
          getters: [radius, time],
        };
      } else if (choice === "time") {
        return {
          name: "Time",
          mainunit: "s",
          quantities: ["Radius", "Velocity"],
          subunits: ["m", "m/s"],
          setters: [setRadius, setVelocity],
          getters: [radius, velocity],
        };
      } else if (choice === "rad") {
        return {
          name: "Radial Acceleration",
          mainunit: "m",
          quantities: ["Velocity", "Radius"],
          subunits: ["m/s", "m"],
          setters: [setVelocity, setRadius],
          getters: [velocity, radius],
        };
      } else if (choice === "omega") {
        return {
          name: "Angular Velocity",
          mainunit: "rad/s",
          quantities: ["Time", "Pi"],
          subunits: ["s", "NaN"],
          setters: [setTime, setPi],
          getters: [time, pi],
          disable: true,
        };
      }
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" className="select-custom-res" onChange={(e) => handleChange(e)}>
              <option value="circumference">
                C : Circumference of Circular Path
              </option>
              <option value="velocity">V : Velocity of Rotation</option>
              <option value="time">T : Time Period of Rotation</option>
              <option value="rad">aᵣₐ : Radial Acceleration </option>
              <option value="omega">ω : Angular Velocity </option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={
                choiceData().subunits[1] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[1]
              }
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
              disabled={choiceData().disable}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  }

  //Stress and Strain
  function Stress_Strain_calc() {
    const [result, setResult] = useState(null);
    const [options, setOptions] = useState("stress");
    const [force, setForce] = useState(null);
    const [area, setArea] = useState(null);
    const [delX, setDelX] = useState(null);
    const [x, setX] = useState(null);

    function handleChange(e) {
      console.log(e.target.value);
      setOptions(e.target.value);
    }
    const calcResult = () => {
      let res;
      if (options === "stress") res = force / area;
      else if (options === "strain") res = delX / x;

      setResult(res);
    };

    function reset() {
      setResult(null);
      setForce(null);
      setArea(null);
      setDelX(null);
      setX(null);
    }
    const choiceData = () => {
      if (options === "stress")
        return {
          name: "Stress",
          mainunit: "Pascal(Pa)",
          quantities: ["Force", "Area"],
          subunits: ["F", "M^2"],
          setters: [setForce, setArea],
          getters: [force, area],
        };
      else if (options === "strain") {
        return {
          name: "Strain",
          mainunit: " ",
          quantities: ["Delta X", "X"],
          subunits: ["m or m^2 or m^3", "m or m^2 or m^3"],
          setters: [setDelX, setX],
          getters: [delX, x],
        };
      }
    };

    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control as="select" className="select-custom-res" onChange={(e) => handleChange(e)}>
              <option value="stress">Stress</option>
              <option value="strain">Strain</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[0](e.target.value)}
              type="number"
              placeholder={"Enter in " + choiceData().subunits[0]}
              value={
                choiceData().getters[0] === null ? "" : choiceData().getters[0]
              }
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => choiceData().setters[1](e.target.value)}
              type="number"
              placeholder={
                choiceData().subunits[1] === "NaN"
                  ? "No Unit"
                  : "Enter in " + choiceData().subunits[1]
              }
              value={
                choiceData().getters[1] === null ? "" : choiceData().getters[1]
              }
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={
                result === null
                  ? "Result"
                  : result + " " + choiceData().mainunit
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  }

  // Adding Calculators together
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Momentum":
        currentCall = CalculatorMomentum();
        break;
      case "Force":
        currentCall = CalculatorForce();
        break;
      case "Friction":
        currentCall = CalculatorFriction();
        break;

      case "Error Measurements":
        currentCall = CalculatorErrorMeasurement();
        break;
      case "Torque":
        currentCall = CalculatorTorque();
        break;
      case "Collision":
        currentCall = CalculatorCollision();
        break;
      case "Kinematics":
        currentCall = CalculatorKinematics();
        break;
      case "Circular Motion":
        currentCall = CalculatorCircularMotion();
        break;
      case "Stress and Strain":
        currentCall = Stress_Strain_calc();
        break;
      case "Projectile Motion":
        currentCall = CalculatorProjectileMotion();
        break;
      default:
        break;
    }
    return currentCall;
  }

  //Moment of inertia
  if (details.topic === "Moment of Inertia") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Moment of Inertia</h1>
        </div>
        <div className="mech__topics-card">
          {MOI_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/moment_of_inertia/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Work power energy
  else if (details.topic === "Work Power Energy") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Work Power Energy</h1>
        </div>
        <div className="mech__topics-card">
          {WPE_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/work_power_energy/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Rotational Dynamics
  else if (details.topic === "Rotational Dynamics") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Rotational Dynamics</h1>
        </div>
        <div className="mech__topics-card">
          {rotation_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/rotation/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Simple Harmonic Motion
  else if (details.topic === "Simple Harmonic Motion") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Simple Harmonic Motion</h1>
        </div>
        <div className="mech__topics-card">
          {shm_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/shm/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Fluid Mechanics
  else if (details.topic === "Fluid Mechanics") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Fluid Mechanics</h1>
        </div>
        <div className="mech__topics-card">
          {fluid_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/fluid_mechanics/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  //Gravitation
  else if (details.topic === "Gravitation") {
    return (
      <div className="mech__main">
        <div className="mech__header">
          <h1>Gravitation</h1>
        </div>
        <div className="mech__topics-card">
          {Gravitation_list.map((data) => (
            <React.Fragment key={data.topic}>
              <Link
                to={`/classicalmechanics/calc/gravitation/${data.topic}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  className="a"
                  key={data.topic}
                  style={{
                    width: "18rem",
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  <Card.Body>
                    <div> {data.topic}</div>
                  </Card.Body>
                </Card>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <Navbar />
        <div className="Calculator__main">
          <Helmet>
            <title>{details.topic}</title>
            <meta
              name="description"
              content={details.details}
              data-react-helmet="true"
            />
            <meta
              name="keywords"
              content="Classical Mechanics, calculator, physics, Tech n science, technscience, tech and science"
            />
          </Helmet>
          <div className="Calculator__header">
            <h1>{details.topic}</h1>
          </div>
          <div className="Calculator__details">
            <p>{details.details}</p>
          </div>
          <div className="Calculator__formula">
            <h3>Working Formula:</h3>
            <h3>{details.formula}</h3>
            <h3>S.I. Unit : {details.siunit}</h3>
            <h3>Dimension : {details.dimension}</h3>
          </div>
          <div className="Calculator__process">
            <h3> Process</h3>
            <p>{details.process}</p>
          </div>
          <div className="Calculator__calc">
            <h3>{details.topic} Calculator</h3>
            <hr />
            {calC(details.topic)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;


// function calC(key) 