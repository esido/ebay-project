import { Link, NavLink } from "react-router-dom";
import notification from "../../assets/icon-notification.svg";
import logo from "../../assets/ebay-logo.svg";
import { GrCart } from "react-icons/gr";
import { IoChevronDown } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const [username, setUserName] = useState([]);
  const likedProducts = useSelector((state) => state.likes.likes);
  const likedProductsCount = likedProducts.length;

  const cartProducts = useSelector((state) => state.cart.cart);
  const cartProductsCount = cartProducts.length;

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserName(data));
  }, []);

  return (
    <div className="header" id="header" role="navigation">
      <div className="container">
        <div className="header-top">
          <ul className="header-top__list">
            <li>
              <span>
                Hi! <strong className="username">{username.name}</strong>
              </span>
            </li>
            <li>
              <Link to={""}>Daily Deals</Link>
            </li>
            <li>
              <Link to={""}>Brand Outlet</Link>
            </li>
            <li>
              <Link to={""}>Help & Contact</Link>
            </li>
          </ul>
          <ul className="header-top__list">
            <li>
              <span>
                <Link to={""}>Ship to</Link>
              </span>
            </li>
            <li>
              <Link to={""}>Sell</Link>
            </li>
            <li>
              <Link to={"/saved"}>WishList</Link>
            </li>
            <li>
              <Link to={""}>My ebay</Link>
            </li>
            <li>
              <button>
                <img src={notification} alt="" />
              </button>
            </li>
            <li>
              <Link to={"/cart"}>
                <button>
                  <GrCart /> <span>({cartProductsCount})</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-line"></div>

      <div className="container">
        <div className="header-main">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>

          <button className="header-main-select">
            Shop by <br /> category <IoChevronDown />
          </button>

          <form>
            <div className="form-search">
              <CiSearch />
              <input type="text" placeholder="Search for anything" />
              <select>
                <option value="value1" selected>
                  All categories
                </option>
              </select>
            </div>

            <button type="submit">Search</button>

            <Link to={"/"}>Advanced</Link>
          </form>
        </div>
      </div>

      <div className="header-line"></div>

      <div className="container">
        <nav className="nav">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/saved"}>
                Saved<span>({likedProductsCount})</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>All</NavLink>
            </li>
            <li>
              <NavLink to={"/smartphones"}>smartphones</NavLink>
            </li>
            <li>
              <NavLink to={"/laptops"}>laptops</NavLink>
            </li>
            <li>
              <NavLink to={"/fragrances"}>fragrances</NavLink>
            </li>
            <li>
              <NavLink to={"/skincare"}>skincare</NavLink>
            </li>
            <li>
              <NavLink to={"/groceries"}>groceries</NavLink>
            </li>
            <li>
              <NavLink to={"/home-decoration"}>home-decoration</NavLink>
            </li>
            <li>
              <NavLink to={"/furniture"}>furniture</NavLink>
            </li>
            <li>
              <NavLink to={"/sunglasses"}>sunglasses</NavLink>
            </li>
            <li>
              <NavLink to={"/automotive"}>automotive</NavLink>
            </li>
            <li>
              <NavLink to={"/motorcycle"}>motorcycle</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
