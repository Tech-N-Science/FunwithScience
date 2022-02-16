import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router";
import "./Calculator.css";
import limits1 from "../../../Images/limits.png

function Calculator() {
  let { topic } = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Continuity",
      details: [
        `If the following three requirements are met, a function f(x) is said to be continuous at a point x = a, in its domain:`,
        <br />,
        "1. f(a) exists (i.e. f(a) has a finite value)",
        <br />,
        "2. Limx→a f(x) exists (i.e. the right-hand limit = left-hand limit, and both are finite)",
        <br />,
        "3. Limx→a f(x) = f(a)",
      ],
      formula: "Prove LHS = RHS",
      process: [
        "The function f(x) is said to be continuous in the interval I = [x1,x2] if the three conditions mentioned above are satisfied for every point in the interval I.",
        <br />,
      ],
      example1: [
        " Let a function be defined as f(x) =",
        <br />,
        "5 – 2x for x < 1",
        <br />,
        "3 for x = 1",
        <br />,
        "x + 2 for x > 1",
        <br />,
        "Is this function continuous for all x?",
        <br />,
        <b>Answer </b>,
        "Since for x < 1 and x > 1, the function f(x) is defined by straight lines (that can be drawn continuously on a graph), the function will be continuous for all x ≠ 1. Now for x = 1, let us check all the three conditions:",
        <br />,
        "–> f(1) = 3 (given)",
        <br />,
        "–> Left-Hand Limit:",
        <br />,
        "=Lim",
        <sub>
          x→1<sup>−</sup>
        </sub>,
        " f(x)",
        <br />,
        "=Lim",
        <sub>
          x→1<sup>−</sup>
        </sub>,
        " (5–2x)",
        <br />,
        "=5–2×1",
        <br />,
        "=3",
        <br />,
      ],
      example2: [
        "–> Right-Hand Limit:",
        <br />,
        "=Lim",
        <sub>
          x→1<sup>+</sup>
        </sub>,
        " f(x)",
        <br />,
        "=Lim",
        <sub>
          x→1<sup>+</sup>
        </sub>,
        " (x+2)",
        <br />,
        "=1+2",
        <br />,
        "=3",
        <br />,
        "–> Lim",
        <sub>
          x→1<sup>-</sup>
        </sub>,
        " f(x)=Lim",
        <sub>
          x→1<sup>+</sup>
        </sub>,
        " f(x)=3=f(1)",
        <br />,
        "Thus all the three conditions are satisfied and the function f(x) is found out to be continuous at x = 1. Therefore, f(x) is continuous for all x.",
        <br />,
      ],
    },
    {
      topic: "Limits",
      details: `A limit is the value that a function (or sequence) approaches as the input (or index) approaches some value. Limits are essential to calculus and mathematical analysis, and are used to define continuity, derivatives, and integrals.`,
      formula:
        "Limit at a point: (x -> a) lim [( f(x)-f(a) ) / (x-a)] ",
      process: [
        "The limit of a function exists if and only if the left-hand limit is equal to the right-hand limit.And also the function must be defined and continuous in a given interval",
        <br />],
        example:[
          "Find the limit of the function 1/x at x -> a where a is 1.",
        <br />,
        <b>Solution: </b>,

        "Finding the RHL and LHL we conclude , both are defined and ",
        <br />,
        "LHL : (x -> 1)lim [1/x] = 1/0.9999999 = ~1",
        <br />,
        "RHL : (x -> 1)lim [1/x] = 1/1.0000001 = ~1",
        <br />,
        <b>1 </b>, <br/>,
        " Hence,the limit of function at x -> 1 is 1."

        ]
        
    },
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];

  //Continuity calculator
  const Continuity = () => {
    return (
      <>
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Algebra of Continuous Functions </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Property Name</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Addition Rules</td>
                <td>
                  <b>f(x) + g(x) is continuous at x = a</b>
                </td>
              </tr>

              <tr>
                <td>Subtraction Rules</td>
                <td>
                  <b>f(x) – g(x) is continuous at x = a</b>
                </td>
              </tr>

              <tr>
                <td>Multiplication Rules</td>
                <td>
                  <b>f(x)*g(x) is continuous at x = a</b>
                </td>
              </tr>

              <tr>
                <td>Division</td>
                <td>
                  <b>f(x)/g(x) is continuous at x = a; provided g(a) ≠0</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const Limit = () => {
    const [parameter,setparameter] = useState("");
    const [func, setfunc] = useState("");
   
    const [result, setResult] = useState(null);
    const reset = () => {
    setparameter("");
    setfunc("");
      setResult(null);
    };

    // const suby = y2 - y1;
    // const subx = x1 - x2;
    // const mul1 = x1 * y2;
    // const mul2 = x2 * y1;
    // const mul = mul1 - mul2;
   
    function compute() {
        let f = func

       
           f= f.split('^').join("**")
           
           f= f.split('sin').join("Math.sin")
           
           f= f.split('cos').join("Math.cos")
           
           f= f.split('tan').join("Math.tan")
           
           f= f.split('cosec').join("Math.cosec")
           
           f= f.split('sec').join("Math.sec")
           
           f= f.split('cot').join("Math.cot")
           
           f= f.split('e').join("Math.exp")
           
           f= f.split('log').join("Math.log")
           console.log(f)
        
        const exp = f.split('x').join(parseFloat(parameter))
        console.log(exp)
        return eval(exp)
    }
    function computewithvalue(value){
        let f = func

       
           f= f.split('^').join("**")
           
           f= f.split('sin').join("Math.sin")
           
           f= f.split('cos').join("Math.cos")
           
           f= f.split('tan').join("Math.tan")
           
           f= f.split('cosec').join("Math.cosec")
           
           f= f.split('sec').join("Math.sec")
           
           f= f.split('cot').join("Math.cot")
           
           f= f.split('e').join("Math.exp")
           
           f= f.split('log').join("Math.log")
           console.log(f)
        const exp = f.split('x').join(value)
        return eval(exp)
    }

    function canPlugin() {
        var at = compute()
        return at === at && Math.abs(at) !== Infinity;
    }

    function toInfinty() {
        if (parameter > 0) {
            var pos1 = Number.MAX_VALUE * 0.99999;
            var pos2 = Number.MAX_VALUE;
            var dif = pos2 - pos1;
            if (dif > 0) {
                return Infinity;
            } else {
                return -1 * Infinity;
            }
        } else {
            var pos1 = Number.MIN_VALUE;
            var pos2 = Number.MIN_VALUE * 0.99999;
            var dif = pos2 - pos1;
            if (dif < 0) {
                return Infinity;
            } else {
                return -1 * Infinity;
            }
        }
    }
    function round(num) {
        var factor = 100000000000000;
        return Math.round(num * factor) / factor;
    }

 const calculateLimit = () =>{
try{
    if (canPlugin()) {
        setResult( compute());
        }
        if (Math.abs(parameter) === Infinity) {
            setResult( toInfinty());
            return ""
        }
        var left1 = computewithvalue(parseFloat(parameter) - 0.000000000000001);
        var right1 = computewithvalue(parseFloat(parameter) + 0.000000000000001);
        if (Math.abs(left1 - right1) < 0.00001) {
            setResult( round((left1 + right1) / 2));
                return ""
        }
        
        setResult("Limit doesn't exist or function is invalid")
        return ""
} catch (e){
   console.log(e)
    setResult("Given function is invalid. Must be a single variable expression only.")
}

 }
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong> To find the limit of function</strong>
          
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="text">
          <Form.Text className="text">
            
              <strong>[Trigonometric values should be enclosed in brackets (Eg:- sin(x^2))]</strong>
              <br />
            </Form.Text>
            <div className="straight_calc">
              <form name="first">
                <div className="group">
                  <div className="coordinate">
                    <label>
                      Limit at x = 
                    </label>
                    <input
                      name="parameter"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setparameter(e.target.value)}
                      value={parameter}
                    />
                  </div>

                  <div className="coordinate">
                    <label>
                      Function<br/>[w.r.t x]
                    </label>
                    <input
                      name="function"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setfunc(e.target.value)}
                      value={func}
                    />
                  </div>
                </div>


              </form>
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp mb-5">
          <Button variant="primary" onClick={calculateLimit}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Limits</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Limit</th>
                <th className="row-2 row-name ">Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Limit of f(x) at x =&gt; a</td>
                <td>
                 <img src = {limits1} alt = "limit"/>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>

      </>
    );
  };
  //adding the calculators together
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Continuity":
        currentCall = Continuity();
        break;
      case "Limits":
        currentCall = Limit()
      default:
        break;
    }
    return currentCall;
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta name="description" content="{details.details}" />
          <meta
            name="keywords"
            content="Integration, calculator, Integration calculator, physics, Tech n science, technscience, tech and science"
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
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>

        <div className="Calculator__example">
          <h3>Example</h3>
          <div className="row">
            <div className="col-sm-6 col-lg-6 ">
              <p>{details.example1}</p>
            </div>

            <div className="col-sm-6 col-lg-6 ">
              <p>{details.example2}</p>
            </div>
          </div>
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
export default Calculator;
