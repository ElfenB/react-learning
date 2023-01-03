import { Box, Fade, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { uniq } from 'lodash';
import moment from 'moment';
import { useCallback, useMemo, useState } from 'react';
import { Day } from './Day';
import { DelayedSpinner } from './DelayedSpinner';
import { Legend } from './Legend';
import { res } from './mockData';
import { TimeSelect } from './TimeSelect';
import { Period } from './Twelve.types';

type Response = typeof res;

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
  const courses = myData?.elements ? myData.elements : [];
  const periods = useMemo(
    () => (myData?.elementPeriods[elementId] ? myData.elementPeriods[elementId] : []),
    [myData?.elementPeriods]
  );

  const dates = useMemo(() => periods.flatMap((p) => p.date), [periods]);
  const sortedUniqDays = useMemo(() => uniq(dates.sort((a, b) => a - b)), [dates]);

  const handleDateChanged = useCallback(
    (newDate: string) => {
      console.log('invalidate query timetable', newDate);
      setDate(newDate);
      // queryClient.invalidateQueries({ queryKey: ['timetable'] });
      // Invalidation not successful because url has to change for new data
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

      <Fade in={data !== undefined} style={{ transitionDelay: data !== undefined ? '200ms' : '0ms' }} unmountOnExit>
        <Box>
          {/* Spacing */}
          <Box sx={{ m: 2 }} />
          <Legend courses={courses} />
          {/* Spacing */}
          <Box sx={{ m: 5 }} />
          {sortedUniqDays.map((day) => (
            <Day key={day} courses={courses} date={day} periods={periods as Period[]} />
          ))}
        </Box>
      </Fade>
    </Container>
  );
}
