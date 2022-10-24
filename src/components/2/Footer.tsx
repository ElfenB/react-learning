import { SocialIcon } from './content/SocialIcon';
import { icons } from './Footer.consts';

export function Footer() {
  return (
    <div className="footer-2">
      {icons.map(({ name, src }) => (
        <SocialIcon key={name} name={name} src={src} />
      ))}
    </div>
  );
}
