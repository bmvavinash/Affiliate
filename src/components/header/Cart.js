import React from 'react';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
// import RGF from 'react-google-forms'
import { Link } from 'react-router-dom';
import Flag from '../../images/Flag.jpeg';

import './Cart.scss';

import { useCartState } from 'cart-context';

function Cart() {
  const { totalQuantity } = useCartState();
  // <RGF config={<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdf6w9YRCsVnl59qX-_s9b_LSMjQdynb8hgzZqR8jMHih_56A/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>} />
  return (
    // <Link to="/cart" className="h-cart">
    <Link to="/flag" className="h-cart">
    {/* <Link to="/form" className="h-cart"> */}
      <Icon path={9951797149} size={1.4} />
      {/* <div className="h-cart__count">{totalQuantity}</div> */}
      <img 
            className="photo"
            alt={"hai"}
            src={Flag}
          />
      <div><h3>      </h3></div>
      {/* <div><h3>9951797149</h3></div> */}
    </Link>
  );
}

export default Cart;
