import React, { useCallback, useEffect, useState } from 'react';

import './Products.scss';

import productsApi from 'api/products';
import Loader from 'components/general/Loader';
import Error from 'components/general/Error';
import Information from '../../components/product/Information';
import ProductCard from './ProductCard';
import Input from './Input';
import Deals from './Deals';
// import Container from './@material-ui/core/Container';
import { useParams } from 'react-router-dom';

import Container  from '@material-ui/core/Container';
import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import CardMedia  from '@material-ui/core/CardMedia';
import CardHeader  from '@material-ui/core/CardHeader';
import { Grid } from '@material-ui/core';
import useStyles from './productcd';


// import FlagPage from '../flag/index';
let categoryvalue="";
function Products(data) {
  let { asinId } = useParams();
  console.log('Category value is '+data.tag);
  let tag = data.tag;
  console.log("Asin Value is "+asinId);
  // if(asinId != ""){

  const classes = useStyles();

  // }
// function Products(setCounted) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [category, setCategory] = useState("");
  // const [category, setCategory] = useState(asinId != undefined ? asinId.length==10? asinId :"" : "");
  const [category, setCategory] = useState(asinId != undefined ? asinId :"");
     
  if(asinId != undefined){
  }
  const [search, setSearch] = useState("");
  let { check } = useParams();
  console.log('Params is '+check);
  const searchHandler = (event) => {
    setCategory(event.target.value);
    // setCategory(category.toLowerCase());
  }

  // if(asinId!=undefined){
  //   setCategory(asinId);
  // }

  const onSearchClick = (event) => {
    setSearch(event.target.value);
  }

  const loadProducts = useCallback(async () => {
    if (loading || products.length > 0) return;

    setLoading(true);
    setError(null);

    try {
      let json;
      // const json = await productsApi.getList();
      if(tag == "avinash"){
        json = Input;
      }
      else if(tag == "others"){
        json = Deals;
      }
      setProducts(json);
      console.log('Json value in Products is '+json);
      // console.log(products.id);

      // setProducts(...products,{})
    } catch (_error) {
      setError(_error);
    }
    setLoading(false);
  }, [loading, products]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if(categoryvalue == ''){
    categoryvalue = "Realestate"
  }
  // let i,j,text
  // for(i=0;i<products.length;i++){
  //   for(j=0;i<products[i].text_entities.length;i++){
  //     if(products[i].text_entities[j].type == "plain"){
  //         text = text + products[i].text_entities[j].text+"\n";
  //         // break;
  //     }
  //   }
  // }
  if (loading) {
    return <Loader size={50} />;
  } else if (error) {
    return <Error message="Failed to load products" actionFn={loadProducts} />;
  } else {
    return (
      <div id='slider' className='overflow-x-scroll scroll'>
      <Container maxWidth="md" className='inline-block p-1'>
        <div>
        <input className="search__input" type="text" value={category} placeholder="Search Here" onChange={(event) => searchHandler(event)} />
          {/* <input type="text" value={category} onChange={(event) => searchHandler(event)} /> */}
          {/* <button onClick={onSearchClick} > Search</button> */}
        </div>
      {/* <div className="products"> */}
      {/* <div style={{display:'flex'}} className={classes.root}> */}
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
      <Grid container spacing={0} id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth' direction='row'  >
        
        {products.map((product) => (
          // (product.category == "Realestate" ?
          product.text_entities.length>0 && product.text_entities.length <2?
          ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) )?
            // (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase()))) ?
            // <Grid item>
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
          product.text_entities.length>1 && product.text_entities.length <3?
            ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
            (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase()))) ?
            // (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))) ?
            // (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase()))) ?
            
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
          product.text_entities.length>2 && product.text_entities.length <4?
            ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
            (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase()))||
            (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))) ?
            // (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase()))) ?
            
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>3 && product.text_entities.length<5?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase()))) ?
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2} >
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>4 && product.text_entities.length<6?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[4].type == "plain" && product.text_entities[4].text.toLowerCase().includes(category.toLowerCase()))) ?
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>5 && product.text_entities.length<7?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[4].type == "plain" && product.text_entities[4].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[5].type == "plain" && product.text_entities[5].text.toLowerCase().includes(category.toLowerCase()))) ?
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>6 && product.text_entities.length<8?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[4].type == "plain" && product.text_entities[4].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[5].type == "plain" && product.text_entities[5].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[6].type == "plain" && product.text_entities[6].text.toLowerCase().includes(category.toLowerCase()))) ?
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>7 && product.text_entities.length<9?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[4].type == "plain" && product.text_entities[4].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[5].type == "plain" && product.text_entities[5].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[6].type == "plain" && product.text_entities[6].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[7].type == "plain" && product.text_entities[7].text.toLowerCase().includes(category.toLowerCase()))) ?
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>8 ?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[4].type == "plain" && product.text_entities[4].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[5].type == "plain" && product.text_entities[5].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[6].type == "plain" && product.text_entities[6].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[7].type == "plain" && product.text_entities[7].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[8].type == "plain" && product.text_entities[8].text.toLowerCase().includes(category.toLowerCase()))) ?
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
          null
        // (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase()))
        // text.toLowerCase().includes(category.toLowerCase()) ?
        // (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase())) ?
          //  (product.category == "usm" ? 
          // <div>
          //   <ProductCard key={product.id} product={product} tag={tag}/> 
          // </div>
          // {/* <Information product={product} /> */}
          // :null )
          // <ProductCard key={product.id} product={product} /> )
        // ))}
        ))}
        </Grid>
        </div>
        {/* </div> */}
        </Container>
        // </div>
        );
  }
}

export default Products;
