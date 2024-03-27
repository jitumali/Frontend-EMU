import { combineReducers } from "@reduxjs/toolkit";
import { authendticationReducer } from "./authenticationReducer";
import { timeFrameDataReducer } from "./timeFrameDataReducer";
const allReducers = combineReducers({
  authentication: authendticationReducer,
  timeFrameData: timeFrameDataReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP_DATA") {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;
