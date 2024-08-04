//----------------
import { useState } from "react";
import { productsData } from "./data";
import Navbar from "./navbar";

export default function App() {
  const [products, setProducts] = useState(productsData);

  const addToCart = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product };
        updatedProduct.cartQty = updatedProduct.cartQty
          ? updatedProduct.cartQty + 1
          : 1;
        return updatedProduct;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="container my-2">
      <Navbar />
      <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-4 row-cols-md-4 my-5 py-5">
        <button>EveryDay Value</button>
        <button>Ala-Cart-&-Combos</button>
        <button>Promotion</button>
        <button>Signature-Boxes</button>
      </div>
      </div>
      <h1 style={{fontFamily:'cursive'}}>EveryDay Value</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description}
                  <br />
                  <a
                    href="#"
                    className={`btn ${
                      product.stock ? "btn-primary" : "btn-danger"
                    }`}
                    onClick={() => addToCart(product.id)}
                    disabled={product.stock && product.cartQty >= product.stock}
                  >
                    {product.stock ? "Add to Cart" : "Out of Stock"}
                  </a>
                  {!!product.cartQty && <span> {product.cartQty}</span>}
                  {product.cartQty === product.stock && (
                    <span className="text-info"> 3 stock limit reached!</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
