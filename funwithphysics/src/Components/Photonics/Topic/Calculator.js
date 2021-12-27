import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button,Modal } from "react-bootstrap";
import "../Photonics.css";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Solution from "../../Solution/Solution";

function Calculator({ match }) {
  // topics_data
  const Topics = [
    {
      topic: "Brewster's Angle",
      formula: "θ = tan⁻¹(n₂/n₁)",
      siunit: "degree",
      process: `"θ = tan⁻¹(n₂/n₁)" This equation is known as Brewster's law, where 'θ' is a brewster's angle, 'n₁' is the refractive index of the first media through which light propagates (the "incidental medium"), and 'n₂' is the index of the other medium, and we can simply get the angle by plugging these numbers into the equation.`,
      details: `The reflected light will be linearly polarised if light strikes an interface at a 90ᴼ angle between the reflected and refracted rays. The polarisation direction (the direction in which the electric field vectors point) is parallel to the interface plane.

               The Brewster angle, θ., is a unique incidence angle that results in a 90ᴼ angle between the reflected and refracted rays. A quick calculation reveals that tan(θ) = n₂/n₁.`,
      dimension: "M⁰ L⁰ T⁰ ",
    },
    {
      topic: "Mirror Formula",
      formula: "(1/v) + (1/u) = 1/f ",
      siunit: "metre",
      process: `In order to find the focal length we should know the object distance(u) and image distance(v)`,
      details: `The relation of object distance and image distance with focal length is known as a mirror equation. It is also known as a mirror formula. (u) is the Object distance.(v) is the Image distance.(f) is the Focal Length. It follows laws of reflection.`,
      dimension: "L¹ ",
    },
    {
      topic: "Lens Formula",
      formula: "(1/v) - (1/u) = 1/f ",
      siunit: "metre",
      process: `In order to find the focal length we should know the object distance(u) and image distance(v)`,
      details: `The relation of object distance and image distance with focal length is known as a mirror equation. It is also known as a mirror formula. (u) is the Object distance.(v) is the Image distance.(f) is the Focal Length. It follows laws of refraction.`,
      dimension: "L¹ ",
    },
    {
      topic: "Magnification of Mirror",
      formula: "m = h2 / h1",
      siunit: "No unit",
      process: `In order to find the magnification(m) we must know the height of image(h2) and the height of object(h1)`,
      details: `The linear magnification of a mirror(m) can be defined as the ratio of the height of the image(h2) formed by the mirror to that of the height of the object(h1).`,
      dimension: "NA ",
    },
    {
      topic: "Magnification of Lens",
      formula: "m = h2 / h1",
      siunit: "No unit",
      process: `In order to find the magnification(m) we must know the height of image(h2) and the height of object(h1)`,
      details: `The linear magnification of a lens(m) can be defined as the ratio of the height of the image(h2) formed by the lens to that of the height of the object(h1).`,
      dimension: "NA ",
    },
    {
      topic: "Power of Lens",
      formula: "P = 1 / f ",
      siunit: ["meter", <sup>-1</sup>, ` or also known as "diopter"`],
      process: `In order to find the power of lens we need to know the focal lenght of the lens(f)`,
      details: `The power of a lens is defined as its ability to converge or diverge the beam of light that falls on it.`,
      dimension: "L¹",
    },
  ];

  const page = Topics.filter((data) => data.topic === match.params.topic);
  const details = page[0];

  //adding Brewster's Angle calcular
  const BrewsterAngle = () => {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [result, setResult] = useState(""); 
    const [showModal, setShowModal] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    const givenValues = {
      n1: n1,
      n2: n2,
    };

    const insertValues = `tan−¹(${n2}/${n1})`;

    const reset = () => {
      setResult("");
      setN2("");
      setShowSolution(false);
      setN1("");
    };
    const calcResult = () => {
      if(n2!=="" && n1!=="")
      {let res;
      let r1 = n2 / n1;
      let r2 = Math.atan(r1);
      res = (r2 * 180) / Math.PI;
      setResult(res);
      setShowSolution(true);
    }
    else{
      setShowModal(true);
    }
    };
    return (
      <>
       <Modal show={showModal} class="modal-dialog modal-dialog-centered">
        <Modal.Header>
          Please Enter all values to get Proper answer
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            class="btn btn-primary btn-sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>refractive index of the initial medium (n₁)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of n1"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>the index of the other medium (n₂)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of n2"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          {showSolution? 
            <Form.Group className="mb-3" controlId="acceleration">
              <Solution
                givenValues={givenValues}
                formula="tan-¹(n2/n1)"
                toFind="Brewster's angle"
                insertValues={insertValues}
                result={result}
                // constants={constants}
              />
            </Form.Group>
           : null }
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === "" ? "Result" : result + " degree"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          
          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Mirror Formula
  const MirrorFormula = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
    };
    const objDist = 1 / n1;
    const imgDist = 1 / n2;
    const calcResult = () => {
      let res;
      res = (1 / (objDist + imgDist)).toFixed(2);

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Object distance(u)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of u"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Image distance (v)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of v"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + "m"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Lens Formula
  const LensFormula = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
    };
    const objDist = 1 / n1;
    const imgDist = 1 / n2;
    const calcResult = () => {
      let res;
      res = (1 / (imgDist - objDist)).toFixed(2);

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Object distance(u)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of u"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Image distance (v)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of v"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + "m"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };

  //Magnification of Mirror
  const MirrorMag = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
    };
    const calcResult = () => {
      let res = n1 / n2;

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Height of Image(h2)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of h2"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Height of Object(h1)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of h1"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
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

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Magnification of Lens
  const LensMag = () => {
    const [n1, setN1] = useState(null);
    const [n2, setN2] = useState(null);
    const [result, setResult] = useState(null);
    const reset = () => {
      setResult(null);
      setN2(null);
      setN1(null);
    };
    const calcResult = () => {
      let res = n1 / n2;

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Height of Image(h2)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of h2"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Height of Object(h1)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of h1"
              onChange={(e) => setN2(e.target.value)}
              value={n2 === null ? "" : n2}
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

          <Button variant="dark" onClick={() => reset()} type="reset">
            Reset
          </Button>
        </div>
      </>
    );
  };
  //Power of Lens
  const PowerLens = () => {
    const [n1, setN1] = useState(null);

    const [result, setResult] = useState(null);
    const reset = () => {
      setResult(null);

      setN1(null);
    };
    const calcResult = () => {
      let res = 1 / n1;

      setResult(res);
    };
    return (
      <>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Focal length of the lens(f)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the value of f"
              onChange={(e) => setN1(e.target.value)}
              value={n1 === null ? "" : n1}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              readOnly
              type="number"
              placeholder={result === null ? "Result" : result + " diopter"}
            />
          </Form.Group>
        </Form>
        <div className="button-custom-grp">
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>

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
      case "Brewster's Angle":
        currentCall = BrewsterAngle();
        break;
      case "Mirror Formula":
        currentCall = MirrorFormula();
        break;
      case "Lens Formula":
        currentCall = LensFormula();
        break;
      case "Magnification of Mirror":
        currentCall = MirrorMag();
        break;
      case "Magnification of Lens":
        currentCall = LensMag();
        break;
      case "Power of Lens":
        currentCall = PowerLens();
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
            content="Atomic, Physics, calculator, Atomic physics calculator, Tech n science, technscience, tech and science"
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
          <h3>S.I. Unit : {details.siunit}</h3>
          <h3>Dimension : {details.dimension}</h3>
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
