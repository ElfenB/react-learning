import { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  component: {
    color: 'gray',
    fontSize: 'small',
    position: 'absolute',
    userSelect: 'none',
  },
  value: {
    color: 'var(--color)',
  },
};

type Props = {
  clicked?: () => void;
  description?: string;
  positionX: 'left' | 'right';
  positionY: 'top' | 'bottom';
  value?: number;
};

export default function GameIndicator({ description, positionX, positionY, value, clicked }: Props) {
  return (
    <div
      style={{
        ...style.component,
        [positionY === 'top' ? 'top' : 'bottom']: '0',
        [positionX === 'left' ? 'left' : 'right']: '0',
        cursor: clicked ? 'pointer' : 'select',
      }}
      onClick={clicked}
    >
      {description}
      {description && value && ': '}
      {value && <span style={style.value}>{value}</span>}
    </div>
  );
}
