import { SocialIcon } from './content/SocialIcon';
import { icons } from './Footer.consts';

export function Footer() {
  return (
    <div className="footer-2">
      {icons.map((i) => (
        <SocialIcon key={i.name} name={i.name} src={i.src} />
      ))}
    </div>
  );
}
