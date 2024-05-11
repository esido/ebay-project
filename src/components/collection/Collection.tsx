import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "../../types";
import "./Collection.scss";

const Collection = () => {
  const [collection, setCollection] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setCollection(data.products.slice(0, 12)));
  }, []);

  return (
    <section className="collection">
      <div className="container">
        <div className="collection__wrapper">
          {collection.map((item) => (
            <Link
              to={`/products/${item.id}`}
              className="item__wrapper"
              key={item.id}
            >
              <div className="item">
                <img src={item.images[0]} alt="" />
                <strong>${item.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
