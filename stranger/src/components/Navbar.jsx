import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-logo">STRANGER THINGS</div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/characters" onClick={() => setOpen(false)}>Characters</Link></li>
        <li><Link to="/episodes" onClick={() => setOpen(false)}>Episodes</Link></li>
        <li className="upside"><Link to="/upside-down" onClick={() => setOpen(false)}>Upside Down</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
