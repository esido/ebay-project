import logo from "../../assets/ebay-logo.svg";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("https://api.escuelajs.co/api/v1/users", {
        name,
        email,
        password,
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      })
      .then((response) => {
        if (response.data.id) {
          navigate("/login");
        }
      });
  };

  return (
    <section className="register">
      <div className="auth__wrapper">
        <div className="auth__logo">
          <img src={logo} alt="" />
          <p>
            Already a member? <Link to={"/login"}>Sign in</Link>
          </p>
        </div>
        <div className="auth__content">
          <h1>Create an account</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="auth__register"
              required
              type="name"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <p>
              By Creating an account, you agree to our{" "}
              <span>User Agreement</span> and acknowledge reading our User
              <span> Privacy Notice</span> .
            </p>

            <button type="submit">Create account</button>
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

export default Register;
