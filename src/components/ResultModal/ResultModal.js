import { TRY_AGAIN } from "../../store/actions/action-types";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ResultModal = () => {
  const userData = useSelector(state => state.userData);
  const dispatch = useDispatch();

  return (
    <section className="modal">
      <div>
        <h1>Your information</h1>
        <div className="modal__block">
          <h3>Sign up information:</h3>
          <div className="modal__item">
            <span className="modal__position-label">Mobile phone:</span>
            <span className="modal__position-content">{ userData.mobilePhone }</span>
          </div>
          <div className="modal__item">
            <span className="modal__position-label">Email:</span>
            <span className="modal__position-content">{ userData.email }</span>
          </div>
          <div className="modal__item">
            <span className="modal__position-label">Password:</span>
            <span className="modal__position-content">{ userData.password }</span>
          </div>
        </div>

        <div className="modal__block">
          <h3>Personal information:</h3>
          <div className="modal__item">
            <span className="modal__position-label">First name:</span>
            <span className="modal__position-content">{ userData.firstName }</span>
          </div>
          <div className="modal__item">
            <span className="modal__position-label">Last name:</span>
            <span className="modal__position-content">{ userData.lastName }</span>
          </div>
          <div className="modal__item">
            <span className="modal__position-label">Sex:</span>
            <span className="modal__position-content">{ userData.sex }</span>
          </div>
          <div className="modal__item">
            <span className="modal__position-label">Birthday:</span>
            <span className="modal__position-content">{ userData.birthday }</span>
          </div>
          <div className="modal__item">
            <span className="modal__position-label">Your favorite ocean:</span>
            <span className="modal__position-content">{ userData.ocean }</span>
          </div>
          <div className="modal__item">
            <span className="modal__position-label">Hobby:</span>
            <span className="modal__position-content">{ userData.hobby.toString().split(",").join(", ") }</span>
          </div>
        </div>
      </div>
      <button onClick={ () => dispatch({ type: TRY_AGAIN }) }>Try again</button>
    </section>
  );
};

export default ResultModal;
