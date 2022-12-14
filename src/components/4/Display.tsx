import { CSSProperties } from 'react';
import { CurrentMeme } from './Four.types';

const style: Record<string, CSSProperties> = {
  text: {
    color: 'white',
  },
};

type Props = { data: CurrentMeme };

export function Display({ data }: Props) {
  return (
    <div className="display">
      <p className="toptext memetext" style={style.text}>
        {data.topText}
      </p>
      {data?.meme && <img alt={data.meme.name} className="imageBox" src={data.meme.url} />}
      <p className="bottomtext memetext" style={style.text}>
        {data.bottomText}
      </p>
    </div>
  );
}
