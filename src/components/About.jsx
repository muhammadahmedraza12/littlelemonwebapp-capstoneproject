import "./About.scss";
import chef from "../assets/aboutus1.png";
import chefs from "../assets/aboutus2.png";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-wrap">
          <div className="text-content">
            <h2 className="heading">Little Lemon</h2>
            <h3 className="location">Pak</h3>
            <div className="desc">
            At Little Lemon, we invite you on a culinary journey through the heart of the Mediterranean. Our passion for fresh, locally sourced ingredients, combined with time-honored recipes, creates an authentic dining experience that transports you to the sun-kissed shores of the Mediterranean. From the aromatic spices of the Middle East to the vibrant flavors of Greece, our menu is a celebration of this diverse and vibrant cuisine.
            Step into our warm and welcoming restaurant, where you'll be greeted with the scents of fresh herbs and the promise of a memorable meal. Whether you're sharing a feast with friends or enjoying an intimate dinner for two, we look forward to sharing the love and flavors of the Mediterranean with you. Join us for a culinary adventure that's as rich in tradition as it is in taste.

            </div>
          </div>
          <section className="img-wrap">
            <img src={chef} alt="Chef cooking at restaurant" />
            <img src={chefs} alt="Two Chef's smiling" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
