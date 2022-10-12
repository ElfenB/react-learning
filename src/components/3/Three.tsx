import './3.scss'

import Cards from './Cards'
import Hero from './Hero'
import Navbar from './Navbar'
import { card } from './Card'
import katy from './assets/katy.svg'

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
    badge: 'Sold out',
    img: katy,
    rating: 5,
    reviews: 6,
    country: 'USA',
    description: 'Life lessons with Katy are great.',
    price: 135.99,
  },
]
