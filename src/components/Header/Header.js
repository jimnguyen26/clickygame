import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      <p>Score: {props.score}</p>
      High Score: {props.highscore}
    </div>
  </div>
);

export default Header;
