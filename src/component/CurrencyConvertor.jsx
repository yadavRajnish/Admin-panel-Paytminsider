import React, { useState } from "react";
import Dropddown from "./Dropdown";

export default function CurrencyConvertor() {
  const dropdownArray = ["INR", "USD", "GBP", "AUD"];
  const [baseSymbol, setBaseSymbol] = useState('INR');
  const [targetSymbol, settargetSymbol] = useState("INR");
  const [basePrice, setBasePrice] = useState(0);
  const[targetPrice, setTagetPrice] = useState(0);

console.log(targetSymbol, baseSymbol)

  //getsymbol == settargetsymbol  => targetsymbol

  const rates = {
    INRINR: 1,
    USDUSD: 1,
    GBPGBP: 1,
    AUDAUD: 1,
    INRUSD: 0.012,
    INRGBP: 0.0095,
    INRAUD: 0.01853,
    USDINR: 82.89,
    USDGBP: 0.7878,
    USDAUD: 1.535,
    GBPINR: 105.214,
    GBPUSD: 1.269,
    GBPAUD: 1.9499,
    AUDINR: 53.952,
    AUDUSD: 0.651,
    AUDGBP: 0.5128,
  };

  return (
    <div
      style={{
        margin: "auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="d-flex"
    >
      <h1>Currency Convertor</h1>
      <p className="mb-2">Base Currency</p>
      <Dropddown dropdownArrayKey={dropdownArray}  getSymbol={setBaseSymbol}/>

      <p>target Currency</p>
      <Dropddown dropdownArrayKey={dropdownArray} getSymbol={settargetSymbol}/>

      <div className="d-flex gap-3 my-5">
        <input type="number" placeholder="" onChange={(event)=> {setBasePrice(event.target.value)}}  value={basePrice}/>
        <input type="text" disabled value={`0 ${targetSymbol}`} />
      </div>
    </div>
  );
}



// arrow function
// string liternal 
// useState
// props
// destrcturing
// how to call element in object 
// map()

