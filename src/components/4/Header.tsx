import troll from "./assets/troll.svg"

export default function Header() {
  return (
    <header>
      <span className="logo-group">
        <img src={troll} alt="Troll face" className="trollface" />
        <h1>Meme Generator</h1>
      </span>
      <span className="desc">React Course - Project 4</span>
    </header>
  )
}
