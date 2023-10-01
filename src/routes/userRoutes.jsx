import {createBrowserRouter,useNavigate} from "react-router-dom";
import LoginForm from "../pages/loginform";
import SignupForm from "../pages/signupform";
import HomePage from "../pages/homePage";
import UserPage from "../pages/user/userPage";
import Navbar from "../components/homePage/navbar/navbar";
import TeamHomePage from "../pages/sidebarPages/teamPage";
import SettingsPage from "../pages/sidebarPages/settings";
import ProductsPage from "../pages/products/products";
import DetailsPage from "../pages/sidebarPages/details";
import RawMaterialPage from "../pages/rawmaterials/rawMaterials";
import ProductsAddEditForm from "../pages/products/add_edit";
import RawmaterialAddEditForm from "../pages/rawmaterials/add-edit";
import Cashing from "../pages/cashing/cashing";
import Tablespage from "../pages/tablespage";


const user = "/user/"
const authroute =(setThemeMode) =>{
  const token = localStorage.getItem('token')
  if(!token){
    const unauth = createBrowserRouter([
      <Navbar />,
      {
        path: "/signin/",
        element: <LoginForm/>,      
      },
      {
        path : "",
        element:<HomePage/>
      },
      {
        path:"/signup/",
        element:<SignupForm/>
      },
  ])
  return(unauth)
  }


  const userroute = createBrowserRouter(
    [
    {
      path : user + "teampage",
      element:<TeamHomePage/>
    },
    {
      path: user + "settings",
      element: <SettingsPage setThemeMode={setThemeMode} />,
    },
    { path: user +"home",
      element: <UserPage/>
    },
    {
      path: user +"products",
      element:<ProductsPage />
    },
    {
      path : "",
      element:<HomePage/>
    },
    {
      path: user +"signin/",
      element: <LoginForm/>,      
    },
    {
      path: user +"warehouse/",
      element: <LoginForm/>,      
    },
    {
      path : user + "details",
      element:<DetailsPage/>
    },
    {
      path : user + "rawmaterial",
      element : <RawMaterialPage />
    },
    {
      path : user + "products/add",
      element : <ProductsAddEditForm />
    },
    {
      path : user + "products/edit/:id",
      element : <ProductsAddEditForm />
    },
    {path : user + "rawmaterial/add",
     element :<RawmaterialAddEditForm />
    },
    {path : user + "rawmaterial/edit/:id",
    element :<RawmaterialAddEditForm />
   },
   {
    path: user+"cashing",
    element : <Cashing />
   },
   {
    path: user+"tables",
    element : <Tablespage />
   }
    
  
  
  
  
  ]);
  
  return(<Navbar /> &&  userroute)
}


export default authroute;

