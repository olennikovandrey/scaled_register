import Select from "../Select/Select";
import { oceans, hobby } from "../../data/data";
import React from "react";
import PropTypes from "prop-types";

const PersonalInfo = (props) => {
  const { firstName, lastName, setFirstName, setLastName, setSex, setBirthday, setOcean, setHobby, isPersonalInfoDisabled } = props;

  return (
    <>
      <form className="personal-info" data-state={ isPersonalInfoDisabled }>
        <p className="personal-info__title">Personal Information</p>
        <label className="personal-info__input-label">
          First Name <b>*</b>
          <input
            type="text"
            value={ firstName }
            onChange={ (event) => setFirstName(event.target.value) }
            disabled={ isPersonalInfoDisabled }
          />
        </label>
        <label className="personal-info__input-label">
          Last Name <b>*</b>
          <input
            type="text"
            value={ lastName }
            onChange={ (event) => setLastName(event.target.value) }
            disabled={ isPersonalInfoDisabled }
          />
        </label>
        <fieldset className="sex">
          <legend>Sex</legend>
          <div className="sex-item">
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              onChange={ (event) => setSex(event.target.value) }
              disabled={ isPersonalInfoDisabled }
            />
            <label htmlFor="male" className="sex-item__radio-label">Male</label>
          </div>
          <div className="sex-item">
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              onChange={ (event) => setSex(event.target.value) }
              disabled={ isPersonalInfoDisabled }
            />
            <label htmlFor="female" className="sex-item__radio-label">Female</label>
          </div>
        </fieldset>
        <label className="personal-info__input-label">
          Birthday <b>*</b>
          <input
            type="date"
            onChange={ (event) => setBirthday(event.target.value) }
            disabled={ isPersonalInfoDisabled }
          />
        </label>
        <Select
          stateFunc={ setOcean }
          data={ oceans }
          isPersonalInfoDisabled={ isPersonalInfoDisabled }
          labelText="Your favorite ocean"
          preClassName="ocean-select"
        />
        <Select
          stateFunc={ setHobby }
          data={ hobby }
          isPersonalInfoDisabled={ isPersonalInfoDisabled }
          labelText="Hobby"
          preClassName="hobby-select"
        />
        <div className="personal-info__buttons-wrapper">
          <button disabled={ isPersonalInfoDisabled }>Change SignUp Information</button>
          <button disabled={ isPersonalInfoDisabled }>Complete</button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;

PersonalInfo.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isPersonalInfoDisabled: PropTypes.bool,
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setSex: PropTypes.func,
  setBirthday: PropTypes.func,
  setOcean: PropTypes.func,
  setHobby: PropTypes.func
};
