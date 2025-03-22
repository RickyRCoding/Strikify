"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header({ cart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <header id="main-header">
        <div id="main-title">
          <Image src={logo} alt="Logo" width={100} height={100} />
          <h1>
            Strikify, <span id="slogan">Strike your keys with style</span>
          </h1>
        </div>
        <p>
          <button onClick={toggleModal}>Cart</button>
        </p>
      </header>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
              <>
                {cart.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      background: item.color,
                      borderRadius: "1rem",
                      padding: "0.2rem",
                      margin: "0.1rem",
                    }}
                  >
                    <p>
                      {item.title} - {item.color} - ${item.price}
                    </p>
                  </div>
                ))}
                <p>Total: ${totalPrice.toFixed(2)}</p>
                <button>Purchase</button>
              </>
            ) : (
              <p>Your cart is currently empty.</p>
            )}

            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
