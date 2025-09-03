import { Schema, model, Document } from "mongoose";

export interface IQuiz extends Document {
  title: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

const quizSchema = new Schema<IQuiz>(
  {
    title: { type: String, required: true },
    questions: [
      {
        question: { type: String, required: true },
        options: { type: [String], required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default model<IQuiz>("Quiz", quizSchema);
