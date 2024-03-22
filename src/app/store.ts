import { configureStore } from "@reduxjs/toolkit";
import { userModel } from "src/entities/user";

export const store = configureStore({
  reducer: {
    user: userModel.reducer,
  },
});
