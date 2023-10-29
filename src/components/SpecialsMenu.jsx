import Hummus from "../assets/Hummus.png";
import Lamb from "../assets/Lamb.png";
import Moussaka from "../assets/Moussaka.png";
import { ReactComponent as ScooterSVG } from "../assets/scooter.svg";
import { Link } from "react-router-dom";
import "./SpecialsMenu.scss";
const SpecialsMenu = () => {
  return (
    <section className="special-menu">
      <div className="container">
        <section className="special-menu-wrap">
          <div className="heading">
            <p className="title">This week specials!</p>
            <Link className="cta" to="/404">
              Online Menu
            </Link>
          </div>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Hummus} alt="Hummus" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Hummus.</p>
                  <p className="price">Rs. 550/-</p>
                </div>
                <p className="desc">
                Indulge in the creamy goodness of our Hummus, a tantalizing blend of chickpeas, tahini, and zesty lemon. Perfect for dipping, spreading, or enjoying as a guilt-free snack. 
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Lamb} alt="Lamb" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Lamb</p>
                  <p className="price">Rs. 2650/-</p>
                </div>
                <p className="desc">
                Experience the exotic allure of our Lamb Tagine – a savory masterpiece of tender, slow-cooked lamb infused with aromatic spices and succulent dried fruits.
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Moussaka} alt="Moussaka" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Moussaka</p>
                  <p className="price">Rs . 1550/-</p>
                </div>
                <p className="desc">
                Indulge in the rich layers of our Moussaka, a Mediterranean masterpiece. Succulent eggplant, perfectly spiced minced meat, and creamy béchamel sauce.
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SpecialsMenu;
