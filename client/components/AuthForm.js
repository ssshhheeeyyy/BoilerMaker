import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../redux/auth';

const AuthForm = (props) => {
  const { name, displayName, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit">{displayName}</button>
        {/* {error && error.response && <div> {error.response.data} </div>} */}
      </form>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    // error: state.auth.error ? state.auth.error : '',
    // error: 'error',
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    // error: state.auth.error ? state.auth.error : '',
    // error: 'error',
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      console.log(evt.target.value);
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const SignUp = connect(mapSignup, mapDispatch)(AuthForm);
