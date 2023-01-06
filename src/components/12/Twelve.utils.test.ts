import { describe, expect, it, test } from 'vitest';
import { Course } from './Twelve.types';
import { formatNatoDate, getContrastColor, getCourseFromId, padZero, stringToColor } from './Twelve.utils';

describe('formatNatoDate', () => {
  // Expect 930 to get 9:30
  test('transform values with 3 digits', () => {
    const res = formatNatoDate(930);
    expect(res).toBe('09:30');
  });

  // Expect 1030 to get 10:30
  test('transform values with 4 digits', () => {
    const res = formatNatoDate(1030);
    expect(res).toBe('10:30');
  });
});

describe('getCourseFromId', () => {
  it('should get a course from the array with a given id', () => {
    const courseId = 1284;
    const courses: Course[] = [
      {
        alternatename: '',
        canViewTimetable: true,
        displayname: 'KBM22a',
        id: 1284,
        longName: 'Kaufmann/-frau für Büromanagement GS - Block',
        name: 'KBM22a',
        roomCapacity: 0,
        type: 1,
      },
      {
        alternatename: '124',
        canViewTimetable: true,
        displayname: 'KBM_L01',
        id: 1308,
        longName: 'Die eigene Rolle im Bet .. n Betrieb präsentieren',
        name: 'KBM_L01',
        roomCapacity: 0,
        type: 3,
      },
    ];
    expect(getCourseFromId(courseId, courses)).toBe(courses[0]);
  });

  it('should return undefined when no course was not found', () => {
    const courseId = 1284;
    const courses: Course[] = [];
    expect(getCourseFromId(courseId, courses)).toBe(undefined);
  });
});

describe('stringToColor', () => {
  it('should transform a given string to a hex color', () => {
    // Check if it outputs a valid hex color
    expect(stringToColor('hello')).toMatch(/^#[\d\w]{6}$/);
  });

  it('should return something when the string is empty', () => {
    expect(stringToColor('')).toMatch(/^#[\d\w]{6}$/);
  });

  it('should work for very long strings', () => {
    expect(
      stringToColor(
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      )
    ).toMatch(/^#[\d\w]{6}$/);
  });
});

describe('getContrastColor', () => {
  it('should return a contrast color to the input color', () => {
    expect(getContrastColor('#ff0000')).toBe('#00ffff');
  });

  it('should work with 3 digit hex colors', () => {
    expect(getContrastColor('#369')).toBe('#cc9966');
  });

  it('should work without the hashtag', () => {
    expect(getContrastColor('369')).toBe('#cc9966');
  });

  it('should return black on error', () => {
    expect(getContrastColor('abcd')).toBe('#000000');
  });

  it('should return black on error', () => {
    expect(getContrastColor('abcd')).toBe('#000000');
  });

  it('should return black on a bright color', () => {
    expect(getContrastColor('#ffff00', true)).toBe('#000000');
  });

  it('should return white on a dark color', () => {
    expect(getContrastColor('#202020', true)).toBe('#ffffff');
  });
});

describe('padZero', () => {
  it('should bring a string of digits to length of 2 by prefixing with zeros', () => {
    expect(padZero('2')).toBe('02');
  });
  it('should bring a string of digits to a specific length by prefixing with zeros', () => {
    expect(padZero('2', 4)).toBe('0002');
  });
});
