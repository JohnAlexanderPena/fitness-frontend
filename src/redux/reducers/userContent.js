import { setTokenError, setContent } from "../actions/userContentActions";
export default (state = {}, action) => {
  switch (action.type) {
    case "SET_CONTENT":
      return setContent(state, action);
    case "SET_ERROR":
      return setTokenError(state, action);
    default:
      return state;
  }
};
