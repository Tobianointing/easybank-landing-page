import onlineIcon from "../../images/icon-online.svg"
import budgettingIcon from "../../images/icon-budgeting.svg"
import apiIcon from "../../images/icon-api.svg"
import onboardingIcon from "../../images/icon-onboarding.svg"
import "./about.css"

export default function About() {
  return (
    <section className="about bg-light-gray">
      <h1 className="about__title">Why choose Easybank?</h1>
      <p className="about__text">
        We leverage Open Banking to turn your bank account into your financial hub. Control your
        finances like never before.
      </p>

      <div className="about__card_wrapper">
        <div className="about__card">
          <img src={onlineIcon} alt="" className="onlineIcon" />
          <h3 className="about__card_title">Online Banking</h3>
          <p className="about__card_text">
            Our modern web and mobile applications allow you to keep track of your finances wherever
            you are in the world.
          </p>
        </div>

        <div className="about__card">
          <img src={budgettingIcon} alt="" className="budgettingIcon" />
          <h3 className="about__card_title">Simple Budgeting</h3>
          <p className="about__card_text">
            See exactly where your money goes each month. Receive notifications when you’re close to
            hitting your limits.
          </p>
        </div>

        <div className="about__card">
          <img src={onboardingIcon} alt="" className="budgettingIcon" />
          <h3 className="about__card_title">Fast Onboarding</h3>
          <p className="about__card_text">
            We don't do branches. Open your account in minutes online and start taking control of
            your finances right away.
          </p>
        </div>

        <div className="about__card">
          <img src={apiIcon} alt="" className="apiIcon" />
          <h3 className="about__card_title">Open API</h3>
          <p className="about__card_text">
            Manage your savings, investments, pension, and much more from one account. Tracking your
            money has never been easier.
          </p>
        </div>
      </div>
    </section>
  )
}
