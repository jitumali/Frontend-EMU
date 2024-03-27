import API from "../Utils/API";
import jwtDecode from "jwt-decode";
import constants from "../Utils/constants";

export const createUserAction =
  (data, successCallback, failureCallback) => (dispatch) => {
    dispatch({ type: constants.CREATE_USER_REQUEST });
    API.post("/api/auth/register", data)
      .then((response) => {
        dispatch({
          type: constants.CREATE_USER_SUCCESS,
          payload: response.data,
        });
        successCallback && successCallback(response.data);
      })
      .catch((errors) => {
        dispatch({ type: constants.CREATE_USER_FAILURE });
        failureCallback && failureCallback(errors.response.data);
      });
  };

export const loginUserAction =
  (data, successCallback, failureCallback) => (dispatch) => {
    dispatch({ type: constants.LOGIN_USER_REQUEST });
    API.post("/api/auth/login", data)
      .then((response) => {
        dispatch({
          type: constants.LOGIN_USER_SUCCESS,
          payload: response.data,
        });
        const token = response.data.token;
        localStorage.setItem("access_token", token);
        successCallback && successCallback(response.data);
      })
      .catch((errors) => {
        dispatch({ type: constants.LOGIN_USER_FALIURE });
        failureCallback && failureCallback(errors);
      });
  };

export const setCurrentUser = () => () => {};
