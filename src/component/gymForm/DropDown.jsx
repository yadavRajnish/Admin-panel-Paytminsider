import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown({ array, label, data, setData }) {
  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={data}
          label={label}
          onChange={handleChange}
        >
          {array &&
            array.map((elem, index) => {
              return (
                <MenuItem key={index} value={elem}>
                  {elem}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
}
