import React,{useState , useId ,useEffect} from "react";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
import InputAdornment from '@mui/material/InputAdornment';
import { addProduct , editProduct ,getProductById} from "../../api/products";
import { useNavigate,useParams } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useFormControl } from '@mui/material/FormControl';


const ProductsAddEditForm = () => {
  const navigate = useNavigate();
  const id = useId()
  const params = useParams();
  const [product,setProduct]= useState({
  name : '', 
  details : '',
  price : '',
  image:null})

  const handleadd = async () => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("details", product.details);
    formData.append("price", product.price);
    formData.append("image", product.image);

    try {
      let response = await addProduct(formData);
      if (response.status === 201) {
        alert("Added");
        navigate("/user/products");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleedit = async () => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("details", product.details);
    formData.append("price", product.price);
    formData.append("image", product.image);

    try {
      let response = await editProduct(params.id, formData);
      if (response.status === 202) {
        alert("Updated");
        navigate("/user/products");
      }
    } catch (error) {
      console.error(error);
    }
  };

useEffect(() => {
  getProducts();    
}, []);


const getProducts = async() =>{
  let [status , data] = await getProductById(params.id)
  if (status === 200){
    setProduct(data)
  }
}
    return (
        <>
          <Card>
            <CardHeader 
            title = {params.id ? 'Edit Product' : 'Add Product'}
            avatar = {params.id ? <EditIcon /> :<AddIcon />}            />
            <CardContent>
              <Grid container spacing={1}>
              <Grid item xs={12} md={6} >
                <TextField
                  variant="outlined"
                  label="name"
                  autoFocus
                  name="name"
                  id={id+"-name"}
                  fullWidth
                  value = {product.name}
                  onChange={(e)=> {
                    setProduct(oldProduct => ({...oldProduct , name:e.target.value}) )
                  }}
                  />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="outlined"
                  label="details"
                  name="details"
                  id={id+"-details"}
                  fullWidth
                  value = {product.details}
                  onChange={(e)=> {
                    setProduct(oldProduct => ({...oldProduct , details:e.target.value}) )
                  }}
                  />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                InputAdornment
                InputProps={{
            startAdornment: <InputAdornment position="start">SP</InputAdornment>,
          }}
                  variant="outlined"
                  label="price"
                  name="price"
                  id={id+"-price"}
                  type="number"
                  InputLabelProps={{
                  shrink: true,
                          }}
                  fullWidth
                  value = {product.price}
                  onChange={(e)=> {
                    setProduct(oldProduct => ({...oldProduct , price:e.target.value}) )
                  }}
                  />
              </Grid>
              <Grid item xs={12} md={12}>
              <input
                accept="image/*"
                style={{ display: "flow" }}
                id="image-upload"
                type="file"
                onChange={(e) => {
                  const selectedImage = e.target.files[0];
                  setProduct((oldProduct) => ({
                    ...oldProduct,
                    image: selectedImage,
                  }));
                }}
              />
              <label htmlFor="image-upload">
                <Button
                  variant="contained"
                  component="span"
                  fullWidth
                  color="primary"
                >
                  Upload Image
                </Button>
              </label>
            </Grid>
              </Grid>
            </CardContent>
            <CardActions>
                <Button
                onClick={params.id ? handleedit : handleadd}
                >{params.id ? "save" : "add"}</Button>
            </CardActions>
        </Card>
        </>
    )
  }

export default ProductsAddEditForm;