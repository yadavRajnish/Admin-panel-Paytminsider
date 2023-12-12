import React from "react";


export default function Dropddown(props) {
  console.log(props)
  return (
    <div className="container" style={{width : '250px'}}>
      <select onChange={(event)=>{props.getSymbol(event.target.value)}} className="form-select" aria-label="Default select example">
        {/* <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option> */}
      {props.dropdownArrayKey && props.dropdownArrayKey.map((a, index) => <option key={index} value={a}>{a}</option>)}
      </select>
    </div>
  );
}

