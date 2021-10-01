import React from 'react'

import blackboardSvg from '../../Images/blackboard-svg.svg'
import computerSvg from '../../Images/computer-svg.svg'

import './styles.css'

export function LearnMore () {
  return (
    <section className="learn-more">
      <article>
        <ul>
          <li>
            <p>Networking</p>
            <img src={computerSvg} alt="Computer icon"/>
            <a href="/">+</a>
          </li>
          <li>
            <p>DBMS</p>
            <img src={computerSvg} alt="Computer icon"/>
            <a href="/">+</a>
          </li>
          <li>
            <p>Computational Physics</p>
            <img src={computerSvg} alt="Computer icon"/>
            <a href="/">+</a>
          </li>
          <li class="math">
            <p>Maths</p>
            <img src={blackboardSvg} alt="Icon"/>
            <a href="/">+</a>
          </li>
          <li class="math">
            <p>Physics</p>
            <img src={blackboardSvg} alt="Icon"/>
            <a href="/">+</a>
          </li>
        </ul>
      </article>
    </section>
  )
}
