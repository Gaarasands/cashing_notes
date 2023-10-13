import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import {Box, Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TablePagination,Typography, Button,} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon, Details } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { deleteSupplier, getAllSuppliers } from "../../api/supplier";


const AnimatedTableRow = animated(TableRow);

const SuppliersTable = () => {
  const [supplier, setSupplier] = useState([]);
  const navigate = useNavigate()
  const [paginationState, setPaginationState] = useState({paginationModel: { page: 0, pageSize: 5 },});
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 } });


  useEffect(() => {fetchData();}, [paginationState]);
  const fetchData = async () => {
    try {
      const data = await getAllSuppliers();
      setSupplier(data);} catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
  const handleDelete = async(id)=>{
    let status= await deleteSupplier(id);
    if (status===200){
      fetchData()
       }}



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
  
  const totalCount = supplier ? supplier.length : 0;   
  const slicedSupplier = supplier.slice(
    page * pageSize,
    (page + 1) * pageSize
  );
  return (
    <animated.div style={fadeInProps}>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          RaW Material
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell >Name</TableCell>
                <TableCell >Phone</TableCell>
                <TableCell >Email</TableCell>
                <TableCell >Address</TableCell>
                <TableCell>type</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedSupplier.map((supplier) => (
                <AnimatedTableRow key={supplier.id}>
                  <TableCell>{supplier.id}</TableCell>
                  <TableCell >{supplier.name}</TableCell>
                  <TableCell >{supplier.number}</TableCell>
                  <TableCell >{supplier.email}</TableCell>
                  <TableCell >{supplier.location}</TableCell>
                  <TableCell >{supplier.type}</TableCell>
                  <TableCell align="center">
                  <Button onClick={() => handleDelete(supplier.id)}><DeleteIcon color="error" /></Button>
                  <Button onClick={() => navigate('edit/'+supplier.id)}> <EditIcon color="primary" /> </Button>
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
    </animated.div>
  );
};

export default SuppliersTable;
