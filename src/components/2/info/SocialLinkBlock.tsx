import SocialLink from './SocialLink'
import email from '../assets/email.png'
import linkedin from '../assets/linkedin1.png'

export default function SocialLinkBlock() {
  return (
    <div className='socialBoxFather'>
      <SocialLink to="mailto:laura@smith.com" src={email}>Email</SocialLink>
      <SocialLink to="linkedin.com/laurasmith" color="#00d8ff" src={linkedin}>LinkedIn</SocialLink>
    </div>
  )
}
