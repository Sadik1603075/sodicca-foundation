import React, { useState } from "react";
import { motion } from "framer-motion";

function ResetPassword(props) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  //Set Reset Password Logic
  const resetPassword = (event) => {
    console.log("Reset password func called.\n");
  };

  return (
    <motion.div
      initial={{ x: "110%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <form>
        <h2>RESET YOUR PASSWORD</h2>

        {/* input div for email */}
        <p
          style={{
            textAlign: "center",
            color: "#333",
            marginTop: "10px",
            fontSize: "15px",
          }}
        >
          Please enter your email address below, and we will send you
          information to recover your account
        </p>

        <div className="input_div user">
          <div className="i">
            <i className="far fa-envelope"></i>
          </div>
          <div>
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors && <small className="textError">{errors}</small>}
          </div>
        </div>
        <input
          type="submit"
          className="btn__submit"
          value="Submit"
          onClick={resetPassword}
        />
        <div className="signup__link">
          <div onClick={props.changeRegister}>Haven't any account?</div>
          <div onClick={props.ChangeLogin}>Back to login</div>
        </div>
      </form>
    </motion.div>
  );
}

export default ResetPassword;
