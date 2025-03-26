"use client";

import { useState, useRef } from "react";
import Header from "./components/Header.jsx";
import { PRODUCTS } from "./products.js";
import Product from "./components/Product.jsx";

export default function Page() {
  const [cart, setCart] = useState([]); // Shared cart state
  const [feedback, setFeedback] = useState(""); // State for textarea value
  const textareaRef = useRef(null); // Ref for the textarea

  const handleSubmit = () => {
    console.log("Feedback submitted:", feedback); // Optional: Log feedback
    setFeedback(""); // Clear the textarea
    if (textareaRef.current) {
      textareaRef.current.placeholder = "Thank you for your feedback!"; // Update placeholder
    }
  };

  return (
    <>
      <nav className="content">
        <h1 className="text" data-text="SHARK TANK SALE - 50% OFF ALL PRODUCTS - SHARK TANK SALE - 50% OFF ALL PRODUCTS - SHARK TANK SALE - 50% OFF ALL PRODUCTS - SHARK TANK SALE - 50% OFF ALL PRODUCTS - SHARK TANK SALE - 50% OFF ALL PRODUCTS">
          SHARK TANK SALE <span className="empty">-------</span> 50% OFF ALL PRODUCTS <span className="empty">-------</span> NOW OR NEVER
        </h1>
      </nav>
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
        <h2 className="section-title">
          <i>!!!BRAILLE KEYCAPS COMMING SOON!!!</i>
        </h2>
        <hr />
        <h2 className="form-title">
          Did you like your experience shopping online? Please give us your
          feedback:
        </h2>
        <textarea
          ref={textareaRef} // Attach ref to the textarea
          className="form"
          placeholder="Write your feedback here"
          value={feedback} // Bind value to state
          onChange={(e) => setFeedback(e.target.value)} // Update state on change
        ></textarea>
        <button className="form-button" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </>
  );
}