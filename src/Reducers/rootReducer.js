import { combineReducers } from "@reduxjs/toolkit";
const allReducers = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP_DATA") {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;
