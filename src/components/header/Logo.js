import React from 'react';

import BrandLogo from 'images/amazon-logo.png';
import A1 from 'images/A-Customized-N1.png';
import A2 from 'images/A-Customized.png';
import { Link } from 'react-router-dom';

import './Logo.scss';

function Logo({ country = 'in' }) {
  return (
    <Link to="/" className="logo">
      {/* <h2>ALL APP</h2> */}
       <img className="logo__img" alt="Amazon" src={A2} />
      {/* {country && <span className="logo__country">.{country}</span>}  */}
    </Link>
  );
}

export default Logo;
