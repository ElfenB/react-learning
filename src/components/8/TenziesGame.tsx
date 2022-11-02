import { CSSProperties, useCallback, useEffect, useState } from 'react';
import { gameStartValue, startGameNumber, startRound } from './TenziesGame.consts';
import { generateInitialDices, getRandomNumber } from './TenziesGame.utils';

import { ActionButton } from './ActionButton';
import { Bin } from './Bin';
import { DiceType } from './Dice.types';
import { Dices } from './Dices';
import { GameStats } from './TenziesGame.types';
import { HistoryPane } from './HistoryPane';
import { Indicator } from './Indicator';
import { Nickname } from './Nickname';
import { Timer } from './Timer';

const style: Record<string, CSSProperties> = {
  component: {
    margin: '2rem',
    position: 'relative',
    textAlign: 'center',
  },
  h1: {
    margin: 0,
    userSelect: 'none',
  },
};

export function TenziesGame() {
  const [dices, setDices] = useState<DiceType[]>(generateInitialDices());
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameNumber, setGameNumber] = useState(startGameNumber);
  const [showHistory, setShowHistory] = useState(false);

  // Get last value from localStore if available, otherwise take starting value
  const [currentGameStats, setCurrentGameStats] = useState<GameStats>(
    localStorage.getItem('currentGame') !== null
      ? (JSON.parse(localStorage.getItem('currentGame') as string) as GameStats)
      : gameStartValue
  );

  // Get overall stats from localStorage when exists, otherwise start with empty array
  const [gameStats, setGameStats] = useState<GameStats[]>(
    JSON.parse(localStorage.getItem('gameStats') || '[]') as GameStats[]
  );

  // Check if the game is over
  useEffect(() => {
    const allLockedIn = dices.every((dice) => dice.lockedIn);

    // Save first value
    const firstValue = dices[0].value;

    // Compare every value to first value (if all are the same)
    const allNumSame = dices.every((dice) => {
      return dice.value === firstValue;
    });

    setGameOver(allLockedIn && allNumSame);
  }, [dices]);

  // Set overall stats in localStorage on every change
  useEffect(() => {
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
  }, [gameStats]);

  // Set current game stats in localStorage on every change
  useEffect(() => {
    localStorage.setItem('currentGame', JSON.stringify(currentGameStats));
  }, [currentGameStats]);

  // Shuffle all numbers of dices that have not been locked in
  const shuffleAllUnlocked = () => {
    setDices((prevDices) => {
      return prevDices.map((dice) => {
        if (!dice.lockedIn) {
          dice.value = getRandomNumber();
        }
        return dice;
      });
    });
  };

  const handleReset = () => {
    // Save stats to all stats array
    setGameStats((prevGameStats) => [...prevGameStats, currentGameStats]);

    // Set round to starting number
    setCurrentGameStats((prevCurrentGameStats) => ({
      ...prevCurrentGameStats,
      rounds: startRound,
    }));

    setDices(generateInitialDices());

    setGameNumber(gameNumber + 1);
  };
  const handleRoll = () => {
    // Increase round number
    setCurrentGameStats((prevCurrentGameStats) => ({
      ...prevCurrentGameStats,
      rounds: prevCurrentGameStats.rounds + 1,
    }));

    shuffleAllUnlocked();
  };

  const handleCurrentGameStatsChange = (field: string, value: number | string) => {
    setCurrentGameStats((prevCurrentGameStats) => ({
      ...prevCurrentGameStats,
      [field]: value,
    }));
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
    handleCurrentGameStatsChange('numberPicked', dices[diceIndex].value);
  };

  const handleTimer = useCallback((time: number) => {
    setCurrentGameStats((prevCurrentGameStats) => ({
      ...prevCurrentGameStats,
      timeNeeded: time,
    }));
  }, []);

  const handleFoldHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleClearHistory = () => {
    setGameStats([]);
    setCurrentGameStats(gameStartValue);
    setGameNumber(startGameNumber);
  };

  return (
    <div style={style.component}>
      <Indicator
        clicked={handleFoldHistory}
        description={'Game'}
        positionX={'left'}
        positionY={'top'}
        value={gameNumber}
      />
      <Indicator description={'Round'} positionX={'right'} positionY={'top'} value={currentGameStats.rounds} />

      <h1 style={style.h1}>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

      <Dices dices={dices} toggleSelect={handleToggleSelect} />

      <ActionButton finished={gameOver} reset={handleReset} roll={handleRoll} />

      <Nickname
        changed={(newNickName) => handleCurrentGameStatsChange('nickname', newNickName)}
        value={currentGameStats.nickname}
      />

      {currentGameStats.rounds > startRound && (
        <Timer gameNumber={gameNumber} gameOver={gameOver} publishTime={handleTimer} />
      )}
      <Bin clearHistory={handleClearHistory} username={currentGameStats.nickname} />

      {showHistory && <HistoryPane data={gameStats} size={3} />}
    </div>
  );
}
