import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from './actions/user';

class App extends Component {
  onClick = () => {
    this.props.dispatch(login({
      id: 'coffeemori',
      password: '1234',
    }));
  };
  onLogout = () => {
    this.props.dispatch(logout());
  };
  render() {
    const { user } = this.props;
    <>
      { 
        user 
        ? <div>{user.nickname}</div> 
        : <div>'로그인 해주세요.'</div>
      }
      <button onClick={this.onClick}>로그인</button>
    </>
  }
}

const mapStateToProps = state => ({
  user: state.user,
}); // reselect

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);