  import React, { useEffect, useState } from "react";
  import Navbar from "../../components/homePage/navbar/navbar";
  import { Button, ButtonGroup, Card, CardContent, CardHeader, Fab, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
  import { Box, Container, Typography } from "@mui/material";
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  import RemoveIcon from '@mui/icons-material/Remove';
  import DeleteIcon from '@mui/icons-material/Delete';
  import { getAllProducts } from "../../api/products";
  import {addProductToTable,updateProductInTable,deleteProductFromTable,} from "../../api/tables"
  import AddIcon from '@mui/icons-material/Add';

  const Cashing = () => {
    const [selectedTableId, setSelectedTableId] = useState(0); // Replace null with the actual initial value
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const getCurrentTime=() =>{
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');      
      return `${hours}:${minutes}:${seconds}`;}
    const currentTime = console.log(getCurrentTime);
    useEffect(() => {
      getAllProducts().then(data => {
        setProducts(data);});}, []) 
    const addProductToSelectedTable = async () => {
      try {
        const [status, response] = await addProductToTable(selectedTableId, setProducts);
      }
      catch (error) {
        console.error("Error adding product to table:", error);}};
    const handleProductClick = (product) => {
      const existingProduct = selectedProducts.find(
        (selectedProduct) => selectedProduct.name === product.name); 
      if (existingProduct) {
        setSelectedProducts((prevSelectedProducts) =>
          prevSelectedProducts.map((selectedProduct) =>
            selectedProduct.name === product.name
              ? { ...selectedProduct, quantity: selectedProduct.quantity + quantity }: selectedProduct));} 
      else {
        setSelectedProducts((prevSelectedProducts) => [
          ...prevSelectedProducts,
          { ...product, quantity },]);}};
    return (
      <div>
        <Navbar />
        <Container sx={{ padding: "16px", marginTop: "70px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ borderRadius: "8px", p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Fab color="primary" aria-label="add" >
                    <ArrowBackIcon />
                  </Fab>
                  <Typography variant="h6" component="div">
                    Table Number
                  </Typography>
                  <Fab color="primary" aria-label="add" onClick={()=>{addProductToSelectedTable()}}>
                    <AddIcon />
                  </Fab>
                </Box>
                <Container sx={{borderRadius: "8px", p: 2 , display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Sits :
                </Box>  
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ borderRadius: "8px", p: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        Entry Time :
                        <Button onClick={currentTime}>get</Button>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Leaving Time :
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        Costs :
                      </Box>
                    </Paper>
                  </Grid>
                </Container>
                <TableContainer sx={{ marginTop: 2 }}>
                  <Table sx={{ border: "1px solid #ccc", borderRadius: "8px" }}>
                    <TableHead>
                      <TableRow>
                          <TableCell sx={{ textAlign: 'center',width:'20%'}}>Order</TableCell>
                          <TableCell sx={{ textAlign: 'center',width:'20%'}}>Qty</TableCell>
                          <TableCell sx={{ textAlign: 'center',width:'20%'}}>Price</TableCell>
                          <TableCell sx={{ textAlign: 'center',width:'20%'}}>Total</TableCell>
                          <TableCell sx={{ textAlign: 'center',width:'20%'}}>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      {selectedProducts.map((selectedProduct, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ textAlign: "center", width: "20%" }}>
                            {selectedProduct.name}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center", width: "20%" }}>
                            {selectedProduct.quantity}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center", width: "20%" }}>
                            {selectedProduct.price}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center", width: "20%" }}>
                            {selectedProduct.quantity * selectedProduct.price}
                          </TableCell>
                          <TableCell sx={{ textAlign: "center", width: "20%" }}>
                            <ButtonGroup size="small" aria-label="small button group">
                              <Button
                                onClick={() => {
                                  if (selectedProduct.quantity > 1) {
                                    setSelectedProducts((prevSelectedProducts) =>
                                      prevSelectedProducts.map((p) =>
                                        p.name === selectedProduct.name
                                          ? { ...p, quantity: p.quantity - 1 } : p));}}}>
                                <RemoveIcon />
                              </Button>
                              <Button color="error" onClick={() => { setSelectedProducts((prevSelectedProducts) =>
                                    prevSelectedProducts.filter((p) => p.name !== selectedProduct.name));}}>
                                <DeleteIcon />
                              </Button>
                            </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ borderRadius: "8px", p: 2 }}>
                <Grid container spacing={2}>
                {products.map((product, index) => (
                  <Grid item xs={6} key={index}>
                    <Button onClick={() => handleProductClick(product)}>
                      <Card>{product.name}
                        <CardContent>price : {product.price}</CardContent>
                      </Card>
                    </Button>
                  </Grid>))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  };

  export default Cashing;
