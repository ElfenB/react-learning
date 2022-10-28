import { GameStats } from './TenziesGame.types';

export const gameSize = 10;
export const startRound = 1;
export const startGameNumber = 1;

export const gameStartValue: GameStats = {
  nickname: 'Anonymous',
  numberPicked: 0,
  rounds: startRound,
  timeNeeded: 0,
};
