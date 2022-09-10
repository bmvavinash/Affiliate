import React , {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
// import Webdriver from 'Selenium'
import Redirect from './Redirect'
import O1 from '../../images/1.jpeg';
import O2 from '../../images/2.jpeg';
import O3 from '../../images/3.jpeg';
import O4 from '../../images/4.jpeg';
import O5 from '../../images/5.jpeg';
import O6 from '../../images/6.jpeg';
import O7 from '../../images/7.jpeg';
import O8 from '../../images/8.jpeg';
import O9 from '../../images/9.jpeg';
import O10 from '../../images/10.jpeg';
import O11 from '../../images/11.jpeg';
import O12 from '../../images/12.jpeg';
import O13 from '../../images/13.jpeg';
import O14 from '../../images/14.jpeg';
import O15 from '../../images/15.jpeg';
import O16 from '../../images/16.jpeg';
import O17 from '../../images/17.jpeg';
import O18 from '../../images/18.jpeg';
import O19 from '../../images/19.jpeg';
import O20 from '../../images/20.jpeg';
import O21 from '../../images/21.jpeg';
import O22 from '../../images/22.jpeg';
import O23 from '../../images/23.jpeg';
import O24 from '../../images/24.jpeg';
import O25 from '../../images/25.jpeg';
import O26 from '../../images/26.jpeg';
// import './index.scss';

// import { useCartState } from 'cart-context';
import CurrencyFormat from 'components/general/CurrencyFormat';
// async function example() {
//   const { Builder, By, Key, util} = require("selenium-webdriver")
// let driver = await new Builder().forBrowser("firefox").build();
// await driver.get("https://amzn.eu/d/fvjhOPh");
// let strUrl = await driver.getCurrentUrl()
// await driver.get("http://google.com");
// // await driver.get((await driver.getCurrentUrl()).substring(0,15));
// await driver.get(strUrl);
// }
const FlagPage=() => {
  const [count, setCount] = useState("");
  const [counted, setCounted] = useState("");
  let str=count ;
  // const inputref = useRef(null);
  // async function example() {
  useEffect(() => {
    if(count.length>12){
    let newurl=count.indexOf("/dp/")+15
      // setCounted(count.substr(0,newurl)+"?tag=109dd6-21");
      // setCounted(count.substr(0,36)+"?tag=109dd6-21");
      // console.log(count.substr(0,newurl)+"?tag=109dd6-21");
    setCounted(str.substr(0,newurl)+"?tag=109dd6-21");
    console.log(count.substr(0,newurl)+"?tag=109dd6-21");
    str=count.substr(0,36)+"?tag=109dd6-21"
    // setCounted("hai")
    console.log(newurl)
    }
    else if(count.includes("amzn")){
      // example();
    }
    else{
      str=`https://www.amazon.in/dp/${count}/?tag=109dd6-21`
    }
  
    return(
      <div>
        <Link to={{ pathname: str }} target="_blank" >
          <button >Redirect</button>
          <h3>Redirect</h3>
        </Link>
      </div>
    )
  },[count]);

  const textboxinput = (event) => {
    setCount(event.target.value)
  }
  const funcounted = (event,count) => {
    // if(event == undefined)
    event.preventDefault();
    let str ;
    if(count!=""){
      let newurl=count.indexOf("/dp/")+14
      setCounted(count.substr(0,newurl)+"?tag=109dd6-21");
      // setCounted(count.substr(0,36)+"?tag=109dd6-21");
      console.log(count.substr(0,newurl)+"?tag=109dd6-21");
      str=count.substr(0,newurl)+"?tag=109dd6-21"
      // setCounted("hai")
      console.log("button function")
    }
    
    return(
      <div>
        <Link to={{ pathname: str }} target="_blank" >
          <button onClick={event => funcounted(event,count)} >Redirected</button>
          <h3>Redirecth3</h3>
        </Link>
      </div>
    )
  }
  
  
  // handleChange() {
  //   this.setState({value: event.target.value});
  // }
//   const { products, totalQuantity, totalPrice } = useCartState();
//   const productIds = Object.keys(products).filter((id) => products[id]);

  return (
    <div className="cart">
      <form>
        <br/>
        <br/>
        <br/>
        <br/>

  <label style={{ color: 'crimson', fontSize:15, lineHeight : 1,lineWidth :8, padding: 20}}>
    URL or ASIN:&nbsp;
    {/* <p> </p> ref={inputref}*/}
    <input style={{ color: 'crimson', lineHeight : 2,lineWidth :8, leftpadding: 20}} type="text" name="name" onChange={event => textboxinput(event)}  />
  </label>
      {/* <button onClick={event => funcounted(event,count)}>Convert</button> */}
      {/* <label>
  <input type="text" name="name" value={counted} disabled />
  </label> */}
</form>
<br/>
<Link to={{ pathname: counted }} target="_blank" >
          <button style={{ color: 'crimson', fontSize:20, lineHeight : 1 ,marginLeft: 100, fillOpacity:'blue'}}>Convert</button>
          {/* <h3>Redirect</h3> */}
        </Link>
        <br></br>
        <br></br>
        <label style={{ color: 'crimson', fontSize:15, lineHeight : 1 ,marginLeft: 30, fillOpacity:'blue'}}>ASIN : Click on " See all Features and details" and scrolldown to find ASIN<br/></label>
{/* <Redirect url={counted} /> */}
{/* <Link to={{ pathname: count }} target="_blank" >Hi</Link> */}
      {/* <label> Converter </label>
      <input type="text" value={count} />
      <button onClick={funcounted}>Convert</button>
      <label> Output</label>
      <input type="text" value={counted} /> */}
        {/* <h3>Hai</h3> */}
        {/* <div>
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O1}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O2}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O3}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O4}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O5}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O6}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O7}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O8}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O9}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O10}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O11}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O12}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O13}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O14}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O15}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O16}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O17}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O18}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O19}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O20}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O21}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O22}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O23}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O24}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O25}
          />
        <img //style="height:100px; width:100px;"
            className="product-card__image"
            alt={"hai"}
            src={O26}
          />
        
        </div> */}
        {/* <FlagItem/> */}
      {/* <div className="cart__main">
        <div className="cart__items"> */}
          {/* {productIds.map((id) => (
            <CartItem key={id} product={products[id]} />
          ))} */}
        {/* </div>

        <div className="cart__summary">
          Subtotal ({totalQuantity} items):{' '}
          <CurrencyFormat
            className="bold"
            currencyCode="INR"
            value={totalPrice}
          />
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default FlagPage;
