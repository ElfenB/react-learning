import hero from './assets/hero.png'

export default function Hero() {
  return (
    <section>
      <img src={hero} alt="Image Collection: Travel" className="hero" />
      <div className="headline-info">
        <h1>Online experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  )
}
