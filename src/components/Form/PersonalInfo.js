import Select from "../Select/Select";
import { oceans, hobby } from "../../data/data";
import { SHOW_SIGN_UP_INFO } from "../../store/actions/action-types";
import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

const PersonalInfo = (props) => {
  const { firstName, lastName, setFirstName, setLastName, setSex, setBirthday, setOcean, setHobby } = props;
  const state = useSelector(state => state);
  const isHidden = state.isPersonalInfoHidden;
  const dispatch = useDispatch();

  const changeInfo = (event) => {
    event.preventDefault();
    dispatch({ type: SHOW_SIGN_UP_INFO });
  };

  return (
    <>
      <form className="personal-info" data-hidden={ isHidden }>
        <p className="personal-info__title">Personal Information</p>
        <label className="personal-info__input-label">
          First Name <b>*</b>
          <input
            type="text"
            value={ firstName }
            onChange={ (event) => setFirstName(event.target.value) }
            disabled={ isHidden }
          />
        </label>
        <label className="personal-info__input-label">
          Last Name <b>*</b>
          <input
            type="text"
            value={ lastName }
            onChange={ (event) => setLastName(event.target.value) }
            disabled={ isHidden }
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
              disabled={ isHidden }
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
              disabled={ isHidden }
            />
            <label htmlFor="female" className="sex-item__radio-label">Female</label>
          </div>
        </fieldset>
        <label className="personal-info__input-label">
          Birthday <b>*</b>
          <input
            type="date"
            onChange={ (event) => setBirthday(event.target.value) }
            disabled={ isHidden }
          />
        </label>
        <Select
          stateFunc={ setOcean }
          data={ oceans }
          labelText="Your favorite ocean"
          preClassName="ocean-select"
          isHidden={ isHidden }
        />
        <Select
          stateFunc={ setHobby }
          data={ hobby }
          labelText="Hobby"
          preClassName="hobby-select"
          isHidden={ isHidden }
        />
        <div className="personal-info__buttons-wrapper">
          <button onClick={(event) => changeInfo(event) } disabled={ isHidden }>Change Sign Up Information</button>
          <button disabled={ isHidden }>Complete</button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;

PersonalInfo.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setSex: PropTypes.func,
  setBirthday: PropTypes.func,
  setOcean: PropTypes.func,
  setHobby: PropTypes.func
};
