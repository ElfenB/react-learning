import type { CSSProperties } from 'react';
import { TenziesGame } from './TenziesGame';

const style: Record<string, CSSProperties> = {
  component: {
    alignItems: 'flex-start',
    background: 'var(--background-color)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  },
  game: {
    background: 'var(--background-color)',
    border: '1px solid transparent',
    borderRadius: '8px',
    boxShadow: '1px 2px 15px -8px rgba(130,130,130,0.7)',
    marginTop: '10vh',
    maxWidth: 'calc(100vw - 2rem)',
    width: '30rem',
  },
};

export function Eight() {
  return (
    <div style={style.component}>
      <div style={style.game}>
        <TenziesGame />
      </div>
    </div>
  );
}
