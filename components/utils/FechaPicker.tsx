import React, { ReactNode, useState } from 'react';
import { MuiPickersUtilsProvider,DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export const FechaPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date.toDate());
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
}

