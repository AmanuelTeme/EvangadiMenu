import React, { Component } from "react";

export default class Fooditem extends Component {
  render() {
    let { img, title, price, desc, link } = this.props.items;
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3> {title} </h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{desc}</div>

          {link && (
            <div className="morelink">
              <a href="#">{link} </a>
            </div>
          )}
        </div>
      </>
    );
  }
}
