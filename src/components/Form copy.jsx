import React, { useState, useEffect } from "react";

//Example how to create the form dynamically
//this example does not care the data type of the field
const Form = props => {
  const [person, setData] = useState({
    Name: "",
    Age: 0
  });

  //example how to loop the attributes of an object
  //https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react
  //works with _all_ key-value pair
  const getForm = Object.keys(person).map(function(key) {
    //to get the first letter of labe capitalized
    const nameCapitalized = key.charAt(0).toUpperCase() + key.slice(1);
    return (
      <div key={key}>
        <label className="label">{nameCapitalized}</label>
        <br />
        <input
          className="input"
          type="text"
          onBlur={validate}
          value={person[key]}
          onChange={e => updateData(key, e.target.value)}
        />
      </div>
    );
  });

  function validate() {
      if (document.getElementById("age").value >= 0 && document.getElementById("age").value <= 125) {
          alert("OK");
      } else alert("Age must be between 0-125");
  }

  function updateData(key, val) {
    //don't mutate, take a copy first from person
    //https://medium.com/better-programming/3-ways-
    //to-clone-objects-in-javascript-f752d148054d
    let temp = Object.assign({}, person);
    temp[key] = val;
    setData(temp);
    //save to localStorage
    localStorage.setItem("person", JSON.stringify(person));
  }

  const getPreview = Object.keys(person).map(function(key) {
    return (
      <p key={key}>
        {key}:{person[key]}
      </p>
    );
  });

  return (
    <div className="form6">
      <hr />
      {getForm}
      <p>State</p>
      {getPreview}
    </div>
  );
};

export default Form;
