import { FormControl, Paper, Select, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Currancyconvertor() {
  const [text1, setText1] = useState(1);
  const [text2, setText2] = useState(1);
  const [country, setCountry] = useState([]);
  const [country2, setCountry2] = useState([]);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = await axios.get(
      "http://data.fixer.io/api/latest?access_key=c4330f5483c8493a3a3cde2656bad6a0"
    );
    console.log(result);
    setCountry(result.data.rates);
    setCountry2(result.data.rates);
  }
  function convert(e) {
    e.preventDefault();
    let num = (value2 / value1) * text1;
    setText2(num);
  }
  return (
    <div>
      <Paper className="currancyPaper">
        <h2>Currency Convertor</h2>
        <form onSubmit={convert}>
          <div style={{ margin: "20px" }}>
            <TextField
              variant="outlined"
              value={text1 || ""}
              onChange={(e) => setText1(e.target.value)}
              autoComplete="off"
              style={{ marginRight: "20px" }}
            />
            <FormControl
              className="currancyFormControl"
              onChange={(e) => setValue1(e.target.value)}
            >
              <Select native>
                {Object.keys(country).map((value, index) => (
                  <option key={index} value={country[value]}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              variant="outlined"
              value={text2 || ""}
              style={{ marginRight: "20px" }}
            />
            <FormControl
              className="currancyFormControl"
              onChange={(e) => setValue2(e.target.value)}
            >
              <Select native>
                {Object.keys(country2).map((value, index) => (
                  <option key={index} value={country[value]}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <button type="submit" className="currancyButton" variant="contained">
            Convert
          </button>
        </form>
      </Paper>
    </div>
  );
}
