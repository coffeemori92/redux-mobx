import { produce } from 'immer';

const initState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (prevState = initState, action) => { // 새로운 state 만들어주기
  return produce(prevState, draft => {
    switch (action.type) {
      case 'LOG_IN_REQUEST':
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case 'LOG_IN_SUCCESS':
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case 'LOG_IN_FAILURE':
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case 'LOG_OUT':
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

export default userReducer;