import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import moment from 'moment';
import { useCallback, useMemo, useState } from 'react';
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

  // URL with proxy
  const url = useMemo(() => {
    console.log('url generation with date:', date);

    return (
      'http://192.168.178.44:1880/untis-proxy/' +
      encodeURIComponent(
        `https://mese.webuntis.com/WebUntis/api/public/timetable/weekly/data?elementType=1&elementId=${elementId}&date=${date}&formatId=2`
      )
    );
  }, [date]);

  // Cookie with schoolname required when proxy removed
  // schoolname="_YmJzIGJpbmdlbg=="
  const { data, isLoading, error, isFetching } = useQuery({
    queryFn: async (): Promise<Response> => {
      console.log('data fetching', date, url);
      return axios.get(url).then((res) => res.data);
    },
    queryKey: ['timetable'],
  });

  // console.log(JSON.stringify(data));

  const myData = data?.data.result.data;

  const handleDateChanged = useCallback(
    (newDate: string) => {
      console.log('invalidate query timetable', newDate);
      setDate(newDate);
      // queryClient.invalidateQueries({ queryKey: ['timetable'] });
      // Invalidation not successful because url has to change for new data
      // TODO: Find better way to solve this (prefer invalidate, makes it possible to prefetch and cache better)
      queryClient.removeQueries({ queryKey: ['timetable'] });
    },
    [queryClient]
  );

  if (error instanceof Error) {
    return 'An error has occurred: ' + error.message;
  }

  return (
    <Container>
      <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ m: 2 }} variant="h2">
          Stundenplan
        </Typography>
        <TimeSelect dateChanged={(newDate) => handleDateChanged(newDate)} />
      </Box>

      <DelayedSpinner delayMs={500} loading={isFetching || isLoading} />

      <DataDisplay data={myData} elementId={elementId} />
    </Container>
  );
}
