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
    ### =cos0°×cos1× cos2°× cos3°....×cos89°× 0=0
       `,
  },
  {
    type: "math",
    id: 1,
    content: `
    # Clearly, roots are 1, α, α2 , . . . αn-1 , where α\=cos2πn+isin2πn .
    ## The distance of the complex numbers represented by these roots from origin is 1 
    ## i.e. all these points lie on a circle.
    ###    ⇒ They are non-collinear.
    ###    ⇒ They form a regular polygon of unit circum-radius
    `,
  },
  {
    type: "math",
    id: 2,
    // content is markdown format string
    content: `
    ##Let Rehman's present age =x yrs.
    ###3 yrs ago, Rehman's age =x-3 yrs
    ###5 yrs hence, his age will be x+5 yrs
    ###1/(x-3) + 1/(x+5) = 1/3
    ###(x+5+x-3)/(x+5)(x-3) = 1/3
    ###x^2 + 2x - 15 = 6x + 6
    ###x^2 - 4x - 21 = 0
    ###by using middle term splitting
    ###x^2 - 7x + 3x - 21 = 0
    ###x(x-7) + 3(x-7) = 0
    ###(x+3)(x-7) = 0
    ###x = -3 , 7
    ###we know that age cannot be negative, so we don't consider -3 , 
    ##hence, Rehman's present age is 7 years.
       `,
  },
  {
    type: "math",
    id: 3,
    content: `
    ###The multiple of 4 which comes just after 10 is 12
    ###The multiple of 4 which comes just before 250 is 248
    ###Therefore, all the multiples of 4 between 10 and 250 are: 12, 16, 20, 24,.........248
    ###Now, this forms an Arithmetic Progression wherein:
    ###First Term, a: 12,
    ###Common Difference, d = 4 ,
    ###Last Term, an = 248
    ###We need to find the number of terms (n) in the progression which ends at 248.
    ###Using general term formula of Arithmetic Progression:
    ###an = a + (n - 1)(d)
    ###248 = 12 + (n - 1)(4)
    ###248 - 12 = 4 (n - 1)
    ###236 = 4 (n - 1)
    ###59 = n - 1
    ###n = 60
    ###Therefore, there are 60 terms, which means there are 60 multiples of 4 between 10 and 250.
    ##Thus, 60 multiples of 4 lie between 10 and 250.
    `,
  },
  
];
