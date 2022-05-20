import React from "react";
import { useSelector } from "react-redux";
export default function CurrentItemsInCart() {
  const { cartItems } = useSelector((store) => store);
  return (
    <button className="btn btn-warning">
      Cart Items : <i class="fa-solid fa-cart-shopping"></i> ({cartItems.length}
      )
    </button>
  );
}