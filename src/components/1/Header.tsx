import reactLogo from '../../assets/react.svg';

export function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-group">
          <img alt="React Logo" className="header-logo" src={reactLogo} />
          <p>ReactFacts</p>
        </div>

        <ul className="navbar-links">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
