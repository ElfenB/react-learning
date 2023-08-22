import bike from './assets/bike.svg';
import katy from './assets/katy.svg';
import wedding from './assets/wedding.svg';
import { CardType } from './Card.types';

export const testdata: CardType[] = [
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
    price: 49.99,
    rating: 4.8,
    reviews: 2,
  },
];
