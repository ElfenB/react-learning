import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment';
import { useCallback, useState } from 'react';
import { DataDisplay } from './DataDisplay';
import { DelayedSpinner } from './DelayedSpinner';
import { TimeSelect } from './TimeSelect';
import { Response } from './Twelve.types';

export function Twelve() {
  // console.log('Twelve rendered');

  // Probably courseId
  const elementId = 1284;

  const [date, setDate] = useState(moment().format('yyyy-MM-DD'));

  const queryClient = useQueryClient();

  const proxyUrl = 'http://localhost:3000/proxy/';

  const url = encodeURIComponent(
    'https://mese.webuntis.com/WebUntis/api/public/timetable/weekly/data?elementType=1&formatId=2'
  );

  // Cookie with schoolname
  // schoolname="_YmJzIGJpbmdlbg=="
  const { data, isLoading, error, isFetching } = useQuery({
    queryFn: async (): Promise<Response> => {
      console.log('fetching data for', date);
      const res = await axios.get(proxyUrl + url, {
        params: {
          date,
          elementId,
          elementType: 1,
          formatId: 2,
          // When not using proxy, move this outside of params
          headers: {
            Cookie: 'schoolname="_YmJzIGJpbmdlbg=="'
          }
        },
      });
      return res.data;
    },
    queryKey: ['timetable', elementId, date],
  });

  // console.log(JSON.stringify(data));

  const myData = data?.data.result.data;

  const handleDateChanged = useCallback(
    (newDate: string) => {
      console.log('invalidate query timetable', newDate);
      setDate(newDate);
      queryClient.invalidateQueries({ queryKey: ['timetable'] });
    },
    [queryClient]
  );

  return (
    <Container>
      <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ m: 2 }} variant="h2">
          Stundenplan
        </Typography>
        <TimeSelect dateChanged={(newDate) => handleDateChanged(newDate)} />
      </Box>

      <DelayedSpinner delayMs={500} loading={isFetching || isLoading} />

      {!(error instanceof Error) ? (
        <DataDisplay data={myData} elementId={elementId} />
      ) : (
        <Typography>{`An error has occurred: ${error.message}`}</Typography>
      )}
    </Container>
  );
}
