import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
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
          userData={ userData }
        />
      </div>
    </>
  );
};

export default Form;
