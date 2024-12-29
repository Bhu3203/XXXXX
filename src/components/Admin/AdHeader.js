import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Profile icon from react-icons

// Modal Component for confirmation
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

const AdHeader = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleProfileClick = () => {
    navigate("/admindash/adminprofile"); // Navigates to the Profile page
  };

  const handleLogoutClick = () => {
    setShowModal(true); // Show the logout confirmation modal
  };

  const handleLogoutConfirm = () => {
    setShowModal(false); // Close the modal
    navigate("/Main"); // Navigate to the Main page
  };

  const handleModalClose = () => {
    setShowModal(false); // Close the modal without logging out
  };

  return (
    <>
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
    </>
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

export default AdHeader;
