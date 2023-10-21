import React, { useEffect, useState } from "react";
import Navbar from "../../components/homePage/navbar/navbar";
import {Autocomplete,Box,Button,ButtonGroup,Card,CardContent,Fab,Grid,Paper,Table,TableBody,TableCell,
        TableContainer,TableHead,TableRow,TextField,Typography,} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { getAllProducts } from "../../api/productsapi";
import moment from "moment/moment";



const Cashing = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [numPeople, setNumPeople] = useState(1);
  const [buttonText, setButtonText] = useState("Start");
  const [buttonColor, setButtonColor] = useState("primary");
  const [totalOrderCost, setTotalOrderCost] = useState(0);
  const [entryTime, setEntryTime] = useState("");
  const [leavingTime, setLeavingTime] = useState("");
  const [calculatedTime, setCalculatedTime] = useState(null); // State for calculated time

  {/*Timing funtions */}
  const entryDate = new Date();
  const [hour, minutes] = [entryDate.getHours(), entryDate.getMinutes()];
  const handleButtonClick = () => {
    if (buttonText === "Start") {
      setButtonText("End");
      setButtonColor("error");
      const entryTime = `${hour}:${minutes}`;
      setEntryTime(entryTime);
      console.log(`Time: ${entryTime}`);
    } 
    else{
      const leavingTime = `${hour}:${minutes}`;
      setLeavingTime(leavingTime);
      let minutesc = moment(leavingTime,"HH:mm").diff(moment(entryTime,"HH:mm"))/60000;
      setCalculatedTime(minutesc)
      console.log(minutesc)
    }
  };

  


{/* save data and import it from local storage */}
    const saveDataToLocalStorage = () => {
      const dataToSave = {
        selectedProducts,entryTime,buttonText,buttonColor};
      localStorage.setItem("cashingData", JSON.stringify(dataToSave));};
      
    const loadDataFromLocalStorage = () => {
        const savedData = localStorage.getItem("cashingData");
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setSelectedProducts(parsedData.selectedProducts || []);
          setEntryTime(parsedData.entryTime || "")
          setButtonColor(parsedData.buttonColor )
          setButtonText(parsedData.buttonText || "end");
        }
      };   
      useEffect(() => {
        loadDataFromLocalStorage();
        if (entryTime) {
          setButtonText("End");
          setButtonColor("error");
        }
      }, []);
      useEffect(() => {
        saveDataToLocalStorage();
      }, [selectedProducts,entryTime]);   
  
  useEffect(() => {
    calculateTotalCost();
  }, [selectedProducts]);
{/* import products by Api's */}
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
{/* Calculate Products Cost */}
  const calculateTotalCost = () => {
    let totalCost = 0;
    for (const product of selectedProducts) {
      totalCost += product.quantity * product.price;
    }
    setTotalOrderCost(totalCost);
  };
{/*send products to table */}
  const handleProductClick = (product) => {
    const existingProduct = selectedProducts.find(
      (selectedProduct) => selectedProduct.name === product.name);
    if (existingProduct) {
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.map((selectedProduct) =>
          selectedProduct.name === product.name
            ? { ...selectedProduct, quantity: selectedProduct.quantity + quantity }
            : selectedProduct)      );
    }
    else {
      setSelectedProducts((prevSelectedProducts) => [
        ...prevSelectedProducts,
        { ...product, quantity },
      ]);
    }
    calculateTotalCost();
  };


  return (
    <div>
      <Navbar/>
      <Box sx={{mt:9}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}  md={12} lg={4}>
        
          <Paper elevation={3} sx={{ boxShadow: 4, borderRadius: 4, p: 2,height:"825px" }}>
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
                <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"space-between" }}>
                  <div style={{ flexDirection: "column" }}>
                    <Typography variant="h6" color="primary.main">
                      Entry Time: {entryTime}
                      </Typography>                   
                    <Typography variant="h6" color="primary.main">
                      Leaving Time: {leavingTime}
                      </Typography>
                    <Typography variant="h6" color="primary.main">
                      Time Cost per one: {calculatedTime}
                    </Typography>
                    <Typography variant="h6" color="primary.main">
                      Time Cost:
                    </Typography>
                  </div>
                {/*Button for start and end */}
                  <div style={{ display: "flex", justifyContent: "center" , flexDirection:"column"}}>
                    <Button variant="contained" color={buttonColor} onClick={handleButtonClick}>
                      {buttonText}
                    </Button>
                  </div>
                              {/* Button Ending */}        
                  {/* Orders Cost & Total */}
                  <div style={{ flexDirection:"column", position:"end"}} id="divright">
                  <Typography variant="h6" color="primary.main">
                    Orders Cost :{totalOrderCost}
                  </Typography>
                  <Typography variant="h6" color="primary.main">
                    Tax  / Discount :
                  </Typography>
                  <Typography variant="h6" color="primary.main">
                    Total :
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
          <Paper elevation={3} sx={{ borderRadius: "8px", p: 2 ,marginRight:2,height:"825px" }}>
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
