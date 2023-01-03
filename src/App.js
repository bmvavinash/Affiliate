import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/header';
import CartPage from './pages/cart';
import FlagPage from './pages/flag';
import DealsPage from './pages/flag/deals';
import ProductPage from './pages/product';
import LoginPage from './pages/login';
import HomePage from './pages/home';
// import { useMediaQuery } from 'react-responsive'
// import MediaQuery from 'react-responsive'
import './App.scss';
import { Mobile } from 'components/mobile/mobile.component';
import { Desktop } from 'components/desktop/desktop.component';
import { Laptop } from 'components/laptop/laptop.component';
// import { BigScreen } from 'components/big-screen/big-screen.component';
import { TabletMobile } from 'components/tablet/tablet-mobile.component';
import Products from 'pages/home/Products';
import ItemProducts from 'pages/home/ItemProducts';
import Logo from 'components/header/Logo';
import Search from 'components/header/Search';
import Home from 'pages/home/Home';

function App() {

  const [tag, setTag] = useState("");
  const [searchData, setSearchData] = useState("");

  console.log('App Search Data is '+searchData);


  const categoryHandler = (e) =>{
    console.log('Search Value in App is '+e);
    setSearchData(e);
    // setCategory(e);
    // console.log('Search Value in header is '+category);
  }

  const searchDataHandler = (e) =>{
    console.log('App Value is '+e);
    // setCategory(e);
    // console.log('Search Value in header is '+category);
  }
  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 480px)",
  // });

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });

  // const isBigScreen = useMediaQuery({
  //   query: "(min-device-width: 1201px )",
  // });
  // const isMobileDevice=true
  // const isTabletDevice=false
  // const isDesktop=false
  // const isLaptop=false
  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      {/* <h1>React Responsive - a guide</h1>       */}
{/* {isMobileDevice && <Mobile />}
  {isTabletDevice && <>
  <TabletMobile />
  {isDesktop && <Desktop />}
  {isLaptop && <Laptop />} */}
  {/* {isBigScreen && <BigScreen />} */}
{/* </>} */}

      
      <Header searchDataHandler={searchDataHandler} searchValue={(e)=> categoryHandler(e)}/>
      {/* <div>
        <Logo></Logo>
      </div>
      <div>
        
        <Search searchValue={(e) => categoryHandler(e)}></Search>
      </div> */}

      <div className="page-container">
      {/* <div > */}
        <Switch>
          <Route exact path="/cart">
            <CartPage />
          </Route>

          <Route exact path="/flag">
            <FlagPage />
          </Route>

          <Route exact path="/deals">
            {/* <DealsPage /> */}
            <Products tag="others" category={searchData}/>
            {/* <HomePage tag="others" category={searchData}/> */}
          </Route>

          <Route exact path="/items">
            <Products tag="items" category={searchData}/>
            {/* <ItemProducts tag="items" category={searchData}/> */}
          </Route>

          <Route exact path="/items/:asinId">
            <Products tag="items" category={searchData}/>
            {/* <ItemProducts tag="items" category={searchData}/> */}
          </Route>

          <Route exact path="/product/:productId">
            <ProductPage tag="avinash" />
          </Route>

          <Route exact path="/items/product/:productId">
            <ProductPage tag="items" />
          </Route>

          <Route exact path="/:asinId">
            <Products tag="avinash" category={searchData} />
            {/* <HomePage tag="avinash" category={searchData} /> */}
          </Route>

          <Route exact path="/deals/:asinId">
            <Products tag="others" category={searchData} />
            {/* <HomePage tag="others" category={searchData} /> */}
          </Route>


          <Route exact path="/deals/product/:productId">
            <ProductPage tag="others" />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          {/* <Route exact path="/"> */}
          <Route>
            <HomePage tag="avinash" category={searchData}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
