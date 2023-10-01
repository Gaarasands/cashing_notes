import {React,Route,useState} from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import authroute from "./routes/userRoutes"
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider from Material-UI
import getTheme from "./theme/theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
const AppWithTheme = () => {
  const [themeMode, setThemeMode] = useState(false);
    return (
      <ThemeProvider theme={getTheme(themeMode)}>
        <RouterProvider router={authroute(setThemeMode)} />
      </ThemeProvider>
          )};
root.render(<AppWithTheme />)
reportWebVitals();