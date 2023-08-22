import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Course } from './Twelve.types';

type Props = {
  courses: Course[];
};

export function Legend({ courses }: Props) {
  return (
    <>
      <Typography variant="h4">Kurse</Typography>
      {/* <List>
        {courses.map((course) => (
          <ListItem key={course.id}>
            {course.name} = {course.longName}
          </ListItem>
        ))}
      </List> */}
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell component={'th'}>
                <Typography variant="button">Kurz</Typography>
              </TableCell>
              <TableCell component={'th'}>
                <Typography variant="button">Lang</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.longName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
