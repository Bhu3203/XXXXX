
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi"; // Using react-icons for the hamburger menu
// import { ImCross } from "react-icons/im";
// import "./AdminHeader.css"; // CSS for styling

// export default function AdminHeader() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <button className="btn btn-light" onClick={toggleSidebar}>
//             {isSidebarOpen ? <ImCross /> : <GiHamburgerMenu />}
//           </button>

//           <Link to="/admindash/productupload" className="navbar-brand ms-3">
//             <img
//               src="/path-to-farmer-logo.png"
//               alt="Farmer Logo"
//               style={{ height: "40px" }}
//             />
//           </Link>

//           <Link to="/admindash/dashboard" className="navbar-brand ms-3">
//             <img
//               src="/path-to-user-logo.png"
//               alt="User Logo"
//               style={{ height: "40px" }}
//             />
//           </Link>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/link">
//                   Link
//                 </Link>
//               </li>
//             </ul>

//             <button
//               className="btn btn-danger ms-2"
//               onClick={() => {
//                 alert("Logged out!");
//               }}
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//         <ul className="list-unstyled">
//           <li>
//             <Link to="/admindash/addmilkrecord" onClick={toggleSidebar}>
//               Loan and Feed
//             </Link>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="getRecordDropdown"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               GetRecord
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="getRecordDropdown">
//               <li>
//                 <Link
//                   to="/admindash/farmerrecord"
//                   className="dropdown-item"
//                   onClick={toggleSidebar}
//                 >
//                   Farmer
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/admindash/loanfeed"
//                   className="dropdown-item"
//                   onClick={toggleSidebar}
//                 >
//                   About Customer
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link to="/dashboard" onClick={toggleSidebar}>
//               Settings
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import "../Admin/Admin.css"; // Your custom styles

import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function AdminHeader({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default AdminHeader