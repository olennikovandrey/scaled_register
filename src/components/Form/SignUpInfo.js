/* eslint-disable no-console */
/* eslint-disable no-debugger */
import { SHOW_PERSONAL_INFO } from "../../store/actions/action-types";
import signUpSchema from "../../validation/signUpSchema.json";
import React, { useState } from "react";
import PropTypes from "prop-types";
import IMask from "imask";
import { useDispatch, useSelector } from "react-redux";
import Ajv from "ajv";

const SignUpInfo = (props) => {
  const { email, phone, password, setPhone, setEmail, setPassword } = props;
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const isHidden = useSelector(state => state.isSignUpInfoHidden);
  const dispatch = useDispatch();

  const signUpUserData = {
    mobilePhone: phone,
    password: password,
    email: email
  };

  const phoneChanger = (event) => {
    setPhone(event.target.value);
    const phoneInput = document.getElementById("mobilePhone");
    const maskOptions = {
      mask: "+{375}000000000"
    };
    const mask = IMask(phoneInput, maskOptions);
    mask.updateValue();
  };

  const signUpSubmit = (event) => {
    event.preventDefault();
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(signUpSchema);

    document.getElementById("repeatedPassword").setAttribute("data-valid", "invalid");

    if (validate(signUpUserData) && password === repeatedPassword) {
      dispatch({ type: SHOW_PERSONAL_INFO });
      setTimeout(() => {
        document.getElementById("personalInfo").scrollIntoView({ block: "center", behavior: "smooth" });
      },50);
      const fieldsIds = ["mobilePhone", "email", "password", "repeatedPassword"];
      fieldsIds.forEach(item =>
        document.getElementById(`${ item }`)
          .setAttribute("data-valid", ""));
    } else {
      console.log(validate.errors);

      const fieldsIds = ["mobilePhone", "email", "password"];
      fieldsIds.forEach(item =>
        document.getElementById(`${ item }`)
          .setAttribute("data-valid", ""));

      validate.errors !== null && validate.errors.forEach(item =>
        document.getElementById(`${ item.instancePath.slice(1) }`)
          .setAttribute("data-valid", "invalid"));
    }
  };

  return (
    <>
      <form className="sign-up" id="signUpInfo" onSubmit={ (event) => signUpSubmit(event)} data-hidden={ isHidden }>
        <p className="sign-up__title ">Sign Up Information</p>
        <label className="sign-up__input-label" disabled={ isHidden }>
          Mobile phone <b>*</b>
          <input
            placeholder="+375*********"
            id="mobilePhone"
            type="text"
            disabled={ isHidden }
            onChange={ (event) => phoneChanger(event) }
          />
        </label>
        <label className="sign-up__input-label" disabled={ isHidden }>
              Your email <b>*</b>
          <input
            placeholder="example@mail.com"
            id="email"
            type="email"
            value={ email }
            disabled={ isHidden }
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label className="sign-up__input-label" disabled={ isHidden }>
          Password <b>*</b>
          <input
            placeholder="From 8 to 20 symbols"
            id="password"
            type="password"
            value={ password }
            disabled={ isHidden }
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <label className="sign-up__input-label" disabled={ isHidden }>
          Repeat password <b>* </b>
          <input
            placeholder="Repeat your password"
            id="repeatedPassword"
            type="password"
            value={ repeatedPassword }
            disabled={ isHidden }
            onChange={ (event) => setRepeatedPassword(event.target.value) }
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
  phone: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  setPhone: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func,
  setConfirmPassword: PropTypes.func
};
