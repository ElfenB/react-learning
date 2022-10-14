export function SocialIcon(props: { name: string; src: string }) {
  return <img alt="props.name" className="socialicons" src={props.src} />;
}
