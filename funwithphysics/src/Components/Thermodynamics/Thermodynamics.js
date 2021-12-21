import React from 'react'
import { Card } from 'react-bootstrap'
import './thermodynamics.css'
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet'
import Footer from '../Footer/Footer'

export default function Thermodynamics() {
    // topics_data
    const Topics = [
        {
          topic: "Efficiency",
          details: "Thermal efficiency (ηth) of any heat engine is a dimensionless performance measure of a device that use thermal energy, such as internal combustion engine, boiler, furnace etc, and can be defined as the ratio of the work it does (W) and the heat input at the heigh temperature (QH) ", 
          formula:["ηth=W/QH,",<br/>,"eff. of carnot engine (η)=(Tₕ-Tc)/Tₕ,",<br/>,"Refrigerator Efficiency = Qc/(Qₕ-Qc)."],
          process:"Thermal Efficiency is the ratio of work done (W) and the heat at high temperature(QH). For Carnot engine efficiency is found by the difference between the highest temperature(Tₕ) and lowest temperature(Tc) to  the highest temperature(Tₕ). For refregirator efficiency is found by the heat absorbed(Qₕ) to the difference between heat released(Qc) and heat absorbed(Qₕ).",
          siunit:"NA",
          dimension:"NA"
          
        },
        {
          topic: "First law",
          details: "The first law of thermodynamics states that the change in internal energy (ΔU) of the thermodynamics system is equal to the difference between the amount of heat (Q) applied to the system and the worked done by the system (W) due to this.",
          formula: "ΔU = Q - W",
          process:"Basically this is used to find the work done by the thermodynamics system (w) for which we need to be know change in energy (ΔU) after applied the some amount of heat (Q), by putting these values in formula we can easily find any of these.",
          siunit :"joule",
          dimension:"[M L² / T²]"
        },
        {
          topic: "Kinetic Theory of Gases",
          details: `According to the Kinetic Theory of Gases, gaseous particles are constantly moving and collide in completely elastic collisions. In a collection of gas particles, the average kinetic energy is directly proportional to absolute temperature.
      
          According to this theory, the gas molecule is composed of a huge number of tiny molecules compared to the distances between them. The kinetic theory of gases is necessary for clarifying the process of trapping particles by the diffusion mechanism.`,
          formula: "P.V=n.R.T",
          process:
            "The Kinetic theory of gases is based on the Universal Gas Equation and all quantities related to it are derived from this. The required values can be easily found by punching in the other values in the equation and this calculator can very easily do that.",
          siunit: "Pressure: N/m² , Volume: m³ , moles: mol , Universal Gas Constant: J/K.mol , Temperature: K  ",
          dimension: "Pressure: M¹L⁻¹T⁻², Volume: L³, moles: Mol, Universal Gas Constant: M¹ L² T⁻² K⁻¹, Temperature: K",
        },
      
        {
          topic: "Second law",
          details: "The concept of entropy as a physical attribute of a thermodynamic system is established by the second law of thermodynamics. Despite following the necessity of energy conservation as specified in the first law of thermodynamics, entropy predicts the direction of spontaneous processes and determines whether they are irreversible or impossible. Second law of thermodynamics states that the change in entropy (dS) is defined as the ratio of the heat transfer (dQ) into the system and the temperature (T).",
          formula: "dS=dQ/T",
          process:"To find the change in entropy we need to know the heat transfer (dQ) and the temperature (T). Here 'dS' is the change in entropy.",
          siunit :"Entropy: joules per kelvin",
          dimension:"Entropy: [M L² K/ T²]"
        },
        {
          topic:"Third law",
          details:"As the temperature approaches absolute zero, the Third Law of Thermodynamics is concerned with the limiting behaviour of systems. Because most thermodynamics calculations rely solely on entropy differences, the entropy scale's zero point is frequently overlooked. The Third Law, on the other hand, is discussed for completeness' sake because it depicts the state of zero entropy.",
          formula:"S=kB log W",
          process:"Where S is the entropy, kB is Boltzmann constant and its value is 1.38x10−²³ J/K and W is no. of micro states, Put the value of micro states.",
          siunit:"Entropy: Joules per kelvin",
          dimension:"Entropy: [M L² K/ T²]"
        }
        
      
      ];

    return (
       <>
        <div className="mech__main">
            <Helmet>
                <title>Thermodynamics | physics | Tech N Science</title>
                <meta name="description" content="Explore the thermodynamics calculator"/>
                <meta name="keywords" content="Thermodynamics, thermo, calculator, Thermodynamics calculator, thermo calculator, first law, second law, third law, entropy,efficiency,calculator, physics, Tech n science, technscience, tech and science"/>
            </Helmet>
            <div className="mech__header">
                <h1>Thermodynamics-Topics</h1>
            </div>
            <div className="mech__topics-card">
                {
                    Topics.map(data =>
                        <React.Fragment key={data.topic}>
                            <Card key={data.topic} style={{ width:'18rem' }}>
                                
                                <Card.Body>
                                    {
                                        data.details === undefined ?
                                            <Link className="btn" disabled={true} to={`/thermodynamics/calc/${data.topic}`} variant="outline-dark"> {data.topic}</Link> :
                                            <Link className="btn" to={`/thermodynamics/calc/${data.topic}`} variant="outline-dark"> {data.topic}</Link>
                                            
                                    }
                                    <div style={{ padding: "0.3em" }}>
                                        {
                                            data.details === undefined ? <Card.Text> Will be <span style={{ fontWeight: "bold", color: "#19165b" }}>available</span> soon...</Card.Text> : <Card.Text>{" "}</Card.Text>
                                        }
                                    </div>
                                </Card.Body>
                            </Card>
                        </React.Fragment>
                    )
                }
            </div>
        </div >
           <Footer/>
       </>
    ) 
}
