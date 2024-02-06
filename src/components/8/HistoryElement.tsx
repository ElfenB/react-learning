import type { GameStats } from './TenziesGame.types';

type Props = {
  game: GameStats;
};

export function HistoryElement({ game }: Props) {
  const { nickname, numberPicked, rounds, timeNeeded } = game;

  return (
    <div>
      <p>
        <b>{nickname}</b> - N:{numberPicked} - R:{rounds} - T:{timeNeeded}s
      </p>
    </div>
  );
}
