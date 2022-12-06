import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { cartItemsAtom } from "../atoms/cartAtom";

function DisplayProduct(props) {
  return (
    <>
      <div id="cart-product-img-block">
        <img src={props.details.image} alt="Product" />
      </div>
      <div id="cart-product-details">
        <h4>{props.details.name}</h4>
        <p>{props.details.description}</p>
        <p>Quantity : {props.details.quantity}</p>
        <p>
          Price :{" "}
          <strong>${props.details.quantity * props.details.price}</strong>
        </p>
      </div>
    </>
  );
}

export const Cart = () => {
  const items = useRecoilValue(cartItemsAtom);
  const [showItems, setShowItems] = useState(false);

  function handleShowCart() {
    setShowItems(!showItems);
  }

  return (
    <div id="cart-block">
      <button onClick={handleShowCart}>Cart({items.length})</button>
      {showItems && (
        <div id="cart-items-block">
          {items.length === 0 ? (
            <div>No items in Cart</div>
          ) : (
            items.map((item) => <DisplayProduct details={item} />)
          )}
        </div>
      )}
    </div>
  );
};
