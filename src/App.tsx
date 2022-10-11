import './App.css'
import './components/3/3.scss'

import Card from './components/3/Card'
import Hero from './components/3/Hero'
import Navbar from './components/3/Navbar'
import katy from './components/3/assets/katy.svg'

// import './components/2/2.css'
// import Content from './components/2/content/Content'
// import Footer from './components/2/Footer'
// import Info from './components/2/info/Info'

// import Footer from './components/1/Footer'
// import Header from './components/1/Header'
// import MainContent from './components/1/MainContent'
const testdata = [
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

function App() {
  return (
    <div>
      {/* 1 */}
      {/* <Header />
      <MainContent />
      <Footer /> */}
      {/* 1 */}

      {/* 2 */}
      {/* <Info />
      <Content />
      <Footer /> */}
      {/* 2 */}

      {/* 3 */}
      <Navbar />
      <Hero />
      {testdata.map((e) => {
        return (
          <Card
            badge={e.badge}
            img={e.img}
            rating={e.rating}
            reviews={e.reviews}
            country={e.country}
            description={e.description}
            key={e.img}
          />
        )
      })}
      {/* 3 */}
    </div>
  )
}

export default App
