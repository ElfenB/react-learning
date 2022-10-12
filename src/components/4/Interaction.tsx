export default function Interaction(props: {getNewMeme: () => void}) {
  return (
    <div className="interaction">
      <div className="input-fields">
        <input type="text" className="firstInput input" placeholder="Insert text for top part" />
        <input type="text" className="secondInput input" placeholder="Insert text for lower part" />
      </div>
      <button onClick={props.getNewMeme} className="action-button input">Get new meme</button>
    </div>
  )
}
