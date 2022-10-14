import { ChatStatus } from './ChatStatus';
import { Name } from './Name';
import { ProfilePicture } from './ProfilePicture';
import { SocialLinkBlock } from './SocialLinkBlock';

export function Info() {
  return (
    <div>
      <ProfilePicture />
      <Name />
      <ChatStatus />
      <SocialLinkBlock />
    </div>
  );
}
