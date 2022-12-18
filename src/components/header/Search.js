import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { searchImg } from '../../images/search.jpg';

import './Search.scss';
import Products from '../../pages/home/Products';
import { useCartDispatch } from 'cart-context';
import Header from '.';

const categories = [
  'Earphones'
  // 'Mobiles'
  // 'All Categories',
  // 'Deals',
  // 'Alexa Skills',
  // 'Amazon Devices',
  // 'Amazon Fashion',
  // 'Amazon Pantry',
  // 'Appliances',
  // 'Apps & Games',
  // 'Baby',
  // 'Beauty',
  // 'Big Bazaar',
  // 'Books',
  // 'Car & Motorbike',
  // 'Clothing & Accessories',
  // 'Collectibles',
  // 'Computers & Accessories',
  // 'Electronics',
  // 'Furniture',
  // 'Garden & Outdoors',
  // 'Gift Cards',
  // 'Grocery & Gourmet Foods',
  // 'Health & Personal Care',
  // 'Home & Kitchen',
  // 'Industrial & Scientific',
  // 'Jewellery',
  // 'Kindle Store',
  // 'Luggage & Bags',
  // 'Luxury Beauty',
  // 'Movies & TV Shows',
  // 'Music',
  // 'Musical Instruments',
  // 'Office Products',
  // 'Pet Supplies',
  // 'Prime Video',
  // 'Shoes & Handbags',
  // 'Software',
  // 'Sports, Fitness & Outdoors',
  // 'Tools & Home Improvement',
  // 'Toys & Games',
  // 'Under ₹500',
  // 'Video Games',
  // 'Watches',
];

function Search(props) {
  const [category, setCategory] = useState("");
  const [searchcategory, setSearchCategory] = useState("");
  const [toSearch, settoSearch] = useState("");
  const dispatch = useCartDispatch();  


  const inputCategory = (event) => {
    setCategory(event.target.value)
  }
  const onButtonSearch = (event) => {
    setSearchCategory(event.target.value)
    // setCategory(event.target.value)
    console.log('OnButtonSearch');
    // dispatch()
  }

  return (
    <div className="search">
      {/* <select
        className="search__select"
        value={category}
        onChange={(e) => setCategory(parseInt(e.target.value, 10))}
      >
        {categories.map((o, i) => (
          <option key={i} value={i}>
            {o}
          </option>
        ))}
      </select> */}
      {/* <div> */}
      {/* <Products category={category} /> */}
      {/* <button className="search__button" onClick={onButtonSearch}> */}
      <input className="search__input" type="text" value={category} onChange = {inputCategory} />
      <button className="search__button" onClick={props.searchValue(category)}>
        <Icon path={mdiMagnify} size={1.4} />
      </button>
        {/* <Icon path={searchImg} size={1.4} /> */}
      {/* </div> */}
      {/* <div> */}
        {/* <Header category={category} tag="avinash"></Header> */}
      {/* <Products category={category} tag="avinash" /> */}
      {/* </div> */}
    </div>
  );
}

export default Search;
