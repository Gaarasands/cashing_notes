import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, Paper } from '@mui/material';
import { Container } from '@mui/system';

const DashboardCard = () => {
  return (

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={12}>
          <Card elevation={12}>
            <CardContent>
              <Grid container justifyContent="space-between" alignItems="center" marginBottom={2.7}>
                <Grid item xs={12} sm={7}>
                  <Typography variant="h5">Business Survey</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Show overview jan 2018 - Dec 2019 <a href="#"><u>See Details</u></a>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={5} textAlign="right">
                  <Button variant="contained" color="primary" disableElevation>
                    <i className="mdi mdi-email btn-icon-prepend"></i>Download Report
                  </Button>
                </Grid>
              </Grid>
              
              {/* Row 1 */}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="subtitle1" color="textSecondary">Today Earnings</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                      <div>
                        <Typography variant="h3">$5,300</Typography>
                        <Typography variant="body2" color="success">-310 avg. sales</Typography>
                      </div>
                      <div className="flot-chart">Earning Chart</div>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="subtitle1" color="textSecondary">Product Sold</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                      <div>
                        <Typography variant="h3">$9,100</Typography>
                        <Typography variant="body2" color="error">-310 avg. sales</Typography>
                      </div>
                      <div className="flot-chart">Product Chart</div>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="subtitle1" color="textSecondary">Today Orders</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                      <div>
                        <Typography variant="h3">$4,354</Typography>
                        <Typography variant="body2" color="success">-310 avg. sales</Typography>
                      </div>
                      <div className="flot-chart">Order Chart</div>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              
              
              <Grid container justifyContent="space-between" marginTop={3}>
                <Grid item xs={12} sm={8}>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <b>Learn More</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" color="textSecondary">Sales Revenue</Typography>
                  <Typography variant="h5" color="primary" component="span"> $2,45,500 </Typography>
                  <Typography variant="body2" color="error" component="span"> last 8 months </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
};

export default DashboardCard;
