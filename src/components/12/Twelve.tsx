import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { uniq } from 'lodash';
import { useMemo } from 'react';
import { Day } from './Day';
import { Legend } from './Legend';
import { res } from './mockData';
import { Period } from './Twelve.types';

export function Twelve() {
  // Probably courseId
  const elementId = 1284;

  const data = res.data.result.data;
  const courses = data.elements;
  const periods = data.elementPeriods[elementId];

  const dates = useMemo(() => periods.flatMap((p) => p.date), [periods]);
  const sortedUniqDays = useMemo(() => uniq(dates.sort((a, b) => a - b)), [dates]);

  return (
    <Container>
      <Typography variant="h2">TimeTable</Typography>

      {/* Spacing */}
      <Box sx={{ m: 2 }} />

      <Legend courses={courses} />

      {/* Spacing */}
      <Box sx={{ m: 5 }} />

      {sortedUniqDays.map((day) => (
        <Day key={day} courses={courses} date={day} periods={periods as Period[]} />
      ))}
    </Container>
  );
}
