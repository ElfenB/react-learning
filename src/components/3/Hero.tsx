import hero from './assets/hero.png';

export function Hero() {
  return (
    <section>
      <img alt="Image Collection: Travel" className="hero" src={hero} />
      <div className="headline-info">
        <h1>Online experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}
