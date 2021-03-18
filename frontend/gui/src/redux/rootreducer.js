import { combineReducers } from "redux";
import { userReducer } from "./reducers/auth";

const rootReducers = combineReducers({
  user: userReducer,
});

export default rootReducers;
