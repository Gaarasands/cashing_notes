import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, getAllEmployees } from "../../api/userApi";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useSpring, animated  } from "react-spring";
import { Box } from "@mui/system";

const AnimatedTableRow = animated(TableRow);


const EmployeesTable = () =>{
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate()
  const [paginationState, setPaginationState] = useState({paginationModel: { page: 0, pageSize: 5 },});
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 } });


  useEffect(() => {fetchData();}, [paginationState]);
  const fetchData = async () => {
    try {
      const data = await getAllEmployees();
      setEmployee(data);} catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
  const handleDelete = async(id)=>{
    let status= await deleteEmployee(id);
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
  
  const totalCount = employee ? employee.length : 0;   
  const slicedEmployee = employee.slice(
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
                <TableCell >First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell >User Name</TableCell>
								<TableCell >Email</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedEmployee.map((employee) => (
                <AnimatedTableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell >{employee.first_name}</TableCell>
                  <TableCell >{employee.last_name}</TableCell>
                  <TableCell >{employee.username}</TableCell>
									<TableCell >{employee.email}</TableCell>
                  <TableCell align="center">
                  <Button onClick={() => handleDelete(employee.id)}><DeleteIcon color="error" /></Button>
                  <Button onClick={() => navigate('edit/'+employee.id)}> <EditIcon color="primary" /> </Button>
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

export default EmployeesTable;