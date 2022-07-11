import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";

import recipe from "./recipe";
export default combineReducers({
  alert,
  auth,

  recipe,
});
