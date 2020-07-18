import React from "react";
import PropTypes from "prop-types";
import { CommonButton } from "../../components";
import Styles from "./Card.module.css";

export const Card = props => {
  return (
    <div className={Styles.container}>
      <div className={Styles.body}>
        <div
          className={Styles.left}
        >
          <span data-testid="test-name">Name: {props.name}</span>
          <span data-testid="test-streetName">Street Name: {props.streetName}</span>
          <span data-testid="test-suburb">Suburb: {props.suburb}</span>
          <span data-testid="test-state">State: {props.state}</span>
          <span data-testid="test-postCode">Post Code: {props.postCode}</span>
        </div>
        <div className={Styles.right}>
          <CommonButton
            title="Update"
            data-testid="update-btn"
            callback={() =>
            props.updateCallback(
                props._id,
                props.name,
                props.streetName,
                props.suburb,
                props.state,
                props.postCode
              )
            }
          />
          <CommonButton title="Delete" callback={() => props.deleteCallback(props._id)} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  _id: PropTypes.string,
  streetName: PropTypes.string,
  suburb: PropTypes.string,
  state: PropTypes.string,
  postCode: PropTypes.string,
  updateCallback: PropTypes.func,
  deleteCallback: PropTypes.func,
  callback: PropTypes.func
};
