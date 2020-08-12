export const setContent = (state = {}, action) => {
  console.log(action);
  const { articles } = action;
  return {
    ...state,
    content: articles,
  };
};
export const setTokenError = (state = {}, action) => {
  const { error } = action;
  return {
    ...state,
    error,
  };
};
