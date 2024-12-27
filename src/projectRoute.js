import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Loginc from "./Loginc";
import LoginPage from "./LoginPage";
import AdminLogin from "./AdminLogin";
import SignUpPage from "./SignUpPage";
// import Admin from "./components/Admin/Admin";
import Add_Milk_Record from "./components/Admin/Add_Milk_Record";
// import Dashboard from "./components/Admin/Dashboard";
import Add_User_Milk_Details from "./components/Admin/Add_User_Milk_Details";
import FarmerRecord from "./components/Admin/FarmerRecord";
import LoanAndFeedRecord from "./components/Admin/LoanAndFeedRecord";
import AddMilkRecord from "./components/Admin/AddMilkRecord";
import AdminHeader from "./components/Admin/AdminHeader";

import SideBar from "./components/User/siderBar/SideBar";
import BuyAndSellCattle from "./components/User/BuyAndSellCattle";

import Dashboard from "./components/User/dashboard/Dashboard";
import NavigationBar from "./components/User/navBar/NavigationBar";
import MyProfile from "./components/User/profile/MyProfile";
import Settings from "./components/User/settingComponent/Settings";
import HomeUser from "./components/User/HomeUser";
import UserLogin from "./UserLogin";
import ProductUpload from "./components/Admin/Product/ProductUpload";
import AdminDashboard from "./components/Admin/AdminDashboard";
import BankDetailsPage from "./BankDetailsPage";
// import UpperNavbar from "./components/Admin/UpperNavbar";
import Admin from "./components/Admin/Admin";
import AboutUs from "./AboutUs";
import Main from "./Main";
import MilkReport from "./components/Admin/MilkReport";
import FarmerLoan from "./components/Admin/FarmerLoan";
import Product from "./Product";
import CattleFeedForm from "./components/Admin/CattleFeedForm";
import CustMilkDetails from "./components/Admin/CustMilkDetails";

const customRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "header",
        element: <Header />,
      },
      {
        path: "Main",
        element: <Main />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "loginc",
        element: <Loginc />,
      },
      {
        path: "farmerlogin",
        element: <LoginPage />,
      },
      {
        path: "adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "userLogin",
        element: <UserLogin />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "bankdetails",
        element: <BankDetailsPage />,
      },
      
      
    ],
  },
  {
    path: "admindash",
    element: (
      <>
      <Admin/>
      {/* <UpperNavbar/> */}
        {/* <AdminHeader />  */}
        {/* <Outlet /> */}
      </>
    ),
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard/>,
      },
      {
            path: "addMilk",
            element: <AddMilkRecord/>
          },
      {
        path: "addmilkrecord",
        element: <Add_Milk_Record />,
      },
      {
        path: "uesrmilkrecord",
        element: <Add_User_Milk_Details />,
      },
      {
        path: "custmilkrecord",
        element: <CustMilkDetails />,
      },
      {
        path: "farmerrecord",
        element: <FarmerRecord />,
      },
      {
        path: "milkreport",
        element: <MilkReport />,
      },
      {
        path: "cattlefeed",
        element: <CattleFeedForm />,
      },

      {
        path: "farmerloan",
        element: <FarmerLoan />,
      },
      {
        path: "loanfeed",
        element: <LoanAndFeedRecord />,
      },
      {
        path: "productupload",
        element: <ProductUpload />,
      },
    ],
  },
  {
    path: "userdash",
    element: (
      <>
      {/* <HomeUser/> */}
        <SideBar />
        <NavigationBar />
        <Outlet/>
      </>
    ),
    children: [
      {
        path: "buyandsell",
        element: <BuyAndSellCattle />,
      },
      {
        path: "sidebar",
        element: <SideBar />,
      },
      {
        path: "Dashboard",
        element: <Dashboard/>
      },
      {
        path: "myProfile",
        element: <MyProfile/>
      },
      {
        path: "settings",
        element: <Settings/>
      },
      
      
    ],
  },
]);

export default customRoute;
