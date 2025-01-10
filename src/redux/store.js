import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export default store;
// Compare this snippet from src/redux/user/user.actions.jsx:
