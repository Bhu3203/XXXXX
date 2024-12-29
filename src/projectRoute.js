import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Loginc from "./Loginc";
import LoginPage from "./LoginPage";
import AdminLogin from "./AdminLogin";
import SignUpPage from "./SignUpPage";
// import Admin from "./components/Admin/Admin";
import Add_User_Milk_Details from "./components/Admin/Add_User_Milk_Details";
import FarmerRecord from "./components/Admin/FarmerRecord";
import LoanAndFeedRecord from "./components/Admin/LoanAndFeedRecord";
import AddMilkRecord from "./components/Admin/AddMilkRecord";
// import AdminHeader from "./components/Admin/AdminHeader";

import UserLogin from "./UserLogin";
import Product from "./Product";
import BankDetailsPage from "./BankDetailsPage";
import AboutUs from "./AboutUs";
import Main from "./Main";
import MilkReport from "./components/Admin/MilkReport";
import FarmerLoan from "./components/Admin/FarmerLoan";
import CattleFeedForm from "./components/Admin/CattleFeedForm";
import CustMilkDetails from "./components/Admin/CustMilkDetails";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminProfile from "./components/Admin/AdminProfile";
import UserDashboard from "./components/User/UserDashboard";
import MyProfile from "./components/User/MyProfile";

const customRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "header", element: <Header /> },
      { path: "Main", element: <Main /> },
      { path: "about", element: <AboutUs /> },
      { path: "product", element: <Product /> },
      { path: "loginc", element: <Loginc /> },
      { path: "farmerlogin", element: <LoginPage /> },
      { path: "adminlogin", element: <AdminLogin /> },
      { path: "userLogin", element: <UserLogin /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "bankdetails", element: <BankDetailsPage /> },
    ],
  },
  {
    path: "admindash",
    element: (
      <>
        <AdminDashboard />
      </>
    ),
    children: [
      { path: "milkreport", element: <MilkReport /> },
      { path: "adminprofile", element: <AdminProfile /> },
      { path: "addMilk", element: <AddMilkRecord /> },
      { path: "addmilkrecord", element: <AddMilkRecord /> },
      { path: "uesrmilkrecord", element: <Add_User_Milk_Details /> },
      { path: "custmilkrecord", element: <CustMilkDetails /> },
      { path: "farmerrecord", element: <FarmerRecord /> },
      { path: "cattlefeed", element: <CattleFeedForm /> },
      { path: "farmerloan", element: <FarmerLoan /> },
      { path: "loanfeed", element: <LoanAndFeedRecord /> },
    ],
  },
  {
    path: "userdash",
    element: (
      <>
        <UserDashboard/>
        <MyProfile/>
      </>
    ),
    children: [
      {
        path:"myprofile",
        element: <MyProfile/>,
      }
    ],
  },
]);

export default customRoute;
