type Props = { name: string; src: string };

export function SocialIcon({ name, src }: Props) {
  return <img alt={name} className="socialicons" src={src} />;
}
