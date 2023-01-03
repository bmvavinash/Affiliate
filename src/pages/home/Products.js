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
import Items from './Items';
import { orange } from '@material-ui/core/colors';

require("core-js/actual/array/group-by-to-map");
require("core-js/actual/array/group-by");


// import FlagPage from '../flag/index';
let categoryvalue="";
function Products(data) {
  let { asinId } = useParams();
  console.log('Tag value is '+data.tag);
  console.log('Category value is '+data.category);
  let tag = data.tag;
  console.log("Asin Value is "+asinId);
  // if(asinId != ""){

  const classes = useStyles();

  // }
// function Products(setCounted) {
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setategorizedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [category, setCategory] = useState("");
  // const [category, setCategory] = useState(asinId != undefined ? asinId.length==10? asinId :"" : "");
  const [category, setCategory] = useState(asinId != undefined ? asinId : data.category);
  // const [category, setCategory] = useState(data.category);
  
  useEffect(()=>{
    if(data !=undefined){
      setCategory(data.category);
    }
  },[data])
  useEffect(()=>{
  if(asinId != undefined){
    // setCategory(data.category);
    setCategory(asinId);
  }
  else{
    // setCategory(data.category);

  }
},[asinId])
  const [search, setSearch] = useState("");
  // let { check } = useParams();
  // console.log('Params is '+check);
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
 let i;
   const groupByCategoryReduce = products.reduce((group, product) => {
  // const groupByCategoryReduce = products.reduce((products[key].category, product) => {
    
    let { cat } = product;
  for(i=0;i<product.text_entities.length;i++){
    if(product.text_entities[i].type=="hashtag"){
      cat=product.text_entities[i].text;
    }
    
  }
  if(cat=="")
  {
    cat="all"
  }

    // const { category } = product;
    // console.log('product in reduce is '+{product});
    // console.log('group in reduce is '+{group});

    // group[category] = group[category] ?? [];
    // group[category].push(product);
    group[cat] = group[cat] ?? [];
    group[cat].push(product);
    return group;
  }, {});
  debugger
  console.log('groupByCategoryReduce is '+ products);
  console.log('groupByCategoryReduce is '+ groupByCategoryReduce);
  const { arr } = {...groupByCategoryReduce};
  // setProducts(groupByCategoryReduce);
  console.log('arr is '+arr)

  // const groupByCategory = products.groupBy(product => {
  //   for(i=0;i<product.text_entities.length;i++){
  //     if(product.text_entities[i].type=="hashtag"){
  //       product.category=product.text_entities[i].text;
  //     }
  //   }
  //   if(product.category=""){
  //     product.category="others"
  //   }
  //   return product.category;
  // });
  // console.log(groupByCategory); 

  const loadProducts = useCallback(async () => {
    if (loading || categorizedProducts.length > 0) return;
    // if (loading || products.length > 0) return;

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
      else if(tag == "items"){
        json = Items;
      }
      setProducts(json);
      setategorizedProducts(json);
      console.log('Json value in Products is '+json);
      // console.log(products.id);

      // setProducts(...products,{})
    } catch (_error) {
      setError(_error);
    }
    setLoading(false);
  }, [loading, categorizedProducts]);
  // }, [loading, products]);

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

    
  let i,cat;
    try{
  for(i=0;i<products.text_entities.length;i++){
    if(products.text_entities[i].type=="hashtag"){
      products.category=products.text_entities[i].text;
    }
  }
  if(products.category=""){
    products.category="others"
  }
}
catch(e){
  console.log('len error')
}

  // const groupByCategoryReduce = products.reduce(( (group) => "orange", product) => {
  // const groupByCategoryReduce = products.reduce((group, product) => {
  // // const groupByCategoryReduce = products.reduce((products[key].category, product) => {
    
  //   let { cat } = product;
  // for(i=0;i<product.text_entities.length;i++){
  //   if(product.text_entities[i].type=="hashtag"){
  //     cat=product.text_entities[i].text;
  //   }
    
  // }
  // if(cat=="")
  // {
  //   cat="all"
  // }

  //   // const { category } = product;
  //   // console.log('product in reduce is '+{product});
  //   // console.log('group in reduce is '+{group});

  //   // group[category] = group[category] ?? [];
  //   // group[category].push(product);
  //   group[cat] = group[cat] ?? [];
  //   group[cat].push(product);
  //   return group;
  // }, {});
  // debugger
  // console.log('groupByCategoryReduce is '+ products);
  // console.log('groupByCategoryReduce is '+ groupByCategoryReduce);
  // const { arr } = {...groupByCategoryReduce};
  // // setProducts(groupByCategoryReduce);
  // console.log('arr is '+arr)


    return (
      <div id='slider' className='overflow-x-scroll scroll'>
      <Container maxWidth="md" className='inline-block p-1'>

      {/* <div>
        <label style={{ color: 'crimson', fontSize:15, lineHeight : 1,lineWidth :8, padding: 20}}>Search :&nbsp;
          </label>
        <input  type="text" value={category} placeholder="Product or Category Search" onChange={(event) => searchHandler(event)} />
        </div> */}
          {/* <input type="text" value={category} onChange={(event) => searchHandler(event)} /> */}
          {/* <button onClick={onSearchClick} > Search</button> */}


        {/* <div>
        <input className="search__input" type="text" value={category} placeholder="Search Here" onChange={(event) => searchHandler(event)} />
        </div> */}


          {/* <input type="text" value={category} onChange={(event) => searchHandler(event)} /> */}
          {/* <button onClick={onSearchClick} > Search</button> */}
      {/* <div className="products"> */}
      {/* <div style={{display:'flex'}} className={classes.root}> */}
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
      <Grid className="products" container spacing={0} direction='row'  >
      {/* <Grid container spacing={0} id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth' direction='row'  > */}
        
        {/* {{...groupByCategoryReduce}.map((product) => ( */}
        {/* {arr.map((product) => ( */}
           {/* (product.category == "Realestate" ? */}
        {categorizedProducts.map((product) => (
          product.text_entities.length == 0 && category == "" ||
            (product.from.toLowerCase().includes(category.toLowerCase()))?
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:
          product.text_entities.length>0 && product.text_entities.length <2?
          ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ) ||
          (product.from.toLowerCase().includes(category.toLowerCase()))?
            // (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase()))) ?
            // <Grid item>
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
          product.text_entities.length>1 && product.text_entities.length <3?
            ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
            (product.from.toLowerCase().includes(category.toLowerCase()))||
            (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase()))) ?
            // (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))) ?
            // (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase()))) ?
            
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
          product.text_entities.length>2 && product.text_entities.length <4?
            ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
            (product.from.toLowerCase().includes(category.toLowerCase()))||
            (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase()))||
            (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))) ?
            // (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase()))) ?
            
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>3 && product.text_entities.length<5?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.from.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase()))) ?
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2} >
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>4 && product.text_entities.length<6?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.from.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[1].type == "plain" && product.text_entities[1].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[2].type == "plain" && product.text_entities[2].text.toLowerCase().includes(category.toLowerCase()))||
        (product.text_entities[3].type == "plain" && product.text_entities[3].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.text_entities[4].type == "plain" && product.text_entities[4].text.toLowerCase().includes(category.toLowerCase()))) ?
        <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <ProductCard key={product.id} product={product} tag={tag}/> 
          </Grid>:null:
        product.text_entities.length>5 && product.text_entities.length<7?
        ((product.text_entities[0].type == "plain" && product.text_entities[0].text.toLowerCase().includes(category.toLowerCase())) ||
        (product.from.toLowerCase().includes(category.toLowerCase()))||
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
        (product.from.toLowerCase().includes(category.toLowerCase()))||
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
        (product.from.toLowerCase().includes(category.toLowerCase()))||
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
        (product.from.toLowerCase().includes(category.toLowerCase()))||
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
