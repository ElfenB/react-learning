import SocialIcon from './content/SocialIcon'
import facebookIcon from './assets/facebook.png'
import githubIcon from './assets/github.png'
import instagramIcon from './assets/instagram.png'
import linkedinIcon from './assets/linkedin.png'
import twitterIcon from './assets/twitter.png'

export default function Footer() {
  const icons: icon[] = [
    { name: 'Twitter', src: twitterIcon },
    { name: 'Facebook', src: facebookIcon },
    { name: 'Instagram', src: instagramIcon },
    { name: 'LinkedIn', src: linkedinIcon },
    { name: 'GitHub', src: githubIcon },
  ]

  return (
    <div className="footer-2">
      {icons.map((i) => (
        <SocialIcon name={i.name} key={i.name} src={i.src} />
      ))}
    </div>
  )
}

interface icon {
  name: string
  src: string
}
