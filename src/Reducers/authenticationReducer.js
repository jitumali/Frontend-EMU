import constants from "../Utils/constants";

const initialState = {
  isRegisterUserLoading: false,
  isLoginUserLoading: false,
  userDetails: {},
};

export const authendticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CREATE_USER_REQUEST:
      return {
        ...state,
        isRegisterUserLoading: true,
      };
    case constants.CREATE_USER_SUCCESS:
      return {
        ...state,
        isRegisterUserLoading: false,
      };
    case constants.CREATE_USER_FAILURE:
      return {
        ...state,
        isRegisterUserLoading: false,
      };
    case constants.LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoginUserLoading: true,
      };
    case constants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoginUserLoading: false,
        userDetails: action.payload,
      };
    case constants.LOGIN_USER_FALIURE:
      return {
        ...state,
        isLoginUserLoading: false,
      };
    default:
      return state;
  }
};
