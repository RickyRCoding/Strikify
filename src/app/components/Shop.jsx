import { PRODUCTS } from "../products.js";
import Product from "./Product.jsx";

export default function Shop({ onAddItemToCart }) {
  return (
    <section id="shop">
      <h2>
        High quality, 3D printed artisan keycaps for any one that wants a splash
        to their computer setup.
      </h2>
      <ul id="products">
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
