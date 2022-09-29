import { SHOW_PERSONAL_INFO, SHOW_SIGN_UP_INFO, SHOW_CHECKING } from "./action-types";

export const showPersonalInfo = () => {
  return {
    type: SHOW_PERSONAL_INFO
  };
};

export const showSignUplInfo = () => {
  return {
    type: SHOW_SIGN_UP_INFO
  };
};

export const showChecking = () => {
  return {
    type: SHOW_CHECKING
  };
};
