import { CSSProperties } from 'react';
import TenziesGame from './TenziesGame';

const style: Record<string, CSSProperties> = {
  component: {
    alignItems: 'flex-start',
    background: 'var(--color)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  },
  game: {
    background: 'var(--background-color)',
    border: '1px solid transparent',
    borderRadius: '8px',
    marginTop: '10vh',
    maxWidth: 'calc(100vw - 2rem)',
    width: '30rem',
  },
};

export default function Eight() {
  return (
    <div style={style.component}>
      <div style={style.game}>
        <TenziesGame />
      </div>
    </div>
  );
}
