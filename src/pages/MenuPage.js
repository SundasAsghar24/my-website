import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { productsData } from "../data/products";


export default function MenuPage() {
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/product/" + id);
  };

  return (
    <>
      <h1>MenuPage ... </h1>
      <ul class="list-group">

        {productsData.map(p => (
          <li class="list-group-item" key={p.id}>
            <Link to={`/product/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
        
        <li class="list-group-item">
          <a href="https://www.nexusberry.com/">Made by NexusBerry</a>
        </li>
      </ul>

      <hr />
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => handleClick(1)}
      >
        Product 1 Details
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => handleClick(2)}
      >
        Product 2 Details
      </button>

      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => handleClick(3)}
      >
        Product 3 Details
      </button>
      
    </>
  );
}
