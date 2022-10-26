import { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  component: {
    color: 'gray',
    fontSize: 'small',
    position: 'absolute',
    right: '0',
    top: '0',
  },
  roundNumber: {
    color: 'var(--color)',
  },
};

type Props = {
  round: number;
};

export default function RoundIndicator({ round }: Props) {
  return (
    <div style={style.component}>
      Round: <span style={style.roundNumber}>{round}</span>
    </div>
  );
}
