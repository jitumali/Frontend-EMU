import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/rootReducer.js";
import { logger } from "redux-logger";

const middleware = [logger];
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
