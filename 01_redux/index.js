const { createStore } = require('redux');

const initState = {
  compA: 'a',
  compB: 12,
  compC: null
};

const reducer = (prev, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        compA: action.data,
        compB: 12,
        compC: null,
      }
  }
};

const store = createStore(reducer, initState);
console.log(store.getState());

// 액션 객체
// const changeCompA = {
//   type: 'CHANGE_COMP_A',
//   data: 'b',
// };

// 액션 함수
const changeCompA = data => {
  return {
    type: 'CHANGE_COMP_A',
    data,
  }
};

store.dispatch(changeCompA('b'));
console.log(store.getState());

