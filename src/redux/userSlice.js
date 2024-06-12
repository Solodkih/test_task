import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginFetch, logoutFetch } from '../AJAX/index';

export const login = createAsyncThunk(
  'user/login',
  async ({ password, username }) => {
    const userId = await loginFetch({ password, username });
    return userId;
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  const userId = await logoutFetch();
  return userId;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (_, action) => {
      return action.payload;
    });
    builder.addCase(logout.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;

export const getUserId = (state) => {
  return state.user;
};
