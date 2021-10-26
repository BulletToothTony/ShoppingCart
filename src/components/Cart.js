import React, {useContext} from 'react';
import CartItem from './CartItem';
import { AppContext } from "../context";


const Cart = () => {
    const data = useContext(AppContext)

    if (data.cartItems.length === 0) {
        return (<h1>Empty Cart</h1>)
    }

    return (
        <div>
            <button onClick={data.clearCart} className="clearCartBtn">Clear Cart</button>
            <h1>Cart total: {data.cartTotal}</h1>
            {data.cartItems.map((item) => {
                return (
                    <CartItem {...item}/>
                )
            })}

        

        </div>
    );
};

export default Cart;