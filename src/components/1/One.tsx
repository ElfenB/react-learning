import './tempstyle.css';

import { Footer } from './Footer';
import { Header } from './Header';
import { MainContent } from './MainContent';

export function One() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
