import React,{useState} from 'react';

import './index.scss';

import DeliveryLocation from './DeliveryLocation';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';
import Cart from './Cart';
import Orders from './Orders';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

function Header(props) {

  const [categoryvalue, setCategoryValue] = useState("");
  const [category, setCategory] = useState("");

  let { check } = useParams();
  check = category;
  const location = useLocation()
  // const [searchParams] = useSearchParams();
  // console.log('url data is '+searchParams.userId)
  const params = new URLSearchParams(location.search)
  // console.log('url data is '+params.get(userId))

  const inputCategory = (event) => {
    setCategory(event.target.value)
  }
  const onButtonSearch = (event) => {
    // setSearchCategory(event.target.value)
    // setCategory(event.target.value)
    console.log('OnButtonSearch');
    // dispatch()
  }

  const categories = [
    'Earphones',
    'Mobiles',
    'All Categories',
    'Deals',
    'Alexa Skills',
    'Amazon Devices',
    'Amazon Fashion',
    'Amazon Pantry',
    'Appliances',
    'Apps & Games',
    'Baby',
    'Beauty',
    'Big Bazaar',
    'Books',
    'Car & Motorbike',
    'Clothing & Accessories',
    'Collectibles',
    'Computers & Accessories',
    'Electronics',
    'Furniture',
    'Garden & Outdoors',
    'Gift Cards',
    'Grocery & Gourmet Foods',
    'Health & Personal Care',
    'Home & Kitchen',
    'Industrial & Scientific',
    'Jewellery',
    'Kindle Store',
    'Luggage & Bags',
    'Luxury Beauty',
    'Movies & TV Shows',
    'Music',
    'Musical Instruments',
    'Office Products',
    'Pet Supplies',
    'Prime Video',
    'Shoes & Handbags',
    'Software',
    'Sports, Fitness & Outdoors',
    'Tools & Home Improvement',
    'Toys & Games',
    'Under ₹500',
    'Video Games',
    'Watches',
  ];

  console.log('Params is '+check);
  const searchHandler = (event) => {
    setCategory(event.target.value);
  }
  console.log('Header Search value is '+props.category);
  const categoryHandler = (e) =>{
    // console.log('Search Value in header is '+e);
    setCategory(e);
    // console.log('Search Value in header is '+category);
  }
  return (
    <header className="header">
      <div className="header__container">
        {/* <DeliveryLocation /> */}
        {/* <Search categoryvalue = {categoryvalue} searchData={props.category} searchHandler = {searchHandler} searchValue={(e) => categoryHandler(e)} /> */}
        {/* <Search /> */}

        <Logo />
        <div className="search">

          {/* <select
        className="search__select"
        value={category}
        // onChange={(e) => setCategory(parseInt(e.target.value, 10))}
        onChange={
          (e) => {setCategory(parseInt(e.target.value, 10));
          props.searchValue(category);}}

      >
        {categories.map((o, i) => (
          <option key={i} value={i}>
            {o}
          </option>
        ))} */}
      {/* </select> */}

            <input className="search__input" type="text" placeholder='Search Here' value={category} onChange = {inputCategory} />
          {/* <button className="search__button" onClick={props.searchValue(category)}>
            <Icon path={mdiMagnify} size={1.4} />
          </button> */}
        </div>







        <div className="App">
      {params.get("userId")}
    </div>
          {/* {(check == "items")? */}
        <div>
        <Link to="/" className="logo">

        <button style={{ color: 'crimson', padding: '0.5rem 0.5rem 0 0.5rem', fontSize:18, lineHeight : 1 ,marginLeft: 10,marginTop: 12, fillOpacity:'blue'}}>Amazon Items</button>
        </Link>
        <br />
        <br />
          {/* <input type="text" value={category} ></input> */}
        </div>
         {/* : null} */}
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
