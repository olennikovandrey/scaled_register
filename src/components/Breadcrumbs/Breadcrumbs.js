import React from "react";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
  const isSignUpInfoReady = useSelector(state => state.isSignUpInfoReady);
  const isPersonalInfoReady = useSelector(state => state.isPersonalInfoReady);
  const isFinished = useSelector(state => state.isFinished);

  return (
    <div className="pointers-wrapper">
      { !isFinished ? <span className="item">Begining /&nbsp;</span> : null }
      { !isFinished ? <span className="item" data-state={ isSignUpInfoReady ? "active" : "" }>Sign /&nbsp;</span> : null }
      { !isFinished ? <span className="item" data-state={ isPersonalInfoReady ? "active" : "" }>Personal info</span> : null }
    </div>
  );
};

export default Breadcrumbs;
