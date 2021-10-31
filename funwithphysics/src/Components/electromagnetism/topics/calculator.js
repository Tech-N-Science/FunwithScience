import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../electromagnetism.css";
import Topics from "../topic_data";
import "./calculator.css";
function Calculator() {
  const page = Topics.filter((data) => data.topic);
  const details = page[0];

  // const [elefield, setElefield] = useState(false);
  // const [potential, setPotential] = useState(false);

  //required variables for calculation
  //point
  //force,charge
  //e=f/q
  //ring
  //charge(q),radius of ring(a),distance of ring from center(r)
  //e = q*r/4*3.14*eps*(a*a+r*r)^3/2
  //line
  //charge(lambda),length(r),k
  //e = 2*k*lam/r
  //hollow cylinder
  //lambda,pie,eps,rad
  //e=lam/2*pie*eps*r
  //solid cylinder
  //lambda,pie,eps,r,R
  //e=lam*r/2*pie*eps*R
  //plane
  //e = sigma/2*emp
  //inner sphere
  //(sigma/eps)*R*R/r*r
  //outer sphere
  //q/4*pie*eps*r*r
  function CalculatorKTG() {
    //electric field
    const [result, setResult] = useState(null);
    const [force, setForce] = useState();
    const [charge, setCharge] = useState(null);
    const [radius, setRadius] = useState(null);
    const [dist, setDist] = useState(null);
    const [lambda, setLambda] = useState(null);
    const [k, setK] = useState(null);
    const [eps, seteps] = useState(null);
    const [pie, setPie] = useState(null);
    const [len, setlen] = useState(null);
    const [choice, setChoice] = useState("pc");
    const [sigma, setSigma] = useState(null);
    const [R, setR] = useState(null);




    function handleChange(e) {
      setResult(null);
      setForce(null);
      setCharge(null);
      setRadius(null);
      setDist(null);
      setLambda(null);
      setK(null);
      seteps(8.854 * Math.pow(10, -12));
      setlen(null);
      setPie(3.414);
      setSigma(null);
      setR(null);
      setChoice(e.target.value);
      choiceData();
    }
    const choiceData = () => {
      if (choice === "pc")
        return {
          name: "electric field of point charge",
          mainunit: "N/C",
          quantities: [
            "Force",
            "Charge",
          ],
          subunits: ["N", "columbs"],
          setters: [setForce, setCharge],
          getters: [force, charge],

        };
      else if (choice === 'rc')
        return {
          name: "electric field of ring charge",
          mainunit: "N/C",
          quantities: [
            "Radius of ring",
            "Charge",
            "distance of ring from center",
          ],
          subunits: ["cm", "columbs", "cm"],
          setters: [setCharge, setRadius, setDist],
          getters: [charge, radius, dist],
        }
      else if (choice === 'lc')
        return {
          name: "electric field of line charge",
          mainunit: "N/C",
          quantities: [
            "k",
            "length",
            "lambda",
          ],
          subunits: ["digits", "cm", "digits"],
          setters: [setK, setRadius, setLambda],
          getters: [k, radius, lambda],
        }
      else if (choice === 'hc')
        return {
          name: "electric field of hollow cylinder",
          mainunit: "N/C",
          quantities: [
            "k",
            "lamdba",
            "raduis",
          ],
          subunits: ["digits", "digits", "cm"],
          setters: [setK, setLambda, setRadius],
          getters: [k, lambda, radius],
        }
      else if (choice === 'sc')
        return {
          name: "electric field of solid cylinder",
          mainunit: "N/C",
          quantities: [
            "k",
            "lamdba",
            "raduis",
            "outerRadius",
          ],
          subunits: ["digits", "digits", "cm", "cm"],
          setters: [setK, setLambda, setRadius, setR],
          getters: [k, lambda, radius, R],
        }
      else if (choice === 'pl')
        return {
          name: "electric field of plane",
          mainunit: "N/C",
          quantities: [
            "sigma",
          ],
          subunits: ["digits"],
          setters: [setSigma],
          getters: [sigma],
        }
      else if (choice === 'is')
        return {
          name: "electric field of inner sphere",
          mainunit: "N/C",
          quantities: [
            "sigma",
            "inner radius(r)",
            "Outer radius(R)"
          ],
          subunits: ["digits", "cm", "cm"],
          setters: [setSigma, setRadius, setR],
          getters: [sigma, radius, R],
        }
      else if (choice === 'os')
        return {
          name: "electric field of outer sphere",
          mainunit: "N/C",
          quantities: [
            "charge",
            "radius",
          ],
          subunits: ["columbs", "radius"],
          setters: [setCharge, setRadius],
          getters: [charge, radius],
        }
    }
    const calcResult = () => {
      let res;
      if (choice === "pc") res = ((parseFloat(force / charge)) ** 0.5).toFixed(4);
      else if (choice === "lc") res = ((2 * k * lambda) / radius).toFixed(4);
      else if (choice === "rc") res = ((charge * dist) / (4 * pie * eps * Math.pow((radius * radius + dist * dist), 1.5))).toFixed(4);
      else if (choice === "hc") res = (lambda / (2 * pie * eps * radius)).toFixed(4);
      else if (choice === "sc") res = ((lambda * radius) / (2 * pie * eps * R)).toFixed(4);
      else if (choice === "pl") res = (sigma / (2 * eps)).toFixed(4);
      else if (choice === "is") res = ((sigma * R * R) / (radius * radius)).toFixed(4);
      else if (choice === "os") res = (charge / (4 * pie * eps * radius * radius)).toFixed(4);
      console.log(res);
      // console.log(4 * pie * eps * Math.pow((radius * radius + dist * dist), 1.5));
      setResult(res);
      return res;
    }
    function reset() {
      setResult(null);
    }

    // //electric field potential
    // const [presult, setpresult] = useState(null);
    // const [pcharge, setpcharge] = useState(null);
    // const [pradius, setpradius] = useState(null);
    // const [pR, setpR] = useState(null);
    // const [pk, setpk] = useState(null);
    // const [psigma, setpsigma] = useState(null);
    // const [pdist, setpdist] = useState(null);
    // // const [pie, setppie] = useState(null);
    // const [pchoice, setpchoice] = useState("ppc");

    // function handlepchange(e) {
    //   setpresult(null);
    //   setpcharge(null);
    //   setpradius(null);
    //   setpdist(null);
    //   setpk(9 * Math.pow(10, 9));
    //   seteps(8.854 * Math.pow(10, -12));
    //   // setppie(3.414);
    //   setpsigma(null);
    //   setpR(null);
    //   setpchoice(e.target.value);
    //   choicepdata();
    // }

    // const choicepdata = () => {
    //   if (pchoice === "ppc")
    //     return {
    //       name: "electric potential of point charge",
    //       mainunit: "N/C",
    //       quantities: [
    //         "Charge",
    //         "radius",
    //       ],
    //       subunits: ["columbs", "cm"],
    //       setters: [setpcharge, setpradius],
    //       getters: [pcharge, pradius],

    //     };
    //   else if (pchoice === "prc")
    //     return {
    //       name: "electric potential of ring charge",
    //       mainunit: "N/C",
    //       quantities: [
    //         "Charge",
    //         "dist",
    //         "radius",
    //       ],
    //       subunits: ["columbs", "cm", "cm"],
    //       setters: [setpcharge, setpdist, setpradius],
    //       getters: [pcharge, pdist, pradius],

    //     };
    //   else if (pchoice === "pos")
    //     return {
    //       name: "electric potential of point charge",
    //       mainunit: "N/C",
    //       quantities: [
    //         "Charge",
    //         "radius",
    //       ],
    //       subunits: ["columbs", "cm"],
    //       setters: [setpcharge, setpradius],
    //       getters: [pcharge, pradius],

    //     };
    //   else if (pchoice === "pis")
    //     return {
    //       name: "electric potential of point charge",
    //       mainunit: "N/C",
    //       quantities: [
    //         "Charge",
    //         "outer radius",
    //         "radius",

    //       ],
    //       subunits: ["columbs", "cm", "cm"],
    //       setters: [setpcharge, setpR, setpradius],
    //       getters: [pcharge, pR, pradius],

    //     };
    //   else if (pchoice === "pd")
    //     return {
    //       name: "electric potential of point charge",
    //       mainunit: "N/C",
    //       quantities: [
    //         "surface charge density",
    //         "distance",
    //         "radius",
    //       ],
    //       subunits: ["digits", "cm", "cm"],
    //       setters: [setpsigma, setpdist, setpR],
    //       getters: [psigma, pdist, pR],

    //     };
    // }
    // const calcpResult = () => {
    //   let res;
    //   if (pchoice === "ppc") res = ((parseFloat(pk * pcharge / pradius)) ** 0.5).toFixed(4);
    //   else if (pchoice === "prc") res = ((pk * pcharge) / Math.pow(((pradius * pradius) + (pR * pR)), 0.5)).toFixed(4);
    //   else if (pchoice === "pd") res = ((psigma / (2 * eps)) * ((Math.pow(((pdist * pdist) + (pR * pR)), 0.5)) - pdist)).toFixed(8);
    //   else if (pchoice === "pos") res = (pk * pcharge / (pradius)).toFixed(4);
    //   else if (pchoice === "pis") res = ((pk * pcharge) * (((3 * pR * pR) - (pradius * pradius)) / 2)).toFixed(4);
    //   // console.log(psigma / 2 * eps);
    //   // console.log((psigma / (2 * eps)) * (Math.pow(((pdist * pdist) + (pR * pR)), 0.5)) - pdist);
    //   // console.log(res);
    //   // console.log(4 * pie * eps * Math.pow((radius * radius + dist * dist), 1.5));
    //   setpresult(res);
    //   return res;
    // }
    // function preset() {
    //   setpresult(null);
    // }

    return (
      <div>
        {/* <div className="but-sec">
          <Button className="btn btn-primary mybtn" >electric field</Button>
          <Button className="btn btn-secondary mybtn" >electric potential</Button>
        </div> */}
        <Form className="form">
          <Form.Group>
            <Form.Label>Select electric field calculation of objects</Form.Label>
            <Form.Control as="select" onChange={(e) => handleChange(e)}>
              <option value="pc">point charge</option>
              <option value="lc">line charge</option>
              <option value="rc">ring charge</option>
              <option value="hc">hollow cylinder</option>
              <option value="sc">solid cylinder</option>
              <option value="pl">plane</option>
              <option value="is">inside sphere</option>
              <option value="os">outside sphere</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-4" controlId="text">
            <Form.Text className="text">
              <strong>
                {" "}
                To find the {choiceData().name}, Enter the following values
              </strong>
              <br />
            </Form.Text>
          </Form.Group>
          {
            choiceData().quantities.map((item, i) => {
              return (
                <Form.Group className="mb-4">
                  <Form.Label className="">{choiceData().quantities[i]}</Form.Label>
                  <Form.Control
                    onChange={(e) => choiceData().setters[i](e.target.value)}
                    type="number"
                    placeholder={"Enter in " + choiceData().subunits[i]}
                    value={choiceData().getters[i] === null ? '' : choiceData().getters[i]}
                  />
                </Form.Group>)
            })
          }

          <Form.Group>
            <Form.Control
              readOnly
              type="number"
              placeholder={
                reset === null ? "result" : result + " " + choiceData().mainunit
              }>

            </Form.Control>

          </Form.Group>
          <Button variant="primary" onClick={calcResult}>
            Calculate
          </Button>
          & nbsp;& nbsp;& nbsp;
          <Button variant="dark" type="reset" onClick={() => reset()}>
            Reset
          </Button>
        </Form >

      </div >
    )

  }
  function calC(key) {
    let currentCall;
    switch (key) {
      case "Electric field":
        currentCall = CalculatorKTG();
        break;
      default:
        break;
    }
    return currentCall;
  }
  return (
    <div className="Calculator__main">
      <div className="Calculator__header">
        <h1>{details.topic}</h1>
      </div>
      <div className="Calculator__details">
        <p>{details.details}</p>
      </div>
      <div className="Calculator__formula-text">
        <p>working formulas</p>
      </div>
      <div className="Calculator__formula">
        <h3>{details.formula}</h3>
        <p></p>
      </div>
      <div className="Calculator__siunit">
        <h3>S.I.Units:{details.si_units}</h3>

      </div>
      <div className="Calculator__dimension">
        <h3>dimension:{details.dimensions}</h3>
      </div>
      <div className="Calculator__calc">
        <h3>calculation</h3>
        <h3>{details.topic} Calculator</h3>
        <hr />
        {calC(details.topic)}
      </div>
      <div className="Calculator__process">
        <h3>process</h3>
        <p>{details.process}</p>
      </div>

    </div>
  )

}

export default Calculator;
