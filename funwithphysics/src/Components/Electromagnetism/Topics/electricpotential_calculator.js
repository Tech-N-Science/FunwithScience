import React, { useState } from "react";
import "./Calculator.css";
import { Form, Button } from "react-bootstrap";
import "../Electromagnetism.css";
import { Helmet } from "react-helmet";



export const electricpotential_calculator = ({match}) => {
  const electricpotential_data=[{
    topic:"Point Charge",
    details:`Electric Potential created by a point charge (Q) is given by the equation "V=kQ/r", where V is the electric potential and Q is the charge, r is the distance from the charge is observed to be where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C²`,
    formula:"V=kQ/r",
    siunit:"volt",
    dimension:"M L² T⁻³ I⁻¹",
    process:"To find the the electric potential for a point charge we need to know the charge (Q) and the distance (r), by putting these values in the formula we can easily find the electric potential"
},
{
  topic:"Ring",
  formula:"V=kQ/√(R²+r²)",
  details:`Electric potential for the charged ring is given by the equation "V=kQ/√(R²+r²)" where Q is the charge, R is the Radius, r is the distance of the charge from the center where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C²`,
  siunit:"volt",
  dimension:"M L² T⁻³ I⁻¹",
  process:"To find the electric potential for the charged ring we need to know the charge (Q), distance of the charge from the center (r) and the radius of the ring (R) where as the k is constant by putting these values in the formula we can easily find the electric potential."

},
{
  topic:"Disc",
  details:`Electric potential for Disc is given by the equation "V=kσ2π[√(R²+r²)-r]" where σ is the surface density, R is the radius, and r is the distance where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C²`,
  formula:"V=kσ2π[√(R²+r²)-r]",
  siunit:"volt",
  process:"By putting the value of surface density (σ), Radius (R) and distance (r) in given equation we can easily find the electric potential for the disc, where as k is constant and it's value is 9.0*10^9 N m²/C²",
  dimension:"M L² T⁻³ I⁻¹"
},
{
    topic:"Sphere",
    details:[`Electric potential outside the sphere is given by the equation "V=kQ/r" where Q is the charge outside the sphere and r the distance at which charge is placed.`,<br/>,`Electric potential inside the sphere is given by the equation "V=kQ[(3R²/2)-(r²/2)]" where is Q is the charge, R is the Radius of the sphere and r is the distance at which charge is placed.`,<br/>,"Where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C² "],
    formula:["Sphere (Outside)=> V=kQ/r",<br/>,"Sphere (Inside)=> V=kQ[(3R²/2)-(r²/2)]"],
    siunit:"volt",
    dimension:"M L² T⁻³ I⁻¹",
    process:["To find the electric potential for the (Outside) the sphere we need to know the charge (Q) and the distance (r) where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C²",<br/>,"To find the electric potential for the (Inside) the sphere we need to know the charge (Q) and the distance (r) and the Radius of the sphere (R) where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C²"]
},{
    topic:"Shell",
    formula:["Shell (Outside)=> V=kQ/r",<br/>,"Shell (Inside)=> V=kQ/R"],
    details:[`Electric potential for the charge outside the of the Shell is given by the equation "V=kQ/r" where Q is the charge and r is the distance at which charge is placed where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C²`,<br/>,`Electric potential for the charge outside the of the Shell is given by the equation "V=kQ/R" where Q is the charge and R is the radius of the shell where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C²`],
    siunit:"volt",
    dimension:"M L² T⁻³ I⁻¹",
    process:"To find the electric potential for the Outside the sphere we need to know the charge (Q), and the distance (r) at which charge is placed where as k is (1/4πε₀) which is constant and it's value is 9.0*10^9 N m²/C²., Similarly for the Inside the sphere, but now we need to know the Radius (R) rather then the distance"

}
]
    const page=electricpotential_data.filter((data)=>data.topic===match.params.topic);
    const details=page[0];

    //electric potential for the shell
    const Shell=()=>{
      const [choice, setChoice] = useState("Inshell");
      const [charge, setCharge] = useState(null);
      const [distance, setDistance] = useState(null);
      const [radius, setRadius] = useState(null);
      const [result, setResult] = useState(null);
      const k = 9.0* Math.pow(10,9)
      const calcResult=()=>{
        let res;
        if(choice==="Inshell"){
          res=k*charge/radius;
        }
        if(choice==="Outshell"){
          res=k*charge/distance;
        }
        setResult(res)
      }
      const reset=()=>{
        setCharge(null)
        setDistance(null)
        setRadius(null)
        setResult(null)
      }
      const handleChange=(e)=>{
        setChoice(e.target.value)
        reset()
      }
      const choiceData=()=>{
        if (choice==="Outshell"){
          return{
            name:"Electric Potential for (outside) the Shell",
            mainunit:"volt",
            quantities:["Charge (Q)","Distance (r)"],
            subunits:["(C)","(m)"],
            getters:[charge,distance],
            setters:[setCharge,setDistance]
          }
        }
        else if (choice==="Inshell"){
          return {
            name:"Electric Potential for (inside) the Shell",
            mainunit:"volt",
            quantities:["Charge (Q)","Radius (R)"],
            subunits:["(C)","(m)"],
            getters:[charge,radius],
            setters:[setCharge,setRadius]
          }
        }
      }
      return(<>
      <Form>
        {/* dropdown */}
       <Form.Group className="mb-4" controlId="choice">
          <Form.Label>Select the type of calculation</Form.Label>
          <Form.Control as="select" onChange={(e)=>{handleChange(e)}}>
            <option value="Inshell">Electric Potential for (inside) the Shell</option>
            <option value="Outshell">Electric Potential for (outside) the Shell</option>

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
        <Form.Group className="mb-4">
          <Form.Label>{choiceData().quantities[0]}</Form.Label>
          <Form.Control
            onChange={(e) => choiceData().setters[0](e.target.value)}
            type="number"
            placeholder={"Enter in " + choiceData().subunits[0]}
            value={
              choiceData().getters[0] === null ? "" : choiceData().getters[0]
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>{choiceData().quantities[1]}</Form.Label>
          <Form.Control
            onChange={(e) => choiceData().setters[1](e.target.value)}
            type="number"
            placeholder={"Enter in " + choiceData().subunits[1]}
            value={
              choiceData().getters[1] === null ? "" : choiceData().getters[1]
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>constant (k)</Form.Label>
          <Form.Control
            readOnly
            value={
              `${k}  N m²/C²`
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            readOnly
            type="number"
            placeholder={
              result === null
                ? "Result"
                : result + " volt"
            }
          />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={calcResult}>
        Calculate
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="dark" onClick={() => reset()} type="reset">
        Reset
      </Button>
      </>)
    }

    //electric potential for the Sphere
    const Sphere=()=>{
      const [choice, setChoice] = useState("Insphere");
      const [distance, setDistance] = useState(null);
      const [radius, setRadius] = useState(null);
      const [charge, setCharge] = useState(null);
      const [result, setResult] = useState(null);

      const calcResult=()=>{
        let res;
        if(choice==="Outsphere"){
          res=k * charge/distance;
        }
        else if(choice==="Insphere"){
          res=k*charge*(((3*radius*radius)/2)-(distance*distance/2))
        }
        setResult(res)
      }
      const reset =()=>{
        setDistance(null)
        setResult(null)
        setRadius(null)
        setCharge(null)
      }


      const k = 9.0* Math.pow(10,9)
      const handleChange=(e)=>{
        setChoice(e.target.value)
        reset()
      }
      const choiceData=()=>{
        if(choice==="Outsphere")
        return{
          name:"Electric Potential for (Outside) the sphere",
          mainunit:"volt",
          quantities:["Charge (Q)","Distance (r)"],
          subunits:["(C)","(m)"],
          getters:[charge,distance],
          setters:[setCharge,setDistance]
        }
        if(choice==="Insphere")
        return{
          name:"Electric Potential for (Inside) the sphere",
          mainunit:"volt",
          quantities:["Charge (Q)","Distance (r)","Radius (R)"],
          subunits:["(C)","(m)","(m)"],
          getters:[charge,distance,radius],
          setters:[setCharge,setDistance,setRadius]
        }
      }
      return(<>
      <Form>
        {/* dropdown */}
       <Form.Group className="mb-4" controlId="choice">
          <Form.Label>Select the type of calculation</Form.Label>
          <Form.Control as="select" onChange={(e)=>{handleChange(e)}}>
            <option value="Insphere">Electric Potential for inside the sphere</option>
            <option value="Outsphere">Electric Potential for outside the sphere</option>

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
        <Form.Group className="mb-4">
          <Form.Label>{choiceData().quantities[0]}</Form.Label>
          <Form.Control
            onChange={(e) => choiceData().setters[0](e.target.value)}
            type="number"
            placeholder={"Enter in " + choiceData().subunits[0]}
            value={
              choiceData().getters[0] === null ? "" : choiceData().getters[0]
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>{choiceData().quantities[1]}</Form.Label>
          <Form.Control
            onChange={(e) => choiceData().setters[1](e.target.value)}
            type="number"
            placeholder={"Enter in " + choiceData().subunits[1]}
            value={
              choiceData().getters[1] === null ? "" : choiceData().getters[1]
            }
          />
        </Form.Group>
        {choice==="Insphere"?<Form.Group className="mb-4" >
          <Form.Label>{choiceData().quantities[2]}</Form.Label>
          <Form.Control 
            onChange={(e) => choiceData().setters[2](e.target.value)}
            type="number"
            placeholder={"Enter in " + choiceData().subunits[2]}
            value={
              choiceData().getters[2] === null ? "" : choiceData().getters[2]
            }
          />
        </Form.Group>:""}
        <Form.Group className="mb-4">
          <Form.Label>constant (k)</Form.Label>
          <Form.Control
            readOnly
            value={
              `${k}  N m²/C²`
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            readOnly
            type="number"
            placeholder={
              result === null
                ? "Result"
                : result + " volt"
            }
          />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={calcResult}>
        Calculate
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="dark" onClick={() => reset()} type="reset">
        Reset
      </Button>
      </>)
    }

    //electric potential for the Disc
    const Disc = ()=>{
      const [distance, setDistance] = useState(null);
      const [radius, setRadius] = useState(null);
      const [density, setDensity] = useState(null);
      const [result, setResult] = useState(null);
      const reset=()=>{
        setDistance(null)
        setRadius(null)
        setDensity(null)
        setResult(null)

      }
      const calcResult=()=>{
        let res;
        res= (density * 2 * 3.14 * k)/(Math.sqrt(distance*distance+radius*radius)-distance)
        setResult(res) 

      }
      const k = 9.0* Math.pow(10,9)
      return(<>
      <Form>
      <Form.Group className="mb-4">
          <Form.Label>Distance (r)</Form.Label>
          <Form.Control
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            placeholder={"Enter in (m)"}
            value={
              distance === null ? "" : distance
            }
          />
        </Form.Group>
      <Form.Group className="mb-4">
          <Form.Label>Radius (R)</Form.Label>
          <Form.Control
            onChange={(e) => setRadius(e.target.value)}
            type="number"
            placeholder={"Enter in (m)"}
            value={
              radius === null ? "" : radius
            }
          />
        </Form.Group>
      <Form.Group className="mb-4">
          <Form.Label>Surface density (σ)</Form.Label>
          <Form.Control
            onChange={(e) => setDensity(e.target.value)}
            type="number"
            placeholder={"Enter in (kg/m³)"}
            value={
              density === null ? "" : density
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>constant (k)</Form.Label>
          <Form.Control
            readOnly
            value={
              `${k}  N m²/C²`
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            readOnly
            type="number"
            placeholder={
              result === null
                ? "Result"
                : result + " volt"
            }
          />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={calcResult}>
        Calculate
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="dark" onClick={() => reset()} type="reset">
        Reset
      </Button>
        </>)
    }

    //electric potential for the charged ring
    const Ring=()=>{
      const [charge, setCharge] = useState(null);
      const [radius, setRadius] = useState(null);
      const [distance, setDistance] = useState(null);
      const [result, setResult] = useState(null);

      const reset=()=>{
        setRadius(null)
        setResult(null)
        setDistance(null)
        setCharge(null)
      }

      const calcResult=()=>{
        let res;
        res=(k * charge)/Math.sqrt(radius*radius+distance*distance);
        setResult(res)
      }

      const k = 9.0* Math.pow(10,9)
      return(<>
      <Form>
      <Form.Group className="mb-4">
          <Form.Label>Charge (Q)</Form.Label>
          <Form.Control
            onChange={(e) => setCharge(e.target.value)}
            type="number"
            placeholder={"Enter in (C)"}
            value={
              charge === null ? "" : charge
            }
          />
        </Form.Group>
      <Form.Group className="mb-4">
          <Form.Label>Distance (r)</Form.Label>
          <Form.Control
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            placeholder={"Enter in (m)"}
            value={
              distance=== null ? "" : distance
            }
          />
        </Form.Group>
      <Form.Group className="mb-4">
          <Form.Label>Radius (R)</Form.Label>
          <Form.Control
            onChange={(e) => setRadius(e.target.value)}
            type="number"
            placeholder={"Enter in (m)"}
            value={
              radius === null ? "" : radius
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>constant (k)</Form.Label>
          <Form.Control
            readOnly
            value={
              `${k}  N m²/C²`
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            readOnly
            type="number"
            placeholder={
              result === null
                ? "Result"
                : result + " volt"
            }
          />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={calcResult}>
        Calculate
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="dark" onClick={() => reset()} type="reset">
        Reset
      </Button>
      </>)
    }

    //electric potential for point charge
    const Pointcharge=()=>{
      const [charge, setCharge] = useState(null);
      const [distance, setDistance] = useState(null);
      const [result, setResult] = useState(null);
      const k= 9.0*Math.pow(10,9)

      const reset=()=>{
        setDistance(null)
        setCharge(null)
        setResult(null)
      }
      const calcResult=()=>{
        let res=k * charge / distance;
        setResult(res)
      }
        return(<>
        <Form>
        <Form.Group className="mb-4">
          <Form.Label>Charge (Q)</Form.Label>
          <Form.Control
            onChange={(e) => setCharge(e.target.value)}
            type="number"
            placeholder={"Enter in (C)"}
            value={
              charge === null ? "" : charge
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>distance (r)</Form.Label>
          <Form.Control
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            placeholder={"Enter in (m)"}
            value={
              distance === null ? "" : distance
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>constant (k)</Form.Label>
          <Form.Control
            readOnly
            value={
              `${k}  N m²/C²`
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            readOnly
            type="number"
            placeholder={
              result === null
                ? "Result"
                : result + " volt"
            }
          />
        </Form.Group>
        </Form>
        <Button variant="primary" onClick={calcResult}>
        Calculate
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="dark" onClick={() => reset()} type="reset">
        Reset
      </Button>

        </>)
    }




const calC=(key)=>{
    let currentCall;
    switch(key){
        case "Point Charge":
            currentCall=Pointcharge();
            break;
        case "Ring":
            currentCall=Ring();
            break;
        case "Disc":
            currentCall=Disc();
            break;
        case "Sphere":
            currentCall=Sphere();
            break;
        case "Shell":
            currentCall=Shell();
            break;
        default:
            break;
    }
    return currentCall

}

    return (
        <>
      <div className="Calculator__main">
        <Helmet>
          <title>{details.topic}</title>
          <meta
            name="description"
            content={details.details}
            data-react-helmet="true"
          />
          <meta
            name="keywords"
            content="Electromagnetism, calculator, physics, Tech n science, technscience, tech and science"
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
        <div className="Calculator__calc">
          <h3>{details.topic} Calculator</h3>
          <hr />
          {calC(details.topic)}
        </div>
        <div className="Calculator__process">
          <h3> Process</h3>
          <p>{details.process}</p>
        </div>
      </div>
    </>
    )
}
