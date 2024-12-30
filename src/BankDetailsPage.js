import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./BankDetails.css";

const BankDetailsPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const accountHolderNameRef = useRef();
  const bankNameRef = useRef();
  const branchNameRef = useRef();
  const accountNumberRef = useRef();
  const ifscCodeRef = useRef();
  const swiftCodeRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBankDetailsSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    const accountHolderName = accountHolderNameRef.current.value.trim();
    const bankName = bankNameRef.current.value.trim();
    const branchName = branchNameRef.current.value.trim();
    const accountNumber = accountNumberRef.current.value.trim();
    const ifscCode = ifscCodeRef.current.value.trim();
    const swiftCode = swiftCodeRef.current.value.trim();

    // Validations
    if (
      !accountHolderName ||
      !bankName ||
      !accountNumber ||
      !ifscCode ||
      !swiftCode
    ) {
      setErrorMessage("All fields are required except Branch Name!");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(accountHolderName)) {
      setErrorMessage(
        "Account Holder Name must contain only letters and spaces!"
      );
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(bankName)) {
      setErrorMessage("Bank Name must contain only letters and spaces!");
      return;
    }

    if (branchName && !/^[a-zA-Z0-9\s]+$/.test(branchName)) {
      setErrorMessage(
        "Branch Name can only contain letters, numbers, and spaces!"
      );
      return;
    }

    if (!/^[0-9]{9,18}$/.test(accountNumber)) {
      setErrorMessage("Account Number must be between 9 to 18 digits!");
      return;
    }

    if (!/^[A-Z]{4}[0-9]{7}$/.test(ifscCode)) {
      setErrorMessage(
        "IFSC Code must be in format: 4 letters followed by 7 digits!"
      );
      return;
    }

    if (!/^[A-Z]{6}[A-Z0-9]{2}[A-Z0-9]{3}$/.test(swiftCode)) {
      setErrorMessage("SWIFT/BIC Code must follow the correct format!");
      return;
    }

    // Retrieve Farmer ID from State
    const farmerId = location.state?.farmerId;
    if (!farmerId) {
      setErrorMessage("Farmer ID is missing!");
      return;
    }

    // Update Local Storage
    let farmerData = JSON.parse(localStorage.getItem("farmers")) || [];
    const farmerIndex = farmerData.findIndex(
      (farmer) => farmer.farmerId === farmerId
    );

    if (farmerIndex === -1) {
      setErrorMessage("Farmer not found!");
      return;
    }

    farmerData[farmerIndex].bankDetails = {
      accountHolderName,
      bankName,
      branchName,
      accountNumber,
      ifscCode,
      swiftCode,
    };

    localStorage.setItem("farmers", JSON.stringify(farmerData));

    console.log("Bank Details Updated:", farmerData[farmerIndex]);
    navigate("/farmerlogin");
  };

  return (
    <>
      <div className="bankdetails-wrapper">
        <div className="bankdetails-card">
          <Link to="/signup" className="bankdetails-link">
            Back
          </Link>
          <h2 className="bankdetails-header">Enter Bank Details</h2>
          <form className="bankdetails-form" onSubmit={handleBankDetailsSubmit}>
            {errorMessage && (
              <p className="bankdetails-error-message">{errorMessage}</p>
            )}
            <label>Account Holder Name</label>
            <input
              type="text"
              placeholder="Account Holder Name"
              ref={accountHolderNameRef}
              required
            />

            <label>Bank Name</label>
            <input
              type="text"
              placeholder="Bank Name"
              ref={bankNameRef}
              required
            />

            <label>Branch Name (Optional)</label>
            <input type="text" placeholder="Branch Name" ref={branchNameRef} />

            <label>Account Number</label>
            <input
              type="text"
              placeholder="Account Number"
              ref={accountNumberRef}
              required
            />

            <label>IFSC Code</label>
            <input
              type="text"
              placeholder="IFSC Code"
              ref={ifscCodeRef}
              required
            />

            <label>SWIFT/BIC Code</label>
            <input
              type="text"
              placeholder="SWIFT/BIC Code"
              ref={swiftCodeRef}
              required
            />

            <button type="submit" className="bankdetails-btn">
              Submit
            </button>
          </form>
          <div className="bankdetails-footer">
            <p>
              Need help?{" "}
              <Link to="/farmerlogin" className="bankdetails-link">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankDetailsPage;
