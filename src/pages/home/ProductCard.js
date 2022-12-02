import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// import {photos} from '../../../../Json/photos'

import './ProductCard.scss';

import CurrencyFormat from 'components/general/CurrencyFormat';
import Information from 'components/product/Information';
import Rating from 'components/general/Rating';
import AddToCard from 'components/product/AddToCart';
import { calculatePriceDetails } from 'utils.js/product';
import Input from './Input';
// import '../../images/'
// import FlagPage from '../flag/index';

// import { Container } from '@material-ui/core';

// import Button from '@mui/material/Button';


function ProductCard({ className, product, tag }) {
  let prd;
  if(product.id==1)
  // prd = product.links
    prd="https://amzn.to/3pfGpOz"
  if(product.id==2)
    prd="https://amzn.to/3QqvGMW"
  if(product.id==3)
  prd="https://amzn.to/3CadSBH"
  if(product.id==4)
  prd="https://amzn.to/3bP8p8B"
  if(product.id==5)
  prd="https://amzn.to/3w1M5iE"
  if(product.id==6)
    prd="https://amzn.to/3wqXDfV"
  if(product.id==7)
    prd="https://amzn.to/3bRbMM3"
  if(product.id==8)
  prd="https://amzn.to/3pgiezm"
  if(product.id==9)
  prd="https://amzn.to/3AiG0kG"
  if(product.id==10)
  prd="https://amzn.to/3QFED4O"
  if(product.id==11)
  prd="https://amzn.to/3BgqS6J"
  if(product.id==12)
  prd="https://amzn.to/3dGzjAd"
  if(product.id==13)
  prd="https://amzn.to/3CjQ2D7"
  if(product.id==14)
  prd="https://amzn.to/3e8HZ2u"
  if(product.id==15)
  prd="https://amzn.to/3Tb8nb8"
  if(product.id==16)
  prd="https://amzn.to/3T6sFCR"
  if(product.id==17)
  prd="https://amzn.to/3So9Dqu"
  if(product.id==18)
  prd="https://www.usmmycity.com/"
  // console.log(product.length);
  // if(counted !='')
  // prd = counted
  // product.id ==1 ? prd="www.flipkart.com":prd="www.facebook.com"
  // const prd=product.Link
  // const { finalPrice, basePrice, isDiscounted } = calculatePriceDetails(
  //   product.price,
  // );
  let i,picture;
  // prd = product.text_entities[1].text;
  for(i=0;i<product.text_entities.length;i++){
    // if(product.text_entities[1].type=="mention" && product.text_entities.length>3)
    // prd = product.text_entities[2].text;

    if(product.text_entities.length>3)
    if(product.text_entities[0].type=="link")
    prd = product.text_entities[0].text;
    else if(product.text_entities[1].type=="link")
    prd = product.text_entities[1].text;
    // else if(product.text_entities[2].type=="link")
    // prd = product.text_entities[2].text;
    // else if(product.text_entities[3].type=="link")
    // prd = product.text_entities[3].text;
    if(product.text_entities[i].type=="link")
    prd = product.text_entities[i].text;
    
    
  }
  console.log('product link is '+prd);
  console.log('product is '+product.id);
  console.log('product tag is '+tag)
  if(product.photo != undefined){
    if(product.tag == "avinash"){
      picture =require(`../../images/${product.photo}`);
    }
    else if(product.tag == "others"){
      picture =require(`../../images/pictures/${product.photo}`);
    }
  }

  return (
    <>
    <div className="product-card-wrapper">
    {/* <Container className="product-card-wrapper"> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className={classNames('product-card', { [className]: className })}>
        {/* <div className="product-card__price">
          <CurrencyFormat
          className="product-card__amount"
          currencyCode={product.price.currency}
          value={finalPrice}
          />
          {isDiscounted && (
            <CurrencyFormat
            className="product-card__amount product-card__amount--discount"
              currencyCode={product.price.currency}
              value={basePrice}
            />
          )}
        </div> */}

        {/* <div className="product-card__rating">
          <Rating rating={product.rating.value} maxRating={5} />
          <div className="product-card__rating-count">
          {product.rating.count} ratings
          </div>
        </div> */}

        {/* <div>
        { product.id ==1 ? prd="www.flipkart.com":prd="www.facebook.com"}
        </div>  */}
        {/* <div className="product-card__title">{product.title}</div> */}
        {/* <div className="product-card__title">{product.text_entities[0].text}</div> */}

        <div className="product-card__title">{product.text_entities[0].type=="plain" ? product.text_entities[0].text :
         product.text_entities[1].type=="plain"?product.text_entities[1].text:
         product.text_entities[2].type=="plain"?product.text_entities[2].text:"hai"
         }</div>
        {/* <div className="product-card__title">{prd}</div> */}
        {/* <div className="product-card__title">{product.text_entities[0].text}</div> */}
        {/* (product.category == "Realestate" ?  */}
        {/* <Link to={{ pathname: prd }} target="_blank" > */}

        {/* @Telegram Products */}
        {/* <Link to={{ pathname: product.text_entities[1].text }} target="_blank" > */}


        <Link to={(tag == "avinash" ? `/product/${product.id}`:`/deals/product/${product.id}`)} className="product-card__gallery"> 
        {/* <Information key={product.id} product={product} /> */}


        {/* ) */}
        {/* <img src="/images/amazon-logo.png" /> */}
        {/* <img src={require('../../images/amazon-logo.png')} alt="not working" /> */}
        <img className="product-card__image" 
        src={(tag == "avinash" ? require(`../../images/${product.photo}`):require(`../../images/pictures/${product.photo}`))} 
        // src={picture} 
        alt="not working" />
        <br />
        {/* <img src='../../images/1.jpeg'/>
          
             className="product-card__image"
             alt={product.text_entities[0].text}
             src="F:\\Study\\Affiliate\\Projects\\Affiliate\\Affiliate\\src\\images\\1.jpeg"
             src="../../1.jpeg"
             src={"https:m.media-amazon.com/images/I/810s53kR8tL._UL1500_.jpg"}
             src={`F:/Study/Affiliate/Projects/Affiliate/Affiliate/src/images/${product.photo}`}
             alt={product.from}
             src={product.images[0]}
        />   */}
        </Link>
        <div className="product-card__actions">
        <Link to={{ pathname: prd }} target="_blank" >
        <button style={{ color: 'crimson', fontSize:20, lineHeight : 1 ,marginLeft: 100, fillOpacity:'blue', backgroundColor:"greenyellow"}}>View in Amazon</button>
          {/* <button className='product-card__buttons' >View in Amazon</button> */}
        </Link>
          </div>
        {/* <button onClick="https://www.google.com">Submit</button> */}
        {/* <div className="product-card__actions">
          <AddToCard product={product} /> */}
          {/* <AddToCard product={product} /> */}
        {/* </div> */}
      </div>
    </div>
    {/* </Container> */}
    </>
  );
}

export default ProductCard;
