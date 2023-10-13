import React from "react";
import Navbar from "../../components/homePage/navbar/navbar";
import { Grid } from "@mui/material";
import DashboardCard from "../../components/dashboard/dashboardcard";
import CircleChart from "../../components/charts/circleChart";
import ProductsTable from "../../components/tables/productstable";
import { useSpring, animated } from "react-spring";
import UserTable from "../../components/table";
import LineWins from "../../components/lineSales";
import StatsChart from "../../components/userpage/chart";
import { Box } from "@mui/system";

const UserPage = () => {
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  const products = [];
  return (
    <Box sx={{p:4}}>
  <Navbar />
  <Grid item xs={12} md={12} sx={{ marginTop: "100px" }}>
    <Grid container spacing={2} md={12}>
      <Grid item xs={12} sm={12} md={8}>
        <LineWins />
      </Grid>
      <Grid item xs={12} sm={12} md={4}> 
       <CircleChart />
      </Grid>
      <h1>لا تنسى ال KPI's</h1>

      <Grid item xs={12} sm={12} md={12}>
      <DashboardCard />
      </Grid>
    </Grid>
    <Grid item xs={12} md={12}>
      <ProductsTable products={products} style={fadeInProps} />
    </Grid>
    <Grid item sx={{mt:"10px"}} spacing={5} xs={12} md={12}>
    <UserTable /> 
     </Grid>
  </Grid>
  </Box>
  )
  }
export default UserPage ;
