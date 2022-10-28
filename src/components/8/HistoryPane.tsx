import { GameStats } from './TenziesGame.types';
import HistoryElement from './HistoryElement';

type Props = {
  data: GameStats[];
  size?: number;
};

export default function HistoryPane({ data, size = 3 }: Props) {
  return (
    <div>
      <h4>Last {size} entries</h4>
      {data
        .slice(data.length - size, data.length)
        .reverse()
        .map((game, i) => {
          return <HistoryElement key={i} game={game} />;
        })}
    </div>
  );
}
