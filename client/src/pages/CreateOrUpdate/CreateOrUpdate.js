import React from "react";
import { CreateOrUpdateForm } from "../../components";
import { useDispatch } from "react-redux";
import { reqAddCentre, reqUpdateCentre } from '../../store/actions/shoppingCentres/shoppingCentresActions';
import { useHistory, useParams } from "react-router-dom";
import Styles from "./CreateOrUpdate.module.css";

export const CreateOrUpdate = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  let {
    centreId,
    centreName,
    centreStreetName,
    centreSuburb,
    centreState,
    centrePostCode
  } = useParams();
  const onHandleCreateCallback = (name, streetName, suburb, state, postCode) => {
    // console.log("Create get " + name, streetName, suburb, state, postCode);
    const address = { streetName, suburb, state, postCode };
    dispatch(reqAddCentre(name, address));
    history.push("/");
  };

  const onHandleUpdateCallback = (_id, name, streetName, suburb, state, postCode) => {
    // console.log("Update get " + _id, name, streetName, suburb, state, postCode);
    const address = { streetName, suburb, state, postCode };
    dispatch(reqUpdateCentre(_id, name, address));
    history.push("/");
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.createOrUpdateForm}>
        <span className={Styles.title}>{centreId ? "Update a centre" : "Create a new centre"}</span>
        {centreId ? (
          <CreateOrUpdateForm
            title="Submit"
            callback={onHandleUpdateCallback}
            id={centreId}
            name={centreName}
            streetName={centreStreetName}
            suburb={centreSuburb}
            state={centreState}
            postCode={centrePostCode}
          />
        ) : (
          <CreateOrUpdateForm title="Submit" callback={onHandleCreateCallback} />
        )}
      </div>
    </div>
  );
};
