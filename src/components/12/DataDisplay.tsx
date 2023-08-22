import { useMemo } from 'react';
import { Box, Fade } from '@mui/material';
import { uniq } from 'lodash';
import { Day } from './Day';
import { Legend } from './Legend';
import { Course, Period } from './Twelve.types';

type Props = {
  data: any;
  elementId: number;
};

export function DataDisplay({ data, elementId }: Props) {
  const courses: Course[] = data?.elements ? data.elements : [];
  const periods: Period[] = useMemo(
    () => (data?.elementPeriods[elementId] ? data.elementPeriods[elementId] : []),
    [data?.elementPeriods, elementId],
  );

  const dates = useMemo(() => periods.flatMap((p) => p.date), [periods]);
  const sortedUniqDays = useMemo(() => uniq(dates.sort((a, b) => a - b)), [dates]);

  return (
    <Fade in={data !== undefined} style={{ transitionDelay: data !== undefined ? '200ms' : '0ms' }} unmountOnExit>
      <Box>
        {/* Spacing */}
        <Box sx={{ m: 2 }} />

        <Legend courses={courses} />

        {/* Spacing */}
        <Box sx={{ m: 5 }} />

        {sortedUniqDays.map((day) => (
          <Day key={day} courses={courses} date={day} periods={periods } />
        ))}
      </Box>
    </Fade>
  );
}
