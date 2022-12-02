import React from 'react';
import Icon from '@mdi/react';
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { mdiMinus, mdiPlus } from '@mdi/js';

import './AddToCart.scss';

import { useCartDispatch, useCartState } from 'cart-context';
import { Link } from 'react-router-dom';

function AddToCard({ product }) {
  const { products } = useCartState();
  const dispatch = useCartDispatch();

  const cartEntry = products[product.id];
  // const navigate = useNavigate();

  // const navigateToContacts = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('www.google.com');
  // };  

  // let history = useHistory();

  // function handleClick() {
  //   history.push("/home");
  // }

  // return (
    // <button type="button" onClick={handleClick}>
    //   Go home
    // </button>

  if (cartEntry) {
    return (
      // <Link to="www.google.com">
      <div className="add-to-cart">
         <Link to={{ pathname: "https://google.com" }} target="_blank" >
          Submit
         </Link>
        {/* <button
          className="add-to-cart__action add-to-cart__action--minus"
          // onClick={navigateToContacts}
          // onClick={handleClick}
          onClick={()=>{
            window.location.href='www.google.com'
            }} */}
          {/* // onClick="www.facebook.com" */}
          {/* // onClick={() => dispatch({ type: 'decrement', payload: product })} */}
        {/* >Hai */}
          {/* <Icon className="add-to-cart__icon" size={1.2} path={mdiMinus} /> */}
        {/* </button> */}
        </div>
      //  {/* </Link> */}
        // {/* <div className="add-to-cart__quantity">{cartEntry.quantity}</div> */}
        //  {/* <button
          // className="add-to-cart__action add-to-cart__action--plus"
          // onClick={() => dispatch({ type: 'increment', payload: product })}
        // >
          // <Icon className="add-to-cart__icon" size={1.2} path={mdiPlus} />
        // </button> */}
    );
  } else {
    return (
      <button className="add-to-cart-button" onClick={() => dispatch({ type: 'increment', payload: product })}>Submit</button>
      // <button
      //   className="add-to-cart-button"
      //   onClick={() => dispatch({ type: 'increment', payload: product })}
      // >
      //   Add to cart
      // </button>
    );
  }
}

export default AddToCard;
