import { Link } from "react-router-dom";
import phone from "../../assets/phone-category.jpeg";
import laptops from "../../assets/laptop-category.jpeg";
import grocery from "../../assets/grocery-category.jpeg";
import skincare from "../../assets/skincare-category.png";
import sunglasess from "../../assets/sunglasses-category.jpeg";
import fragnance from "../../assets/fragrance-category.jpeg";
import auto from "../../assets/auto-category.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

import "./TrendProducts.scss";

const TrendProducts = () => {
  return (
    <section className="trend">
      <div className="container">
        <div className="trend__wrapper">
          <h2>Trending on eBay</h2>
          <div className="trend-products">
            <Link to={"/smartphones"}>
              <div className="trend-products__item">
                <img src={phone} alt="" />
                <h3>Phone</h3>
              </div>
            </Link>
            <Link to={"/laptops"}>
              <div className="trend-products__item">
                <img src={laptops} alt="" />
                <h3>Laptop</h3>
              </div>
            </Link>
            <Link to={"/groceries"}>
              <div className="trend-products__item">
                <img src={grocery} alt="" />
                <h3>Grocery</h3>
              </div>
            </Link>
            <Link to={"/skincare"}>
              <div className="trend-products__item">
                <img src={skincare} alt="" />
                <h3>Skincare</h3>
              </div>
            </Link>
            <Link to={"/sunglasses"}>
              <div className="trend-products__item">
                <img src={sunglasess} alt="" />
                <h3>sunglasses</h3>
              </div>
            </Link>
            <Link to={"/fragnance"}>
              <div className="trend-products__item">
                <img src={fragnance} alt="" />
                <h3>fragnance</h3>
              </div>
            </Link>
            <Link to={"/automotive"}>
              <div className="trend-products__item">
                <img src={auto} alt="" />
                <h3>automotive</h3>
              </div>
            </Link>
          </div>
          <div className="trend-products__link">
            <h3>Score these trending kicks</h3>
            <Link to={"/products"}>
              See all <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendProducts;
