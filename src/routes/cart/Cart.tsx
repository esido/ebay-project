import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../../redux/cartSlice";
import banner from "../../assets/cart-banner.jpeg";

const Cart = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cart.cart);
  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <div className="category-products">
      <div className="container">
        <h1 className="category-products__title">Cart</h1>
        <img className="category-products__banner" src={banner} alt="" />
        <div className="category-products__content">
          {cartdata.map((product) => (
            <div className="item">
              <Link to={`/products/${product.id}`}>
                <img src={product.images[0]} alt="" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Link>
              <div className="item-price">
                <strong>${product.price}</strong>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
