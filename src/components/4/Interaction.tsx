export function Interaction(props: { getNewMeme: () => void }) {
  return (
    <div className="interaction">
      <div className="input-fields">
        <input className="firstInput input" placeholder="Insert text for top part" type="text" />
        <input className="secondInput input" placeholder="Insert text for lower part" type="text" />
      </div>
      <button className="action-button input" onClick={props.getNewMeme}>
        Get new meme
      </button>
    </div>
  );
}
