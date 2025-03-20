"use client";

import { useRef } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
  const modal = useRef();

  let modalActions = <button>Close</button>;

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
          <button>Cart</button>
        </p>
      </header>
    </>
  );
}
