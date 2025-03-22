"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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
            {cart.length != 0 && (
              <>
                <p>Total: $0.00</p>
                <button>Purchase</button>
              </>
            )}
            <p>Your cart is currently empty.</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
