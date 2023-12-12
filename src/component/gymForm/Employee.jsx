import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Employee() {
  const [employee, setEmployee] = React.useState("");

  const handleChange = (event) => {
    setEmployee(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Select Employee
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={employee}
          label="Select Employee"
          onChange={handleChange}
        >
          <MenuItem value={1}>Alec Whitten</MenuItem>
          <MenuItem value={2}>Alex Rollins</MenuItem>
          <MenuItem value={3}>Kasey Burt</MenuItem>
          <MenuItem value={4}>Raymond Atkins</MenuItem>
          <MenuItem value={5}>Tyrone Lowe</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
