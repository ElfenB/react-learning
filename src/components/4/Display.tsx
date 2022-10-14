export function Display(props: { data: currentMeme }) {
  return (
    <div className="display">
      <p className="toptext memetext">toptext</p>
      {props.data !== undefined && (
        <img alt={props.data?.meme?.name} className="imageBox" src={props.data?.meme?.url} />
      )}
      <p className="bottomtext memetext">bottomtext</p>
    </div>
  );
}

export type currentMeme = {
  bottomText: string;
  meme: meme;
  topText: string;
}

export type meme = {
  box_count: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
}
