import { GameStats } from './TenziesGame.types';

type Props = {
  game: GameStats;
};

export function HistoryElement({ game }: Props) {
  return (
    <div>
      <p>
        <b>{game.nickname}</b> - N:{game.numberPicked} - R:{game.rounds} - T:{game.timeNeeded}s
      </p>
    </div>
  );
}
