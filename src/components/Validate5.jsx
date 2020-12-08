import React, { useState } from "react";
import "./Validate.css";
//need to  "npm install react-inputs-validation --save"
import { Textbox } from "react-inputs-validation";
//https://www.npmjs.com/package/react-inputs-validation#how-to-use
//https://edwardfhsiao.github.io/react-inputs-validation/
//Using validation component's TextBox but allowing just number values
const Validate5 = props => {
  const [number, setNumber] = useState();
  return (
    <div className="validate5">
      <h2>Validate 5</h2>
      <label>Number (must enter number between 10-100</label>
      <Textbox
        attributesInput={{
          // Optional.
          id: "Number",
          name: "Number",
          type: "text", // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
          placeholder: "Place your number here ^-^"
        }}
        value={number} // Optional.[String].Default: "".
        onChange={(number, e) => {
          setNumber(number);
          console.log(number);
        }} // Required.[Func].Default: () => {}. Will return the value.
        onBlur={() => {}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
        validationOption={{
          type: "number", // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
          min: 1, // Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
          max: 2 // Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
          // mantissa: 2, // Optional.[Number].Default: -1. Number precision.
        }}
      />
    </div>
  );
};

export default Validate5;
