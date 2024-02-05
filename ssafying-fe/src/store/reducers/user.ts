import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserState {
  isAuthorized: boolean;
  userId: string;
  username: string;
  campus: string;
}

const initialState: UserState = {
  isAuthorized: false,
  userId: "",
  username: "",
  campus: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    logout: () => initialState,
    saveUserInfo: (state, action: PayloadAction<{ username: string }>) => {
      state.username = action.payload.username;
    },
  },
});

export const { login, saveUserInfo, logout } = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.userId;

export const selectUsername = (state: RootState) => state.user.username;

export default userSlice.reducer;
