import React from 'react';
import AdminHeader from './AdminHeader';  // Corrected the naming from AdHeader
import Sidebar from './Sidebar';  // Import Sidebar component
import { Outlet } from 'react-router-dom';  // Outlet to render child routes
import "../Admin/Admin.css";  // Admin-specific styles

export default function Admin() {
  return (
    <>
      <AdminHeader />  {/* Header component */}
      <Sidebar />  {/* Sidebar component */}
      <div className="main-content"> 
        {/* The Outlet renders the child components of the Admin route */}
        <Outlet />
      </div>
    </>
  );
}
