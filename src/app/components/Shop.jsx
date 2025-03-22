import { PRODUCTS } from "../products.js";
import Product from "./Product.jsx";

export default function Shop({ onAddItemToCart }) {
  return (
    <section id="shop">
      <h2 className="section-title">
        High quality, 3D printed artisan keycaps for any one that wants a splash
        to their computer setup.
      </h2>
      <ul id="products">
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
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
  );
}
