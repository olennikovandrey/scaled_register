import React from "react";
import PropTypes from "prop-types";

const Select = (props) => {
  const { stateFunc, data, labelText, preClassName, isHidden } = props;

  const selectChanger = (stateFunc) => {
    if (isHidden) {
      return;
    }
    const selectSingle = document.querySelector(`.${ preClassName }__wrapper`);
    const selectSingleTitle = selectSingle.querySelector(`.${ preClassName }__title`);
    const selectSingleLabels = selectSingle.querySelectorAll(`.${ preClassName }__label`);

    selectSingle.getAttribute("data-state") === "active" ?
      selectSingle.setAttribute("data-state", "") :
      selectSingle.setAttribute("data-state", "active");

    for (let i = 0; i < selectSingleLabels.length; i ++) {
      selectSingleLabels[i].addEventListener("click", (event) => {
        selectSingleTitle.textContent = event.target.textContent;
        selectSingle.setAttribute("data-state", "");
        stateFunc(selectSingleTitle.textContent);
      });
    }

    document.addEventListener("click", (event) => {
      if (!event.target.matches(".ocean-select, .ocean-select *, .hobby-select, .hobby-select *")) {
        selectSingle.setAttribute("data-state", "");
      }
    });
  };

  return (
    <div className={`${ preClassName }`} >
      <label className={`${ preClassName }__select-name`} disabled={ isHidden }>
        { labelText } <b>*</b>
        <div className={`${ preClassName }__wrapper`} data-state="" disabled={ isHidden } id="ocean">
          <div
            className={`${ preClassName }__title`}
            onClick={ () => selectChanger(stateFunc) }
            disabled={ isHidden }
          >
          </div>
          <div className={`${ preClassName }__content`}>
            { data.map(item =>
              <React.Fragment key={ item }>
                <input id={ item } className={`${ preClassName }__input`} type="radio" name="singleSelect" />
                <label
                  htmlFor={ item }
                  className={`${ preClassName }__label`}
                  disabled={ isHidden }
                >
                  { item }
                </label>
              </React.Fragment>
            ) }
          </div>
        </div>
      </label>
    </div>
  );
};

Select.propTypes = {
  stateFunc: PropTypes.func,
  data: PropTypes.array,
  labelText: PropTypes.string,
  preClassName: PropTypes.string,
  isHidden: PropTypes.bool,
};

export default Select;
