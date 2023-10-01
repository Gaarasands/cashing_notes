import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import {Box, Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TablePagination,Typography, Button,} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { deleteRawMaterial , getAllRawMaterial} from "../../api/rawmaterial";
import { useNavigate } from "react-router-dom";

const AnimatedTableRow = animated(TableRow);

const RawMaterialsTable = () => {
  const [rawmaterial, setRawmaterial] = useState([]);
  const navigate = useNavigate()
  const [paginationState, setPaginationState] = useState({paginationModel: { page: 0, pageSize: 5 },});
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  useEffect(() => {fetchData();}, [paginationState]);
  const fetchData = async () => {
    try {
      const data = await getAllRawMaterial();
      setRawmaterial(data);} catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
  const handleDelete = async(id)=>{
    let status= await deleteRawMaterial(id);
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
  
  const totalCount = rawmaterial ? rawmaterial.length : 0;   
  const slicedRawmaterial = rawmaterial.slice(
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
                <TableCell >Price</TableCell>
                <TableCell >Quantity</TableCell>
                <TableCell >Details</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedRawmaterial.map((rawmaterial) => (
                <AnimatedTableRow key={rawmaterial.id}>
                  <TableCell>{rawmaterial.id}</TableCell>
                  <TableCell >{rawmaterial.name}</TableCell>
                  <TableCell >{rawmaterial.price}</TableCell>
                  <TableCell >{rawmaterial.quantity}</TableCell>
                  <TableCell >{rawmaterial.details}</TableCell>
                  <TableCell align="center">
                  <Button onClick={() => handleDelete(rawmaterial.id)}><DeleteIcon color="error" /></Button>
                  <Button onClick={() => navigate('edit/'+rawmaterial.id)}> <EditIcon color="primary" /> </Button>
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

export default RawMaterialsTable;
