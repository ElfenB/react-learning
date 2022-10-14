import './3.scss';

import { Cards } from './Cards';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import bike from './assets/bike.svg';
import { card } from './Card';
import katy from './assets/katy.svg';
import wedding from './assets/wedding.svg';

export function Three() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards data={testdata} />
    </div>
  );
}

const testdata: card[] = [
  {
    country: 'USA',
    description: 'Life lessons with Katy are great',
    img: katy,
    openSpots: 0,
    price: 135.99,
    rating: 5,
    reviews: 6,
  },
  {
    country: 'Germany',
    description: 'Learn wedding photography',
    img: wedding,
    openSpots: 20,
    price: 124.99,
    rating: 4.5,
    reviews: 30,
  },
  {
    country: 'England',
    description: 'Group Mountain Biking',
    img: bike,
    openSpots: 0,
    price: 49.99,
    rating: 4.8,
    reviews: 2,
  },
];
