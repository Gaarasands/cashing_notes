return (
  <div>
    <Navbar />
    <Container sx={{ padding: "16px", marginTop: "70px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ boxShadow: 4, borderRadius: 4, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Fab color="primary" aria-label="add" >
              <ArrowBackIcon />
            </Fab>
            <Typography variant="h6" component="div">
              Table Number
            </Typography>
            <Fab color="primary" aria-label="add" >
              <AddIcon />
            </Fab>
          </Box>
          <Autocomplete sx={{mt:2}}
          options={[1, 2, 3, 4, 5, 6]}
          value={numPeople}
          onChange={(event, newValue) => setNumPeople(newValue)}
          renderInput={(params) => <TextField {...params} label="Number of People" />}
        />           
        <Grid sx={{ my: 2 }} justifyContent="center" alignItems="center" height="15vh">
        <Grid>
        <Paper elevation={4} sx={{ m: 0, p: 2, boxShadow: 4, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginTop: '1px' }}>
          <Button variant="contained" color={buttonColor} onClick={handleButtonClick}>
            {buttonText}
          </Button>
        </div>
        <Typography variant="h6" color="primary.main">
          Entry Time:
        </Typography>
        <Typography variant="h6" color="primary.main">
          Leaving Time:
        </Typography>
      </Paper>
        </Grid>
      </Grid>
          <TableContainer sx={{ marginTop: 2 }}>
            <Table sx={{ border: "1px solid #ccc", borderRadius: "8px" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: 'center', width: '20%' }}>Order</TableCell>
                  <TableCell sx={{ textAlign: 'center', width: '20%' }}>Qty</TableCell>
                  <TableCell sx={{ textAlign: 'center', width: '20%' }}>Price</TableCell>
                  <TableCell sx={{ textAlign: 'center', width: '20%' }}>Total</TableCell>
                  <TableCell sx={{ textAlign: 'center', width: '20%' }}>Actions</TableCell>
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
                                    ? { ...p, quantity: p.quantity - 1 }
                                    : p
                                )
                              );
                            }
                          }}
                        >
                          <RemoveIcon />
                        </Button>
                        <Button
                          color="error"
                          onClick={() => {
                            setSelectedProducts((prevSelectedProducts) =>
                              prevSelectedProducts.filter((p) => p.name !== selectedProduct.name)
                            );
                          }}
                        >
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

        {/* Right Container - 9 Columns */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ boxShadow: 4, borderRadius: 4, p: 2 }}>
            {/* Right container content (your existing content) */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </div>
);
