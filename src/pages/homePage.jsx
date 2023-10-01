import React from "react";
import Navbar from "../components/homePage/navbar/navbar";
import HomeCarousel from "../components/homePage/carousel";
import watermelon from "../assets/carousel/watermelon.jpg";
import strawberry from "../assets/carousel/strawberry.jpg";
import summer from "../assets/carousel/strawberry.jpg";
import { Box, Grid } from "@mui/material";
import Footer from "../components/homePage/footer";
import AboutUs from "../components/homePage/aboutus";

const HomePage = () => {
    const products = [
        { name: "summer", image: summer },
        { name: "Watermelon", image: watermelon },
        { name: "Strawberry", image: strawberry }
    ];

    return (
        <Box>
            <Navbar />
            <Box sx={{ paddingTop: "48px" }}>
                <HomeCarousel />
            </Box>
            <AboutUs sx={{ m: "20px" }} />
            <Box flexDirection="row" sx={{ m: "2px" }}>
                <Grid container spacing={2}>
      
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
}

export default HomePage;
