import { atom } from "recoil";

export const cartAtom = atom({
  key: "cart",
  default: 0,
});

export const cartItemsAtom = atom({
  key: "cartItems",
  default: [],
});
