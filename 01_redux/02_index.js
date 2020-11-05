const { createStore } = require('redux');

const initialState = {
  user: null,
  posts: [],
};

console.log(...initialState.posts)

const reducer = (prevState, action) => { // 새로운 state 만들어주기
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST':
      return {
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log('changed');
});

console.log('1st', store.getState());

const logIn = (data) => {
  return { // action
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return { // action
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  }
};

// --------------------------------------

store.dispatch(logIn({
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

store.dispatch(logOut());
console.log('5th', store.getState());