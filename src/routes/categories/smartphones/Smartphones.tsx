import { useState, useEffect } from "react";
import { Product } from "../../../types";
import banner from "../../../assets/phone-banner.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likedProduct } from "../../../redux/likeSlice";
import "../Categories.scss";

const Smartphones = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedProducts")) || [];
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => response.json())
      .then((data) =>
        setProducts(
          data.products.map((product: any) => ({
            ...product,
            liked: savedLikes.some(
              (likedProduct: any) => likedProduct.id === product.id
            ),
          }))
        )
      );
  }, []);

  const handleLikeProduct = (product: any) => {
    dispatch(likedProduct(product));
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id
          ? { ...prevProduct, liked: !prevProduct.liked }
          : prevProduct
      )
    );
  };
  return (
    <div className="category-products">
      <div className="container">
        <h1 className="category-products__title">Smartphones</h1>
        <img className="category-products__banner" src={banner} alt="" />
        <div className="category-products__content">
          {products.map((product) => (
            <div className="item">
              <Link to={`/products/${product.id}`}>
                <img src={product.images[0]} alt="" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Link>
              <div className="item-price">
                <strong>${product.price}</strong>
                <button onClick={() => handleLikeProduct(product)}>
                  <svg
                    height="36"
                    viewBox="0 0 36 36"
                    width="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-wishlist"
                  >
                    <path
                      fill={product.liked ? "red" : "none"}
                      stroke="black"
                      d="M25.9683552 9.21882515c3.2608181.80024215 5.5472476 3.70843205 5.5302621 7.02070785.0167706.8151169-.1192457 1.6262091-.4011081 2.3920749l-.0747211.2030295-12.8022428 9.8639172-12.75640108-9.9236157-.07145807-.2171752c-.24888993-.7564256-.38125398-1.5457388-.39268615-2.3532254.00533124-3.3241785 2.30112936-6.21297878 5.5578425-6.99897615 2.9473775-.7113402 5.994845.46537879 7.693908 2.88167155 1.7058655-2.42023178 4.7647874-3.59281834 7.7166047-2.86840855z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Smartphones;
