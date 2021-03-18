import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Auth.css";

// Components
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

// Images
import loginImage from "../../assets/images/Auth/login.svg";
import startImage from "../../assets/images/Auth/register.svg";
import resetImage from "../../assets/images/Auth/reset.svg";

function Auth() {
  const [authType, setAuthType] = useState("login");

  const changeLogin = () => {
    setAuthType("login");
  };
  const changeRegister = () => {
    setAuthType("register");
  };
  const changeResetPassword = () => {
    setAuthType("resetPassword");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="auth">
      <div className="auth__container auth__container-image">
        <div className="auth__image">
          {authType === "login" ? (
            <motion.img
              initial={{ y: "100vh" }}
              animate={{ y: "0" }}
              src={loginImage}
              alt="Login"
              width="100%"
            />
          ) : authType === "register" ? (
            <motion.img
              initial={{ y: "100vh" }}
              animate={{ y: "0" }}
              src={startImage}
              alt="Register"
              width="100%"
            />
          ) : (
            <motion.img
              initial={{ y: "100vh" }}
              animate={{ y: "0" }}
              src={resetImage}
              alt="Reset"
              width="100%"
            />
          )}
        </div>
      </div>
      <div className="auth__container">
        <div className="auth_function">
          {authType === "login" ? (
            <Login
              changeRegister={changeRegister}
              changeForgot={changeResetPassword}
            />
          ) : authType === "register" ? (
            <Register changeLogin={changeLogin} />
          ) : (
            <ResetPassword
              changeRegister={changeRegister}
              ChangeLogin={changeLogin}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
