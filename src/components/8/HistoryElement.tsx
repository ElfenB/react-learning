import { GameStats } from './TenziesGame.types';

type Props = {
  game: GameStats;
};

export default function HistoryElement({ game }: Props) {
  return (
    <div>
      <p>
        <b>{game.nickname}</b> - {game.numberPicked} - {game.rounds} - {game.timeNeeded}s
      </p>
    </div>
  );
}
