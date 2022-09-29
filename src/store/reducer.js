import { SHOW_PERSONAL_INFO, SHOW_SIGN_UP_INFO, SHOW_CHECKING } from "./actions/action-types";

export const initState = {
  isPersonalInfoHidden: true,
  isSignUpInfoHidden: false,
  isCheckingActive: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
  case SHOW_PERSONAL_INFO: {
    return {
      ...state,
      isPersonalInfoHidden: false,
      isSignUpInfoHidden: true,
      isCheckingActive: false
    };
  }

  case SHOW_SIGN_UP_INFO: {
    return {
      ...state,
      isPersonalInfoHidden: true,
      isSignUpInfoHidden: false,
      isCheckingActive: false
    };
  }

  case SHOW_CHECKING: {
    return {
      ...state,
      isCheckingActive: true
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
