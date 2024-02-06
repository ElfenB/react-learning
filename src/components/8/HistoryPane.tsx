import { HistoryElement } from './HistoryElement';
import type { GameStats } from './TenziesGame.types';

type Props = {
  data: GameStats[];
  size?: number;
};

export function HistoryPane({ data, size = 3 }: Props) {
  const substraction = Math.min(data.length, size);

  return (
    <div>
      <h4 style={{ marginBottom: 0 }}>Last {size} entries</h4>
      <span style={{ fontSize: 'small' }}>N=Number picked, R=Needed rounds, T=Time</span>
      {data
        .slice(data.length - substraction, data.length)
        .reverse()
        .map((game, i) => (
          <HistoryElement key={i} game={game} />
        ))}
    </div>
  );
}
