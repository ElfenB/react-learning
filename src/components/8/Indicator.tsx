import type { CSSProperties } from 'react';

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
  positionY: 'bottom' | 'top';
  value?: number;
};

export function Indicator({ clicked, description, positionX, positionY, value }: Props) {
  return (
    <button
      style={{
        ...style.component,
        background: 'none',
        border: 'none',
        cursor: clicked ? 'pointer' : 'select',
        [positionX]: 0,
        [positionY]: 0,
      }}
      onClick={clicked}
    >
      {description}
      {description && value && ': '}
      {value && <span style={style.value}>{value}</span>}
    </button>
  );
}
