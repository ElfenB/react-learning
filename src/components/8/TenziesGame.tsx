import { CSSProperties, useEffect, useState } from 'react';

import ActionButton from './ActionButton';
import { DiceType } from './Dice.types';
import Dices from './Dices';
import RoundIndicator from './RoundIndicator';

const style: Record<string, CSSProperties> = {
  component: {
    margin: '2rem',
    position: 'relative',
    textAlign: 'center',
  },
  h1: {
    margin: '0',
  },
};

export default function Eight() {
  const gameSize = 10;
  const startRound = 0;
  const getRandomNumber = (): number => Math.ceil(Math.random() * 6);

  const generateInitialDices = (): DiceType[] => {
    const output: DiceType[] = [];
    for (let i = 0; i < gameSize; i++) {
      output.push({ id: i, lockedIn: false, number: getRandomNumber() });
    }
    return output;
  };

  const [dices, setDices] = useState<DiceType[]>(generateInitialDices());
  const [round, setRound] = useState<number>(startRound);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Check if the game is over
  useEffect(() => {
    const allLockedIn = dices.every((dice) => dice.lockedIn);

    // Prepare Set with first value of Array
    const numSet = new Set().add(dices[0].number);
    // Check if all numbers are the same
    const allNumSame = dices.every((dice) => {
      return numSet.size === numSet.add(dice.number).size;
    });
    setGameOver(allLockedIn && allNumSame);
  }, [dices]);

  // Shuffle all numbers of dices that have not been locked in
  const shuffleAllUnlocked = () => {
    setDices((prevDices) => {
      return prevDices.map((dice) => {
        if (!dice.lockedIn) {
          dice.number = getRandomNumber();
        }
        return dice;
      });
    });
  };

  const handleReset = () => {
    setRound(startRound);
    setDices(generateInitialDices());
    // TODO: Reset timer
  };
  const handleRoll = () => {
    if (round === 1) {
      // TODO: Start timer
    }
    setRound(round + 1);
    shuffleAllUnlocked();
  };

  const handleToggleSelect = (diceIndex: any, newVal: boolean) => {
    setDices((prevDices) => {
      return prevDices.map((dice) => {
        if (dice.id === diceIndex) {
          dice.lockedIn = newVal;
        }
        return dice;
      });
    });
  };

  return (
    <div style={style.component}>
      <RoundIndicator round={round} />
      <h1 style={style.h1}>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <Dices dices={dices} handleToggleSelect={handleToggleSelect} />
      <ActionButton finished={gameOver} reset={handleReset} roll={handleRoll} />
    </div>
  );
}
