export default function reducer(state = {
  authenticated: false,
}, action) {
  console.log('auth payload', action.payload);
  switch (action.type) {
    case 'REG_USER_FULFILLED': {
      return {
        ...state,
        authenticated: true,
      };
    }
    case 'LOGIN_USER_FULFILLED': {
      return {
        ...state,
        authenticated: true,
      };
    }
    case 'LOGOUT_USER_FULFILLED': {
      return {
        ...state,
        authenticated: false,
      };
    }
    default:
      return state;
  }
}
