import { CurrentMeme } from './Display';

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
          type="text"
          value={data.topText}
          onChange={(e) => setNewText(e.target.name, e.target.value)}
        />
        <input
          className="secondInput input"
          name="bottomText"
          placeholder="Insert text for lower part"
          type="text"
          value={data.bottomText}
          onChange={(e) => setNewText(e.target.name, e.target.value)}
        />
      </div>
      <button className="action-button input" onClick={getNewMeme}>
        Get new meme
      </button>
    </div>
  );
}
