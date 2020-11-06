export const loginRequest = data => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};

export const loginSuccess = data => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};

export const loginFailure = error => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  };
};

export const login = data => {
  return (dispatch, getState) => {
    dispatch(loginRequest(data));
    try {
      setTimeout(() => {
        dispatch(loginSuccess({
          userId: 1,
          nickname: 'coffeemori',
        }));
      }, 3000);
    } catch(error) {
      dispatch(loginFailure(error));
    }
  };
}

export const logout = () => {
  return {
    type: 'LOG_OUT'
  };
};