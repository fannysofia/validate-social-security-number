import React, { useState } from "react";
import "./Validate.css";
//need to  "npm install react-inputs-validation --save"
import { Textbox } from "react-inputs-validation";
//https://www.npmjs.com/package/react-inputs-validation#how-to-use
//https://edwardfhsiao.github.io/react-inputs-validation/
//Using validation component's TextBox that string value exists
const Validate4 = props => {
  const [name, setName] = useState("Timo");
  return (
    <div className="validate4">
      <h2>Validate 4</h2>
      <label>Name (must enter string)</label>
      <Textbox //here using TextBox from react-inputs-validation component
        attributesInput={{
          // Optional.
          id: "Name4",
          name: "Name",
          type: "text",
          placeholder: "Place your name here"
        }}
        value={name} // Optional.[String].Default: "".
        onChange={(name, e) => {
          setName(name);
          console.log(name);
        }} // Required.[Func].Default: () => {}. Will return the value.
        onBlur={e => {
          console.log(e);
        }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
        validationOption={{
          name: "Name2", // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
          check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
          required: true // Optional.[Bool].Default: true. To determin if it is a required field.
        }}
      />
    </div>
  );
};

export default Validate4;
