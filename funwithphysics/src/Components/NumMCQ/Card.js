import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Card.css";

const Singlecard = (props) => {
  return (
    <Card className="singlecard">
      <Card.Header>{props.type}</Card.Header>
    
      <Card.Body className="card-body">
      <div classname="flex-column">
        <Card.Title className="card-title">{props.question}</Card.Title>
        <Card.Text className="card-text">{props.topic}</Card.Text>
        </div>
        <Link
          to={{
            pathname: `/questions/${props.id}`,
            state: {
              type: props.type,
              question: props.question,
              answer: props.answer,
            },
          }}
        >
          <Button variant="primary" className="solve-question-btn">
            Solve Question
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Singlecard;
