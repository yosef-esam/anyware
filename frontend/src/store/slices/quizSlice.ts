import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Quiz } from "../../types/quiz";
import * as service from "../../services/quizService";

interface QuizState {
  items: Quiz[];
  loading: boolean;
}

const initialState: QuizState = {
  items: [],
  loading: false,
};

export const fetchQuizzes = createAsyncThunk(
  "quizzes/fetchAll",
  service.getQuizzes
);

export const addQuiz = createAsyncThunk("quizzes/add", service.createQuiz);

const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addQuiz.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default quizSlice.reducer;
