import axios from "axios";
import { stopSubmit } from "redux-form";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/api3/user",
      tokenConfig(getState)
    );
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// SET USER
const setUser = (data) => {
  // console.log("Form set user: " + data);
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const setRegisterUser = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

// LOGIN USER
export const login = ({ username, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  try {
    axios.post("http://127.0.0.1:8000/api3/login", body, config).then((res) => {
      dispatch(setUser(res.data));
    });
  } catch (err) {
    return {
      type: LOGIN_FAIL,
    };
    // dispatch(stopSubmit("loginForm", err.response.data));
  }
};

//LOG OUT
export const logout = (userInfo) => (dispatch) => {
  axios
    .post(
      "http://127.0.0.1:8000/api3/logout",
      null,
      tokenConfig(userInfo.token)
    )
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    });
};

// REGISTER USER
export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  try {
    axios
      .post("http://127.0.0.1:8000/api3/register", body, config)
      .then((res) => {
        const userInfo = { ...res.data, ...res.token };
        dispatch(setRegisterUser(userInfo));
      });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: REGISTER_FAIL,
    });
    dispatch(stopSubmit("registerForm", err.response.data));
  }
};

// helper function
export const tokenConfig = (token) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
