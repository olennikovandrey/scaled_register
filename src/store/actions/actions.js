import {
  SHOW_PERSONAL_INFO,
  SHOW_SIGN_UP_INFO,
  SHOW_CHECKING,
  SHOW_MODAL,
  PUT_USER_DATA,
  TRY_AGAIN
} from "./action-types";

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

export const showModal = () => {
  return {
    type: SHOW_MODAL
  };
};

export const putUserData = (data) => {
  return {
    type: PUT_USER_DATA,
    payload: data
  };
};

export const tryAgain = () => {
  return {
    type: TRY_AGAIN
  };
};
