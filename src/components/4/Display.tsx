export default function Display(props: {data: meme}) {
  return (
    <div className="display">
      {props.data !== undefined && <img src={props.data?.url} alt={props.data?.name} className="imageBox" />}
    </div>
  )
}

export interface meme {
  id: string
  name: string
  url: string
  width: number
  height: number
  box_count: number
}
