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
];
