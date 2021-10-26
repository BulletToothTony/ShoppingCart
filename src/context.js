import React, { useState, useContext, useEffect } from "react";
import Rock from './images/rock.jpeg'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([
    { id: "0", name: "t shirt", price: "$3.99", image: 'https://images.unsplash.com/photo-1633990017009-4d1eab0bf0d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80', amount: 0},
    { id: "1", name: "Jeans", price: "$19", image: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80' , amount: 0},
    { id: "2", name: "Shoes", price: "$29", image: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80', amount: 0},
    { id: "3", name: "Shoes", price: "$29", image: 'https://images.unsplash.com/photo-1517196084897-498e0abd7c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', amount: 0},
    { id: "4", name: "Shoes", price: "$29", image: 'https://images.unsplash.com/photo-1547070451-e3857a8ea62a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80', amount: 0},
    { id: "5", name: "Shoes", price: "$29", image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80', amount: 0},
    { id: "6", name: "Shoes", price: "$29", image: 'https://images.unsplash.com/photo-1563494270-4e133aea0ede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80', amount: 0},
    { id: "7", name: "Shoes", price: "$29", image: 'https://images.unsplash.com/photo-1519066473994-a7506988851d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80', amount: 0}
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0)

  const addItemToCart = (id) => {
    //   cartItems.push(id)
    //   console.log(cartItems)
      // setTotalItems(totalItems + 1);
      // console.log('id')
      // console.log(id.id)
      // cartItems.push(id)
      // console.log(cartItems)

      // const x = cartItems.find((item) => item.id === id.id)
      // console.log(x)

      // if (id) {
      //   let x = cartItems.find((item) => item.id === id.id)
      //   if (x) {
      //     x.amount + 1
      //   }
      // } else {
      //   cartItems.push(id)
      // }

      let x = cartItems.find((item) => item.id === id.id)
      if (x) {
        x.amount +=1;
      } else {
        // cartItems.push(id)
        id.amount+=1
        setCartItems([...cartItems, id])
        console.log('null')
      }

      // setCartItems([...cartItems, id])

      // cartItems.map((item) => {
      //   return console.log(item.amount)
      // })

      console.log(cartItems)
      

      // cartItems.find((item) => item.id === id.id) {
      //   return cartItems[item.id].amount + 1;
      // }


      // setCartItems(...items,items[id])
      // console.log('carttt')
      // console.log(cartItems)
    // setCartItems(cartItems+1)
  }

  const clearCart = () => {
    setCartItems([])
  }

  const increaseItem = (id) => {
    console.log('id below')
    console.log(id)
    // cartItems[id].amount += 1;
    // setCartItems(...cartItems, cartItems[id].amount+=1)
    // setCartItems(prevItems => prevItems[id].amount +1)
    // setCartItems(prevItems => [...prevItems, prevItems[id].amount+=1])
    setCartItems([...cartItems, cartItems[id].amount += 1])
    // setCartItems(cartItems[id].amount += 1)
    console.log(cartItems)
  }



  const decreaseItem = (id) =>{
    // cartItems[id].amount -=1;
    if (cartItems[id].amount === 0) {
      // console.log('empty')
      // cartItems.filter((item) => item.id === id)
      setCartItems(prevItems => prevItems.filter((item) => item.id !==id))
    }
    setCartItems([...cartItems, cartItems[id].amount -=1])
    if (cartItems[id].amount === 0) {
      // setCartItems(prevItems => prevItems.filter((item) => item.id !==id))
      setCartItems(cartItems.filter((item) => item.id !== id))

    }
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

//   console.log("testing context");

  return (
    <AppContext.Provider value={{ items, addItemToCart, cartItems, totalItems, clearCart, increaseItem, decreaseItem, removeItem  }}>{children}</AppContext.Provider>
  );
};

// export const useGlobalContext = () => {
//     return useContext(AppContext)
//   }

export { AppContext, AppProvider };
