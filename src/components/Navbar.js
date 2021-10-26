import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

const Navbar = () => {
  const data = useContext(AppContext);
  // console.log(data.cartItems)
  return (
    <div className="navBar">
      <h1>Shopping Cart</h1>

      <div className="navbarRight">
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/checkout">
          Checkout Items: {data.cartItems.length}
          {/* Items: {data.cartItems} */}
          
          {/* Items: 0 */}
          {/* {data.cartItems} */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
