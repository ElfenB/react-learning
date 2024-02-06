import type { DiceType } from './Dice.types';
import { gameSize } from './TenziesGame.consts';

export const generateInitialDices = (): DiceType[] => {
  const output: DiceType[] = [];
  for (let i = 0; i < gameSize; i++) {
    output.push({ id: i, lockedIn: false, value: getRandomNumber() });
  }
  return output;
};

export const getRandomNumber = (): number => Math.ceil(Math.random() * 6);

export function getJsonFromLocalStorage<T>(item: string, defaultData: T): T {
  try {
    const storageItem = localStorage.getItem(item);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = JSON.parse(storageItem ?? '');

    // Check if data is null or undefined
    if (!data) {
      return defaultData;
    }

    return data as T;
  } catch (err) {
    if (typeof err === 'string') {
      console.warn(err);
    } else if (err instanceof Error) {
      console.warn(err.message);
    }
  }

  return defaultData;
}
