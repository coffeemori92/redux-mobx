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
        ...prev,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prev,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
      return {
        ...prev,
        compC: action.data,
      };
    default:
      return prev;
  }
};

const store = createStore(reducer, initState);
store.subscribe(() => { // react-redux 안에 들어있다.
                        // 화면 바꾸어 주는 코드
  console.log('changed');
});

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