import React, { useState } from "react";

const Form2 = props => {

    const [person, setData] = useState({
        name: "Tiina",
        age: 50
    });

    const getPerson = JSON.stringify(person);

    return (
        <div className="form">
            Name <input type="text" onkeyup="this.value = this.value.toUpperCase()" onChange={e => setData({ name: e.target.value})}></input><br />
            Age <input type="number" min="0" max="125" onChange={e => setData({ age: e.target.value})}></input><br />
            <hr />
            
           <p>{person}</p>
        </div>
    );
};

export default Form2;