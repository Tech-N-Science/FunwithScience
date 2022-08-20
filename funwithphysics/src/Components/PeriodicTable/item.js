import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { elements } from "./data";

export default function Item(props) {
  const [hover, setHover] = useState(false);
  let num = props.num;
  let element = elements[num];

  return (
    <div
      title={element.name}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      // onClick={this.openInfo}
      className={`element element-${num} ${element.category}
          
        `}
    >
      <Link
        to={`/periodic/property/${num}`}
        className={`linkk ${hover ? "activee" : ""}`}
      >
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
      </Link>
    </div>
  );
}
