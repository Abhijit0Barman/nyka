import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../actionTypes";

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get(`https://nyka-213k.onrender.com/api/products`)
    .then((res) => dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_PRODUCT_FAILURE }));
};
