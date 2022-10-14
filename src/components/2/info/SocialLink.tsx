export function SocialLink(props: {
  children: string | undefined;
  color?: string | undefined;
  src: any | undefined;
  to: string | undefined;
}) {
  const getBg = () => (props.color ? props.color : 'var(--color)');
  const getColor = () => (props.color ? 'white' : 'var(--background-color)');

  return (
    <div className="socialBox" style={{ background: getBg(), color: getColor() }}>
      <img alt={props.children} className="socialIcon" src={props.src} />
      <a href={props.to}>{props.children}</a>
    </div>
  );
}
