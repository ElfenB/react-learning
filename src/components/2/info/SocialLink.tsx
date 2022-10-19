type Props = {
  children: string;
  color?: string;
  src: any;
  to: string;
};

export function SocialLink({ children, color, src, to }: Props) {
  const getBg = () => (color ? color : 'var(--color)');
  const getColor = () => (color ? 'white' : 'var(--background-color)');

  return (
    <div className="socialBox" style={{ background: getBg(), color: getColor() }}>
      <img alt={children} className="socialIcon" src={src} />
      <a href={to}>{children}</a>
    </div>
  );
}
