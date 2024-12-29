
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; 
import "./UserDashboard.css";
import UHome from "./UHome";
import BuySellCattle from "./BuySellCattle";
import OrderPlacement from "./OrderPlacement";



const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/userdash/myprofile"); 
  };

  const handleLogoutClick = () => {
    setShowModal(true); 
  };

  const handleLogoutConfirm = () => {
    setShowModal(false); 
    navigate("/Main"); 
  };

  const handleModalClose = () => {
    setShowModal(false); 
  };

  const renderContent = () => {
    switch (activeTab) {
      case "sellcattle":
        return <BuySellCattle/> ;
      case "orderplacement":
        return <OrderPlacement/> ;
      case "FarmerLoan":
        return ;
      case "AddMilkRecord":
        return
      case "FarmerRecord":
        return ;
      case "LoanAndFeedRecord":
        return ;
      case "Add_User_Milk_Details":
        return ;
      case "CustMilkDetails":
        return ;
      case "productupload":
        return ;
      default:
        return <UHome/>;
    }
  };

  return (
    <div className="user-dashboard">
      <nav style={styles.navbar}>
        <div style={styles.left}>
          <h1 style={styles.logo}>Sadguru Digitalization</h1>
        </div>
        <div style={styles.right}>
          <FaUserCircle
            size={30}
            style={styles.profileIcon}
            onClick={handleProfileClick}
          />
          <button style={styles.logoutButton} onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </nav>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showModal}
        onClose={handleModalClose}
        onConfirm={handleLogoutConfirm}
      />

      {/* Sidebar and Content Section */}
      <div className="Udashboard-container">
        {/* Sidebar */}
        <aside className="Usidebar">
          <button onClick={() => setActiveTab("UHome")}>Dashboard</button>
          
          <button onClick={() => setActiveTab("sellcattle")}>Sell Cattle</button>
          <button onClick={() => setActiveTab("orderplacement")}>Order</button>
          

         
        </aside>

        {/* Main Content */}
        <main className="Ucontent">
          {renderContent()}
        </main>
      </div>

      Footer
      <footer className="Ufooter">
        <p>© 2024 Sadguru Digitalization | Empowering Farmers</p>
      </footer>
    </div>
  );
};

// Confirmation Modal Component
const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h3>Are you sure you want to logout?</h3>
        <div style={modalStyles.buttons}>
          <button style={modalStyles.button} onClick={onConfirm}>
            Yes
          </button>
          <button style={modalStyles.button} onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

// Navbar and button styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#299",
    color: "#fff",
  },
  left: {
    flex: 1,
  },
  logo: {
    fontSize: "20px",
    margin: 0,
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  profileIcon: {
    color: "#fff",
    cursor: "pointer",
    marginRight: "10px",
  },
  logoutButton: {
    backgroundColor: "#f00",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

// Styles for the Modal
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default UserDashboard;
