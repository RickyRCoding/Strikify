import { useState } from "react";
import Image from "next/image";

export default function Product({ id, image, title, price, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff"); // Track selected color

  const handleAddToCartClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleConfirmColor = () => {
    setCart((prev) => [
      ...prev,
      {
        title,
        price,
        color: selectedColor,
      },
    ]);
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <article className="product">
        <Image src={image} alt={title} width={1000} height={300} />
        <div className="product-content">
          <div>
            <h3>{title}</h3>
            <p className="product-price">${price}</p>
            <p id="des">{description}</p>
          </div>
          <p className="product-actions">
            <button onClick={handleAddToCartClick}>Add to Cart</button>
          </p>
        </div>
      </article>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Pick a Color</h2>
            <p>
              Please select a color for your product before adding it to the
              cart.
            </p>
            <div className="color-picker">
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              />
              <p>Selected Color: {selectedColor || "None"}</p>
            </div>
            <button
              onClick={() => {
                handleConfirmColor();
                handleCloseModal();
              }}
            >
              Add to cart
            </button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
