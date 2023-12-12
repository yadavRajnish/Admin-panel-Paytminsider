import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

export default function Calendar({setData, data}) {

  const [value, setValue] = React.useState(data ? data : dayjs('2022-04-17'));

  function handleChange(newValue){
    setValue(newValue);
    setData(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={value} onChange={handleChange} />
    </LocalizationProvider>
  );
}

