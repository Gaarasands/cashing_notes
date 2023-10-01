import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

const StatsChart =() =>{
  return (
    <Container>
    <LineChart 
    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
    series={[
      {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
      },
    ]}
    width={1700}
    height={300}
  />
    </Container>

  );
}
export default StatsChart ;