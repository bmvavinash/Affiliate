import React from 'react';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import { Link } from 'react-router-dom';

import './Cart.scss';

import { useCartState } from 'cart-context';

function Cart() {
  const { totalQuantity } = useCartState();

  return (
    // <Link to="/cart" className="h-cart">
    <Link to="/form" className="h-cart">
      {/* <Icon path={mdiCartOutline} size={1.4} /> */}
      {/* <div className="h-cart__count">{totalQuantity}</div> */}
      {/* <h3>Contact Us </h3> */}
      <h3>9951797149</h3>
    </Link>
  );
}

export default Cart;
