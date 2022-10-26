import { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  button: {
    background: '#5134ff',
    border: '1px solid transparent',
    borderRadius: '5px',
    boxShadow: '1px 1px 8px -5px rgba(0,0,0,0.7)',
    color: '#feffff',
    cursor: 'pointer',
    fontSize: 'larger',
    fontWeight: '600',
    marginTop: '1rem',
    padding: '0.7em 1.5em',
  },
};

type Props = {
  finished: boolean;
  reset: () => void;
  roll: () => void;
};

export default function ActionButton({ finished, reset, roll }: Props) {
  return (
    <div style={style.component}>
      <button style={style.button} onClick={finished ? reset : roll}>
        {finished ? 'Reset game' : 'Roll'}
      </button>
    </div>
  );
}
