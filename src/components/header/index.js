import React,{useState} from 'react';

import './index.scss';

import DeliveryLocation from './DeliveryLocation';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';
import Cart from './Cart';
import Orders from './Orders';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

function Header() {

  const [category, setCategory] = useState("usm");

  let { check } = useParams();

  const location = useLocation()
  // const [searchParams] = useSearchParams();
  // console.log('url data is '+searchParams.userId)
  const params = new URLSearchParams(location.search)
  // console.log('url data is '+params.get(userId))


  console.log('Params is '+check);
  const searchHandler = (event) => {
    setCategory(event.target.value);
  }

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        {/* <DeliveryLocation /> */}
        {/* <Search category = {category} searchHandler = {searchHandler} /> */}
        <div className="App">
      {params.get("userId")}
    </div>
        <div>
          {/* <input type="text" value={category} ></input> */}
        </div>
        {/* <Search category = {category} /> */}
        {/* <Search /> */}
        {/* <Account /> */}
        {/* <Orders /> */}
        {/* <Cart /> */}
      </div>
    </header>
  );
}

export default Header;
