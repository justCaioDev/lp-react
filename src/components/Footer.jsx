import { Link } from "react-router-dom"
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-r">
          <h1>LP<br/>React</h1>
          <div className="footer-navbar">
            <ul className="footer-navbar">
              <li>
                <Link to="/lp-react" className="navbar-items">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="navbar-items">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-l">
          <span>LP React All rights @2024</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer