import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import "./Calculator.css";
import geometry_pair from "../../../Images/geometry_pair.png";
import geometry_tan from "../../../Images/geometry_tan.png";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: "Straight Line",
      details: `A straight line is an infinitely long line with no bends. A straight line can also be constructed between two locations, but both ends stretch to infinity. It might be horizontal, vertical, or inclined. If we draw an angle between any two locations on a straight line, we will always get a 180-degree angle.`,
      formula:
        "Two point form: (y2 - y1)x + (x1 - x2)y - (x1 * y2) + (x2 * y1) = 0 ",
      process: [
        "To find the equation of line using the two-point formula we will be needing co-ordinates of two points.",
        <br />,
        <b>E.g. </b>,
        "Find the equation of a line passing through (-2, 4) and (3, 1).",
        <br />,
        <b>Solution: </b>,

        "Substituting the coordinates in the above two-point formula",
        <br />,
        "(1-4)x + (-2-3)y - (-2*1) + (3*4) = 0",
        <br />,
        "-3x + (-5)y - (-2) + (12) = 0",
        <br />,
        <b>3x + 5y -14=0 </b>,
        " Hence, this is the required equation of a line passing through the given points.",
      ],
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //Mass Energy Relation calculator
  const StraightLine = () => {
    const [x1, setX1] = useState("");
    const [x2, setX2] = useState(null);
    const [y1, setY1] = useState(null);
    const [y2, setY2] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setX1("");
      setX2("");
      setY1("");
      setY2("");

      setResult(null);
    };

    const suby = y2 - y1;
    const subx = x1 - x2;
    const mul1 = x1 * y2;
    const mul2 = x2 * y1;
    const mul = mul1 - mul2;
    const calcStraightLine = () => {
      let equation = `(${suby}x) + (${subx}y) - (${mul}) = 0`;
      setResult(equation);
    };

    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong> To find the equation of straight line</strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="text">
            <div className="straight_calc">
              <form name="first">
                <div className="group">
                  <div className="coordinate">
                    <label>
                      X<sub>1</sub>
                    </label>
                    <input
                      name="x1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setX1(e.target.value)}
                      value={x1}
                    />
                  </div>

                  <div className="coordinate">
                    <label>
                      X<sub>2</sub>
                    </label>
                    <input
                      name="x2"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setX2(e.target.value)}
                      value={x2}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate">
                    <label>
                      Y<sub>1</sub>
                    </label>
                    <input
                      name="y1"
                      className="easynumeric"
                      value={y1}
                      onChange={(e) => setY1(e.target.value)}
                    />
                  </div>

                  <div className="coordinate">
                    <label>
                      Y<sub>2</sub>
                    </label>
                    <input
                      name="y2"
                      type="text"
                      className="easynumeric"
                      value={y2}
                      onChange={(e) => setY2(e.target.value)}
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
          <Button variant="primary" onClick={calcStraightLine}>
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
                  <h3>Straight Lines </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  "> Straight Lines</th>
                <th className="row-2 row-name ">Equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equation of a Straight Line</td>
                <td>
                  <b>ax + by + c = 0 </b>
                </td>
              </tr>
              <tr>
                <td>General form or Standard Form</td>
                <td>
                  <b>y = mx + c</b>
                </td>
              </tr>
              <tr>
                <td>Intercept Form</td>
                <td>
                  <b> x/a+ b/y =1</b>
                </td>
              </tr>
              <tr>
                <td>Point form</td>
                <td>
                  <b> y – y1 = m(x – x1 )</b>
                </td>
              </tr>
              <tr>
                <td>Point-Point form(Two-point form)</td>
                <td>
                  <b>(x - x1)/(x2 - x1) = (y - y1)/(y2 - y1)</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="formula-table">
          <table className="formulae">
            <thead>
              <section className="m-2">
                {" "}
                <tr>
                  <h3>Pair of Straight Lines </h3>
                </tr>
              </section>

              <tr>
                <th className="row-1 row-ID  ">Pair of Straight Lines</th>
                <th className="row-2 row-name ">Equation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard form</td>
                <td>
                  <b>
                    ax<sup>2</sup> + by<sup>2</sup> + 2hxy + 2gx + 2fy + c = 0{" "}
                  </b>
                </td>
              </tr>
              <tr>
                <td>Passing through Origin</td>
                <td>
                  <b>
                    {" "}
                    ax<sup>2</sup> + by<sup>2</sup> + 2hxy = 0
                  </b>
                </td>
              </tr>
              <tr>
                <td>Angle between two lines</td>
                <td>
                  <b>
                    <img
                      style={{ height: "3.5rem" }}
                      src={geometry_tan}
                      alt="angle_of_intersectioin"
                    />{" "}
                  </b>
                </td>
              </tr>
              <tr>
                <td>Point of intersection</td>
                <td>
                  <b>
                    {" "}
                    <img
                      style={{ height: "2.5rem" }}
                      src={geometry_pair}
                      alt="point_of_intersection"
                    />
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
      case "Straight Line":
        currentCall = StraightLine();
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
            content="Geometry, calculator, Geometry calculator, physics, Tech n science, technscience, tech and science"
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
