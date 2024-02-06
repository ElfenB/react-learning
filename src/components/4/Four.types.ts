export type CurrentMeme = {
  bottomText: string;
  meme?: Meme;
  topText: string;
};

export type Meme = {
  boxCount: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
};
