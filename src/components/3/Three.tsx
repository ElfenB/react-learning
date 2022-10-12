import './3.scss'

import Cards from './Cards'
import Hero from './Hero'
import Navbar from './Navbar'
import bike from './assets/bike.svg'
import { card } from './Card'
import katy from './assets/katy.svg'
import wedding from './assets/wedding.svg'

export default function Three() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards data={testdata} />
    </div>
  )
}

const testdata: card[] = [
  {
    openSpots: 0,
    img: katy,
    rating: 5,
    reviews: 6,
    country: 'USA',
    description: 'Life lessons with Katy are great',
    price: 135.99,
  },
  {
    openSpots: 20,
    img: wedding,
    rating: 4.5,
    reviews: 30,
    country: 'Germany',
    description: 'Learn wedding photography',
    price: 124.99,
  },
  {
    openSpots: 0,
    img: bike,
    rating: 4.8,
    reviews: 2,
    country: 'England',
    description: 'Group Mountain Biking',
    price: 49.99,
  },
]
