import React from 'react'
import { Card } from 'react-bootstrap'
import './thermodynamics.css'
import Topics from "./topics_data"
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet'

export default function Thermodynamics() {
    return (
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
    )
}
