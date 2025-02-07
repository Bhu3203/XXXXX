import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import Header from "./Header";
// import Loginc from "./Loginc";
import LoginPage from "./LoginPage";
// import AdminLogin from "./AdminLogin";
import SignUpPage from "./SignUpPage";
// import Admin from "./components/Admin/Admin";
import Add_User_Milk_Details from "./components/Admin/Add_User_Milk_Details";
import FarmerRecord from "./components/Admin/FarmerRecord";
import LoanAndFeedRecord from "./components/Admin/LoanAndFeedRecord";
import AddMilkRecord from "./components/Admin/AddMilkRecord";
// import AdminHeader from "./components/Admin/AdminHeader";

// import UserLogin from "./UserLogin";
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

import MyProfile from "./components/User/profile/MyProfile";
import SideBar from "./components/User/siderBar/SideBar";
import Dashboard from "./components/User/dashboard/Dashboard";
import NavigationBar from "./components/User/navBar/NavigationBar";

import Settings from "./components/User/settingComponent/Settings";
import BillingPayments from "./components/User/billing&paymentPages/BillingPayments";
import PaymentManagement from "./components/User/milkqualituReport/QualityPricingInfo";
import CommunityAndSupport from "./components/User/community&support/CommunityAndSupport";
// import ProductComponents from "./components/User/product/ProductComponents";
import ProductListing from "./components/User/product/ProductListing";

import BuyAndSellCattle from "./components/User/cattelListingPages/BuyAndSellCattle";

const customRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "header", element: <Header /> },
      { path: "Main", element: <Main /> },
      { path: "about", element: <AboutUs /> },
      { path: "product", element: <Product /> },
      // { path: "loginc", element: <Loginc /> },
      { path: "userlogin", element: <LoginPage /> },
      // { path: "adminlogin", element: <AdminLogin /> },
      // { path: "userLogin", element: <UserLogin /> },
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
      {/* <HomeUser/> */}
        <SideBar />

        <NavigationBar />
        <ProductListing/>
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

      {
        path: "billingpayments",
        element: <BillingPayments/>
      },
      {
        path: "paymentsManagement",
        element: <PaymentManagement/>
      },
      {
        path: "community&support",
        element: <CommunityAndSupport/>
      },
      {
        path: "productListing",
        element: <ProductListing/>
      },
      
    ],
  },
]);

export default customRoute;
