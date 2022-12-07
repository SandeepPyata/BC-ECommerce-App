import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { cartItemsAtom } from "../atoms/cartAtom";
import "../styles/cart.css";
import { CartProduct } from "./CartProduct";
const EmptyCart = () => {
  return (
    <>
      <div id="empty-cart-info">
        <marquee>No items in Cart</marquee>
      </div>
      <div id="empty-cart-image-block">
        <img
          src="https://media3.giphy.com/media/WAQiH273h7nTChAbHu/giphy.gif?cid=790b761138fc5d0a5dbd22b11808f4697dcc336ee85133a1&rid=giphy.gif&ct=g"
          alt="Empty-Cart-GIF"
        />
      </div>
    </>
  );
};
export const Cart = () => {
  const items = useRecoilValue(cartItemsAtom);
  const [showItems, setShowItems] = useState(false);
  function handleShowCart(event) {
    setShowItems(!showItems);
  }
  const handleHideCart = (event) => {
    setShowItems(!showItems);
  };
  return (
    <div id="cart-block">
      <button onClick={handleShowCart}>Cart({items.length})</button>
      {showItems && (
        <div id="cart-items-block" onMouseLeave={handleHideCart}>
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            items.map((item) => <CartProduct key={item.id} details={item} />)
          )}
        </div>
      )}
    </div>
  );
};
