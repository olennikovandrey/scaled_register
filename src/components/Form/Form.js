import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import schema from "../../validation/schema.json";
import { SHOW_MODAL, SHOW_CHECKING, PUT_USER_DATA } from "../../store/actions/action-types";
import React, { useState } from "react";
import Ajv from "ajv";
import { useDispatch } from "react-redux";

const Form = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");
  const [ocean, setOcean] = useState("");
  const [hobby, setHobby] = useState("");

  const dispatch = useDispatch();

  const dateFormatChanger = (value) => {
    const date = new Date(value);
    setBirthday(date.toLocaleString().slice(0, 10));
  };

  const userData = {
    firstName: firstName,
    lastName: lastName,
    mobilePhone: phone,
    password: password,
    email: email,
    birthday: birthday,
    ocean: ocean,
    hobby: hobby,
    sex: sex
  };


  const completeHandler = (event) => {
    event.preventDefault();
    dispatch({ type: SHOW_CHECKING});
    dispatch({ type: PUT_USER_DATA, payload: userData});
    validateHandler();
    setTimeout(() => {
      dispatch({ type: SHOW_MODAL});
    }, 1000);
  };

  const validateHandler = () => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    if (validate(userData)) {
      console.log("puka");
    } else {
      console.log("piska");
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <SignUpInfo
          phone={ phone }
          email={ email }
          password={ password }
          setPhone={ setPhone }
          setEmail={ setEmail }
          setPassword={ setPassword }
        />
        <PersonalInfo
          firstName={ firstName }
          lastName={ lastName }
          sex={ sex }
          setFirstName={ setFirstName }
          setLastName={ setLastName }
          setSex={ setSex }
          setBirthday={ dateFormatChanger }
          setOcean={ setOcean }
          setHobby={ setHobby }
          completeHandler={ completeHandler }
        />
      </div>
    </>
  );
};

export default Form;
