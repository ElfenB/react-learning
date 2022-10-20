import './3.scss';

import { Cards } from './Cards';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { testdata } from './Three.consts';

export function Three() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards data={testdata} />
    </div>
  );
}
