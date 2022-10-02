/* eslint-disable no-debugger */
import React, { useState } from "react";
import PropTypes from "prop-types";

const CheckboxGroup = ({ setHobby, isHidden }) => {
  const [isSportChecked, setIsSportChecked] = useState(false);
  const [isBeautyChecked, setIsBeautyChecked] = useState(false);
  const [isITChecked, setIsITChecked] = useState(false);
  const [isPetsChecked, setIsPetsChecked] = useState(false);
  const [allHobbies, setAllHobbies] = useState([]);

  const stateChanger = (event, stateFn, stateValue) => {
    stateFn(!stateValue);
    if (!allHobbies.includes(event.target.name)) {
      const newHobbies = [...allHobbies, event.target.name];
      setAllHobbies(newHobbies);
      setHobby(newHobbies);
    } else {
      const newHobbies = allHobbies.filter(item => item !== event.target.name);
      setAllHobbies(newHobbies);
      setHobby(newHobbies);
    }
  };

  return (
    <fieldset className="hobby" disabled={ isHidden } id="hobby">
      <legend>Hobby <b>*</b></legend>
      <label htmlFor="Sport" disabled={ isHidden } >
        <input
          id="Sport"
          type="checkbox"
          name="Sport"
          checked={ isSportChecked }
          onChange={ (event) => stateChanger(event, setIsSportChecked, isSportChecked) }
          disabled={ isHidden }
        />
        Sport
      </label>
      <label htmlFor="Beauty" disabled={ isHidden } >
        <input
          id="Beauty"
          type="checkbox"
          name="Beauty"
          checked={ isBeautyChecked }
          onChange={ (event) => stateChanger(event, setIsBeautyChecked, isBeautyChecked) }
          disabled={ isHidden }
        />
        Beauty
      </label>
      <label htmlFor="IT" disabled={ isHidden } >
        <input
          id="IT"
          type="checkbox"
          name="IT"
          checked={ isITChecked }
          onChange={ (event) => stateChanger(event, setIsITChecked, isITChecked) }
          disabled={ isHidden }
        />
        IT
      </label>
      <label htmlFor="Pets" disabled={ isHidden } >
        <input
          id="Pets"
          type="checkbox"
          name="Pets"
          checked={ isPetsChecked }
          onChange={ (event) => stateChanger(event, setIsPetsChecked, isPetsChecked) }
          disabled={ isHidden }
        />
        Pets
      </label>
    </fieldset>
  );
};

export default CheckboxGroup;

CheckboxGroup.propTypes = {
  setHobby: PropTypes.func,
  isHidden: PropTypes.bool
};
