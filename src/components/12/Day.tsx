import { Box, Divider, List, Typography } from '@mui/material';
import moment from 'moment';
import 'moment/dist/locale/de';
import { useMemo } from 'react';
import { CourseItem } from './CourseItem';
import { Course, Period } from './Twelve.types';

type Props = {
  courses: Course[];
  date: number;
  periods?: Period[];
};

export function Day({ courses, date, periods }: Props) {
  moment.locale('de');
  // const formattedDate = moment(String(date)).format('L');
  const formattedDate = useMemo(
    () =>
      moment(String(date), 'YYYYMMDD').calendar(null, {
        nextDay: '[Morgen]',
        nextWeek: 'dddd',
        sameDay: '[Heute]',
      }),
    [date]
  );
  const dayOfWeek = useMemo(() => moment(date, 'YYYYMMDD').format('dddd'), [date]);

  const classes = useMemo(() => periods?.filter((p) => p.date === date), [date, periods]);
  const sortedClasses = useMemo(() => classes?.sort((a, b) => a.startTime - b.startTime), [classes]);

  return (
    <>
      <Typography variant='h5'>{`${dayOfWeek} (${formattedDate})`}</Typography>

      {sortedClasses && (
        <List>
          {sortedClasses.map((cls) => (
            <Box key={cls.id + cls.lessonId}>
              <CourseItem classItem={cls} courses={courses} />
              <Divider component="li" variant="fullWidth" />
            </Box>
          ))}
        </List>
      )}
    </>
  );
}
