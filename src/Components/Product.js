import React, { useState } from "react";
import useProductData from "../hooks/useProductData";
import { useParams } from "react-router-dom";
import { cartAtom, cartItemsAtom } from "../atoms/cartAtom";
import { useRecoilState } from "recoil";

function SingleProduct(props) {
  const [imageLink, setImageLink] = useState(props.details.image);
  function handleDetails(variant) {
    if (variant === "Grey") {
      setImageLink((prevDetails) => (prevDetails = variant.image));
    } else {
      setImageLink((prevDetails) => (prevDetails = variant.image));
    }
  }
  const [, setNoOfItems] = useRecoilState(cartAtom);
  const [items, setItems] = useRecoilState(cartItemsAtom);
  let details = {
    id: props.details.id,
    name: props.details.name,
    image: props.details.image,
    price: props.details.price,
    description: props.details.description,
    quantity: 1,
  };
  const idx = items.findIndex((item) => item.id === details.id);
  const currentItem = idx === -1 ? undefined : items[idx];

  function handleAddCartItems() {
    if (currentItem === undefined) {
      const newCart = [...items, details];
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
  }

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

  const quantity = props.details.quantity;
  return (
    <>
      <img src={imageLink} alt="Single-Product" />
      <div id="single-product-description">
        <h4>{props.details.name}</h4>
        <p>{props.details.description}</p>
        <p>
          Price : $ <strong>{props.details.price}</strong>
        </p>
        <p>In Stock</p>
        <p>
          Quantity :{" "}
          {quantity > 10
            ? "available"
            : quantity === 0
            ? "unavailable"
            : "selling fast"}
        </p>
        <div id="product-variants">
          <button
            id="product-variant"
            style={{ backgroundColor: `${props.details.variants[0]?.color}` }}
            onClick={() => handleDetails(props.details.variants[0])}
          ></button>
          <button
            id="product-variant"
            style={{ backgroundColor: `${props.details.variants[1]?.color}` }}
            onClick={() => handleDetails(props.details.variants[1])}
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
}

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useProductData(id === ":id" ? 1 : id);
  if (isLoading || isFetching) return <div>Loading...</div>;
  return (
    <div id="product-page-block">
      <SingleProduct details={data?.data} />
    </div>
  );
};
export default Product;
