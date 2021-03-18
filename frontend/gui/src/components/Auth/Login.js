import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { login } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (props.userState.isAuthenticated) {
      history.push("/");
    }
  }, [props.userState]);

  //login logic
  const loginAction = (event) => {
    event.preventDefault();
    const user = { username, password };
    props.login(user);
  };

  return (
    <motion.div
      initial={{ x: "110%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <form>
        <h2>WELCOME</h2>

        {/* input div for email */}
        <div className="input_div user">
          <div className="i">
            <i className="far fa-envelope"></i>
          </div>
          <div className="inputDiv">
            <input
              type="text"
              className="input"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </div>

        {/* input div for password */}
        <div className="input_div pass">
          <div className="i">
            <i className="fas fa-lock"></i>
          </div>
          <div className="inputDiv">
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="textError">{errors && <small>{errors}</small>}</div>

        <input
          type="submit"
          className="btn__submit"
          value="Login"
          onClick={loginAction}
        />

        <div className="signup__link">
          <div onClick={props.changeRegister}>Haven't any account?</div>
          <div onClick={props.changeForgot}>Forget password?</div>
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
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
