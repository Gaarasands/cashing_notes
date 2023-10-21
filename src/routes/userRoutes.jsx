import {createBrowserRouter,useNavigate} from "react-router-dom";
import LoginForm from "../pages/loginform";
import SignupForm from "../pages/signupform";
import HomePage from "../pages/homePage";
import UserPage from "../pages/user/userPage";
import Navbar from "../components/homePage/navbar/navbar";
import SettingsPage from "../pages/settings/settings";
import ProductsPage from "../pages/products/products";
import RawMaterialPage from "../pages/rawmaterials/rawMaterials";
import ProductsAddEditForm from "../pages/products/add_edit";
import RawmaterialAddEditForm from "../pages/rawmaterials/add-edit";
import Cashing from "../pages/cashing/cashing";
import SuppliersPage from "../pages/sidebarPages/Suppliers";
import EmployeesPage from "../pages/sidebarPages/employees";
import CashingTables from "../pages/cashing/cashingtables";
import ProductForm from "../tt";
import TimeTracker from "../tt";


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
    path: user+"suppliers",
    element : <SuppliersPage />
   },
   {
    path: user+"cashing",
    element : <Cashing />
   },
   {
    path: user+"tables",
    element : <CashingTables />
   },
   {
    path: user+"employees",
    element : <EmployeesPage />

   },
   {path:"test",
   element:<ProductForm/>
  },
  {
    path:"test2",
    element:<TimeTracker />
  }

  
    
  
  
  
  
  ]);
  
  return(<Navbar /> &&  userroute)
}


export default authroute;

