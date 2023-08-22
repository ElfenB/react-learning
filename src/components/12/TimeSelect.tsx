import { useCallback, useState } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment, { Moment } from 'moment';
import { WeekSkipper } from './WeekSkipper';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    alignItems: 'center',
    display: 'flex',
  },
};

type Props = {
  dateChanged: (newDate: string) => void;
};

export function TimeSelect({ dateChanged }: Props) {
  const [date, setDate] = useState<Moment | null>(moment());

  const handleDateChange = useCallback(
    (newValue: Moment | null) => {
      if (newValue !== null) {
        console.log('TimeSelect new date:', moment(newValue).format('yyyy-MM-DD'));
        setDate(newValue);
        dateChanged(moment(newValue).format('yyyy-MM-DD'));
      }
    },
    [dateChanged],
  );

  const handleAddWeeks = useCallback(
    (numWeeks: number) => handleDateChange(moment(date).add(numWeeks, 'week')),
    [date, handleDateChange],
  );

  return (
    <Box sx={sx.root}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <WeekSkipper direction="back" onClick={() => handleAddWeeks(-1)} />

        <DatePicker
          label="Wochenstart"
          renderInput={(params) => <TextField {...params} />}
          value={date}
          onChange={(newValue) => handleDateChange(newValue)}
        />

        <WeekSkipper direction="forward" onClick={() => handleAddWeeks(1)} />
      </LocalizationProvider>
    </Box>
  );
}
