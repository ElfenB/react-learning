import { CSSProperties } from 'react';

const style: Record<string, CSSProperties> = {
  input: {
    border: '1px solid gray',
    borderRadius: '5px',
    padding: '0.5rem 0.7rem',
  },
  title: {
    color: 'gray',
    fontSize: 'small',
    fontWeight: 'normal',
    margin: '1rem 0 0rem 0',
    userSelect: 'none',
  },
};

type Props = {
  changed: (nickname: string) => void;
  value: string;
};

export function Nickname({ changed: handleChange, value }: Props) {
  return (
    <div>
      <h4 style={style.title}>Please choose a nickname</h4>
      <input
        placeholder="Nickname"
        style={style.input}
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
