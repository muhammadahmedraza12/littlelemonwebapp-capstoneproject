import "./Testimonials.scss";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import { ReactComponent as Star } from "../assets/star.svg";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <section className="testimonials-wrap">
          <p className="heading">What people say about us !</p>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image1} alt="Customer" />
              </div>
              <p className="name">Ahmed</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
              This restaurant is a hidden gem! The flavors in the dishes were simply extraordinary. I loved the cozy atmosphere, and the service was top-notch. It's now my go-to spot for special occasions.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image2} alt="Customer" />
              </div>
              <p className="name">Haseeb</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
              I've dined at many places, but this restaurant stands out. The creativity in their menu and the execution of dishes were remarkable. The ambience was inviting, and the staff made us feel valued. I left with a smile and a full belly.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image3} alt="Customer" />
              </div>
              <p className="name">Samad</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
              If you're a food enthusiast, this restaurant is a must-visit. The flavors were exquisite, and I could taste the passion and expertise in every dish. The chef's creations are true works of art. I can't wait to return and savor more culinary delights.
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Image4} alt="Customer" />
              </div>
              <p className="name">Wasiq</p>
              <span className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <div className="text">
              This restaurant is a food lover's paradise. The menu offers a wide variety, and each dish I tried was a burst of deliciousness. The staff was attentive without being intrusive, creating a relaxed and enjoyable atmosphere. I'll be back soon!
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
