import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  Grid,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Button,
  Collapse,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSpring } from "react-spring";
import { Container } from "@mui/system";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const CashingTable = () => {
  const navigate = useNavigate();
  const [openRow, setOpenRow] = useState(-1); // Track the open row index
  const [data, setData] = useState([]); // Table data
  const [newRow, setNewRow] = useState(null); // Track the new row being added

  const toggleRow = (rowIndex) => {
    setOpenRow((prevRow) => (prevRow === rowIndex ? -1 : rowIndex));
  };

  const handleAddRow = () => {
    // Create a new empty row and set the "entryTime" to the current time
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const newRow = {
      id: data.length + 1, // Assign a new ID
      table: "",
      sits: "",
      entryTime: currentTime, // Set the "entryTime" to the current time
      leavingTime: "",
      orders: "",
      orderPrice: "",
      timeCost: "",
      bill: "",
    };
    setNewRow(newRow);
  };

  const handleSaveNewRow = () => {
    // Add the new row to the data array and reset the new row
    if (newRow) {
      setData([...data, newRow]);
      setNewRow(null);
    }
  };

  const handleChange = (event, property) => {
    // Update the corresponding property of the new row
    if (newRow) {
      const updatedRow = { ...newRow, [property]: event.target.value };
      setNewRow(updatedRow);
    }
  };

  return (
    <Container p={2}>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12} md={12}>
          <Grid sx={{ my: "20px" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={5}>
                      <Button onClick={handleAddRow}>Add</Button>
                      {newRow && (
                        <Button onClick={handleSaveNewRow}>Save</Button>
                      )}
                    </TableCell>
                    <TableCell align="center" colSpan={5}>
                      <Button>Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Table</TableCell>
                    <TableCell>Sits</TableCell>
                    <TableCell>Entry Time</TableCell>
                    <TableCell>Leaving Time</TableCell>
                    <TableCell>Orders</TableCell>
                    <TableCell>Order Price</TableCell>
                    <TableCell>Time Cost</TableCell>
                    <TableCell>Bill</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, rowIndex) => (
                    <React.Fragment key={row.id}>
                      <TableRow>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.table}</TableCell>
                        <TableCell>{row.sits}</TableCell>
                        <TableCell>{row.entryTime}</TableCell>
                        <TableCell>{row.leavingTime}</TableCell>
                        <TableCell>{row.orders}</TableCell>
                        <TableCell>{row.orderPrice}</TableCell>
                        <TableCell>{row.timeCost}</TableCell>
                        <TableCell>{row.bill}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => toggleRow(rowIndex)}
                            variant="outlined"
                          >
                            {openRow === rowIndex ? "Hide" : "Show"}
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={10}>
                          <Collapse
                            in={openRow === rowIndex}
                            timeout="auto"
                            unmountOnExit
                          >
                            {/* Add details content here */}
                            <Typography variant="body2">
                              Additional details go here.
                            </Typography>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                  {newRow && (
                    <TableRow>
                      <TableCell>{newRow.id}</TableCell>
                      <TableCell>
                        <TextField
                          value={newRow.table}
                          onChange={(e) => handleChange(e, "table")}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={newRow.sits}
                          onChange={(e) => handleChange(e, "sits")}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={newRow.entryTime}
                          onChange={(e) => handleChange(e, "entryTime")}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={newRow.leavingTime}
                          onChange={(e) => handleChange(e, "leavingTime")}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={newRow.orders}
                          onChange={(e) => handleChange(e, "orders")}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={newRow.orderPrice}
                          onChange={(e) => handleChange(e, "orderPrice")}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={newRow.timeCost}
                          onChange={(e) => handleChange(e, "timeCost")}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={newRow.bill}
                          onChange={(e) => handleChange(e, "bill")}
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={handleSaveNewRow}
                          variant="outlined"
                        >
                          Save
                        </Button>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CashingTable;
