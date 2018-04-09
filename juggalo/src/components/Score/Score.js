import React from "react";
import "./Score.css";

const Score = props => (
    <div className="score col-md-6">
        <p>Your Score: {props.score}</p>
        <p>High Score: {props.high}</p>
        <p>{props.correct}</p>
    </div>
);

export default Score;