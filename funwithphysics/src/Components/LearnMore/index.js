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
            <link href="/">+</link>
          </li>
          <li>
            <p>DBMS</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon"/>
            <link href="/">+</link>
          </li>
          <li>
            <p>Computational Physics</p>
            <small className="topic computer-topic">Computer</small>
            <img src={computerSvg} alt="Computer icon"/>
            <link href="/">+</link>
          </li>
        </ul>
      </article>

      <article className="list-science">
        <ul>
          <li className="science">
            <p>Maths</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon"/>
            <div class="dropdown">
              <link className="plus" href="/">+</link>
              <div class="dropdown-content">
                <link href="/">Calculator</link>
                <link href="/">Questions</link>
              </div>
            </div>
          </li>
          <li className="science">
            <p>Physics</p>
            <small className="topic science-topic">Science</small>
            <img src={blackboardSvg} alt="Icon"/>
            <div class="dropdown">
              <link className="plus" href="/">+</link>
              <div class="dropdown-content">
                <link href="/physics">Calculator</link>
                <link href="/">Questions</link>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </section>
  )
}
