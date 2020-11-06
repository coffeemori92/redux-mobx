import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = store => next => action => {
  console.log('로깅', action);
  next(action);
};

const thunkMiddleware = store => next => action => {
  if(typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  next(action);
};

const enhancer = process.env.NODE_ENV === 'production'
  ? compose(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware
    )
  )
  : composeWithDevTools(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware
    )
  );

const store = createStore(rootReducer, initState, enhancer);

export default store;