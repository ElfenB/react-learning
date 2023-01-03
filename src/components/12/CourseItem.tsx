import { ListItem, ListItemText, Typography } from '@mui/material';
import { Course, Period } from './Twelve.types';
import { formatNatoDate, getContrastColor, getCourseFromId } from './Twelve.utils';

type Props = {
  bgColor: string;
  classItem: Period;
  courses: Course[];
};

export function CourseItem({ bgColor, classItem, courses }: Props) {
  // Element[0] is wrapper course, Element[1] is next wrapper
  const course = getCourseFromId(classItem.elements[1].id, courses);

  return (
    <ListItem sx={{ background: bgColor, borderRadius: 3, my: 1 }}>
      <ListItemText
        primary={
          <>
            <Typography variant="h6">{course.longName}</Typography>
            <Typography variant="subtitle1">{course.name}</Typography>
            {/* <Typography variant="body2">{`Placeholder2: ${JSON.stringify(classItem)}`}</Typography> */}
          </>
        }
        secondary={
          <Typography>
            {formatNatoDate(classItem.startTime)} - {formatNatoDate(classItem.endTime)}
          </Typography>
        }
        sx={{ color: getContrastColor(bgColor, true) }}
      />
    </ListItem>
  );
}
