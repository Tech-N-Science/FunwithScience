import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: "Permutation",
      details: `A permutation of a set is a loosely defined organisation of its members into a sequence or linear order, or a rearranging of its elements if the set is already sorted.
      The word "permutation" also refers to the act or process of changing the linear order of an ordered set.`,
      formula: "P = n!/(n-r)!",
      process:
        "To find the permutation, first we need to find the value of n factorial and n - r factorial, then we need to devide them.",
    },
    {
      topic: "Combination",
      details: `A combination is a mathematical technique for determining the number of possible arrangements in a group of objects where the order of the items is irrelevant. Selecting r objects out of the given n objects is given by using the factorials. It is denoted by nCr.`,
      formula: "C = n!/r!(n-r)!",
      process:
        "To calculate combinations, we will use the formula nCr = n! / (r! * (n - r)!), where n represents the number of items, and r represents the number of items being chosen at a time.",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Mass Energy Relation calculator
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
