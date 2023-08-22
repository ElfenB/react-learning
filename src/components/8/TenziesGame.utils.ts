import { DiceType } from './Dice.types';
import { gameSize } from './TenziesGame.consts';

export const generateInitialDices = (): DiceType[] => {
  const output: DiceType[] = [];
  for (let i = 0; i < gameSize; i++) {
    output.push({ id: i, lockedIn: false, value: getRandomNumber() });
  }
  return output;
};

export const getRandomNumber = (): number => Math.ceil(Math.random() * 6);

export const getJsonFromLocalStorage = (item: string, defaultData: any) => {
  try {
    const storageItem = localStorage.getItem(item) as string;
    const data = JSON.parse(storageItem);

    // Check if data is null or undefined
    if (!data) {
      return defaultData;
    }

    return data;
  } catch (err) {
    if (typeof err === 'string') {
      console.warn(err);
    } else if (err instanceof Error) {
      console.warn(err.message);
    }
  }

  return defaultData;
};
