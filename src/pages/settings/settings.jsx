import React, { useEffect, useState } from "react";
import Navbar from "../../components/homePage/navbar/navbar";
import { Box, Button, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import SwitchButton from "../../components/button/switch";
import { Container, height } from "@mui/system";
import { FcSettings } from "react-icons/fc";
import '../../css/font.css';
import getTheme from "../../theme/theme";
import { FcClock } from "react-icons/fc";
import TimeSettings from "./timesettings";

const SettingsPage = ({ setThemeMode }) => {
  const [switchButtonState, setSwitchButtonState] = useState(false);
  const theme = getTheme(switchButtonState);
  const [open,setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false)
  }

useEffect(() => {
  const themeModeState = localStorage.getItem("themeMode");
    if (themeModeState) {
      const isDarkMode = themeModeState === "dark";
      setThemeMode(isDarkMode);
      setSwitchButtonState(isDarkMode)}}
      ,[setThemeMode]);

  const handleThemeButtonClick = () => {
    const newThemeMode = !switchButtonState;
    setThemeMode(newThemeMode);
    setSwitchButtonState(newThemeMode);
    localStorage.setItem("themeMode", newThemeMode ? "dark" : "light")
      };

return (
  <>
  <Navbar />
  <Box style={{height:"100vh",width:"100%" ,backgroundColor: theme.palette.common.white}}>
  <Box sx={{ paddingTop: "65px",backgroundColor: theme.palette.common.caramel }} >
    <Grid container alignItems="center" justifyContent="center">
      <Typography variant="h3" sx={{ marginX: "9px",mY:"1px",  fontFamily: 'ChakraPetch-Medium'}}>
        Settings
      </Typography>
      <FcSettings sx={{ marginTop: "5px" }} size={40} />
    </Grid>
  </Box>
  <SwitchButton onChange={handleThemeButtonClick} checked={switchButtonState} />
  <Container>
  <Grid item xs={12} md={12}>
    <Paper elevation={6} sx={{ borderRadius: "8px", p: 2 }} style={{my:"25px"}}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} sx={{marginY:"20px"}}>
        <Button>
          <Card>
            <FcClock size={40} />
            <CardContent><Typography>Timing and sits</Typography> </CardContent>
          </Card>
        </Button>
      </Grid>
      <Grid item xs={12} md={3} sx={{marginY:"20px"}}>
        <Button>
          <Card>
            asdas
            <CardContent>sfljfdvjkdbsvks</CardContent>
          </Card>
        </Button>
      </Grid>
      <Grid item xs={12} md={3} sx={{marginY:"20px"}}>
        <Button>
          <Card>
            asdas
            <CardContent>sfljfdvjkdbsvks</CardContent>
          </Card>
        </Button>
      </Grid>
      <Grid item xs={12} md={3} sx={{marginY:"20px"}}>
        <Button>
          <Card>
            asdas
            <CardContent>sfljfdvjkdbsvks</CardContent>
          </Card>
        </Button>
      </Grid>
    </Grid>
  <Grid container spacing={2}>
          <Grid item xs={12} md={3} sx={{marginY:"20px"}}>
            <Button>
              <Card>
                <CardContent>Timeing Cost</CardContent>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} md={3} sx={{marginY:"20px"}}>
            <Button>
              <Card>
                asdas
                <CardContent>sfljfdvjkdbsvks</CardContent>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} md={3}sx={{marginY:"20px"}}>
            <Button>
              <Card>
                asdas
                <CardContent>sfljfdvjkdbsvks</CardContent>
              </Card>
            </Button>
          </Grid>
          <Grid item xs={12} md={3} sx={{marginY:"20px"}}>
            <Button>
              <Card>
                asdas
                <CardContent>sfljfdvjkdbsvks</CardContent>
              </Card>
            </Button>
          </Grid>
        </Grid>
    </Paper>
  </Grid>
  </Container>
  </Box>
  </>
  );
};

export default SettingsPage;
