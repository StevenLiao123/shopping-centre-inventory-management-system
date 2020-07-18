import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/authentication/authenticationActions";
import { reqAllShoppingCentres, reqDeleteCentre } from "../../store/actions/shoppingCentres/shoppingCentresActions";
import { CommonButton, CardList, useForceUpdate } from "../../components";
import Styles from "./Home.module.css";

export const Home = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  let  [,setState]=useState();
  const forceUpdate = useForceUpdate();
  const { shoppingCentres } = useSelector(state => state.shoppingCentres);
  const { user } = useSelector(state => state.authentication);

  useEffect(() => {
    dispatch(reqAllShoppingCentres());
  }, [dispatch]);

  const handleUpdate = () => {
    //passing empty object will re-render the component
    setState({});
  };

  const onHandleCreateCallback = () => {
    history.push(`/createOrUpdate`);
  };

  const onHandleLogoutCallback = () => {
    dispatch(logout());
    history.push("/login");
  };

  const onHandleUpdateCallback = (
    centreId,
    centreName,
    centreStreetName,
    centreSuburb,
    centreState,
    centrePostCode
  ) => {
    history.push(
      `/createOrUpdate/${centreId}/${centreName}/${centreStreetName}/${centreSuburb}/${centreState}/${centrePostCode}`
    );
  };

  const onHandleDeleteCallback = _id => {
    dispatch(reqDeleteCentre(_id));
    dispatch(reqAllShoppingCentres());
    handleUpdate();
    forceUpdate();
  };

  if (!user || !user._id) {
    history.push("/login");
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1>Welcome {user.username}!</h1>
        <CommonButton title="Logout" callback={onHandleLogoutCallback} />
      </div>
      <div className={Styles.main}>
        <div className={Styles.createBtn}>
          <CommonButton title="Create" callback={onHandleCreateCallback} />
        </div>
        <CardList
          centres={shoppingCentres}
          updateCallback={onHandleUpdateCallback}
          deleteCallback={onHandleDeleteCallback}
        />
      </div>
    </div>
  );
};
