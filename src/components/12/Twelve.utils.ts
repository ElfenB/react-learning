import { Course } from './Twelve.types';

// TODO: Write tests
export function formatNatoDate(natoDate: number): string {
  const date = String(natoDate);
  return `${padZero(date.substring(0, date.length - 2), 2)}:${date.substring(date.length - 2, date.length)}`;
}

// TODO: Write tests
export function getCourseFromId(courseId: number, courses: Course[]): Course {
  const course = courses.filter((c) => c.id === courseId)[0];
  return course;
}

// TODO: Write tests
// Returns color based on string input
export function stringToColour(str: string) {
  let hash = 0;
  [...str].forEach((char, i) => {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  });

  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).slice(-2);
  }

  return colour;
}

// TODO: Write tests
// Returns contrast color or black/white depending on the input color
export function getContrastColor(hexColor: string, bw: boolean) {
  let hex = hexColor;

  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  let r: number | string = parseInt(hex.slice(0, 2), 16);
  let g: number | string = parseInt(hex.slice(2, 4), 16);
  let b: number | string = parseInt(hex.slice(4, 6), 16);

  // If only black and white is needed
  if (bw) {
    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }

  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

// TODO: Write tests
// Returns a string that is a specific length and contains a number (prefixed by zero to get the fixed length)
function padZero(str: string, length?: number): string {
  const len = length || 2;
  const zeros = new Array(length).join('0');
  return (zeros + str).slice(-len);
}
