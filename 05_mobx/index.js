const { observable, autorun, runInAction, reaction, action } = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});

autorun(() => {
  console.log('changed', state.compA);
});

reaction(() => {
  return state.compB;
}, () => {
  console.log('reaction', state.compB);
});

const change = action(() => {
  state.compA = 'c';
  state.compB = 'A';
  state.compC = 'hello';
});

runInAction(() => {
  state.compA = 'c';
});

runInAction(() => {
  state.compA = 'A';
  state.compC = 'hello';
});

