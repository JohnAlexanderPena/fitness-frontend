export const setUser = (state = {}, action) => {
  console.log(action);
  const { username, type } = action;
  return {
    ...state,
    type,
    user: username,
  };
};
export const setTokenError = (state = {}, action) => {
  const { error } = action;
  return {
    ...state,
    error,
  };
};

export const setBRUsers = (state = {}, action) => {
  const { payload } = action;
  return {
    ...state,
    payload,
  };
};
