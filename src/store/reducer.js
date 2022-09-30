import { SHOW_PERSONAL_INFO,
  SHOW_SIGN_UP_INFO,
  SHOW_CHECKING,
  SHOW_MODAL,
  PUT_USER_DATA,
  TRY_AGAIN } from "./actions/action-types";

export const initState = {
  isPersonalInfoHidden: true,
  isSignUpInfoHidden: false,
  isCheckingActive: false,
  isSignUpInfoReady: false,
  isPersonalInfoReady: false,
  isFinished: false,
  isModalActive: false,
  userData: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
  case SHOW_PERSONAL_INFO: {
    return {
      ...state,
      isPersonalInfoHidden: false,
      isSignUpInfoHidden: true,
      isCheckingActive: false,
      isSignUpInfoReady: true
    };
  }

  case SHOW_SIGN_UP_INFO: {
    return {
      ...state,
      isPersonalInfoHidden: true,
      isSignUpInfoHidden: false,
      isCheckingActive: false,
      isPersonalInfoReady: false,
      isSignUpInfoReady: false,
    };
  }

  case SHOW_CHECKING: {
    return {
      ...state,
      isCheckingActive: true
    };
  }

  case SHOW_MODAL: {
    return {
      ...state,
      isCheckingActive: false,
      isModalActive: true,
      isSignUpInfoReady: true,
      isPersonalInfoReady: true,
      isFinished: true,
    };
  }

  case PUT_USER_DATA: {
    return {
      ...state,
      userData: action.payload
    };
  }

  case TRY_AGAIN: {
    return {
      isPersonalInfoHidden: true,
      isSignUpInfoHidden: false,
      isCheckingActive: false,
      isSignUpInfoReady: false,
      isPersonalInfoReady: false,
      isFinished: false,
      isModalActive: false,
      userData: {}
    };
  }

  default: {
    return {
      ...state
    };
  }
  }
};

export default reducer;
