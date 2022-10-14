import './2.css';

import { Content } from './content/Content';
import { Footer } from './Footer';
import { Info } from './info/Info';

export function Two() {
  return (
    <div>
      <Info />
      <Content />
      <Footer />
    </div>
  );
}
