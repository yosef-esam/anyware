import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import announcementReducer from "./slices/announcementSlice";
import quizReducer from "./slices/quizSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    announcements: announcementReducer,
    quizzes: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
