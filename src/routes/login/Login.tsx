import logo from "../../assets/ebay-logo.svg";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.access_token) {
          navigate("/");
          localStorage.setItem("token", response.data.access_token);
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="auth">
      <div className="auth__wrapper">
        <div className="auth__logo">
          <img src={logo} alt="" />
          <p>
            <Link to={""}>Tell us what you think</Link>
          </p>
        </div>
        <div className="auth__content">
          <h1>Hello</h1>
          <p className="auth__link">
            Sign in to eBay or <Link to={"/register"}>create an account</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="auth__register"
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="auth__input">
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button>Continue</button>
          </form>
        </div>
      </div>
      <div className="auth__privacy">
        <p>
          Copyright © 1995-2023 eBay Inc. All Rights Reserved.Copyright ©
          1995-2023 eBay Inc. All Rights Reserved.
          <span>
            {" "}
            Accessibility , User Agreement , Privacy , Payments Terms of Use ,
            Cookies , Your Privacy Choices and AdChoice
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;
