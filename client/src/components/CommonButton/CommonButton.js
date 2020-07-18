import React from "react";
import PropTypes from "prop-types";
import Styles from "./CommonButton.module.css";

export const CommonButton = props => {
  return (
    <button className={Styles.container} data-testid="test-button" onClick={props.callback}>{props.title}</button>
  );
};

CommonButton.propTypes = {
  title: PropTypes.string,
  callback: PropTypes.func
};

