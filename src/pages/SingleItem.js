import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";

const SingleItem = () => {
  const data = useContext(AppContext);
//   console.log(data)
  const { id } = useParams();
  return (
    <div className="singleItem">
      <h1>Single Item Page</h1>
      <h1>{data.items[id].name}</h1>
      <h1>{data.items[id].price}</h1>
      <img src={data.items[id].image} alt={data.items[id].name}></img>

      {/* <h1>{data.items[id].id}</h1> */}
      <br></br>
      <button onClick={() => data.addItemToCart(data.items[id])}>Add to Cart</button>
    </div>
  );
};

export default SingleItem;
