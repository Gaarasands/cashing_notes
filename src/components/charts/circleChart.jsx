import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Grid, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const data = [
  { label: 'Group A', value: 3000, color: '#FF5733' },
  { label: 'Group B', value: 0, color: '#33FF57' },
  { label: 'Group C', value: 0, color: '#5733FF' },
  { label: 'Group D', value: 6000, color: '#33B4FF' },
];

const CircleChart = () => {
  return (
    <Grid container display="flex" alignItems="center" position="relative"> {/* Added 'position' */}
      <PieChart
        series={[
          {
            innerRadius: 60,
            outerRadius: 90,
            data: data.map(item => ({ ...item, value: item.value, key: item.label })),
          },
        ]}
        sx={{
          label: {
            fill: 'white',
            fontSize: 14,
          },
        }}
        margin={{ right: 5 }}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
      {/* Added spinning circle using motion from Framer Motion */}
      <motion.div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{ rotate: 360 }}
      transition={{ loop: Infinity}}
    />
      <Box ml={2}>
        {data.map((item, index) => (
          <Typography key={index} variant="body2" component="div">
            <span
              style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                backgroundColor: item.color,
                marginRight: '4px',
              }}
            ></span>
            {`${item.label}: ${item.value}`}
          </Typography>
        ))}
      </Box>
    </Grid>
  );
}

export default CircleChart;
