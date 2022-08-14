import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

import CurrencyFormat from 'components/general/CurrencyFormat';
import Rating from 'components/general/Rating';
import AddToCard from 'components/product/AddToCart';
import { calculatePriceDetails } from 'utils.js/product';

function ProductCard({ className, product }) {
  let prd;
  if(product.id==1)
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
  // product.id ==1 ? prd="www.flipkart.com":prd="www.facebook.com"
  // const prd=product.Link
  // const { finalPrice, basePrice, isDiscounted } = calculatePriceDetails(
  //   product.price,
  // );

  return (
    <>
    <div className="product-card-wrapper">
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
        <div className="product-card__title">{product.title}</div>
        <Link to={{ pathname: prd }} target="_blank" >
        {/* <Link to={`/product/${product.id}`} className="product-card__gallery"> */}
          <img
            className="product-card__image"
            alt={product.title}
            src={product.images[0]}
          />
        </Link>
        {/* <button onClick="https://www.google.com">Submit</button> */}
        {/* <div className="product-card__actions">
          <AddToCard product={product} /> */}
          {/* <AddToCard product={product} /> */}
        {/* </div> */}
      </div>
    </div>
    </>
  );
}

export default ProductCard;
