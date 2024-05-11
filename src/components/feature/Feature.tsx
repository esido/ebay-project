import logo from "../../assets/feature__logo.svg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import feature__block__img from "../../assets/feature__block.png";
import feature__img from "../../assets/feature_img.png";
import "./Feature.scss";

const Feature = () => {
  return (
    <section className="feature">
      <div className="container">
        <div className="feature__wrapper">
          <div className="feature__content">
            <div className="feature__block">
              <h4>Feature</h4>
              <img src={logo} alt="" />
              <h3>Deals made easy all year long.</h3>
              <p>Free shipping. Best prices.</p>
              <Link to={"/products"}>
                Get your thing <FaArrowRightLong />
              </Link>
            </div>
            <img src={feature__block__img} alt="" />
          </div>
          <img src={feature__img} alt="" />
        </div>
        <div className="feature__link">
          <h3>Today's Deals – All With Free Shipping</h3>
          <Link to={"/products"}>
            See all <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature;
