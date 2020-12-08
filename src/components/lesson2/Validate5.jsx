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
      <h2>Enter your social security number</h2>
      <label><u>The number is format mmkkvv-abcn:</u>< br />
    mm is a number between 01-31, < br />
    kk is a number between 01-12,< br />
    vv is number between 01-99. The minus sign can also be + or A.< br />
    abc section is numeric and the last char can be numeric or letter.< br />< br /></label>
      <Textbox
        attributesInput={{
          // Optional.
          id: "Number",
          name: "Number",
          type: "text", // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
          placeholder: "Place the number here"
        }}
        value={number} // Optional.[String].Default: "".
        onChange={(number, e) => {
          setNumber(number);
          console.log(number);
        }} // Required.[Func].Default: () => {}. Will return the value.
        //onBlur={e => validate1(e.target.value)}
        onBlur={e => validate(e)} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
        //https://flaviocopes.com/javascript-regular-expressions/ (groups)
        //1-3 chars is in regular expression \w{1,3}
        // "-" char is just -
        //1-3 numbers are \d{1,3}
        validationOption={{
          reg: /^(0[1-9]||[12][0-9]||3[01])(0[1-9]||1[0-2])([0-9][1-9])(-||\+||[A])(\d{3})(\w{1}||\d{1})$/, // Optional.[Bool].Default: "" Custom regex.
          regMsg: "Format is not correct!" // Optional.[String].Default: "" Custom regex error message.
        }}
      />
  
    </div>
  );

  
};

function validate(event) {
  //Is there a way to bring the fixed reg expression inside this function from validationOption.reg?
  const regexp = /^(0[1-9]||[12][0-9]||3[01])(0[1-9]||1[0-2])([0-9][1-9])(-||\+||[A])(\d{3})(\w{1}||\d{1})$/;
    if (regexp.test(document.getElementById("Number").value)){
      document.getElementById("Number").style.background = "white";
    } else {
    document.getElementById("Number").style.background = "red";
  }
 
    
};

export default Validate5;
