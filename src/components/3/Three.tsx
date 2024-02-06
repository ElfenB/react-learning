import { Cards } from './Cards';

import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { testdata } from './Three.consts';
import './3.scss';

export function Three() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards data={testdata} />
    </div>
  );
}
