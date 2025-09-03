import api from "./api";
import type { Quiz } from "../types/quiz";

export const getQuizzes = async () => {
  const res = await api.get<Quiz[]>("/quiz");
  return res.data;
};

export const createQuiz = async (quiz: Quiz) => {
  const res = await api.post<Quiz>("/quiz", quiz);
  return res.data;
};
