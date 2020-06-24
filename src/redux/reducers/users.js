import { setTokenError, setUser, setBRUsers } from "../actions/userActions";
export default (state = { user: "" }, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return setUser(state, action);
    case "SET_ERROR":
      return setTokenError(state, action);
    case "GET_BR_USERS":
      return setBRUsers(state, action);
    default:
      return state;
  }
};
