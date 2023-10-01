import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Paper } from '@mui/material';

const DashboardStats = () => {
  const pageBackgroundColor = 'rgba(0, 0, 0, 0.1)';

  const statsData = [
    { head: 'Sales', value: '$8,753.00', percent: '18.33%', icon: 'mdi mdi-basket' },
    { head: 'Margin', value: '$5,300.00', percent: '13.21%', icon: 'mdi mdi-cube-outline' },
    { head: 'Orders', value: '$1,753.00', percent: '67.98%', icon: 'mdi mdi-briefcase-outline' },
    { head: 'Affiliate', value: '2368', percent: '20.32%', icon: 'mdi mdi-account-circle' }
  ];

  return (
    <Grid container spacing={3} md={12}>
      {statsData.map((stat, index) => (
        <Grid key={index} item xs={12} md={12} lg={12} className="stretch-card grid-margin">
          <Paper elevation={12} style={{ backgroundColor: pageBackgroundColor }} className="card">
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <div className="color-card">
                  <Typography variant="subtitle1" className="mb-0 color-card-head">
                    {stat.head}
                  </Typography>
                  <Typography variant="h2" className="text-white">
                    {stat.value}
                  </Typography>
                </div>
                <i className={`card-icon-indicator mdi ${stat.icon} bg-inverse-icon`}></i>
              </Box>
              <Typography variant="h6" className="text-white">
                {stat.percent} Since last month
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardStats;
