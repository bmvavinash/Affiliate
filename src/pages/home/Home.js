import React from 'react';

import './index.scss';

import Banner from './Banner';
import Products from './Products';

function Home(data) {
  console.log("Home Page tag is "+data.tag)
  return (
    <div className="home">
      <div>
        <ul>
            <li>Telegram Deals : </li>
        </ul>
        
      <Banner />
      <br/>
      </div>
      {/* <h3>Watches</h3> */}
      <div className="home__section">
        {/* <Products  /> */}
        <Products tag = {data.tag} category={data.category}/>
      </div>
    </div>
  );
}

export default Home;