import API from "../Utils/API";
import jwtDecode from "jwt-decode";
import constants from "../Utils/constants";

export const getTodayPlacementDrives =
  (successCallback, failureCallback) => (dispatch) => {
    dispatch({ type: constants.GET_TODAY_PLACEMENT_DRIVE_REQUEST });
    API.get("/placement/todays")
      .then((response) => {
        dispatch({
          type: constants.GET_TODAY_PLACEMENT_DRIVE_SUCCESS,
          payload: response.data,
        });
        successCallback && successCallback(response.data);
      })
      .catch((errors) => {
        dispatch({ type: constants.GET_TODAY_PLACEMENT_DRIVE_FAILURE });
        failureCallback && failureCallback(errors.response.data);
      });
  };

export const getTodayEventData =
  (successCallback, failureCallback) => (dispatch) => {
    dispatch({ type: constants.GET_TODAY_EVENT_REQUEST });
    API.get("/clubevent/today")
      .then((response) => {
        dispatch({
          type: constants.GET_TODAY_EVENT_SUCCESS,
          payload: response.data,
        });
        successCallback && successCallback(response.data);
      })
      .catch((errors) => {
        dispatch({ type: constants.GET_TODAY_EVENT_FAILURE });
        failureCallback && failureCallback(errors.response.data);
      });
  };
