import React from "react";
import "./Validate.css";
//https://learning.oreilly.com/videos/react-16/9781789132229/9781789132229-video13_3
//Improved validation check that the value is number
const Validate3 = props => {
  return (
    <div className="validate3">
      <h2>Validate 3</h2>
      <label>Name</label>
      <input
        onBlur={e => validate2(e)}
        id="name3"
        className="validate"
        type="text"
      ></input>
    </div>
  );

  function validate2(event) {
    //console.log(event.target.value);
    //checking that the value is numeric isNaN is not a number !isNaN is number
    //1,5 check need to check that comma is not allowed value.indexOf(",") < 0
    const value = event.target.value;
    if (value != null && !isNaN(parseFloat(value)) && value.indexOf(",") < 0) {
      document.getElementById("name3").style.background = "white";
    } else {
      document.getElementById("name3").style.background = "red";
    }
  }
};

export default Validate3;
