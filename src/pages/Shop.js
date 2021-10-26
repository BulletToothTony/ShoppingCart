import React, { useContext } from "react";
import { useGlobalContext } from "../context";
import { AppContext } from "../context";
import {Link} from 'react-router-dom';

const Shop = () => {
  //   const data = useContext(AppContext);
  const data = useContext(AppContext);
  // console.log(data);
  // console.log('eeeeeeeeeeee')
  //   console.log(useGlobalContext);
  //   const { items } = useGlobalContext();
  // console.log(data)

  return (
    <div className="shopDiv">
      {/* <h1>shop</h1> */}
      {/* map over items from context */}
      {data.items.map((item) => {
        return (
          <div key={item.id}>
            {/* <h2>{item.id}</h2> */}
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
        <h4>Amount in Cart: {item.amount}</h4>
        <Link to={`/item/${item.id}`}>
            <img src={item.image} alt={item.name}></img>
            <br></br>
            Link to item
            </Link>
            {/* <div>
            <Link to={`/item/${item.id}`}>
              Link to item
            </Link>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
