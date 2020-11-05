const login = () => { // async action creator
  return (dispatch, getState) => {
    dispatch(loginRequest(data));
    setTimeout(() => {
      dispatch(loginSuccess({
        userId: 1,
        nickname: 'coffeermori',
      }));
    }, 2000);
  };
};

const loginRequest = data => {
  return {
    type: 'LOGIN_REQUEST',
    data,
  };
};

const loginSuccess = data => {
  return {
    type: 'LOGIN_SUCCESS',
    data,
  };
};

const login = (data) => { // action creator
  return { // action
    type: 'LOG_IN',
    data,
  };
};

const logout = () => {
  return { // action
    type: 'LOG_OUT',
  };
};

module.exports = {
  login, logout
};