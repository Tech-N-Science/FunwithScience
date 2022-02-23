import React, { useState } from "react";
import blackboardSvg from "../../Images/blackboard-svg.svg";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import "./styles.css";

export function LearnMore() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  window.onresize = function () {
    setWindowHeight(window.innerHeight);
  };

  window.onscroll = function () {
    const animEl = document.querySelectorAll(".fade-in-transition");
    animEl.forEach((el) => {
      var pos = el.getBoundingClientRect();
      if (pos.top < 0.72 * windowHeight) {
        el.style.opacity = "1";
      } else {
        el.style.opacity = "0";
      }
    });
  };

  return (
    <section className="learn-more">
      {/* <article className="list-computer">
        <ul>
          <li data-aos="fade-in">
            <p>Networking</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
          <li data-aos="fade-in">
            <p>DBMS</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
          <li data-aos="fade-in">
            <p>Computational Physics</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon" />
            <Link to="/">+</Link>
          </li>
        </ul>
  </article>*/}

      <article className="list-science">
        <ul>
          <li className="science fade-in-transition topic-card">
            <p>Maths</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon" />
            <div className="dropdown">
              <Link className="plus" to="/">
                <span className="explore-btn">
                  Explore
                  <i class="fa fa-compass add-icon" aria-hidden="true"></i>
                  </span>
              </Link>
              <div className="dropdown-content">
                <Link to="/maths">Calculator</Link>
                <Link to="/MathQuestion">Questions</Link>
                <Link to="/mathsquiz">Quiz</Link>
              </div>
            </div>
          </li>
          <li className="science fade-in-transition topic-card">
            <p>Physics</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon" />
            <div className="dropdown">
              <Link className="plus" to="/">
                <span className="explore-btn">
                  Explore
                  <i class="fa fa-compass add-icon" aria-hidden="true"></i>
                  </span>
              </Link>
              <div className="dropdown-content">
                <Link to="/physics">Calculator</Link>
                <Link to="/questions">Questions</Link>
                <Link to="/physicsquiz">Quiz</Link>
              </div>
            </div>
          </li>
          <li className="science fade-in-transition topic-card">
            <p>Chemistry</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon" />
            <div className="dropdown">
              <Link className="plus" to="/">
                <span className="explore-btn">
                  Explore
                  <i class="fa fa-compass add-icon" aria-hidden="true"></i>
                  </span>
              </Link>
              <div className="dropdown-content">
                <Link to="/">Calculator</Link>
                <Link to="/">Questions</Link>
                <Link to="/">Quiz</Link>
              </div>
            </div>
          </li>
        </ul>
      </article>
      <p className="FAQ">Frequently Asked Questions</p>
      <div className="faq fade-in-transition">
        <input id="faq-a" type="checkbox" />
        <label for="faq-a">
          <p className="faq-heading">What is this Website for?</p>
          <div className="faq-arrow"></div>
          <p className="faq-text">
            This website is to make your physics easy. Just enter the values
            into the formula and you will get the answer with the procedure.!
          </p>
        </label>
        <input id="faq-b" type="checkbox" />
        <label for="faq-b">
          <p className="faq-heading">How to use this Website?</p>
          <div className="faq-arrow"></div>
          <p className="faq-text">
            Just click on the Learn button on the homepage. Then choose the
            branch of physics and click on it. Next on the contents page choose
            the topic and then enjoy with the calculator.
          </p>
        </label>
        <input id="faq-c" type="checkbox" />
        <label for="faq-c">
          <p className="faq-heading">How to contact us?</p>
          <div className="faq-arrow"></div>
          <p className="faq-text">
            on the navbar click on contact us and then write your queries or
            follow us on our social media handles.
          </p>
        </label>
      </div>
    </section>
  );
}
