import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface UserState {
  isLoggedIn: boolean;
  userId: number;
  username: string;
  email: string;
  password: string;
  nickname: string;
  campus: string;
  profileImgUrl: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  userId: 0,
  username: "",
  email: "",
  password: "",
  nickname: "",
  campus: "",
  profileImgUrl: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    logout: () => initialState,
    saveUserInfo: (state, action: PayloadAction<UserState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.nickname = action.payload.nickname;
      state.campus = action.payload.campus;
      state.profileImgUrl = action.payload.profileImgUrl;
    },
  },
});

export const { login, saveUserInfo, logout } = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.userId;

export const selectUsername = (state: RootState) => state.user.username;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
