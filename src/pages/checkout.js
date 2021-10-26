import React, {useContext} from 'react';
import { AppContext } from "../context";

// Components
import Cart from '../components/Cart';


const Checkout = () => {
    return (
        <Cart/>
    )
    
    // const data = useContext(AppContext)

    

    // if (data.cartItems.length === 0) {
    //     return <h1>Empty Cart</h1>
    // }

    // return (
    //     <div className="checkoutDiv">
    //         <h1>Checkout</h1>
    // {/* <h2>{data.cartItems[0].name}</h2> */}
    // {/* <button onClick={() => data.increaseItem(data.cartItems[0].id)}>Increase amount</button> */}
    // {/* <h2>Cart: {data.cartItems.length}</h2> */}

    // {/* {data.items.map((item) => {
    // })} */}

    // {data.cartItems.map((item) => {
    //     return (
    //         <div key={item.id} className="itemCheckoutDiv">
    //             <h1>{item.name}</h1>
    //             {item.price}
    //             amount: {item.amount} 
    //             <img src={item.image} alt={item.title}></img>
    //             <div>
    //             <button onClick={() => data.increaseItem(item.id)}>Increase amount</button>
    //             <button onClick={() => data.decreaseItem(item.id)}>Decrease amount</button>
    //             <button onClick={() => data.removeItem(item.id)}>Remove Item</button>
    //             </div>
                

    //         </div>
    //     )
    // })}

    // <button onClick={data.clearCart} className="clearCartBtn">Clear Cart</button>
    //     </div>
        
    // );
};

export default Checkout;