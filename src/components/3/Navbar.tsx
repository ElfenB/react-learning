import airbnb from "./assets/airbnb.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={airbnb} alt="AirBnB logo" className="logo" />
    </div>
  )
}
