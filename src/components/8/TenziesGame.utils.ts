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
