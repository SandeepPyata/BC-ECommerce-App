import { useState } from "react";
import { useRecoilState } from "recoil";
import { cartAtom, cartItemsAtom } from "../atoms/cartAtom";

const displayQuantity = (quantity) => {
  return quantity > 10
    ? "available"
    : quantity === 0
    ? "unavailable"
    : "selling fast";
};

export const IndividualProduct = (props) => {
  let productDetails = {
    id: props.details.id,
    name: props.details.name,
    image: props.details.image,
    price: props.details.price,
    description: props.details.description,
    quantity: 1,
  };

  const [imageLink, setImageLink] = useState(productDetails.image);
  const [, setNoOfItems] = useRecoilState(cartAtom);
  const [items, setItems] = useRecoilState(cartItemsAtom);
  const idx = items.findIndex((item) => item.id === productDetails.id);
  const currentItem = idx === -1 ? undefined : items[idx];

  const handleDetails = (variant) => {
    if (variant === "Grey") {
      setImageLink((prevDetails) => (prevDetails = variant.image));
    } else {
      setImageLink((prevDetails) => (prevDetails = variant.image));
    }
  };

  const handleAddCartItems = () => {
    if (currentItem === undefined) {
      const newCart = [...items, productDetails];
      setItems(newCart);
      setNoOfItems(newCart.length);
    } else {
      const newCart = [
        ...items.slice(0, idx),
        { ...currentItem, quantity: currentItem["quantity"] + 1 },
        ...items.slice(idx + 1),
      ];
      setItems(newCart);
      setNoOfItems(newCart.length);
    }
  };

  function handleDeleteCartItems() {
    if (currentItem["quantity"] === 1) {
      const newCart = [...items.slice(0, idx), ...items.slice(idx + 1)];
      setItems(newCart);
      setNoOfItems(newCart.length);
    } else {
      const newCart = [
        ...items.slice(0, idx),
        { ...currentItem, quantity: currentItem["quantity"] - 1 },
        ...items.slice(idx + 1),
      ];
      setItems(newCart);
      setNoOfItems(newCart.length);
    }
  }

  const product = props.details;
  return (
    <>
      <div id="single-product-image-block">
        <img src={imageLink} alt="Single-Product" />
      </div>
      <div id="single-product-description">
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <p>
          Price : $ <strong>{product.price}</strong>
        </p>
        <p>In Stock</p>
        <p>Quantity : {displayQuantity(product.quantity)}</p>
        <div id="product-variants">
          <p>Variants :</p>
          <button
            id="product-variant"
            style={{ backgroundColor: `${product.variants[0]?.color}` }}
            onClick={() => handleDetails(product.variants[0])}
          ></button>
          <button
            id="product-variant"
            style={{ backgroundColor: `${product.variants[1]?.color}` }}
            onClick={() => handleDetails(product.variants[1])}
          ></button>
        </div>
        <div>
          {!currentItem ? (
            <button
              onClick={handleAddCartItems}
              type="button"
              id="add-to-cart-btn"
            >
              Add to Cart
            </button>
          ) : (
            <span id="cart-buttons">
              <button onClick={handleDeleteCartItems}>-</button>
              <p>{currentItem.quantity}</p>
              <button onClick={handleAddCartItems}>+</button>
            </span>
          )}
        </div>
      </div>
    </>
  );
};
