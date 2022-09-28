//import { FormInput } from "../../styled-components/styled-components";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import schema from "../../validation/schema.json";
import React, {useState} from "react";

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

  const [isPersonalInfoDisabled, setIsPersonalInfoDisabled] = useState(true);

  const dateFormatChanger = (value) => {
    const date = new Date(value);
    setBirthday(date.toLocaleString().slice(0, 10));
  };


  //const Ajv = require("ajv");
  //const ajv = new Ajv({allErrors: true});

  //const validate = ajv.compile(schema);
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
  //const valid = validate(userData);
  //if (!valid) console.log(validate.errors);
  //console.log(valid);

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
          setIsPersonalInfoDisabled={ setIsPersonalInfoDisabled }
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
          isPersonalInfoDisabled={ isPersonalInfoDisabled }
        />
      </div>
    </>
  );
};

export default Form;
