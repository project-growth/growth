export default function reducer(state = {
  created: null,
  fetched: null,
}, action) {
  switch (action.type) {
    case 'CREATE_POST_FULFILLED': {
      return {
        ...state,
        created: action.payload.saved,
      };
    }
    case 'CREATE_POST_REJECTED' : {
      return {
        ...state,
        created: false,
      };
    }
    case 'RESET_POST' : {
      return {
        ...state,
        created: null,
      };
    }
    case 'GET_POSTS_FULFILLED': {
      return {
        ...state,
        fetched: true,
      };
    }
    case 'GET_POSTS_REJECTED': {
      return {
        ...state,
        fetched: false,
      };
    }
    default:
      return { ...state };
  }
}
