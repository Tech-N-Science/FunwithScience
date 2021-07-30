import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './classicalMechanics.css'
import Topics from "./topics_data";

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
                                <Card.Img style={{ height: '15rem', objectFit: "cover" }} variant="top" src={data.image === undefined ? "https://images.unsplash.com/photo-1525207106105-b340f7384b30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBoeXNpY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" : data.image} />
                                <Card.Body>
                                    <Card.Title>{data.topic}</Card.Title>
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
