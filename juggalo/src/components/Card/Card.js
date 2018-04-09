import React from "react";
import "./Card.css";

const Card = props => (
  <div onClick={() => props.removeFriend(props.id)} className="card">
    <div className="img-container">
      <img alt="" src={props.image} />
    </div>
  </div>
);

export default Card;
