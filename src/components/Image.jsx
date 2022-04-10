import React from "react";
import main from "../images/main.jpg";
import "../App.css";

function Image() {
  return (
    <div className="image">
      <img src={main} />
      <div className="btn">
        <p>Let your curiosity do the booking</p>
        <a href="#">I’m flexible</a>
      </div>
    </div>
  );
}

export default Image;
