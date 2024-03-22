import { UserResponse } from "./models";
import { apiInstance } from "../base";

const BASE_URL = "/users";

export const getUser = (telegramId: string): Promise<UserResponse> => {
  return apiInstance.get(`${BASE_URL}/${telegramId}`);
};

export const setUserGoal = (goal: number): Promise<void> => {
  return apiInstance.patch(`${BASE_URL}/goal`, { goal });
};
