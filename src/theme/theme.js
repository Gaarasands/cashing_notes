import { createTheme } from "@mui/material/styles";

const getTheme = (themeMode) => {
  return createTheme({
    palette: {
      mode: themeMode ? "dark" : "light",
      primary:{
				main: themeMode ? "#01579b" : "#03a9f4",
				light: themeMode ? "#ffeb3b" : "#ffeb3b",
			},
    common:
      {white:themeMode ? "#212121":"#eeeeee"},
      background:themeMode ?{paper:"#263238"}:{paper:"#eeeeee"},
			secondary : themeMode ? {main:"#bf360c"} :{main:"#bf360c"},
    action:themeMode? {hover:"#29b6f6"}:   {hover:"#b3e5fc"}
      },
    typography: {
      fontWeightBold: 700,
    },
  });
};

export default getTheme;
