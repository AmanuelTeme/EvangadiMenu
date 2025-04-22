import "./commonResource/practice-exercise-resource-file-content-1740763074766 (1)/style.css";
import data from "./commonResource/practice-exercise-resource-file-content-1740763074766 (1)/data";
import Fooditem from "./Fooditem";

import React, { Component } from "react";

export default class FoodItems extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <header className="title">
            <h1>Evangadi Menu</h1>
            <div></div>
          </header>

          <div className="foods-container">
            {/* Pass props to FoodItem component */}
            {data.map((i) => {
              return <Fooditem items={i} key={i.id} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
