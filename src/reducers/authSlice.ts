import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

interface AuthPayload {
  email: string;
  password: string;
  name?: string;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpRequest(state, action: PayloadAction<AuthPayload>) {
      state.loading = true;
    },
    signUpSuccess(state) {
      state.loading = false;
      state.isAuthenticated = true;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    signInRequest(state, action: PayloadAction<AuthPayload>) {
      state.loading = true;
    },
    signInSuccess(state) {
      state.loading = false;
      state.isAuthenticated = true;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signInRequest,
  signInSuccess,
  signInFailure,
} = authSlice.actions;

export default authSlice.reducer;
