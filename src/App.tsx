import { useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RouteController from "./routes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.scss";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const { pathname }: { pathname: string } = useLocation();
  return (
    <>
      {!pathname.includes("login") && !pathname.includes("register") && (
        <Header />
      )}

      <RouteController />
      {!pathname.includes("login") && !pathname.includes("register") && (
        <Footer />
      )}
    </>
  );
}

export default App;
