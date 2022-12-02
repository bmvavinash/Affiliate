import React, { useEffect, useState } from 'react';

import './ImageSlider.scss';

function ImageSlider({ product,tag }) {
 let picture;
 console.log('Image slider tag is '+tag);
  if(product.photo != undefined){
    if(tag == "avinash"){
      picture =require(`../../images/${product.photo}`);
    }
    else if(tag == "others"){
      picture =require(`../../images/pictures/${product.photo}`);
    }
  }
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');
  useEffect(
    function () {
      setImages(product.images);
      if (product.images) {
        setImage(product.images[0]);
      } else {
        setImage('');
      }
    },
    [product],
  );

  try{
    // let pic = require(`../../images/${product.photo}`);
    let pic = `../../images/${product.photo}`;
  }
  catch(error){
    console.log('Error in Image slider is '+error);
  }

  const imageClick = (src) => {
    setImage(src);
  };
  return (
    <div className="slider">
      <div className="slider__left">
        <ul className="slider__listing">
          {images &&
            images.map((image, i) => (
              <li
                className="slider__list"
                key={i}
                onClick={() => {
                  imageClick(image);
                }}
              >
                {/* <img alt={product.title} src={image} /> */}
              </li>
            ))}
        </ul>
      </div>
      <div className="slider__right">
        <div className="slider__display">
        {/* <img src={require(`../../images/${product.photo}`)} alt="not working" /> */}
          <img alt={product.title} src={picture} />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
