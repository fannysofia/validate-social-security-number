import React, { useState } from "react";
import "./Validate.css";
//need to  "npm install react-inputs-validation --save"
import { Textbox } from "react-inputs-validation";
//https://www.npmjs.com/package/react-inputs-validation#how-to-use
//https://edwardfhsiao.github.io/react-inputs-validation/
//to understand what is a regular expression https://www.w3schools.com/js/js_regexp.asp
//Using validation component's TextBox with regular expression
//Using car's license plate as example allowing 1-4 chars plus -plus 1-3 numbers
const Validate6 = props => {
  const [license, setLicense] = useState();
  return (
    <div className="validate6">
      <h2>Validate 6</h2>
      <label>Car's license plate number (A..-1..)</label>
      <Textbox
        attributesInput={{
          id: "car",
          name: "car",
          type: "text",
          placeholder: "Place enter license plate number"
        }}
        value={license} // Optional.[String].Default: "".
        placeholder="Place your name here ^-^" // Optional.[String].Default: "".
        onChange={(license, e) => {
          setLicense(license);
          console.log(e);
        }} // Required.[Func].Default: () => {}. Will return the value.
        onBlur={e => {
          console.log(e);
        }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
        //https://flaviocopes.com/javascript-regular-expressions/ (groups)
        //1-3 chars is in regular expression \w{1,3}
        // "-" char is just -
        //1-3 numbers are \d{1,3}
        validationOption={{
          reg: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, // Optional.[Bool].Default: "" Custom regex.
          regMsg: "failed in reg.test(value)" // Optional.[String].Default: "" Custom regex error message.
        }}
      />
    </div>
  );
};

export default Validate6;
