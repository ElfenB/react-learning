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
  positionY: 'bottom' | 'top';
  value?: number;
};

export function Indicator({ description, positionX, positionY, value, clicked }: Props) {
  return (
    <div
      style={{
        ...style.component,
        cursor: clicked ? 'pointer' : 'select',
        [positionX]: 0,
        [positionY]: 0,
      }}
      onClick={clicked}
    >
      {description}
      {description && value && ': '}
      {value && <span style={style.value}>{value}</span>}
    </div>
  );
}
