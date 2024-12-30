import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoKeyOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import "./SignupPage.css";

export default function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const fullNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const mobileRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const handleSignupSuccess = (event) => {
    event.preventDefault();
    setErrorMessage("");

    const fullName = fullNameRef.current.value.trim();
    const username = usernameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const mobile = mobileRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();

    if (
      !fullName ||
      !username ||
      !email ||
      !mobile ||
      !password ||
      !confirmPassword
    ) {
      setErrorMessage("All fields are required!");
      return;
    }
    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(fullName)) {
      setErrorMessage("Please enter a valid name!");
      return;
    }
    if (!/^[a-zA-Z0-9_]{3,15}$/.test(username)) {
      setErrorMessage(
        "Username must be 3-15 characters long and can include letters, numbers, and underscores."
      );
      return;
    }
    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
      setErrorMessage("Please enter a valid mobile number!");
      return;
    }
    if (
      !/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/.test(
        email
      )
    ) {
      setErrorMessage("Please enter a valid email!");
      return;
    }
    if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$])[A-Za-z0-9@#\$]{6,12}$/.test(
        password
      )
    ) {
      setErrorMessage(
        "Password must be 6-12 characters, with at least one digit, one lowercase letter, one uppercase letter, and one special character (@, #, $)"
      );
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Generate Unique ID
    let farmerData = JSON.parse(localStorage.getItem("farmers")) || [];
    const farmerId = `F${101 + farmerData.length}`;
    const registrationDate = new Date().toLocaleDateString();

    // Check if username already exists
    const isUsernameTaken = farmerData.some(
      (farmer) => farmer.username === username
    );
    if (isUsernameTaken) {
      setErrorMessage(
        "Username already exists. Please choose a different one."
      );
      return;
    }

    const farmerDetails = {
      farmerId,
      fullName,
      username,
      email,
      mobile,
      password,
      registrationDate,
    };

    farmerData.push(farmerDetails);
    localStorage.setItem("farmers", JSON.stringify(farmerData));

    console.log("Farmer Registered:", farmerDetails);
    navigate("/bankdetails", { state: { farmerId } });
  };

  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-card">
          <Link to="/loginc" className="signup-link">
            Back
          </Link>
          <h2 className="signup-header">Create an Account</h2>
          <form className="signup-form" onSubmit={handleSignupSuccess}>
            {errorMessage && (
              <p className="signup-error-message">{errorMessage}</p>
            )}
            <FaRegUser />
            <label>Name</label>
            <input
              className="signup-input-field"
              type="text"
              placeholder="Full Name"
              ref={fullNameRef}
              required
            />
            <FaRegUser />
            <label>Username</label>
            <input
              className="signup-input-field"
              type="text"
              placeholder="Username"
              ref={usernameRef}
              required
            />
            <MdOutlineMailOutline />
            <label>Email</label>
            <input
              className="signup-input-field"
              type="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
            <IoPhonePortraitOutline />
            <label>Phone</label>
            <input
              className="signup-input-field"
              type="tel"
              placeholder="Phone Number"
              ref={mobileRef}
              required
            />
            <IoKeyOutline />
            <label>Password</label>
            <input
              className="signup-input-field"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <IoKeyOutline />
            <label>Confirm Password</label>
            <input
              className="signup-input-field"
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              required
            />
            <button type="submit" className="signup-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
