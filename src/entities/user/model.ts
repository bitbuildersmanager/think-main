import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userApi } from "src/shared/api";
import { jwtDecode } from "jwt-decode";
import { Cookies } from "react-cookie";

interface User {
  id: string;
  telegramId: string;
  accessToken: string;
  goal: number | null;
  current: number;
  streak: number;
}

interface JwtPayload {
  id: string;
  telegramId: string;
}

const initialState = {} as User;

const USERS_KEY = "user";

export const getUserByTelegramId =
  (telegramId: string) => async (dispatch: Dispatch) => {
    try {
      const data = await userApi.getUser(telegramId);
      if (data.accessToken) {
        dispatch(userModel.actions.setUser(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const setUserGoal = (goal: number) => async (dispatch: Dispatch) => {
  try {
    await userApi.setUserGoal(goal);
    dispatch(userModel.actions.setGoal(goal));
  } catch (error) {
    console.error(error);
  }
};

const userSlice = createSlice({
  name: USERS_KEY,
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<any>) => {
      const jwtPayload = jwtDecode<JwtPayload>(payload.accessToken);
      const newUser: User = {
        ...payload,
        id: jwtPayload.id,
        telegramId: jwtPayload.telegramId,
      };
      Object.assign(state, newUser);
      const cookies = new Cookies();
      cookies.set("accessToken", payload.accessToken, { path: "/" });
    },
    setGoal: (state, action: PayloadAction<any>) => {
      state.goal = action.payload;
    },
  },
});

export const userModel = {
  ...userSlice,
  getUserByTelegramId,
  setUserGoal,
};
