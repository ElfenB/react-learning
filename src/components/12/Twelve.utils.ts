import { Course } from './Twelve.types';

export function formatNatoDate(natoDate: number): string {
  const date = String(natoDate);
  return `${date.substring(0, date.length - 2)}:${date.substring(date.length - 2, date.length)}`;
}

export function getCourseFromId(courseId: number, courses: Course[]): Course {
  const course = courses.filter((c) => c.id === courseId)[0];
  return course;
}
