import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Navbar from "../../components/homePage/navbar/navbar";
import ProductsTable from "../../components/tables/productstable";
import { useNavigate } from "react-router-dom";


const ProductsPage = () => {
const navigate = useNavigate()
  return (
    <Box p={2}>
      <Navbar />
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        <Grid item xs={12} md={12}>
        <Grid sx={{mb:"20px"}}>
        <ProductsTable />
        </Grid>
        <Button onClick={()=>{navigate("/user/products/add")}}>Add Product</Button>
      </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
