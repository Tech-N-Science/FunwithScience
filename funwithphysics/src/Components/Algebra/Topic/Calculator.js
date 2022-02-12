import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router";
import "./Calculator.css";
import ResetPassword from "../../Forgot_Password/resetpassword";
import { useEffect } from "react";

function Calculator() {
  let { topic } = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Permutation",
      details: `A permutation of a set is a loosely defined organisation of its members into a sequence or linear order, or a rearranging of its elements if the set is already sorted.
      The word "permutation" also refers to the act or process of changing the linear order of an ordered set.`,
      formula: "nPr = n!/(n-r)!",
      process: [
        "To find the permutation, first we need to find the value of n factorial and n - r factorial, then we need to devide them.",
        <br />,
      ],
      example: [
        <span>
          10<b style={{ fontSize: 25 + "px" }}>P</b>5 = 10!/(10-5)! = 30240
        </span>,
      ],
    },
    {
      topic: "Combination",
      details: `A combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`,
      formula: "C = n!/r!(n-r)!",
      process: [
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
        <br />,
      ],
      example: [
        <span>
          10<b style={{ fontSize: 25 + "px" }}>C</b>5 = 10!/5!(10-5)! = 252
        </span>,
      ],
    },
    {
      topic: "Progression",
      details: [
        `An Arithmetic Progression is a sequence of numbers in which the difference between any two subsequent terms is always the same.`,
        <br />,
        <br />,
        "The sequence of numbers is called a Geometric Progression if the ratio of two subsequent terms is always the same.",
      ],
      formula: ["AP = a + d * (n-1)", <br />, "GP = a * r ^ (n-1)"],
      process: [
        "To find the Arithmetic progression of nᵗʰ term, we use the formula a + d * (n-1) where, 'a' is the first term of the series and 'd' is the common difference between any two numbers in the series found by taking the difference. To find the Geometric progression of nᵗʰ term, we use the formula a + r ⁽ⁿ⁻¹⁾ where, 'a' is the first term of the series and 'r' is the common difference between any two numbers in the series found by taking the ratio.",
        <br />,
      ],
      example: [
        "2,4,6,8.. is an AP because difference between any two consecutive terms in the series (common difference) is same (4 – 2 = 6 – 4 = 8 – 6 = 2).",
        <br />,
        "If ‘a’(2) is the first term and ‘d’(2) is the common difference,",
        <br />,
        "nth term of an AP = a + (n-1) d",
        <br />,
        "5th term of the AP = 2 + (5-1) * 2 = 10",
        <br />,
        <b>E.g. </b>,
        "2,4,8,16 is a GP because ratio of any two consecutive terms in the series (common difference) is same (4 / 2 = 8 / 4 = 16 / 8 = 2)",
        <br />,
        "If ‘a’(2) is the first term and ‘r’(2) is the common ratio,",
        <br />,
        "nth term of a GP = a rn-1",
        <br />,
        "5th term of the GP = 2 * 2 ^ (5-1) = 32",
      ],
    },
    {
      topic: "Statistics",
      details: `Statistics is the branch of science that studies and develops methods for gathering, analysing, interpreting, and interpreting empirical data.`,
      formula: "",
      process: [
        "To calculate the mean, median and mode, we have to use the formulae giving below",

        <br />,
      ],
      example: [
        "Numbers given: 20 30 60 20 10 40 80 90",
        <br />,
        "Mean = Sum of all items/Total no. of items = 350/8 = 43.75",
        <br />,
        "Since total number of items is 6(even), Median = (n / 2)th = 3rd item = 30",
        <br />,
        "Mode = 20 (as 20 occured most number of times in the given set of numbers)",
        <br />,
        "Standar deviation is calculated by deviations of each data point from the mean, and square the result of each whole divided by total number of samples minus 1.Hence it is , = 29.73",
        <br />,
        "Variance is square of standard deviation.Hence it is = 883.92",
        <br />,
      ],
    },
    {
      topic: "Complex Numbers",
      details: [
        "A complex number is an element of a number system that includes the real numbers as well as a specific element denoted i known as the imaginary unit, and satisfying the equation i² = -1. Furthermore, every complex number may be written as a + bi, where a and b are real values. René Descartes referred i as an imaginary number since no real number satisfies the above equation. The set of complex numbers is represented by the symbol C.",
      ],
      formula: [
        "Addition = (x1 + x2) + i (y1 + y2)",
        <br />,
        "Polar form = r(cosθ + isinθ)",
        <br />,
        "Cartesian form = a + bi",
      ],
      process: [
        `A number of the form x + iy, where x and y are real numbers, is called a complex number, x is called real part and y is called imaginary part of the complex number i.e. Re(Z) = x and Im(Z) = y.`,
        <br />,

        "A complex number Z = x + iy is a purely real if its imaginary part is 0, i.e. Im(z) = 0 and purely imaginary if its real part is 0 i.e. Re (z) = 0.",
        <br />,
      ],
      example: [
        "z₁ = 2 + 3i is first complex number equation, ",

        "z₂ = 5 + 10i is second complex number equation",
        <br />,
        "Sum of two complex numbers is = (2 + 5) + i(3 + 10)",
        <br />,
        "Sum is = 7 + 13i",
        <br />,
        <b>E.g. </b>,
        "Polar Form: √17(cos(1.816) + isin(1.816))",
        <br />,
        "For Cartesian Form:",
        <br />,
        "z  =  (√17 × cos(1.816))  +  i(√17 × sin(1.816))",
        <br />,
        "z  =  -1.0009...  +  i3.9997...",
        <br />,
        "Which can be rounded to.",
        <br />,
        "z  =  -1 + i4",
      ],
    },
    {
      topic:"Exponents",
      details:[
        "Exponentiation refers to repeated multiplication of a given number with itself certain number of times.Square-Root of a given number is defined as the factor of the number which when multiplied with itself gives the given number.Cube-Root of a given number is the number which when multiplied thrice with itself gives the given number."
      ],
      formula:[
        "(y)^n=(y)*(y)*(y)*(y)...n times"
      ],
      process:[
        "To find x raised to the power n we need to multiply x with itself n times."
      ],
      example:[
        "2 raised to the power 3 is simply 2*2*2=8",
        <br/>,
        "Square Root of 16 is a number(say a) such that a*a=16 ,which on computation gives 4.",
        <br/>,
        "Cube root of 125 is a number (say b) such that b*b*b=125, which on computation gives 5."
      ]
    }
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];

  //Permutationcalculator
  const Permutation = () => {
    const [n, setn] = useState(null);
    const [r, setr] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setn(null);
      setr(null);
      setResult(null);
    };
    function factorial(num) {
      if (num === 0) {
        return 1;
      }
      return num * factorial(num - 1);
    }
    const calcPermutation = () => {
      let permutation = factorial(n) / factorial(n - r);
      setResult(permutation);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the Permutation, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value in a Set (n)</Form.Label>
            <Form.Control
              onChange={(e) => setn(e.target.value)}
              type="number"
              placeholder={"Enter the value of n"}
              value={n === null ? "" : n}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value in Sub-Set (r)</Form.Label>
            <Form.Control
              onChange={(e) => setr(e.target.value)}
              type="number"
              placeholder={"Enter the value of r"}
              value={r === null ? "" : r}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcPermutation}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Combination
  const Combination = () => {
    const [n, setn] = useState(null);
    const [r, setr] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setn(null);
      setr(null);
      setResult(null);
    };
    function factorial(num) {
      if (num === 0) {
        return 1;
      }
      return num * factorial(num - 1);
    }
    const calcCombination = () => {
      let Combination = factorial(n) / (factorial(r) * factorial(n - r));
      setResult(Combination);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the Permutation, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value in a Set (n)</Form.Label>
            <Form.Control
              onChange={(e) => setn(e.target.value)}
              type="number"
              placeholder={"Enter the value of n"}
              value={n === null ? "" : n}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Value in Sub-Set (r)</Form.Label>
            <Form.Control
              onChange={(e) => setr(e.target.value)}
              type="number"
              placeholder={"Enter the value of r"}
              value={r === null ? "" : r}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcCombination}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Pogression Calculator - AP/GP
  const Progression = () => {
    const [result, setResult] = useState(null);
    const [choice, setChoice] = useState("AP");
    const [n, setN] = useState(null);
    const [fr, setFR] = useState(null);
    const [nth, setNth] = useState(null);
    const [sum, setSum] = useState(null);
    function handleChange(e) {
      reset();
      setChoice(e.target.value);
      choiceData();
    }
    const calcResult = () => {
      let res, s;
      if (choice === "AP") {
        res = Number(n) + Number(fr * (nth - 1));
        s = (nth / 2) * (Number(2 * n) + Number(fr * (nth - 1)));
      } else if (choice === "GP") {
        res = Number(n) * Number(fr ** (nth - 1));
        s = (n * (fr ** nth - 1)) / (fr - 1);
      }
      setResult(res);
      setSum(s);
    };
    function reset() {
      setResult(null);
      setN(null);
      setFR(null);
      setNth(null);
      setSum(null);
    }
    const choiceData = () => {
      if (choice === "AP")
        return {
          name: "Arithmetic Progression",
          quantities: ["First Number", "Common diffrence"],
          disable: true,
        };
      else if (choice === "GP") {
        return {
          name: "Geometric Progression",
          quantities: ["First Number", "Common ratio"],
        };
      }
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="AP">Arethmetic Progression</option>
              <option value="GP">Geometric Progression</option>
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
            <Form.Label>{choiceData().quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => setN(e.target.value)}
              type="number"
              placeholder={"Enter the First Number"}
              value={n === null ? "" : n}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>{choiceData().quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => setFR(e.target.value)}
              type="number"
              placeholder={"Enter the " + choiceData().quantities[1]}
              value={fr === null ? "" : fr}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>nth Number to obtain</Form.Label>
            <Form.Control
              onChange={(e) => setNth(e.target.value)}
              type="number"
              placeholder={"Enter the nth Number to obtain"}
              value={nth === null ? "" : nth}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Number at {nth ? nth : "nth"} position</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>
              Sum of numbers till {nth ? nth : "nth"} position
            </Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={sum === null ? "Result" : sum}
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
  };

//Exponential Calculator
  const Exponents = () => {
    const [result, setResult] = useState(null);
    const [choice, setChoice] = useState("Power");
    const [choiceData, setChoiceData] = useState
    ({name: "Power",
    quantities: ["Base", "Exponent"],
    disabled: false});
    const [x, setX] = useState(null);
    const [n, setN] = useState(null);
  
    useEffect(() => {
      if (choice === "Power") {
        return setChoiceData({
          name: "Power",
          quantities: ["Base", "Exponent"],
          disabled: false
        });
      } else if (choice === "SquareRoot") {
        setN(0.5);
        setChoiceData({
          name: "Square-Root",
          quantities: ["Base", "Exponent"],
          disabled: true
        });
      } else if (choice === "CubeRoot") {
        setN(0.3333);
        setChoiceData({
          name: "Cube-Root",
          quantities: ["Base", "Exponent"],
          disabled: true
        });
      }
    }, [choice]);
  
    useEffect(() => {}, [choice, x, n, result]);
  
    const calcResult = () => {
      let res = 1;
      if (choice == "Power") 
      res=Math.pow(x,n);
      else if (choice == "SquareRoot") res = Math.sqrt(x);
      else res = Math.cbrt(x);
  
      setResult(res);
    };
  
    const handleChange = (e) => {
      reset();
      setChoice(e.target.value);
    };
  
    function reset() {
      setResult(null);
      setX(null);
      if(choice=="Power")
      setN(null);
    }
  
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="Power">Power</option>
              <option value="SquareRoot">Square Root</option>
              <option value="CubeRoot">Cube Root</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData.name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData.quantities[0]}</Form.Label>
            <Form.Control
              onChange={(e) => setX(e.target.value)}
              type="number"
              placeholder={"Enter the Base"}
              value={x === null ? "" : x}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>{choiceData.quantities[1]}</Form.Label>
            <Form.Control
              onChange={(e) => setN(e.target.value)}
              type="number"
              placeholder={"Enter the Exponent"}
              value={n === null ? "" : n}
              disabled={choiceData.disabled}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " "}
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
  };








  // Statistics calculator
  const Statistics = () => {
    let numArr = [];
    let statOBJ = {
      sort: [],
      count: 0,
      sum: 0,
      largest: 0,
      smallest: 0,
      mean: 0,
      median: 0,
      mode: 0,
      stddeviation: "",
      variance: "",
    };
    const [number, setNum] = useState(0);
    const [statData, setStatData] = useState(statOBJ);

    const calcStat = () => {
      numArr = number.split(/[\s,]+/);
      numArr = numArr.sort();
      statOBJ.sort = numArr; //sorted numbers
      statOBJ.count = numArr.length; //Number of items
      statOBJ.smallest = numArr[1];
      numArr.map((item, index) => {
        statOBJ.sum += Number(item); //Sum of all items
        return <></>;
      });
      statOBJ.largest = numArr[statOBJ.count - 1]; //largest of all items
      statOBJ.smallest = numArr[0]; //smalles of all items
      statOBJ.mean = (statOBJ.sum / statOBJ.count).toFixed(2); //mean or average of all
      let med = 0;
      if (statOBJ.count % 2 === 0) {
        med = statOBJ.count / 2;
      } else {
        med = (statOBJ.count + 1) / 2;
      }
      statOBJ.median = numArr[med - 1]; //median of all items
      let repeatCount = 1;
      let modeIndex = 0;
      let maxRepeat = 0;
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === numArr[i + 1]) {
          repeatCount = repeatCount + 1;
          if (repeatCount > maxRepeat) {
            maxRepeat = repeatCount;
            modeIndex = i;
          }
        } else {
          repeatCount = 0;
        }
      }
      statOBJ.mode = numArr[modeIndex]; //mode of all items

      let stddevnum = 0;
      for (let i = 0; i < numArr.length; i++) {
        stddevnum += (numArr[i] - statOBJ.mean) ** 2;
      }
      if (stddevnum > 0) {
        statOBJ.stddeviation = Math.sqrt(stddevnum / (numArr.length - 1));
        statOBJ.variance = stddevnum / (numArr.length - 1);
      } else {
        statOBJ.stddeviation = Math.sqrt(
          (-1 * stddevnum) / (numArr.length - 1)
        );
        statOBJ.variance = (-1 * stddevnum) / (numArr.length - 1);
      }
    };

    const resetStat = () => {
      setNum(0);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>Enter the following values</strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter numbers sparated by a space or comma</Form.Label>
            <Form.Control
              onChange={(e) => setNum(e.target.value)}
              type="text"
              placeholder={"Enter the First Number"}
              value={number === 0 ? "" : number}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Sorted Data</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.count === 0
                  ? "Numbers in ascending order"
                  : statData.sort
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Total number of items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.count === 0 ? "Count" : statData.count}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Sum of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.sum === 0 ? "Sum" : statData.sum}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Smallest of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.smallest === 0 ? "Smallest" : statData.smallest
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Largest of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.largest === 0 ? "Largest" : statData.largest
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Mean(average) of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.mean === 0 ? "Mean" : statData.mean}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Median of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.median === 0 ? "Median" : statData.median}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Mode of all the items</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={statData.mode === 0 ? "Mode" : statData.mode}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Standard deviation</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.stddeviation === ""
                  ? "Standard deviation"
                  : statData.stddeviation.toFixed(2)
              }
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Variance</Form.Label>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                statData.variance === ""
                  ? "Variance"
                  : statData.variance.toFixed(2)
              }
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button
            variant="primary"
            onClick={() => {
              calcStat();
              setStatData(statOBJ);
            }}
          >
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => resetStat()} type="reset">
            Reset
          </Button>
        </div>
        &nbsp; &nbsp;
        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Statistical Formulae</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Measures</th>
                <th className="row-2 row-name ">Equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mean</td>
                <td>
                  <b>
                    Σx<sub>i</sub> / N
                  </b>{" "}
                  , where N is total number of values
                </td>
              </tr>
              <tr>
                <td>Median</td>
                <td>
                  <b>
                    <div>
                      ((N+1)/2)<sup>th</sup> term, if N is odd
                    </div>
                    <div>
                      ((N/2)<sup>th</sup> term + (N/2+1)<sup>th</sup>term) / 2 ,
                      if N is even
                    </div>
                  </b>
                </td>
              </tr>
              <tr>
                <td>Mode</td>
                <td>
                  <b>The value which appears most frequently</b>
                </td>
              </tr>
              <tr>
                <td>Variance</td>
                <td>
                  <b>
                    (Σ(x - Mean)<sup>2</sup>) / N-1
                  </b>
                </td>
              </tr>
              <tr>
                <td>Standard Deviation</td>
                <td>
                  <b>
                    &radic; (Σ(x - Mean)<sup>2</sup>) / N-1
                  </b>
                </td>
              </tr>

              <tr>
                <td>Range</td>
                <td>
                  <b>Highest Value - Lowest Value in series</b>
                </td>
              </tr>
              <tr>
                <td>Mean Deviation</td>
                <td>
                  <b>
                    (Σ|x<sub>i</sub> - Mean|) / N
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };
  

  //Complex Number Calculator
  const ComplexNumbers = () => {
    const [result, setResult] = useState({ x: null, y: null });
    const [cartesianResult, setCartesianResult] = useState({
      x: null,
      y: null,
    });
    const [choice, setChoice] = useState("Add");
    const [valueX, setX] = useState({ x1: null, x2: null });
    const [valueY, setY] = useState({ y1: null, y2: null });
    const [polarθ, setPolarθ] = useState(null);

    const [polarR, setPolarR] = useState(null);

    function handleChange(e) {
      reset();
      setChoice(e.target.value);
      choiceData();
    }

    // Function for converting polar form into cartesian form
    const convertPolar = () => {
      let r, x, y;
      r = Number(polarR);
      x = Number(polarθ);
      y = Number(polarθ);

      x = Math.round(r * Math.cos((x * Math.PI) / 180));
      y = Math.round(r * Math.sin((y * Math.PI) / 180));

      setCartesianResult({ x: x, y: y });
    };

    function reset2() {
      setCartesianResult({ x: null, y: null });
      setPolarR(null);
      setPolarθ(null);
    }

    const calcComplexNumber = () => {
      let x, y, x1, x2, y1, y2;
      // Assigning values for code reabability
      x1 = Number(valueX.x1);
      x2 = Number(valueX.x2);
      y1 = Number(valueY.y1);
      y2 = Number(valueY.y2);

      if (choice === "Add") {
        x = x1 + x2;
        y = y1 + y2;
      } else if (choice === "Sub") {
        x = x1 - x2;
        y = y1 - y2;
      } else if (choice === "Product") {
        x = x1 * x2;
        y = y1 * y2;
      } else if (choice === "Divide") {
        x = Number((x1 * x2 + y1 * y2) / (x2 * x2 + (y1 + y2)));
        y = Number((x1 * x2 - y1 * y2) / (x2 * x2 + (y1 + y2)));
      }
      setResult({ x: x, y: y });
    };
    function reset() {
      setResult({ x: null, y: null });
      setX({ x1: null, x2: null });
      setY({ y1: null, y2: null });
    }
    const choiceData = () => {
      if (choice === "Add")
        return {
          name: "Addition",
          disable: true,
        };
      else if (choice === "Sub") {
        return {
          name: "Subtraction",
        };
      } else if (choice === "Product") {
        return {
          name: "Multiplication",
        };
      } else if (choice === "Div") {
        return {
          name: "Divide",
        };
      }
    };
    return (
      <>
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <Form.Label>Select the type of algebraic calculation</Form.Label>
            <Form.Control
              as="select"
              className="select-custom-res"
              onChange={(e) => handleChange(e)}
            >
              <option value="Add">Addition</option>
              <option value="Sub">Subtraction</option>
              <option value="Product">Multiplication</option>
              <option value="Div">Division</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                To find the {choiceData().name} of two Complex Numbers, Enter
                the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>

          {/* Equation One */}
          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                type="text"
                className="form-control"
                placeholder="Value of First real number(x1)"
                name="X1"
                value={valueX.x1 === null ? "" : valueX.x1}
                onChange={(e) => setX({ x1: e.target.value })}
              />

              <span className="group-txt">+ i</span>

              <input
                type="text"
                className="form-control"
                placeholder="Value of Second Real Number(y1)"
                name="Y1"
                value={valueY.y1 === null ? "" : valueY.y1}
                onChange={(e) => setY({ y1: e.target.value })}
              />
            </div>
          </Form.Group>

          {/* Equation two */}
          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                type="text"
                className="form-control"
                placeholder="Value of First real number(x2)"
                name="X2"
                value={valueX.x2 === null ? "" : valueX.x2}
                onChange={(e) => setX({ ...valueX, x2: e.target.value })}
              />

              <span className="group-txt">+ i</span>

              <input
                type="text"
                className="form-control"
                placeholder="Value of Second Real Number(y2)"
                name="Y2"
                value={valueY.y2 === null ? "" : valueY.y2}
                onChange={(e) => setY({ ...valueY, y2: e.target.value })}
              />
            </div>
          </Form.Group>

          {/* Result */}

          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder={result.x === null ? "Result of X" : result.x}
              />

              <span className="group-txt">+ i</span>

              <input
                readOnly
                type="text"
                className="form-control"
                placeholder={result.y === null ? "Result of Y" : result.y}
              />
            </div>
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcComplexNumber}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>

        {/* Conversion of Polar form to Cartesian form */}
        <Form>
          {/* dropdown */}
          <Form.Group className="mb-4" controlId="choice">
            <br /> <br />
            <Form.Label>
              <strong>Conversion of Polar Form into Cartesian Form</strong>
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                type="text"
                className="form-control"
                placeholder="Value of r"
                name="r"
                value={polarR === null ? "" : polarR}
                onChange={(e) => setPolarR(e.target.value)}
              />

              <span className="group-txt">θ =</span>
              <input
                type="text"
                className="form-control"
                placeholder="Value of θ"
                name="cosq"
                value={polarθ === null ? "" : polarθ}
                onChange={(e) => setPolarθ(e.target.value)}
              />
            </div>
          </Form.Group>
          {/* Result */}

          <Form.Group className="mb-4">
            <div className="complex-num-group">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder={
                  cartesianResult.x === null
                    ? "Cartesian Form of X"
                    : cartesianResult.x
                }
              />

              <span className="group-txt"></span>

              <input
                readOnly
                type="text"
                className="form-control"
                placeholder={
                  cartesianResult.y === null
                    ? "Cartesian Form of Y"
                    : cartesianResult.y
                }
              />
            </div>
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={convertPolar}>
            Calculate
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset2()} type="reset">
            Reset
          </Button>
        </div>

        <br></br>

        <div className="formula-table mb-4">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Properties of Addition </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Property Name</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Commutative</td>
                <td>
                  <b>z1 + z2 = z2 + z1</b>
                </td>
              </tr>

              <tr>
                <td>Associative</td>
                <td>
                  <b>z1 + (z2 + z3) = (z1 + z2) + z3</b>
                </td>
              </tr>

              <tr>
                <td>Additive identity</td>
                <td>
                  <b>z + 0 = z = 0 + z</b>
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
                  <h3>Properties of Multiplication</h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Property Name</th>
                <th className="row-2 row-name ">Representation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Commutative</td>
                <td>
                  <b>z1z2 = z2z1</b>
                </td>
              </tr>

              <tr>
                <td>Associative</td>
                <td>
                  <b>z1(z2z3) = (z1z2)z3</b>
                </td>
              </tr>

              <tr>
                <td>Multiplicative identity</td>
                <td>
                  <b>z . 1 = z = 1 . z</b>
                </td>
              </tr>

              <tr>
                <td>Distributive law</td>
                <td>
                  <b>z1(z2 + z3) = z1z2 + z1z3</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br></br>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                <tr>
                  <h3>Algebraic Identities </h3>
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
                  (z1 + z2)<sup>2</sup>
                </td>
                <td>
                  <b>
                    z1<sup>2</sup> + 2z1z2 + z2<sup>2</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  (z1 - z2)<sup>2</sup>
                </td>
                <td>
                  <b>
                    z1<sup>2</sup> - 2z1z2 + z2<sup>2</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  (z1 + z2)<sup>3</sup>
                </td>
                <td>
                  <b>
                    z1<sup>3</sup> + 3z1<sup>2</sup>z2 + 3z1z2<sup>2</sup> + z2
                    <sup>3</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  (z1 - z2)<sup>3</sup>
                </td>
                <td>
                  <b>
                    z1<sup>3</sup> - 3z1<sup>2</sup>z2 + 3z1z2<sup>2</sup> - z2
                    <sup>3</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>(z1 + z2)(z1 - z2)</td>
                <td>
                  <b>
                    z1<sup>2</sup> - z2<sup>2</sup>
                  </b>
                </td>
              </tr>

              <tr>
                <td>
                  (z1 +z2 + z3)<sup>2</sup>
                </td>
                <td>
                  <b>
                    z1<sup>2</sup> + z2<sup>2</sup> + z3<sup>2</sup> + 2z1z2 +
                    2z2z3 +2z3z1
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Permutation":
        currentCall = Permutation();
        break;
      case "Combination":
        currentCall = Combination();
        break;
      case "Progression":
        currentCall = Progression();
        break;
      case "Statistics":
        currentCall = Statistics();
        break;
      case "Complex Numbers":
        currentCall = ComplexNumbers();
        break;
      case "Exponents":
        currentCall=Exponents();
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
            content="Algebra, calculator, Algebra calculator, physics, Tech n science, technscience, tech and science"
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
          <p>{details.example}</p>
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
