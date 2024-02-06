import type { CSSProperties } from 'react';
import type { CurrentMeme } from './Four.types';

const style: Record<string, CSSProperties> = {
  input: {
    border: '1px solid var(--color)',
  },
};

type Props = {
  data: CurrentMeme;
  getNewMeme: () => void;
  setNewText: (fieldName: string, newText: string) => void;
};

export function Interaction({ data, getNewMeme, setNewText }: Props) {
  return (
    <div className="interaction">
      <div className="input-fields">
        <input
          className="firstInput input"
          name="topText"
          placeholder="Insert text for top part"
          style={style.input}
          type="text"
          value={data.topText}
          onChange={(e) => { setNewText(e.target.name, e.target.value); }}
        />
        <input
          className="secondInput input"
          name="bottomText"
          placeholder="Insert text for lower part"
          style={style.input}
          type="text"
          value={data.bottomText}
          onChange={(e) => { setNewText(e.target.name, e.target.value); }}
        />
      </div>

      <button className="action-button input" onClick={getNewMeme}>
        Get new meme
      </button>
    </div>
  );
}
