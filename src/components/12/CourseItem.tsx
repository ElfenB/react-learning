import { ListItem, ListItemText, Typography } from '@mui/material';
import { Course, Period } from './Twelve.types';
import { formatNatoDate, getCourseFromId } from './Twelve.utils';

type Props = {
  classItem: Period;
  courses: Course[];
};

export function CourseItem({ classItem, courses }: Props) {
  const course = getCourseFromId(classItem.elements[1].id, courses);

  return (
    <ListItem>
      <ListItemText
        primary={
          <>
            <Typography variant="h6">{course.longName}</Typography>
            <Typography variant="subtitle1">{course.name}</Typography>
            {/* <Typography variant="body2">{`Placeholder2: ${JSON.stringify(classItem)}`}</Typography> */}
          </>
        }
        secondary={`${formatNatoDate(classItem.startTime)} - ${formatNatoDate(classItem.endTime)}`}
      />
    </ListItem>
  );
}
