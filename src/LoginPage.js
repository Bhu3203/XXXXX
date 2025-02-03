import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage({ registeredUsers }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Select Role');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      selectedRole === 'Admin' &&
      email === 'admin@gmail.com' &&
      password === 'admin123'
    ) {
      setErrorMessage('');
      alert('Login Successful as Admin!');
      navigate('/admindash');
    } else {
      const user = registeredUsers.find(
        (user) =>
          user.email === email &&
          user.password === password &&
          user.role.toLowerCase() === selectedRole.toLowerCase()
      );

      if (user) {
        setErrorMessage('');
        alert(`Login Successful as ${user.role}!`);
        navigate(`/${user.role.toLowerCase()}`);
      } else {
        setErrorMessage('Invalid email, password, or role.');
      }
    }
  };

  const selectRole = (role) => {
    setSelectedRole(role);
    setDropdownOpen(false);
  };

  return (
    <div className="unique-login-page">
      <div className="unique-login-container">
        <div className="unique-form-container">
          <Link to="/Main" className="signup-link">
            Back
          </Link>
          
          <h2 className="unique-form-title">Sign In</h2>
          <form className="unique-form unique-signin-form" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <div className="unique-dropdown-container">
  <button
    type="button"
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className="unique-dropdown-button"
  >
    {selectedRole}
  </button>
  {dropdownOpen && (
    <div className="unique-dropdown-menu">
      <div onClick={() => selectRole('Admin')} className="unique-dropdown-item">
        Admin
      </div>
      <div onClick={() => selectRole('Farmer')} className="unique-dropdown-item">
      Farmer
      </div>
      <div onClick={() => selectRole('Customer')} className="unique-dropdown-item">
      Customer
      </div>
    </div>
  )}
</div>

            </div>
            <div className="unique-form-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="unique-form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="unique-form-group">
              <label htmlFor="password">Password</label>
              <input
                className="unique-form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="unique-form-options">
              <label className="unique-checkbox-label">
                <input type="checkbox" id="keepSignedIn" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                Keep me signed in
              </label>
            </div>
            <button type="submit" className="unique-form-submit-button">
              Sign In
            </button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="unique-signup-link">
            <p>
              New to Sadguru? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
