import React, { useContext } from "react";

//Contexts:
import { CartContext } from "../../Context/CartContextProvider";
//Functions:
import { titleShortner } from "../../Helper/fuctions";
//Icons:
import trashIcon from "../../assets/icon/trash.svg"

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <img src={image} alt='product' />
      <div>
        <h3>{titleShortner(title)}</h3>
        <p>{price}</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {
            quantity > 1 ? 
            <button onClick={()=> dispatch({type:"DECREASE", payload:props.data})}>-</button> :
            <button onClick={()=> dispatch({type:"REMOVE_ITEM", payload:props.data})}><img src={trashIcon} alt="trash" style={{width:"20px"}} /></button> 
            
        }
        <button onClick={()=> dispatch({type:"INCREASE", payload:props.data})}>+</button>
      </div>
    </div>
  );
};

export default Cart;