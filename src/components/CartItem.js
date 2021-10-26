import React, { useContext } from "react";
import { AppContext } from "../context";

const CartItem = ({ ...item }) => {
  const data = useContext(AppContext);

  console.log(item);
  return (
    // <div>
    //     <h1>{item.name}</h1>
    //     <h2>Cart item</h2>
    // </div>

    <div key={item.id} className="itemCheckoutDiv">
      <h1>{item.name}</h1>
      {item.price}
      amount: {item.amount}
      <img src={item.image} alt={item.title}></img>
      <div>
        <button onClick={() => data.increaseItem(item.id)}>
          Increase amount
        </button>
        <button onClick={() => data.decreaseItem(item.id)}>
          Decrease amount
        </button>
        <button onClick={() => data.removeItem(item.id)}>Remove Item</button>
      </div>
    </div>
  );
};

export default CartItem;
