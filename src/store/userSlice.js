import { createSlice } from '@reduxjs/toolkit';
import * as authService from '../services/auth';

const initialState = {
  userInfo: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setUserInfo, logout } = userSlice.actions;

export const login = (email, password) => async (dispatch) => {
  const data = await authService.login(email, password);
  dispatch(setUserInfo({ userInfo: data.user, token: data.token }));
};

export const register = (name, email, password) => async (dispatch) => {
  const data = await authService.register(name, email, password);
  dispatch(setUserInfo({ userInfo: data.user, token: data.token }));
};

export default userSlice.reducer;

