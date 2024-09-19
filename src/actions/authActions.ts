export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const signUpRequest = (payload: { email: string; password: string; name: string }) => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const signInRequest = (payload: { email: string; password: string }) => ({
  type: SIGN_IN_REQUEST,
  payload,
});
