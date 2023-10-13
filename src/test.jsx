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
      </Grid>
    ))}
  </Grid>
</Paper>
</Grid>