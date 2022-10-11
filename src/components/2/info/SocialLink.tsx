export default function SocialLink(props: {
  src: any | undefined
  to: string | undefined
  children: string | undefined
  color?: string | undefined
}) {
  const getBg = () => (props.color ? props.color : 'var(--color)')
  const getColor = () => (props.color ? 'white' : 'var(--background-color)')

  return (
    <div
      style={{ background: getBg(), color: getColor() }}
      className="socialBox"
    >
      <img src={props.src} alt={props.children} className="socialIcon" />
      <a href={props.to}>{props.children}</a>
    </div>
  )
}
