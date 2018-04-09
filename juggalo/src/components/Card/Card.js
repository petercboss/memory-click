import React from "react";
import "./Card.css";

const Card = props => (
  <div onClick={() => props.checkGuess(props.id)} className="card">
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default Card;
