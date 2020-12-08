import React from "react";
import "./Validate.css";
//https://learning.oreilly.com/videos/react-16/9781789132229/9781789132229-video13_3
//Improved validation now checking and changing the color if not
const Validate2 = props => {
  return (
    <div className="validate2">
      <h2>Validate 2</h2>
      <label>Name</label>
      <input
        onBlur={validate2}
        id="name2"
        className="validate"
        type="text"
      ></input>
    </div>
  );

  function validate2() {
    //if field empty, change color
    if (document.getElementById("name2").value.length < 1) {
      document.getElementById("name2").style.background = "red";
    } else {
      document.getElementById("name2").style.background = "white";
    }
  }
};

export default Validate2;
