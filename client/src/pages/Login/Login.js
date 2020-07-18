import React from "react";
import { AuthForm } from "../../components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authentication/authenticationActions";
import Styles from "./Login.module.css";

export const Login = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authentication);
  const onHandleCallback = (username, password) => {
    dispatch(login(username, password));
  };

  if (user && user._id) {
    history.push("/");
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.loginForm}>
        <AuthForm title="Login" callback={onHandleCallback} />
        <a href="/signup">Create a new account!</a>
      </div>
    </div>
  );
};
