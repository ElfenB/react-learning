import troll from './assets/troll.svg';

export function Header() {
  return (
    <header className='four'>
      <span className="logo-group">
        <img alt="Troll face" className="trollface" src={troll} />
        <h1>Meme Generator</h1>
      </span>
      <span className="desc">React Course - Project 4</span>
    </header>
  );
}
