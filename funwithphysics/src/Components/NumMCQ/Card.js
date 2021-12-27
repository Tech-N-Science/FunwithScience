import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Card.css";
import { Context } from "../../App";
const Singlecard = (props) => {
  const { state } = useContext(Context);
  const user = localStorage.getItem("user");
  return (
    <Card className="singlecard">
      <Card.Header>
        <span
          className={
            "tag " +
            (props.difficulty === "Easy"
              ? "tag-easy"
              : props.difficulty === "Medium"
              ? "tag-med"
              : props.difficulty === "Hard"
              ? "tag-hard"
              : "")
          }
        >
          {props.difficulty}
        </span>
        {props.type}
      </Card.Header>

      <Card.Body className="card-body">
        <div className="flex-column">
          <Card.Title className="card-title">{props.question}</Card.Title>
          <Card.Text className="card-text">{props.topic}</Card.Text>
        </div>
        {state.user || user !== "null" ? (
          <Link
            to={{
              pathname: `/questions/${props.id}`,
              state: {
                type: props.type,
                ques: props.question,
                img: props.image,
                ans: props.answer,
              },
            }}
          >
            <Button variant="primary" className="solve-question-btn">
              Solve Question
            </Button>
          </Link>
        ) : (
          <Link to="/Login">
            <Button
              variant="primary"
              className="solve-question-btn"
              onClick={() => alert("You need to login first!!")}
            >
              Solve Question
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default Singlecard;
