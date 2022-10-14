import { SocialLink } from './SocialLink';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin1.png';

export function SocialLinkBlock() {
  return (
    <div className="socialBoxFather">
      <SocialLink src={email} to="mailto:laura@smith.com">
        Email
      </SocialLink>
      <SocialLink color="#00d8ff" src={linkedin} to="linkedin.com/laurasmith">
        LinkedIn
      </SocialLink>
    </div>
  );
}
