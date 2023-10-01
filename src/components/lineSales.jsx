import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GroupIcon from '@mui/icons-material/Group';
import LineChartP from './charts/linechart';
import { Container } from '@mui/system';

const LineWins = ({ title, icon }) => {
  return (
    <Container >
      <Card elevation={8} >
        <CardContent>
          <LineChartP />
          <Box display="flex" alignItems="center" sx={{height:"50%"}}>
            {icon && <GroupIcon  />}
            <Box>
              <small>{title}</small>
             
            </Box>
          </Box>
        </CardContent>
      </Card>
      
    </Container>
  );
};

export default LineWins;
