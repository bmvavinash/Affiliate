import React from 'react';

import './index.scss';

import Banner from './Banner';
import Products from './Products';

function HomePage(data) {
  console.log("Home Page tag is "+data.tag)
  return (
    <div className="home">
      {/* <Banner /> */}
      {/* <h3>Watches</h3> */}
      <div className="home__section">
        {/* <Products  /> */}
        <Products tag = {data.tag} />
      </div>
    </div>
  );
}

export default HomePage;
