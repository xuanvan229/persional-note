import * as actionType from './actionType';

const defaultState = {
  isSending: false,
  isLogin: false,
  isRefresh: false,
  error: '',
  user: {},
  token: null,
  access_token_expired: 0,
  refresh_token: null,
  refresh_token_expired: 0,
  user_id: null,
};

export const login = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.LOGIN_SEND_REQUEST: {
      return { ...state, isSending: true };
    }
    case actionType.LOGIN_SEND_REQUEST_SUCCESS: {
      const { data } = action.payload;
      console.log('data action', data);
      return {
        ...state,
        isSending: false,
        isLogin: true,
        token: data.data.token,
        user_id: data.data.userID,
      };
    }
    case actionType.LOGIN_SEND_REQUEST_FAILED: {
      return { ...state, isSending: false };
    }
    case actionType.REGISTER_SEND_REQUEST: {
      return { ...state, isSending: true };
    }
    case actionType.REGISTER_SEND_REQUEST_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isSending: false,
        isLogin: true,
        access_token: data.access_token,
        access_token_expired: data.access_token_expired,
        refresh_token: data.refresh_token,
        refresh_token_expired: data.refresh_token_expired,
      };
    }
    case actionType.REGISTER_SEND_REQUEST_FAILED: {
      return { ...state, isSending: false };
    }
    case actionType.REFRESH_TOKEN: {
      return { ...state, isRefresh: true };
    }
    case actionType.NON_REFRESH_TOKEN: {
      return { ...state, isRefresh: false };
    }
    case actionType.REFRESH_TOKEN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        access_token: data.access_token,
        isRefresh: false,
        access_token_expired: data.access_token_expired,
      };
    }
    case actionType.REFRESH_TOKEN_FAILED: {
      return { ...state, isRefresh: false, isLogin: false };
    }
    case actionType.LOG_OUT: {
      return {
        ...state,
        isLogin: false,
        token: null,
        access_token_expired: 0,
        refresh_token: null,
        refresh_token_expired: 0,
      };
    }
    default:
      return state;
  }
};
