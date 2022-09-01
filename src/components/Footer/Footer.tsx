import "./footer.css"
import twitter from "../../images/icon-twitter.svg"
import facebook from "../../images/icon-facebook.svg"
import instagram from "../../images/icon-instagram.svg"
import youtube from "../../images/icon-youtube.svg"
import pinterest from "../../images/icon-pinterest.svg"
import logo from "../../images/logo.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="logo" className="footer__img" />
        <div className="socials">
          <img src={facebook} alt="facebook" className="social" />
          <img src={youtube} alt="youtube" className="social" />
          <img src={twitter} alt="twitter" className="social" />
          <img src={pinterest} alt="pinterest" className="social" />
          <img src={instagram} alt="instagram" className="social" />
        </div>
      </div>
      <div>
        <a href="#" className="footer__link">
          About Us
        </a>
        <a href="#" className="footer__link">
          Contact
        </a>
        <a href="#" className="footer__link">
          Blog
        </a>
      </div>
      <div>
        <a href="#" className="footer__link">
          Careers
        </a>
        <a href="#" className="footer__link">
          Support
        </a>
        <a href="#" className="footer__link">
          Privacy Policy
        </a>
      </div>
      <div className="footer__cta_wrapper">
        <a href="#" className="cta">
          Request Invite
        </a>
        <p className="copy_text">&copy; Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}
