export default function TextBlock(props: {
  title: string | undefined
  children: string | undefined
}) {
  return (
    <div className="text-block">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  )
}
