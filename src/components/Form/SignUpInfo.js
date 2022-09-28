import React from "react";
import PropTypes from "prop-types";
import IMask from "imask";

const SignUpInfo = (props) => {
  const { phone, email, password, setPhone, setEmail, setPassword } = props;

  const phoneChanger = (event) => {
    setPhone(event.target.value);
    const phoneInput = document.getElementById("phone");
    const maskOptions = {
      mask: "+{375} (00) 000-00-00"
    };
    // eslint-disable-next-line no-unused-vars
    const mask = IMask(phoneInput, maskOptions);
  };

  return (
    <>
      <form className="sign-up">
        <p className="sign-up__title ">Sign Up Information</p>
        <label className="personal-info__input-label">
          Mobile phone <b>*</b>
          <input
            placeholder="+375 (00) 000-00-00"
            value={ phone }
            id="phone"
            type="text"
            onChange={ (event) => phoneChanger(event) }
          />
        </label>
        <label className="personal-info__input-label">
              Your email <b>*</b>
          <input
            placeholder="example@mail.com"
            value={ email }
            type="email"
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label className="personal-info__input-label">
          Password <b>*</b>
          <input
            placeholder="From 8 to 20 symbols"
            value={ password }
            type="password"
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <label className="personal-info__input-label">
          Repeat password <b>*</b>
          <input
            placeholder="Repeat your password"
            type="password"
          />
        </label>
        <button>Next</button>
      </form>
    </>
  );
};

export default SignUpInfo;

SignUpInfo.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  setPhone: PropTypes.func,
  setEmail: PropTypes.func,
  setPassword:PropTypes.func
};
