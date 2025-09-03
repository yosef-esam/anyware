export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Quiz {
  _id?: string;
  title: string;
  questions: Question[];
  createdAt?: string;
}
