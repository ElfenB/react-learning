type Props = { data: CurrentMeme };

export function Display({ data }: Props) {
  return (
    <div className="display">
      <p className="toptext memetext">{data.topText}</p>
      {data?.meme && <img alt={data.meme.name} className="imageBox" src={data.meme.url} />}
      <p className="bottomtext memetext">{data.bottomText}</p>
    </div>
  );
}

export type CurrentMeme = {
  bottomText: string;
  meme: Meme;
  topText: string;
};

export type Meme = {
  box_count: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
};
