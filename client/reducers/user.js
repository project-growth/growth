const firstName = 'first_name';
const lastName = 'last_name';
const profilePic = 'profile_pic';

export default function reducer(state = {
  loggedIn: false,
  errorMessage: null,
  email: null,
}, action) {
  switch (action.type) {
    case 'REG_USER_FULFILLED': {
      return {
        ...state,
        loggedIn: true,
        errorMessage: null,
        email: action.payload.email,
        firstName: action.payload[firstName],
        lastName: action.payload[lastName],
        profilePic: action.payload[profilePic],
      };
    }
    case 'REG_USER_REJECTED': {
      return {
        ...state,
        loggedIn: false,
        errorMessage: action.payload.message,
        email: null,
      };
    }
    case 'LOGIN_USER_FULFILLED': {
      return {
        ...state,
        loggedIn: true,
        errorMessage: null,
        email: action.payload.email,
        firstName: action.payload[firstName],
        lastName: action.payload[lastName],
        profilePic: action.payload[profilePic],
      };
    }
    case 'LOGIN_USER_REJECTED': {
      return {
        ...state,
        loggedIn: false,
        errorMessage: action.payload.message,
        email: null,
      };
    }
    case 'LOGOUT_USER_FULFILLED': {
      return {
        ...state,
        loggedIn: false,
        errorMessage: null,
        email: null,
      };
    }
    default:
      return state;
  }
}
