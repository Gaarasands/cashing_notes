import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/products';
import { Grid } from '@mui/material';
import ProductCard from './card';
import { Box } from '@mui/system';


const ProductsCard = () =>{
  const [products , setProducts] = useState([]);
  useEffect(() => {
  getData()}, []);
  const getData = async()=>{
    let data = await getAllProducts();
    setProducts(data);
  }
  return(
    <div>
    <Box>
      <Grid container spacing={2}
      >
      {products.map((value)=>(
        <Grid item xs={12} md={6} lg={4} key={value.id}>
          <ProductCard
            id= {value.id}
            name = {value.name}
            details = {value.details}
            price = {value.price}
          />
        </Grid>))}
      </Grid>
      </Box>
</div>
  )
}

export default ProductsCard;