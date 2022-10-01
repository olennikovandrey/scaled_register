/* eslint-disable no-debugger */
import { SHOW_PERSONAL_INFO } from "../../store/actions/action-types";
import React from "react";
import PropTypes from "prop-types";
import IMask from "imask";
import { useDispatch, useSelector } from "react-redux";

const SignUpInfo = (props) => {
  const { email, password, setPhone, setEmail, setPassword, setConfirmPassword } = props;
  const isHidden = useSelector(state => state.isSignUpInfoHidden);
  const dispatch = useDispatch();

  const phoneChanger = (event) => {
    setPhone(event.target.value);
    const phoneInput = document.getElementById("phone");
    const maskOptions = {
      mask: "+{375}000000000"
    };
    const mask = IMask(phoneInput, maskOptions);
    mask.updateValue();
  };

  const signUpSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: SHOW_PERSONAL_INFO });
    document.getElementById("personalInfo").scrollIntoView({block: "center", behavior: "smooth"});
  };

  return (
    <>
      <form className="sign-up" id="pol" onSubmit={ (event) => signUpSubmit(event)} data-hidden={ isHidden }>
        <p className="sign-up__title ">Sign Up Information</p>
        <label className="sign-up__input-label" disabled={ isHidden }>
          Mobile phone <b>*</b>
          <input
            placeholder="+375*********"
            id="phone"
            type="text"
            onChange={ (event) => phoneChanger(event) }
            disabled={ isHidden }
          />
        </label>
        <label className="sign-up__input-label" disabled={ isHidden }>
              Your email <b>*</b>
          <input
            placeholder="example@mail.com"
            value={ email }
            type="email"
            onChange={ (event) => setEmail(event.target.value) }
            disabled={ isHidden }
          />
        </label>
        <label className="sign-up__input-label" disabled={ isHidden }>
          Password <b>*</b>
          <input
            placeholder="From 8 to 20 symbols"
            value={ password }
            type="password"
            onChange={ (event) => setPassword(event.target.value) }
            disabled={ isHidden }
          />
        </label>
        <label className="sign-up__input-label" disabled={ isHidden }>
          Repeat password <b>*</b>
          <input
            placeholder="Repeat your password"
            type="password"
            onChange={ (event) => setConfirmPassword(event.target.value) }
            disabled={ isHidden }
          />
        </label>
        <button type="submit" disabled={ isHidden }>Next</button>
      </form>
    </>
  );
};

export default SignUpInfo;

SignUpInfo.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  setPhone: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  setConfirmPassword: PropTypes.func
};
