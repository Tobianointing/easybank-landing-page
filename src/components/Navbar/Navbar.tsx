import logo from "../../images/logo.svg"
import menuBtn from "../../images/icon-hamburger.svg"
import closeBtn from "../../images/icon-close.svg"
import "./navbar.css"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo" />

      <ul className={`nav__menu ${isOpen && "open__nav"}`}>
        <li className="nav__item">
          <a href="#" className="nav__link">Home</a>{" "}
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">About</a>{" "}
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">Contact</a>{" "}
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">Blog</a>{" "}
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">Careers</a>{" "}
        </li>
      </ul>

      {!isOpen ? (
        <img
          src={menuBtn}
          alt="closebtn"
          className="menu__btn"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <img
          src={closeBtn}
          alt="closebtn"
          className="close__btn"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <a href="#" className="nav__btn cta">
        Request Invite
      </a>
    </nav>
  )
}
