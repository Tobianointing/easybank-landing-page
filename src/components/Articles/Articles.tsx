import "./articles.css"
import confetti from "../../images/image-confetti.jpg"
import currency from "../../images/image-currency.jpg"
import plane from "../../images/image-plane.jpg"
import restaurant from "../../images/image-restaurant.jpg"

export default function Articles() {
  return (
    <section className="articles bg-very-light-gray">
      <h1 className="aricles__title">Latest Articles</h1>

      <div className="articles__card_wrapper">
        <div className="article__card">
          <img src={currency} alt="" className="article__card_img" />
          <div className="article__body">
            <p className="article__card_author">By Claire Robinson</p>
            <p className="article__card_title">Receive money in any currency with no fees</p>
            <p className="article__card_body">
              The world is getting smaller and we’re becoming more mobile. So why should you be
              forced to only receive money in a single …
            </p>
          </div>
        </div>

        <div className="article__card">
          <img src={restaurant} alt="" className="article__card_img" />
          <div className="article__body">
            <p className="article__card_author">By Wilson Hutton</p>
            <p className="article__card_title">Treat yourself without worrying about money</p>
            <p className="article__card_body">
              Our simple budgeting feature allows you to separate out your spending and set
              realistic limits each month. That means you …
            </p>
          </div>
        </div>

        <div className="article__card">
          <img src={plane} alt="" className="article__card_img" />
          <div className="article__body">
            <p className="article__card_author"> By Wilson Hutton</p>
            <p className="article__card_title">Take your Easybank card wherever you go</p>
            <p className="article__card_body">
              We want you to enjoy your travels. This is why we don’t charge any fees on purchases
              while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>

        <div className="article__card">
          <img src={confetti} alt="confetti" className="article__card_img" />
          <div className="article__body">
            <p className="article__card_author"> By Claire Robinson</p>
            <p className="article__card_title">Our invite-only Beta accounts are now live!</p>
            <p className="article__card_body">
              After a lot of hard work by the whole team, we’re excited to launch our closed beta.
              It’s easy to request an invite through the site ...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
