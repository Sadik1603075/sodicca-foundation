import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../redux/actions/auth";

function Register(props) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState("");

  //Clear errors on load
  useEffect(() => {
    if (props.userState.isAuthenticated) {
      history.push("/");
    }
  }, [props.userState]);

  //Registration logic
  const register = (event) => {
    event.preventDefault();
    props.register({ email, username, password });
  };

  return (
    <motion.div
      initial={{ x: "110%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <form>
        <h2>Start your Journey</h2>

        {/* input div for username */}
        <div className="input_div">
          <div className="i">
            <i className="fas fa-user"></i>
          </div>
          <div>
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
        </div>

        {/* input div for email */}
        <div className="input_div">
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
            {errors.email && (
              <small className="textError">{errors.email}</small>
            )}
          </div>
        </div>

        {/* input div for password */}
        <div className="input_div">
          <div className="i">
            <i className="fas fa-lock"></i>
          </div>
          <div>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        {/* input div for confirm password */}
        <div className="input_div">
          <div className="i">
            <i className="fas fa-lock"></i>
          </div>
          <div>
            <input
              type="password"
              className="input"
              placeholder="Confirm Password"
              value={password2}
              onChange={(event) => setPassword2(event.target.value)}
            />
          </div>
        </div>

        <p style={{ color: "red", textAlign: "center", margin: "20px 0" }}>
          {errors}
        </p>

        <input
          type="submit"
          className="btn__submit"
          value="Register"
          onClick={register}
        />

        <div onClick={props.changeLogin} className="signup__link">
          Already Have an account? Login here.
        </div>
      </form>
    </motion.div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => dispatch(register(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
