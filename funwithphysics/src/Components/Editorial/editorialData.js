// contains editorial of all types question
// each editorial has a type ==> physics or math or ...
// each editorial has the same id of the question
//the content of the editorial is in a markdown format
export const editorialData = [
  {
    type: "math",
    id: 0,
    // content is markdown format string
    content: `
    ## Let say first number be x, so the second number will be 27-x,
    ### Therefore, the product of two numbers
    ###x(27 - x) = 182
    ###⇒ x2 - 27x - 182 = 0
    ###⇒ x2 - 13x - 14x + 182 = 0
    ###⇒ x(x - 13) -14(x - 13) = 0
    ###⇒ (x - 13)(x -14) = 0
    ###Thus, either, x = -13 = 0 or x - 14 = 0
    ###⇒ x = 13 or x = 14
    ###Therefore, if first number = 13, then second number = 27 - 13 = 14

    ###And if first number = 14, then second number = 27 - 14 = 13
    
    ##Hence, the numbers are 13 and 14.
       `,
  },
  {
    type: "math",
    id: 1,
    content: `
    ## According to Pythagoras theorem, In a right-angled triangle the square of the hypotenuse side is equal to the sum of squares of the other two sides.
    ### H^2 = P^2 + B^2
    ### Substituting the value of H, P and B in above we get,
    ### 13^2 = (x-7)^2 + x^2
    ### ⇒169 = x^2 + 49 - 14x + x^2
    ### ⇒169 - 49 = 2x^2 - 14x
    ### ⇒2x^2 - 14x - 120=0
    ##By splitting middle term in the above expression we have,
    ### ⇒x^2- 7x- 60 = 0
    ### ⇒x^2- 12x+5x- 60 = 0
    ### ⇒x(x- 12)+5(x- 12) = 0
    ### ⇒(x- 12)(x+5) = 0
    ### ⇒ x = 12, x =- 5
    ### Now, x=-5 is not possible because the side of a triangle cannot be negative, therefore x=12 is the answer.
    ### Hence, the base of the triangle is B = 12cm and the height of the triangle H is x-7 = 12-7 = 5cm
    ## Therefore, the other two sides of the triangle are 12cm and 5cm.
    `,
  },
  {
    type: "physics",
    id: 8,
    content: `
    ### The net charge on the capacitor is always zero because the two plates have the charges +Q and -Q,
    ### When we say that the charge on the capacitor is Q, we consider the magnitude of the charge.
    ## Hence the net flux through the closed surface, enclosing the capacitor is zero. [ϕ=Q/ε0=0] gauss's theorem.
    `,
  },
  {
    type: "physics",
    id: 9,
    content: `
    ### A charge that is moving in a magnetic field experiences a force perpendicular to its own velocity and to the magnetic field.
    ### So, moving charge will generate a magnetic field.
    ### Electric field originate from electric charge, or from time-varing magnetic field.
    ### So, moving charge will generate a electric field.
    ### Hence, a moving charge produces an electric as well as magnetic field.
    `,
  },
  {
    type: "physics",
    id: 10,
    content: `
    ### W.C. Röntgen reported the discovery of X-rays in December 1895 after seven weeks of assiduous work during which he had studied the properties of this new type of radiation able to go through screens of notable thickness. He named them X-rays to underline the fact that their nature was unknown.
    `,
  },
  {
    type: "physics",
    id: 11,
    content: `
    ### Arsenic (As) is a pentavalent impurity. An n-type semiconductor is formed when germanium is doped with pentavalent impurity.
    `,
  },
  {
    type: "physics",
    id: 12,
    content: `
    ### The atomic number and mass number of a nucleus is defined as the number of protons and the sume of number of protons and neutrons present in the nucleus, respectively. Since in the decay, neither the automic number nor the mass number chnage, it cannot be a beta-decay (release of electron, proton or neutron).
    ## Hence, the particle emitted can only be a photon.
    `,
  },
  {
    type: "physics",
    id: 13,
    content: `
    ### When light rays from a distant star pass through the earth's atmosphere, they change their direction continuously due to the varying optical density of the atmosphere. Also the changing physical conditions of the atmosphere affect the amount (brightness) of starlight entering our eyes. Thus, stars appear to twinkle in the night sky.
    `,
  },
  {
    type: "physics",
    id: 14,
    content: `
    ### The molecules move in all possible directions in an ideal gas at equilibrium. Since momentum is a vector quantity for every direction of motion of the molecules, there exists an opposite direction of motion of the other.
    ## Hence, the average momentum is zero for an ideal gas at equilibrium.
    `,
  },
  {
    type: "physics",
    id: 15,
    content: `
    ### Albert Einstein, in his theory of special relativity, determined that the laws of physics are the same for all non-accelerating observers, and he showed that the speed of light within a vacuum is the same no matter the speed at which an observer travels.
    ### As a result, he found that space and time were interwoven into a single continuum known as space-time. Events that occur at the same time for one observer could occur at different times for another.
    `,
  }
  
];
