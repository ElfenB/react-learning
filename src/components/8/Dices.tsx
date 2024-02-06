import type { CSSProperties } from 'react';
import { Dice } from './Dice';
import type { DiceType } from './Dice.types';

const style: Record<string, CSSProperties> = {
  component: {
    margin: '1rem 0',
  },
  dices: {
    display: 'grid',
    gridRowGap: '1rem',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
};

type Props = {
  dices: DiceType[];
  toggleSelect: (diceId: number, newVal: boolean) => void;
};

export function Dices({ dices, toggleSelect: handleToggleSelect }: Props) {
  return (
    <div style={style.component}>
      <div style={style.dices}>
        {dices.map((dice) => (
          <Dice key={dice.id} dice={dice} toggleSelect={() => { handleToggleSelect(dice.id, !dice.lockedIn); }} />
        ))}
      </div>
    </div>
  );
}
