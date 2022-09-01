import React from "react";
import "./periodicTable.css";
import Item from "./item";

export default function PeriodicTable() {
  const getItems = (start, end) => {
    let items = [];
    for (let i = start; i <= end; i++) {
      items.push(<Item num={i} />);
    }
    return items;
  };

  return (
    <div class="heading">
      <center>
        <h1>Periodic Table</h1>
        <p>
          Data is taken from{" "}
          <a href="https://github.com/Bowserinator/Periodic-Table-JSON">
            https://github.com/Bowserinator/Periodic-Table-JSON
          </a>
        </p>
      </center>
      <div class="wrapper">
        <div id="periodic-table">
          {getItems(1, 57)}
          {getItems(72, 89)}
          {getItems(104, 118)}
          {getItems(58, 71)}
          {getItems(90, 103)}
        </div>
      </div>
    </div>
  );
}
