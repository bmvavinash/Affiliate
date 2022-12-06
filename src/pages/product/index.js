import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from "react-router-dom";
import ImageSlider from '../../components/product/ImageSlider';
import Information from '../../components/product/Information';
import './index.scss';
import Input from '../home/Input';
import Deals from '../home/Deals';

import productsApi from 'api/products';
import Loader from 'components/general/Loader';
import Error from 'components/general/Error';
import products from 'api/products';

function ProductPage(data) {
  console.log('Product Page');
  // debugger
  let { productId } = useParams();
  // let { asinId } = useParams();
  let tag = data.tag;
  console.log('Product Id is '+productId)
  console.log('Tag in Product Page is '+tag);

  // const [product, setProduct] = useState(null);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState("all");
  const [error, setError] = useState(null);

  // const loadProduct = useCallback(async () => {
  const loadProduct = useMemo(() => async () => {
        // if (loading || product) return;

        // setLoading(true);
        // setError(null);

    try {
      let json,i;
      let num = productId - Input[0].id;
      if(num>=0)
      json = await Input[num];
      else 
      json = await Input[-num];
      if(tag=="avinash"){
      for(i=0;i<Input.length;i++){
        if(productId == Input[i].id){
          json = Input[i];
        }
      }
    }
    else if(tag=="others"){
      for(i=0;i<Deals.length;i++){
        if(productId == Deals[i].id){
          json = Deals[i];
        }
      }

    }
      // const json = productsApi.getProduct(productId);
      // const json = await Input[productId - Input[0].id];

      // const json = Input[productId - product.id];
      console.log('')
      // const json = Input[0];  
      console.log('Json value in index products is '+json)
      // console.log('Array value is '+productId - product[0].id)
      setProduct(json);
    } catch (_error) {
      console.log(_error);
      setError(_error);
    }
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    setPerson("avinash");
    loadProduct();
  }, [loadProduct]);


  if (loading) {
    return <Loader size={50} />;
  } else if (error) {
    return <Error message="Failed to load products" actionFn={loadProduct} />;
  } else if (product) {
    return (
      <div className="product">
        <div>

        <Information product={product} person={person} tag={tag}/>
        </div>
        <div>

        {/* <ImageSlider product={product} tag={tag} /> */}
        </div>
        {/* <ImageSlider key={product.id} product={product} /> */}
        {/* <Information key={product.id} product={product} /> */}
      </div>
    );
  } else {
    return null;
  }
}

export default ProductPage;
