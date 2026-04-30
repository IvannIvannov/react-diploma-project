import { createContext } from "react";

export type Quiz = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  quizzes: Quiz[];
};

export type CoursesContextType = {
  courses: Course[];
  addCourse: (course: { title: string; description: string }) => void;
  deleteCourse: (id: string) => void;
  updateCourse: (
    id: string,
    data: { title: string; description: string },
  ) => void;
  addQuiz: (
    courseId: string,
    quiz: {
      question: string;
      options: string[];
      correctAnswer: number;
    },
  ) => void;
};

export const CoursesContext = createContext<CoursesContextType | null>(null);
