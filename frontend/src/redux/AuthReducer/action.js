import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

export const login = (data) => (dispatch) => {
  // Complete login Functionality
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`https://nyka-213k.onrender.com/api/login`, data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      console.log(res.data);
    })
    .catch((err) => dispatch({ type: LOGIN_FAILURE }));
};

export const register = (obj) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("", obj)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};
