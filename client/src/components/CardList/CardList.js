import React from "react";
import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import Styles from "./CardList.module.css";

export const CardList = props => {
  return (
    <div className={Styles.container}>
      {!props && <h1>No Data!</h1>}
      {props.centres &&
        props.centres.map((centre, index) => (
          <Card
            key={`centre-${index}`}
            name={centre.name}
            streetName={centre.address.streetName}
            suburb={centre.address.suburb}
            state={centre.address.state}
            postCode={centre.address.postCode}
            _id={centre._id}
            callback={props.callback}
            updateCallback={props.updateCallback}
            deleteCallback={props.deleteCallback}
          />
        ))}
    </div>
  );
};

CardList.propTypes = {
  centres: PropTypes.array,
  updateCallback: PropTypes.func,
  deleteCallback: PropTypes.func
};
