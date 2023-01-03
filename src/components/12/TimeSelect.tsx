import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, SxProps, Theme } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment, { Moment } from 'moment';
import { useCallback, useState } from 'react';

const sx: Record<string, SxProps<Theme>> = {
  root: {
    alignItems: 'center',
    display: 'flex',
  },
};

export function TimeSelect() {
  const [date, setDate] = useState<Moment | null>(moment());

  const handleAddWeeks = useCallback(
    (numWeeks: number) => setDate((prevDate) => moment(prevDate).add(numWeeks, 'week')),
    []
  );

  return (
    <Box sx={sx.root}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Button onClick={() => handleAddWeeks(-1)}>
          <ArrowBackIosNewIcon />
        </Button>

        <DatePicker
          label="Wochenstart"
          renderInput={(params) => <TextField {...params} />}
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
            console.log(moment(newValue).format('yyyy-MM-DD'));
          }}
        />

        <Button onClick={() => handleAddWeeks(1)}>
          <ArrowForwardIosIcon />
        </Button>
      </LocalizationProvider>
    </Box>
  );
}
