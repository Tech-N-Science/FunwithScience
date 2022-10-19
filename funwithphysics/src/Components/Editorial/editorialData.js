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
    ## We know, ![](//tex.z-dn.net/?f=%5Cunderline%7B%5Cboxed%7B%5Cpink%7Bcos90%3D0%7D%7D%7D)
    ### thus,
    ### =cos0°×cos1× cos2°× cos3°....×cos89°× 0=0.
       `,
  },
  {
    type: "math",
    id: 1,
    content: `
    # Clearly, roots are 1, α, α2 , . . . αn-1 , where α\=cos2πn+isin2πn .
    ## The distance of the complex numbers represented by these roots from origin is 1. 
    ## i.e. all these points lie on a circle.
    ###    ⇒ They are non-collinear.
    ###    ⇒ They form a regular polygon of unit circum-radius.
    `,
  },
  {
    type: "physics",
    id: 0,
    content: `
    # The magnitude of resultant R of two vectors A and B is given by: R² = A² + B² + 2 ABCos(θ), where θ is angle between them.
    ## Here A = 5 units and B = 3 units.
    ## We know Cos(θ) has maximum value 1 which is at θ = 0⁰ and Cos(θ) has value -1 at 180⁰.
    ###  For θ = 0⁰  ⇒ R² = 5² + 3² + 2×3×5× Cos(0⁰) .
    ###    ⇒ R² = 25 + 9 + 2×3×5×1 = 64 .
    ###    ⇒ R = √64 = 8.
    ###  For θ = 180⁰  ⇒ R² = 5² + 3² + 2×3×5× Cos(0⁰) .
    ###    ⇒ R² = 25 + 9 - 2×3×5×1 = 4 .
    ###    ⇒ R = √4 = 2.
    `,
  },
  {
    type: "physics",
    id: 1,
    content: `
    # Multiplication of a vector A ⃗ by a scalar k is simply = kA ⃗.
    ##  Lets Multiply vector A ⃗ by scalar k = 1.5.
    ## A ⃗ .B ⃗ = .
    ###    ⇒ kA ⃗ = 1.5×A ⃗ =1.5×(10i ̂-8j ̂ ) .
    ###    ⇒ kA ⃗ = 15i ̂-12j ̂  = B ⃗.
    ###   OR
    ###    ⇒ k = B ⃗/A ⃗.
    ### It is correct to say that B ⃗=kA ⃗ .
    ### But vector division is not possible so B ⃗/A ⃗ =k is not correct.
    `,
  },
  {
    type: "physics",
    id: 2,
    content: `
    # Scalar Product of Two Vectors A ⃗ and B ⃗ is given by A.B = A₁×B₁ + A₂×B₂.
    ## Here A ⃗ = A₁i ̂  + A₂j ̂  +A₃k ̂  and B ⃗ = B₁i ̂ + B₂j ̂ +B₃k ̂ .
    ## .
    ###    ⇒ A ⃗ .B ⃗ = 1×2 + 1×(-3) = -1.
    ###    ⇒ Option (D) is False.
    `,
  },
  {
    type: "physics",
    id: 3,
    content: `
    # Using Newton's Third Equation of Motion (v)²=(v₀)²​+2.a.Δx.
    ## Velocity by which ball is thrown vertically up from the top of a tower be v₀.
    ## Let Apply Equation for height 4.5m above top of Tower.
    ## Here a = acceleration due to gravity(g) = -9.8m/s² and velocity at this point be v₁ m/s.
    ##    ⇒ (v₁)²=(v₀)²​+2×(-9.8)×4.5 = (v₀)² - 88.2 .
    ## Let Apply Equation for height 4.5m below Tower.
    ## Velocity at this point be v₂ m/s.
    ###    ⇒ (v₂)²=(v₀)²​+2×(-9.8)×(-4.5) = (v₀)² + 88.2 .
    ### Given, At 4.5m above the top of the tower its speed is exactly half of that it will have at 4.5m below the top of the tower.
    ###    ⇒ v₁ = v₂/2 or (v₁)² = 0.25×(v₂)².
    ###    ⇒ (v₀)² - 88.2 = 0.25×((v₀)² + 88.2)².
    ###    ⇒ (v₀)² = 147.
    ### Applying this law, for maximum height ball can reach from Top of Tower.
    ### At this Point, velocity will be zero.
    ###    ⇒ (v)²=(v₀)²​+2.a.Δx.
    ###    ⇒ 0 = 147 ​+ 2.×(-9.8)×Δx.
    ###    ⇒ 147 = 2.×(-9.8)×Δx.
    ###    ⇒ Δx = 7.5m.
    ###    ⇒ Maximum height from Ground  = 40 + 7.5 = 47.5m.
    `,
  },
  {
    type: "physics",
    id: 4,
    content: `
    ## Let Equal distance = sm, time for first period be T₁ s. 
    ##     ⇒s = 3×T₁ m.
    ## Let Equal time for second period be T₂.
    ##     ⇒ s = 4.5×T₂ + 7.5×T₂ = 12×T₂.
    ## so, 3×T₁ = 12×T₂.
    ##     ⇒ T₁ = 4×T₂.
    ## Average Speed = (Total Distance / Total Time).
    ###    ⇒ Average Speed = (s+s)/(T₁ + T₂+ T₂).
    ###    ⇒ Average Speed = (2×s)/(4×T₂ + T₂+ T₂).
    ###    ⇒ Average Speed = (4×s)/(6×T₂).
    ###    ⇒ Average Speed = (4×12×T₂)/(6×T₂).
    ###    ⇒ Average Speed = 4m/s.
    `,
  },
  {
    type: "physics",
    id: 7,
    content: `
    # Equation of Motion of a Particle is give x =sin (ωt+φ) .
    ## Particle is give x₁ =sin (ωt+φ).
    ## Particle is give x₂ =sin (ωt+φ).
    ## At a Particular instant, separation between two particles is given by,.
    ##    ⇒ |x₁−x₂|=A[sin(ωt+φ₁)−sin(ωt+φ₂)].
    ##    ⇒ ∵[sin(C) − sin(D) = 2cos((C+D)/2)sin((C−D)/2)]
    ##    ⇒ |x₁−x₂|=2Acos(ωt + (φ₁+φ₂)/2)×sin((φ₁−φ₂)/2)
    ## Given maximum distance between two particle is A√2
    ## ∴To maximize |x₁−x₂|, we choose
    ## cos(ωt+(φ₁+φ₂)/2)=1
    ###    ⇒ A√2=2Asin((φ₁−φ₂)/2)
    ###    ⇒sin((φ₁−φ₂)/2)=1/√2
    ###    ⇒sin((φ₁−φ₂)/2)=sin(π/4)
    ###    ⇒(φ₁−φ₂)/2=π/4
    ###    ⇒φ₁−φ₂=π/2
    `,
  },

  {
    type: "physics",
    id: 21,
    content: `
    # .
    ## Velocity of the man vₘ running with  is 10i ̂  
    ## when man run he found that rain falling verticaly hitting his head
    ## Let velocity of rain with respact to man V₍ᵣ,m₎ = -vj ̂ 
    ###    ⇒ velocity of rain vᵣ = V₍ᵣ,m₎ + vₘ = -vj ̂  + 10i ̂ 
    ###    ⇒  tan30° = 10/v
    ###    ⇒  v = 10√3
    ### we gat vᵣ = 10i ̂ -10√3j ̂  
    ### V₍ᵣ,m₎ = 10√3 km/hr. Option(B) correct.
    ### magnitude we get V₍ᵣ,g₎ = 20 km/hr = √(10² + (10√3)²) = 20 km/hr, option(D) correct.

    `,
  },
  {
    type: "physics",
    id: 22,
    content: `
    # Tension in the cable of the elevator is equal to weight of the elevator,
    ##  Implies net force on the system is zero.
    ## Net acceleration of the system will = 0.
    ###    ⇒ elevator is moving up or down with uniform speed. 
    ###    ⇒ Option C & D are correct.
    
    `,
  },
  {
    type: "physics",
    id: 26,
    content: `
    # we have,  .
    ## T−mg=ma   ⇒  T=m(g+a)
    ## The acceleration is downward
    ###    ⇒ T= 1000/50*(9.8−1.2).
    ###    ⇒ T=0.43N

    `,
  },
  {
    type: "physics",
    id: 32,
    content: `
    # The person exert Force F constantly in a fixed direction .
    ## Particle in constant circular motion of radius r and uniform speed v, 
    ###    ⇒ Other force whose resultant varies in magnitude and direction also act on the particle.
    ###    ⇒ Option(B) correct.
    ###    ⇒ The resultant of F and other force has to have constant magnitude  but varying direction.
    ###    ⇒ The magnitude and direction of the other force has to change from point to point on circle.
    ###    ⇒ Option(D) correct.

    `,
  },
];
