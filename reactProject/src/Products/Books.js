import { useState } from "react";

function Books(props) {
  const [purchased, setPurchased] = useState(false);
  const [count, setCount] = useState(0);

  function buy(name,p) {
    let price=(p*20)//100
    console.log("discount 20%", name, "purchased",price);
    setPurchased(true);
    setCount(count + 1); 
  }

  return (
    <div className="mybook">
      <img src={props.image} alt="Product" id="img" />
      <p>Author: {props.author}</p>
      <p>Year: {props.year}</p>
      <hr />
      <p>Price: {props.price}</p>
      
      <p>Count: {count}</p>


      <p>{purchased ? "Purchased" : "Get it now"}</p>
      <button onClick={() => buy(props.author)}>BuyNow</button>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>


    </div> 
  );
}

export default Books;