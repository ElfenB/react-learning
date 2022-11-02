import { CSSProperties, SyntheticEvent, useState } from 'react';

import { DiceType } from './Dice.types';

const style: Record<string, CSSProperties> = {
  dice: {
    border: '1px solid transparent',
    borderRadius: '5px',
    color: 'var(--color)',
    cursor: 'pointer',
    fontFamily: 'monospace',
    fontSize: 'xx-large',
    fontWeight: 'bold',
    height: '2.2em',
    maxHeight: '12vw',
    maxWidth: '12vw',
    transition: 'box-shadow 0.1s ease',
    userSelect: 'none',
    width: '2.2em',
  },
};

const cssVars = {
  boxShadowHovered: '0px 2px 8px -5px rgba(0,0,0,0.7)',
  boxShadowNotHovered: '0px 2px 8px -5px rgba(0,0,0,0.3)',
  lockedInDice: '#5ae592',
  notLockedInDice: 'var(--background-color)',
};

type Props = {
  dice: DiceType;
  toggleSelect: () => void;
};

export function Dice({ dice, toggleSelect }: Props) {
  const [hovered, setHovered] = useState(false);

  const handleHover = (e: SyntheticEvent) => (e.type === 'mouseover' ? setHovered(true) : setHovered(false));

  return (
    <div>
      <button
        style={{
          ...style.dice,
          background: dice.lockedIn ? cssVars.lockedInDice : cssVars.notLockedInDice,
          boxShadow: hovered ? cssVars.boxShadowHovered : cssVars.boxShadowNotHovered,
        }}
        onClick={toggleSelect}
        onMouseLeave={handleHover}
        onMouseOver={handleHover}
      >
        {dice.number}
      </button>
    </div>
  );
}
