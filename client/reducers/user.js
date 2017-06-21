export default function reducer(state = {
  loggedIn: false,
  errorMessage: null,
  user: null,
}, action) {
  switch (action.type) {
    case 'REG_USER_FULFILLED': {
      return {
        ...state,
        loggedIn: true,
        errorMessage: null,
        user: action.payload.email,
      };
    }
    case 'REG_USER_REJECTED': {
      return {
        ...state,
        loggedIn: false,
        errorMessage: action.payload.message,
        user: null,
      };
    }
    case 'LOGIN_USER_FULFILLED': {
      return {
        ...state,
        loggedIn: true,
        errorMessage: null,
        user: action.payload.email,
      };
    }
    case 'LOGIN_USER_REJECTED': {
      return {
        ...state,
        loggedIn: false,
        errorMessage: action.payload.message,
        user: null,
      };
    }
    case 'LOGOUT_USER_FULFILLED': {
      return {
        ...state,
        loggedIn: false,
        errorMessage: null,
        user: null,
      };
    }
    default:
      return state;
  }
}
