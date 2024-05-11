import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Products from "./products/Products";
import Smartphones from "./categories/smartphones/Smartphones";
import Laptops from "./categories/laptops/Laptops";
import Fragrances from "./categories/fragrances/Fragrances";
import Skincare from "./categories/skincare/Skincare";
import Groceries from "./categories/groceries/Groceries";
import HomeDecroration from "./categories/home-decoration/HomeDecroration";
import Furniture from "./categories/furniture/Furniture";
import Sunglasses from "./categories/sunglasses/Sunglasses";
import Automotive from "./categories/automotive/Automotive";
import Motorcycle from "./categories/motorcycle/Motorcycle";
import SingleProducts from "./singleProduct/SingleProducts";
import Wishlist from "./wishlist/Wishlist";
import Login from "./login/Login";
import Register from "./register/Register";
import Cart from "./cart/Cart";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/smartphones" element={<Smartphones />} />
      <Route path="/laptops" element={<Laptops />} />
      <Route path="/fragrances" element={<Fragrances />} />
      <Route path="/skincare" element={<Skincare />} />
      <Route path="/groceries" element={<Groceries />} />
      <Route path="/home-decoration" element={<HomeDecroration />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/sunglasses" element={<Sunglasses />} />
      <Route path="/automotive" element={<Automotive />} />
      <Route path="/motorcycle" element={<Motorcycle />} />
      <Route path="/products/:id" element={<SingleProducts />} />
      <Route path="/saved" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RouteController;
