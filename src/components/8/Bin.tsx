import { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  button: {
    bottom: '0',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'absolute',
    right: '0',
  },
};

type Props = {
  clearHistory: () => void;
  username?: string;
};

export default function Bin({ clearHistory, username = 'Anonymous' }: Props) {
  const askUser = () => {
    if (confirm(`Hey ${username}, sure you want to delete all of the history?`)) {
      clearHistory();
    }
  };

  return (
    <div>
      <span style={style.button} onClick={askUser}>
        🗑️
      </span>
    </div>
  );
}
