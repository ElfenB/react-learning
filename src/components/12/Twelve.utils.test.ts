import { formatNatoDate } from './Twelve.utils';

// TODO: Jest not working
describe('test', () => {
  // Expect 930 to get 9:30
  test('formatDate', () => {
    const res = formatNatoDate(930);
    expect(res).toBe('9:30');
  });
  // Expect 1030 to get 10:30
  test('formatDate', () => {
    const res = formatNatoDate(1030);
    expect(res).toBe('10:30');
  });
});
