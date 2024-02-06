import { useMemo } from 'react';
import { Box, Divider, List, Typography } from '@mui/material';
import moment from 'moment';
import { CourseItem } from './CourseItem';
import type { Course, Period } from './Twelve.types';
import { stringToColor } from './Twelve.utils';
import 'moment/dist/locale/de';

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
    [date],
  );
  const dayOfWeek = useMemo(() => moment(date, 'YYYYMMDD').format('dddd'), [date]);
  const isThisWeek = useMemo(() => formattedDate === dayOfWeek, [dayOfWeek, formattedDate]);

  // Filter on only classes of this day
  const classes = useMemo(() => periods?.filter((p) => p.date === date), [date, periods]);
  // Sort classes by startTime

  const sortedClasses = useMemo(() => classes?.sort((a, b) => a.startTime - b.startTime), [classes]);

  // Reduce all classes with the same id to one item and take lowest start and highest end time
  const expandedSortedClasses = useMemo(() => {
    let ret: Period[] = [];
    sortedClasses?.forEach((cls) => {
      if (ret.filter((a) => a.lessonId === cls.lessonId).length < 1) {
        // If not in the array, push it into
        ret.push(cls);
      } else {
        // If already in the array, change start and end time to min/max value to expand the class
        ret = ret.flatMap((p) =>
          p.lessonId === cls.lessonId
            ? { ...p, endTime: Math.max(p.endTime, cls.endTime), startTime: Math.min(p.startTime, cls.startTime) }
            : p,
        );
      }
    });
    return ret;
  }, [sortedClasses]);

  // map with ids and colors
  const colorMap = new Map();
  courses.forEach((c) => {
    colorMap.set(c.id, stringToColor(String(c.longName)));
  });

  return (
    <>
      <Typography variant="h5">
        {dayOfWeek} {!isThisWeek && `(${formattedDate})`}
      </Typography>

      {expandedSortedClasses.length > 0 && (
        <List>
          {expandedSortedClasses.map((cls) =>
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- unknown api definition
            cls.elements[1] === undefined ? (
              // If not defined, print empty element
              <></>
            ) : (
              <Box key={cls.id + cls.lessonId}>
                <CourseItem bgColor={colorMap.get(cls.elements[1].id) as string} classItem={cls} courses={courses} />
                <Divider component="li" variant="fullWidth" />
              </Box>
            ),
          )}
        </List>
      )}
    </>
  );
}
