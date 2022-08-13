import React, { useState, useRef } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router";
import "./Calculator.css";
import { useEffect } from "react";
import Solution from "../../Solution/Solution";

function Calculator() {
  let { topic } = useParams();
  // topics_data
  const Topics = [
    {
      topic: "Determinants",
      details:
        "A determinant is a scalar value which is obtained using a square matrix. Determinants are used to find adjoint and inverse of a matrix. Other important uses include solving linear equations and capturing linear transformations effects. It is mainly calculated by adding the product of elements and their co-factors.",
      formula: "",
      process: [
        "1. Set a sqaure matrix.",
        <br />,
        <br />,
        "2. Convert the square matrix to row canonical form or a upper triangular form. To do so, one must use elementary row operations.",
        <br />,
        <br />,
        "3. The final result is calculated by multiplying the main diagonal elements of the matrix.",
      ],
      example1: [
        "Let the given sqaure matrix be : ",
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>2</td>
                <td>7</td>
                <td>10</td>
              </tr>
              <tr>
                <td>3</td>
                <td>9</td>
                <td>11</td>
              </tr>
            </tbody>
          </table>
        </div>,
        <br />,
        <br />,
        "1) Eliminate elements in the 1st column under the 1st element",
        <br />,
        "⇒ R2 = R2 - 2 * R1",
        <br />,
        "⇒ R3 = R3 - 3 * R1",
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>0</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>0</td>
                <td>3</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>,
      ],
      example2: [
        "2) Eliminate elements in the 2st column under the 2nd element",
        <br />,
        "⇒ R3 = R3 - 1 * R1",
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>0</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>-2</td>
              </tr>
            </tbody>
          </table>
        </div>,
        <br />,
        <br />,
        <br />,
        <center>⇒ Δ = 1 x 3 x (-2) = -6 </center>,
      ],
    },
    {
      topic: "Inverse of a Matrix",
      details:
        "The inverse of a matrix is another matrix which on multiplication with the given matrix gives the multiplicative identity. The matrix whose determinant is non-zero and for which the inverse matrix can be calculated is called an invertible matrix.",
      formula: (
        <>
          A · A<sup>-1</sup> = A<sup>-1</sup>· A = I,
          <br />
          where I is an identity matrix{" "}
        </>
      ),
      process: [
        "We would be finding inverse of a matrix using Gauss-Jordan elimination method :",
        <br />,
        <br />,
        "1) Set a square matrix. Append identity matrix of the same dimension to its right",
        <br />,
        "2) Reduce the matrix on the left to identity matrix using elementary row operations for the whole matrix",
        <br />,
        "3) Inverse of the matrix will be the matrix on the right",
      ],
      example1: [
        "Let the given sqaure matrix be : ",
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>2</td>
                <td>7</td>
                <td>10</td>
              </tr>
              <tr>
                <td>3</td>
                <td>9</td>
                <td>11</td>
              </tr>
            </tbody>
          </table>
        </div>,
        <br />,
        <br />,
        "1) Determinant of matrix, Δ = -6.  Δ ≠ 0, hence inverse exists.",
        <br />,
        <br />,
        "2) Set the augmented matrix :",
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>7</td>
                <td>10</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>3</td>
                <td>9</td>
                <td>11</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>,
        <br />,
        <br />,
        "3) Make the element in the 1st col except 1st element 0",
        <br />,
        "⇒ R2 = R2 - 2 * R1",
        <br />,
        "⇒ R3 = R3 - 3 * R1",
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>3</td>
                <td>4</td>
                <td>-2</td>
                <td>1</td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>3</td>
                <td>2</td>
                <td>-3</td>
                <td>0</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>,
        <br />,
        "4) Make the pivot element of 2nd col 1",
        <br />,
        <>
          ⇒ R2 = R2 * <sup>1</sup>&frasl;<sub>3</sub>
        </>,
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>
                  <sup>4</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>-2</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>1</sup>&frasl;<sub>3</sub>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>3</td>
                <td>2</td>
                <td>-3</td>
                <td>0</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>,
      ],
      example2: [
        "5) Make the element of 2nd col 0 except 2nd element",
        <br />,
        "⇒ R1 = R1 - 2 * R2",
        <br />,
        "⇒ R3 = R3 - 3 * R2",
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>0</td>
                <td>
                  <sup>1</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>7</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>-2</sup>&frasl;<sub>3</sub>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>
                  <sup>4</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>-2</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>1</sup>&frasl;<sub>3</sub>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>-2</td>
                <td>-1</td>
                <td>-1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>,
        <br />,
        <br />,
        "6) Make the pivot element of 3nd col 1",
        <br />,
        <>
          ⇒ R3 = R3 * <sup>-1</sup>&frasl;<sub>2</sub>
        </>,
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>0</td>
                <td>
                  <sup>1</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>7</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>-2</sup>&frasl;<sub>3</sub>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>
                  <sup>4</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>-2</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>1</sup>&frasl;<sub>3</sub>
                </td>
                <td>0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>
                  <sup>1</sup>&frasl;<sub>2</sub>
                </td>
                <td>
                  <sup>1</sup>&frasl;<sub>2</sub>
                </td>
                <td>
                  <sup>-1</sup>&frasl;<sub>2</sub>
                </td>
              </tr>
            </tbody>
          </table>
        </div>,
        <br />,
        <br />,
        "7) Make the element of 3rd col 0 except 3rd element",
        <br />,
        <>
          ⇒ R1 = R1 - <sup>1</sup>&frasl;<sub>3</sub> * R3
        </>,
        <br />,
        <>
          ⇒ R2 = R2 - <sup>4</sup>&frasl;<sub>3</sub> * R3
        </>,
        <br />,
        <br />,
        <div className="matrix">
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>
                  <sup>13</sup>&frasl;<sub>6</sub>
                </td>
                <td>
                  <sup>-5</sup>&frasl;<sub>6</sub>
                </td>
                <td>
                  <sup>1</sup>&frasl;<sub>6</sub>
                </td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>
                  <sup>-4</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>-1</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>2</sup>&frasl;<sub>3</sub>
                </td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>
                  <sup>1</sup>&frasl;<sub>2</sub>
                </td>
                <td>
                  <sup>1</sup>&frasl;<sub>2</sub>
                </td>
                <td>
                  <sup>-1</sup>&frasl;<sub>2</sub>
                </td>
              </tr>
            </tbody>
          </table>
        </div>,
        <br />,
        <br />,
        <center>
          ⇒ Inverse of the given matrix :
          <table>
            <tbody>
              <tr>
                <td>
                  <sup>13</sup>&frasl;<sub>6</sub>
                </td>
                <td>
                  <sup>-5</sup>&frasl;<sub>6</sub>
                </td>
                <td>
                  <sup>1</sup>&frasl;<sub>6</sub>
                </td>
              </tr>
              <tr>
                <td>
                  <sup>-4</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>-1</sup>&frasl;<sub>3</sub>
                </td>
                <td>
                  <sup>2</sup>&frasl;<sub>3</sub>
                </td>
              </tr>
              <tr>
                <td>
                  <sup>1</sup>&frasl;<sub>2</sub>
                </td>
                <td>
                  <sup>1</sup>&frasl;<sub>2</sub>
                </td>
                <td>
                  <sup>-1</sup>&frasl;<sub>2</sub>
                </td>
              </tr>
            </tbody>
          </table>
        </center>,
      ],
    },
  ];

  const page = Topics.filter((data) => data.topic === topic);
  const details = page[0];
  const ref = useRef(null);

  //Determinant Calculator
  const determinantCalculator = () => {
    const [x, setx] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const [value, setValue] = useState([[]]);
    const [fractions, setFractions] = useState([[[]]]);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(null);

    // scrolls to apt postion whenever our result gets updates
    useEffect(() => {
      console.log(ref.current);
      var element = ref.current;
      var header = document.getElementById("targetElement");
      console.log(header);
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({
        top: offsetPosition,
      });
    }, [answer]);

    // adds proper suffix (th, nd, rd, st) tp the numbers
    const addSuffix = (number) => {
      if (number >= 11 && number <= 19) {
        return "th";
      }

      if (number % 10 == 1) {
        return "st";
      }

      if (number % 10 == 2) {
        return "nd";
      }

      if (number % 10 == 3) {
        return "rd";
      }

      return "th";
    };

    //resets everything to original state
    const reset = () => {
      setx(null);
      setAnswer(null);
      setResult(null);
    };

    //function to find highest common factor
    const hcf = (x, y) => {
      if (x % y == 0) {
        return y;
      }

      return hcf(y, x % y);
    };

    //calculates final result
    const calculateResult = () => {
      let dim = parseInt(x);
      var isComplete = true;
      var posSign = true;

      //storing user input as fractions
      const handleFractionChange = (row, column, num, denom) => {
        let copy = [...fractions];
        copy[row][column][0] = num;
        copy[row][column][1] = denom;
        setFractions(copy);
      };

      //main function responsible for finding determinant
      const algorithm = () => {
        let copy = [...fractions];
        let ans = [];
        let dim = parseInt(x);

        //row operation between two rows, where num and den denote numerator and denominator of the number we wish to multiply with row r1
        const rowOperation = (r1, r2, num, den) => {
          for (var c = 0; c < dim; c++) {
            if (copy[r1][c][0] === 0) {
              continue;
            }

            var newNum1 = copy[r1][c][0] * num;
            var newDen1 = copy[r1][c][1] * den;

            var newNum2 = copy[r2][c][0] * newDen1;
            var newDen = copy[r2][c][1] * newDen1;

            newNum1 *= copy[r2][c][1];

            var newNum = newNum2 - newNum1;
            if (newNum == 0) {
              newDen = 1;
            } else {
              var Hcf = hcf(newNum, newDen);
              newNum /= Hcf;
              newDen /= Hcf;
            }

            var neg = false;
            if (newNum < 0 && newDen < 0) {
            } else if (newNum < 0 || newDen < 0) {
              neg = true;
            }

            newNum = Math.abs(newNum);
            newDen = Math.abs(newDen);

            if (neg) {
              newNum *= -1;
            }

            copy[r2][c][0] = newNum;
            copy[r2][c][1] = newDen;
          }
        };

        //swaps row of matrix
        const swapRow = (r1, r2) => {
          let row1 = copy[r1];
          copy[r1] = copy[r2];
          copy[r2] = row1;
        };

        //converts our fraction array to UI of table
        const converToTable = () => {
          return (
            <table>
              <tbody>
                {copy.map((row, idx) => (
                  <tr>
                    {idx == 0 && <td rowSpan={dim}> {posSign ? "+" : "-"}</td>}
                    {row.map((val) => (
                      <td>
                        {val[1] == 1 ? (
                          val[0]
                        ) : (
                          <>
                            <sup>{val[0]}</sup>&frasl;<sub>{val[1]}</sub>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        };

        ans.push(<h6>Given matrix </h6>);
        ans.push(converToTable());
        ans.push(<br />);

        //main for loop calling different functions
        for (let a = 0; a < dim; a++) {
          const operations = [];
          var swap = false;
          var newRow = -1;
          if (copy[a][a][0] === 0) {
            for (let b = a + 1; b < dim; b++) {
              if (copy[b][a][0] != 0) {
                swap = true;
                newRow = b;
                break;
              }
            }
          }

          if (swap) {
            swapRow(a, newRow);
            ans.push(
              <h6>
                Swapping row {a + 1} with row {newRow + 1} and reversing the
                sign of the determinant
              </h6>
            );
            posSign = !posSign;
            ans.push(converToTable());
            ans.push(<br />);
          }

          var rowOps = false;

          for (let c = a + 1; c < dim; c++) {
            if (copy[c][a][0] != 0) {
              rowOps = true;

              // console.log(copy[c][a][0], copy[a][a][1]);
              var num = copy[c][a][0] * copy[a][a][1];
              var denom = copy[c][a][1] * copy[a][a][0];
              var neg = false;
              if (num < 0 && denom < 0) {
              } else if (num < 0 || denom < 0) {
                neg = true;
              }

              num = Math.abs(num);
              denom = Math.abs(denom);
              var HCF = hcf(denom, num);
              denom /= HCF;
              num /= HCF;

              if (neg) {
                num *= -1;
              }
              operations.push(
                <>
                  ⇒ R{c + 1} = R{c + 1} - R{a + 1} *{" "}
                  {denom == 1 ? (
                    num
                  ) : (
                    <>
                      {" "}
                      <sup>{num}</sup>&frasl;<sub>{denom}</sub>
                    </>
                  )}
                </>
              );
              rowOperation(a, c, num, denom);
            }
          }

          if (rowOps) {
            var suffix = addSuffix(a + 1);
            ans.push(
              <h6>
                Eliminate elements in the {a + 1}
                {suffix} column under the {a + 1}
                {suffix} element
              </h6>
            );
            for (var op in operations) {
              ans.push(operations[op]);
              ans.push(<br />);
            }

            ans.push(converToTable());
            ans.push(<br />);
          }
        }

        //calculating final result
        ans.push(<>⇒ Δ = {posSign ? "" : "-1 x "}</>);
        var resNum = posSign ? 1 : -1;
        var resDen = 1;

        for (let a = 0; a < dim; a++) {
          resNum *= copy[a][a][0];
          resDen *= copy[a][a][1];
          ans.push(
            <>
              {copy[a][a][1] == 1 ? (
                copy[a][a][0]
              ) : (
                <>
                  {" "}
                  <sup>{copy[a][a][0]}</sup>&frasl;<sub>{copy[a][a][1]}</sub>
                </>
              )}
            </>
          );
          if (a != dim - 1) {
            ans.push(<> x </>);
          }
        }
        ans.push(<br />);
        ans.push(<>⇒ Δ = {resNum / resDen}</>);
        setResult(resNum / resDen);
        setAnswer(ans);
      };

      //checking if all inputs are set, and calling relevant functions
      for (var i = 0; i < dim; i++) {
        for (var j = 0; j < dim; j++) {
          if (value[i][j] === null) {
            isComplete = false;
            break;
          }

          var n = value[i][j].split(".");
          var denominator = n.length == 1 ? 1 : Math.pow(10, n[1].length);
          var numerator =
            n.length == 1 ? parseInt(n[0]) : parseInt(n[0] + n[1]);
          if (numerator == 0) {
            denominator = 1;
            numerator = 0;
          } else {
            var HCF = hcf(denominator, numerator);
            denominator /= HCF;
            numerator /= HCF;
          }

          handleFractionChange(i, j, numerator, denominator);
        }
      }

      if (!isComplete) {
        setShowError(true);
        return;
      }

      algorithm();
      setShowModal(false);
    };

    //initialisation wrt to dimension added by user
    const setMatrix = () => {
      if (x == null || x === 0) {
        setShowError(true);
        return;
      }

      let dim = parseInt(x);
      let board = Array(dim)
        .fill(0)
        .map((row) => new Array(dim).fill(null));
      setValue(board);
      let fracBoard = Array(dim)
        .fill(0)
        .map((row) =>
          new Array(dim).fill(0).map((r) => new Array(2).fill(null))
        );
      setFractions(fracBoard);
      setShowModal(true);
    };

    //creating table displayed to user to enter values
    const makeTable = () => {
      const handleChange = (row, column, event) => {
        let copy = [...value];
        copy[row][column] = event.target.value;
        setValue(copy);
      };

      return (
        <>
          <Modal.Body>
            <center>
              <table>
                <tbody>
                  {value.map((field, i) => (
                    <tr>
                      {field.map((col, j) => (
                        <td>
                          <Form>
                            <Form.Control
                              onChange={(e) => {
                                handleChange(i, j, e);
                              }}
                              type="number"
                              placeholder={"Enter value"}
                              value={value[i][j] === null ? "" : value[i][j]}
                            />
                          </Form>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </center>
          </Modal.Body>
          <Modal.Footer>
            <center>
              <div
                style={{
                  display: "flex",
                }}
              >
                <Button variant="primary" onClick={calculateResult}>
                  Calculate
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  variant="dark"
                  onClick={() => {
                    setShowModal(false);
                  }}
                  type="reset"
                >
                  Close
                </Button>
              </div>
            </center>
          </Modal.Footer>
        </>
      );
    };

    //main UI component
    return (
      <div>
        <Modal show={showError} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowError(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          dialogClassName="myModal"
          show={showModal}
          class="modal-dialog modal-dialog-centered"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => {
            setShowModal(false);
          }}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ minWidth: "80vw", textAlign: "center" }}>
              Set Matrix
            </Modal.Title>
          </Modal.Header>
          {showModal && makeTable()}
        </Modal>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                Enter dimension of square matrix, and then set the matrix to
                calculate its determinant.
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter dimension of the matrix</Form.Label>
            <Form.Control
              onChange={(e) => {
                if (e.target.value == "" || e.target.value == "0") {
                  setx(null);
                } else {
                  var isNumber = true;
                  for (var ch in e.target.value) {
                    if (e.target.value[ch] < "0" || e.target.value[ch] > "9") {
                      isNumber = false;
                      break;
                    }
                  }
                  if (isNumber) {
                    setx(e.target.value);
                  }
                }
              }}
              placeholder={"Enter dimension"}
              min="0"
              value={x === null ? "" : x}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={setMatrix}>
            Set Matrix
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
        <div ref={ref}>
          {answer != null ? (
            <>
              <br />
              <br />
              <h3>Solution</h3>
              <br />
              <center>
                <h4>⇒ Δ = {result}</h4>
                <br />
                <br />
                {answer}
              </center>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };

  const inverseCalculator = () => {
    const [x, setx] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const [value, setValue] = useState([[]]);
    const [fractions, setFractions] = useState([[[]]]);
    const [givenMat, setMat] = useState([[[]]]);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(null);

    // scrolls to apt postion whenever our result gets updates
    useEffect(() => {
      console.log(ref.current);
      var element = ref.current;
      var header = document.getElementById("targetElement");
      console.log(header);
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({
        top: offsetPosition,
      });
    }, [answer]);

    // adds proper suffix (th, nd, rd, st) tp the numbers
    const addSuffix = (number) => {
      if (number >= 11 && number <= 19) {
        return "th";
      }

      if (number % 10 == 1) {
        return "st";
      }

      if (number % 10 == 2) {
        return "nd";
      }

      if (number % 10 == 3) {
        return "rd";
      }

      return "th";
    };

    //resets everything to original state
    const reset = () => {
      setx(null);
      setAnswer(null);
      setResult(null);
    };

    //function to find highest common factor
    const hcf = (x, y) => {
      if (x % y == 0) {
        return y;
      }

      return hcf(y, x % y);
    };

    //initialisation wrt to dimension added by user
    const setMatrix = () => {
      if (x == null || x === 0) {
        setShowError(true);
        return;
      }

      let dim = parseInt(x);
      let bigDim = 2 * dim;
      let board = Array(dim)
        .fill(0)
        .map((row) => new Array(dim).fill(null));
      setValue(board);
      let fracBoard = Array(dim)
        .fill(0)
        .map((row) =>
          new Array(bigDim).fill(0).map((r) => new Array(2).fill(null))
        );
      let givMat = Array(dim)
        .fill(0)
        .map((row) =>
          new Array(dim).fill(0).map((r) => new Array(2).fill(null))
        );
      setFractions(fracBoard);
      setMat(givMat);
      setShowModal(true);
    };

    const calculateResult = () => {
      let dim = parseInt(x);
      var isComplete = true;
      var posSign = true;

      const handleFractionChange = (row, column, num, denom) => {
        let copy = [...fractions];
        copy[row][column][0] = num;
        copy[row][column][1] = denom;
        setFractions(copy);
      };

      const handleMatChange = (row, col, num, denom) => {
        let copy2 = [...givenMat];
        copy2[row][col][0] = num;
        copy2[row][col][1] = denom;
        setFractions(copy2);
      };

      const algorithm = () => {
        let copy = [...fractions];
        let copy2 = [...givenMat];
        let ans = [];
        let dim = parseInt(x);
        let bigDim = dim * 2;

        const mulRow = (mat, r1, num, den, DIM) => {
          for (let c = 0; c < DIM; c++) {
            if (mat[r1][c][0] === 0) {
              continue;
            }

            var newNum = mat[r1][c][0] * num;
            var newDen = mat[r1][c][1] * den;

            if (newNum == 0) {
              newDen = 1;
            } else {
              var Hcf = hcf(newNum, newDen);
              newNum /= Hcf;
              newDen /= Hcf;
            }

            var neg = false;
            if (newNum < 0 && newDen < 0) {
            } else if (newNum < 0 || newDen < 0) {
              neg = true;
            }

            newNum = Math.abs(newNum);
            newDen = Math.abs(newDen);

            if (neg) {
              newNum *= -1;
            }

            mat[r1][c][0] = newNum;
            mat[r1][c][1] = newDen;
          }
        };

        //row operation between two rows, where num and den denote numerator and denominator of the number we wish to multiply with row r1
        const rowOperation = (mat, r1, r2, num, den, DIM) => {
          for (var c = 0; c < DIM; c++) {
            if (mat[r1][c][0] === 0) {
              continue;
            }

            var newNum1 = mat[r1][c][0] * num;
            var newDen1 = mat[r1][c][1] * den;

            var newNum2 = mat[r2][c][0] * newDen1;
            var newDen = mat[r2][c][1] * newDen1;

            newNum1 *= mat[r2][c][1];

            var newNum = newNum2 - newNum1;
            if (newNum == 0) {
              newDen = 1;
            } else {
              var Hcf = hcf(newNum, newDen);
              newNum /= Hcf;
              newDen /= Hcf;
            }

            var neg = false;
            if (newNum < 0 && newDen < 0) {
            } else if (newNum < 0 || newDen < 0) {
              neg = true;
            }

            newNum = Math.abs(newNum);
            newDen = Math.abs(newDen);

            if (neg) {
              newNum *= -1;
            }

            mat[r2][c][0] = newNum;
            mat[r2][c][1] = newDen;
          }
        };

        //swaps row of matrix
        const swapRow = (mat, r1, r2) => {
          let row1 = mat[r1];
          mat[r1] = mat[r2];
          mat[r2] = row1;
        };

        const calculateDeterminant = () => {
          for (let a = 0; a < dim; a++) {
            var swap = false;
            var newRow = -1;
            if (copy2[a][a][0] === 0) {
              for (let b = a + 1; b < dim; b++) {
                if (copy2[b][a][0] != 0) {
                  swap = true;
                  newRow = b;
                  break;
                }
              }
            }

            if (swap) {
              swapRow(copy2, a, newRow);
              posSign = !posSign;
            }

            for (let c = a + 1; c < dim; c++) {
              if (copy2[c][a][0] != 0) {
                // console.log(copy[c][a][0], copy[a][a][1]);
                var num = copy2[c][a][0] * copy2[a][a][1];
                var denom = copy2[c][a][1] * copy2[a][a][0];
                var neg = false;
                if (num < 0 && denom < 0) {
                } else if (num < 0 || denom < 0) {
                  neg = true;
                }

                num = Math.abs(num);
                denom = Math.abs(denom);
                var HCF = hcf(denom, num);
                denom /= HCF;
                num /= HCF;

                if (neg) {
                  num *= -1;
                }
                rowOperation(copy2, a, c, num, denom, dim);
              }
            }
          }

          var resNum = posSign ? 1 : -1;
          var resDen = 1;

          for (let a = 0; a < dim; a++) {
            resNum *= copy2[a][a][0];
            resDen *= copy2[a][a][1];
          }

          if (resNum / resDen == 0) {
            ans.push(
              <h6>Determinant of matrix, Δ = 0, hence inverse doesn't exist</h6>
            );
            setResult(<h2>Inverse doesn't exist!</h2>);
            setAnswer(ans);
            return false;
          } else {
            ans.push(
              <p>
                Determinant of matrix, Δ = {resNum / resDen}. Δ ≠ 0, hence
                inverse exists
              </p>
            );
            return true;
          }
        };

        const makeOriginalTable = () => {
          return (
            <table>
              <tbody>
                {copy2.map((row, idx) => (
                  <tr>
                    {row.map((val) => (
                      <td>
                        {val[1] == 1 ? (
                          val[0]
                        ) : (
                          <>
                            <sup>{val[0]}</sup>&frasl;<sub>{val[1]}</sub>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        };

        const converToTable = () => {
          return (
            <table>
              <tbody>
                {copy.map((row, idx) => (
                  <tr>
                    {row.map((val) => (
                      <td>
                        {val[1] == 1 ? (
                          val[0]
                        ) : (
                          <>
                            <sup>{val[0]}</sup>&frasl;<sub>{val[1]}</sub>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        };

        ans.push(<h6>Given matrix : </h6>);
        ans.push(makeOriginalTable());
        if (!calculateDeterminant()) {
          return;
        }
        ans.push(<br />);
        ans.push(
          <h6>Augment identity matrix to the right of the given matrix</h6>
        );
        ans.push(converToTable());
        ans.push(<br />);

        for (let l = 0; l < dim; l++) {
          const operations = [];
          var swap = false;
          var newRow = -1;
          if (copy[l][l][0] === 0) {
            for (let k = l + 1; k < dim; k++) {
              if (copy[k][l][0] != 0) {
                swap = true;
                newRow = k;
                break;
              }
            }
          }

          if (swap) {
            swapRow(copy, l, newRow);
            ans.push(
              <h6>
                Swapping row {l + 1} with row {newRow + 1}
              </h6>
            );
            ans.push(converToTable());
            ans.push(<br />);
          }

          if (copy[l][l][0] == 1 && copy[l][l][1] == 1) {
          } else {
            let n = copy[l][l][1];
            let d = copy[l][l][0];

            if (d < 0) {
              n *= -1;
              d *= -1;
            }
            mulRow(copy, l, n, d, bigDim);
            ans.push(
              <h6>
                Multiplying row {l + 1} with{" "}
                {d == 1 ? (
                  <> {n} </>
                ) : (
                  <>
                    <sup>{n}</sup>&frasl;<sub>{d}</sub>
                  </>
                )}
              </h6>
            );
            ans.push(converToTable());
            ans.push(<br />);
          }

          var rowOps = false;

          for (let k = 0; k < dim; k++) {
            if (k != l && copy[k][l][0] != 0) {
              rowOps = true;

              // console.log(copy[c][a][0], copy[a][a][1]);
              var num = copy[k][l][0] * copy[l][l][1];
              var denom = copy[k][l][1] * copy[l][l][0];
              var neg = false;
              if (num < 0 && denom < 0) {
              } else if (num < 0 || denom < 0) {
                neg = true;
              }

              num = Math.abs(num);
              denom = Math.abs(denom);
              var HCF = hcf(denom, num);
              denom /= HCF;
              num /= HCF;

              if (neg) {
                num *= -1;
              }
              operations.push(
                <>
                  ⇒ R{k + 1} = R{k + 1} - R{l + 1} *{" "}
                  {denom == 1 ? (
                    num
                  ) : (
                    <>
                      {" "}
                      <sup>{num}</sup>&frasl;<sub>{denom}</sub>
                    </>
                  )}
                </>
              );
              rowOperation(copy, l, k, num, denom, bigDim);
            }
          }

          if (rowOps) {
            var suffix = addSuffix(l + 1);
            ans.push(
              <h6>
                Eliminate elements in the {l + 1}
                {suffix} column except the {l + 1}
                {suffix} element
              </h6>
            );
            for (var op in operations) {
              ans.push(operations[op]);
              ans.push(<br />);
            }

            ans.push(converToTable());
            ans.push(<br />);
          }
        }

        for (let m = 0; m < dim; m++) {
          for (let n = 0; n < dim; n++) {
            copy2[m][n][0] = copy[m][n + dim][0];
            copy2[m][n][1] = copy[m][n + dim][1];
          }
        }

        const displayFinal = () => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2 style={{ marginRight: "20px" }}>Inverse : </h2>
              {makeOriginalTable()}
            </div>
          );
        };

        setResult(displayFinal);
        setAnswer(ans);
      };

      //checking if all inputs are set, and calling relevant functions
      for (var i = 0; i < dim; i++) {
        for (var j = 0; j < dim; j++) {
          if (value[i][j] === null) {
            isComplete = false;
            break;
          }

          var n = value[i][j].split(".");
          var denominator = n.length == 1 ? 1 : Math.pow(10, n[1].length);
          var numerator =
            n.length == 1 ? parseInt(n[0]) : parseInt(n[0] + n[1]);
          if (numerator == 0) {
            denominator = 1;
            numerator = 0;
          } else {
            var HCF = hcf(denominator, numerator);
            denominator /= HCF;
            numerator /= HCF;
          }

          handleMatChange(i, j, numerator, denominator);
          handleFractionChange(i, j, numerator, denominator);
        }
      }

      if (!isComplete) {
        setShowError(true);
        return;
      }

      for (var i = 0; i < dim; i++) {
        for (var j = 0; j < dim; j++) {
          if (i == j) {
            handleFractionChange(i, j + dim, 1, 1);
          } else {
            handleFractionChange(i, j + dim, 0, 1);
          }
        }
      }

      algorithm();
      setShowModal(false);
    };

    //creating table displayed to user to enter values
    const makeTable = () => {
      const handleChange = (row, column, event) => {
        let copy = [...value];
        copy[row][column] = event.target.value;
        setValue(copy);
      };

      return (
        <>
          <Modal.Body>
            <center>
              <table>
                <tbody>
                  {value.map((field, i) => (
                    <tr>
                      {field.map((col, j) => (
                        <td>
                          <Form>
                            <Form.Control
                              onChange={(e) => {
                                handleChange(i, j, e);
                              }}
                              type="number"
                              placeholder={"Enter value"}
                              value={value[i][j] === null ? "" : value[i][j]}
                            />
                          </Form>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </center>
          </Modal.Body>
          <Modal.Footer>
            <center>
              <div
                style={{
                  display: "flex",
                }}
              >
                <Button variant="primary" onClick={calculateResult}>
                  Calculate
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  variant="dark"
                  onClick={() => {
                    setShowModal(false);
                  }}
                  type="reset"
                >
                  Close
                </Button>
              </div>
            </center>
          </Modal.Footer>
        </>
      );
    };

    //main UI component
    return (
      <div>
        <Modal show={showError} class="modal-dialog modal-dialog-centered">
          <Modal.Header>
            Please Enter all values to get Proper answer
          </Modal.Header>
          <Modal.Footer>
            <Button
              onClick={() => setShowError(false)}
              class="btn btn-primary btn-sm"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          dialogClassName="myModal"
          show={showModal}
          class="modal-dialog modal-dialog-centered"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => {
            setShowModal(false);
          }}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ minWidth: "80vw", textAlign: "center" }}>
              Set Matrix
            </Modal.Title>
          </Modal.Header>
          {showModal && makeTable()}
        </Modal>
        <Form>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                Enter dimension of square matrix, and then set the matrix to
                calculate its determinant.
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Enter dimension of the matrix</Form.Label>
            <Form.Control
              onChange={(e) => {
                if (e.target.value == "" || e.target.value == "0") {
                  setx(null);
                } else {
                  var isNumber = true;
                  for (var ch in e.target.value) {
                    if (e.target.value[ch] < "0" || e.target.value[ch] > "9") {
                      isNumber = false;
                      break;
                    }
                  }
                  if (isNumber) {
                    setx(e.target.value);
                  }
                }
              }}
              placeholder={"Enter dimension"}
              min="0"
              value={x === null ? "" : x}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={setMatrix}>
            Set Matrix
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
        <div ref={ref}>
          {answer != null ? (
            <>
              <br />
              <br />
              <h3>Solution</h3>
              <br />
              <center>
                <h4>{result}</h4>
                <br />
                <br />
                {answer}
              </center>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };

  //adding the calculators togather
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Determinants":
        currentCall = determinantCalculator();
        break;
      case "Inverse of a Matrix":
        currentCall = inverseCalculator();
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
            content="Matrix, calculator, Matrices calculator, physics, Tech n science, technscience, tech and science"
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
