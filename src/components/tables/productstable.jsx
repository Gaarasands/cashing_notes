import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import {Box, Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TablePagination,Typography, Button,} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { getAllProducts,deleteProduct, editProduct } from "../../api/products";
import { useNavigate } from "react-router-dom";

const AnimatedTableRow = animated(TableRow);

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const [paginationState, setPaginationState] = useState({paginationModel: { page: 0, pageSize: 5 },});
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  useEffect(() => {fetchData();}, [paginationState]);
  const fetchData = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);} catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const handleDelete = async(id)=>{
    let status= await deleteProduct(id);
    if (status===200){
      fetchData()
      alert('delete') }}



  const handlePageChange = (event, newPage) => {
    setPaginationState((prevState) => ({
      ...prevState,
      paginationModel: { ...prevState.paginationModel, page: newPage },
    }));
  };

  const handlePageSizeChange = (event) => {
    const newPageSize = parseInt(event.target.value, 10);
    setPaginationState((prevState) => ({
      ...prevState,
      paginationModel: { ...prevState.paginationModel, page: 0, pageSize: newPageSize },
    }));
  };

  const { page, pageSize } = paginationState.paginationModel;

  
  const totalCount = products.length;
  const slicedProducts = products.slice(page * pageSize, (page + 1) * pageSize);
  return (
    <div style={fadeInProps}>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Products Table
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Details</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedProducts.map((product) => (
                <AnimatedTableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.details}</TableCell>
                  <TableCell align="right">
                  <Button onClick={() => handleDelete(product.id)}><DeleteIcon color="error" /></Button>
                  <Button onClick={() => navigate('edit/'+product.id)}> <EditIcon color="primary" /> </Button>
                  </TableCell>
                </AnimatedTableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={totalCount}
            page={page}
            rowsPerPage={pageSize}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handlePageSizeChange}
            rowsPerPageOptions={[5, 10]}
          />
        </TableContainer>
      </Box>
    </div>
  );
};

export default ProductsTable;
