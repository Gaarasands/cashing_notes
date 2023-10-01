import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';

const ChannelSessionsCard = () => {
  return (
    <Card sx={{ maxWidth: 400, marginBottom: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Sessions by Channel
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              padding: 1,
              animation: 'spin 2s linear infinite', // Add spinning animation
            }}
          />
          <style>
            {`
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}
          </style>
        </Box>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-6">
                {/* Placeholder for circleProgress6 */}
              </div>
              <div className="col-lg-6">
                <List className="session-by-channel-legend">
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ListItemText primary="Firewalls(3)" secondary="4(100%)" />
                  </ListItem>
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ListItemText primary="Ports(12)" secondary="12(100%)" />
                  </ListItem>
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ListItemText primary="Servers(233)" secondary="2(100%)" />
                  </ListItem>
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ListItemText primary="Firewalls(3)" secondary="7(100%)" />
                  </ListItem>
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ListItemText primary="Firewalls(3)" secondary="6(70%)" />
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelSessionsCard;
