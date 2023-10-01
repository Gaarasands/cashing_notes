import React,{useState , useId ,useEffect} from "react";
import {Card,CardHeader,CardContent,CardActions,Grid,TextField,Button} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { getAllRawMaterial,addRawMaterial,editRawMaterial, getByIdRawMaterial } from "../../api/rawmaterial";
import { useNavigate,useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const RawmaterialAddEditForm = () => {
  const navigate = useNavigate();
  const id = useId()
  const params = useParams();
  const [rawmaterial,setRawmaterial]= useState({
  name : '', 
  details : '',
  price : '',
  quantity : ''})

  const handleadd = async () =>{
    let [status,data] = await addRawMaterial(rawmaterial);
    console.log(data)
    if (status===201){
    alert('Added')
    navigate('/user/rawmaterial')
    }
}

  const handleedit = async () =>{
    let [status,data] = await editRawMaterial(params.id,rawmaterial);
    console.log(status)
    if (status===202){
    alert('Added')
    navigate('/user/products')
    }
} 
useEffect(() => {
  getRawmaterial();    
}, []);


const getRawmaterial = async() =>{
  let [status , data] = await getByIdRawMaterial(params.id)
  if (status === 200){
    setRawmaterial(data)
  }
}
    return (
        <>
          <Card>
            <CardHeader 
            title = {params.id ? 'Edit Rawmaterial' : 'Add Rawmaterial'}
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
                  value = {rawmaterial.name}
                  onChange={(e)=> {
                    setRawmaterial(oldRawmaterial => ({...oldRawmaterial , name:e.target.value}) )
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
                  value = {rawmaterial.details}
                  onChange={(e)=> {
                    setRawmaterial(oldRawmaterial => ({...oldRawmaterial , details:e.target.value}) )
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
                  value = {rawmaterial.price}
                  onChange={(e)=> {
                    setRawmaterial(oldRawmaterial => ({...oldRawmaterial , price:e.target.value}) )
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
                  value = {rawmaterial.quantity}
                  onChange={(e)=> {
                    setRawmaterial(oldRawmaterial => ({...oldRawmaterial , quantity:e.target.value}) )
                  }}
                  />
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

export default RawmaterialAddEditForm;