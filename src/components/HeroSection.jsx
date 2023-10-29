import "./HeroSection.scss";
import HeroImage from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <section className="hero-section-wrap">
          <div className="text-content">
            <h2 className="title">Little Lemon</h2>
            <h3 className="sup-script">Pak</h3>
            <p className="desc">
            Welcome to Little Lemon, where the flavors of the Mediterranean come to life. Immerse yourself in a culinary journey filled with fresh, vibrant ingredients and time-honored recipes. 
            </p>
            <Link className="cta" to="/reservation">
              Reserve a table
            </Link>
          </div>
          <div className="image-wrap">
            <img src={HeroImage} alt="Restaurant Food Platter" loading="lazy" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
