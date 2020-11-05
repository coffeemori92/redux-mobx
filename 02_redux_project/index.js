const { createStore, compose, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { login, logout } = require('./actions/user');
const { addPost } = require('./actions/post');

const initState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware = store => next => action => {
  console.log('액션로깅', action);
  next(action);
};

const thunkMiddleware = store => next => action => {
  if(typeof action === 'function') { // 비동기
    return action(store.dispatch, store.getState);
  }
  next(action);
};

const enhancer = compose(
  applyMiddleware(firstMiddleware, thunkMiddleware)
);

const store = createStore(reducer, initState, enhancer);
store.subscribe(() => {
  console.log('changed');
});
console.log('1st', store.getState());

store.dispatch(login({
  id: 1,
  name: 'coffeemori',
  admin: true,
}));
console.log('2nd', store.getState());

store.dispatch(addPost({
  userId: 1,
  id: 1,
  content: 'Hello Redux!',
}));
console.log('3rd', store.getState());

store.dispatch(addPost({
  userId: 1,
  id: 2,
  content: 'Bye Redux',
}));
console.log('4th', store.getState());

store.dispatch(logout());
console.log('5th', store.getState());