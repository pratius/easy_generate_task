import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signInRequest,
  signInSuccess,
  signInFailure,
} from '../reducers/authSlice';

interface AuthAction {
  type: string;
  payload: {
    email: string;
    password: string;
    name?: string;
  };
}

// API calls
const signUpApi = (email: string, password: string, name?: string) =>
  axios.post('http://localhost:3000/auth/signup', { email, password, name });

const signInApi = (email: string, password: string) =>
  axios.post('http://localhost:3000/auth/signin', { email, password });

// Sagas
function* signUpSaga(action: AuthAction): Generator<any, any, any> {
  try {
    // API call to sign up
    const response = yield call(signUpApi, action.payload.email, action.payload.password, action.payload.name);
    
    // Log the response for debugging (optional)
    console.log('Sign-up response:', response);

    // Dispatch success if response is valid
    if (response && response.data) {
      yield put(signUpSuccess(response.data)); // Pass response data if necessary
    } else {
      yield put(signUpFailure('Invalid response from server.'));
    }
  } catch (error: any) {
    console.error('Error during sign-up:', error);
    
    // Handle the case where `error.response` might be undefined
    const errorMessage = error.response?.data?.message || 'Sign-up failed. Please try again.';
    yield put(signUpFailure(errorMessage));
  }
}

function* signInSaga(action: AuthAction): Generator<any, any, any> {
  try {
    // API call to sign in
    const response = yield call(signInApi, action.payload.email, action.payload.password);
    
    // Log the response for debugging (optional)
    console.log('Sign-in response:', response);

    // Dispatch success if response is valid
    if (response && response.data) {
      yield put(signInSuccess(response.data)); // Pass response data if necessary
    } else {
      yield put(signInFailure('Invalid response from server.'));
    }
  } catch (error: any) {
    console.error('Error during sign-in:', error);
    
    // Handle the case where `error.response` might be undefined
    const errorMessage = error.response?.data?.message || 'Sign-in failed. Please try again.';
    yield put(signInFailure(errorMessage));
  }
}

export default function* authSaga() {
  yield takeLatest(signUpRequest.type, signUpSaga);
  yield takeLatest(signInRequest.type, signInSaga);
}
