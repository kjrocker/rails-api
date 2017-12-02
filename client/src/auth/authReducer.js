import { LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGOUT_USER, LOGIN_USER_SUCCESS } from './actionTypes';

const initialState = {
    token: null,
    currentUser: {},
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        statusText: null
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: payload.token,
        currentUser: payload.user,
        statusText: 'You are now logged in.'
      };
    case LOGIN_USER_FAILURE:
      const { status, statusText } = payload.error.response
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        currentUser: {},
        statusText: `Authentication Error: ${status} ${statusText}`
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        currentUser: {},
        statusText: 'You are now logged out.'
      };
    default:
      return state
  }
};

export default reducer;
