import React, { useEffect, useState } from "react";
import Navbar from "../../components/homePage/navbar/navbar";
import {Autocomplete,Box,Button,ButtonGroup,Card,CardContent,Fab,Grid,Paper,Table,TableBody,TableCell,
        TableContainer,TableHead,TableRow,TextField,Typography,} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { getAllProducts } from "../../api/productsapi";
import { Container } from "@mui/system";

const Cashing = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [numPeople, setNumPeople] = useState(1);
  const [buttonText, setButtonText] = useState("Start");
  const [buttonColor, setButtonColor] = useState("primary");
  const [entryTime, setEntryTime] = useState('');
  const [leavingTime, setLeavingTime] = useState('');

  const handleButtonClick = () => {
    if (buttonText === "Start") {
      setButtonText("End");
      setButtonColor("error");
      const entryDate = new Date();
      setEntryTime(entryDate.toLocaleTimeString());
    } else {
      setButtonText("Start");
      setButtonColor("primary"); 
      const leavingDate = new Date();
      setLeavingTime(leavingDate.toLocaleTimeString());
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (product) => {
    const existingProduct = selectedProducts.find(
      (selectedProduct) => selectedProduct.name === product.name
    );
    if (existingProduct) {
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.map((selectedProduct) =>
          selectedProduct.name === product.name
            ? { ...selectedProduct, quantity: selectedProduct.quantity + quantity }
            : selectedProduct
        )
      );
    } else {
      setSelectedProducts((prevSelectedProducts) => [
        ...prevSelectedProducts,
        { ...product, quantity },
      ]);
    }
  };

  const calculateCost = () => {
    const totalOrderCost = selectedProducts.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  return (
    <div>
      <Navbar/>
      <Box sx={{mt:9}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}  md={12} lg={4}>
          <Paper elevation={3} sx={{ boxShadow: 4, borderRadius: 4, p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Fab color="primary" aria-label="add">
                <ArrowBackIcon />
              </Fab>
              <Typography variant="h6" component="div">
                Table Number
              </Typography>
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Box>
            <Autocomplete
              sx={{ mt: 2 }}
              options={[1, 2, 3, 4, 5, 6]}
              value={numPeople}
              onChange={(event, newValue) => setNumPeople(newValue)}
              renderInput={(params) => <TextField {...params} label="Number of People" />}
            />
            {/*part of enrtry and leaving time and bill details */}
            <Grid xs={12} sx={{ my: 2 }} height="#ccc">
              <Paper elevation={4} sx={{ m: 0, p: 2, boxShadow: 4, borderRadius: 4 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained" color={buttonColor} onClick={handleButtonClick}>
                      {buttonText}
                    </Button>
                  </div>        
                  <div style={{ flexDirection: "column" }}>
                    <Typography variant="h6" color="primary.main">
                      Entry Time: {entryTime || "not started"}
                    </Typography>
                    <Typography variant="h6" color="primary.main">
                      Leaving Time:{leavingTime || "they sit"}
                    </Typography>
                    <Typography variant="h6" color="primary.main">
                      Time Cost:
                    </Typography>
                  </div>                 
                </div>                
            </Paper>
          </Grid>
            {/*end of bill part */}
            <Grid sm={12}md={12}>
            <TableContainer sx={{ marginTop: 4}}>
              <Table sx={{ border: "1px solid #ccc", borderRadius: "8px" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ textAlign: "center", width: "20%" }}>Order</TableCell>
                    <TableCell sx={{ textAlign: "center", width: "20%" }}>Qty</TableCell>
                    <TableCell sx={{ textAlign: "center", width: "20%" }}>Price</TableCell>
                    <TableCell sx={{ textAlign: "center", width: "20%" }}>Total</TableCell>
                    <TableCell sx={{ textAlign: "center", width: "20%" }}>Actions</TableCell>
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
                            onClick={() => {if (selectedProduct.quantity > 1) {
                              setSelectedProducts((prevSelectedProducts) =>
                                prevSelectedProducts.map((p) =>
                                  p.name === selectedProduct.name? { ...p, quantity: p.quantity - 1 }: p));}}}>
                            <RemoveIcon />
                          </Button>
                          <Button
                            color="error"
                            onClick={() => {
                              setSelectedProducts((prevSelectedProducts) =>
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
            </Grid>
          </Paper>
        </Grid>

        {/* Second Part */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ borderRadius: "8px", p: 2 ,marginRight:2}}>
            <Grid container spacing={2}>
              {products.map((product, index) => (
                <Grid item xs={6} key={index}>
                  <Button onClick={() => handleProductClick(product)}>
                    <Card>
                      {product.name}
                      <CardContent>price : {product.price}</CardContent>
                    </Card>
                  </Button>
                </Grid>))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      </Box>
    </div>
  );
};

export default Cashing;
