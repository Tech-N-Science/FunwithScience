import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './classicalMechanics.css'
import Topics, { momentum } from "./topics_data";
import bg from '../../Images/bg1.jpg'

export default function ClassicalMechanics() {
    return (
        <div className="mech__main">
            <div className="mech__header">
                <h1>Classical Mechanics-Topics</h1>
            </div>
            <div className="mech__topics-card">
                {
                    Topics.map(data =>
                        <>
                            <Card key={data.topic} style={{ width: '18rem' }}>
                                <Card.Img alt={data.topic} style={{ height: '15rem', objectFit: "cover" }} variant="top" src={data.image === undefined ? bg : data.image} />
                                <Card.Body>
                                    <Card.Title>{data.topic}</Card.Title>
                                    {
                                        data.image === undefined ? <Card.Text> Will be <span style={{ fontWeight: "bold", color: "#19165b" }}>available</span> soon...</Card.Text> : null
                                    }
                                    <Button variant="secondary">Open {data.topic}</Button>
                                </Card.Body>
                            </Card>
                        </>
                    )
                }
            </div>
        </div >
    )
}
