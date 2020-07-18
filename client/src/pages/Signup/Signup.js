import React from "react";
import { AuthForm } from "../../components";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signUp } from '../../store/actions/authentication/authenticationActions';
import Styles from "./Signup.module.css";

export const Signup = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onHandleCallback = (username, password) => {
      dispatch(signUp(username, password));
      history.push("/login");
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.loginForm}>
        <AuthForm title="Sign up" callback={onHandleCallback} />
      </div>
    </div>
  );
};
