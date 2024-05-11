import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Product } from "../../types/";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./Hero.scss";

const Hero = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products.slice(15, 19)));
  }, []);

  return (
    <section className="hero" id="hero" role="banner">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">Super savings at the Brand Outlet</h1>
            <p className="hero__subtitle">Up to 60% off the brands you love.</p>
            <Link to={"/products"} className="hero__link">
              Shop now <FaArrowRightLong />
            </Link>
          </div>

          <div className="hero__products">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              navigation={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <div className="product">
                      <img src={product.images[0]} alt="" />
                      <img src={product.images[1]} alt="" />
                      <img src={product.images[2]} alt="" />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
