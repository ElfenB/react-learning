export function Display(props: { data: CurrentMeme }) {
  return (
    <div className="display">
      <p className="toptext memetext">toptext</p>
      {props.data && (
        <img alt={props.data?.meme?.name} className="imageBox" src={props.data?.meme?.url} />
      )}
      <p className="bottomtext memetext">bottomtext</p>
    </div>
  );
}

export type CurrentMeme = {
  bottomText: string;
  meme: Meme;
  topText: string;
}

export type Meme = {
  box_count: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
}
