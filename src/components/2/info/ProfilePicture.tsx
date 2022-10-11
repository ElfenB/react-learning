import src from '../assets/laura.png'

export default function ProfilePicture() {
  return (
    <div>
      <img src={src} alt="Profile Picture" style={{ width: '100%' }} />
    </div>
  )
}
