import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import lemon from "../../assets/carousel/lemon.jpg";
import watermelon from "../../assets/carousel/summer.jpg";
import strawberry from "../../assets/carousel/strawberry.jpg";
import summer from "../../assets/carousel/lemon.jpg";
import { FaTag } from 'react-icons/fa';
import { Box } from '@mui/material';

class HomeCarousel extends Component {
    render() {
        return (
            <Box sx={{m:"18px"}}>
            <Carousel emulateTouch={true}  verticalSwipe='natural' showThumbs={false} ariaLabel='hello'>
            <div >
            <img src={summer} height={"700px"} width={"400px"} style={{objectFit:"cover" }}/>
            <div style={{ 
                    position: 'absolute', top: '17%', left: '15%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius:"15px",color: '#fff',
                    background: 'rgba(0,0,0,0.5)', padding: '10px'  }}>
            <FaTag /> Sold 20%</div>
            <p className="lemon">Lemon</p>
        </div>
        <div>
            <img src={watermelon} height={"700px"} width={"400px"} style={{objectFit:"cover"}}/>
            <p className="legend">Water Melon</p>
        </div>
        <div>
            <img src={strawberry} height={"700px"} width={"400px"} style={{objectFit:"contain"}}/>
            <p className="legend">Legend 3</p>
        
            </div>
            </Carousel>
            </Box>

        );
    }   
}

export default HomeCarousel;