import src from '../assets/laura.png';

export function ProfilePicture() {
  return (
    <div>
      <img alt="Profile" src={src} style={{ width: '100%' }} />
    </div>
  );
}
