import i from "../../Images/Questions/id-10.webp";
import i1 from "../../Images/Questions/id-14.webp";
export const data = [
  {
    id: 1,
    type: "Multiple Correct",
    question:
      "Two vectors of magnitudes 5 units and 3 units are added. The angle between the vectors is θ.",
    topic: "Kinematics",
    answer: [
      {
        answerText:
          "A)  the maximum magnitude for the resultant is 8 units when θ = 90⁰",
        isCorrect: false,
      },
      {
        answerText:
          "B)  the maximum magnitude for the resultant is 8 units when θ = 0⁰",
        isCorrect: true,
      },
      {
        answerText:
          "C)  the maximum magnitude for the resultant is 2 units when θ = 180⁰",
        isCorrect: true,
      },
      {
        answerText:
          "D)  the maximum magnitude for the resultant is 4 units when θ = 180⁰",
        isCorrect: false,
      },
    ],
    difficulty: "Easy",
    image: "",
  },
  {
    id: 2,
    type: "Multiple Correct",
    question: "Let A ⃗=10i ̂-8j ̂  and B ⃗=15i ̂-12j ̂",
    topic: "Kinematics",
    answer: [
      {
        answerText: "A)  It is correct to say that B ⃗=kA ⃗ ",
        isCorrect: true,
      },
      {
        answerText: "B)  It is not correct to say that B ⃗=kA ⃗",
        isCorrect: false,
      },
      {
        answerText: "C)  It is correct to say that B ⃗/A ⃗ =k",
        isCorrect: false,
      },
      {
        answerText: "D)  It is not correct to say that B ⃗/A ⃗ =k",
        isCorrect: true,
      },
    ],
    difficulty: "Easy",
    image: "",
  },
  {
    id: 3,
    type: "Multiple Correct",
    question: "A ⃗=i ̂+j ̂+k ̂  and B ⃗=2i ̂-3k ̂  then",
    topic: "Kinematics",
    answer: [
      { answerText: "A)  |3Ā+B ⃗| = √34", isCorrect: true },
      { answerText: "B)  |Ā X B ⃗| = √38", isCorrect: true },
      {
        answerText: "C)  Angle made by Ā with X-axis is cos⁻¹(1/√3)",
        isCorrect: true,
      },
      { answerText: "D)  A ⃗ .B ⃗ = 1", isCorrect: false },
    ],
    difficulty: "Easy",
    image: "",
  },
  {
    id: 4,
    type: "Numerical",
    question:
      "A ball is thrown vertically up with a certain velocity from the top of a tower of height 40m. At 4.5m above the top of the tower its speed is exactly half of that it will have at 4.5m below the top of the tower. Find maximum height reached by the ball above the ground.",
    topic: "Kinematics",
    answer: 47.5,
    difficulty: "Medium",
    image: "",
  },
  {
    id: 5,
    type: "Numerical",
    question:
      "A particle moving in a straight line covers half the distance with speed of 3 m/s. The other half of the distance is covered in two equal time intervals with speed of 4.5 m/s and 7.5 m/s respectively. The average speed of the particle during this motion is ",
    topic: "Kinematics",
    answer: 4,
    difficulty: "Easy",
    image: "",
  },
  {
    id: 6,
    type: "Numerical",
    question:
      "A fighter plane flying horizontally at an altitude of 1.5km with speed of 720km/h passes directly overhead an antiaircraft gun. At what angle from the vertical should the gun be fired for the shell with muzzle speed 400m/s to hit the plane?",
    topic: "Kinematics",
    answer: 30,
    difficulty: "Medium",
    image: "",
  },
  {
    id: 7,
    type: "Numerical",
    question:
      "Two particles of medium disturbed by the wave propagation are at x₁ = 0 and x₂ = 1cm. The respective displacements (in cm) of the particles can be given by the equations:  y₁ = 2sin3𝛑t  ,     y₂ = 2sin(3𝛑t-𝛑/8). The wave velocity is:",

    topic: "Simple Harmonic",
    answer: 24,
    difficulty: "Medium",
    image: "",
  },
  {
    id: 8,
    type: "Multiple Correct",
    question:
      "Two particles P and Q describe S.H.M of same amplitude 'a', same frequency 'f' along the same straight line. The maximum distance between the two particles is a √2. The initial phase difference between the particle is:",
    topic: "Simple Harmonic",
    answer: [
      { answerText: "A)  Zero", isCorrect: false },
      {
        answerText: "B)  𝛑/2",
        isCorrect: true,
      },
      {
        answerText: "C)  𝛑/6",
        isCorrect: false,
      },
      {
        answerText: "D)  𝛑/3",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
    image: "",
  },
  {
    id: 9,
    type: "Multiple Correct",
    question:
      "The bob in a simple pendulum of length 'l' is released at t=0 from the position of small angular displacement θ. Linear displacement of the bob at any time 't' from the mean position is:",
    topic: "Simple Harmonic",
    answer: [
      { answerText: "A)  lθcos√(g/l) * t", isCorrect: true },
      {
        answerText: "B)  l√(g/l) * tcosθ",
        isCorrect: false,
      },
      {
        answerText: "C)  lgsinθ",
        isCorrect: false,
      },
      {
        answerText: "D)  lθsin√(g/l) * t",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
    image: "",
  },
  {
    id: 10,
    type: "Numerical",
    question:
      "A particle of mass 2kg moves in SHM and its potential energy U varies with position x as shown. The period of oscillation of the particle is n𝛑/5 second. Find value of 'n'.",
    topic: "Simple Harmonic",
    answer: 4,
    difficulty: "Hard",
    image: i,
  },
  {
    id: 11,
    type: "Multiple Correct",
    question:
      "An object of mass m is moving in uniform circular motion in xy-plane. The circler has radius R and object is moving clockwise around the circle with speed v. The motion is projected onto the x-axis where it appears as Simple harmonic motion according to x(t)=R cos (ωt+Φ). The motion starts from point of co-ordinates (0,R). In this projection Φ is:",
    topic: "Circular Motion",
    answer: [
      { answerText: "A)  𝛑/2", isCorrect: true },
      {
        answerText: "B)  𝛑",
        isCorrect: false,
      },
      {
        answerText: "C)  3𝛑/2",
        isCorrect: false,
      },
      {
        answerText: "D)  0",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
    image: "",
  },
  {
    id: 12,
    type: "Multiple Correct",
    question:
      "Two particles A and B are performing SHM along x and y-axis respectively with equal amplitude and frequency of 2cm and 1Hz respectively. Equilibrium positions of the particless A and B are at the co-ordinates (3cm,0) and (0,4cm) respectively. At t=0, B is at its eqiulibrium position and moving towards the origin, while A is nearest to the origin and moving away from origin. Equation of motion of particle A :",
    topic: "Simple Harmonic",
    answer: [
      { answerText: "A)  x=(2cm) cos (2𝛑t)", isCorrect: false },
      {
        answerText: "B)  x=(3cm) - (2cm) cos (2𝛑t)",
        isCorrect: true,
      },
      {
        answerText: "C)  x=(2cm) sin (2𝛑t)",
        isCorrect: false,
      },
      {
        answerText: "D)  x=(3cm) - (2cm) sin (2𝛑t)",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
    image: "",
  },
  {
    id: 13,
    type: "Multiple Correct",
    question:
      "Two particles A and B are performing SHM along x and y-axis respectively with equal amplitude and frequency of 2cm and 1Hz respectively. Equilibrium positions of the particless A and B are at the co-ordinates (3cm,0) and (0,4cm) respectively. At t=0, B is at its eqiulibrium position and moving towards the origin, while A is nearest to the origin and moving away from origin. Equation of motion of particle B :",
    topic: "Simple Harmonic",
    answer: [
      { answerText: "A)  y=(2cm) cos (2𝛑t)", isCorrect: false },
      {
        answerText: "B)  y=(4cm) - (2cm) cos (2𝛑t)",
        isCorrect: false,
      },
      {
        answerText: "C)  y=(2cm) sin (2𝛑t)",
        isCorrect: false,
      },
      {
        answerText: "D)  y=(4cm) - (2cm) sin (2𝛑t)",
        isCorrect: true,
      },
    ],
    difficulty: "Hard",
    image: "",
  },
  {
    id: 14,
    type: "Numerical",
    question:
      "Two particles are simultaneously thrown from the roofs of two high buildings as shown. Their velocities are vₐ = 2m/s and v₀=14m/s respectively. Calculate the minimum distance between the particles in the process of their motion. ",
    topic: "Kinematics",
    answer: 6,
    difficulty: "Hard",
    image: i1,
  },
  {
    id: 15,
    type: "Multiple Correct",
    question:
      "Two ships are resting on sea surface at distances a and b from the fixed point O respectively. They start moving towards the point O with constant velocities v1 and v2 respectively. If the ships subtend an angle θ at O, find the shortest distance of their separation. (θ=𝛑/2)",
    topic: "Kinematics",
    answer: [
      { answerText: "A)  (av₂ + bv₁)/√(v₁²+v₂²)", isCorrect: false },
      {
        answerText: "B)  (av₂ + bv₁)/√(v₁²-v₂²)",
        isCorrect: false,
      },
      {
        answerText: "C)  (bv₂ + av₁)/√(v₁²+v₂²)",
        isCorrect: false,
      },
      {
        answerText: "D)  (av₂ - bv₁)/√(v₁²+v₂²)",
        isCorrect: true,
      },
    ],
    difficulty: "Hard",
    image: "",
  },
  {
    id: 16,
    type: "Multiple Correct",
    question:
      "A balloon starts rising from the surface of Earth. the ascending rate is constant and equal to v₀. Due to the wind the ballon gathers the horizontal velocitycomponent vₓ=ay, where 'a' is a constant and 'y' is height of ascent. Which of the following are correct depending on the height of ascent:",
    topic: "Kinematics",
    answer: [
      {
        answerText: "A)  horizontal drift of ballon x(y): x = (a/2v₀)y²",
        isCorrect: true,
      },
      {
        answerText: "B)  total acceleration of ballon = av₀",
        isCorrect: true,
      },
      {
        answerText: "C)  tangential acceleration = a²v₀/√(v₀²+a²y²)",
        isCorrect: false,
      },
      {
        answerText: "D)  normal acceleration = av₀²/√(v₀²+a²y²)",
        isCorrect: true,
      },
    ],
    difficulty: "Hard",
    image: "",
  },
  {
    id: 17,
    type: "Multiple Correct",
    question:
      "If velocity of the particle is given by v=√x, where x denotes the position of the particle and initial particle was at x=4, then which of the following are incorrect:",
    topic: "Kinematics",
    answer: [
      {
        answerText: "A)  at t=2sec, the position of the particle is at x=9",
        isCorrect: false,
      },
      {
        answerText: "B)  particle acceleration at t=2sec, is 1m/s²",
        isCorrect: true,
      },
      {
        answerText:
          "C)  particle acceleration is 0.5m/s² throughout the motion",
        isCorrect: false,
      },
      {
        answerText:
          "D)  Particle will at some point go in negative direction from it's starting position.",
        isCorrect: true,
      },
    ],
    difficulty: "Hard",
    image: "",
  },
  {
    id: 18,
    type: "Multiple Correct",
    question: "Which of the following are correct:",
    topic: "Kinematics",
    answer: [
      {
        answerText:
          "A)  Average spped of particle in a given time is never less than the magnitude of average velocity",
        isCorrect: true,
      },
      {
        answerText:
          "B)  It is possible to have a situation in which |dv/dt| ≠ 0 but d|v|/dt = 0",
        isCorrect: true,
      },
      {
        answerText:
          "C)  the average velocity of a particle is zero in a time interval. It is possible that the instantaneous velocity is never zero in the interval.",
        isCorrect: true,
      },
      {
        answerText:
          "D)  Average velocity of a particle moving in a straight line is zero in a time interval. It is possible that the instantaneous velocity is never zero in the interval. (infinite acceleration are not allowed)",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
    image: "",
  },
  {
    id: 19,
    type: "Multiple Correct",
    question:
      "A ship 'A' is travelling due east at 10km/hr and at 9 am is 30km south-west of another ship 'B'. If 'B' travels at 15km/hr so as to intercept 'A' then which are correct:",
    topic: "Kinematics",
    answer: [
      {
        answerText: "A)  Direction of B is 28°",
        isCorrect: true,
      },
      {
        answerText: "B)  Direction of B is 56°",
        isCorrect: false,
      },
      {
        answerText: "C)  time of interception is 1.48 hr.",
        isCorrect: true,
      },
      {
        answerText: "D)  time of interception is 2.48 hr.",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
    image: "",
  },
  {
    id: 20,
    type: "Numerical",
    question:
      "A motorboat going downstream overcame a raft at point O. After an hour it turned back and met the raft again at a distance 6km from O. Find river velocity in terms of km/hr.",
    topic: "Kinematics",
    answer: 3,
    difficulty: "Medium",
    image: "",
  },
  {
    id: 21,
    type: "Multiple Correct",
    question:
      "A river 400m wide is flowing at a rate of 2m/s. A boat is sailing at a velocity of 10m/s with respect to water, in a direction perpendicular to the river. Which of the following are correct.",
    topic: "Kinematics",
    answer: [
      {
        answerText: "A)  time = 30s",
        isCorrect: false,
      },
      {
        answerText:
          "B)  Distance between the point directly opposite to the starting point and the point reached by the boat on the opposite bank is 80m",
        isCorrect: true,
      },
      {
        answerText:
          "C)  Distance between the point directly opposite to the starting point and the point reached by the boat on the opposite bank is 60m",
        isCorrect: false,
      },
      {
        answerText: "D)  time = 40s",
        isCorrect: true,
      },
    ],
    difficulty: "Medium",
    image: "",
  },
  {
    id: 22,
    type: "Multiple Correct",
    question:
      "A man standing on a road has to hold his umbrella at 30° with the vertical to keep the rain away. He throws the umbrella and starts running at 10km/hr. He finds that raindrops are hitting his head vertically. Which are correct:",
    topic: "Kinematics",
    answer: [
      {
        answerText: "A)  V₍ᵣ,g₎ = 10√3 km/hr",
        isCorrect: false,
      },
      {
        answerText: "B)  V₍ᵣ,m₎ = 10√3 km/hr",
        isCorrect: true,
      },
      {
        answerText: "C)  V₍ᵣ,g₎ = 20 km/hr",
        isCorrect: true,
      },
      {
        answerText: "D)  V₍ᵣ,m₎ = 40 km/hr",
        isCorrect: false,
      },
    ],
    difficulty: "Medium",
    image: "",
  },
];
