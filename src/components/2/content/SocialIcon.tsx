export default function SocialIcon(props: { name: string; src: string }) {
  return <img src={props.src} alt="props.name" className="socialicons" />
}
