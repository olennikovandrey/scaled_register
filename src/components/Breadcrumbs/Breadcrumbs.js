import React from "react";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
  const isSignUpReady = useSelector(state => state.isPersonalInfoHidden);

  return (
    <div className="pointers-wrapper">
      <span className="item">Begining /&nbsp;</span>
      <span className="item" data-state={ !isSignUpReady ? "active" : "" }>Sign /&nbsp;</span>
      <span className="item">Personal info</span>
    </div>
  );
};

export default Breadcrumbs;
