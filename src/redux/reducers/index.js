import { combineReducers } from "redux";
import users from "./users";
import userContent from "./userContent";
// import sidebarFilters from "./sidebarFilters";

export default combineReducers({
  users,
  userContent,
});
