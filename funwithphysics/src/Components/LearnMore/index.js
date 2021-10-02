import React from 'react'

import blackboardSvg from '../../Images/blackboard-svg.svg'
import computerSvg from '../../Images/computer-svg.svg'

import './styles.css'

export function LearnMore () {
  return (
    <section className="learn-more">
      <article className="list-computer">
        <ul>
          <li>
            <p>Networking</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon"/>
            <a href="/">+</a>
          </li>
          <li>
            <p>DBMS</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon"/>
            <a href="/">+</a>
          </li>
          <li>
            <p>Computational Physics</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon"/>
            <a href="/">+</a>
          </li>
        </ul>
      </article>

      <article className="list-science">
        <ul>
          <li className="science">
            <p>Maths</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon"/>
            <a href="/">+</a>
          </li>
          <li className="science">
            <p>Physics</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon"/>
            <a href="/">+</a>
          </li>
        </ul>
      </article>
    </section>
  )
}
