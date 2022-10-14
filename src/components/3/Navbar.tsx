import airbnb from './assets/airbnb.svg';

export function Navbar() {
  return (
    <div className="navbar">
      <img alt="AirBnB logo" className="logo" src={airbnb} />
    </div>
  );
}
