import React from "react";
import blackboardSvg from "../../Images/blackboard-svg.svg";
import computerSvg from "../../Images/computer-svg.svg";
import addCircleSvg from "../../Images/add-circle.svg";
import { Link } from "react-router-dom";
import "./styles.css";

export function LearnMore() {
  return (
    <section className="learn-more">
      <article className="list-computer">
        <ul>
          <li>
            <p>Networking</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
          <li>
            <p>DBMS</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
          <li>
            <p>Computational Physics</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
        </ul>
      </article>

      <article className="list-science">
        <ul>
          <li className="science">
            <p>Maths</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon" />
            <div class="dropdown">
              <Link className="plus" to="/">
                <img
                  src={addCircleSvg}
                  className="lower-plus"
                  alt="AddCircle"
                />
              </Link>
              <div class="dropdown-content">
                <Link to="/">Calculator</Link>
                <Link to="/">Questions</Link>
              </div>
            </div>
          </li>
          <li className="science">
            <p>Physics</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon" />
            <div class="dropdown">
              <Link className="plus" to="/">
                <img
                  src={addCircleSvg}
                  className="lower-plus"
                  alt="AddCircle"
                />
              </Link>
              <div class="dropdown-content">
                <Link to="/physics">Calculator</Link>
                <Link to="/questions">Questions</Link>
                <Link to="/quiz">Quiz</Link>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}
