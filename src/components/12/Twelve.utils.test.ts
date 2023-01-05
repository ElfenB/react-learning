import { describe, expect, test } from 'vitest';
import { formatNatoDate } from './Twelve.utils';

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
