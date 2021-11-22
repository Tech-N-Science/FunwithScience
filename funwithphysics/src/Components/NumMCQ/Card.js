import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Singlecard = (props) => {
  return (
    <Card>
      <Card.Header>{props.type}</Card.Header>
      <Card.Body>
        <Card.Title>{props.question}</Card.Title>
        <Card.Text>
            {props.topic}
        </Card.Text>
        <Link to={{
          pathname: `/questions/${props.id}`,
          state: {type: props.type, question: props.question, answer: props.answer}
          }}>
          <Button variant="primary">Solve Question</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Singlecard;
