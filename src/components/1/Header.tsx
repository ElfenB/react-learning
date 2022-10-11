import reactLogo from '../../assets/react.svg'

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className='logo-group'>
          <img className="header-logo" src={reactLogo} alt="React Logo" />
          <p>ReactFacts</p>
        </div>
        <ul className="navbar-links">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
