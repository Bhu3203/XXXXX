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
import Add_User_Milk_Details from "./components/Admin/Add_User_Milk_Details";
import FarmerRecord from "./components/Admin/FarmerRecord";
import LoanAndFeedRecord from "./components/Admin/LoanAndFeedRecord";
// import AddMilkRecord from "./components/Admin/AddMilkRecord";
import AdminHeader from "./components/Admin/AdminHeader";
import CusHeader from "./components/User/CusHeader";
// import Sidebar from "./components/User/Sidebar";
import BuyAndSellCattle from "./components/User/BuyAndSellCattle";
import SideBar1 from "./components/User/SideBar1";

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
        path: "loginc",
        element: <Loginc />,
      },
      {
        path: "loginpage",
        element: <LoginPage />,
      },
      {
        path: "adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      //   {
      //     path: "addMilk",
      //     element: <AddMilkRecord/>
      //   },
      //   {
      //     path: "admin",
      //     element: <Admin />,
      //   },
      //   {
      //     path: "addmilkrecord",
      //     element: <Add_Milk_Record />,
      //   },
      //   {
      //     path: "uesrmilkrecord",
      //     element: <Add_User_Milk_Details />,
      //   },
      //   {
      //     path: "loanfeed",
      //     element: <LoanAndFeedRecord />,
      //   },
      //   {
      //     path: "farmerrecord",
      //     element: <FarmerRecord />,
      //   },
    ],
  },
  {
    path: "admindash",
    element: (
      <>
        <AdminHeader />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "addmilkrecord",
        element: <Add_Milk_Record />,
      },
      {
        path: "uesrmilkrecord",
        element: <Add_User_Milk_Details />,
      },
      {
        path: "farmerrecord",
        element: <FarmerRecord />,
      },
      {
        path: "loanfeed",
        element: <LoanAndFeedRecord />,
      },
    ],
  },
  {
    path: "userdash",
    element: (
      <>
        <CusHeader />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "buyandsell",
        element: <BuyAndSellCattle />,
      },

      {
        path: "sidebar",
        element: <SideBar1 />,
      },
    ],
  },
]);

export default customRoute;
