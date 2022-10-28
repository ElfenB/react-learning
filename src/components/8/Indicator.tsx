import { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  component: {
    color: 'gray',
    fontSize: 'small',
    position: 'absolute',
  },
  value: {
    color: 'var(--color)',
  },
};

type Props = {
  description: string;
  positionX: 'left' | 'right';
  positionY: 'top' | 'bottom';
  value: number;
};

export default function GameIndicator({ description, positionX, positionY, value }: Props) {
  return (
    <div
      style={{
        ...style.component,
        [positionY === 'top' ? 'top' : 'bottom']: '0',
        [positionX === 'left' ? 'left' : 'right']: '0',
      }}
    >
      {description}: <span style={style.value}>{value}</span>
    </div>
  );
}
