import heroImg from "../../images/image-mockups.png"
import "./hero.css"

export default function Hero() {
  return (
    <section className="hero bg-very-light-gray">
      <div className="left__col">
        <h1 className="hero__title">Next genaration digital banking</h1>
        <p className="hero__text">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <a href="#" className="cta hero__btn">
          Request Invite
        </a>
      </div>
      <div className="right__col">
        <img src={heroImg} alt="heroImg" className="hero__img" />
      </div>
    </section>
  )
}
