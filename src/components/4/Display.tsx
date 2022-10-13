export default function Display(props: {data: currentMeme}) {
  return (
    <div className="display">
      <p className="toptext memetext">toptext</p>
      {props.data !== undefined && <img src={props.data?.meme?.url} alt={props.data?.meme?.name} className="imageBox" />}
      <p className="bottomtext memetext">bottomtext</p>
    </div>
  )
}

export interface currentMeme {
  meme: meme
  topText: string
  bottomText: string
}

export interface meme {
  id: string
  name: string
  url: string
  width: number
  height: number
  box_count: number
}
