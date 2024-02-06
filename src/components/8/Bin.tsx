import type { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  button: {
    background: 'none',
    border: 'none',
    bottom: 0,
    cursor: 'pointer',
    display: 'inline-block',
    position: 'absolute',
    right: 0,
  },
};

type Props = {
  clearHistory: () => void;
  username?: string;
};

export function Bin({ clearHistory, username = 'Anonymous' }: Props) {
  const askUser = () => {
    if (confirm(`Hey ${username}, sure you want to delete all of the history?`)) {
      clearHistory();
    }
  };

  return (
    <button style={style.button} onClick={askUser}>
      🗑️
    </button>
  );
}
