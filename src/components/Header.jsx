import { Link } from "react-router-dom"
import './Header.css'

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <h1>LP<br/>React</h1>
        </div>
        <ul className="header-navbar">
          <li>
            <Link to="/lp-react" className="navbar-items">Home</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-items">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header