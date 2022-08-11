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
];
