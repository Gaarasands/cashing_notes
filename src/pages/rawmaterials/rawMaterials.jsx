import {React} from "react";
import Navbar from "../../components/homePage/navbar/navbar";
import RawMaterialsTable from "../../components/tables/rawMaterialstable";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";


const RawMaterialPage =() =>{
const navigate = useNavigate();
	return(
		<Box p={2}>
		<Navbar />
		<Grid container spacing={2} sx={{ marginTop: "5px" }}>
			<Grid item xs={12} md={12}>
			<Grid sx={{mb:"20px"}}>
			<RawMaterialsTable />
		</Grid>
		<Button onClick={()=>{navigate("/user/rawmaterial/add")}}>Add Raw Material</Button>
	</Grid>
	</Grid>
</Box>


    )
}

export default RawMaterialPage;