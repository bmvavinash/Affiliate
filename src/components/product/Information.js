import React, { useEffect } from 'react';
import './Information.scss';
import Rating from 'components/general/Rating';
import { calculatePriceDetails } from 'utils.js/product';
import CurrencyFormat from 'components/general/CurrencyFormat';
import AddToCard from 'components/product/AddToCart';
import { Link } from 'react-router-dom';

function Information({ product,person,tag }) {
    console.log('product in information is '+product.id);
    console.log('person is '+person);
    let text="",link,wats,btntext="View in Amazon";
    try{
        let i;
        wats = `https://wa.me/919951797149?text=Error%20in%20${product.id}`;
        text = "";
        // text = product.text_entities[0].text;
        for(i=0;i<product.text_entities.length;i++){
            if(product.text_entities[i].type == "link"){
              if(product.text_entities[i].text.includes("amzn"))
                link = product.text_entities[i].text;
            }
        }
        //Title extraction
            for(i=0;i<product.text_entities.length;i++){
            if(product.text_entities[i].type == "plain"){
                text = text + product.text_entities[i].text+"\n";
                // break;
            }
            if(text==""){
                text="image"
            }
            else if(product.text_entities[i].type == "link"){
                // text = text + product.text_entities[i].text+"\n";
                break;
            }
        }
        if(tag=="items"){
            link=wats;
            btntext="Interested"
        }
        // <div className="information__header">{product.text_entities[0].type!="link" ? product.text_entities[0].text : "hai"}</div>
    }
    catch(error){
        console.log('Error in Info' +error)
    }
    // useEffect(() => {
    //     return(
    //         <Link to={{ pathname: link }} target="_blank" ></Link>
    //     )
    // });

    // console.log('product in information is '+id);
    // const { finalPrice, basePrice } = calculatePriceDetails(
    //     product.price,
    // );
    return (
        <>
            {product && (
                <div className="information">
                    {/* <div className="information__header">{product.from}</div> */}
                    {/* <div className="information__header">{product.text_entities[0].text}</div> */}
                    <div className="information__header">{text}</div>
                    {/* try{
                    <div className="information__header">{product.text_entities[0].type!="link" ? product.text_entities[0].text : "hai"}</div>
                    <div className="information__header">{product.text_entities[0].type!="link" ? product.text_entities[0].text : "hai"}</div>
                    }
                    catch(error){
                        console.log('Error in Info' +error)
                    } */}
                    {/* <div className="information__category">Brand: {product.text_entities[1].text}</div> */}
                        <br />
                        <br />

            {link!=""?
            <Link to={{ pathname: link }} target="_blank" >
              <button className='add-to-cart-button' style={{ color: 'crimson', fontSize:20, lineHeight : 1 ,marginLeft: 100, fillOpacity:'blue'}}>{btntext}</button>
            </Link>
            :null}
            <br />
            <br />
            <br />
            <br />
            

            <Link to="/" className="logo">

              <button className='add-to-cart-button' style={{ color: 'crimson', fontSize:20, lineHeight : 1 ,marginLeft: 10, fillOpacity:'blue'}}>View all Products</button>
            </Link>
            <br />
            <br />
            
            <Link to={{ pathname: wats }} target="_blank" >
              <button style={{ color: 'crimson', fontSize:20, lineHeight : 1 ,marginLeft: 200, fillOpacity:'blue'}}>Facing Issue ?</button>
            </Link>


                    {/* <Link to={{ pathname: product.text_entities[1].text }} target="_blank" > */}
                        {/* </Link> */}


                    {/* {product.rating && (
                        <div className="information__rating">
                            <Rating maxRating={5} rating={product.rating.value} />
                            <div className="information__rating-label">{product.rating.count} ratings</div>
                        </div>
                    )} */}

                    {/* {product.price && (
                        <div className="information__pricing">
                            <div className="information__price">
                                <span className="information__label">M.R.P. : </span>
                                <CurrencyFormat
                                    className="product-card__amount strikethrough"
                                    currencyCode={product.price.currency}
                                    value={basePrice}
                                />
                            </div>
                            <div className="information__price">
                                <span className="information__label">Price. : </span>
                                <CurrencyFormat
                                    className="product-card__amount"
                                    currencyCode={product.price.currency}
                                    value={finalPrice}
                                />
                            </div>
                            <div>
                                <span className="information__label">You Save : </span>
                                {product.price.discount}
                            </div>
                        </div>
                    )} */}

                    {/* <AddToCard product={product} /> */}


                    {/* <div className="information__specs">
                        {product.specs &&
                            product.specs.map((spec, i) => (
                                <div className="information__spec" key={i}>
                                    <span> {spec.name}</span> : <span>{spec.value}</span>
                                </div>
                            ))}
                    </div> */}

                    {/* <div className="information__features">
                        <div className="information__spec-header">About this item</div>
                        <ul>
                            {product.features &&
                                product.features.map((feature, i) => (
                                    <li className="information__feature" key={i}>
                                        {feature}
                                    </li>
                                ))}
                        </ul>
                    </div> */}
                </div>
            )}
        </>
    );
}

export default Information;
