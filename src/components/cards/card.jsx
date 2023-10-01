import React from "react";
import { Card,CardContent,Typography } from "@mui/material";


const ProductCard = props =>{
  const {name,price,details} = props;
  return(
  <Card>
  <CardContent>
    <Typography variant="h3" fontWeight="fontWeightBold">
      {name}
    </Typography>
    <Typography variant="h5" fontWeight="fontWeightBold">
    {details}
    </Typography>
    <Typography variant="h4" fontWeight="fontWeightBold" >
    {price}
    </Typography>
  </CardContent>
  </Card>

  );
}



export default ProductCard;