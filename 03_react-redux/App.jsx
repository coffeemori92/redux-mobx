import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './actions/user';

const App = () => {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(login({
      id: 'coffeemori',
      password: '1234',
    }));
  }, []);
  return (
    <>
      { 
        user 
        ? <div>{user.nickname}</div> 
        : <div>'로그인 해주세요.'</div>
      }
      <button onClick={onClick}>로그인</button>
    </>
  );
};

export default App;