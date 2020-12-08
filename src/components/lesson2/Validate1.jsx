import React from "react";
import "./Validate.css";
//https://learning.oreilly.com/videos/react-16/9781789132229/9781789132229-video13_3
//Just example how to check if the field have some data
const Validate1 = props => {
  return (
    <div className="validate1">
      <h2>Validate 1</h2>
      <label>Name</label>
      <input
        onBlur={event => validate1(event)}
        id="name1"
        className="validate"
        type="text"
      ></input>
    </div>
  );

  function validate1(event) {
    //field cannot be empty
    if (event.target.value.length < 1) {
      alert("Name cannot be empty");
    } else alert("Ok");
  }
};

export default Validate1;
