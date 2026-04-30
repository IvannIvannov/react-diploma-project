import { createContext } from "react";

export type Course = {
  id: string;
  title: string;
  description: string;
};

export type CoursesContextType = {
  courses: Course[];
  addCourse: (course: { title: string; description: string }) => void;
  deleteCourse: (id: string) => void;
};

export const CoursesContext = createContext<CoursesContextType | null>(null);
