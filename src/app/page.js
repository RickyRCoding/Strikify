"use client";

import { useState } from "react";
import Header from "./components/Header.jsx";
import { PRODUCTS } from "./products.js";
import Product from "./components/Product.jsx";

export default function Page() {
  const [cart, setCart] = useState([]); // Shared cart state

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <section id="shop">
        <h2 className="section-title">
          High quality, 3D printed artisan keycaps for anyone that wants a splash
          to their computer setup.
        </h2>
        <ul id="products">
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} setCart={setCart} />
            </li>
          ))}
        </ul>
        <hr />
        <h2 className="form-title">
          Did you like your experience shopping online? Please give us your
          feedback:
        </h2>
        <textarea
          className="form"
          placeholder="Write your feedback here"
        ></textarea>
        <button className="form-button">Submit</button>
      </section>
    </>
  );
}