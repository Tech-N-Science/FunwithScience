import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router";
import "./Calculator.css";

function Calculator() {
  let { topic } = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Trigonometric Functions",
      details: [
        "Trigonometric functions is used to find the value of unknown angle or side of a right angle triangle.",
        <br />,
        "There are three basic trigonometric functions such as Sine, Cosine and Tangent.",
      ],
      formula: [
        "sin θ = Perpendicular / Hypotenuse",
        <br />,
        "cos θ = Base / Hypotenuse",
        <br />,
        "tan θ = Perpendicular / Base",
        <br />,
        "cot θ = Base / Perpendicular OR 1 / tan θ",
        <br />,
        "sec θ = Hypotenuse / Base OR 1 / cos θ",
        <br />,
        "cosec θ = Hypotenuse / Perpendicular OR 1 / sin θ",
        <br />,
      ],
      process: [
        "Using the formulas we can find values of trigonometric functions ",
        <br />,
      ],
      example1: [
        " Find the value of  sin 105° degrees.",
        <br />,
        <b>Answer</b>,
        <br />,
        "sin 105° can be written as sin (60° + 45°) which is similar to sin (A + B)",
        <br />,
        "We know that, the formula for sin (A + B) = sin A × cos B + cos A × sin B",
        <br />,
      ],
      example2: [
        "Therefore, sin 105° = sin (60° + 45°) = sin 60° × cos 45° + cos 60° × sin 45°",
        <br />,
        "= √3/2 × 1/√2 + 1/2 × 1/√2",
        <br />,
        "= √3/2√2 + 1/2√2",
        <br />,
        "= (√3+1)/2√2 OR 0.9659 (approx)",
        <br />,
      ],
    },
    {
      topic: "Inverse Trigonometry",
      details: [
        `Inverse trigonometric ratios are the inverse of the trigonometric functions.They operate on the ratio of the sides of the triangle to find out the measure of the angles of the  triangle.
         The inverse of a function is denoted by the superscript "-1" of the given trigonometric function. 
         For example, the inverse of the cosine function will be cos⁻¹. 
         The inverse of the trigonometric function is also written as an "arc"-trigonometric function, for example, arcsin will be the inverse of the sine function.`,
      ],
      formula: [
        `sin`,
        <sup>-1</sup>,
        `[Opposite/Hypotenuse] =  θ`,
        <br />,
        `cos`,
        <sup>-1</sup>,
        `[Base/Hypotenuse] =  θ`,
        <br />,
        `tan`,
        <sup>-1</sup>,
        `[Opposite/Base] =  θ`,
        <br />,
        `cosec`,
        <sup>-1</sup>,
        `[Hypotenuse/Opposite] =  θ`,
        <br />,
        `sec`,
        <sup>-1</sup>,
        `[Hypotenuse/Base] =  θ`,
        <br />,
        `cot`,
        <sup>-1</sup>,
        `[Base/Opposite] =  θ`,
        <br />,
      ],
      process: [
        "Using the formulae, we can find Angles corresponding to a Trigonometric Function",
        <br />,
      ],
      example1: [
        "If sin(θ) is equal to 1/2, find sin(θ) + cos(θ)",
        <br />,
        "The easiest way to solve this question is to first find the value of θ",
        <br />,
        `Taking Inverse function of sine, we get θ=sin`,
        <sup>-1</sup>,
        "(1/2)=π/6",
        <br />,
        `Now, sin(θ)+cos(θ)=sin(π/6)+cos(π/6) ,which on simplification gives 1.366`,
      ],
    },
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];

  //TrigonometricFunctions calculator
  const TrigonometricFunctions = () => {
    const [result, setResult] = useState(null);
    const [choice, setChoice] = useState("sin");
    const [value, setValue] = useState(null);
    function handleChange(e) {
      reset();
      setChoice(e.target.value);
      choiceData();
    }
    const CalTrigonometryFunctions = () => {
      let res;
      if (choice === "sin") {
        res = Math.sin((value * Math.PI) / 180);
      } else if (choice === "cos") {
        res = Math.cos((value * Math.PI) / 180);
      } else if (choice === "tan") {
        res = Math.tan((value * Math.PI) / 180);
      } else if (choice === "cosec") {
        res = Math.cosec((value * Math.PI) / 180);
      } else if (choice === "sec") {
        res = Math.sec((value * Math.PI) / 180);
      } else if (choice === "cot") {
        res = Math.cot((value * Math.PI) / 180);
      }
      setResult(res);
    };
    function reset() {
      setResult(null);
      setValue(null);
    }
    const choiceData = () => {
      if (choice === "sin")
        return {
          name: "sin θ",
          disable: true,
        };
      else if (choice === "cos") {
        return {
          name: "cos θ",
        };
      } else if (choice === "tan") {
        return {
          name: "tan θ",
        };
      } else if (choice === "cosec") {
        return {
          name: "cosec θ",
        };
      } else if (choice === "sec") {
        return {
          name: "sec θ",
        };
      } else if (choice === "cot") {
        return {
          name: "cot θ",
        };
      }
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the trigonometric function</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="sin">sin</option>
              <option value="cos">cos</option>
              <option value="tan">tan</option>
              <option value="cosec">cosec</option>
              <option value="sec">sec</option>
              <option value="cot">cot</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of θ </Form.Label>
            <Form.Control
              onChange={(e) => setValue(e.target.value)}
              type="number"
              placeholder={"Enter the value of θ"}
              value={value === null ? "" : value}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of {choiceData().name}</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={CalTrigonometryFunctions}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>

        <br></br>

        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Sum and Difference Identities </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Identity</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sin(x+y)</td>
                <td>
                  <b>sin(x).cos(y)+cos(x).sin(y)</b>
                </td>
              </tr>

              <tr>
                <td>sin(x–y)</td>
                <td>
                  <b>sin(x).cos(y)–cos(x).sin(y)</b>
                </td>
              </tr>

              <tr>
                <td>cos(x+y)</td>
                <td>
                  <b>cosx.cosy–sinx.siny</b>
                </td>
              </tr>

              <tr>
                <td>cos(x–y)</td>
                <td>
                  <b>cosx.cosy+sinx.siny</b>
                </td>
              </tr>

              <tr>
                <td>tan(x+y)</td>
                <td>
                  <b>[tan(x)+tan(y)]/[1-tan(x)tan(y)]</b>
                </td>
              </tr>

              <tr>
                <td>tan(x-y)</td>
                <td>
                  <b>[tan(x)-tan(y)]/[1+tan(x)tan(y)]</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Pythagorean Identities</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Identity</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sin2 x + cos2 x</td>
                <td>
                  <b>1</b>
                </td>
              </tr>

              <tr>
                <td>1+tan2 x</td>
                <td>
                  <b>sec2 x</b>
                </td>
              </tr>

              <tr>
                <td>cosec2 x</td>
                <td>
                  <b>1 + cot2 x</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Trigonometric Ratios</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Trigonometric Functions</th>
                <th className="row-2 row-name ">0 °</th>
                <th className="row-2 row-name ">30 °</th>
                <th className="row-2 row-name ">45 °</th>
                <th className="row-2 row-name ">60 °</th>
                <th className="row-2 row-name ">90 °</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sin θ</td>
                <td>0</td>
                <td>1/2</td>
                <td>1/√2</td>
                <td>√3/2</td>
                <td>1</td>
              </tr>

              <tr>
                <td>cos θ</td>
                <td>1</td>
                <td>√3/2</td>
                <td>1/√2</td>
                <td>1/2</td>
                <td>0</td>
              </tr>

              <tr>
                <td>tan θ</td>
                <td>0</td>
                <td>1/√3</td>
                <td>1</td>
                <td>√3</td>
                <td>∞</td>
              </tr>

              <tr>
                <td>cosec θ</td>
                <td>∞</td>
                <td>2</td>
                <td>√2</td>
                <td>2/√3</td>
                <td>1</td>
              </tr>

              <tr>
                <td>sec θ</td>
                <td>1</td>
                <td>2/√3</td>
                <td>√2</td>
                <td>2</td>
                <td>∞</td>
              </tr>

              <tr>
                <td>cot θ</td>
                <td>∞</td>
                <td>√3</td>
                <td>1</td>
                <td>1/√3</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  //Inverse Trignometry Calcualtor
  const InvTrig = () => {
    const [x, setX] = useState(null);
    const [choice, setChoice] = useState("sin-Inverse");
    const [result, setResult] = useState(null);
    function reset() {
      setX(null);
      setResult(null);
      setChoice(null);
    }
    const calcResult = () => {
      if (choice == "sin-Inverse") setResult(57.29578 * Math.asin(x));
      else if (choice == "cos-Inverse") setResult(57.29578 * Math.acos(x));
      else if (choice == "tan-Inverse") setResult(57.29578 * Math.atan(x));
      else if (choice == "cosec-Inverse")
        setResult(57.29578 * Math.asin(1 / x));
      else if (choice == "cot-Inverse") setResult(57.29578 * Math.atan(1 / x));
      else if (choice == "sec-Inverse") setResult(57.29578 * Math.acos(1 / x));
    };
    const handleChange = (e) => {
      reset();
      setChoice(e.target.value);
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the Inverse-Trigonometric function</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="sin-Inverse">sin</option>
              <option value="cos-Inverse">cos</option>
              <option value="tan-Inverse">tan</option>
              <option value="cosec-Inverse">cosec</option>
              <option value="sec-Inverse">sec</option>
              <option value="cot-Inverse">cot</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>To find the {choice}, Enter the following values</strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of x</Form.Label>
            <Form.Control
              onChange={(e) => setX(Number(e.target.value))}
              type="number"
              placeholder={"Enter the value of x"}
              value={x === null ? "" : x}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value of θ (in degrees)</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result}
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
        <br />

        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Sum Identities </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Identity</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  sin <sup>-1</sup>(x) + cos<sup>-1</sup>(x)
                </td>
                <td>
                  <b> π/2</b>
                </td>
              </tr>

              <tr>
                <td>
                  tan<sup>-1</sup>(x) + cot<sup>-1</sup>(x)
                </td>
                <td>
                  <b> π/2</b>
                </td>
              </tr>

              <tr>
                <td>
                  sec <sup>-1</sup>(x) + cosec<sup>-1</sup>(x)
                </td>
                <td>
                  <b>π/2</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Complement Identities</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Identity</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  sin <sup>-1</sup>(-x)
                </td>
                <td>
                  <b>
                    -sin <sup>-1</sup>(x)
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  cos<sup>-1</sup>(-x)
                </td>
                <td>
                  <b>
                    π-cos<sup>-1</sup>(x)
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  tan<sup>-1</sup>(-x)
                </td>
                <td>
                  <b>
                    -tan<sup>-1</sup>(x)
                  </b>
                </td>
              </tr>
              <tr>
                <td>
                  cot<sup>-1</sup>(-x)
                </td>
                <td>
                  <b>
                    π-cot<sup>-1</sup>(x)
                  </b>
                </td>
              </tr>
              <tr>
                <td>
                  sec<sup>-1</sup>(-x)
                </td>
                <td>
                  <b>
                    π-sec<sup>-1</sup>(x)
                  </b>
                </td>
              </tr>
              <tr>
                <td>
                  cosec<sup>-1</sup>(-x)
                </td>
                <td>
                  <b>
                    -cosec<sup>-1</sup>(x)
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Reciprocal Identities</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Identity</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  sin <sup>-1</sup>(1/x)
                </td>
                <td>
                  <b>
                    cosec <sup>-1</sup>(x)
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  cos<sup>-1</sup>(1/x)
                </td>
                <td>
                  <b>
                    sec<sup>-1</sup>(x)
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  tan<sup>-1</sup>(1/x)
                </td>
                <td>
                  <b>
                    cot<sup>-1</sup>(x)
                  </b>
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
      case "Trigonometric Functions":
        currentCall = TrigonometricFunctions();
        break;
      case "Inverse Trigonometry":
        currentCall = InvTrig();
        break;
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
            content="Trigonometry, calculator, Trigonometry calculator, physics, Tech n science, technscience, tech and science"
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
