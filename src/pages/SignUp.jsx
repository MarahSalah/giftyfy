import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from '../assets/logo.jpg';
import googleLogo from '../assets/google.png';

const SignUp = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSignUp = async () => {
    if (!agreeToTerms) {
      alert("You must agree to the terms of service.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setPasswordError("Password must be at least 8 characters and include numbers, lowercase and uppercase letters, and special characters.");
      return;
    } else {
      setPasswordError("");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
      });

      console.log("User registered successfully", response.data);
      setRegistrationMessage("User registered successfully");
      setShowSuccessModal(true);
      
    } catch (error) {
      console.error("Registration failed", error);
      setRegistrationMessage("Registration failed");
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const signInWithGoogle = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };  const handleGoogleSignUp = () => {
    window.location.href = "http://localhost:3001/google";
  };

  return (
    <section style={{ background: "rgb(255,252,252)" }} className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          <img src={logo} style={{ width: "8rem" }} alt=" Logo" />
        </a>
        
        <div style={{ borderRadius: "8px", border: "1px solid #A5A5A5", boxShadow: "0px 0px 10px rgb(255, 252, 252)", padding: "20px", background: "(#fffcfc)" }} className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
            <h1 style={{ color: "(#fffff)" }} className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up for a new account
            </h1>
            <form className="space-y-2 md:space-y-2">
              <div>
                <label htmlFor="name" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-(#fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-(#fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              </div>
              <div>
                <label htmlFor="password" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-(#fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
              </div>
              <div>
                <label htmlFor="confirm-password" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input
                  type="password"
                  name="confirm-password"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-(#fffff)) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      style={{ width: "4px", height: "4px", border: "1px solid #A5A5A5", borderRadius: "4px", background: "white" }}
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" style={{ color: "rgb(92, 92, 66)" }} className="text-gray-500 dark:text-gray-300">
                      I agree to the <Link to="/terms" className="text-primary-600 hover:underline dark:text-primary-500">Terms of Service</Link>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleSignUp}
                  style={{ background: "rgb(247, 36, 87)", border: "2px solid #A5A5A5", borderRadius: "8px", color: "white", height: "3rem", width: "100%" }}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  type="button"
                >
                  Sign up
                </button>
              </div>
           
          
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
             already have account? <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
            </p>
            
            </form>
          </div>
        </div>
      </div>
         
         
      
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow p-4 dark:bg-gray-800">
            <h2 style={{ color: "rgb(92, 92, 66)" }} className="text-lg font-semibold mb-2">Registration Successful</h2>
            <p style={{ color: "rgb(92, 92, 66)" }} className="text-gray-700">You have successfully registered.</p>
            <button
              style={{ color: "rgb(247, 36, 87)", cursor: "pointer" }}
              onClick={handleCloseSuccessModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignUp;
