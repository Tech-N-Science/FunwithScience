import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import "./Calculator.css";
import geometry_pair from "../../../Images/geometry_pair.png";
import geometry_tan from "../../../Images/geometry_tan.png";
import { useParams } from "react-router-dom";
var Fraction = require("fractional").Fraction;

function Calculator() {
  let { topic } = useParams();
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
    {
      topic: "Parabola",
      details:
        "A parabola is a type of conic section, which is an open curve formed by the intersection of a plane and a right circular cone. It can be defined as the set of points which are equidistant from a fixed point (the focus) and a fixed line (the directrix). The axis of a parabola is the line which passes through the focus and is perpendicular to the directrix. The vertex is the point where the axis crosses the parabola.",
      formula: [
        " If vertex : (0,0) & focus : (a,0) then y²=4ax",
        <br />,
        " If vertex : (0,0) & focus : (-a,0) then y²=-4ax",
        <br />,
        " If vertex : (0,0) & focus : (0,a) then x²=4ay",
        <br />,
        " If vertex : (0,0) & focus : (0,-a) then x²=-4ay",
      ],
      process: [
        "The equation of parabola is given by",
        <br />,
        "(y-β)² = 4a(x-α) whose vertex is (α,β) and axis is parallel to the x-axis",
        <br />,
        "(x-α)² = 4a(y-β) whose vertex is (α,β) and axis is parallel to the y-axis",
        <br />,
        <b>E.g. </b>,
        "Find the equation of the parabola given the vertex(2,3) and point(-1,6).",
        <br />,
        <b>Solution: </b>,
        <br />,
        "To find the equation of the parabola using the vertex and a point provided we can use :",
        <br />,
        <>
          <b>Note: </b>
          <span>
            Here we are assuming that it is a vertical parabola then the
            equation is given by
          </span>
        </>,
        <br />,
        "y = a(x-h)²+k",
        <br />,
        "where (h,k) is the vertex.",
        <br />,
        "Substituting the given vertex in the above formula. ",
        <br />,
        "y = a(x-2)²+3",
        <br />,
        "Knowing that (-1,6) lies on the parabola we can solve for 'a' by, ",
        <br />,
        "6 = a(-1-2)²+3",
        <br />,
        "6 = 9a+3",
        <br />,
        "a = 1/3",
        <br />,
        "Hence the required equation is : y = 1/3(x-2)²+3",
      ],
    },
  ];

  const page = Topics.filter((data) => data.topic === topic);
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

  const Parabola = () => {
    const [h, setH] = useState("");
    const [k, setK] = useState(null);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setH("");
      setK("");
      setX("");
      setY("");

      setResult(null);
    };
    const nume = y - k;
    const denome = (x - h) * (x - h);
    const a = new Fraction(nume / denome);

    const calcParabola = () => {
      let equation = `y=${a.toString()}(x-${h})² + ${k}`;
      setResult(equation);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong> To find the equation of Parabola</strong>
              <br />
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="text">
            <div className="straight_calc">
              <form name="first">
                <div className="group">
                  <div className="coordinate">
                    <label>h</label>
                    <input
                      name="x1"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setH(e.target.value)}
                      value={h}
                    />
                  </div>

                  <div className="coordinate">
                    <label>k</label>
                    <input
                      name="x2"
                      type="text"
                      className="easynumeric"
                      onChange={(e) => setK(e.target.value)}
                      value={k}
                    />
                  </div>
                </div>

                <div className="group clearfix">
                  <div className="coordinate">
                    <label>x</label>
                    <input
                      name="y1"
                      className="easynumeric"
                      value={x}
                      onChange={(e) => setX(e.target.value)}
                    />
                  </div>

                  <div className="coordinate">
                    <label>y</label>
                    <input
                      name="y2"
                      type="text"
                      className="easynumeric"
                      value={y}
                      onChange={(e) => setY(e.target.value)}
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
          <Button variant="primary" onClick={calcParabola}>
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
                  <h3> Parabola </h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Form:</strong>
                </th>
                <th>
                  <strong>
                    y<sup>2</sup> = 4ax
                  </strong>
                  <p>(Right-hand)</p>
                </th>
                <th>
                  <strong>
                    y<sup>2</sup> = &#x2013; 4ax
                  </strong>
                  <p>(Left-hand)</p>
                </th>
                <th>
                  <strong>
                    x<sup>2</sup> = 4ay
                  </strong>
                  <p>(Upward)</p>
                </th>
                <th>
                  <strong>
                    x<sup>2</sup> = &#x2013; 4ay{" "}
                  </strong>
                  <p>(Downward)</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Focus:</td>
                <td>(a, 0)</td>
                <td>(-a, 0)</td>
                <td>(0, a)</td>
                <td>(0, -a)</td>
              </tr>
              <tr>
                <td>Axis:</td>
                <td>y = 0</td>
                <td>y = 0</td>
                <td>x = 0</td>
                <td>x = 0</td>
              </tr>
              <tr>
                <td>Directrix:</td>
                <td>x = &#x2013; a</td>
                <td>x = a</td>
                <td>y = &#x2013; a</td>
                <td>y = a</td>
              </tr>
              <tr>
                <td>Vertex:</td>
                <td>(0, 0)</td>
                <td>(0,0)</td>
                <td>(0, 0)</td>
                <td>(0, 0)</td>
              </tr>
              <tr>
                <td>Focal distance of point (x,y)</td>
                <td>x+a</td>
                <td>a-x</td>
                <td>y+a</td>
                <td>a-y</td>
              </tr>
              <tr>
                <td>Tangent at the vertex:</td>
                <td>x = 0</td>
                <td>x = 0</td>
                <td>y = 0</td>
                <td>y = 0</td>
              </tr>
              <tr>
                <td>Length of latus rectum:</td>
                <td>4a</td>
                <td>4a</td>
                <td>4a</td>
                <td>4a</td>
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
                  <h3>Properties of Parabola</h3>
                </tr>
              </section>

              <tr>
                <th>
                  <strong>Equation:</strong>
                </th>
                <th>
                  <strong>
                    y<sup>2</sup> = 4ax
                  </strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tangent</td>
                <td>
                  <b>
                    yy<sub>1</sub> = 2a(x+x<sub>1</sub>)
                  </b>
                </td>
              </tr>
              <tr>
                <td>Normal</td>
                <td>
                  <b>
                    {" "}
                    (y-y<sub>1</sub>)=(-y<sub>1</sub>/2a)(x-x<sub>1</sub>)
                  </b>
                </td>
              </tr>
              <tr>
                <td>Chord of contact</td>
                <td>
                  <b>
                    yy<sub>1</sub>=2x(x+x<sub>1</sub>){" "}
                  </b>
                </td>
              </tr>
              <tr>
                <td>Parametric Coordinates</td>
                <td>
                  <b>
                    (at<sup>2</sup>,2at)
                  </b>
                </td>
              </tr>
              <tr>
                <td>Pole and Polar</td>
                <td>
                  <b>
                    {" "}
                    yy<sub>1</sub>=2x(x+x<sub>1</sub>)
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
      case "Parabola":
        currentCall = Parabola();
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
