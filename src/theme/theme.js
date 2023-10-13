import { createTheme } from "@mui/material/styles";

const getTheme = (themeMode) => {
  return createTheme({
    palette: {
      mode: themeMode ? "dark" : "light",},
    typography: {
      fontWeightBold: 700,
    },
  });
};

export default getTheme;
