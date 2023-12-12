import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

export default function TimeSlot({ setData, data }) {
  const [value, setValue] = React.useState(
    data ? data : dayjs("2022-04-17T15:30")
  );

  function handleChange(newValue) {
    setValue(newValue);
    setData(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["StaticTimePicker"]}>
        <DemoItem>
          <StaticTimePicker value={value} onChange={handleChange} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
