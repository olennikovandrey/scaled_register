/* eslint-disable no-debugger */
import Select from "../Select/Select";
import { oceans } from "../../data/data";
import { SHOW_SIGN_UP_INFO } from "../../store/actions/action-types";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

const PersonalInfo = (props) => {
  const { firstName, lastName, setFirstName, setLastName, setSex, setBirthday, setOcean, setHobby, completeHandler } = props;
  const state = useSelector(state => state);
  const isHidden = state.isPersonalInfoHidden;
  const dispatch = useDispatch();

  const changeInfo = (event) => {
    event.preventDefault();
    dispatch({ type: SHOW_SIGN_UP_INFO });
    setTimeout(() => {
      document.getElementById("pol").scrollIntoView({block: "center", behavior: "smooth"});
    },50);
  };

  return (
    <>
      <form className="personal-info" id="personalInfo" data-hidden={ isHidden }>
        <p className="personal-info__title">Personal Information</p>
        <label className="personal-info__input-label" disabled={ isHidden }>
          First Name <b>*</b>
          <input
            type="text"
            value={ firstName }
            onChange={ (event) => setFirstName(event.target.value) }
            disabled={ isHidden }
          />
        </label>
        <label className="personal-info__input-label" disabled={ isHidden }>
          Last Name <b>*</b>
          <input
            type="text"
            value={ lastName }
            onChange={ (event) => setLastName(event.target.value) }
            disabled={ isHidden }
          />
        </label>
        <fieldset className="sex" disabled={ isHidden }>
          <legend>Sex <b>*</b></legend>
          <div className="sex-item" disabled={ isHidden }>
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              onChange={ (event) => setSex(event.target.value) }
              disabled={ isHidden }
            />
            <label htmlFor="male" className="sex-item__radio-label" disabled={ isHidden }>Male</label>
          </div>

          <div className="sex-item" disabled={ isHidden }>
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              onChange={ (event) => setSex(event.target.value) }
              disabled={ isHidden }
            />
            <label htmlFor="female" className="sex-item__radio-label" disabled={ isHidden }>Female</label>
          </div>
        </fieldset>
        <label className="personal-info__input-label" disabled={ isHidden }>
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
        <label className="personal-info__input-label" disabled={ isHidden }>
          <CheckboxGroup setHobby={ setHobby } isHidden={ isHidden }/>
        </label>
        <div className="personal-info__buttons-wrapper">
          <button onClick={ (event) => changeInfo(event) } disabled={ isHidden }>Change Sign Up Information</button>
          <button onClick={ (event) => completeHandler(event) } disabled={ isHidden }>Complete</button>
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
  setHobby: PropTypes.func,
  completeHandler: PropTypes.func
};
